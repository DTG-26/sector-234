import * as THREE from 'three';
import { GameModeType, HeistAct, MapId, MatchScoreboardEntry, MovementRigType, WeaponId } from '../config/types';
import { Player } from '../entities/Player';
import { Pickup3D } from '../entities/Pickup3D';
import { BotAI } from '../systems/BotAI';
import { OdogwuStashMode } from './OdogwuStashMode';
import { VaultHeistMode } from './VaultHeistMode';
import { ApapaLockdownMode } from './ApapaLockdownMode';
import { HeistModeManager } from './HeistModeManager';
import { TileMap3D } from '../world/TileMap3D';
import { WeaponSystem } from '../systems/WeaponSystem';
import { RigSystem } from '../systems/RigSystem';
import { ParticleSystem3D } from '../systems/ParticleSystem3D';
import { WEAPON_REGISTRY } from '../config/constants';
import { RemotePlayerController } from '../network/RemotePlayerController';
import { NetworkLobbyPlayer } from '../network/NetworkTypes';
import { TeamDeathmatchMode } from './TeamDeathmatchMode';
import { FreeForAllMode } from './FreeForAllMode';

export class ModeManager {
  public currentMode: GameModeType = GameModeType.ODOGWU_STASH;
  public currentMap: MapId = MapId.BIRNIN_KANO;
  public tdmMode?: TeamDeathmatchMode;
  public ffaMode?: FreeForAllMode;
  public heistMode?: HeistModeManager;
  public odogwuMode?: OdogwuStashMode;
  public vaultMode?: VaultHeistMode;
  public apapaMode?: ApapaLockdownMode;

  public players: Player[] = [];
  public bots: BotAI[] = [];
  public remoteControllers: Map<string, RemotePlayerController> = new Map();
  public pickups: Pickup3D[] = [];
  public isMatchOver: boolean = false;
  private scene: THREE.Scene;

  private respawnTimeouts: number[] = [];

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  public cleanup(): void {
    // 1. Clear any pending respawn timers
    for (const tid of this.respawnTimeouts) {
      clearTimeout(tid);
    }
    this.respawnTimeouts = [];

    // 2. Destroy all players and remove their 3D meshes
    for (const player of this.players) {
      player.destroy();
    }
    this.players = [];
    this.bots = [];
    this.remoteControllers.clear();

    // 3. Destroy all pickups
    for (const pickup of this.pickups) {
      pickup.destroy(this.scene);
    }
    this.pickups = [];

    // 4. Destroy mode-specific props
    if (this.heistMode) {
      this.heistMode.destroy(this.scene);
      this.heistMode = undefined;
    }
    this.tdmMode = undefined;
    this.ffaMode = undefined;
    if (this.odogwuMode) {
      this.odogwuMode.destroy(this.scene);
      this.odogwuMode = undefined;
    }
    if (this.vaultMode) {
      this.vaultMode.destroy(this.scene);
      this.vaultMode = undefined;
    }
    if (this.apapaMode) {
      this.apapaMode.destroy(this.scene);
      this.apapaMode = undefined;
    }
  }

