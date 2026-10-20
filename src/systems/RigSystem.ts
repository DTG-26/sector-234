import * as THREE from 'three';
import { MovementRigType, TileType } from '../config/types';
import { ARENA_CONFIG } from '../config/constants';
import { Actor3D } from '../entities/Actor3D';
import { PlayerMesh3D } from '../entities/PlayerMesh3D';
import { TileMap3D } from '../world/TileMap3D';

import { Player } from '../entities/Player';
import type { Camera3D } from '../core/Camera3D';

export class RigSystem {
  public scene: THREE.Scene;
  private anchorMesh: THREE.Mesh | null = null;
  public glitchAnchorPos: THREE.Vector3 | null = null;
  public glitchAnchorTimer: number = 0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.initGlitchBeacon();
  }

  private initGlitchBeacon(): void {
    const geom = new THREE.OctahedronGeometry(0.35);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 3.5,
      wireframe: true,
    });
    this.anchorMesh = new THREE.Mesh(geom, mat);
    this.anchorMesh.visible = false;
    this.scene.add(this.anchorMesh);
  }

  public activateRig(
    player: Player,
    tileMap: TileMap3D,
    aimAngle: number,
    moveDirX: number,
    camera?: Camera3D
  ): { activated: boolean; popupText: string } {
    switch (player.stats.rigType) {
      case MovementRigType.BREACH_BOOSTER:
        return this.activateBreachBooster(player, tileMap, aimAngle, moveDirX, camera);

      case MovementRigType.OVERDRIVE_SLIDE:
        return this.activateOverdriveSlide(player, aimAngle, moveDirX, camera);

      case MovementRigType.PHASE_DASH:
        return this.activatePhaseDash(player, tileMap, aimAngle, moveDirX, camera);

      case MovementRigType.GLITCH_ANCHOR:
        return this.activateGlitchAnchor(player, camera);

      default:
        return { activated: false, popupText: '' };
    }
  }

  private activateBreachBooster(
    player: Player,
    tileMap: TileMap3D,
    aimAngle: number,
    moveDirX: number,
    camera?: Camera3D
  ): { activated: boolean; popupText: string } {
    const facing = player.mesh.rootGroup.scale.x >= 0 ? 1 : -1;
    const dirX = Math.abs(moveDirX) > 0.1
      ? Math.sign(moveDirX)
      : (Math.abs(Math.cos(aimAngle)) > 0.25 ? Math.sign(Math.cos(aimAngle)) : facing);
    const dirY = player.actor.isGrounded ? 0.35 : Math.sin(aimAngle);

    player.actor.velocity.x = dirX * 28.0;
    player.actor.velocity.y = Math.max(dirY * 22.0, 9.0);
    player.rigBoostTimer = 0.45;
    player.mesh.triggerThrusterBurst(true);

    if (camera) {
      camera.triggerBreachZoom();
    }

    // Breach through up to 4 destructible tiles along movement path
    const checkX = Math.round(player.actor.position.x + dirX * 1.2);
    const checkY = Math.round(player.actor.position.y);

    let destroyedWall = false;
    for (let step = 0; step < 4; step++) {
      const tx = checkX + Math.round(dirX * step);
      const ty = checkY;
      const t = tileMap.getTile(tx, ty);
      if (t === TileType.BRICK_CONCRETE || t === TileType.WOOD_SCAFFOLD || t === TileType.GLASS_WINDOW) {
        tileMap.destroyTile(tx, ty);
        destroyedWall = true;
      }
    }

    if (destroyedWall && camera) {
      camera.addTrauma(0.25);
    }

    setTimeout(() => {
      player.mesh.triggerThrusterBurst(false);
    }, 450);

    return { activated: true, popupText: '⚡ BREACH BOOSTER!' };
  }

  private activateOverdriveSlide(
    player: Player,
    aimAngle: number,
    moveDirX: number,
    camera?: Camera3D
  ): { activated: boolean; popupText: string } {
    const facing = player.mesh.rootGroup.scale.x >= 0 ? 1 : -1;
    const dir = moveDirX !== 0
      ? Math.sign(moveDirX)
      : (Math.abs(Math.cos(aimAngle)) > 0.2 ? Math.sign(Math.cos(aimAngle)) : facing);

    player.actor.velocity.x = dir * 26.0;
    player.isSliding = true;
    player.slideTimer = 0.6;
    player.rigBoostTimer = 0.45;
    player.mesh.triggerThrusterBurst(true);

    if (camera) {
      camera.triggerSlideZoom(true);
      setTimeout(() => {
        camera.triggerSlideZoom(false);
      }, 600);
    }

    setTimeout(() => {
      player.mesh.triggerThrusterBurst(false);
    }, 450);

    return { activated: true, popupText: '⚡ OVERDRIVE SLIDE!' };
  }

  private activatePhaseDash(
    player: Player,
    tileMap: TileMap3D,
    aimAngle: number,
    moveDirX: number,
    camera?: Camera3D
  ): { activated: boolean; popupText: string } {
    const facing = player.mesh.rootGroup.scale.x >= 0 ? 1 : -1;
    const dirX = Math.abs(moveDirX) > 0.1
      ? Math.sign(moveDirX)
      : (Math.abs(Math.cos(aimAngle)) > 0.2 ? Math.sign(Math.cos(aimAngle)) : facing);
    const dirY = player.actor.isGrounded ? 0 : Math.sin(aimAngle);

    // Quantum teleport 9 meters forward!
    const targetX = THREE.MathUtils.clamp(player.actor.position.x + dirX * 9.0, 2, tileMap.width - 3);
    const targetY = THREE.MathUtils.clamp(player.actor.position.y + dirY * 4.5, 3, tileMap.height - 3);

    player.actor.position.set(targetX, targetY, 0);
    player.actor.velocity.set(dirX * 14.0, 6.0, 0);
    player.actor.isPhasing = true;
    player.rigBoostTimer = 0.35;

    if (camera) {
      camera.triggerPhaseSnap(targetX, targetY);
    }

    player.mesh.rootGroup.traverse((obj) => {
      if ((obj as THREE.Mesh).material) {
        const m = (obj as THREE.Mesh).material as THREE.Material;
        m.transparent = true;
        m.opacity = 0.35;
      }
    });

    setTimeout(() => {
      player.actor.isPhasing = false;
      player.mesh.rootGroup.traverse((obj) => {
        if ((obj as THREE.Mesh).material) {
          const m = (obj as THREE.Mesh).material as THREE.Material;
          m.opacity = 1.0;
        }
      });
    }, 1000);

    return { activated: true, popupText: '⚡ PHASE DASH!' };
  }

  private activateGlitchAnchor(player: Player, camera?: Camera3D): { activated: boolean; popupText: string } {
    if (!this.glitchAnchorPos) {
      // Drop anchor
      this.glitchAnchorPos = player.actor.position.clone();
      this.glitchAnchorTimer = 10.0;
      if (this.anchorMesh) {
        this.anchorMesh.position.copy(this.glitchAnchorPos);
        this.anchorMesh.visible = true;
      }
      return { activated: true, popupText: '⚓ ANCHOR PLACED!' };
    } else {
      // Snap teleport back
      player.actor.position.copy(this.glitchAnchorPos);
      player.actor.velocity.set(0, 8.0, 0);
      player.stats.hp = Math.min(player.stats.maxHp, player.stats.hp + 40);
      this.glitchAnchorPos = null;
      if (this.anchorMesh) this.anchorMesh.visible = false;
      if (camera) {
        camera.triggerAnchorSlingshot();
      }
      return { activated: true, popupText: '⏪ GLITCH RECALL (+40 HP)!' };
    }
  }

  public triggerGroundSlam(actor: Actor3D, mesh: PlayerMesh3D, tileMap: TileMap3D): boolean {
    if (actor.isGrounded) return false;
    actor.velocity.y = ARENA_CONFIG.GROUND_SLAM_VELOCITY;
    actor.velocity.x = 0;
    mesh.triggerThrusterBurst(true);

    // Check tiles directly below
    const tx = Math.round(actor.position.x);
    const ty = Math.floor(actor.position.y - 0.5);
    const t = tileMap.getTile(tx, ty);
    if (t === TileType.WOOD_SCAFFOLD || t === TileType.GLASS_WINDOW) {
      tileMap.destroyTile(tx, ty);
    }
    return true;
  }

  public update(dt: number): void {
    if (this.anchorMesh && this.anchorMesh.visible) {
      this.anchorMesh.rotation.x += dt * 2.5;
      this.anchorMesh.rotation.y += dt * 3.5;
      this.glitchAnchorTimer -= dt;
      if (this.glitchAnchorTimer <= 0) {
        this.glitchAnchorPos = null;
        this.anchorMesh.visible = false;
      }
    }
  }
}
