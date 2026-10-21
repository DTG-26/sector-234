import * as THREE from 'three';
import { Player } from '../entities/Player';
import { Pickup3D } from '../entities/Pickup3D';

export class OdogwuStashMode {
  public matchDuration: number = 180; // 3:00
  public matchTimeRemaining: number = 180;
  public extractionBeamMesh: THREE.Mesh;
  public extractionPosition: THREE.Vector3 = new THREE.Vector3(40, 41, 0);
  public currentOdogwuId: string | null = null;
  private passiveInterestTimer: number = 0;
  public extractionProgress: Map<string, number> = new Map();

  constructor(scene: THREE.Scene) {
    // 3D Emerald Extraction Beam
    const geom = new THREE.CylinderGeometry(2.5, 2.5, 20, 16);
    geom.translate(0, 10, 0);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.0,
      side: THREE.DoubleSide,
    });
    this.extractionBeamMesh = new THREE.Mesh(geom, mat);
    this.extractionBeamMesh.position.copy(this.extractionPosition);
    scene.add(this.extractionBeamMesh);
  }

  public isExtractionActive(): boolean {
    return this.matchTimeRemaining <= 30;
  }

  public handlePlayerElimination(
    victim: Player,
    killer: Player | undefined,
    scene: THREE.Scene,
    pickups: Pickup3D[]
  ): void {
    // Spill 50% of held balance onto floor as rotating 3D emerald cash bundles (₦25,000 each)
    const spillAmount = Math.floor(victim.stats.cash * 0.5);
    victim.stats.cash -= spillAmount;

    const bundleCount = Math.min(8, Math.max(1, Math.floor(spillAmount / 25000)));
    for (let i = 0; i < bundleCount; i++) {
      const offsetX = (Math.random() - 0.5) * 3.5;
      const offsetY = Math.random() * 2.0;
      const pk = new Pickup3D(
        scene,
        'cash',
        victim.actor.position.x + offsetX,
        victim.actor.position.y + offsetY,
        25000
      );
      pickups.push(pk);
    }

    if (killer) {
      killer.stats.cash += 15000; // Kill bonus
    }
  }

  public update(dt: number, players: Player[]): void {
    if (this.matchTimeRemaining > 0) {
      this.matchTimeRemaining -= dt;
    }

    // 1. Determine Current Odogwu (#1 Richest Living Player)
    let richest: Player | null = null;
    let maxCash = -1;

    for (let i = 0; i < players.length; i++) {
      const p = players[i];
      if (!p.stats.isDead && p.stats.cash > maxCash) {
        maxCash = p.stats.cash;
        richest = p;
      }
    }

    if (richest) {
      this.currentOdogwuId = richest.stats.id;
      players.forEach((p) => {
        p.mesh.setOdogwuCrown(!p.stats.isDead && p.stats.id === richest!.stats.id);
      });
    } else {
      this.currentOdogwuId = null;
      players.forEach((p) => {
        p.mesh.setOdogwuCrown(false);
      });
    }

    // 2. Passive Odogwu Interest (+₦5,000/sec)
    this.passiveInterestTimer += dt;
    if (this.passiveInterestTimer >= 1.0) {
      this.passiveInterestTimer = 0;
      if (richest && !richest.stats.isDead) {
        richest.stats.cash += 5000;
      }
    }

    // 3. Extraction Phase Handling (Final 30s)
    if (this.isExtractionActive()) {
      const mat = this.extractionBeamMesh.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.35 + Math.sin(performance.now() * 0.006) * 0.15;
      this.extractionBeamMesh.rotation.y += dt * 1.5;

      // Check which players are inside extraction zone
      players.forEach((p) => {
        if (p.stats.isDead || p.stats.isExtracted) return;
        const dist = Math.abs(p.actor.position.x - this.extractionPosition.x);
        const dy = Math.abs(p.actor.position.y - this.extractionPosition.y);

        if (dist < 2.8 && dy < 3.0) {
          const current = (this.extractionProgress.get(p.stats.id) || 0) + dt;
          this.extractionProgress.set(p.stats.id, current);

          if (current >= 5.0) {
            p.stats.isExtracted = true; // Secured cash!
          }
        }
      });
    }
  }

  public destroy(scene: THREE.Scene): void {
    if (this.extractionBeamMesh) {
      if (this.extractionBeamMesh.geometry) this.extractionBeamMesh.geometry.dispose();
      if (this.extractionBeamMesh.material) (this.extractionBeamMesh.material as THREE.Material).dispose();
      scene.remove(this.extractionBeamMesh);
    }
  }
}
