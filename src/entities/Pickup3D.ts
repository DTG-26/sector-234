import * as THREE from 'three';
import { WeaponId } from '../config/types';

export class Pickup3D {
  public mesh: THREE.Group;
  public type: 'cash' | 'weapon' | 'health';
  public value: number;
  public weaponId?: WeaponId;
  public isCollected: boolean = false;
  private floatTime: number = Math.random() * Math.PI * 2;

  constructor(scene: THREE.Scene, type: 'cash' | 'weapon' | 'health', x: number, y: number, value: number = 25000, weaponId?: WeaponId) {
    this.type = type;
    this.value = value;
    this.weaponId = weaponId;
    this.mesh = new THREE.Group();
    this.mesh.position.set(x, y, 0);
    scene.add(this.mesh);

    if (type === 'cash') {
      // 3D Thick Emerald Green Cash Bundle (₦)
      const stackGeom = new THREE.BoxGeometry(0.7, 0.35, 0.45);
      const cashMat = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        emissive: 0x059669,
        emissiveIntensity: 2.5,
        roughness: 0.3,
        metalness: 0.2,
      });
      const cashMesh = new THREE.Mesh(stackGeom, cashMat);
      this.mesh.add(cashMesh);

      // White currency band around cash bundle
      const bandGeom = new THREE.BoxGeometry(0.18, 0.36, 0.46);
      const bandMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const bandMesh = new THREE.Mesh(bandGeom, bandMat);
      this.mesh.add(bandMesh);

      // Glowing Ground Beacon Ring
      const ringGeom = new THREE.RingGeometry(0.4, 0.65, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = Math.PI * 0.5;
      ringMesh.position.y = -0.22;
      this.mesh.add(ringMesh);
    } else if (type === 'weapon') {
      // 3D Military Weapon Supply Crate
      const crateGeom = new THREE.BoxGeometry(0.85, 0.45, 0.55);
      const crateMat = new THREE.MeshStandardMaterial({
        color: 0xd97706,
        emissive: 0xb45309,
        emissiveIntensity: 2.2,
        roughness: 0.4,
        metalness: 0.6,
      });
      const crateMesh = new THREE.Mesh(crateGeom, crateMat);
      this.mesh.add(crateMesh);

      // Glowing Ground Ring
      const ringGeom = new THREE.RingGeometry(0.45, 0.75, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = Math.PI * 0.5;
      ringMesh.position.y = -0.25;
      this.mesh.add(ringMesh);
    } else {
      // Tactical First Aid Medical Kit (Red Case with 3D White Cross)
      const packGeom = new THREE.BoxGeometry(0.55, 0.42, 0.38);
      const packMat = new THREE.MeshStandardMaterial({
        color: 0xdc2626,
        emissive: 0x991b1b,
        emissiveIntensity: 1.8,
        roughness: 0.3,
        metalness: 0.3,
      });
      const packMesh = new THREE.Mesh(packGeom, packMat);
      this.mesh.add(packMesh);

      // White Medical Cross (Horizontal + Vertical bars)
      const crossMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.10, 0.40), crossMat);
      this.mesh.add(crossH);
      const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.32, 0.40), crossMat);
      this.mesh.add(crossV);

      // Glowing Ground Ring
      const ringGeom = new THREE.RingGeometry(0.45, 0.72, 16);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xef4444,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = Math.PI * 0.5;
      ringMesh.position.y = -0.24;
      this.mesh.add(ringMesh);
    }

    // Floating 3D Billboard Sprite Label (Visible across entire screen and zoom levels)
    const labelCanvas = document.createElement('canvas');
    labelCanvas.width = 160;
    labelCanvas.height = 48;
    const lCtx = labelCanvas.getContext('2d')!;
    lCtx.fillStyle = type === 'cash' ? '#10b981' : (type === 'weapon' ? '#f59e0b' : '#ef4444');
    lCtx.font = 'bold 22px "Chakra Petch", sans-serif';
    lCtx.textAlign = 'center';
    lCtx.textBaseline = 'middle';
    lCtx.shadowColor = '#000000';
    lCtx.shadowBlur = 8;
    lCtx.fillText(type === 'cash' ? '₦ CASH' : (type === 'weapon' ? '📦 WEAPON' : '❤️ +50 HP'), 80, 24);

    const labelTex = new THREE.CanvasTexture(labelCanvas);
    const spriteMat = new THREE.SpriteMaterial({ map: labelTex, transparent: true, opacity: 0.95 });
    const labelSprite = new THREE.Sprite(spriteMat);
    labelSprite.position.set(0, 0.8, 0);
    labelSprite.scale.set(1.5, 0.5, 1);
    this.mesh.add(labelSprite);
  }

  public update(dt: number): void {
    if (this.isCollected) return;
    this.floatTime += dt * 3.0;
    this.mesh.rotation.y += dt * 2.2;
    this.mesh.position.y += Math.sin(this.floatTime) * dt * 0.4;
  }

  public destroy(scene: THREE.Scene): void {
    this.mesh.traverse((obj) => {
      if ((obj as THREE.Mesh).geometry) {
        (obj as THREE.Mesh).geometry.dispose();
      }
      if ((obj as THREE.Mesh).material) {
        const mat = (obj as THREE.Mesh).material;
        if (Array.isArray(mat)) {
          mat.forEach((m) => {
            if ((m as any).map) (m as any).map.dispose();
            m.dispose();
          });
        } else {
          if ((mat as any).map) (mat as any).map.dispose();
          mat.dispose();
        }
      }
    });
    scene.remove(this.mesh);
  }
}
