import * as THREE from 'three';
import { ARENA_CONFIG } from '../config/constants';

export enum CameraZoomMode {
  CLOSE = 0,   // Tight 1x: Close, prominent commandos
  MEDIUM = 1,  // Balanced 2x: Mini Militia tactical standard
  WIDE = 2,    // Overview 3x: Long-range sniper view
}

export class Camera3D {
  public camera: THREE.PerspectiveCamera;
  public targetPosition: THREE.Vector3 = new THREE.Vector3(40, 25, 0);
  public currentPosition: THREE.Vector3 = new THREE.Vector3(40, 25, 16.5);
  public aimOffset: THREE.Vector2 = new THREE.Vector2(0, 0);
  public targetAimOffset: THREE.Vector2 = new THREE.Vector2(0, 0);
  public speedZoom: number = 0; // 0 to 1
  public targetSpeedZoom: number = 0;
  public isMobile: boolean = false;
  
  // Switchable Zoom Level (Default to Close 1x so characters look big and clear!)
  public zoomMode: CameraZoomMode = CameraZoomMode.CLOSE;

  // Trauma-based 3D screen shake
  private trauma: number = 0;
  private shakeOffset: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
  private lookTarget: THREE.Vector3 = new THREE.Vector3(40, 25, 0);

  constructor(aspect: number) {
    this.isMobile = window.innerWidth <= 900 || ('ontouchstart' in window);
    const baseZ = this.getBaseZ();

    this.camera = new THREE.PerspectiveCamera(
      ARENA_CONFIG.CAMERA_FOV,
      aspect,
      0.1,
      250.0
    );
    this.camera.position.set(40, 25, baseZ);
    this.currentPosition.set(40, 25, baseZ);
    this.camera.lookAt(40, 25, 0);
  }

  public getBaseZ(): number {
    if (this.isMobile) {
      switch (this.zoomMode) {
        case CameraZoomMode.CLOSE: return 14.5;
        case CameraZoomMode.MEDIUM: return 18.5;
        case CameraZoomMode.WIDE: return 23.5;
      }
    } else {
      switch (this.zoomMode) {
        case CameraZoomMode.CLOSE: return 16.5;
        case CameraZoomMode.MEDIUM: return 20.5;
        case CameraZoomMode.WIDE: return 26.0;
      }
    }
  }

  public cycleZoom(): CameraZoomMode {
    this.zoomMode = (this.zoomMode + 1) % 3;
    return this.zoomMode;
  }

  public getZoomLabel(): string {
    switch (this.zoomMode) {
      case CameraZoomMode.CLOSE: return '🔍 1x';
      case CameraZoomMode.MEDIUM: return '🔍 2x';
      case CameraZoomMode.WIDE: return '🔍 3x';
    }
  }

  public onResize(aspect: number): void {
    this.isMobile = window.innerWidth <= 900 || ('ontouchstart' in window);
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  public setFollowTarget(x: number, y: number): void {
    this.targetPosition.set(x, y, 0);
  }

  public setAimShift(dirX: number, dirY: number, isSniper: boolean = false): void {
    // Mini Militia camera lookahead: peek in the direction you aim
    const distance = isSniper ? 6.5 : 3.8;
    this.targetAimOffset.set(dirX * distance, dirY * distance * 0.7);
  }

  public setSpeedZoom(boostIntensity: number): void {
    this.targetSpeedZoom = THREE.MathUtils.clamp(boostIntensity, 0, 1);
  }

  public addTrauma(amount: number): void {
    this.trauma = THREE.MathUtils.clamp(this.trauma + amount, 0, 1.0);
  }

  public update(dt: number): void {
    const baseZ = this.getBaseZ();

    // 1. Smoothly interpolate aim offset (elastic Mini Militia camera peek)
    this.aimOffset.lerp(this.targetAimOffset, Math.min(dt * 5.5, 1.0));

    // 2. Smoothly interpolate speed zoom
    this.speedZoom = THREE.MathUtils.lerp(this.speedZoom, this.targetSpeedZoom, Math.min(dt * 3.0, 1.0));
    const targetZ = baseZ + this.speedZoom * 3.0;

    // 3. Smoothly follow target position with damping
    const followX = THREE.MathUtils.clamp(this.targetPosition.x + this.aimOffset.x, 5.0, 75.0);
    const followY = THREE.MathUtils.clamp(this.targetPosition.y + this.aimOffset.y, 3.5, 45.0);

    this.currentPosition.x = THREE.MathUtils.lerp(this.currentPosition.x, followX, Math.min(dt * 10.0, 1.0));
    this.currentPosition.y = THREE.MathUtils.lerp(this.currentPosition.y, followY, Math.min(dt * 10.0, 1.0));
    this.currentPosition.z = THREE.MathUtils.lerp(this.currentPosition.z, targetZ, Math.min(dt * 6.0, 1.0));

    // 4. Calculate Trauma Shake (Crisp tactile thump, no dizzying seizure or screen tearing)
    if (this.trauma > 0) {
      const shakePower = this.trauma * this.trauma;
      const time = performance.now() * 0.04;
      this.shakeOffset.set(
        (Math.sin(time * 1.8) + Math.cos(time * 3.3)) * shakePower * 0.22,
        (Math.cos(time * 2.4) + Math.sin(time * 2.8)) * shakePower * 0.22,
        Math.sin(time * 1.5) * shakePower * 0.1
      );
      this.trauma = Math.max(0, this.trauma - dt * 3.2);
    } else {
      this.shakeOffset.set(0, 0, 0);
    }

    // 5. Apply final camera position and look target
    this.camera.position.copy(this.currentPosition).add(this.shakeOffset);
    this.lookTarget.set(this.currentPosition.x, this.currentPosition.y, 0);
    this.camera.lookAt(this.lookTarget);
  }
}
