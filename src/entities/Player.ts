import * as THREE from 'three';
import { Actor3D } from './Actor3D';
import { PlayerMesh3D } from './PlayerMesh3D';
import { MovementRigType, PlayerStats, WeaponId } from '../config/types';
import { ARENA_CONFIG, WEAPON_REGISTRY } from '../config/constants';
import { MM_CONFIG } from '../core/MiniMilitiaCore';
import { TileMap3D } from '../world/TileMap3D';
import { RigSystem } from '../systems/RigSystem';

export class Player {
  public stats: PlayerStats;
  public actor: Actor3D;
  public mesh: PlayerMesh3D;
  public scene: THREE.Scene;

  // Mini Militia Jetpack Flight & State
  public jetFuel: number = 100;
  public maxJetFuel: number = 100;
  public fuelDelayTimer: number = 0;
  public isJetFlying: boolean = false;
  public respawnTimer: number = 0;

  public isSliding: boolean = false;
  public slideTimer: number = 0;
  public rigBoostTimer: number = 0;
  public canWallKick: boolean = false;
  public fireCooldown: number = 0;
  public reloadTimer: number = 0;
  public meleeTimer: number = 0;
  public healthRegenDelay: number = 0;
  public c4RegenTimer: number = 0;

  constructor(
    scene: THREE.Scene,
    id: string,
    name: string,
    x: number,
    y: number,
    isLocal: boolean = false,
    rigType: MovementRigType = MovementRigType.BREACH_BOOSTER
  ) {
    this.scene = scene;
    this.actor = new Actor3D(x, y);
    this.actor.customPhysics = true;
    this.mesh = new PlayerMesh3D(scene, !isLocal, name);

    this.stats = {
      id,
      name,
      isBot: !isLocal,
      isLocalPlayer: isLocal,
      hp: 100,
      maxHp: 100,
      armor: 50,
      maxArmor: 50,
      cash: 100000,
      kills: 0,
      deaths: 0,
      wallsDestroyed: 0,
      rigType,
      primaryWeapon: WeaponId.RIFLE_XAG47,
      secondaryWeapon: WeaponId.PISTOL_XAG9,
      activeWeapon: WeaponId.RIFLE_XAG47,
      ammo: {
        [WeaponId.CUTLASS]: 1,
        [WeaponId.PISTOL_XAG9]: 15,
        [WeaponId.AKIMBO_UZIS]: 64,
        [WeaponId.SHOTGUN_AA12]: 20,
        [WeaponId.REVOLVER_JUDGE]: 6,
        [WeaponId.RIFLE_XAG47]: 30,
        [WeaponId.GHOST_SMG]: 32,
        [WeaponId.RICOCHET_SAW]: 10,
        [WeaponId.RAIL_SNIPER]: 4,
        [WeaponId.BUNKER_RPG]: 2,
        [WeaponId.SHOCK_ARC]: 8,
        [WeaponId.VULCAN_MINIGUN]: 150,
      },
      c4Count: 4,
      empCount: 1,
      tearGasCount: 1,
      rigCooldownTimer: 0,
      isExtracted: false,
      isDead: false,
    };

    this.mesh.setWeapon(this.stats.activeWeapon);
    this.syncStatusBillboard();
  }

  public syncStatusBillboard(): void {
    this.mesh.updateStatusBillboard(
      this.stats.hp,
      this.stats.maxHp,
      this.stats.armor,
      this.stats.maxArmor,
      this.stats.name,
      !!this.mesh.crownMesh.visible
    );
  }

  public takeDamage(amount: number, attacker?: Player): boolean {
    if (this.stats.isDead) return false;

    // Fair combat balance: Bots deal tuned damage to the human player so battles are fun and survivable
    if (attacker && attacker.stats.isBot && this.stats.isLocalPlayer) {
      amount *= 0.55;
    }

    // Armor absorbs 65% of damage
    if (this.stats.armor > 0) {
      const armorAbsorb = Math.min(this.stats.armor, amount * 0.65);
      this.stats.armor -= armorAbsorb;
      amount -= armorAbsorb;
    }

    this.stats.hp = Math.max(0, this.stats.hp - amount);
    this.healthRegenDelay = 3.5; // Reset 3.5s cooldown before health regeneration begins
    this.syncStatusBillboard();

    if (this.stats.hp <= 0) {
      this.eliminate(attacker);
      return true;
    }
    return false;
  }

  public heal(amount: number): void {
    if (this.stats.isDead) return;
    this.stats.hp = Math.min(this.stats.maxHp, this.stats.hp + amount);
    this.syncStatusBillboard();
  }

