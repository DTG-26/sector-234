import * as THREE from 'three';
import { Engine3D } from './core/Engine3D';
import { InputManager } from './core/InputManager';
import { AudioSynth } from './core/AudioSynth';
import { TileMap3D } from './world/TileMap3D';
import { SkylineBackground3D } from './world/SkylineBackground3D';
import { MapGenerator } from './world/MapGenerator';
import { VisionSystem3D } from './world/VisionSystem3D';
import { InteractiveProps3D } from './world/InteractiveProps3D';
import { ParticleSystem3D } from './systems/ParticleSystem3D';
import { WeaponSystem } from './systems/WeaponSystem';
import { RigSystem } from './systems/RigSystem';
import { ModeManager } from './modes/ModeManager';
import { HUDCanvas } from './ui/HUDCanvas';
import { MenuOverlay, MenuStartOptions } from './ui/MenuOverlay';
import { GameModeType, HeistAct, MapId, MovementRigType, WeaponId } from './config/types';
import { Player } from './entities/Player';

console.log('[STUDIO XAG: PROTOCOL ZERO] Initializing Tactical Arena Engine...');

// 1. Initialize Engine & Audio
const engine = new Engine3D('webgl-canvas');
const audio = new AudioSynth();

// 2. Initialize World & Subsystems
const tileMap = new TileMap3D(engine.scene);
const skyline = new SkylineBackground3D(engine.scene);
const vision = new VisionSystem3D(engine.scene);
const props = new InteractiveProps3D(engine.scene);
const particles = new ParticleSystem3D(engine.scene);
const rigSystem = new RigSystem(engine.scene);
const weaponSystem = new WeaponSystem(engine.scene, particles, audio);
const modeManager = new ModeManager(engine.scene);

// Connect Transformer Blackout
tileMap.onBlackoutTriggered = () => {
  console.log('[ALERT] Transformer destroyed! 12-second Blackout active.');
  props.triggerBlackout();
  engine.setBlackout(true);
};

// Connect Central Vault Damage
weaponSystem.onVaultHit = (dmg) => {
  if (modeManager.heistMode && modeManager.heistMode.currentAct === HeistAct.ACT_1_BREACH) {
    modeManager.heistMode.damageVault(dmg, tileMap, particles);
  }
};

// 3. UI and Inputs
const input = new InputManager(document.getElementById('webgl-canvas')!, engine.cameraSystem.camera);
const hud = new HUDCanvas('hud-canvas', engine.cameraSystem.camera);
const menu = new MenuOverlay('ui-overlay', audio);

// Connect floating damage text callback
weaponSystem.onDamageDealt = (x, y, text, color) => {
  hud.addDamagePopup(x, y, text, color);
};

let localPlayer: Player | null = null;
let currentRig: MovementRigType = MovementRigType.BREACH_BOOSTER;
let currentMode: GameModeType = GameModeType.ODOGWU_STASH;
let isGameActive = false;

// 4. Start Match Routine
const startMatch = (opts: MenuStartOptions) => {
  currentRig = opts.rigType;
  currentMode = opts.modeType;

  // Clear existing tilemap cleanly
  tileMap.clear();

  // Switch skyline & map
  skyline.setTheme(opts.mapId);

  if (opts.mapId === MapId.LAGOS_GOSLOW) {
    MapGenerator.generateLagosGoSlow(tileMap);
  } else {
    MapGenerator.generateBirninKano(tileMap);
  }

  localPlayer = modeManager.initMatch(opts.modeType, opts.gamerTag, opts.rigType, opts.mapId);
  if (localPlayer) {
    if (opts.primaryWeapon) {
      localPlayer.stats.primaryWeapon = opts.primaryWeapon;
      localPlayer.stats.activeWeapon = opts.primaryWeapon;
      localPlayer.mesh.setWeapon(opts.primaryWeapon);
    }
    if (opts.secondaryWeapon) {
      localPlayer.stats.secondaryWeapon = opts.secondaryWeapon;
    }
    engine.cameraSystem.setWeaponProfile(localPlayer.stats.activeWeapon);
  }
  isGameActive = true;
};


// Show Main Menu on boot
menu.showMainMenu(startMatch);

