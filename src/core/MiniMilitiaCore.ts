// ============================================================================
// MINI MILITIA "SWEET SPOT" PHYSICS & TWIN-STICK ENGINE FOR BROWSER
// ============================================================================

export const MM_CONFIG = {
  // --- GRAVITY & VERTICAL THRUST (THE SIGNATURE MINI MILITIA FLOAT FEEL) ---
  GRAVITY: 940,              // Natural downward pull (px/s^2)
  JETPACK_THRUST: 1950,      // Smooth upward thrust (comfortably overcomes gravity without rocket hyperspeed)
  MAX_ASCEND_SPEED: -480,    // Controlled terminal upward velocity
  MAX_FALL_SPEED: 660,       // Natural falling velocity
  FUEL_MAX: 100,
  FUEL_BURN_RATE: 0,         // UNLIMITED NITRO: No fuel drain, continuous flight!
  FUEL_REGEN_RATE: 100,      // Instantly full
  FUEL_REGEN_DELAY: 0,

  // --- HORIZONTAL MOMENTUM & AIR DRIFT ---
  GROUND_ACCEL: 2800,        // Natural snappy start without hyper-speed
  AIR_ACCEL: 1500,           // Controlled horizontal steering while flying
  MAX_RUN_SPEED: 320,        // Classic balanced arcade speed (comfortable and readable)
  GROUND_FRICTION: 0.82,     // Stops cleanly on floors when stick is released
  AIR_DRAG: 0.965,           // CRITICAL: High retention gives the signature Mini Militia mid-air glide/drift!

  // --- RIGHT STICK 2-ZONE AIM & AUTO-FIRE THRESHOLDS ---
  STICK_MAX_RADIUS: 68,      // Standard visual drag radius in CSS pixels
  DEADZONE: 0.10,            // 10%: Comfortable thumb deadzone
  FIRE_THRESHOLD: 0.30,      // 30%: Smooth auto-fire trigger
  TAP_MELEE_MAX_MS: 170,     // Quick tap threshold

  // --- LEFT STICK VERTICAL ZONES ---
  THRUST_Y_THRESHOLD: -0.25, // Pushing Left Stick comfortably above center ignites Jetpack
  SLAM_Y_THRESHOLD: 999,     // Violent instant drop disabled - smooth natural descent instead

  // --- CAMERA LOOK-AHEAD (PEEK WHERE YOU AIM) ---
  CAM_LOOKAHEAD_DIST: 200,   // Shifts camera comfortably toward aim angle
  CAM_SMOOTH_LERP: 0.085,    // Smooth elastic camera follow

  // --- 3D ARENA WORLD CONVERSION SCALE ---
  // In our Three.js world, 1 unit = 1 meter / tile.
  // 320 px/s corresponds to 9.8 m/s, yielding scale S = 9.8 / 320 ≈ 0.0306
  WORLD_SCALE: 9.8 / 320,
};

export interface StickState {
  active: boolean;
  touchId: number | null;    // Locks onto a specific thumb so 2 thumbs NEVER conflict
  originX: number;
  originY: number;
  currX: number;
  currY: number;
  normX: number;             // -1.0 to +1.0
  normY: number;             // -1.0 to +1.0
  magnitude: number;         // 0.0 to 1.0
  touchStartTime: number;
}

export class MiniMilitiaController {
  public leftStick: StickState = this.createEmptyStick();
  public rightStick: StickState = this.createEmptyStick();

  // Exposed Control Outputs for the Player Entity
  public moveX: number = 0;          // -1 to 1 horizontal input
  public isThrusting: boolean = false;
  public isSlamming: boolean = false;
  public aimAngle: number = 0;       // Radians (-PI to PI, standard polar: 0 = right, PI/2 = up)
  public facingDir: 1 | -1 = 1;      // 1 = Right, -1 = Left
  public isFiring: boolean = false;
  public triggerMelee: boolean = false;
  public triggerRig: boolean = false;
  public triggerBoom: boolean = false;
  public triggerSwap: boolean = false;
  public triggerReload: boolean = false;

  // Desktop fallback state
  public usingTouch: boolean = false;
  private keys: Set<string> = new Set();
  private mousePos = { x: 0, y: 0 };
  private mouseDown = false;

  constructor(private canvas: HTMLElement) {
    this.bindEvents();
  }

  private createEmptyStick(): StickState {
    return {
      active: false, touchId: null,
      originX: 0, originY: 0, currX: 0, currY: 0,
      normX: 0, normY: 0, magnitude: 0, touchStartTime: 0
    };
  }

