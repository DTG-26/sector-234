import * as THREE from 'three';
import { Player } from '../entities/Player';
import { TileMap3D } from '../world/TileMap3D';
import { WeaponSystem } from './WeaponSystem';
import { RigSystem } from './RigSystem';
import { Pickup3D } from '../entities/Pickup3D';

export class BotAI {
  public player: Player;
  private changeDecisionTimer: number = 0;
  private targetPlayer: Player | null = null;
  private targetPickup: Pickup3D | null = null;
  private aimAngle: number = 0;
  private facingDir: 1 | -1 = 1;

  // Mini Militia Smooth Flight & Navigation
  private jetpackFlightTimer: number = 0;
  private jetpackCooldownTimer: number = 0;

  // Balanced Human Combat: Reaction, Burst Fire & Inaccuracy
  private reactionTimer: number = 0.4;
  private burstFiringTimer: number = 0.45;
  private burstCooldownTimer: number = 0.8;
  private lastTargetId: string | null = null;

  constructor(player: Player) {
    this.player = player;
    this.changeDecisionTimer = Math.random() * 1.5;
  }

  // Fast Line of sight check to ensure bots never shoot through walls!
  private hasLineOfSight(x0: number, y0: number, x1: number, y1: number, tileMap: TileMap3D): boolean {
    const startX = Math.floor(x0);
    const startY = Math.floor(y0);
    const endX = Math.floor(x1);
    const endY = Math.floor(y1);

    const dx = Math.abs(endX - startX);
    const dy = Math.abs(endY - startY);
    const sx = startX < endX ? 1 : -1;
    const sy = startY < endY ? 1 : -1;
    let err = dx - dy;

    let cx = startX;
    let cy = startY;

    while (cx !== endX || cy !== endY) {
      if ((cx !== startX || cy !== startY) && (cx !== endX || cy !== endY)) {
        if (tileMap.isSolid(cx, cy)) {
          return false; // Solid wall blocks line of sight
        }
      }
      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        cx += sx;
      }
      if (e2 < dx) {
        err += dx;
        cy += sy;
      }
    }
    return true; // Clear line of sight
  }

  public update(
    dt: number,
    allPlayers: Player[],
    pickups: Pickup3D[],
    tileMap: TileMap3D,
    weaponSystem: WeaponSystem,
    rigSystem: RigSystem,
    isExtractionActive: boolean,
    extractionPos: THREE.Vector3
  ): void {
    if (this.player.stats.isDead) {
      // Continue updating ragdoll physics and mesh so dead bots don't freeze in mid-air
      this.player.update(dt, tileMap, rigSystem, 0);
      return;
    }

    // Bots fuel regeneration safeguard so they never starve and flutter-hop
    if (this.player.jetFuel < this.player.maxJetFuel) {
      this.player.jetFuel = Math.min(this.player.maxJetFuel, this.player.jetFuel + dt * 45.0);
    }

    this.changeDecisionTimer -= dt;
    if (this.jetpackCooldownTimer > 0) this.jetpackCooldownTimer -= dt;

    // 1. Target Evaluation & Selection
    if (this.changeDecisionTimer <= 0) {
      this.changeDecisionTimer = 0.9 + Math.random() * 0.7;

      if (isExtractionActive && Math.random() > 0.35) {
        this.targetPlayer = null;
        this.targetPickup = null;
      } else {
        // Find nearest cash pickup
        let nearestPickup: Pickup3D | null = null;
        let minPickupDist = 14.0;

        for (let i = 0; i < pickups.length; i++) {
          const pk = pickups[i];
          if (pk.isCollected) continue;
          const d = this.player.actor.position.distanceTo(pk.mesh.position);
          if (d < minPickupDist) {
            minPickupDist = d;
            nearestPickup = pk;
          }
        }
        this.targetPickup = nearestPickup;

        // Find nearest enemy or Odogwu crown wearer (Free-For-All)
        let bestTarget: Player | null = null;
        let bestScore = 999;

        for (let i = 0; i < allPlayers.length; i++) {
          const other = allPlayers[i];
          if (other.stats.id === this.player.stats.id || other.stats.isDead) continue;

          const dist = this.player.actor.position.distanceTo(other.actor.position);
          // Prioritize Odogwu crown, otherwise fight whichever player or bot is closest!
          const priorityMultiplier = other.mesh.crownMesh.visible ? 0.45 : 1.0;
          const score = dist * priorityMultiplier;

          if (score < bestScore) {
            bestScore = score;
            bestTarget = other;
          }
        }

        if (bestTarget && bestTarget.stats.id !== this.lastTargetId) {
          this.lastTargetId = bestTarget.stats.id;
          this.reactionTimer = 0.35 + Math.random() * 0.25; // Human reaction delay
        }

        this.targetPlayer = bestTarget;
      }
    }

    // 2. Navigation & Obstacle Traversal
    let targetX = this.player.actor.position.x;
    let targetY = this.player.actor.position.y;

    if (isExtractionActive && !this.player.stats.isExtracted) {
      targetX = extractionPos.x;
      targetY = extractionPos.y;
    } else if (this.targetPickup) {
      targetX = this.targetPickup.mesh.position.x;
      targetY = this.targetPickup.mesh.position.y;
    } else if (this.targetPlayer) {
      targetX = this.targetPlayer.actor.position.x;
      targetY = this.targetPlayer.actor.position.y;
    }

    const diffX = targetX - this.player.actor.position.x;
    const diffY = targetY - this.player.actor.position.y;

    // Direction Hysteresis: Prevent rapid 60Hz flipping/twitching
    if (Math.abs(diffX) > 1.2) {
      this.facingDir = diffX > 0 ? 1 : -1;
    }

    // Determine horizontal movement intention
    let moveX = 0;
    if (Math.abs(diffX) > 1.5) {
      moveX = this.facingDir;
    }

    // Check Ceiling directly overhead before thrusting upward
    const botTileX = Math.floor(this.player.actor.position.x);
    const headTileY = Math.floor(this.player.actor.position.y + 2.05);
    const hasCeilingAbove = tileMap.isSolid(botTileX, headTileY);

    // Check Obstacles ahead
    const aheadTileX = Math.floor(this.player.actor.position.x + this.facingDir * 0.95);
    const footTileY = Math.floor(this.player.actor.position.y + 0.2);
    const midTileY = Math.floor(this.player.actor.position.y + 1.1);
    const isTallObstacleAhead = tileMap.isSolid(aheadTileX, footTileY) && tileMap.isSolid(aheadTileX, midTileY);

    // Smooth Jetpack Flight logic without ceiling bumping or endless hopping
    let isThrusting = false;
    if (!hasCeilingAbove) {
      if ((isTallObstacleAhead || diffY > 1.6) && this.jetpackCooldownTimer <= 0 && this.jetpackFlightTimer <= 0) {
        this.jetpackFlightTimer = 0.8 + Math.random() * 0.5;
        this.jetpackCooldownTimer = 1.2;
      }
    }

    if (this.jetpackFlightTimer > 0) {
      this.jetpackFlightTimer -= dt;
      // If we reached the target height, smoothly stop thrusting to land cleanly
      if (this.player.actor.position.y >= targetY + 0.5) {
        this.jetpackFlightTimer = 0;
      } else if (!hasCeilingAbove) {
        isThrusting = true;
      }
    }

    // Apply movement through the exact same Mini Militia momentum physics as the human player
    this.player.updateMiniMilitiaMovement(dt, moveX, isThrusting, false, 1.0);

    // 3. Balanced Combat & Humanized Aiming
    if (this.targetPlayer && !this.targetPlayer.stats.isDead) {
      const aimDx = this.targetPlayer.actor.position.x - this.player.actor.position.x;
      const aimDy = (this.targetPlayer.actor.position.y + 0.95) - (this.player.actor.position.y + 0.95);
      const dist = Math.sqrt(aimDx * aimDx + aimDy * aimDy);

      // Human aim error (+/- 8 degrees) so bots don't hit 100% of shots
      const aimSpread = (Math.sin(performance.now() * 0.005 + this.player.actor.position.x) * 0.16);
      this.aimAngle = Math.atan2(aimDy, aimDx) + aimSpread;
      this.facingDir = Math.cos(this.aimAngle) >= 0 ? 1 : -1;

      // Check Line-of-Sight and Reasonable Engagement Range (18 units max)
      const hasLOS = dist < 18.0 && this.hasLineOfSight(
        this.player.actor.position.x,
        this.player.actor.position.y + 0.95,
        this.targetPlayer.actor.position.x,
        this.targetPlayer.actor.position.y + 0.95,
        tileMap
      );

      if (hasLOS) {
        if (this.reactionTimer > 0) {
          this.reactionTimer -= dt;
        } else {
          // Burst Fire Pattern (Fire for 0.4s, Pause for 0.7s)
          if (this.burstCooldownTimer > 0) {
            this.burstCooldownTimer -= dt;
          } else {
            this.burstFiringTimer -= dt;
            weaponSystem.fireWeapon(this.player, this.aimAngle);

            if (this.burstFiringTimer <= 0) {
              this.burstCooldownTimer = 0.65 + Math.random() * 0.45; // 0.65s to 1.1s pause
              this.burstFiringTimer = 0.35 + Math.random() * 0.25;  // 0.35s to 0.6s burst
            }
          }
        }
      } else {
        this.burstCooldownTimer = 0.4;
      }

      // Close combat Cutlass melee lunge (Only within 2.2m reach)
      if (dist < 2.2 && Math.random() < 0.03) {
        this.player.performMeleeLunge(this.aimAngle, allPlayers, (target, dmg) => {
          target.takeDamage(dmg, this.player);
        });
      }

      // Tactical Rig activation (Safeguarded against phasing into solid tiles)
      if (dist < 6.5 && this.player.stats.rigCooldownTimer <= 0 && Math.random() < 0.02) {
        rigSystem.activateRig(
          this.player,
          tileMap,
          this.aimAngle,
          this.facingDir
        );
        this.player.stats.rigCooldownTimer = 5.0;
      }
    } else {
      this.aimAngle = this.facingDir > 0 ? 0 : Math.PI;
    }

    // Update Player physics & mesh
    this.player.update(dt, tileMap, rigSystem, this.aimAngle);
  }
}