// 5. Main Game Loop Hook
engine.onUpdate((dt: number) => {
  skyline.update(dt);
  tileMap.update(dt);
  particles.update(dt, tileMap);
  vision.update(dt);
  rigSystem.update(dt);
  props.update(dt, (active) => engine.setBlackout(active));

  if (!isGameActive || !localPlayer) return;

  // Process Controls for Local Player
  input.update();
  input.playerWorldPos.copy(localPlayer.actor.position);

  // Soft Magnetic Aim Assist (Mini Militia style soft pull towards enemy)
  let effectiveAimAngle = input.state.aimAngle;

  if (!localPlayer.stats.isDead) {
    // 1. Unified Mini Militia Physics Step (Ground accel, air drift retention, jetpack thrust & fuel curve)
    localPlayer.updateMiniMilitiaMovement(
      dt,
      input.state.moveX,
      input.state.jump,
      input.state.groundSlam,
      input.state.flyIntensity
    );

    // Billowing Jetpack Smoke Puffs Trail
    if (localPlayer.isJetFlying && Math.random() < 0.65) {
      particles.spawnJetpackSmoke(
        localPlayer.actor.position.x + (localPlayer.actor.velocity.x > 0 ? -0.2 : 0.2),
        localPlayer.actor.position.y + 0.35,
        localPlayer.actor.velocity.x,
        -4.0
      );
    }

    // Universal Mid-Air Ground Slam
    if (input.state.groundSlam) {
      const slammed = rigSystem.triggerGroundSlam(localPlayer.actor, localPlayer.mesh, tileMap);
      if (slammed) {
        engine.cameraSystem.addTrauma(0.2);
        audio.playThrusterWhoosh();
      }
    }

    // Movement Rig Activation
    if (input.state.rig && localPlayer.stats.rigCooldownTimer <= 0) {
      const res = rigSystem.activateRig(
        localPlayer,
        tileMap,
        effectiveAimAngle,
        input.state.moveX,
        engine.cameraSystem
      );
      if (res.activated) {
        audio.playThrusterWhoosh();
        engine.cameraSystem.addTrauma(0.35);
        hud.addDamagePopup(
          localPlayer.actor.position.x,
          localPlayer.actor.position.y + 1.8,
          res.popupText,
          '#06b6d4',
          22
        );
        const cooldowns: Record<MovementRigType, number> = {
          [MovementRigType.BREACH_BOOSTER]: 2.5,
          [MovementRigType.OVERDRIVE_SLIDE]: 1.5,
          [MovementRigType.PHASE_DASH]: 3.0,
          [MovementRigType.GLITCH_ANCHOR]: 4.0,
        };
        localPlayer.stats.rigCooldownTimer = cooldowns[localPlayer.stats.rigType];
      }
    }

    // Soft Magnetic Aim Assist (Mini Militia style soft pull towards enemy)
    effectiveAimAngle = input.state.aimAngle;
    if (input.state.aiming || input.state.isTouch) {
      let nearestTargetAngle: number | null = null;
      let minAngularDiff = 0.35; // ~20 degree cone
      let minEnemyDist = 18.0;

      for (let i = 0; i < modeManager.players.length; i++) {
        const other = modeManager.players[i];
        if (other.stats.id === localPlayer.stats.id || other.stats.isDead) continue;

        const edx = other.actor.position.x - localPlayer.actor.position.x;
        const edy = (other.actor.position.y + 0.95) - (localPlayer.actor.position.y + 0.95);
        const edist = Math.sqrt(edx * edx + edy * edy);

        if (edist < minEnemyDist) {
          const enemyAngle = Math.atan2(edy, edx);
          let angleDiff = enemyAngle - effectiveAimAngle;
          while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
          while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;

          if (Math.abs(angleDiff) < minAngularDiff) {
            minAngularDiff = Math.abs(angleDiff);
            nearestTargetAngle = enemyAngle;
            minEnemyDist = edist;
          }
        }
      }

      if (nearestTargetAngle !== null) {
        let diff = nearestTargetAngle - effectiveAimAngle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        const pull = input.state.isTouch ? 0.45 : 0.20;
        effectiveAimAngle += diff * pull;
      }
    }

    // Instant Tactical Cutlass Melee
    if (input.state.melee) {
      const playerRef = localPlayer;
      particles.spawnMeleeSlashArc(localPlayer.actor.position.x, localPlayer.actor.position.y, effectiveAimAngle);
      localPlayer.performMeleeLunge(effectiveAimAngle, modeManager.players, (target, dmg) => {
        const died = target.takeDamage(dmg, playerRef);
        audio.playGunshot('saw');
        particles.spawnSparks(target.actor.position.x, target.actor.position.y + 1.0, 5, 5, 12);
        hud.addDamagePopup(target.actor.position.x, target.actor.position.y + 1.5, `SLICED -${dmg}!`, '#f59e0b', 22);
        engine.cameraSystem.addTrauma(0.18);

        if (died) {
          playerRef.stats.cash += 50000;
          hud.addDamagePopup(target.actor.position.x, target.actor.position.y + 2.0, 'BOUNTY STEAL! +₦50,000', '#10b981', 24);
          modeManager.handlePlayerElimination(target, playerRef);
        }
      }, tileMap);

      // Check if Cutlass lunge hits Central Vault door (4.8m radius)
      const distVault = Math.hypot(localPlayer.actor.position.x - 40, localPlayer.actor.position.y - 3.5);
      if (distVault < 4.8 && weaponSystem.onVaultHit) {
        weaponSystem.onVaultHit(150);
        audio.playGunshot('saw');
        particles.spawnSparks(40, 3.5, 0, 1, 15);
        hud.addDamagePopup(40, 5.0, 'VAULT MELEE BREACH -150!', '#f59e0b', 22);
        engine.cameraSystem.addTrauma(0.12);
      }

      audio.playMeleeSwish();
    }

    // Weapon Firing
    if (input.state.firing) {
      const fired = weaponSystem.fireWeapon(
        localPlayer,
        effectiveAimAngle,
        modeManager.players,
        (victim, killer) => modeManager.handlePlayerElimination(victim, killer),
        tileMap
      );
      if (fired) {
        const weaponId = localPlayer.stats.activeWeapon;
        if (weaponId === WeaponId.SHOTGUN_AA12 || weaponId === WeaponId.RAIL_SNIPER) {
          engine.cameraSystem.addTrauma(0.03);
        } else if (weaponId === WeaponId.BUNKER_RPG) {
          engine.cameraSystem.addTrauma(0.12);
        }
      }
    }

    // Throwables (Remote C4)
    if (input.state.throwBoom) {
      weaponSystem.handleThrowable(
        localPlayer,
        effectiveAimAngle,
        tileMap,
        modeManager.players,
        (victim, killer) => modeManager.handlePlayerElimination(victim, killer)
      );
    }

    // Weapon Swap & Reload
    if (input.state.swapWeapon) {
      localPlayer.swapWeapon();
      engine.cameraSystem.setWeaponProfile(localPlayer.stats.activeWeapon);
    }
    if (input.state.reload) {
      localPlayer.reloadWeapon();
    }

    // Zipline interaction
    props.checkZiplineInteraction(localPlayer);
  }

  // Update Local Player
  localPlayer.update(dt, tileMap, rigSystem, effectiveAimAngle);

  // Update Weapons & Projectiles
  weaponSystem.update(dt, tileMap, modeManager.players, (victim, killer) => {
    modeManager.handlePlayerElimination(victim, killer);
    if (victim.stats.isLocalPlayer) {
      engine.cameraSystem.addTrauma(0.35);
    } else if (killer && killer.stats.isLocalPlayer) {
      engine.cameraSystem.addTrauma(0.12);
    }
  });

  // Update Game Mode & Bots
  modeManager.update(dt, tileMap, weaponSystem, rigSystem, () => {
    audio.playCashPickup();
    hud.addDamagePopup(localPlayer!.actor.position.x, localPlayer!.actor.position.y + 1.8, '+₦25,000', '#10b981', 20);
  }, particles);


  // Sonar Sound Ripples
  modeManager.players.forEach((p) => {
    if (p.stats.id === localPlayer!.stats.id || p.stats.isDead) return;
    const isOccluded = vision.checkPlayerOcclusion(localPlayer!, p, tileMap);

    if (isOccluded) {
      if (Math.abs(p.actor.velocity.x) > 8.0 || p.actor.velocity.y > 6.0 || p.fireCooldown > 0) {
        if (Math.random() < 0.04) {
          vision.emitSonarRing(p.actor.position.x, p.actor.position.y + 0.95, p.stats.id);
          audio.playSonarPing();
        }
      }
    }
  });

  // Camera Follow, Aim-Shift, and Velocity-Zoom (with proximity deadzone to eliminate feedback glitch)
  engine.cameraSystem.setWeaponProfile(localPlayer.stats.activeWeapon);
  engine.cameraSystem.setFollowTarget(localPlayer.actor.position.x, localPlayer.actor.position.y + 0.95);
  
  let aimShiftStrength = 1.0;
  if (!input.state.isTouch) {
    const dx = input.mouseWorldPos.x - localPlayer.actor.position.x;
    const dy = input.mouseWorldPos.y - (localPlayer.actor.position.y + 0.95);
    const dist = Math.sqrt(dx * dx + dy * dy);
    // Smooth ramp: 0 shift within 1.2m of player, ramp up to full shift beyond 3.5m
    aimShiftStrength = Math.min(1.0, Math.max(0, (dist - 1.2) / 2.3));
  } else {
    const rDist = input.rightTouchCurrent.distanceTo(input.rightTouchStart);
    aimShiftStrength = Math.min(1.0, Math.max(0, (rDist - 15) / 35));
  }

  engine.cameraSystem.setAimShift(
    Math.cos(input.state.aimAngle) * aimShiftStrength,
    Math.sin(input.state.aimAngle) * aimShiftStrength
  );

  const speed = Math.abs(localPlayer.actor.velocity.x);
  engine.cameraSystem.setSpeedZoom(speed > 16 ? (speed - 16) / 10 : 0);

  // Render 2D Canvas HUD Overlay with Delta Time
  hud.render(localPlayer, input, modeManager, vision, dt);

  // Check Match End
  if (modeManager.isMatchOver) {
    isGameActive = false;
    const scoreboard = modeManager.getScoreboard();
    menu.showMatchSummary(scoreboard, () => {
      menu.showMainMenu(startMatch);
    });
  }

  // Reset input one-shots
  input.resetOneShotFlags();
});

// 6. Start Loop & Mobile Auto-Fullscreen Listener
engine.start();

const triggerFullscreenOnce = () => {
  input.requestFullscreen();
};
window.addEventListener('touchstart', triggerFullscreenOnce, { once: true });
window.addEventListener('click', triggerFullscreenOnce, { once: true });

console.log('[STUDIO XAG: PROTOCOL ZERO] Arena Shooter Fully Active.');