  public initMatch(
    modeType: GameModeType,
    localPlayerName: string,
    localRig: MovementRigType,
    mapId: MapId = MapId.BIRNIN_KANO,
    fillBots: boolean = true,
    teamSize: number = 3
  ): Player {
    this.cleanup();
    this.currentMode = modeType;
    this.currentMap = mapId;
    this.isMatchOver = false;

    if (modeType === GameModeType.TEAM_DEATHMATCH) {
      this.tdmMode = new TeamDeathmatchMode(this.scene, teamSize);
    } else if (modeType === GameModeType.FREE_FOR_ALL) {
      this.ffaMode = new FreeForAllMode(this.scene, 20);
    } else if (modeType === GameModeType.ODOGWU_STASH || modeType === GameModeType.VAULT_HEIST) {
      this.heistMode = new HeistModeManager(this.scene, mapId);
    } else {
      this.apapaMode = new ApapaLockdownMode(this.scene);
    }

    // 1. Create Local Player
    const localSpawn = mapId === MapId.LAGOS_GOSLOW ? { x: 16, y: 6.5 } : { x: 14, y: 14.5 };
    const localPlayer = new Player(
      this.scene,
      'player_local',
      localPlayerName || 'Operative_01',
      localSpawn.x,
      localSpawn.y,
      true,
      localRig
    );
    if (modeType === GameModeType.TEAM_DEATHMATCH) {
      localPlayer.stats.team = 'blue';
    } else {
      localPlayer.stats.team = 'none';
    }
    this.players.push(localPlayer);

    // 2. Populate Autonomous Bots if fillBots is enabled
    if (fillBots) {
      const botConfigsKano = [
        { id: 'bot_sarki', name: 'Sarkin_Kano', rig: MovementRigType.BREACH_BOOSTER, weapon: WeaponId.RIFLE_XAG47, x: 26, y: 18.5 },
        { id: 'bot_arewa', name: 'Arewa_Sniper', rig: MovementRigType.PHASE_DASH, weapon: WeaponId.RAIL_SNIPER, x: 62, y: 34.5 },
        { id: 'bot_danauta', name: 'Dan_auta_234', rig: MovementRigType.OVERDRIVE_SLIDE, weapon: WeaponId.AKIMBO_UZIS, x: 42, y: 18.5 },
        { id: 'bot_ghost', name: 'Ghost_Lagos', rig: MovementRigType.PHASE_DASH, weapon: WeaponId.GHOST_SMG, x: 52, y: 26.5 },
        { id: 'bot_ekoviper', name: 'Eko_Viper', rig: MovementRigType.GLITCH_ANCHOR, weapon: WeaponId.SHOTGUN_AA12, x: 20, y: 24.5 },
        { id: 'bot_delta', name: 'Delta_Kano', rig: MovementRigType.BREACH_BOOSTER, weapon: WeaponId.VULCAN_MINIGUN, x: 34, y: 18.5 },
        { id: 'bot_zaria', name: 'Zaria_Fox', rig: MovementRigType.PHASE_DASH, weapon: WeaponId.BUNKER_RPG, x: 48, y: 18.5 },
        { id: 'bot_ibadan', name: 'Ibadan_Heavy', rig: MovementRigType.GLITCH_ANCHOR, weapon: WeaponId.SHOTGUN_AA12, x: 58, y: 26.5 },
        { id: 'bot_kaduna', name: 'Kaduna_Strike', rig: MovementRigType.OVERDRIVE_SLIDE, weapon: WeaponId.RIFLE_XAG47, x: 18, y: 14.5 },
      ];

      const botConfigsLagos = [
        { id: 'bot_sarki', name: 'Sarkin_Kano', rig: MovementRigType.BREACH_BOOSTER, weapon: WeaponId.RIFLE_XAG47, x: 24, y: 6.5 },
        { id: 'bot_arewa', name: 'Arewa_Sniper', rig: MovementRigType.PHASE_DASH, weapon: WeaponId.RAIL_SNIPER, x: 64, y: 28.5 },
        { id: 'bot_danauta', name: 'Dan_auta_234', rig: MovementRigType.OVERDRIVE_SLIDE, weapon: WeaponId.AKIMBO_UZIS, x: 56, y: 6.5 },
        { id: 'bot_ghost', name: 'Ghost_Lagos', rig: MovementRigType.PHASE_DASH, weapon: WeaponId.GHOST_SMG, x: 38, y: 22.5 },
        { id: 'bot_ekoviper', name: 'Eko_Viper', rig: MovementRigType.GLITCH_ANCHOR, weapon: WeaponId.SHOTGUN_AA12, x: 12, y: 24.5 },
        { id: 'bot_delta', name: 'Delta_Kano', rig: MovementRigType.BREACH_BOOSTER, weapon: WeaponId.VULCAN_MINIGUN, x: 30, y: 6.5 },
        { id: 'bot_zaria', name: 'Zaria_Fox', rig: MovementRigType.PHASE_DASH, weapon: WeaponId.BUNKER_RPG, x: 46, y: 22.5 },
        { id: 'bot_ibadan', name: 'Ibadan_Heavy', rig: MovementRigType.GLITCH_ANCHOR, weapon: WeaponId.SHOTGUN_AA12, x: 68, y: 6.5 },
        { id: 'bot_kaduna', name: 'Kaduna_Strike', rig: MovementRigType.OVERDRIVE_SLIDE, weapon: WeaponId.RIFLE_XAG47, x: 18, y: 24.5 },
      ];

      const botConfigs = mapId === MapId.LAGOS_GOSLOW ? botConfigsLagos : botConfigsKano;
      const totalDesired = modeType === GameModeType.TEAM_DEATHMATCH ? (teamSize * 2 - 1) : 5;

      for (let i = 0; i < totalDesired; i++) {
        const cfg = botConfigs[i % botConfigs.length];
        const bot = new Player(this.scene, `${cfg.id}_${i}`, cfg.name, cfg.x + (i > 4 ? (i - 4) * 2 : 0), cfg.y, false, cfg.rig);
        bot.stats.primaryWeapon = cfg.weapon;
        bot.stats.activeWeapon = cfg.weapon;
        bot.mesh.setWeapon(cfg.weapon);

        if (modeType === GameModeType.TEAM_DEATHMATCH) {
          // Local player is on Blue (1 member). Need (teamSize - 1) Blue bots, rest Red.
          bot.stats.team = (i < teamSize - 1) ? 'blue' : 'red';
        } else {
          bot.stats.team = 'none';
        }

        this.players.push(bot);
        const ai = new BotAI(bot);
        this.bots.push(ai);
      }
    }

    // 3. Spawn Initial Map Cash Bundles (₦), Weapon Crates, and Respawning Medkits
    const initialPickups =
      mapId === MapId.LAGOS_GOSLOW
        ? [
            { x: 8, y: 6.5, type: 'cash' as const, respawn: false }, // Danfo bus 1 roof
            { x: 22, y: 6.5, type: 'cash' as const, respawn: false }, // Danfo bus 3 roof
            { x: 38, y: 22.5, type: 'cash' as const, respawn: false }, // Flyover bridge
            { x: 54, y: 6.5, type: 'cash' as const, respawn: false }, // Danfo bus 6 roof
            { x: 70, y: 6.5, type: 'cash' as const, respawn: false }, // Danfo bus 8 roof
            { x: 14, y: 28.5, type: 'cash' as const, respawn: false }, // Commercial roof
            { x: 26, y: 22.5, type: 'weapon' as const, wId: WeaponId.SHOTGUN_AA12, respawn: true },
            { x: 50, y: 22.5, type: 'weapon' as const, wId: WeaponId.BUNKER_RPG, respawn: true },
            // Grounded respawning medkits across Lagos
            { x: 12, y: 3.5, type: 'health' as const, respawn: true },  // Expressway street level
            { x: 64, y: 3.5, type: 'health' as const, respawn: true },  // East expressway ground
            { x: 28, y: 7.5, type: 'health' as const, respawn: true },  // Danfo bus roof
            { x: 44, y: 22.5, type: 'health' as const, respawn: true }, // 3rd Mainland flyover deck
            { x: 16, y: 29.5, type: 'health' as const, respawn: true }, // Commercial rooftop
          ]
        : [
            { x: 10, y: 13.5, type: 'cash' as const, respawn: false }, // Left Mud compound roof
            { x: 25, y: 3.5, type: 'cash' as const, respawn: false }, // Earthen street
            { x: 24, y: 17.5, type: 'cash' as const, respawn: false }, // Timber bridge
            { x: 40, y: 17.5, type: 'cash' as const, respawn: false }, // Center terrace
            { x: 55, y: 17.5, type: 'cash' as const, respawn: false }, // Right bridge
            { x: 65, y: 3.5, type: 'cash' as const, respawn: false }, // Right street
            { x: 40, y: 27.5, type: 'cash' as const, respawn: false }, // High terrace
            { x: 18, y: 13.5, type: 'weapon' as const, wId: WeaponId.BUNKER_RPG, respawn: true },
            { x: 62, y: 25.5, type: 'weapon' as const, wId: WeaponId.VULCAN_MINIGUN, respawn: true },
            // Grounded respawning medkits on actual solid platforms across Kano
            { x: 14, y: 3.5, type: 'health' as const, respawn: true },  // West street runway
            { x: 66, y: 3.5, type: 'health' as const, respawn: true },  // East street runway
            { x: 10, y: 13.5, type: 'health' as const, respawn: true }, // Left mud compound rooftop
            { x: 40, y: 17.5, type: 'health' as const, respawn: true }, // Central grand palace deck
            { x: 64, y: 14.5, type: 'health' as const, respawn: true }, // East Dala fortress lower bastion
            { x: 40, y: 27.5, type: 'health' as const, respawn: true }, // Upper palace terrace
          ];

    initialPickups.forEach((p) => {
      const pk = new Pickup3D(this.scene, p.type, p.x, p.y, 25000, p.wId, p.respawn);
      this.pickups.push(pk);
    });

    return localPlayer;
  }

