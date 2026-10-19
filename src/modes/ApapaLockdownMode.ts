import * as THREE from 'three';
import { Player } from '../entities/Player';

export class ApapaLockdownMode {
  public matchDuration: number = 180; // 3:00
  public matchTimeRemaining: number = 180;
  public zoneShiftTimer: number = 45;
  public activeZoneIndex: number = 0;
  public zonePositions: THREE.Vector3[] = [
    new THREE.Vector3(12, 10, 0),
    new THREE.Vector3(40, 16, 0),
    new THREE.Vector3(68, 10, 0),
  ];
  public zoneMesh: THREE.Mesh;
  public controllingPlayerId: string | null = null;

  constructor(scene: THREE.Scene) {
    const geom = new THREE.CylinderGeometry(4.0, 4.0, 0.4, 24);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.45,
    });
    this.zoneMesh = new THREE.Mesh(geom, mat);
    this.zoneMesh.position.copy(this.zonePositions[0]);
    scene.add(this.zoneMesh);
  }

  public update(dt: number, players: Player[]): void {
    if (this.matchTimeRemaining > 0) {
      this.matchTimeRemaining -= dt;
    }

    // Zone shift every 45s
    this.zoneShiftTimer -= dt;
    if (this.zoneShiftTimer <= 0) {
      this.zoneShiftTimer = 45;
      this.activeZoneIndex = (this.activeZoneIndex + 1) % this.zonePositions.length;
      this.zoneMesh.position.copy(this.zonePositions[this.activeZoneIndex]);
    }

    // Check who is holding zone
    const currentZone = this.zonePositions[this.activeZoneIndex];
    let occupant: Player | null = null;

    players.forEach((p) => {
      if (!p.stats.isDead && p.actor.position.distanceTo(currentZone) < 4.2) {
        occupant = p;
      }
    });

    if (occupant) {
      this.controllingPlayerId = (occupant as Player).stats.id;
      // Yields +₦10,000/sec (2x in final 30s)
      const multiplier = this.matchTimeRemaining <= 30 ? 2 : 1;
      (occupant as Player).stats.cash += Math.round(10000 * multiplier * dt);
    } else {
      this.controllingPlayerId = null;
    }
  }

  public destroy(scene: THREE.Scene): void {
    if (this.zoneMesh) {
      if (this.zoneMesh.geometry) this.zoneMesh.geometry.dispose();
      if (this.zoneMesh.material) (this.zoneMesh.material as THREE.Material).dispose();
      scene.remove(this.zoneMesh);
    }
  }
}
