import * as THREE from 'three';
import { WeaponDef, WeaponId } from '../config/types';
import { TileMap3D } from '../world/TileMap3D';
import { Player } from './Player';

export class Projectile3D {
  public mesh: THREE.Mesh;
  public vx: number;
  public vy: number;
  public weaponDef: WeaponDef;
  public shooterId: string;
  public isDead: boolean = false;
  public life: number = 0;
  public maxLife: number = 3.0;
  public bouncesLeft: number = 0;
  public piercingLeft: number = 0;
  public isBunkerRpg: boolean = false;
  public embeddedTimer: number = -1;
  public originX?: number;
  public originY?: number;
  public isFirstFrame: boolean = true;
  public hitPlayerIds: Set<string> = new Set();

  // Shared static geometries and materials to prevent WebGL memory leaks
  private static sawGeom: THREE.CylinderGeometry | null = null;
  private static sawMat: THREE.MeshStandardMaterial | null = null;
  private static sniperGeom: THREE.CylinderGeometry | null = null;
  private static sniperMat: THREE.MeshStandardMaterial | null = null;
  private static rpgGeom: THREE.ConeGeometry | null = null;
  private static rpgMat: THREE.MeshStandardMaterial | null = null;
  private static bulletGeom: THREE.CylinderGeometry | null = null;
  private static friendlyBulletMat: THREE.MeshStandardMaterial | null = null;
  private static enemyBulletMat: THREE.MeshStandardMaterial | null = null;