  public initMultiplayerMatch(
    modeType: GameModeType,
    localPlayerId: string,
    localPlayerName: string,
    localRig: MovementRigType,
    mapId: MapId,
    networkPlayers: NetworkLobbyPlayer[],
    particles: ParticleSystem3D,
    fillBots: boolean = true,
    teamSize: number = 3
  ): Player {
    this.cleanup();
    this.currentMode = modeType;
    this.currentMap = mapId;
    this.isMatchOver = false;

    if (modeType === GameModeType.TEAM_DEATHMATCH) {
      this.tdmMode = new TeamDeathmatchMode(this.scene, teamSize);
    } else if (modeType === GameModeType.FREE_FOR_ALL) {
      this.ffaMode = new FreeForAllMode(this.scene, 20);
    } else if (modeType === GameModeType.ODOGWU_STASH || modeType === GameModeType.VAULT_HEIST) {
      this.heistMode = new HeistModeManager(this.scene, mapId);
    } else {
      this.apapaMode = new ApapaLockdownMode(this.scene);
    }

    const spawnPoints =
      mapId === MapId.LAGOS_GOSLOW
        ? [
            { x: 16, y: 6.5 },
            { x: 24, y: 6.5 },
            { x: 38, y: 22.5 },
            { x: 56, y: 6.5 },
            { x: 64, y: 28.5 },
            { x: 12, y: 24.5 },
          ]
        : [
            { x: 14, y: 14.5 },
            { x: 26, y: 18.5 },
            { x: 42, y: 18.5 },
            { x: 52, y: 26.5 },
            { x: 62, y: 34.5 },
            { x: 20, y: 24.5 },
          ];

    let spawnIdx = 0;

    // 1. Create Local Player
    const localSpawn = spawnPoints[spawnIdx++];
    const localPlayer = new Player(
      this.scene,
      localPlayerId,
      localPlayerName || 'Operative_01',
      localSpawn.x,
      localSpawn.y,
      true,
      localRig
    );
    this.players.push(localPlayer);

    // 2. Add Remote Human Players
    this.remoteControllers.clear();
    networkPlayers.forEach((np) => {
      if (np.id === localPlayerId) return;
      const sp = spawnPoints[spawnIdx % spawnPoints.length];
      spawnIdx++;
      const remotePlayer = new Player(
        this.scene,
        np.id,
        np.name,
        sp.x,
        sp.y,
        false,
        np.rig
      );
      remotePlayer.stats.primaryWeapon = np.primaryWeapon;
      remotePlayer.stats.activeWeapon = np.primaryWeapon;
      remotePlayer.mesh.setWeapon(np.primaryWeapon);
      this.players.push(remotePlayer);

      const controller = new RemotePlayerController(remotePlayer, particles);
      this.remoteControllers.set(np.id, controller);
    });

    // 3. Fill remaining slots with Bots up to 6 players total ONLY if fillBots is enabled
    if (fillBots) {
      const neededBots = Math.max(0, 6 - this.players.length);
      const botPool =
        mapId === MapId.LAGOS_GOSLOW
          ? [
              { id: 'bot_sarki', name: 'Sarkin_Kano', rig: MovementRigType.BREACH_BOOSTER, weapon: WeaponId.RIFLE_XAG47 },
              { id: 'bot_arewa', name: 'Arewa_Sniper', rig: MovementRigType.PHASE_DASH, weapon: WeaponId.RAIL_SNIPER },
              { id: 'bot_danauta', name: 'Dan_auta_234', rig: MovementRigType.OVERDRIVE_SLIDE, weapon: WeaponId.AKIMBO_UZIS },
              { id: 'bot_ghost', name: 'Ghost_Lagos', rig: MovementRigType.PHASE_DASH, weapon: WeaponId.GHOST_SMG },
              { id: 'bot_ekoviper', name: 'Eko_Viper', rig: MovementRigType.GLITCH_ANCHOR, weapon: WeaponId.SHOTGUN_AA12 },
            ]
          : [
              { id: 'bot_sarki', name: 'Sarkin_Kano', rig: MovementRigType.BREACH_BOOSTER, weapon: WeaponId.RIFLE_XAG47 },
              { id: 'bot_arewa', name: 'Arewa_Sniper', rig: MovementRigType.PHASE_DASH, weapon: WeaponId.RAIL_SNIPER },
              { id: 'bot_danauta', name: 'Dan_auta_234', rig: MovementRigType.OVERDRIVE_SLIDE, weapon: WeaponId.AKIMBO_UZIS },
              { id: 'bot_ghost', name: 'Ghost_Lagos', rig: MovementRigType.PHASE_DASH, weapon: WeaponId.GHOST_SMG },
              { id: 'bot_ekoviper', name: 'Eko_Viper', rig: MovementRigType.GLITCH_ANCHOR, weapon: WeaponId.SHOTGUN_AA12 },
            ];

      for (let i = 0; i < neededBots; i++) {
        const cfg = botPool[i % botPool.length];
        const sp = spawnPoints[spawnIdx % spawnPoints.length];
        spawnIdx++;
        const bot = new Player(this.scene, cfg.id, cfg.name, sp.x, sp.y, false, cfg.rig);
        bot.stats.primaryWeapon = cfg.weapon;
        bot.stats.activeWeapon = cfg.weapon;
        bot.mesh.setWeapon(cfg.weapon);
        this.players.push(bot);

        const ai = new BotAI(bot);
        this.bots.push(ai);
      }
    }

    // 4. Initial Pickups
    const initialPickups =
      mapId === MapId.LAGOS_GOSLOW
        ? [
            { x: 8, y: 6.5, type: 'cash' as const, respawn: false },
            { x: 22, y: 6.5, type: 'cash' as const, respawn: false },
            { x: 38, y: 22.5, type: 'cash' as const, respawn: false },
            { x: 54, y: 6.5, type: 'cash' as const, respawn: false },
            { x: 70, y: 6.5, type: 'cash' as const, respawn: false },
            { x: 14, y: 28.5, type: 'cash' as const, respawn: false },
            { x: 26, y: 22.5, type: 'weapon' as const, wId: WeaponId.SHOTGUN_AA12, respawn: true },
            { x: 50, y: 22.5, type: 'weapon' as const, wId: WeaponId.BUNKER_RPG, respawn: true },
            { x: 12, y: 3.5, type: 'health' as const, respawn: true },
            { x: 64, y: 3.5, type: 'health' as const, respawn: true },
            { x: 28, y: 7.5, type: 'health' as const, respawn: true },
            { x: 44, y: 22.5, type: 'health' as const, respawn: true },
            { x: 16, y: 29.5, type: 'health' as const, respawn: true },
          ]
        : [
            { x: 10, y: 13.5, type: 'cash' as const, respawn: false },
            { x: 25, y: 3.5, type: 'cash' as const, respawn: false },
            { x: 24, y: 17.5, type: 'cash' as const, respawn: false },
            { x: 40, y: 17.5, type: 'cash' as const, respawn: false },
            { x: 55, y: 17.5, type: 'cash' as const, respawn: false },
            { x: 65, y: 3.5, type: 'cash' as const, respawn: false },
            { x: 40, y: 27.5, type: 'cash' as const, respawn: false },
            { x: 18, y: 13.5, type: 'weapon' as const, wId: WeaponId.BUNKER_RPG, respawn: true },
            { x: 62, y: 25.5, type: 'weapon' as const, wId: WeaponId.VULCAN_MINIGUN, respawn: true },
            { x: 14, y: 3.5, type: 'health' as const, respawn: true },
            { x: 66, y: 3.5, type: 'health' as const, respawn: true },
            { x: 10, y: 13.5, type: 'health' as const, respawn: true },
            { x: 40, y: 17.5, type: 'health' as const, respawn: true },
            { x: 64, y: 14.5, type: 'health' as const, respawn: true },
            { x: 40, y: 27.5, type: 'health' as const, respawn: true },
          ];

    initialPickups.forEach((p) => {
      const pk = new Pickup3D(this.scene, p.type, p.x, p.y, 25000, p.wId, p.respawn);
      this.pickups.push(pk);
    });

    return localPlayer;
  }

