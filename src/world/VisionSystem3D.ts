import * as THREE from 'three';
import { SonarEvent } from '../config/types';
import { Player } from '../entities/Player';
import { TileMap3D } from './TileMap3D';

export class VisionSystem3D {
  public scene: THREE.Scene;
  public activeSonarRings: SonarEvent[] = [];
  private sonarMeshes: THREE.LineLoop[] = [];
  private ringGeom: THREE.BufferGeometry;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Create 32-segment circular ring geometry
    const points: THREE.Vector3[] = [];
    const segments = 32;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta), Math.sin(theta), 0));
    }
    this.ringGeom = new THREE.BufferGeometry().setFromPoints(points);
  }

  public emitSonarRing(x: number, y: number, sourceId: string, maxRadius: number = 7.0): void {
    const mat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });
    const mesh = new THREE.LineLoop(this.ringGeom, mat);
    mesh.position.set(x, y, 0.2);
    this.scene.add(mesh);
    this.sonarMeshes.push(mesh);

    this.activeSonarRings.push({
      x,
      y,
      radius: 0.2,
      maxRadius,
      alpha: 1.0,
      color: '#ffffff',
      sourceId,
    });
  }

  public checkPlayerOcclusion(localPlayer: Player, targetPlayer: Player, tileMap: TileMap3D): boolean {
    // 2D Line Bresenham/DDA check to see if solid walls block line-of-sight
    const x0 = Math.floor(localPlayer.actor.position.x);
    const y0 = Math.floor(localPlayer.actor.position.y + 0.95);
    const x1 = Math.floor(targetPlayer.actor.position.x);
    const y1 = Math.floor(targetPlayer.actor.position.y + 0.95);

    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1;
    const sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;

    let cx = x0;
    let cy = y0;

    while (cx !== x1 || cy !== y1) {
      if ((cx !== x0 || cy !== y0) && (cx !== x1 || cy !== y1)) {
        if (tileMap.isSolid(cx, cy)) {
          return true; // Occluded by wall!
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
    return false; // Clear line of sight
  }

  public update(dt: number): void {
    for (let i = this.activeSonarRings.length - 1; i >= 0; i--) {
      const ring = this.activeSonarRings[i];
      const mesh = this.sonarMeshes[i];

      ring.radius += dt * 10.0;
      ring.alpha = Math.max(0, 1.0 - ring.radius / ring.maxRadius);

      mesh.scale.set(ring.radius, ring.radius, 1);
      (mesh.material as THREE.LineBasicMaterial).opacity = ring.alpha;

      if (ring.radius >= ring.maxRadius) {
        this.scene.remove(mesh);
        (mesh.material as THREE.Material).dispose();
        this.activeSonarRings.splice(i, 1);
        this.sonarMeshes.splice(i, 1);
      }
    }
  }
}
