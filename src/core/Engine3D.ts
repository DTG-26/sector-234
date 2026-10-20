import * as THREE from 'three';
import { PostProcessing } from './PostProcessing';
import { Camera3D } from './Camera3D';

export class Engine3D {
  public renderer: THREE.WebGLRenderer;
  public scene: THREE.Scene;
  public cameraSystem: Camera3D;
  public postProcessing: PostProcessing;
  private container: HTMLElement;
  private isRunning: boolean = false;
  private lastTime: number = 0;
  private animationFrameId: number | null = null;
  public updateCallbacks: ((dt: number) => void)[] = [];

  constructor(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container with ID ${containerId} not found`);
    }
    this.container = container;

    // 1. Initialize High-Performance PBR Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
      depth: true,
    });
    const isMobile = window.innerWidth <= 900 || ('ontouchstart' in window);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(isMobile ? 1.0 : Math.min(window.devicePixelRatio, 1.5));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25; // Bright, crisp, vibrant
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = isMobile ? THREE.BasicShadowMap : THREE.PCFSoftShadowMap;

    this.container.appendChild(this.renderer.domElement);

    // 2. Initialize Scene with High-Contrast "Sector 234" Tactical Midnight Slate (#0B0F19)
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0b0f19); // Tactical Midnight Slate (#0B0F19)
    this.scene.fog = new THREE.FogExp2(0x0b0f19, 0.00035); // Reduced fog density for razor-sharp characters & platforms

    // 3. Initialize Camera System
    this.cameraSystem = new Camera3D(window.innerWidth / window.innerHeight);

    // 4. Initialize Post Processing (UnrealBloomPass)
    this.postProcessing = new PostProcessing(this.renderer, this.scene, this.cameraSystem.camera);

    // 5. High-Contrast Sector 234 Lighting (Crisp moonlight, platform rim highlights, zero milky glare)
    this.setupLighting();

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private setupLighting(): void {
    const isMobile = window.innerWidth <= 900 || ('ontouchstart' in window);

    // Deep ambient slate light so shadows have rich detail without milky haze
    const ambientLight = new THREE.AmbientLight(0x475569, 0.40);
    ambientLight.name = 'AmbientLight';
    this.scene.add(ambientLight);

    // Crisp high-contrast directional moonlight casting sharp tactical shadows
    const dirLight = new THREE.DirectionalLight(0xdbeafe, 1.15);
    dirLight.position.set(45, 75, 40);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = isMobile ? 512 : 1024;
    dirLight.shadow.mapSize.height = isMobile ? 512 : 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 160;
    const d = 55;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    dirLight.shadow.bias = -0.0005;
    dirLight.name = 'MainDirectionalLight';
    this.scene.add(dirLight);

    // Crisp rim lighting on 3D concrete and wooden platforms & character bevels
    const rimLight = new THREE.DirectionalLight(0x60a5fa, 0.55);
    rimLight.position.set(-35, 25, -30);
    rimLight.name = 'PlatformRimLight';
    this.scene.add(rimLight);

    // Strong Hemisphere Light for rich environmental & character ground fill
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x445544, 1.8);
    hemiLight.name = 'MainHemisphereLight';
    this.scene.add(hemiLight);

    // Strong Front-Facing Directional Light shining directly down camera Z-axis onto operators and weapons
    const frontLight = new THREE.DirectionalLight(0xffffff, 2.2);
    frontLight.position.set(15, 25, 35);
    frontLight.name = 'FrontCameraLight';
    this.scene.add(frontLight);
  }

  public setBlackout(enabled: boolean): void {
    const ambient = this.scene.getObjectByName('AmbientLight') as THREE.AmbientLight | null;
    const dir = this.scene.getObjectByName('MainDirectionalLight') as THREE.DirectionalLight | null;
    const rim = this.scene.getObjectByName('PlatformRimLight') as THREE.DirectionalLight | null;
    const hemi = this.scene.getObjectByName('MainHemisphereLight') as THREE.HemisphereLight | null;
    const front = this.scene.getObjectByName('FrontCameraLight') as THREE.DirectionalLight | null;
    if (enabled) {
      if (ambient) ambient.intensity = 0.15;
      if (dir) dir.intensity = 0.2;
      if (rim) rim.intensity = 0.1;
      if (hemi) hemi.intensity = 0.4;
      if (front) front.intensity = 0.4;
    } else {
      if (ambient) ambient.intensity = 0.40;
      if (dir) dir.intensity = 1.15;
      if (rim) rim.intensity = 0.55;
      if (hemi) hemi.intensity = 1.8;
      if (front) front.intensity = 2.2;
    }
  }

  private onWindowResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.cameraSystem.onResize(width / height);
    this.renderer.setSize(width, height);
    this.postProcessing.setSize(width, height);
  }

  public start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastTime = performance.now();
    this.loop();
  }

  public stop(): void {
    this.isRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  public onUpdate(callback: (dt: number) => void): void {
    this.updateCallbacks.push(callback);
  }

  private loop = (): void => {
    if (!this.isRunning) return;
    const now = performance.now();
    const rawDt = this.lastTime === 0 ? 0.016 : (now - this.lastTime) / 1000;
    this.lastTime = now;
    // Cap dt at 1/30s (0.033s) to prevent physics explosion/stutter on lag spikes
    const dt = Math.min(Math.max(rawDt, 0.001), 0.033);

    for (let i = 0; i < this.updateCallbacks.length; i++) {
      this.updateCallbacks[i](dt);
    }

    this.cameraSystem.update(dt);
    this.postProcessing.render();

    this.animationFrameId = requestAnimationFrame(this.loop);
  };
}
