import * as THREE from 'three';
import { Player } from '../entities/Player';
import { Projectile3D } from '../entities/Projectile3D';
import { Throwable3D } from '../entities/Throwable3D';
import { WEAPON_REGISTRY } from '../config/constants';
import { TileType, WeaponId } from '../config/types';
import { TileMap3D } from '../world/TileMap3D';
import { ParticleSystem3D } from './ParticleSystem3D';
import { AudioSynth } from '../core/AudioSynth';

export class WeaponSystem {
  public scene: THREE.Scene;
  public projectiles: Projectile3D[] = [];
  public throwables: Throwable3D[] = [];
  public particles: ParticleSystem3D;
  public audio: AudioSynth;
  public onDamageDealt?: (x: number, y: number, text: string, color?: string) => void;
  public onVaultHit?: (damage: number) => void;

  constructor(scene: THREE.Scene, particles: ParticleSystem3D, audio: AudioSynth) {

    this.scene = scene;
    this.particles = particles;
    this.audio = audio;
  }

  public fireWeapon(
    player: Player,
    aimAngle: number,
    allPlayers?: Player[],
    onElimination?: (victim: Player, killer: Player) => void,
    tileMap?: TileMap3D,
    originX?: number,
    originY?: number
  ): boolean {
    if (player.stats.isDead) return false;
    // Local player enforces cooldown; network events for remote players execute directly
    if (player.stats.isLocalPlayer) {
      if (player.fireCooldown > 0 || player.reloadTimer > 0) return false;
    }

    const weaponDef = WEAPON_REGISTRY[player.stats.activeWeapon];

    // Special Handling: Berserker Melee (Takobin Kano)
    if (weaponDef.id === WeaponId.CUTLASS) {
      player.fireCooldown = weaponDef.fireInterval;
      this.audio.playMeleeSwish();
      this.particles.spawnMeleeSlashArc(player.actor.position.x, player.actor.position.y, aimAngle);

      player.performMeleeLunge(aimAngle, allPlayers, (target, dmg) => {
        const died = target.takeDamage(dmg, player);
        this.audio.playGunshot('saw');
        this.particles.spawnSparks(target.actor.position.x, target.actor.position.y + 1.0, 5, 5, 12);
        if (this.onDamageDealt) {
          this.onDamageDealt(target.actor.position.x, target.actor.position.y + 1.5, `SLICED -${dmg}!`, '#f59e0b');
        }
        if (died) {
          player.stats.cash += 50000;
          if (this.onDamageDealt) {
            this.onDamageDealt(target.actor.position.x, target.actor.position.y + 2.0, 'BOUNTY STEAL! +₦50,000', '#10b981');
          }
          if (onElimination) onElimination(target, player);
        }
      }, tileMap);

      // Check if Cutlass lunge hits Central Vault door
      const distVault = Math.hypot(player.actor.position.x - 40, player.actor.position.y - 3.5);
      if (distVault < 4.8 && this.onVaultHit) {
        this.onVaultHit(150);
        this.audio.playGunshot('saw');
        this.particles.spawnSparks(40, 3.5, 0, 1, 15);
        if (this.onDamageDealt) {
          this.onDamageDealt(40, 5.0, 'VAULT MELEE BREACH -150!', '#f59e0b');
        }
      }

      return true;
    }

    const currentAmmo = player.stats.ammo[weaponDef.id] ?? 0;

    if (player.stats.isLocalPlayer && currentAmmo <= 0) {
      player.reloadWeapon();
      return false;
    }

    if (weaponDef.id !== WeaponId.PISTOL_XAG9 && player.stats.isLocalPlayer) {
      player.stats.ammo[weaponDef.id]--;
    }
    player.fireCooldown = weaponDef.fireInterval;

    // Recoil kick
    player.mesh.triggerRecoilKick(weaponDef.recoilKick);

    // Eject brass casing
    const facingRight = Math.cos(aimAngle) >= 0;
    this.particles.spawnBrassCasing(player.actor.position.x, player.actor.position.y + 0.95, facingRight);

    // Spawn Projectiles
    const pelletCount = weaponDef.pellets || 1;
    const shooterOriginX = originX !== undefined ? originX : player.actor.position.x;
    const shooterOriginY = originY !== undefined ? originY : (player.actor.position.y + 0.95);
    const muzzleX = shooterOriginX + Math.cos(aimAngle) * 0.25;
    const muzzleY = shooterOriginY + Math.sin(aimAngle) * 0.25;

    for (let p = 0; p < pelletCount; p++) {
      const proj = new Projectile3D(
        this.scene,
        weaponDef,
        player.stats.id,
        muzzleX,
        muzzleY,
        aimAngle,
        player.stats.isBot,
        shooterOriginX,
        shooterOriginY
      );
      this.projectiles.push(proj);
    }

    // Audio SFX
    if (weaponDef.id === WeaponId.SHOTGUN_AA12) {
      this.audio.playGunshot('shotgun');
    } else if (weaponDef.id === WeaponId.RAIL_SNIPER) {
      this.audio.playGunshot('sniper');
    } else if (weaponDef.id === WeaponId.RICOCHET_SAW) {
      this.audio.playGunshot('saw');
    } else if (weaponDef.id === WeaponId.VULCAN_MINIGUN) {
      this.audio.playGunshot('minigun');
    } else if (weaponDef.id === WeaponId.PISTOL_XAG9 || weaponDef.id === WeaponId.REVOLVER_JUDGE) {
      this.audio.playGunshot('pistol');
    } else {
      this.audio.playGunshot('rifle');
    }

    // Minigun recoil flight thrust
    if (weaponDef.id === WeaponId.VULCAN_MINIGUN) {
      player.actor.velocity.x -= Math.cos(aimAngle) * 5.0;
      player.actor.velocity.y -= Math.sin(aimAngle) * 5.0;
    }

    return true;
  }