  private bindEvents() {
    // PREVENT BROWSER SCROLLING / ZOOMING ON MOBILE
    this.canvas.style.touchAction = 'none';
    this.canvas.style.userSelect = 'none';

    // Auto-detect touch device on startup
    if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 1024)) {
      this.usingTouch = true;
    }

    // --- MULTI-TOUCH LOCKING USING Touch.identifier ON WINDOW ---
    window.addEventListener('touchstart', (e: TouchEvent) => {
      this.usingTouch = true;
      const halfWidth = window.innerWidth * 0.5;

      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        const target = t.target as HTMLElement | null;

        // Skip buttons and menu inputs so dedicated actions work seamlessly
        if (target && (target.closest('.touch-btn') || target.closest('#ui-overlay') || target.tagName === 'BUTTON' || target.tagName === 'INPUT')) {
          continue;
        }

        const x = t.clientX;
        const y = t.clientY;

        // Left half of screen -> Left Movement/Jetpack Stick
        if (x < halfWidth && this.leftStick.touchId === null) {
          this.leftStick.active = true;
          this.leftStick.touchId = t.identifier;
          this.leftStick.originX = x;
          this.leftStick.originY = y;
          this.leftStick.currX = x;
          this.leftStick.currY = y;
          this.leftStick.touchStartTime = performance.now();
        }
        // Right half of screen -> Right 2-Zone Aim & Fire Stick
        else if (x >= halfWidth && this.rightStick.touchId === null) {
          this.rightStick.active = true;
          this.rightStick.touchId = t.identifier;
          this.rightStick.originX = x;
          this.rightStick.originY = y;
          this.rightStick.currX = x;
          this.rightStick.currY = y;
          this.rightStick.touchStartTime = performance.now();
        }
      }
    }, { passive: false });

    window.addEventListener('touchmove', (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        const x = t.clientX;
        const y = t.clientY;

        if (t.identifier === this.leftStick.touchId) {
          this.updateStickMath(this.leftStick, x, y);
        } else if (t.identifier === this.rightStick.touchId) {
          this.updateStickMath(this.rightStick, x, y);
        }
      }
    }, { passive: false });

    const endTouch = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];

        if (t.identifier === this.leftStick.touchId) {
          this.resetStick(this.leftStick);
        } else if (t.identifier === this.rightStick.touchId) {
          this.resetStick(this.rightStick);
        }
      }
    };

    window.addEventListener('touchend', endTouch, { passive: false });
    window.addEventListener('touchcancel', endTouch, { passive: false });

    // --- DESKTOP KEYBOARD & MOUSE AUTO-FALLBACK ---
    window.addEventListener('keydown', (e) => {
      this.usingTouch = false;
      this.keys.add(e.code);
      if (e.code === 'ShiftLeft') this.triggerRig = true;
      if (e.code === 'KeyE') this.triggerBoom = true;
      if (e.code === 'KeyF' || e.code === 'KeyV') this.triggerMelee = true;
      if (e.code === 'KeyQ') this.triggerSwap = true;
      if (e.code === 'KeyR') this.triggerReload = true;
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('mousemove', (e) => {
      this.usingTouch = false;
      this.mousePos.x = e.clientX;
      this.mousePos.y = e.clientY;
    });
    window.addEventListener('mousedown', (e) => {
      if (e.button === 0) this.mouseDown = true;
      if (e.button === 2) this.triggerRig = true;
    });
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouseDown = false;
    });
    window.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  private updateStickMath(stick: StickState, x: number, y: number) {
    const dx = x - stick.originX;
    const dy = y - stick.originY;
    const dist = Math.hypot(dx, dy);
    const maxR = MM_CONFIG.STICK_MAX_RADIUS;

    const clampedDist = Math.min(dist, maxR);
    const angle = Math.atan2(dy, dx);

    stick.currX = stick.originX + Math.cos(angle) * clampedDist;
    stick.currY = stick.originY + Math.sin(angle) * clampedDist;
    stick.magnitude = clampedDist / maxR; // 0.0 to 1.0
    stick.normX = (clampedDist / maxR) * Math.cos(angle);
    stick.normY = (clampedDist / maxR) * Math.sin(angle);
  }

  private resetStick(stick: StickState) {
    stick.active = false;
    stick.touchId = null;
    stick.normX = 0;
    stick.normY = 0;
    stick.magnitude = 0;
  }

  public updateInputs(playerScreenX: number, playerScreenY: number) {
    if (this.usingTouch) {
      // 1. LEFT STICK: Horizontal Move + Smooth Analog Jetpack Thrust
      this.moveX = Math.abs(this.leftStick.normX) > MM_CONFIG.DEADZONE ? this.leftStick.normX : 0;
      this.isThrusting = this.leftStick.active && this.leftStick.normY < MM_CONFIG.THRUST_Y_THRESHOLD;
      this.isSlamming = false; // Smooth natural descent instead of violent slam

      // 2. RIGHT STICK: 2-Zone Aim (Inner Ring) vs Auto-Fire (Outer Ring)
      // Note: In 2D screen coords, Y goes down, so 3D world aimAngle is atan2(-normY, normX)
      if (this.rightStick.active && this.rightStick.magnitude > MM_CONFIG.DEADZONE) {
        this.aimAngle = Math.atan2(-this.rightStick.normY, this.rightStick.normX);
        this.facingDir = Math.abs(this.aimAngle) > Math.PI * 0.5 ? -1 : 1;
        // Fire when thumb pushes past threshold
        this.isFiring = this.rightStick.magnitude >= MM_CONFIG.FIRE_THRESHOLD;
      } else {
        this.isFiring = false;
      }
    } else {
      // DESKTOP WASD + MOUSE AIM
      const left = this.keys.has('KeyA') || this.keys.has('ArrowLeft') ? -1 : 0;
      const right = this.keys.has('KeyD') || this.keys.has('ArrowRight') ? 1 : 0;
      this.moveX = left + right;
      this.isThrusting = this.keys.has('KeyW') || this.keys.has('Space') || this.keys.has('ArrowUp');
      this.isSlamming = false;

      this.aimAngle = Math.atan2(-(this.mousePos.y - playerScreenY), this.mousePos.x - playerScreenX);
      this.facingDir = Math.abs(this.aimAngle) > Math.PI * 0.5 ? -1 : 1;
      this.isFiring = this.mouseDown;
    }
  }

  public resetOneShotTriggers() {
    this.triggerMelee = false;
    this.triggerRig = false;
    this.triggerBoom = false;
    this.triggerSwap = false;
    this.triggerReload = false;
  }
}

