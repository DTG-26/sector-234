import * as THREE from 'three';
import { Player } from '../entities/Player';

export class VaultHeistMode {
  public matchDuration: number = 150; // 2:30
  public matchTimeRemaining: number = 150;
  public encryptedDrivePos: THREE.Vector3 = new THREE.Vector3(40, 4, 0);
  public carrierId: string | null = null;
  public driveMesh: THREE.Mesh;
  public extractionPadPos: THREE.Vector3 = new THREE.Vector3(40, 41, 0);

  constructor(scene: THREE.Scene) {
    const geom = new THREE.BoxGeometry(0.5, 0.3, 0.4);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 3.0,
    });
    this.driveMesh = new THREE.Mesh(geom, mat);
    this.driveMesh.position.copy(this.encryptedDrivePos);
    scene.add(this.driveMesh);
  }

  public update(dt: number, players: Player[]): void {
    if (this.matchTimeRemaining > 0) {
      this.matchTimeRemaining -= dt;
    }

    this.driveMesh.rotation.y += dt * 3.0;

    // If carrier active, follow carrier
    if (this.carrierId) {
      const carrier = players.find((p) => p.stats.id === this.carrierId);
      if (carrier && !carrier.stats.isDead) {
        this.driveMesh.position.set(carrier.actor.position.x, carrier.actor.position.y + 1.2, 0);

        // Check if reached rooftop extraction
        if (carrier.actor.position.distanceTo(this.extractionPadPos) < 3.0) {
          carrier.stats.cash += 500000; // ₦500,000 Heist payout!
          this.matchTimeRemaining = 0; // Win!
        }
      } else {
        // Drop drive on floor
        this.carrierId = null;
      }
    } else {
      // Check if any player picks up drive
      players.forEach((p) => {
        if (!p.stats.isDead && p.actor.position.distanceTo(this.driveMesh.position) < 2.0) {
          this.carrierId = p.stats.id;
        }
      });
    }
  }

  public destroy(scene: THREE.Scene): void {
    if (this.driveMesh) {
      if (this.driveMesh.geometry) this.driveMesh.geometry.dispose();
      if (this.driveMesh.material) (this.driveMesh.material as THREE.Material).dispose();
      scene.remove(this.driveMesh);
    }
  }
}