  public eliminate(attacker?: Player): void {
    if (this.stats.isDead) return;
    this.stats.isDead = true;
    this.actor.isDead = true;
    this.respawnTimer = 3.5;
    this.stats.deaths++;

    const impulseX = attacker ? (this.actor.position.x - attacker.actor.position.x) * 10.0 : (Math.random() - 0.5) * 18.0;
    const impulseY = 14.0 + Math.random() * 8.0;
    this.mesh.triggerRagdoll(impulseX, impulseY);

    if (attacker) {
      attacker.stats.kills++;
    }
  }

  public respawn(x: number, y: number): void {
    this.actor.position.set(x, y, 0);
    this.actor.velocity.set(0, 0, 0);
    this.actor.isDead = false;
    this.stats.isDead = false;
    this.respawnTimer = 0;
    this.healthRegenDelay = 0;
    this.stats.hp = this.stats.maxHp;
    this.stats.armor = this.stats.maxArmor;
    this.stats.c4Count = 4;
    this.c4RegenTimer = 0;
    this.jetFuel = this.maxJetFuel;
    this.mesh.isRagdoll = false;
    this.mesh.statusSprite.visible = true;
    this.mesh.rootGroup.rotation.set(0, 0, 0);
    this.mesh.rootGroup.position.set(x, y, 0);
    this.syncStatusBillboard();
  }

  public swapWeapon(): void {
    if (this.stats.activeWeapon === this.stats.primaryWeapon) {
      this.stats.activeWeapon = this.stats.secondaryWeapon;
    } else {
      this.stats.activeWeapon = this.stats.primaryWeapon;
    }
    this.reloadTimer = 0; // Clear reload timer on swap so secondary weapon can fire immediately!
    this.fireCooldown = 0.12;
    this.mesh.setWeapon(this.stats.activeWeapon);
  }

  public reloadWeapon(): void {
    const def = WEAPON_REGISTRY[this.stats.activeWeapon];
    if (this.reloadTimer > 0 || this.stats.ammo[this.stats.activeWeapon] === def.magSize) return;
    this.reloadTimer = def.reloadTime;
  }

  public updateMiniMilitiaMovement(
    dt: number,
    moveX: number,
    isThrusting: boolean,
    isSlamming: boolean,
    flyIntensity: number = 1.0
  ): void {
    if (this.stats.isDead) return;

    const S = MM_CONFIG.WORLD_SCALE;
    const maxRunSpeed = MM_CONFIG.MAX_RUN_SPEED * S;     // ~11.5 m/s
    const groundAccel = MM_CONFIG.GROUND_ACCEL * S;     // ~96.5 m/s^2
    const airAccel = MM_CONFIG.AIR_ACCEL * S;           // ~50.1 m/s^2
    const jetpackThrust = MM_CONFIG.JETPACK_THRUST * S; // ~62.3 m/s^2
    const gravity = MM_CONFIG.GRAVITY * S;             // ~34.1 m/s^2
    const maxAscend = Math.abs(MM_CONFIG.MAX_ASCEND_SPEED) * S; // ~16.3 m/s
    const maxFall = MM_CONFIG.MAX_FALL_SPEED * S;       // ~23.0 m/s

    // 1. HORIZONTAL MOMENTUM & SIGNATURE AIR DRIFT (paused during rig boost dashes)
    if (this.rigBoostTimer <= 0) {
      const accel = this.actor.isGrounded ? groundAccel : airAccel;
      if (moveX !== 0) {
        this.actor.velocity.x += moveX * accel * dt;
        if (Math.abs(this.actor.velocity.x) > maxRunSpeed) {
          this.actor.velocity.x = Math.sign(this.actor.velocity.x) * maxRunSpeed;
        }
      } else {
        // Ground stops quickly (0.82), Air glides smoothly (0.965) like Mini Militia!
        const damping = this.actor.isGrounded ? MM_CONFIG.GROUND_FRICTION : MM_CONFIG.AIR_DRAG;
        this.actor.velocity.x *= Math.pow(damping, dt * 60);
        if (Math.abs(this.actor.velocity.x) < 0.15) this.actor.velocity.x = 0;
      }
    }

    // 2. JETPACK THRUSTER vs GRAVITY CURVE (100% UNLIMITED NITRO)
    this.jetFuel = this.maxJetFuel; // UNLIMITED NITRO: Fuel is permanently 100% full!
    if (isThrusting) {
      this.isJetFlying = true;
      this.actor.isJetFlying = true;
      const thrustStrength = Math.max(0.35, flyIntensity);
      this.actor.velocity.y += jetpackThrust * thrustStrength * dt;
      this.actor.isGrounded = false;
      this.mesh.triggerThrusterBurst(true);
    } else {
      this.isJetFlying = false;
      this.actor.isJetFlying = false;
      if (!this.isSliding) {
        this.mesh.triggerThrusterBurst(false);
      }
    }

    // 3. Downward Navigation (Gentle descent, zero violent slamming)
    if (isSlamming && !this.actor.isGrounded) {
      this.actor.velocity.y -= gravity * 0.5 * dt; // Smooth controlled descent instead of instant violent drop!
    }

    // 4. Apply Gravity & Clamp Terminal Velocities
    this.actor.velocity.y -= gravity * dt;
    if (this.actor.velocity.y > maxAscend) this.actor.velocity.y = maxAscend;
    if (this.actor.velocity.y < -maxFall) this.actor.velocity.y = -maxFall;
  }