  public getTimeRemaining(): number {
    if (this.heistMode) return this.heistMode.matchTimeRemaining;
    if (this.odogwuMode) return this.odogwuMode.matchTimeRemaining;
    if (this.vaultMode) return this.vaultMode.matchTimeRemaining;
    if (this.apapaMode) return this.apapaMode.matchTimeRemaining;
    return 0;
  }

  public getExtractionPos(): THREE.Vector3 {
    if (this.heistMode) return this.heistMode.extractionPadPos;
    return this.odogwuMode?.extractionPosition || new THREE.Vector3(40, 41, 0);
  }

  public isExtractionActive(): boolean {
    if (this.heistMode) return this.heistMode.currentAct === HeistAct.ACT_3_EXTRACTION;
    return !!this.odogwuMode?.isExtractionActive();
  }

  public handlePlayerElimination(victim: Player, killer?: Player): void {
    if (this.tdmMode) {
      this.tdmMode.recordKill(victim, killer);
    } else if (this.ffaMode) {
      this.ffaMode.recordKill(victim, killer);
    }

    if (killer && this.heistMode) {
      this.heistMode.handleKill(killer, victim);
    }

    if (this.odogwuMode) {
      this.odogwuMode.handlePlayerElimination(victim, killer, this.scene, this.pickups);
    }

    // Drop physical ₦50,000 cash bundle loot right at victim's death location!
    const loot = new Pickup3D(
      this.scene,
      'cash',
      victim.actor.position.x,
      victim.actor.position.y + 0.8,
      50000
    );
    this.pickups.push(loot);

    // Set live 3.5s respawn countdown timer
    victim.respawnTimer = 3.5;
  }