// ============================================================================
// MINI MILITIA 3D PLAYER PHYSICS STEP (PROPORTIONALLY SCALED TO ARENA METERS)
// ============================================================================
export function stepMiniMilitiaPhysics3D(
  player: {
    vx: number;
    vy: number;
    onGround: boolean;
    fuel: number;
    fuelDelayTimer: number;
  },
  ctrl: MiniMilitiaController,
  dt: number
) {
  const S = MM_CONFIG.WORLD_SCALE;
  const maxRunSpeed = MM_CONFIG.MAX_RUN_SPEED * S;     // ~11.5 m/s
  const groundAccel = MM_CONFIG.GROUND_ACCEL * S;     // ~96.5 m/s^2
  const airAccel = MM_CONFIG.AIR_ACCEL * S;           // ~50.1 m/s^2
  const jetpackThrust = MM_CONFIG.JETPACK_THRUST * S; // ~62.3 m/s^2 (upward +Y)
  const gravity = MM_CONFIG.GRAVITY * S;             // ~34.1 m/s^2 (downward -Y)
  const maxAscend = Math.abs(MM_CONFIG.MAX_ASCEND_SPEED) * S; // ~16.3 m/s (upward)
  const maxFall = MM_CONFIG.MAX_FALL_SPEED * S;       // ~23.0 m/s (downward)

  // 1. HORIZONTAL ACCELERATION & SIGNATURE AIR-DRIFT
  const accel = player.onGround ? groundAccel : airAccel;
  if (ctrl.moveX !== 0) {
    player.vx += ctrl.moveX * accel * dt;
    if (Math.abs(player.vx) > maxRunSpeed) {
      player.vx = Math.sign(player.vx) * maxRunSpeed;
    }
  } else {
    // Ground stops fast (0.82), Air glides smoothly (0.965) like Mini Militia!
    const damping = player.onGround ? MM_CONFIG.GROUND_FRICTION : MM_CONFIG.AIR_DRAG;
    player.vx *= Math.pow(damping, dt * 60);
    if (Math.abs(player.vx) < 0.15) player.vx = 0;
  }

  // 2. JETPACK / THRUSTER vs GRAVITY CURVE (In 3D, +Y is UP, -Y is DOWN)
  if (ctrl.isThrusting && player.fuel > 0) {
    const thrustStrength = ctrl.usingTouch
      ? Math.min(1, Math.abs(ctrl.leftStick.normY))
      : 1.0;
    player.vy += jetpackThrust * thrustStrength * dt;
    player.onGround = false;

    // Burn fuel & reset regen delay
    player.fuel = Math.max(0, player.fuel - MM_CONFIG.FUEL_BURN_RATE * dt);
    player.fuelDelayTimer = MM_CONFIG.FUEL_REGEN_DELAY;
  } else {
    // Regenerate fuel after short delay
    if (player.fuelDelayTimer > 0) {
      player.fuelDelayTimer -= dt;
    } else {
      const regenMultiplier = player.onGround ? 1.6 : 1.0; // Refills faster on ground
      player.fuel = Math.min(MM_CONFIG.FUEL_MAX, player.fuel + MM_CONFIG.FUEL_REGEN_RATE * regenMultiplier * dt);
    }
  }

  // 3. APPLY GRAVITY & CLAMP VERTICAL SPEEDS
  player.vy -= gravity * dt;
  if (player.vy > maxAscend) player.vy = maxAscend;
  if (player.vy < -maxFall) player.vy = -maxFall;
}