  public handleJumpOrJetpack(
    dt: number,
    tileMap: TileMap3D,
    isHoldingJump: boolean,
    flyIntensity: number = 1.0
  ): void {
    this.updateMiniMilitiaMovement(dt, 0, isHoldingJump, false, flyIntensity);
  }

  public performMeleeLunge(
    aimAngle: number,
    allPlayers?: Player[],
    onHit?: (target: Player, damage: number) => void
  ): void {
    if (this.meleeTimer > 0) return;
    this.meleeTimer = 0.45;
    const dirX = Math.cos(aimAngle);
    this.actor.velocity.x = Math.sign(dirX || 1) * 22.0;
    this.mesh.setWeapon(WeaponId.CUTLASS);
    this.mesh.triggerRecoilKick(0.35);

    if (allPlayers) {
      for (const other of allPlayers) {
        if (other.stats.id === this.stats.id || other.stats.isDead) continue;
        const dx = other.actor.position.x - this.actor.position.x;
        const dy = (other.actor.position.y + 0.95) - (this.actor.position.y + 0.95);
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Within 2.2m reach and facing enemy
        const facing = (dx * dirX) >= -0.2;
        if (dist < 2.2 && facing) {
          other.actor.velocity.x = Math.sign(dirX || 1) * 20.0;
          other.actor.velocity.y = 10.0;
          if (onHit) onHit(other, 85);
          break;
        }
      }
    }

    setTimeout(() => {
      this.mesh.setWeapon(this.stats.activeWeapon);
    }, 380);
  }

  public update(dt: number, tileMap: TileMap3D, rigSystem: RigSystem, aimAngle: number): void {
    if (this.stats.isDead) {
      this.mesh.update(dt, this.actor.position.x, this.actor.position.y, 0, 0, false, 0);
      return;
    }

    // Jet fuel regeneration when on ground
    if (this.actor.isGrounded && this.jetFuel < this.maxJetFuel) {
      this.jetFuel = Math.min(this.maxJetFuel, this.jetFuel + dt * 45.0);
    }

    // Health Regeneration: after 3.5s without taking damage, smoothly regenerate HP (+18 HP/s)
    if (this.healthRegenDelay > 0) {
      this.healthRegenDelay -= dt;
    } else if (this.stats.hp < this.stats.maxHp) {
      const prevHp = this.stats.hp;
      this.stats.hp = Math.min(this.stats.maxHp, this.stats.hp + dt * 18.0);
      if (Math.floor(prevHp) !== Math.floor(this.stats.hp)) {
        this.syncStatusBillboard();
      }
    }

    // Passive C4 Recharge: recovers +1 charge every 14.0s (up to max 4)
    if (this.stats.c4Count < 4) {
      this.c4RegenTimer += dt;
      if (this.c4RegenTimer >= 14.0) {
        this.stats.c4Count++;
        this.c4RegenTimer = 0;
      }
    } else {
      this.c4RegenTimer = 0;
    }

    // Cooldown timers
    if (this.stats.rigCooldownTimer > 0) this.stats.rigCooldownTimer -= dt;
    if (this.rigBoostTimer > 0) this.rigBoostTimer -= dt;
    if (this.fireCooldown > 0) this.fireCooldown -= dt;
    if (this.meleeTimer > 0) this.meleeTimer -= dt;

    if (this.reloadTimer > 0) {
      this.reloadTimer -= dt;
      if (this.reloadTimer <= 0) {
        const def = WEAPON_REGISTRY[this.stats.activeWeapon];
        this.stats.ammo[this.stats.activeWeapon] = def.magSize;
      }
    }

    if (this.isSliding) {
      this.slideTimer -= dt;
      if (this.slideTimer <= 0) {
        this.isSliding = false;
      }
    }

    this.actor.updatePhysics(dt, tileMap);

    this.mesh.update(
      dt,
      this.actor.position.x,
      this.actor.position.y,
      this.actor.velocity.x,
      this.actor.velocity.y,
      this.actor.isGrounded,
      aimAngle,
      this.isSliding,
      tileMap
    );
  }

  public destroy(): void {
    this.mesh.destroy(this.scene);
  }
}