  public checkPickupCollisions(player: Player, onAudioChime: () => void): void {
    if (player.stats.isDead) return;

    for (let i = 0; i < this.pickups.length; i++) {
      const pk = this.pickups[i];
      if (pk.isCollected) continue;

      const dist = player.actor.position.distanceTo(pk.mesh.position);
      if (dist < 2.0) {
        if (pk.type === 'health') {
          // If already at full HP, preserve the medkit
          if (player.stats.hp >= player.stats.maxHp) continue;
          player.heal(50);
          pk.isCollected = true;
          pk.mesh.visible = false;
          pk.respawnTimer = 20.0; // 20s respawn timer
          onAudioChime();
        } else if (pk.type === 'cash') {
          pk.isCollected = true;
          player.stats.cash += pk.value;
          pk.destroy(this.scene);
          onAudioChime();
        } else if (pk.type === 'weapon' && pk.weaponId) {
          // Tactical crate: refills active ammo to full and awards ₦15,000 without destroying chosen guns
          pk.isCollected = true;
          pk.mesh.visible = false;
          pk.respawnTimer = 25.0; // 25s respawn timer
          const activeW = player.stats.activeWeapon;
          const def = WEAPON_REGISTRY[activeW];
          if (def) {
            player.stats.ammo[activeW] = def.magSize;
            player.reloadTimer = 0;
          }
          player.stats.cash += 15000;
          onAudioChime();
        }
      }
    }
  }

