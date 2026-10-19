import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

export class PostProcessing {
  public composer: EffectComposer;
  public bloomPass: UnrealBloomPass;
  public renderPass: RenderPass;

  constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    const isMobile = window.innerWidth <= 900 || ('ontouchstart' in window);
    const renderTarget = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      samples: 0, // 0 samples eliminates mobile GPU stalls while keeping crisp rendering
    });

    this.composer = new EffectComposer(renderer, renderTarget);

    // 1. Scene Render Pass
    this.renderPass = new RenderPass(scene, camera);
    this.composer.addPass(this.renderPass);

    // 2. Subtle, crisp bloom pass (half resolution on mobile for 60fps throughput)
    const bloomW = isMobile ? Math.floor(window.innerWidth * 0.5) : window.innerWidth;
    const bloomH = isMobile ? Math.floor(window.innerHeight * 0.5) : window.innerHeight;
    const resolution = new THREE.Vector2(bloomW, bloomH);
    this.bloomPass = new UnrealBloomPass(
      resolution,
      isMobile ? 0.35 : 0.45,  // restrained, crisp glow
      isMobile ? 0.20 : 0.25,  // tight radius
      0.82                     // only bright lights glow
    );
    this.composer.addPass(this.bloomPass);

    // 3. Output pass for clean color rendering
    const outputPass = new OutputPass();
    this.composer.addPass(outputPass);
  }

  public setSize(width: number, height: number): void {
    const isMobile = window.innerWidth <= 900 || ('ontouchstart' in window);
    this.composer.setSize(width, height);
    if (isMobile) {
      this.bloomPass.resolution.set(Math.floor(width * 0.5), Math.floor(height * 0.5));
    } else {
      this.bloomPass.resolution.set(width, height);
    }
  }

  public render(): void {
    this.composer.render();
  }
}
