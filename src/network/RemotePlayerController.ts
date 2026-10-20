import { Player } from '../entities/Player';
import { ParticleSystem3D } from '../systems/ParticleSystem3D';
import { NetworkPlayerState } from './NetworkTypes';

export class RemotePlayerController {
  public player: Player;
  private particles: ParticleSystem3D;

  private targetX: number;
  private targetY: number;
  private targetVx: number;
  private targetVy: number;
  private targetAimAngle: number;
  private currentAimAngle: number;
  private targetFacingRight: boolean;
  private targetIsJetFlying: boolean;
  private targetIsGrounded: boolean;
  private targetIsSliding: boolean;
  private lastDamageTime: number = 0;

  constructor(player: Player, particles: ParticleSystem3D) {
    this.player = player;
    this.particles = particles;
    this.targetX = player.actor.position.x;
    this.targetY = player.actor.position.y;
    this.targetVx = 0;
    this.targetVy = 0;
    this.targetAimAngle = 0;
    this.currentAimAngle = 0;
    this.targetFacingRight = true;
    this.targetIsJetFlying = false;
    this.targetIsGrounded = true;
    this.targetIsSliding = false;
  }

  public applySnapshot(state: NetworkPlayerState): void {
    const now = performance.now();

    this.targetX = state.x;
    this.targetY = state.y;
    this.targetVx = state.vx;
    this.targetVy = state.vy;
    this.targetAimAngle = state.aimAngle;
    this.targetFacingRight = state.facingRight;
    this.targetIsJetFlying = state.isJetFlying;
    this.targetIsGrounded = state.isGrounded;
    this.targetIsSliding = state.isSliding;

    // Health Reconciliation:
    // If local player recently dealt damage to this remote player (< 600ms),
    // don't let stale snapshots from the server bounce their HP back up!
    const recentLocalDamage = (now - this.lastDamageTime) < 600;
    if (!recentLocalDamage || state.hp <= this.player.stats.hp) {
      this.player.stats.hp = state.hp;
    }

    this.player.stats.armor = state.armor;
    this.player.jetFuel = state.fuel;
    this.player.stats.isDead = state.isDead;
    this.player.syncStatusBillboard();

    if (this.player.stats.activeWeapon !== state.activeWeapon) {
      this.player.stats.activeWeapon = state.activeWeapon;
      this.player.mesh.setWeapon(state.activeWeapon);
    }
  }

  public notifyLocalDamageDealt(): void {
    this.lastDamageTime = performance.now();
  }

  public update(dt: number): void {
    if (this.player.stats.isDead) return;

    // 1. DEAD RECKONING: Extrapolate target position using current velocity
    // Between network snapshots (every 28-35ms), remote players NEVER stop or stutter!
    this.targetX += this.targetVx * dt;
    this.targetY += this.targetVy * dt;

    if (!this.targetIsGrounded && !this.targetIsJetFlying) {
      // Natural aerial gravity so airborne opponents curve and fall smoothly
      this.targetVy -= 28.0 * dt;
    }

    // 2. Adaptive Smooth Positional Convergence
    const dx = this.targetX - this.player.actor.position.x;
    const dy = this.targetY - this.player.actor.position.y;
    const distSq = dx * dx + dy * dy;

    if (distSq > 36.0) {
      // Hard snap on large teleport / respawn (> 6 meters)
      this.player.actor.position.x = this.targetX;
      this.player.actor.position.y = this.targetY;
    } else {
      // Smooth adaptive lerp: higher convergence rate if falling behind, silky smooth glide when close
      const lerpSpeed = distSq > 1.5 ? 26.0 : 16.0;
      const factor = Math.min(1.0, dt * lerpSpeed);
      this.player.actor.position.x += dx * factor;
      this.player.actor.position.y += dy * factor;
    }

    this.player.actor.velocity.x = this.targetVx;
    this.player.actor.velocity.y = this.targetVy;

    // 3. Smooth Aim Angle Interpolation
    let diff = this.targetAimAngle - this.currentAimAngle;
    while (diff < -Math.PI) diff += Math.PI * 2;
    while (diff > Math.PI) diff -= Math.PI * 2;
    this.currentAimAngle += diff * Math.min(1.0, dt * 25.0);

    // 4. Update 3D Articulated Operator Mesh
    this.player.mesh.update(
      dt,
      this.player.actor.position.x,
      this.player.actor.position.y,
      this.targetVx,
      this.targetVy,
      this.targetIsGrounded,
      this.currentAimAngle,
      this.targetIsSliding
    );

    // 5. Jetpack Visuals for Remote Players
    if (this.targetIsJetFlying && Math.random() < 0.6) {
      this.particles.spawnJetpackSmoke(
        this.player.actor.position.x + (this.targetFacingRight ? -0.2 : 0.2),
        this.player.actor.position.y + 0.35,
        this.targetVx * 0.5,
        -3.5
      );
    }
  }
}
