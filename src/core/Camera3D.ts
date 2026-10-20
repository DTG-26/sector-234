import * as THREE from 'three';
import { ARENA_CONFIG } from '../config/constants';
import { WeaponId } from '../config/types';

export enum CameraZoomMode {
  AUTO = 0,    // Dynamic Weapon-Driven Zoom (Berserker / CQB / Tactical / Heavy / Sniper)
  CLOSE = 1,   // Manual Close 1x
  WIDE = 2,    // Manual Wide 3x
}

export class Camera3D {
  public camera: THREE.PerspectiveCamera;
  public targetPosition: THREE.Vector3 = new THREE.Vector3(40, 25, 0);
  public currentPosition: THREE.Vector3 = new THREE.Vector3(40, 25, 18.0);
  public aimOffset: THREE.Vector2 = new THREE.Vector2(0, 0);
  public targetAimOffset: THREE.Vector2 = new THREE.Vector2(0, 0);
  public speedZoom: number = 0; // 0 to 1
  public targetSpeedZoom: number = 0;
  public isMobile: boolean = false;
  
  // Weapon Profile Parameters
  public activeWeapon: WeaponId = WeaponId.RIFLE_XAG47;
  public weaponTargetZ: number = 18.0;
  public weaponAimLead: number = 4.5;
  public weaponSpeedZoomMult: number = 1.0;

  // Tactical Rig Overrides
  public breachPullbackTimer: number = 0;
  public isSlideActive: boolean = false;

  // Switchable Zoom Level (Default to AUTO for weapon-driven playstyles)
  public zoomMode: CameraZoomMode = CameraZoomMode.AUTO;

  // Trauma-based 3D screen shake
  private trauma: number = 0;
  private shakeOffset: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
  private lookTarget: THREE.Vector3 = new THREE.Vector3(40, 25, 0);

  constructor(aspect: number) {
    this.isMobile = window.innerWidth <= 900 || ('ontouchstart' in window);
    this.setWeaponProfile(WeaponId.RIFLE_XAG47);

    const initialZ = this.getBaseZ();
    this.camera = new THREE.PerspectiveCamera(
      ARENA_CONFIG.CAMERA_FOV,
      aspect,
      0.1,
      250.0
    );
    this.camera.position.set(40, 25, initialZ);
    this.currentPosition.set(40, 25, initialZ);
    this.camera.lookAt(40, 25, 0);
  }

  /**
   * Automatically adapts camera distance, aim lookahead, and speed-zoom to active weapon
   */
  public setWeaponProfile(weaponId: WeaponId): void {
    this.activeWeapon = weaponId;

    switch (weaponId) {
      // 1. Berserker Melee Archetype (Takobin Kano Knife) - Ultra-tight visceral combat framing
      case WeaponId.CUTLASS:
        this.weaponTargetZ = this.isMobile ? 11.5 : 13.5;
        this.weaponAimLead = 2.2;
        this.weaponSpeedZoomMult = 1.25;
        break;

      // 2. Close-Quarters Archetype (Shotgun AA-12, Akimbo Uzis, Ghost SMG) - Action zoom
      case WeaponId.SHOTGUN_AA12:
      case WeaponId.AKIMBO_UZIS:
      case WeaponId.GHOST_SMG:
        this.weaponTargetZ = this.isMobile ? 14.5 : 16.5;
        this.weaponAimLead = 3.6;
        this.weaponSpeedZoomMult = 1.15;
        break;

      // 3. Tactical Spec-Ops Archetype (XAG-47, Judge, Pistol, Shock-Arc) - Balanced framing
      case WeaponId.RIFLE_XAG47:
      case WeaponId.REVOLVER_JUDGE:
      case WeaponId.PISTOL_XAG9:
      case WeaponId.SHOCK_ARC:
        this.weaponTargetZ = this.isMobile ? 15.5 : 18.0;
        this.weaponAimLead = 4.5;
        this.weaponSpeedZoomMult = 1.0;
        break;

      // 4. Heavy Artillery Archetype (Bunker RPG, Vulcan Minigun, Ricochet Saw) - Overview
      case WeaponId.BUNKER_RPG:
      case WeaponId.VULCAN_MINIGUN:
      case WeaponId.RICOCHET_SAW:
        this.weaponTargetZ = this.isMobile ? 17.5 : 20.5;
        this.weaponAimLead = 5.2;
        this.weaponSpeedZoomMult = 0.85;
        break;

      // 5. Long-Range Recon Archetype (Rail-Sniper) - Eagle-eye marksman view
      case WeaponId.RAIL_SNIPER:
        this.weaponTargetZ = this.isMobile ? 22.0 : 25.5;
        this.weaponAimLead = 7.5;
        this.weaponSpeedZoomMult = 0.70;
        break;

      default:
        this.weaponTargetZ = this.isMobile ? 15.5 : 18.0;
        this.weaponAimLead = 4.5;
        this.weaponSpeedZoomMult = 1.0;
        break;
    }
  }

