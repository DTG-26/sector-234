import * as THREE from 'three';
import { TileMap3D } from '../world/TileMap3D';
import { Player } from './Player';

export class Throwable3D {
  public mesh: THREE.Mesh;
  public ledLight: THREE.PointLight;
  public type: 'c4' | 'emp' | 'teargas';
  public ownerId: string;
  public isStuck: boolean = false;
  public isDetonated: boolean = false;
  public vx: number = 0;
  public vy: number = 0;
  public timer: number = 0;

  private static sharedGeom: THREE.BoxGeometry | null = null;
  private static c4Mat: THREE.MeshStandardMaterial | null = null;
  private static empMat: THREE.MeshStandardMaterial | null = null;
  private static teargasMat: THREE.MeshStandardMaterial | null = null;

  private static initSharedResources(): void {
    if (this.sharedGeom) return;
    this.sharedGeom = new THREE.BoxGeometry(0.35, 0.22, 0.2);
    this.c4Mat = new THREE.MeshStandardMaterial({ color: 0x3f3f46, roughness: 0.4 });
    this.empMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.4 });
    this.teargasMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.4 });
  }

  constructor(
    scene: THREE.Scene,
    type: 'c4' | 'emp' | 'teargas',
    ownerId: string,
    x: number,
    y: number,
    throwAngle: number
  ) {
    Throwable3D.initSharedResources();

    this.type = type;
    this.ownerId = ownerId;

    const speed = 28.0;
    this.vx = Math.cos(throwAngle) * speed;
    this.vy = Math.sin(throwAngle) * speed + 6.5;

    // Mesh
    const mat = type === 'c4' ? Throwable3D.c4Mat! : (type === 'emp' ? Throwable3D.empMat! : Throwable3D.teargasMat!);
    this.mesh = new THREE.Mesh(Throwable3D.sharedGeom!, mat);
    this.mesh.position.set(x, y, 0);
    scene.add(this.mesh);

    // Blinking LED light
    const ledColor = type === 'c4' ? 0xef4444 : (type === 'emp' ? 0x38bdf8 : 0x22c55e);
    this.ledLight = new THREE.PointLight(ledColor, 2.0, 4.0);
    this.mesh.add(this.ledLight);
  }

  public update(dt: number, tileMap: TileMap3D): void {
    if (this.isDetonated) return;
    this.timer += dt;

    // Blink LED every 0.2s
    const blink = Math.sin(this.timer * 16.0) > 0;
    this.ledLight.intensity = blink ? 3.5 : 0.2;

    if (!this.isStuck) {
      this.vy += -24.0 * dt; // tuned ballistic arc
      this.mesh.position.x += this.vx * dt;
      this.mesh.position.y += this.vy * dt;
      this.mesh.rotation.z += dt * 6.0;

      // Check collision with tile
      const tx = Math.floor(this.mesh.position.x);
      const ty = Math.floor(this.mesh.position.y);

      if (tileMap.isSolid(tx, ty)) {
        this.isStuck = true;
        this.vx = 0;
        this.vy = 0;
      }
    }
  }

  public detonate(
    tileMap: TileMap3D,
    players: Player[],
    onExplosionSound: () => void,
    attacker?: Player,
    onVaultHit?: (damage: number) => void,
    onPlayerKilled?: (victim: Player, killer?: Player) => void
  ): void {
    if (this.isDetonated) return;
    this.isDetonated = true;
    onExplosionSound();

    const posX = this.mesh.position.x;
    const posY = this.mesh.position.y;

    if (this.type === 'c4') {
      // Breaches a devastating 5x5 block area of brick/concrete
      const centerTx = Math.floor(posX);
      const centerTy = Math.floor(posY);
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          tileMap.destroyTile(centerTx + dx, centerTy + dy);
        }
      }

      // Check Vault breach damage (450 DMG within 6.5m)
      if (onVaultHit && Math.hypot(posX - 40, posY - 3.5) < 6.5) {
        onVaultHit(450);
      }

      // Heavy combat damage to nearby players (240 DMG max falloff over 10m radius)
      players.forEach((p) => {
        const dist = p.actor.position.distanceTo(this.mesh.position);
        if (dist < 10.0) {
          if (
            attacker?.stats.team &&
            p.stats.team &&
            attacker.stats.team !== 'none' &&
            p.stats.team !== 'none' &&
            attacker.stats.team === p.stats.team
          ) {
            return;
          }
          const dmg = Math.round(240 * (1 - dist / 10.0));
          const died = p.takeDamage(dmg, attacker);
          if (died && onPlayerKilled) {
            onPlayerKilled(p, attacker);
          }
        }
      });
    } else if (this.type === 'emp') {
      // Disables movement rigs for 8s
      players.forEach((p) => {
        const dist = p.actor.position.distanceTo(this.mesh.position);
        if (dist < 8.0) {
          p.stats.rigCooldownTimer = 8.0;
        }
      });
    }
  }

  public destroy(scene: THREE.Scene): void {
    if (this.ledLight) {
      this.mesh.remove(this.ledLight);
      this.ledLight.dispose();
    }
    scene.remove(this.mesh);
  }
}
