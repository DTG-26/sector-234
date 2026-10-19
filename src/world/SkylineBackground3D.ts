import * as THREE from 'three';
import { MapId } from '../config/types';

export class SkylineBackground3D {
  public group: THREE.Group;
  private clouds: THREE.Mesh[] = [];
  private distantBeacons: THREE.Mesh[] = [];
  private rainStreaks?: THREE.Points;
  public currentTheme: MapId = MapId.BIRNIN_KANO;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'SkylineBackground';
    scene.add(this.group);

    this.setTheme(MapId.BIRNIN_KANO);
  }

  public setTheme(mapId: MapId): void {
    this.currentTheme = mapId;

    // Clear previous objects
    while (this.group.children.length > 0) {
      const child = this.group.children[0];
      this.group.remove(child);
    }
    this.clouds = [];
    this.distantBeacons = [];
    this.rainStreaks = undefined;

    if (mapId === MapId.BIRNIN_KANO) {
      this.createKanoSahelSky();
      this.createTudunDalaHorizon();
      this.createKanoDustClouds();
    } else {
      this.createLagosRainySky();
      this.createThirdMainlandBridgeHorizon();
      this.createLagosRainStreaks();
    }
  }

  // --- 1. BIRNIN KANO BACKGROUND (Sahel Dusk & Tudun Dala Rock) ---
  private createKanoSahelSky(): void {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Warm Golden-Amber Sahel Dusk Gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0.0, '#1c0d02'); // Deep amber night
    grad.addColorStop(0.3, '#78350f'); // Burnt clay
    grad.addColorStop(0.7, '#c2410c'); // Warm terracotta dusk
    grad.addColorStop(1.0, '#ea580c'); // Radiant horizon orange
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Warm Sahel Sun
    const sunGrad = ctx.createRadialGradient(380, 100, 8, 380, 100, 80);
    sunGrad.addColorStop(0.0, 'rgba(254, 240, 138, 0.95)');
    sunGrad.addColorStop(0.3, 'rgba(251, 146, 60, 0.45)');
    sunGrad.addColorStop(1.0, 'rgba(234, 88, 12, 0.0)');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(380, 100, 80, 0, Math.PI * 2);
    ctx.fill();

    const skyTexture = new THREE.CanvasTexture(canvas);
    const skyGeom = new THREE.PlaneGeometry(320, 160);
    const skyMat = new THREE.MeshBasicMaterial({ map: skyTexture, depthWrite: false });
    const skyMesh = new THREE.Mesh(skyGeom, skyMat);
    skyMesh.position.set(40, 25, -55);
    this.group.add(skyMesh);
  }

  private createTudunDalaHorizon(): void {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 140;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 512, 140);

    // Tudun Dala Ancient Rocky Hill Silhouette (#431407)
    ctx.fillStyle = '#431407';
    ctx.beginPath();
    ctx.moveTo(0, 140);
    ctx.lineTo(0, 95);
    ctx.quadraticCurveTo(80, 65, 160, 45); // Rising slope of Dala Hill
    ctx.lineTo(240, 42); // Flat rock summit
    ctx.quadraticCurveTo(320, 55, 390, 85);
    ctx.lineTo(512, 90);
    ctx.lineTo(512, 140);
    ctx.closePath();
    ctx.fill();

    // Silhouettes of Date Palm Trees on the ridge
    ctx.fillStyle = '#270c04';
    const treeX = [40, 90, 150, 310, 360, 430, 470];
    treeX.forEach((tx) => {
      ctx.fillRect(tx, 70, 3, 20);
      for (let a = -0.8; a <= 0.8; a += 0.4) {
        ctx.beginPath();
        ctx.arc(tx + Math.sin(a) * 8, 70 - Math.cos(a) * 4, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    const texture = new THREE.CanvasTexture(canvas);
    const geom = new THREE.PlaneGeometry(300, 55);
    const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.set(40, 14, -40);
    this.group.add(mesh);
  }

  private createKanoDustClouds(): void {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'rgba(180, 83, 9, 0.28)'; // Warm Harmattan dust wisps
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(60 + i * 35, 64, 35, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
    for (let i = 0; i < 6; i++) {
      const geom = new THREE.PlaneGeometry(45, 18);
      const cloud = new THREE.Mesh(geom, mat);
      cloud.position.set(i * 35 - 15, 28 + (i % 2) * 6, -35);
      (cloud as any).speed = 0.6 + (i % 3) * 0.4;
      this.group.add(cloud);
      this.clouds.push(cloud);
    }
  }

  // --- 2. LAGOS GO-SLOW BACKGROUND (Rainy Marina & Third Mainland Bridge) ---
  private createLagosRainySky(): void {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Overcast Slate & Marine Indigo Gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0.0, '#090d16');
    grad.addColorStop(0.5, '#1e293b');
    grad.addColorStop(1.0, '#334155');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    const skyTexture = new THREE.CanvasTexture(canvas);
    const skyGeom = new THREE.PlaneGeometry(320, 160);
    const skyMat = new THREE.MeshBasicMaterial({ map: skyTexture, depthWrite: false });
    const skyMesh = new THREE.Mesh(skyGeom, skyMat);
    skyMesh.position.set(40, 25, -55);
    this.group.add(skyMesh);
  }

  private createThirdMainlandBridgeHorizon(): void {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 140;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 512, 140);

    // Distant Lagos Skyline Silhouettes
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 75, 512, 65);

    // Towers & Highway Flyover Cables
    const towers = [[30, 45, 25], [70, 35, 30], [140, 25, 45], [210, 40, 35], [320, 28, 40], [420, 38, 30]];
    towers.forEach(([x, h, w]) => {
      ctx.fillRect(x, 75 - h, w, h);
    });

    // Amber & red headlights on the bridge
    ctx.fillStyle = '#f59e0b';
    for (let x = 10; x < 500; x += 18) {
      ctx.fillRect(x, 76, 5, 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    const geom = new THREE.PlaneGeometry(300, 50);
    const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.set(40, 14, -40);
    this.group.add(mesh);
  }

  private createLagosRainStreaks(): void {
    const rainCount = 450;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(rainCount * 3);

    for (let i = 0; i < rainCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.2) * 120;
      positions[i * 3 + 1] = Math.random() * 60;
      positions[i * 3 + 2] = -10 + (Math.random() - 0.5) * 25;
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.28,
      transparent: true,
      opacity: 0.5,
    });

    this.rainStreaks = new THREE.Points(geom, mat);
    this.group.add(this.rainStreaks);
  }

  public update(dt: number): void {
    // 1. Drifting clouds / dust
    for (let i = 0; i < this.clouds.length; i++) {
      const c = this.clouds[i];
      const speed = (c as any).speed || 0.8;
      c.position.x += speed * dt;
      if (c.position.x > 140) {
        c.position.x = -60;
      }
    }

    // 2. Animate Lagos diagonal rain streaks
    if (this.rainStreaks) {
      const positions = this.rainStreaks.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length / 3; i++) {
        positions[i * 3 + 1] -= 42.0 * dt; // Fall down
        positions[i * 3 + 0] -= 12.0 * dt; // Angle with wind
        if (positions[i * 3 + 1] < 0) {
          positions[i * 3 + 1] = 55;
          positions[i * 3 + 0] = Math.random() * 110 - 15;
        }
      }
      this.rainStreaks.geometry.attributes.position.needsUpdate = true;
    }
  }
}