  // Tactical Rig Camera Triggers
  public triggerBreachZoom(): void {
    this.breachPullbackTimer = 0.45;
  }

  public triggerSlideZoom(active: boolean): void {
    this.isSlideActive = active;
  }

  public triggerPhaseSnap(destX: number, destY: number): void {
    this.currentPosition.x = destX;
    this.currentPosition.y = destY;
    this.addTrauma(0.08);
  }

  public triggerAnchorSlingshot(): void {
    this.addTrauma(0.18);
  }

  public getBaseZ(): number {
    if (this.zoomMode === CameraZoomMode.AUTO) {
      return this.weaponTargetZ;
    } else if (this.zoomMode === CameraZoomMode.CLOSE) {
      return this.isMobile ? 13.0 : 15.0;
    } else {
      return this.isMobile ? 22.0 : 26.0;
    }
  }

  public cycleZoom(): CameraZoomMode {
    this.zoomMode = (this.zoomMode + 1) % 3;
    return this.zoomMode;
  }

  public getZoomLabel(): string {
    switch (this.zoomMode) {
      case CameraZoomMode.AUTO: return '🔍 DYN';
      case CameraZoomMode.CLOSE: return '🔍 1x';
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

  public setAimShift(dirX: number, dirY: number): void {
    // Weapon-specific lookahead peek lead
    const leadDistance = this.weaponAimLead;
    const upwardBias = this.activeWeapon === WeaponId.BUNKER_RPG ? 0.35 : 0.0;
    this.targetAimOffset.set(
      dirX * leadDistance,
      (dirY + upwardBias) * leadDistance * 0.72
    );
  }

  public setSpeedZoom(boostIntensity: number): void {
    this.targetSpeedZoom = THREE.MathUtils.clamp(boostIntensity * this.weaponSpeedZoomMult, 0, 1);
  }

  public addTrauma(amount: number): void {
    this.trauma = THREE.MathUtils.clamp(this.trauma + amount, 0, 1.0);
  }

  public update(dt: number): void {
    let baseZ = this.getBaseZ();
    let offsetY = 0;

    // Tactical Rig overrides
    if (this.breachPullbackTimer > 0) {
      this.breachPullbackTimer -= dt;
      baseZ = Math.max(baseZ, this.isMobile ? 18.5 : 21.5);
    }

    if (this.isSlideActive) {
      baseZ = this.isMobile ? 12.5 : 14.5;
      offsetY = -0.65;
    }

    // 1. Smoothly interpolate aim offset (weapon-specific peek lead)
    this.aimOffset.lerp(this.targetAimOffset, Math.min(dt * 6.0, 1.0));

    // 2. Smoothly interpolate speed zoom
    this.speedZoom = THREE.MathUtils.lerp(this.speedZoom, this.targetSpeedZoom, Math.min(dt * 3.5, 1.0));
    const targetZ = baseZ + this.speedZoom * 3.2;

    // 3. Smoothly follow target position with damping
    const followX = THREE.MathUtils.clamp(this.targetPosition.x + this.aimOffset.x, 5.0, 75.0);
    const followY = THREE.MathUtils.clamp(this.targetPosition.y + this.aimOffset.y + offsetY, 3.5, 45.0);

    this.currentPosition.x = THREE.MathUtils.lerp(this.currentPosition.x, followX, Math.min(dt * 10.0, 1.0));
    this.currentPosition.y = THREE.MathUtils.lerp(this.currentPosition.y, followY, Math.min(dt * 10.0, 1.0));
    this.currentPosition.z = THREE.MathUtils.lerp(this.currentPosition.z, targetZ, Math.min(dt * 5.5, 1.0));

    // 4. Calculate Trauma Shake
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

