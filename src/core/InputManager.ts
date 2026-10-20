import * as THREE from 'three';
import { InputState } from '../config/types';
import { MiniMilitiaController, MM_CONFIG } from './MiniMilitiaCore';

export class InputManager {
  public state: InputState = {
    moveX: 0,
    jump: false,
    groundSlam: false,
    rig: false,
    aimAngle: 0,
    aiming: false,
    firing: false,
    melee: false,
    throwBoom: false,
    swapWeapon: false,
    reload: false,
    isTouch: false,
    flyIntensity: 0,
  };

  private hasRequestedFullscreen: boolean = false;

  private camera: THREE.Camera;
  private canvas: HTMLElement;
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private mousePos: THREE.Vector2 = new THREE.Vector2();
  private planeZ0: THREE.Plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  public playerWorldPos: THREE.Vector3 = new THREE.Vector3(40, 25, 0);
  public mouseWorldPos: THREE.Vector3 = new THREE.Vector3(40, 25, 0);

  // Exact Mini Militia Multi-Touch Controller
  public mmController: MiniMilitiaController;

  // Holding buttons
  public isHoldingFlyButton: boolean = false;
  public isHoldingFireButton: boolean = false;

  // Compatibility getters for HUDCanvas
  public get isLeftActive(): boolean { return this.mmController.leftStick.active; }
  public get leftTouchStart(): THREE.Vector2 { return new THREE.Vector2(this.mmController.leftStick.originX, this.mmController.leftStick.originY); }
  public get leftTouchCurrent(): THREE.Vector2 { return new THREE.Vector2(this.mmController.leftStick.currX, this.mmController.leftStick.currY); }

  public get isRightActive(): boolean { return this.mmController.rightStick.active; }
  public get rightTouchStart(): THREE.Vector2 { return new THREE.Vector2(this.mmController.rightStick.originX, this.mmController.rightStick.originY); }
  public get rightTouchCurrent(): THREE.Vector2 { return new THREE.Vector2(this.mmController.rightStick.currX, this.mmController.rightStick.currY); }

  // Key state tracking
  private keys: Record<string, boolean> = {};

  constructor(canvas: HTMLElement, camera: THREE.Camera) {
    this.canvas = canvas;
    this.camera = camera;
    this.state.isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 1024);
    this.mmController = new MiniMilitiaController(canvas);

