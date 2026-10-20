import * as THREE from 'three';
import { Player } from '../entities/Player';
import { InputManager } from '../core/InputManager';
import { ModeManager } from '../modes/ModeManager';
import { WEAPON_REGISTRY } from '../config/constants';
import { VisionSystem3D } from '../world/VisionSystem3D';
import { HeistAct, MovementRigType, WeaponId } from '../config/types';

export interface FloatingText {
  text: string;
  x: number;
  y: number;
  color: string;
  size: number;
  alpha: number;
  life: number;
}

export class HUDCanvas {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  private camera: THREE.Camera;
  public floatingTexts: FloatingText[] = [];
  private projVec: THREE.Vector3 = new THREE.Vector3();

  constructor(canvasId: string, camera: THREE.Camera) {
    const el = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!el) throw new Error(`HUD Canvas ${canvasId} not found`);
    this.canvas = el;
    this.ctx = this.canvas.getContext('2d')!;
    this.camera = camera;

    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
  }

  private resize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  public addDamagePopup(x: number, y: number, text: string, color: string = '#ff3366', size: number = 22): void {
    this.projVec.set(x, y, 0).project(this.camera);
    const screenX = (this.projVec.x * 0.5 + 0.5) * this.canvas.width;
    const screenY = (-(this.projVec.y * 0.5) + 0.5) * this.canvas.height;

    this.floatingTexts.push({
      text,
      x: screenX,
      y: screenY,
      color,
      size,
      alpha: 1.0,
      life: 0,
    });
  }

  public render(
    localPlayer: Player,
    input: InputManager,
    modeManager: ModeManager,
    vision: VisionSystem3D,
    dt: number = 0.016
  ): void {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);


    // 1. Top Tactical Status Bar
    this.renderTopBar(ctx, w, h, localPlayer, modeManager);

    // 2. Off-Screen Objective & Odogwu Radar Compass Pointers
    this.renderEdgeIndicators(ctx, w, h, localPlayer, modeManager);

    // 3. Floating Combat Damage Numbers
    this.renderFloatingTexts(ctx, dt);

    // 4. Update HTML Mobile Buttons & Render Visual Joystick Knobs
    this.updateHTMLControls(localPlayer, input);
    this.renderVisualSticks(ctx, w, h, input, localPlayer);

    // 5. Tactical Rig Radial Cooldown Meter
    this.renderRigCooldown(ctx, w, h, localPlayer, input.state.isTouch);

    // 6. Critical Casualty Screen
    if (localPlayer.stats.isDead) {
      this.renderDeathScreen(ctx, w, h, localPlayer);
    }
  }

  private renderTopBar(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    player: Player,
    mode: ModeManager
  ): void {
    const isMobile = w < 900;
    const plateW = isMobile ? 200 : 280;

    // Center Timer & Mode Plate - Compact glass pill (25% reduced height, pinned at y = 8)
    const plateH = isMobile ? 30 : 34;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.45)';
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(w * 0.5 - plateW * 0.5, 8, plateW, plateH, 8);
    ctx.fill();
    ctx.stroke();

    const timeRemaining = Math.max(0, Math.floor(mode.getTimeRemaining()));
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    const timeStr = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

    let modeLabel = mode.currentMode.replace('_', ' ');
    if (mode.heistMode) {
      if (mode.heistMode.currentAct === HeistAct.ACT_1_BREACH) {
        modeLabel = `ACT I: VAULT (${Math.round(mode.heistMode.vaultHP)} HP)`;
      } else if (mode.heistMode.currentAct === HeistAct.ACT_2_CARRIER) {
        modeLabel = `ACT II: SARKI CARRIER`;
      } else if (mode.heistMode.currentAct === HeistAct.ACT_3_EXTRACTION) {
        modeLabel = mode.heistMode.isExtractionContested ? `⚠️ LZ CONTESTED!` : `ACT III: CHOPPER EVAC`;
      }
    }

    ctx.fillStyle = mode.heistMode?.isExtractionContested ? '#ef4444' : '#f59e0b';
    ctx.font = `800 ${isMobile ? 8.5 : 9.5}px "JetBrains Mono", monospace`;
    ctx.textAlign = 'center';
    ctx.fillText(modeLabel, w * 0.5, isMobile ? 15 : 17);

    ctx.fillStyle = timeRemaining <= 30 ? '#ef4444' : '#f8fafc';
    ctx.font = `800 ${isMobile ? 14 : 16}px "JetBrains Mono", monospace`;
    ctx.textAlign = 'center';
    ctx.fillText(timeStr, w * 0.5, isMobile ? 29 : 32);

    // Kills / Deaths
    ctx.fillStyle = '#cbd5e1';
    ctx.font = `700 ${isMobile ? 9 : 10}px "JetBrains Mono", monospace`;
    ctx.textAlign = 'right';
    ctx.fillText(`K:${player.stats.kills} D:${player.stats.deaths}`, w * 0.5 + plateW * 0.5 - 8, isMobile ? 29 : 32);


    // PROMINENT DEDICATED BOUNTY CASH BADGE (₦) - Compact glass pill (25% reduced height, pinned at y = 8)
    const cashBadgeW = isMobile ? 130 : 155;
    const cashBadgeH = isMobile ? 26 : 28;
    const cashBadgeX = Math.max(16, w * 0.5 - plateW * 0.5 - cashBadgeW - 10);
    const cashBadgeY = 8;

    ctx.fillStyle = 'rgba(6, 78, 59, 0.70)';
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(cashBadgeX, cashBadgeY, cashBadgeW, cashBadgeH, 8);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#34d399';
    ctx.font = `800 ${isMobile ? 12 : 13.5}px "JetBrains Mono", monospace`;
    ctx.textAlign = 'center';
    ctx.fillText(`💰 ₦${player.stats.cash.toLocaleString()}`, cashBadgeX + cashBadgeW * 0.5, cashBadgeY + (isMobile ? 17 : 19));

    // Top-Left HP & Unlimited Nitro Fuel Bars
    const barX = 16;
    const barY = isMobile ? 42 : 46;
    const barW = isMobile ? 110 : 145;

    // HP Bar
    ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
    ctx.fillRect(barX, barY, barW, 9);
    const hpPct = Math.max(0, player.stats.hp / player.stats.maxHp);
    ctx.fillStyle = hpPct > 0.35 ? '#10b981' : '#ef4444';
    ctx.fillRect(barX, barY, barW * hpPct, 9);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.strokeRect(barX, barY, barW, 9);

    // Armor Bar
    ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
    ctx.fillRect(barX, barY + 11, barW, 4);
    const armPct = Math.max(0, player.stats.armor / player.stats.maxArmor);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(barX, barY + 11, barW * armPct, 4);

    // UNLIMITED NITRO FUEL BAR (Always 100% full glowing gold!)
    ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
    ctx.fillRect(barX, barY + 17, barW, 5);
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(barX, barY + 17, barW, 5);
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.55)';
    ctx.strokeRect(barX, barY + 17, barW, 5);

    ctx.fillStyle = '#fbbf24';
    ctx.font = '800 8.5px "JetBrains Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillText('⚡ UNLIMITED NITRO', barX, barY + 32);
  }

  private updateHTMLControls(player: Player, input: InputManager): void {
    // 1. Swap Button Text
    const btnSwap = document.getElementById('btn-touch-swap');
    if (btnSwap) {
      const activeDef = WEAPON_REGISTRY[player.stats.activeWeapon];
      const ammoCount = player.stats.ammo[player.stats.activeWeapon];
      if (player.reloadTimer > 0) {
        btnSwap.innerText = `⚡ RLD ${player.reloadTimer.toFixed(1)}s`;
      } else {
        btnSwap.innerText = `🔄 ${activeDef.name.split(' ')[0]} [${ammoCount}]`;
      }
    }

    // 2. Fire Button State
    const btnFire = document.getElementById('btn-touch-fire');
    if (btnFire) {
      if (player.reloadTimer > 0) {
        btnFire.innerText = `RLD ${player.reloadTimer.toFixed(1)}s`;
        btnFire.style.opacity = '0.5';
      } else {
        btnFire.innerText = '🎯 FIRE';
        btnFire.style.opacity = input.state.firing ? '1.0' : '0.85';
      }
    }

    // 3. Rig / Ability Button Cooldown Text & Specific Ability Name
    const btnRig = document.getElementById('btn-touch-rig');
    if (btnRig) {
      if (player.stats.rigCooldownTimer > 0) {
        btnRig.innerText = `${player.stats.rigCooldownTimer.toFixed(1)}s`;
        btnRig.style.opacity = '0.45';
      } else {
        const names: Record<string, string> = {
          'BREACH_BOOSTER': '🚀 BOOST',
          'OVERDRIVE_SLIDE': '⚡ SLIDE',
          'PHASE_DASH': '✨ PHASE',
          'GLITCH_ANCHOR': '⚓ RECALL',
        };
        btnRig.innerText = names[player.stats.rigType] || '⚡ RIG';
        btnRig.style.opacity = '0.9';
      }
    }

    // 4. C4 Button Count
    const btnC4 = document.getElementById('btn-touch-c4');
    if (btnC4) {
      btnC4.innerText = `💣 C4 [${player.stats.c4Count}]`;
    }

    // 5. Fly Button state
    const btnFly = document.getElementById('btn-touch-fly');
    if (btnFly) {
      btnFly.style.opacity = player.isJetFlying ? '1.0' : '0.85';
    }
  }

  private renderVisualSticks(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    input: InputManager,
    player: Player
  ): void {
    const isTouch = input.state.isTouch || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 1024);
    if (!isTouch) return; // Only draw virtual sticks on touch / mobile devices

    // 1. LEFT STICK (Analog Move + Jetpack Hover + Curved Cyan Fuel Gauge)
    const leftBaseX = input.isLeftActive ? input.leftTouchStart.x : 95;
    const leftBaseY = input.isLeftActive ? input.leftTouchStart.y : h - 95;
    const leftKnobX = input.isLeftActive ? input.leftTouchCurrent.x : leftBaseX;
    const leftKnobY = input.isLeftActive ? input.leftTouchCurrent.y : leftBaseY;
    const leftRadius = 56;

    // Left Stick Base Disc
    ctx.beginPath();
    ctx.arc(leftBaseX, leftBaseY, leftRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.45)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Curved Cyan Fuel/Thruster Gauge Bar wrapped around the perimeter of the Left Stick
    const fuelRatio = Math.max(0, Math.min(1.0, player.jetFuel / player.maxJetFuel));
    const startAngle = Math.PI * 0.75; // 135 deg
    const maxArcLength = Math.PI * 1.5; // 270 deg arc around the left stick
    const endAngle = startAngle + maxArcLength * fuelRatio;

    // Fuel Gauge Background Track
    ctx.beginPath();
    ctx.arc(leftBaseX, leftBaseY, leftRadius + 4, startAngle, startAngle + maxArcLength);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.lineWidth = 4.0;
    ctx.stroke();

    // Active Glowing Cyan Fuel Gauge Fill
    if (fuelRatio > 0.01) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(leftBaseX, leftBaseY, leftRadius + 4, startAngle, endAngle);
      ctx.strokeStyle = fuelRatio > 0.25 ? '#06b6d4' : '#ef4444';
      ctx.lineWidth = 4.5;
      ctx.shadowColor = fuelRatio > 0.25 ? '#06b6d4' : '#ef4444';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();
    }

    // Left Stick Knob (Glassmorphic Cyan)
    ctx.beginPath();
    ctx.arc(leftKnobX, leftKnobY, 22, 0, Math.PI * 2);
    ctx.fillStyle = player.isJetFlying ? 'rgba(6, 182, 212, 0.55)' : 'rgba(56, 189, 248, 0.35)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.stroke();


    // 2. RIGHT STICK (Mini Militia 2-Zone Aim & Auto-Fire)
    const rightBaseX = input.isRightActive ? input.rightTouchStart.x : w - 95;
    const rightBaseY = input.isRightActive ? input.rightTouchStart.y : h - 95;
    const rightKnobX = input.isRightActive ? input.rightTouchCurrent.x : rightBaseX;
    const rightKnobY = input.isRightActive ? input.rightTouchCurrent.y : rightBaseY;

    const rDist = Math.hypot(rightKnobX - rightBaseX, rightKnobY - rightBaseY);
    const maxRadius = 68; // STICK_MAX_RADIUS
    const innerRadius = maxRadius * 0.35; // 35% responsive threshold (~23.8px)
    const isFiringZone = (rDist >= innerRadius) || input.state.firing;

    // Right Stick Base Disc
    ctx.beginPath();
    ctx.arc(rightBaseX, rightBaseY, maxRadius, 0, Math.PI * 2);
    ctx.fillStyle = isFiringZone ? 'rgba(239, 68, 68, 0.16)' : 'rgba(15, 23, 42, 0.45)';
    ctx.fill();

    // Inner Ring (68% radius): Dotted white tactical circle (Aim Zone)
    ctx.save();
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(rightBaseX, rightBaseY, innerRadius, 0, Math.PI * 2);
    ctx.strokeStyle = isFiringZone ? 'rgba(239, 68, 68, 0.6)' : 'rgba(255, 255, 255, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();

    // Outer Ring (100% radius): Turns Glowing Crimson Red when thumb crosses 68%
    ctx.save();
    ctx.beginPath();
    ctx.arc(rightBaseX, rightBaseY, maxRadius, 0, Math.PI * 2);
    if (isFiringZone) {
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3.0;
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 16;
    } else {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.lineWidth = 1.5;
    }
    ctx.stroke();
    ctx.restore();

    // Right Knob
    ctx.save();
    ctx.beginPath();
    ctx.arc(rightKnobX, rightKnobY, 22, 0, Math.PI * 2);
    if (isFiringZone) {
      ctx.fillStyle = 'rgba(239, 68, 68, 0.85)';
      ctx.shadowColor = '#ef4444';
      ctx.shadowBlur = 14;
    } else {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
    }
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Crosshair dot in knob
    ctx.beginPath();
    ctx.arc(rightKnobX, rightKnobY, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.restore();
  }

  private renderEdgeIndicators(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    player: Player,
    mode: ModeManager
  ): void {
    const cx = w * 0.5;
    const cy = h * 0.5;

    // Helper to draw a sleek high-tech neon compass pointer
    const drawPointer = (
      targetWorldX: number,
      targetWorldY: number,
      label: string,
      color: string,
      icon: string
    ) => {
      const dx = targetWorldX - player.actor.position.x;
      const dy = targetWorldY - player.actor.position.y;
      const dist = Math.round(Math.hypot(dx, dy));

      this.projVec.set(targetWorldX, targetWorldY, 0).project(this.camera);
      const screenX = (this.projVec.x * 0.5 + 0.5) * w;
      const screenY = (-(this.projVec.y * 0.5) + 0.5) * h;
      const isBehind = this.projVec.z > 1.0;

      const margin = 48;
      const isOnScreen = !isBehind && screenX >= margin && screenX <= w - margin && screenY >= margin && screenY <= h - margin;

      ctx.save();

      if (isOnScreen) {
        // ON-SCREEN: Draw high-tech tactical targeting reticle diamond above target
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;

        const size = 14;
        ctx.strokeRect(screenX - size, screenY - size, size * 2, size * 2);

        // Distance Tag below
        ctx.fillStyle = 'rgba(9, 13, 22, 0.85)';
        ctx.fillRect(screenX - 44, screenY + size + 4, 88, 18);
        ctx.strokeRect(screenX - 44, screenY + size + 4, 88, 18);

        ctx.fillStyle = color;
        ctx.font = '800 10.5px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`${icon} ${dist}m`, screenX, screenY + size + 17);
      } else {
        // OFF-SCREEN: Clamp to edge and draw neon directional chevron pointer
        const angle = isBehind ? Math.atan2(-dy, -dx) : Math.atan2(dy, dx);
        const radiusX = (w * 0.5) - margin;
        const radiusY = (h * 0.5) - margin;

        const indX = cx + Math.cos(angle) * radiusX;
        const indY = cy - Math.sin(angle) * radiusY;

        // Draw Directional Pointing Triangle
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        const tipX = indX + Math.cos(angle) * 12;
        const tipY = indY - Math.sin(angle) * 12;
        const side1X = indX + Math.cos(angle + 2.5) * 8;
        const side1Y = indY - Math.sin(angle + 2.5) * 8;
        const side2X = indX + Math.cos(angle - 2.5) * 8;
        const side2Y = indY - Math.sin(angle - 2.5) * 8;
        ctx.moveTo(tipX, tipY);
        ctx.lineTo(side1X, side1Y);
        ctx.lineTo(side2X, side2Y);
        ctx.closePath();
        ctx.fill();

        // Label Pill
        const text = `${icon} ${label} [${dist}m]`;
        ctx.font = '800 11px "JetBrains Mono", monospace';
        const tw = ctx.measureText(text).width + 16;
        const pillX = indX - tw * 0.5;
        const pillY = indY + 14;

        ctx.fillStyle = 'rgba(9, 13, 22, 0.88)';
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, tw, 20, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#f8fafc';
        ctx.textAlign = 'center';
        ctx.fillText(text, indX, pillY + 14);
      }

      ctx.restore();
    };

    // 1. Central Vault Door in Vault Heist
    if (mode.heistMode && !mode.heistMode.isVaultBreached) {
      const vHp = Math.round(mode.heistMode.vaultHP);
      drawPointer(40.0, 3.5, `VAULT (${vHp}HP)`, '#f59e0b', '🏢');
    }

    // 2. Sarki / Odogwu Crown Holder Pointer
    const sarki = mode.players.find((p) => p.mesh.crownMesh.visible && p.stats.id !== player.stats.id);
    if (sarki && !sarki.stats.isDead) {
      drawPointer(sarki.actor.position.x, sarki.actor.position.y + 0.95, 'ODOGWU', '#eab308', '👑');
    }

    // 3. Extraction Evac Pointer
    if (mode.isExtractionActive()) {
      const extrPos = mode.getExtractionPos();
      const isContested = mode.heistMode?.isExtractionContested;
      drawPointer(extrPos.x, extrPos.y, isContested ? 'CONTESTED EVAC' : 'EXTRACTION', isContested ? '#ef4444' : '#10b981', '🚁');
    }

    // 4. Nearest Cash Stash
    let nearestCash: any = null;
    let minCashDist = 45.0;
    for (let i = 0; i < mode.pickups.length; i++) {
      const pk = mode.pickups[i];
      if (pk.isCollected || pk.type !== 'cash') continue;
      const d = player.actor.position.distanceTo(pk.mesh.position);
      if (d < minCashDist && d > 8.0) {
        minCashDist = d;
        nearestCash = pk;
      }
    }
    if (nearestCash) {
      drawPointer(nearestCash.mesh.position.x, nearestCash.mesh.position.y, 'CASH', '#34d399', '💰');
    }
  }

  private renderRigCooldown(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    player: Player,
    isTouch: boolean
  ): void {
    const rigCooldowns: Record<MovementRigType, number> = {
      [MovementRigType.BREACH_BOOSTER]: 2.5,
      [MovementRigType.OVERDRIVE_SLIDE]: 1.5,
      [MovementRigType.PHASE_DASH]: 3.0,
      [MovementRigType.GLITCH_ANCHOR]: 4.0,
    };
    const maxCd = rigCooldowns[player.stats.rigType] || 2.5;
    const currentTimer = Math.max(0, player.stats.rigCooldownTimer);
    const progress = Math.min(1.0, Math.max(0, 1.0 - currentTimer / maxCd));
    const isReady = currentTimer <= 0;

    const rigColors: Record<MovementRigType, string> = {
      [MovementRigType.BREACH_BOOSTER]: '#06b6d4',
      [MovementRigType.OVERDRIVE_SLIDE]: '#f59e0b',
      [MovementRigType.PHASE_DASH]: '#a855f7',
      [MovementRigType.GLITCH_ANCHOR]: '#ec4899',
    };
    const activeColor = rigColors[player.stats.rigType] || '#06b6d4';

    // 1. Mobile HUD Radial Ring around #btn-touch-rig
    const btnRig = document.getElementById('btn-touch-rig');
    if (btnRig && btnRig.offsetParent !== null) {
      const rect = btnRig.getBoundingClientRect();
      const bx = rect.left + rect.width * 0.5;
      const by = rect.top + rect.height * 0.5;
      const radius = rect.width * 0.5 + 4;

      ctx.save();

      // Background Track
      ctx.beginPath();
      ctx.arc(bx, by, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.55)';
      ctx.lineWidth = 3.5;
      ctx.stroke();

      if (!isReady) {
        // Active Radial Sweep Fill
        const startA = -Math.PI * 0.5;
        const endA = startA + progress * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(bx, by, radius, startA, endA);
        ctx.strokeStyle = activeColor;
        ctx.lineWidth = 4.0;
        ctx.shadowColor = activeColor;
        ctx.shadowBlur = 8;
        ctx.stroke();
      } else {
        // Ready Glow Ring
        const pulse = 0.6 + Math.sin(performance.now() * 0.008) * 0.35;
        ctx.beginPath();
        ctx.arc(bx, by, radius, 0, Math.PI * 2);
        ctx.strokeStyle = activeColor;
        ctx.lineWidth = 3.0;
        ctx.shadowColor = activeColor;
        ctx.shadowBlur = 12 * pulse;
        ctx.globalAlpha = pulse;
        ctx.stroke();
      }

      ctx.restore();
    }

    // 2. Desktop & Universal Bottom Status Rig Meter (pinned at bottom-center)
    if (!isTouch || w >= 900) {
      const mw = 185;
      const mh = 24;
      const mx = w * 0.5 - mw * 0.5;
      const my = h - 38;

      ctx.save();
      // Plate background
      ctx.fillStyle = 'rgba(9, 13, 22, 0.85)';
      ctx.strokeStyle = isReady ? activeColor : 'rgba(148, 163, 184, 0.3)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(mx, my, mw, mh, 4);
      ctx.fill();
      ctx.stroke();

      // Progress bar fill
      if (!isReady) {
        ctx.fillStyle = activeColor;
        ctx.globalAlpha = 0.5;
        ctx.fillRect(mx + 2, my + 2, (mw - 4) * progress, mh - 4);
        ctx.globalAlpha = 1.0;
      }

      // Text label
      ctx.fillStyle = isReady ? '#f8fafc' : '#94a3b8';
      ctx.font = '800 10.5px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      const rigNames: Record<MovementRigType, string> = {
        [MovementRigType.BREACH_BOOSTER]: 'BREACH BOOSTER',
        [MovementRigType.OVERDRIVE_SLIDE]: 'OVERDRIVE SLIDE',
        [MovementRigType.PHASE_DASH]: 'PHASE DASH',
        [MovementRigType.GLITCH_ANCHOR]: 'GLITCH ANCHOR',
      };
      const rName = rigNames[player.stats.rigType] || 'TACTICAL RIG';
      const label = isReady ? `⚡ [SHIFT] ${rName} [READY]` : `⚡ ${rName} [${currentTimer.toFixed(1)}s]`;
      ctx.fillText(label, mx + mw * 0.5, my + 16);

      ctx.restore();
    }
  }

  private renderFloatingTexts(ctx: CanvasRenderingContext2D, dt: number): void {
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.life += dt;
      ft.y -= dt * 45.0;
      ft.alpha = Math.max(0, 1.0 - ft.life / 0.85);

      ctx.save();
      ctx.globalAlpha = ft.alpha;
      ctx.fillStyle = ft.color;
      ctx.font = `900 ${ft.size}px "JetBrains Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = 6;
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();

      if (ft.life >= 0.85) {
        this.floatingTexts.splice(i, 1);
      }
    }
  }

  private renderDeathScreen(ctx: CanvasRenderingContext2D, w: number, _h: number, player: Player): void {
    // Subtle red perimeter casualty border (does NOT block the view of the match!)
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.35)';
    ctx.lineWidth = 4;
    ctx.strokeRect(2, 2, w - 4, _h - 4);

    const secondsLeft = Math.max(0, Math.ceil(player.respawnTimer));
    const pillW = 270;
    const pillH = 30;
    const pillX = w * 0.5 - pillW * 0.5;
    const pillY = 48; // Positioned neatly beneath the top status plate

    ctx.fillStyle = 'rgba(10, 16, 13, 0.92)';
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.roundRect(pillX, pillY, pillW, pillH, 4);
    ctx.fill();
    ctx.stroke();

    // Red LED dot
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(pillX + 16, pillY + pillH * 0.5, 4, 0, Math.PI * 2);
    ctx.fill();

    // Compact tactical respawn message
    ctx.fillStyle = '#f8fafc';
    ctx.font = '800 11px "JetBrains Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillText(
      secondsLeft > 0 ? `[▲] ELIMINATED // RESPAWN: ${secondsLeft}s` : `[●] REDEPLOYING TO SECTOR...`,
      pillX + 28,
      pillY + 19
    );
  }
}