  public update(
    dt: number,
    tileMap: TileMap3D,
    weaponSystem: WeaponSystem,
    rigSystem: RigSystem,
    onAudioChime: () => void,
    particles?: ParticleSystem3D
  ): void {
    if (this.isMatchOver) return;

    // 1. Update Game Mode State Machine
    if (this.tdmMode) {
      this.tdmMode.update(dt);
      if (this.tdmMode.isMatchOver) {
        this.isMatchOver = true;
      }
    } else if (this.ffaMode) {
      this.ffaMode.update(dt, this.players);
      if (this.ffaMode.isMatchOver) {
        this.isMatchOver = true;
      }
    } else if (this.heistMode) {
      this.heistMode.update(dt, this.players, particles, tileMap);
      if (this.heistMode.currentAct === HeistAct.MATCH_OVER) {
        this.isMatchOver = true;
      }
    } else if (this.odogwuMode) {
      this.odogwuMode.update(dt, this.players);
      if (this.odogwuMode.matchTimeRemaining <= 0) {
        this.isMatchOver = true;
      }
    } else if (this.vaultMode) {
      this.vaultMode.update(dt, this.players);
      if (this.vaultMode.matchTimeRemaining <= 0) {
        this.isMatchOver = true;
      }
    } else if (this.apapaMode) {
      this.apapaMode.update(dt, this.players);
      if (this.apapaMode.matchTimeRemaining <= 0) {
        this.isMatchOver = true;
      }
    }

    // 2. Update Pickups & Respawn Cycles
    for (let i = this.pickups.length - 1; i >= 0; i--) {
      const pk = this.pickups[i];
      pk.update(dt);
      if (pk.isCollected && !pk.canRespawn) {
        this.pickups.splice(i, 1);
      }
    }

    // 3. Check Pickup Collisions for all players
    this.players.forEach((p) => {
      this.checkPickupCollisions(p, onAudioChime);
    });

    // 4. Update Remote Human Players & Bot AIs
    this.remoteControllers.forEach((rc) => {
      rc.update(dt);
    });

    const isExtr = this.isExtractionActive();
    const extrPos = this.getExtractionPos();

    this.bots.forEach((bot) => {
      bot.update(dt, this.players, this.pickups, tileMap, weaponSystem, rigSystem, isExtr, extrPos);

      // In Act I of Heist, if bot is near vault, damage vault
      if (this.heistMode && this.heistMode.currentAct === HeistAct.ACT_1_BREACH) {
        const distToVault = bot.player.actor.position.distanceTo(this.heistMode.vaultPos);
        if (distToVault < 14.0 && Math.random() < 0.15) {
          this.heistMode.damageVault(15, tileMap, particles);
        }
      }
    });

    // 5. Update Dead Players & Live Respawn Countdown
    const spawnPointsKano = [
      { x: 14, y: 14 },
      { x: 34, y: 18 },
      { x: 48, y: 18 },
      { x: 65, y: 26 },
      { x: 25, y: 5 },
      { x: 55, y: 5 },
    ];
    const spawnPointsLagos = [
      { x: 8, y: 6.5 },
      { x: 22, y: 6.5 },
      { x: 38, y: 22 },
      { x: 54, y: 6.5 },
      { x: 16, y: 28 },
      { x: 66, y: 28 },
    ];
    const spawnPoints = this.currentMap === MapId.LAGOS_GOSLOW ? spawnPointsLagos : spawnPointsKano;

    this.players.forEach((p) => {
      if (p.stats.isDead && p.respawnTimer > 0) {
        p.respawnTimer -= dt;
        if (p.respawnTimer <= 0) {
          const sp = spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
          p.respawn(sp.x, sp.y);
        }
      }
    });

    // 6. Soft-Body Separation between players
    this.resolvePlayerSeparation(tileMap);
  }

