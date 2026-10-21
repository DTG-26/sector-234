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
  private extrapolateTime: number = 0;

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
    const wasDead = this.player.stats.isDead || this.player.mesh.isRagdoll;

    this.extrapolateTime = 0;
    this.targetX = state.x;
    this.targetY = state.y;
    this.targetVx = state.vx;
    this.targetVy = state.vy;
    this.targetAimAngle = state.aimAngle;
    this.targetFacingRight = state.facingRight;
    this.targetIsJetFlying = state.isJetFlying;
    this.targetIsGrounded = state.isGrounded;
    this.targetIsSliding = state.isSliding;

    // Resurrect remote player if alive again (prevents stuck ragdoll / invisibility bug)
    if (!state.isDead && wasDead) {
      this.player.stats.isDead = false;
      this.player.actor.isDead = false;
      this.player.mesh.isRagdoll = false;
      this.player.actor.position.set(state.x, state.y, 0);
      this.player.actor.velocity.set(state.vx, state.vy, 0);
      this.player.mesh.rootGroup.position.set(state.x, state.y, 0);
      this.player.mesh.rootGroup.rotation.set(0, 0, 0);
      this.player.mesh.rootGroup.visible = true;
      this.player.mesh.statusSprite.visible = true;
      this.player.respawn(state.x, state.y);
    } else if (state.isDead && !wasDead) {
      this.player.stats.isDead = true;
      this.player.actor.isDead = true;
      this.player.mesh.triggerRagdoll(state.vx * 0.5, 8.0);
    }

    // Health Reconciliation:
    // If local player recently dealt damage to this remote player (< 600ms),
    // don't let stale snapshots from the network bounce their HP back up
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
    if (this.player.stats.isDead) {
      // Continue updating ragdoll physics while dead so it falls cleanly
      if (this.player.mesh.isRagdoll) {
        this.player.mesh.update(
          dt,
          this.player.actor.position.x,
          this.player.actor.position.y,
          0,
          0,
          false,
          0
        );
      }
      return;
    }

    // Safeguard: Ensure mesh is never stuck in ragdoll or hidden while alive
    if (this.player.mesh.isRagdoll) {
      this.player.mesh.isRagdoll = false;
      this.player.mesh.rootGroup.rotation.set(0, 0, 0);
    }
    this.player.mesh.rootGroup.visible = true;
    this.player.mesh.statusSprite.visible = true;
    this.player.mesh.rootGroup.position.z = 0; // Lock to 2D gameplay plane to prevent Z-depth clipping

    // 1. DEAD RECKONING with extrapolation window limit (caps drift on packet jitter)
    this.extrapolateTime += dt;
    if (this.extrapolateTime < 0.12) {
      this.targetX += this.targetVx * dt;
      this.targetY += this.targetVy * dt;

      if (!this.targetIsGrounded && !this.targetIsJetFlying) {
        // Natural aerial gravity for smooth arcs
        this.targetVy -= 28.0 * dt;
      }
    }

    // 2. Exponential Frame-Rate Independent Smoothing (Zero micro-stutter)
    const dx = this.targetX - this.player.actor.position.x;
    const dy = this.targetY - this.player.actor.position.y;
    const distSq = dx * dx + dy * dy;

    if (distSq > 36.0) {
      // Hard snap only on respawn / teleport (> 6 meters)
      this.player.actor.position.x = this.targetX;
      this.player.actor.position.y = this.targetY;
    } else {
      const blend = 1.0 - Math.exp(-22.0 * dt);
      this.player.actor.position.x += (this.targetX - this.player.actor.position.x) * blend;
      this.player.actor.position.y += (this.targetY - this.player.actor.position.y) * blend;
    }

    this.player.actor.velocity.x = this.targetVx;
    this.player.actor.velocity.y = this.targetVy;

    // 3. Shortest Angular Aim Interpolation
    let diff = this.targetAimAngle - this.currentAimAngle;
    while (diff < -Math.PI) diff += Math.PI * 2;
    while (diff > Math.PI) diff -= Math.PI * 2;
    const aimBlend = 1.0 - Math.exp(-25.0 * dt);
    this.currentAimAngle += diff * aimBlend;

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