  private static initSharedResources(): void {
    if (this.bulletGeom) return;

    // Ricochet saw
    this.sawGeom = new THREE.CylinderGeometry(0.32, 0.32, 0.06, 12);
    this.sawGeom.rotateX(Math.PI * 0.5);
    this.sawMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 4.0,
      metalness: 0.1,
    });

    // Rail sniper
    this.sniperGeom = new THREE.CylinderGeometry(0.06, 0.06, 1.6, 8);
    this.sniperGeom.rotateZ(Math.PI * 0.5);
    this.sniperMat = new THREE.MeshStandardMaterial({
      color: 0xff0044,
      emissive: 0xff0044,
      emissiveIntensity: 4.5,
    });

    // Bunker RPG
    this.rpgGeom = new THREE.ConeGeometry(0.16, 0.6, 10);
    this.rpgGeom.rotateZ(-Math.PI * 0.5);
    this.rpgMat = new THREE.MeshStandardMaterial({
      color: 0xff5500,
      emissive: 0xff3300,
      emissiveIntensity: 3.5,
    });

    // Standard tracer bullet
    this.bulletGeom = new THREE.CylinderGeometry(0.045, 0.045, 0.5, 6);
    this.bulletGeom.rotateZ(Math.PI * 0.5);
    this.friendlyBulletMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      emissive: 0x00f2fe,
      emissiveIntensity: 3.5,
    });
    this.enemyBulletMat = new THREE.MeshStandardMaterial({
      color: 0xff1e56,
      emissive: 0xff1e56,
      emissiveIntensity: 3.5,
    });
  }

  constructor(
    scene: THREE.Scene,
    weaponDef: WeaponDef,
    shooterId: string,
    x: number,
    y: number,
    angle: number,
    isEnemy: boolean = false,
    originX?: number,
    originY?: number
  ) {
    Projectile3D.initSharedResources();

    this.weaponDef = weaponDef;
    this.shooterId = shooterId;
    this.bouncesLeft = weaponDef.bounces || 0;
    this.piercingLeft = weaponDef.piercing || 0;
    this.isBunkerRpg = weaponDef.id === WeaponId.BUNKER_RPG;
    this.originX = originX;
    this.originY = originY;

    const finalAngle = angle + (Math.random() - 0.5) * weaponDef.spread;
    this.vx = Math.cos(finalAngle) * weaponDef.speed;
    this.vy = Math.sin(finalAngle) * weaponDef.speed;

    let geom: THREE.BufferGeometry;
    let mat: THREE.Material;

    if (weaponDef.id === WeaponId.RICOCHET_SAW) {
      geom = Projectile3D.sawGeom!;
      mat = Projectile3D.sawMat!;
    } else if (weaponDef.id === WeaponId.RAIL_SNIPER) {
      geom = Projectile3D.sniperGeom!;
      mat = Projectile3D.sniperMat!;
    } else if (weaponDef.id === WeaponId.BUNKER_RPG) {
      geom = Projectile3D.rpgGeom!;
      mat = Projectile3D.rpgMat!;
    } else {
      geom = Projectile3D.bulletGeom!;
      mat = isEnemy ? Projectile3D.enemyBulletMat! : Projectile3D.friendlyBulletMat!;
    }

    this.mesh = new THREE.Mesh(geom, mat);
    this.mesh.position.set(x, y, 0.1);
    this.mesh.rotation.z = finalAngle;
    scene.add(this.mesh);
  }

  public update(
    dt: number,
    tileMap: TileMap3D,
    players: Player[],
    onHitTile: (x: number, y: number, dmg: number) => void,
    onHitPlayer: (player: Player, dmg: number) => void,
    onExplosion: (x: number, y: number) => void
  ): void {
    if (this.isDead) return;
    this.life += dt;
    if (this.life >= this.maxLife) {
      this.isDead = true;
      return;
    }

    if (this.embeddedTimer > 0) {
      this.embeddedTimer -= dt;
      if (this.embeddedTimer <= 0) {
        onExplosion(this.mesh.position.x, this.mesh.position.y);
        this.isDead = true;
      }
      return;
    }

    const prevBulletX = this.mesh.position.x;
    const prevBulletY = this.mesh.position.y;

    // For player hit registration, frame 1 swept ray starts right from shooter's center (guarantees point-blank hits)
    const checkStartX = (this.isFirstFrame && this.originX !== undefined) ? this.originX : prevBulletX;
    const checkStartY = (this.isFirstFrame && this.originY !== undefined) ? this.originY : prevBulletY;
    const isFrameOne = this.isFirstFrame;
    this.isFirstFrame = false;

    const nextX = prevBulletX + this.vx * dt;
    const nextY = prevBulletY + this.vy * dt;

    this.mesh.position.x = nextX;
    this.mesh.position.y = nextY;

    if (this.weaponDef.id === WeaponId.RICOCHET_SAW) {
      this.mesh.rotation.z += dt * 30.0;
    }

    // 1. Continuous Swept Collision Against Players (From checkStart to nextX)
    const segX = nextX - checkStartX;
    const segY = nextY - checkStartY;
    const segLenSq = segX * segX + segY * segY;

    for (let i = 0; i < players.length; i++) {
      const p = players[i];
      if (p.stats.id === this.shooterId || p.stats.isDead) continue;
      if (this.hitPlayerIds.has(p.stats.id)) continue;

      const targetX = p.actor.position.x;
      const targetY = p.actor.position.y + 0.95; // Player center of mass

      // Project target center onto bullet line segment
      let t = 0;
      if (segLenSq > 0.0001) {
        t = ((targetX - checkStartX) * segX + (targetY - checkStartY) * segY) / segLenSq;
        t = Math.max(0, Math.min(1, t));
      }

      const closestX = checkStartX + t * segX;
      const closestY = checkStartY + t * segY;

      const distX = targetX - closestX;
      const distY = targetY - closestY;

      // Reliable, generous commando hitbox (0.80m horizontal, 1.25m vertical)
      if (Math.abs(distX) < 0.80 && Math.abs(distY) < 1.25) {
        this.hitPlayerIds.add(p.stats.id);
        onHitPlayer(p, this.weaponDef.damage);
        if (this.isBunkerRpg) {
          onExplosion(closestX, closestY);
        }
        if (this.piercingLeft > 0) {
          this.piercingLeft--;
        } else {
          this.isDead = true;
          return;
        }
      }
    }

    // 2. Continuous Check Against 3D TileMap along segment (from actual bullet position)
    const tileSegX = nextX - prevBulletX;
    const tileSegY = nextY - prevBulletY;
    const tileSegLenSq = tileSegX * tileSegX + tileSegY * tileSegY;
    const sampleCount = Math.max(2, Math.ceil(Math.sqrt(tileSegLenSq)));
    for (let s = 1; s <= sampleCount; s++) {
      const stepT = s / sampleCount;
      const sampleX = prevBulletX + tileSegX * stepT;
      const sampleY = prevBulletY + tileSegY * stepT;
      const tx = Math.floor(sampleX);
      const ty = Math.floor(sampleY);

      if (tileMap.isSolid(tx, ty)) {
        // Muzzle clearing safeguard: prevent bullets from dying on frame 1 if the player's muzzle is touching a platform edge
        if (isFrameOne && this.originX !== undefined && this.originY !== undefined) {
          const distFromShooter = Math.hypot(sampleX - this.originX, sampleY - this.originY);
          if (distFromShooter < 0.65) {
            continue;
          }
        }
        const tileDmg = this.weaponDef.damage * this.weaponDef.wallDmgMultiplier;
        onHitTile(tx, ty, tileDmg);

        if (this.bouncesLeft > 0) {
          this.bouncesLeft--;
          const prevTileX = Math.floor(prevBulletX);
          const prevTileY = Math.floor(prevBulletY);
          if (prevTileX !== tx) this.vx = -this.vx;
          if (prevTileY !== ty) this.vy = -this.vy;
          return;
        }

        if (this.piercingLeft > 0) {
          this.piercingLeft--;
          return;
        }

        if (this.isBunkerRpg && this.embeddedTimer < 0) {
          this.vx = 0;
          this.vy = 0;
          this.embeddedTimer = 0.35;
          return;
        }

        this.isDead = true;
        return;
      }
    }
  }

  public destroy(scene: THREE.Scene): void {
    scene.remove(this.mesh);
  }
}