  private resolvePlayerSeparation(tileMap: TileMap3D): void {
    const alive = this.players.filter((p) => !p.stats.isDead);
    for (let i = 0; i < alive.length; i++) {
      for (let j = i + 1; j < alive.length; j++) {
        const pA = alive[i];
        const pB = alive[j];

        const dx = pB.actor.position.x - pA.actor.position.x;
        const dy = pB.actor.position.y + 0.9 - (pA.actor.position.y + 0.9);

        const minDistX = 0.95;
        const minDistY = 1.6;

        if (Math.abs(dx) < minDistX && Math.abs(dy) < minDistY) {
          const overlapX = minDistX - Math.abs(dx);
          const dir = dx === 0 ? (i < j ? -1 : 1) : Math.sign(dx);
          const halfW = 0.4;

          const targetXA = pA.actor.position.x - dir * (overlapX * 0.5);
          const checkTileYA1 = Math.floor(pA.actor.position.y + 0.3);
          const checkTileYA2 = Math.floor(pA.actor.position.y + 1.4);
          const tileXA = Math.floor(targetXA + (dir < 0 ? halfW : -halfW));
          const blockedA = tileMap.isSolid(tileXA, checkTileYA1) || tileMap.isSolid(tileXA, checkTileYA2);

          const targetXB = pB.actor.position.x + dir * (overlapX * 0.5);
          const checkTileYB1 = Math.floor(pB.actor.position.y + 0.3);
          const checkTileYB2 = Math.floor(pB.actor.position.y + 1.4);
          const tileXB = Math.floor(targetXB + (dir > 0 ? halfW : -halfW));
          const blockedB = tileMap.isSolid(tileXB, checkTileYB1) || tileMap.isSolid(tileXB, checkTileYB2);

          if (!blockedA && !blockedB) {
            pA.actor.position.x -= dir * (overlapX * 0.5);
            pB.actor.position.x += dir * (overlapX * 0.5);
          } else if (!blockedA && blockedB) {
            pA.actor.position.x -= dir * overlapX;
          } else if (blockedA && !blockedB) {
            pB.actor.position.x += dir * overlapX;
          }

          const avgVx = (pA.actor.velocity.x + pB.actor.velocity.x) * 0.5;
          pA.actor.velocity.x = avgVx - dir * 1.5;
          pB.actor.velocity.x = avgVx + dir * 1.5;
        }
      }
    }
  }

  public getScoreboard(): MatchScoreboardEntry[] {
    const list: MatchScoreboardEntry[] = this.players.map((p) => ({
      id: p.stats.id,
      name: p.stats.name,
      cash: p.stats.cash,
      kills: p.stats.kills,
      deaths: p.stats.deaths,
      wallsDestroyed: p.stats.wallsDestroyed,
      isSarki: (this.heistMode?.carrierId === p.stats.id) || !!p.mesh.crownMesh.visible,
      isOdogwu: (this.heistMode?.carrierId === p.stats.id) || !!p.mesh.crownMesh.visible,
      isLocal: p.stats.isLocalPlayer,
    }));

    list.sort((a, b) => b.cash - a.cash);
    return list;
  }
}
