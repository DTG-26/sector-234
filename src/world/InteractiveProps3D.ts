import * as THREE from 'three';
import { Player } from '../entities/Player';

export interface Zipline {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  lineMesh: THREE.Line;
}

export class InteractiveProps3D {
  public scene: THREE.Scene;
  public ziplines: Zipline[] = [];
  public isBlackoutActive: boolean = false;
  public blackoutTimer: number = 0;
  public transformerRepairTimer: number = 0;

  // Vault Door
  public vaultDoorMesh: THREE.Mesh | null = null;
  public isVaultOpen: boolean = false;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.createZipline(22, 32, 43, 18.5);
    this.createZipline(48, 40, 64, 26.5);
    this.createVaultDoor(40, 2);
  }

  public createZipline(startX: number, startY: number, endX: number, endY: number): void {
    const geom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(startX, startY, 0),
      new THREE.Vector3(endX, endY, 0),
    ]);
    const mat = new THREE.LineBasicMaterial({
      color: 0xfacc15,
      linewidth: 2,
    });
    const lineMesh = new THREE.Line(geom, mat);
    this.scene.add(lineMesh);

    this.ziplines.push({ startX, startY, endX, endY, lineMesh });
  }

  public createVaultDoor(x: number, y: number): void {
    const geom = new THREE.BoxGeometry(4.0, 5.0, 1.2);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.3,
      metalness: 0.9,
    });
    this.vaultDoorMesh = new THREE.Mesh(geom, mat);
    this.vaultDoorMesh.position.set(x, y + 2.5, 0);
    this.scene.add(this.vaultDoorMesh);
  }

  public triggerBlackout(): void {
    this.isBlackoutActive = true;
    this.blackoutTimer = 12.0;
    this.transformerRepairTimer = 35.0;
  }

  public checkZiplineInteraction(player: Player): void {
    // If the player is actively flying with jetpack or dead, NEVER force them into zipline!
    if (player.isJetFlying || player.actor.isJetFlying || player.stats.isDead) return;

    for (let i = 0; i < this.ziplines.length; i++) {
      const z = this.ziplines[i];
      const px = player.actor.position.x;
      const py = player.actor.position.y;

      // Check proximity to zipline segment - dismount 1.2m before endpoint to avoid colliding with walls
      if (px >= Math.min(z.startX, z.endX) + 0.5 && px <= Math.max(z.startX, z.endX) - 1.2) {
        const t = (px - z.startX) / (z.endX - z.startX);
        const expectedY = z.startY + t * (z.endY - z.startY);
        // Only attach if falling downwards towards the wire and close (0.5m)
        if (player.actor.velocity.y < -0.3 && Math.abs(py - expectedY) < 0.5) {
          // Slide smoothly down zipline
          const dirX = z.endX > z.startX ? 1 : -1;
          player.actor.velocity.x = dirX * 16.0;
          player.actor.velocity.y = (z.endY - z.startY) * 0.35;
          player.mesh.triggerThrusterBurst(true);
        }
      }
    }
  }

  public update(dt: number, onBlackoutChange: (active: boolean) => void): void {
    if (this.isBlackoutActive) {
      this.blackoutTimer -= dt;
      if (this.blackoutTimer <= 0) {
        this.isBlackoutActive = false;
        onBlackoutChange(false);
      }
    }

    if (this.transformerRepairTimer > 0) {
      this.transformerRepairTimer -= dt;
    }
  }
}