    this.setupDesktopListeners();
    this.setupHTMLButtonListeners();
  }

  private setupDesktopListeners(): void {
    window.addEventListener('keydown', (e) => {
      this.state.isTouch = false;
      this.keys[e.code] = true;

      if (e.code === 'KeyQ') this.state.swapWeapon = true;
      if (e.code === 'KeyR') this.state.reload = true;
      if (e.code === 'KeyE') this.state.throwBoom = true;
      if (e.code === 'KeyF' || e.code === 'KeyV') this.state.melee = true;
      if (e.code === 'ShiftLeft') this.state.rig = true;
      if ((e.code === 'KeyS' || e.code === 'ArrowDown') && !e.repeat) {
        this.state.groundSlam = false;
      }

      if (['Space', 'ArrowUp', 'ArrowDown'].includes(e.code)) {
        e.preventDefault();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    window.addEventListener('mousemove', (e) => {
      this.state.isTouch = false;
      this.mousePos.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mousePos.y = -(e.clientY / window.innerHeight) * 2 + 1;
      this.calculateMouseAim();
    });

    window.addEventListener('mousedown', (e) => {
      this.state.isTouch = false;
      if (e.button === 0) {
        this.state.firing = true;
      } else if (e.button === 1) {
        this.state.throwBoom = true;
      } else if (e.button === 2) {
        e.preventDefault();
        this.state.rig = true;
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.state.firing = false;
      }
    });

    window.addEventListener('contextmenu', (e) => e.preventDefault());

    window.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaY) > 20) {
        this.state.swapWeapon = true;
      }
    });
  }

  private calculateMouseAim(): void {
    this.raycaster.setFromCamera(this.mousePos, this.camera);
    const hit = this.raycaster.ray.intersectPlane(this.planeZ0, this.mouseWorldPos);
    if (hit) {
      const dx = this.mouseWorldPos.x - this.playerWorldPos.x;
      const dy = this.mouseWorldPos.y - (this.playerWorldPos.y + 0.95);
      const dist = Math.sqrt(dx * dx + dy * dy);
      // Only flip angle if cursor is outside deadzone (prevents 60fps whiplash when hovering on player/enemy)
      if (dist > 0.35) {
        this.state.aimAngle = Math.atan2(dy, dx);
        this.state.aiming = true;
      }
    }
  }

  // Hook dedicated HTML on-screen mobile buttons
  private setupHTMLButtonListeners(): void {
    const bindBtn = (id: string, onDown: () => void, onUp?: () => void) => {
      const btn = document.getElementById(id);
      if (!btn) return;

      const handleDown = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        this.state.isTouch = true;
        this.mmController.usingTouch = true;
        try {
          if ((e as any).pointerId) (btn as HTMLElement).setPointerCapture((e as PointerEvent).pointerId);
        } catch (_) {}
        onDown();
      };
      const handleUp = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        try {
          if ((e as any).pointerId) (btn as HTMLElement).releasePointerCapture((e as PointerEvent).pointerId);
        } catch (_) {}
        if (onUp) onUp();
      };

      btn.addEventListener('pointerdown', handleDown);
      btn.addEventListener('pointerup', handleUp);
      btn.addEventListener('pointercancel', handleUp);
      btn.addEventListener('touchstart', handleDown, { passive: false });
      btn.addEventListener('touchend', handleUp, { passive: false });
      btn.addEventListener('touchcancel', handleUp, { passive: false });
    };

    // [🔥 FLY / JETPACK] Button: Hold to fly!
    bindBtn(
      'btn-touch-fly',
      () => {
        this.isHoldingFlyButton = true;
        this.state.jump = true;
        this.triggerHaptic(20);
      },
      () => {
        this.isHoldingFlyButton = false;
        this.state.jump = false;
      }
    );

    // [🎯 FIRE] Dedicated Mobile Fire Button: Hold to continuously fire!
    bindBtn(
      'btn-touch-fire',
      () => {
        this.isHoldingFireButton = true;
        this.state.firing = true;
        this.triggerHaptic(15);
      },
      () => {
        this.isHoldingFireButton = false;
        if (!this.isRightActive) {
          this.state.firing = false;
        }
      }
    );

    // [⚡ RIG] Button
    bindBtn('btn-touch-rig', () => {
      this.state.rig = true;
      this.triggerHaptic(25);
    });

    // [💣 C4] Button
    bindBtn('btn-touch-c4', () => {
      this.state.throwBoom = true;
      this.triggerHaptic(25);
    });

    // [🔪 MELEE] Button
    bindBtn('btn-touch-melee', () => {
      this.state.melee = true;
      this.triggerHaptic(30);
    });

    // [🔄 SWAP] Button
    bindBtn('btn-touch-swap', () => {
      this.state.swapWeapon = true;
      this.triggerHaptic(20);
    });

    // [⚡ RELOAD] Button
    bindBtn('btn-touch-reload', () => {
      this.state.reload = true;
      this.triggerHaptic(20);
    });

    // [⛶ FULLSCREEN] Button
    bindBtn('btn-touch-fullscreen', () => {
      this.requestFullscreen();
      this.triggerHaptic(25);
    });
  }

  public requestFullscreen(): void {
    const doc = document as any;
    const docEl = document.documentElement as any;
    const isFull = doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement;
    if (!isFull) {
      const req = docEl.requestFullscreen || docEl.webkitRequestFullscreen || docEl.mozRequestFullScreen || docEl.msRequestFullscreen;
      if (req) {
        req.call(docEl).catch(() => {});
      }
    }
    try {
      if (screen.orientation && (screen.orientation as any).lock) {
        (screen.orientation as any).lock('landscape').catch(() => {});
      }
    } catch (_) {}

    // Fallback for mobile browsers to minimize/hide URL bar and resize canvas
    window.scrollTo(0, 1);
    
    // Explicitly sync canvases to window.innerWidth x window.innerHeight
    const hudCanvas = document.getElementById('hud-canvas') as HTMLCanvasElement | null;
    if (hudCanvas) {
      hudCanvas.width = window.innerWidth;
      hudCanvas.height = window.innerHeight;
    }
    const webglCanvas = document.getElementById('webgl-canvas');
    if (webglCanvas) {
      const c = webglCanvas.querySelector('canvas') as HTMLCanvasElement | null;
      if (c) {
        c.width = window.innerWidth;
        c.height = window.innerHeight;
      }
    }
    window.dispatchEvent(new Event('resize'));

    setTimeout(() => {
      window.scrollTo(0, 1);
      window.dispatchEvent(new Event('resize'));
    }, 120);
    setTimeout(() => {
      window.scrollTo(0, 1);
      window.dispatchEvent(new Event('resize'));
    }, 350);
  }

  private setupTouchListeners(): void {
    window.addEventListener('touchstart', () => {
      if (!this.hasRequestedFullscreen) {
        this.hasRequestedFullscreen = true;
        this.requestFullscreen();
      }
    }, { passive: true });
  }

  public triggerHaptic(durationMs: number = 25): void {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(durationMs);
      } catch (_) {}
    }
  }

  public update(): void {
    // Project player 3D position to 2D screen coordinates for mouse/touch aim reference
    const proj = this.playerWorldPos.clone().project(this.camera);
    const screenX = ((proj.x + 1) * 0.5) * window.innerWidth;
    const screenY = ((-proj.y + 1) * 0.5) * window.innerHeight;

    this.mmController.updateInputs(screenX, screenY);

    if (this.mmController.usingTouch) {
      this.state.isTouch = true;
      this.state.moveX = this.mmController.moveX;
      this.state.jump = this.mmController.isThrusting || this.isHoldingFlyButton;
      this.state.groundSlam = false;
      this.state.aimAngle = this.mmController.aimAngle;
      this.state.aiming = this.mmController.rightStick.active || this.isHoldingFireButton;
      this.state.firing = this.mmController.isFiring || this.isHoldingFireButton;

      if (this.mmController.triggerMelee) {
        this.state.melee = true;
        this.triggerHaptic(30);
      }
      if (this.mmController.triggerRig) {
        this.state.rig = true;
        this.triggerHaptic(25);
      }
      if (this.mmController.triggerBoom) {
        this.state.throwBoom = true;
        this.triggerHaptic(25);
      }
      if (this.mmController.triggerSwap) {
        this.state.swapWeapon = true;
        this.triggerHaptic(20);
      }
      if (this.mmController.triggerReload) {
        this.state.reload = true;
        this.triggerHaptic(20);
      }

      this.state.flyIntensity = Math.min(1.0, Math.abs(this.mmController.leftStick.normY));
      this.mmController.resetOneShotTriggers();
    } else {
      this.state.isTouch = false;
      let mx = 0;
      if (this.keys['KeyA'] || this.keys['ArrowLeft']) mx -= 1;
      if (this.keys['KeyD'] || this.keys['ArrowRight']) mx += 1;
      this.state.moveX = mx;

      this.state.jump = !!(this.keys['KeyW'] || this.keys['Space'] || this.keys['ArrowUp']) || this.isHoldingFlyButton;
      this.state.flyIntensity = this.state.jump ? 1.0 : 0;
      if (this.isHoldingFireButton) this.state.firing = true;

      this.calculateMouseAim();
    }
  }

  public resetOneShotFlags(): void {
    this.state.groundSlam = false;
    this.state.rig = false;
    this.state.melee = false;
    this.state.throwBoom = false;
    this.state.swapWeapon = false;
    this.state.reload = false;
  }
}
