import * as THREE from 'three';
import { MapId } from '../config/types';

export class SkylineBackground3D {
  public group: THREE.Group;
  private clouds: THREE.Mesh[] = [];
  private rainStreaks?: THREE.Points;
  private dustMotes?: THREE.Points;
  private lightningMesh?: THREE.Mesh;
  private lightningTimer: number = 5.0;
  private lightningDuration: number = 0;
  private bridgeHeadlights: THREE.Mesh[] = [];
  private aviationLights: THREE.Mesh[] = [];
  public currentTheme: MapId = MapId.BIRNIN_KANO;
  private scene: THREE.Scene;
  private animTime: number = 0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'SkylineBackground';
    scene.add(this.group);

    this.setTheme(MapId.BIRNIN_KANO);
  }

  public setTheme(mapId: MapId): void {
    this.currentTheme = mapId;

    // Clear previous objects cleanly
    while (this.group.children.length > 0) {
      const child = this.group.children[0];
      this.group.remove(child);
    }
    this.clouds = [];
    this.bridgeHeadlights = [];
    this.aviationLights = [];
    this.rainStreaks = undefined;
    this.dustMotes = undefined;
    this.lightningMesh = undefined;
    this.lightningTimer = 4.0 + Math.random() * 6.0;
    this.lightningDuration = 0;

    if (mapId === MapId.BIRNIN_KANO) {
      this.createKanoSahelSky();
      this.createKanoMegaWallsAndSpires();
      this.createTudunDalaHorizon();
      this.createKanoDustClouds();
      this.createKanoFloatingDustMotes();
    } else {
      this.createLagosMidnightSky();
      this.createThirdMainlandBridgeHorizon();
      this.createLagosRainStreaks();
      this.createLagosLightningOverlay();
    }
  }

  // =========================================================================
  // --- 1. BIRNIN KANO BACKGROUND (Warm Sahel Dusk, Dust Motes & Spires) ---
  // =========================================================================

  private createKanoSahelSky(): void {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Warm Amber-Bronze Sahel Dusk Multi-Stop Gradient
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0.0, '#1c0d02'); // Deep obsidian dusk
    grad.addColorStop(0.25, '#451a03'); // Burnt umber
    grad.addColorStop(0.55, '#78350f'); // Terracotta twilight
    grad.addColorStop(0.78, '#b45309'); // Radiating bronze
    grad.addColorStop(0.92, '#ea580c'); // Golden Sahel dusk
    grad.addColorStop(1.0, '#f59e0b'); // Horizon amber gold
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Radiating Golden Sahel Sun with Atmospheric Dust Halo
    const sunGrad = ctx.createRadialGradient(380, 110, 8, 380, 110, 110);
    sunGrad.addColorStop(0.0, 'rgba(254, 240, 138, 0.98)');
    sunGrad.addColorStop(0.25, 'rgba(251, 191, 36, 0.75)');
    sunGrad.addColorStop(0.65, 'rgba(234, 88, 12, 0.35)');
    sunGrad.addColorStop(1.0, 'rgba(180, 83, 9, 0.0)');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(380, 110, 110, 0, Math.PI * 2);
    ctx.fill();

    const skyTexture = new THREE.CanvasTexture(canvas);
    const skyGeom = new THREE.PlaneGeometry(320, 160);
    const skyMat = new THREE.MeshBasicMaterial({ map: skyTexture, depthWrite: false });
    const skyMesh = new THREE.Mesh(skyGeom, skyMat);
    skyMesh.position.set(40, 25, -60);
    this.group.add(skyMesh);
  }

  /**
   * Distant Terracotta Mega-Walls & Holographic Yellow-Gold Geometric Spires
   */
  private createKanoMegaWallsAndSpires(): void {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 160;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 512, 160);

    // Terracotta Ancient Citadel Bastion Mega-Wall Silhouettes
    ctx.fillStyle = '#451a03';
    ctx.beginPath();
    ctx.moveTo(0, 160);
    ctx.lineTo(0, 80);
    // Fortress crenellations & Hausa bastions
    const wallSteps = [
      [30, 75], [60, 60], [100, 60], [130, 85], [170, 70],
      [220, 50], [270, 50], [310, 75], [370, 65], [420, 55],
      [470, 55], [512, 80]
    ];
    wallSteps.forEach(([wx, wy]) => {
      ctx.lineTo(wx, wy);
    });
    ctx.lineTo(512, 160);
    ctx.closePath();
    ctx.fill();

    // Ancient-Futuristic Glowing Holographic Yellow-Gold Geometric Spires
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#facc15';
    ctx.shadowBlur = 12;

    const spires = [80, 245, 445];
    spires.forEach((sx) => {
      // Tapering holographic energy spire reaching into the sky
      ctx.beginPath();
      ctx.moveTo(sx - 12, 60);
      ctx.lineTo(sx, 12);
      ctx.lineTo(sx + 12, 60);
      ctx.stroke();

      // Horizontal resonance rings along spire
      [24, 36, 48].forEach((ry) => {
        ctx.beginPath();
        ctx.ellipse(sx, ry, 8, 3, 0, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Holographic Arewa knot glowing at spire apex
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(sx, 12, 4, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.shadowBlur = 0;

    const texture = new THREE.CanvasTexture(canvas);
    const geom = new THREE.PlaneGeometry(310, 65);
    const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.set(40, 18, -48);
    this.group.add(mesh);
  }

  private createTudunDalaHorizon(): void {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 140;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 512, 140);

    // Tudun Dala Ancient Rocky Hill Silhouette (#2e1005)
    ctx.fillStyle = '#2e1005';
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
    ctx.fillStyle = '#1c0903';
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
    mesh.position.set(40, 14, -38);
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
      const geom = new THREE.PlaneGeometry(48, 20);
      const cloud = new THREE.Mesh(geom, mat);
      cloud.position.set(i * 35 - 15, 26 + (i % 2) * 6, -32);
      (cloud as any).speed = 0.6 + (i % 3) * 0.4;
      this.group.add(cloud);
      this.clouds.push(cloud);
    }
  }

  /**
   * Floating 3D Dust Motes: Swirling Golden Sahel Particles
   */
  private createKanoFloatingDustMotes(): void {
    const count = 900;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = Math.random() * 120 - 15;
      positions[i * 3 + 1] = Math.random() * 55;
      positions[i * 3 + 2] = -5 + (Math.random() - 0.5) * 35;
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xfacc15,
      size: 0.35,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    this.dustMotes = new THREE.Points(geom, mat);
    this.group.add(this.dustMotes);
  }

  // =========================================================================
  // --- 2. LAGOS GO-SLOW BACKGROUND (Midnight Slate, Bridge Traffic & Lightning) ---
  // =========================================================================

  private createLagosMidnightSky(): void {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Deep Tactical Midnight Slate Gradient (#050806 to #1e293b)
    const grad = ctx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0.0, '#040706'); // Deep Tactical Obsidian
    grad.addColorStop(0.4, '#090f0c'); // Camo Slate
    grad.addColorStop(0.75, '#0f172a'); // Midnight Indigo
    grad.addColorStop(1.0, '#1e293b'); // Wet Overcast Slate
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    const skyTexture = new THREE.CanvasTexture(canvas);
    const skyGeom = new THREE.PlaneGeometry(320, 160);
    const skyMat = new THREE.MeshBasicMaterial({ map: skyTexture, depthWrite: false });
    const skyMesh = new THREE.Mesh(skyGeom, skyMat);
    skyMesh.position.set(40, 25, -60);
    this.group.add(skyMesh);
  }

  private createThirdMainlandBridgeHorizon(): void {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 140;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 512, 140);

    // Distant Lagos Island & Victoria Island Skyline Silhouettes
    ctx.fillStyle = '#060b08';
    ctx.fillRect(0, 75, 512, 65);

    // Towers & Container Cranes Silhouettes
    const towers = [[20, 48, 26], [65, 38, 32], [130, 28, 48], [195, 45, 35], [260, 32, 28], [340, 30, 44], [430, 42, 32]];
    towers.forEach(([x, h, w]) => {
      ctx.fillRect(x, 75 - h, w, h);
    });

    // Third Mainland Highway Flyover Suspension Pylons & Cables
    ctx.strokeStyle = '#008751';
    ctx.lineWidth = 2;
    [90, 230, 390].forEach((px) => {
      ctx.beginPath();
      ctx.moveTo(px, 75);
      ctx.lineTo(px, 20); // Pylon mast
      ctx.stroke();

      // Suspension cable stays
      ctx.beginPath();
      ctx.moveTo(px, 25);
      ctx.lineTo(px - 50, 75);
      ctx.moveTo(px, 25);
      ctx.lineTo(px + 50, 75);
      ctx.stroke();
    });

    // Glowing Holographic Highway Billboards ("EKO TOLL // SECTOR 234")
    ctx.fillStyle = 'rgba(56, 189, 248, 0.85)';
    ctx.fillRect(140, 40, 42, 14);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 7px monospace';
    ctx.fillText('EKO TOLL', 144, 50);

    ctx.fillStyle = 'rgba(34, 197, 94, 0.85)';
    ctx.fillRect(350, 42, 48, 14);
    ctx.fillStyle = '#ffffff';
    ctx.fillText('SECTOR 234', 354, 52);

    // Amber Headlights & Red Taillights on the bridge
    for (let x = 8; x < 500; x += 14) {
      // Eastbound Amber headlights
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(x, 76, 5, 2);
      // Westbound Red taillights
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(x + 6, 79, 4, 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    const geom = new THREE.PlaneGeometry(300, 50);
    const mat = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.set(40, 14, -40);
    this.group.add(mesh);

    // Blinking Red Aviation Lights on Bridge Pylons
    [90, 230, 390].forEach((px) => {
      const lightGeom = new THREE.SphereGeometry(0.25, 6, 6);
      const lightMat = new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 1.0 });
      const light = new THREE.Mesh(lightGeom, lightMat);
      // Map canvas px (0..512) to 3D world X (-110..190)
      const worldX = 40 + ((px - 256) / 512) * 300;
      light.position.set(worldX, 23.5, -39.5);
      this.group.add(light);
      this.aviationLights.push(light);
    });
  }

  private createLagosRainStreaks(): void {
    const rainCount = 650;
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(rainCount * 3);

    for (let i = 0; i < rainCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.2) * 130;
      positions[i * 3 + 1] = Math.random() * 65;
      positions[i * 3 + 2] = -12 + (Math.random() - 0.5) * 30;
    }

    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.32,
      transparent: true,
      opacity: 0.65,
    });

    this.rainStreaks = new THREE.Points(geom, mat);
    this.group.add(this.rainStreaks);
  }

  /**
   * Subtle Dynamic Lightning Flash Screen
   */
  private createLagosLightningOverlay(): void {
    const geom = new THREE.PlaneGeometry(340, 170);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
    });
    this.lightningMesh = new THREE.Mesh(geom, mat);
    this.lightningMesh.position.set(40, 25, -54);
    this.group.add(this.lightningMesh);
  }

  public update(dt: number): void {
    this.animTime += dt;

    // 1. Drifting Harmattan dust clouds (Birnin Kano)
    for (let i = 0; i < this.clouds.length; i++) {
      const c = this.clouds[i];
      const speed = (c as any).speed || 0.8;
      c.position.x += speed * dt;
      if (c.position.x > 140) {
        c.position.x = -60;
      }
    }

    // 2. Swirling 3D Sahel Dust Motes (Birnin Kano)
    if (this.dustMotes) {
      const positions = this.dustMotes.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length / 3; i++) {
        // Gentle drift with wind + micro vertical turbulence
        positions[i * 3 + 0] += (1.8 + Math.sin(this.animTime * 1.5 + i)) * dt;
        positions[i * 3 + 1] += Math.sin(this.animTime * 2.0 + i * 0.5) * 0.8 * dt;

        if (positions[i * 3 + 0] > 110) {
          positions[i * 3 + 0] = -15;
          positions[i * 3 + 1] = Math.random() * 55;
        }
      }
      this.dustMotes.geometry.attributes.position.needsUpdate = true;
    }

    // 3. Fast Diagonal Rain Streaks (Lagos)
    if (this.rainStreaks) {
      const positions = this.rainStreaks.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length / 3; i++) {
        positions[i * 3 + 1] -= 48.0 * dt; // Fast gravity drop
        positions[i * 3 + 0] -= 15.0 * dt; // Angular wind deflection
        if (positions[i * 3 + 1] < 0) {
          positions[i * 3 + 1] = 60;
          positions[i * 3 + 0] = Math.random() * 125 - 15;
        }
      }
      this.rainStreaks.geometry.attributes.position.needsUpdate = true;
    }

    // 4. Blinking Aviation Lights (Lagos)
    if (this.aviationLights.length > 0) {
      const isBlink = Math.sin(this.animTime * 5.0) > 0.2;
      for (let i = 0; i < this.aviationLights.length; i++) {
        (this.aviationLights[i].material as THREE.MeshBasicMaterial).opacity = isBlink ? 1.0 : 0.15;
      }
    }

    // 5. Subtle Dynamic Lightning Flashes (Lagos)
    if (this.currentTheme === MapId.LAGOS_GOSLOW && this.lightningMesh) {
      this.lightningTimer -= dt;
      if (this.lightningTimer <= 0) {
        // Trigger thunder flash
        this.lightningDuration = 0.22;
        this.lightningTimer = 8.0 + Math.random() * 8.0; // Next flash in 8-16 seconds
      }

      if (this.lightningDuration > 0) {
        this.lightningDuration -= dt;
        const mat = this.lightningMesh.material as THREE.MeshBasicMaterial;
        // Fast dual flash (strobe effect)
        const strobe = Math.sin(this.lightningDuration * 35.0);
        mat.opacity = Math.max(0, strobe * 0.35 * (this.lightningDuration / 0.22));
      }
    }
  }
}
