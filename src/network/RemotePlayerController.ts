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
    this.targetX = state.x;
    this.targetY = state.y;
    this.targetVx = state.vx;
    this.targetVy = state.vy;
    this.targetAimAngle = state.aimAngle;
    this.targetFacingRight = state.facingRight;
    this.targetIsJetFlying = state.isJetFlying;
    this.targetIsGrounded = state.isGrounded;
    this.targetIsSliding = state.isSliding;

    this.player.stats.hp = state.hp;
    this.player.stats.armor = state.armor;
    this.player.jetFuel = state.fuel;
    this.player.stats.isDead = state.isDead;

    if (this.player.stats.activeWeapon !== state.activeWeapon) {
      this.player.stats.activeWeapon = state.activeWeapon;
      this.player.mesh.setWeapon(state.activeWeapon);
    }
  }

  public update(dt: number): void {
    if (this.player.stats.isDead) return;

    // 1. Smooth Positional Interpolation (Lerp with speed-adaptive factor)
    const lerpFactor = Math.min(1.0, dt * 18.0);
    this.player.actor.position.x += (this.targetX - this.player.actor.position.x) * lerpFactor;
    this.player.actor.position.y += (this.targetY - this.player.actor.position.y) * lerpFactor;
    this.player.actor.velocity.x = this.targetVx;
    this.player.actor.velocity.y = this.targetVy;

    // 2. Smooth Aim Angle Interpolation
    let diff = this.targetAimAngle - this.currentAimAngle;
    while (diff < -Math.PI) diff += Math.PI * 2;
    while (diff > Math.PI) diff -= Math.PI * 2;
    this.currentAimAngle += diff * Math.min(1.0, dt * 22.0);

    // 3. Update 3D Articulated Operator Mesh
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

    // 4. Jetpack Visuals for Remote Players
    if (this.targetIsJetFlying && Math.random() < 0.5) {
      this.particles.spawnJetpackSmoke(
        this.player.actor.position.x + (this.targetFacingRight ? -0.2 : 0.2),
        this.player.actor.position.y + 0.35,
        this.targetVx * 0.5,
        -3.5
      );
    }
  }
}