  public handleThrowable(
    player: Player,
    aimAngle: number,
    tileMap: TileMap3D,
    allPlayers: Player[],
    onPlayerKilled?: (victim: Player, killer?: Player) => void
  ): void {
    const activeC4 = this.throwables.find((t) => t.ownerId === player.stats.id && t.type === 'c4' && !t.isDetonated);
    if (activeC4) {
      activeC4.detonate(
        tileMap,
        allPlayers,
        () => {
          this.audio.playExplosion();
          this.particles.spawnExplosionShockwave(activeC4.mesh.position.x, activeC4.mesh.position.y);
          tileMap.spawnDebrisBurst(activeC4.mesh.position.x, activeC4.mesh.position.y, TileType.BRICK_CONCRETE);
          if (this.onDamageDealt) {
            this.onDamageDealt(activeC4.mesh.position.x, activeC4.mesh.position.y + 1.5, 'C4 DETONATED! 💥', '#ef4444');
          }
        },
        player,
        this.onVaultHit,
        onPlayerKilled
      );
      return;
    }

    if (player.stats.c4Count > 0) {
      player.stats.c4Count--;
      const c4 = new Throwable3D(
        this.scene,
        'c4',
        player.stats.id,
        player.actor.position.x,
        player.actor.position.y + 0.95,
        aimAngle
      );
      this.throwables.push(c4);
      this.audio.playC4Beep();
    }
  }

  public update(
    dt: number,
    tileMap: TileMap3D,
    players: Player[],
    onPlayerKilled: (victim: Player, killer?: Player) => void
  ): void {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const proj = this.projectiles[i];

      // Check central vault direct bullet hit first (4.5m radius covers entire 5.2m vault door)
      if (this.onVaultHit && !proj.isDead) {
        const distVault = Math.hypot(proj.mesh.position.x - 40, proj.mesh.position.y - 3.5);
        if (distVault < 4.5) {
          const vDmg = proj.weaponDef.damage * proj.weaponDef.wallDmgMultiplier;
          this.onVaultHit(vDmg);
          this.particles.spawnSparks(proj.mesh.position.x, proj.mesh.position.y, -proj.vx, -proj.vy, 8);
          proj.isDead = true;
          if (this.onDamageDealt) {
            this.onDamageDealt(40, 5.0, `VAULT -${Math.round(vDmg)}`, '#f59e0b');
          }
        }
      }

      proj.update(
        dt,
        tileMap,
        players,
        (tx, ty, dmg) => {
          const destroyed = tileMap.damageTile(tx, ty, dmg);
          this.particles.spawnSparks(tx + 0.5, ty + 0.5, -proj.vx, -proj.vy, 5);
          if (destroyed) {
            const shooter = players.find((p) => p.stats.id === proj.shooterId);
            if (shooter) shooter.stats.wallsDestroyed++;
          }
        },
        (target, dmg) => {
          const attacker = players.find((p) => p.stats.id === proj.shooterId);
          // Friendly fire immunity for Team Deathmatch
          if (attacker && attacker.stats.team && target.stats.team && attacker.stats.team === target.stats.team) {
            return;
          }
          const died = target.takeDamage(dmg, attacker);
          this.particles.spawnSparks(target.actor.position.x, target.actor.position.y + 1.0, -proj.vx, -proj.vy, 10);
          
          if (this.onDamageDealt) {
            const isCrit = dmg > 50;
            this.onDamageDealt(
              target.actor.position.x,
              target.actor.position.y + 1.4,
              isCrit ? `CRIT -${dmg}!` : `-${dmg}`,
              isCrit ? '#f59e0b' : '#ef4444'
            );
          }

          if (died) {
            if (this.onDamageDealt && attacker) {
              this.onDamageDealt(
                target.actor.position.x,
                target.actor.position.y + 2.0,
                'ELIMINATED! +₦15,000',
                '#10b981'
              );
            }
            onPlayerKilled(target, attacker);
          }
        },
        (x, y) => {
          this.audio.playExplosion();
          this.particles.spawnExplosionShockwave(x, y);
          tileMap.spawnDebrisBurst(x, y, TileType.BRICK_CONCRETE);

          if (this.onVaultHit && Math.hypot(x - 40, y - 3.5) < 7.0) {
            this.onVaultHit(400);
            if (this.onDamageDealt) {
              this.onDamageDealt(40, 5.5, 'VAULT BLAST -400!', '#f97316');
            }
          }

          players.forEach((p) => {
            const dist = Math.hypot(p.actor.position.x - x, p.actor.position.y - y);
            if (dist < 6.0) {
              const dmg = Math.round(120 * (1 - dist / 6.0));
              const died = p.takeDamage(dmg);
              if (this.onDamageDealt) {
                this.onDamageDealt(p.actor.position.x, p.actor.position.y + 1.2, `-${dmg}`, '#f97316');
              }
              if (died) onPlayerKilled(p);
            }
          });
        }
      );

      if (proj.isDead) {
        proj.destroy(this.scene);
        this.projectiles.splice(i, 1);
      }

    }

    for (let i = this.throwables.length - 1; i >= 0; i--) {
      const th = this.throwables[i];
      th.update(dt, tileMap);
      if (th.isDetonated) {
        th.destroy(this.scene);
        this.throwables.splice(i, 1);
      }
    }
  }
}
