import { getHangarMenuHTML, getModeDisplayName, getMapDisplayName } from './HangarMenuTemplate';
import { GameModeType, MapId, MatchScoreboardEntry, MovementRigType, OperativeClass, WeaponId } from '../config/types';
import { RoastReceipt } from './RoastReceipt';
import { OperativeService } from '../services/OperativeService';
import { WEAPON_REGISTRY } from '../config/constants';
import { AudioSynth } from '../core/AudioSynth';
import { P2PNetworkManager } from '../network/P2PNetworkManager';
import { NetworkLobbyPlayer, RoomStatePayload } from '../network/NetworkTypes';

export interface MenuStartOptions {
  gamerTag: string;
  rigType: MovementRigType;
  modeType: GameModeType;
  mapId: MapId;
  primaryWeapon?: WeaponId;
  secondaryWeapon?: WeaponId;
  isMultiplayer?: boolean;
  roomId?: string;
  fillBots?: boolean;
  teamSize?: number;
}

const WEAPON_CYCLE: WeaponId[] = [
  WeaponId.RIFLE_XAG47,
  WeaponId.SHOTGUN_AA12,
  WeaponId.RAIL_SNIPER,
  WeaponId.VULCAN_MINIGUN,
  WeaponId.AKIMBO_UZIS,
  WeaponId.BUNKER_RPG,
  WeaponId.GHOST_SMG,
  WeaponId.CUTLASS,
  WeaponId.PISTOL_XAG9,
];

export class MenuOverlay {
  private container: HTMLElement;
  private audio?: AudioSynth;
  private onStartGameCallback?: (opts: MenuStartOptions) => void;
  private onRematchCallback?: () => void;

  private selectedGamerTag: string = 'XAG_001';
  private selectedRig: MovementRigType = MovementRigType.BREACH_BOOSTER;
  private selectedMode: GameModeType = GameModeType.ODOGWU_STASH;
  private selectedMap: MapId = MapId.BIRNIN_KANO;
  private selectedWeapon: WeaponId = WeaponId.RIFLE_XAG47;
  private selectedSecondaryWeapon: WeaponId = WeaponId.SHOTGUN_AA12;
  private fillBots: boolean = true;
  private teamSize: number = 2;

  private radarAnimId: number | null = null;

  constructor(containerId: string, audio?: AudioSynth) {
    const el = document.getElementById(containerId);
    if (!el) throw new Error(`UI container ${containerId} not found`);
    this.container = el;
    this.audio = audio;

    // Load saved callsign and rig from OperativeService
    const profile = OperativeService.getInstance().getProfile();
    this.selectedGamerTag = profile.call_sign || 'XAG_001';
    this.selectedRig = profile.selected_rig || MovementRigType.BREACH_BOOSTER;

    if (profile.unlocked_weapons && profile.unlocked_weapons.length > 0) {
      this.selectedWeapon = profile.unlocked_weapons[0];
    }
  }

  public showMainMenu(onStart: (opts: MenuStartOptions) => void): void {
    this.onStartGameCallback = onStart;
    document.body.classList.remove('in-match');
    const touchControls = document.getElementById('touch-controls');
    if (touchControls) touchControls.style.display = 'none';

    const profile = OperativeService.getInstance().getProfile();
    this.selectedGamerTag = profile.call_sign || 'XAG_001';

    if (this.radarAnimId !== null) {
      cancelAnimationFrame(this.radarAnimId);
      this.radarAnimId = null;
    }

    const currentWeaponDef = WEAPON_REGISTRY[this.selectedWeapon] || WEAPON_REGISTRY[WeaponId.RIFLE_XAG47];
    const currentSecWeaponDef = WEAPON_REGISTRY[this.selectedSecondaryWeapon] || WEAPON_REGISTRY[WeaponId.SHOTGUN_AA12];

    this.container.innerHTML = getHangarMenuHTML(
      profile,
      this.selectedGamerTag,
      currentWeaponDef,
      currentSecWeaponDef,
      this.selectedRig,
      this.selectedMap,
      this.selectedMode,
      this.teamSize,
      this.fillBots
    );

    // Helper: Update home screen display badges
    const updateHomeDisplays = () => {
      const modeEl = document.getElementById('home-mode-display');
      if (modeEl) modeEl.innerText = getModeDisplayName(this.selectedMode, this.teamSize);

      const mapEl = document.getElementById('home-map-display');
      if (mapEl) mapEl.innerText = `${getMapDisplayName(this.selectedMap)} • ${this.fillBots ? 'BOTS ON' : 'PVP ONLY'}`;

      const armorySubEl = document.getElementById('nav-armory-sub');
      const wDef = WEAPON_REGISTRY[this.selectedWeapon] || WEAPON_REGISTRY[WeaponId.RIFLE_XAG47];
      if (armorySubEl && wDef) armorySubEl.innerText = wDef.name;
    };

    // 1. Hook Callsign Input
    const callsignInput = document.getElementById('xag-callsign-input') as HTMLInputElement;
    if (callsignInput) {
      callsignInput.addEventListener('input', () => {
        this.selectedGamerTag = callsignInput.value.trim() || 'XAG_001';
      });
      callsignInput.addEventListener('change', () => {
        const p = OperativeService.getInstance().getProfile();
        p.call_sign = this.selectedGamerTag;
        OperativeService.getInstance()['saveToStorage']?.(p);
      });
    }

    // 2. Hook Audio & Settings
    document.getElementById('btn-audio-toggle')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.audio?.playUISelect();
    });
    document.getElementById('btn-open-settings')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.audio?.playUISelect();
      this.showDossierModal();
    });

    // 3. Hook Maps & Modes Dedicated Modal
    const mapsModal = document.getElementById('xag-maps-modal');
    const openMapsModal = (e: Event) => {
      e.stopPropagation();
      this.audio?.playUISelect();
      if (mapsModal) mapsModal.classList.add('open');
      this.startRadarAnimation();
    };
    const closeMapsModal = (e?: Event) => {
      if (e) e.stopPropagation();
      this.audio?.playUISelect();
      if (mapsModal) mapsModal.classList.remove('open');
      updateHomeDisplays();
    };

    document.getElementById('btn-open-maps-modal')?.addEventListener('click', openMapsModal);
    document.getElementById('btn-close-maps-modal')?.addEventListener('click', closeMapsModal);
    document.getElementById('btn-confirm-maps-modal')?.addEventListener('click', closeMapsModal);
    mapsModal?.addEventListener('click', (e) => {
      if (e.target === mapsModal) closeMapsModal();
    });

    // Hook Theater (Map) Cards
    const theaterCards = this.container.querySelectorAll<HTMLElement>('.xag-theater-card');
    theaterCards.forEach((card) => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        theaterCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        this.selectedMap = card.getAttribute('data-map') as MapId;
        this.audio?.playUISelect();
        updateHomeDisplays();
      });
    });

    // Hook Game Mode Cards
    const modeCards = this.container.querySelectorAll<HTMLElement>('.xag-mode-card');
    modeCards.forEach((card) => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        modeCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        this.selectedMode = card.getAttribute('data-mode') as GameModeType;
        this.teamSize = parseInt(card.getAttribute('data-teamsize') || '2', 10);
        this.audio?.playUISelect();
        updateHomeDisplays();
      });
    });

    // Hook Infiltration Bots Toggle
    const botToggleBtn = document.getElementById('btn-toggle-bots');
    botToggleBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.fillBots = !this.fillBots;
      const statusPill = document.getElementById('modal-bot-status-pill');
      if (statusPill) {
        statusPill.innerText = this.fillBots ? '🤖 BOTS: ENABLED' : '✕ PVP ONLY';
        statusPill.className = `xag-toggle-pill ${this.fillBots ? 'on' : 'off'}`;
      }
      this.audio?.playUISelect();
      updateHomeDisplays();
    });

    // 4. Hook Armory & Loadout Dedicated Modal
    const armoryModal = document.getElementById('xag-armory-modal');
    const openArmoryModal = (e: Event) => {
      e.stopPropagation();
      this.audio?.playCashPickup();
      if (armoryModal) armoryModal.classList.add('open');
      renderArmoryPanels();
    };
    const closeArmoryModal = (e?: Event) => {
      if (e) e.stopPropagation();
      this.audio?.playUISelect();
      if (armoryModal) armoryModal.classList.remove('open');
      updateHomeDisplays();
    };

    document.getElementById('btn-open-armory')?.addEventListener('click', openArmoryModal);
    document.getElementById('btn-top-vault')?.addEventListener('click', openArmoryModal);
    document.getElementById('btn-close-armory-modal')?.addEventListener('click', closeArmoryModal);
    document.getElementById('btn-save-armory-modal')?.addEventListener('click', closeArmoryModal);
    armoryModal?.addEventListener('click', (e) => {
      if (e.target === armoryModal) closeArmoryModal();
    });

    // Armory Tabs
    const tabPrimary = document.getElementById('tab-primary-btn');
    const tabSecondary = document.getElementById('tab-secondary-btn');
    const tabRigs = document.getElementById('tab-rigs-btn');
    const panelPrimary = document.getElementById('armory-panel-primary');
    const panelSecondary = document.getElementById('armory-panel-secondary');
    const panelRigs = document.getElementById('armory-panel-rigs');

    const switchArmoryTab = (tab: 'primary' | 'secondary' | 'rigs') => {
      [tabPrimary, tabSecondary, tabRigs].forEach((t) => t?.classList.remove('active'));
      if (panelPrimary) panelPrimary.style.display = tab === 'primary' ? 'grid' : 'none';
      if (panelSecondary) panelSecondary.style.display = tab === 'secondary' ? 'grid' : 'none';
      if (panelRigs) panelRigs.style.display = tab === 'rigs' ? 'grid' : 'none';

      if (tab === 'primary') tabPrimary?.classList.add('active');
      if (tab === 'secondary') tabSecondary?.classList.add('active');
      if (tab === 'rigs') tabRigs?.classList.add('active');
      this.audio?.playUISelect();
    };

    tabPrimary?.addEventListener('click', () => switchArmoryTab('primary'));
    tabSecondary?.addEventListener('click', () => switchArmoryTab('secondary'));
    tabRigs?.addEventListener('click', () => switchArmoryTab('rigs'));

    // Dynamic Armory Renderer
    const renderArmoryPanels = () => {
      const service = OperativeService.getInstance();

      // Render Primary Panel
      if (panelPrimary) {
        panelPrimary.innerHTML = WEAPON_CYCLE.map((wId) => {
          const def = WEAPON_REGISTRY[wId];
          const isEquipped = this.selectedWeapon === wId;
          const isUnlocked = service.isWeaponUnlocked(wId);
          return `
            <div class="xag-armory-card ${isEquipped ? 'equipped' : ''}" data-armory-weapon="${wId}" data-slot="primary">
              <div class="xag-w-header">
                <span class="xag-w-name">${def.name}</span>
                <span class="xag-w-status ${isEquipped ? 'active' : isUnlocked ? 'unlocked' : 'locked'}">
                  ${isEquipped ? 'EQUIPPED' : isUnlocked ? 'EQUIP' : 'BUY ₦' + (def.damage * 10000).toLocaleString()}
                </span>
              </div>
              <div class="xag-w-desc">${def.description}</div>
              <div class="xag-w-stats">
                <span>DMG: <b>${def.damage}</b></span>
                <span>RATE: <b>${(1 / def.fireInterval).toFixed(1)}/s</b></span>
                <span>MAG: <b>${def.magSize}</b></span>
                <span>WALL: <b>${def.wallDmgMultiplier}x</b></span>
              </div>
            </div>
          `;
        }).join('');

        panelPrimary.querySelectorAll<HTMLElement>('.xag-armory-card').forEach((card) => {
          card.addEventListener('click', (e) => {
            e.stopPropagation();
            const wId = card.getAttribute('data-armory-weapon') as WeaponId;
            const def = WEAPON_REGISTRY[wId];
            if (!service.isWeaponUnlocked(wId)) {
              const cost = def.damage * 10000;
              if (service.unlockWeapon(wId, cost)) {
                this.audio?.playCashPickup();
                this.selectedWeapon = wId;
                renderArmoryPanels();
                updateHomeDisplays();
              } else {
                alert('Insufficient Offshore Vault balance!');
              }
            } else {
              this.selectedWeapon = wId;
              this.audio?.playUISelect();
              renderArmoryPanels();
              updateHomeDisplays();
            }
          });
        });
      }

      // Render Secondary Panel
      if (panelSecondary) {
        panelSecondary.innerHTML = WEAPON_CYCLE.map((wId) => {
          const def = WEAPON_REGISTRY[wId];
          const isEquipped = this.selectedSecondaryWeapon === wId;
          const isUnlocked = service.isWeaponUnlocked(wId);
          return `
            <div class="xag-armory-card ${isEquipped ? 'equipped' : ''}" data-armory-weapon="${wId}" data-slot="secondary">
              <div class="xag-w-header">
                <span class="xag-w-name">${def.name}</span>
                <span class="xag-w-status ${isEquipped ? 'active' : isUnlocked ? 'unlocked' : 'locked'}">
                  ${isEquipped ? 'EQUIPPED' : isUnlocked ? 'EQUIP' : 'BUY ₦' + (def.damage * 10000).toLocaleString()}
                </span>
              </div>
              <div class="xag-w-desc">${def.description}</div>
              <div class="xag-w-stats">
                <span>DMG: <b>${def.damage}</b></span>
                <span>RATE: <b>${(1 / def.fireInterval).toFixed(1)}/s</b></span>
                <span>MAG: <b>${def.magSize}</b></span>
                <span>WALL: <b>${def.wallDmgMultiplier}x</b></span>
              </div>
            </div>
          `;
        }).join('');

        panelSecondary.querySelectorAll<HTMLElement>('.xag-armory-card').forEach((card) => {
          card.addEventListener('click', (e) => {
            e.stopPropagation();
            const wId = card.getAttribute('data-armory-weapon') as WeaponId;
            const def = WEAPON_REGISTRY[wId];
            if (!service.isWeaponUnlocked(wId)) {
              const cost = def.damage * 10000;
              if (service.unlockWeapon(wId, cost)) {
                this.audio?.playCashPickup();
                this.selectedSecondaryWeapon = wId;
                renderArmoryPanels();
              } else {
                alert('Insufficient Offshore Vault balance!');
              }
            } else {
              this.selectedSecondaryWeapon = wId;
              this.audio?.playUISelect();
              renderArmoryPanels();
            }
          });
        });
      }

      // Movement Rig Selection in Armory
      panelRigs?.querySelectorAll<HTMLElement>('.xag-rig-card-full').forEach((card) => {
        card.addEventListener('click', (e) => {
          e.stopPropagation();
          panelRigs.querySelectorAll('.xag-rig-card-full').forEach((c) => c.classList.remove('active'));
          card.classList.add('active');
          this.selectedRig = card.getAttribute('data-rig') as MovementRigType;
          this.audio?.playUISelect();
        });
      });
    };

    // 5. Hook Multiplayer & Squad
    document.getElementById('btn-open-multiplayer')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openMultiplayerLobby();
    });

    // 6. Hook Deploy Action Button
    document.getElementById('menu-deploy-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.executeDeploy(false);
    });

    // Pre-start radar loop in background so canvases are ready
    this.startRadarAnimation();
  }

  private executeDeploy(isMultiplayer = false, roomId?: string, fillBotsOverride?: boolean): void {
    this.audio?.playUIDeploy();

    // Stop radar
    if (this.radarAnimId !== null) {
      cancelAnimationFrame(this.radarAnimId);
      this.radarAnimId = null;
    }

    // Fullscreen attempt on mobile
    const doc = document as any;
    const docEl = document.documentElement as any;
    const isFull = doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement;
    if (!isFull) {
      const req = docEl.requestFullscreen || docEl.webkitRequestFullscreen || docEl.mozRequestFullScreen || docEl.msRequestFullscreen;
      if (req) req.call(docEl).catch(() => {});
    }
    try {
      if (screen.orientation && (screen.orientation as any).lock) {
        (screen.orientation as any).lock('landscape').catch(() => {});
      }
    } catch (_) {}
    window.scrollTo(0, 1);
    document.body.classList.add('in-match');

    this.container.innerHTML = '';
    const touchControls = document.getElementById('touch-controls');
    if (touchControls) touchControls.style.display = 'block';

    const finalFillBots = fillBotsOverride !== undefined ? fillBotsOverride : this.fillBots;

    if (this.onStartGameCallback) {
      this.onStartGameCallback({
        gamerTag: this.selectedGamerTag,
        rigType: this.selectedRig,
        modeType: this.selectedMode,
        mapId: this.selectedMap,
        primaryWeapon: this.selectedWeapon,
        secondaryWeapon: this.selectedSecondaryWeapon,
        isMultiplayer,
        roomId,
        fillBots: finalFillBots,
        teamSize: this.teamSize,
      });
    }
  }

  private openMultiplayerLobby(): void {
    const net = P2PNetworkManager.getInstance();

    const existing = document.getElementById('xag-lobby-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'xag-lobby-overlay';
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(3, 7, 18, 0.88);
      backdrop-filter: blur(8px);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      font-family: 'Chakra Petch', 'JetBrains Mono', monospace;
      color: #f8fafc;
    `;

    document.body.appendChild(overlay);

    const renderLobbyContent = (roomState?: RoomStatePayload, errorMsg?: string) => {
      if (roomState && roomState.roomId) {
        const isHost = roomState.isHost;
        const myPlayer = roomState.players.find((p) => p.id === roomState.yourPlayerId);
        const isReady = myPlayer ? myPlayer.isReady : false;

        const pingLabel = net.isHost
          ? '👑 HOST (0ms LAG)'
          : net.isLocalHotspot
          ? '🟢 <5ms (HOTSPOT)'
          : `🟡 ${net.ping || 18}ms (P2P)`;

        overlay.innerHTML = `
          <div style="background: #090d16; border: 1px solid #06b6d4; box-shadow: 0 0 35px rgba(6, 182, 212, 0.35); max-width: 580px; width: 100%; border-radius: 8px; overflow: hidden; padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 12px; margin-bottom: 16px;">
              <div>
                <div style="font-size: 11px; color: #06b6d4; font-weight: 700; letter-spacing: 2px;">⚡ P2P HOTSPOT ARENA</div>
                <div style="font-size: 24px; font-weight: 900; letter-spacing: 4px; color: #ffffff;">ROOM CODE: <span style="color: #38bdf8; text-shadow: 0 0 10px rgba(56, 189, 248, 0.7);">${roomState.roomId}</span></div>
              </div>
              <div style="display: flex; gap: 8px; align-items: center;">
                <button id="lobby-copy-btn" style="background: #1e293b; border: 1px solid #06b6d4; color: #38bdf8; padding: 6px 12px; font-size: 11px; font-weight: 700; cursor: pointer; border-radius: 4px; font-family: inherit;">📋 COPY CODE</button>
                <div style="font-size: 10px; background: rgba(34, 197, 94, 0.15); border: 1px solid #22c55e; color: #4ade80; padding: 4px 8px; border-radius: 4px;">${pingLabel}</div>
              </div>
            </div>

            <div style="display: flex; gap: 12px; font-size: 11px; color: #94a3b8; margin-bottom: 16px; background: #0f172a; padding: 8px 12px; border-radius: 4px; border: 1px solid #1e293b; align-items: center; justify-content: space-between;">
              <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                <div>MAP: <span style="color: #ffffff; font-weight: 700;">${this.selectedMap === MapId.LAGOS_GOSLOW ? 'LAGOS GO-SLOW' : 'BIRNIN KANO'}</span></div>
                <div>MODE: <span style="color: #38bdf8; font-weight: 800;">${
                  this.selectedMode === GameModeType.ODOGWU_STASH && this.teamSize === 2
                    ? '2v2 SQUAD HEIST'
                    : (this.selectedMode === GameModeType.TEAM_DEATHMATCH && this.teamSize === 2
                      ? '2v2 TDM'
                      : (this.selectedMode === GameModeType.ODOGWU_STASH ? 'SOLO HEIST' : this.selectedMode.replace('_', ' ')))
                }</span></div>
                <div>OPERATIVES: <span style="color: #4ade80; font-weight: 700;">${roomState.players.length} / ${this.teamSize === 2 ? 4 : 6}</span></div>
              </div>
              <div>
                ${isHost ? `
                  <button id="lobby-bot-btn" type="button" style="background: ${roomState.fillBots ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}; border: 1px solid ${roomState.fillBots ? '#22c55e' : '#ef4444'}; color: ${roomState.fillBots ? '#4ade80' : '#f87171'}; padding: 4px 10px; font-size: 11px; font-weight: 800; cursor: pointer; border-radius: 4px; font-family: inherit;">
                    ${roomState.fillBots ? '🤖 BOTS: ON' : '✕ BOTS: OFF'}
                  </button>
                ` : `
                  <div style="font-size: 11px; color: ${roomState.fillBots ? '#4ade80' : '#f87171'}; font-weight: 800; background: ${roomState.fillBots ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)'}; border: 1px solid ${roomState.fillBots ? '#22c55e' : '#ef4444'}; padding: 4px 8px; border-radius: 4px;">
                    ${roomState.fillBots ? '🤖 BOTS: ON' : '✕ BOTS: OFF'}
                  </div>
                `}
              </div>
            </div>

            <!-- Player Roster -->
            <div style="margin-bottom: 20px;">
              <div style="font-size: 10px; font-weight: 700; color: #64748b; letter-spacing: 2px; margin-bottom: 8px;">CONNECTED OPERATIVES:</div>
              <div style="display: flex; flex-direction: column; gap: 6px; max-height: 200px; overflow-y: auto;">
                ${roomState.players.map((p) => `
                  <div style="display: flex; align-items: center; justify-content: space-between; background: ${p.id === roomState.yourPlayerId ? 'rgba(6, 182, 212, 0.12)' : '#0f172a'}; border: 1px solid ${p.id === roomState.yourPlayerId ? '#06b6d4' : '#1e293b'}; padding: 8px 12px; border-radius: 4px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-weight: 800; color: ${p.id === roomState.yourPlayerId ? '#38bdf8' : '#ffffff'}; font-size: 13px;">${p.name} ${p.isHost ? '<span style="color: #eab308; font-size: 10px;">[HOST]</span>' : ''}</span>
                      <span style="font-size: 10px; background: #1e293b; color: #94a3b8; padding: 2px 6px; border-radius: 3px;">${p.rig}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-size: 10px; color: ${p.isReady ? '#4ade80' : '#f59e0b'}; font-weight: 800; background: ${p.isReady ? 'rgba(34, 197, 94, 0.15)' : 'rgba(245, 158, 11, 0.15)'}; padding: 3px 8px; border-radius: 3px; border: 1px solid ${p.isReady ? '#22c55e' : '#f59e0b'};">
                        ${p.isReady ? '✓ READY' : '⏳ PREPARING'}
                      </span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; gap: 10px;">
              <button id="lobby-ready-btn" style="flex: 1; background: ${isReady ? '#1e293b' : 'linear-gradient(135deg, #0284c7, #0369a1)'}; border: 1px solid #38bdf8; color: #ffffff; padding: 12px; font-weight: 800; font-size: 13px; cursor: pointer; border-radius: 4px; font-family: inherit;">
                ${isReady ? 'CANCEL READY' : '⚡ READY UP'}
              </button>
              ${isHost ? `
                <button id="lobby-start-btn" style="flex: 2; background: repeating-linear-gradient(-45deg, #008751, #008751 14px, #007345 14px, #007345 28px); border: 1px solid #4ade80; color: #ffffff; padding: 12px; font-weight: 900; font-size: 14px; letter-spacing: 2px; cursor: pointer; border-radius: 4px; font-family: inherit;">
                  LAUNCH MATCH
                </button>
              ` : `
                <div style="flex: 2; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #94a3b8; background: #0f172a; border: 1px solid #1e293b; border-radius: 4px;">
                  Waiting for host to launch...
                </div>
              `}
              <button id="lobby-leave-btn" style="background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; color: #f87171; padding: 12px 16px; font-weight: 700; font-size: 12px; cursor: pointer; border-radius: 4px; font-family: inherit;">LEAVE</button>
            </div>
          </div>
        `;

        document.getElementById('lobby-copy-btn')?.addEventListener('click', () => {
          navigator.clipboard.writeText(roomState.roomId).then(() => {
            const btn = document.getElementById('lobby-copy-btn');
            if (btn) btn.innerText = 'COPIED!';
            setTimeout(() => { if (btn) btn.innerText = '📋 COPY CODE'; }, 1500);
          });
        });

        document.getElementById('lobby-ready-btn')?.addEventListener('click', () => {
          net.setReady(!isReady);
        });

        document.getElementById('lobby-bot-btn')?.addEventListener('click', () => {
          net.toggleBots(!roomState.fillBots);
        });

        document.getElementById('lobby-start-btn')?.addEventListener('click', () => {
          net.startMatch();
        });

        document.getElementById('lobby-leave-btn')?.addEventListener('click', () => {
          net.leaveRoom();
          overlay.remove();
        });

      } else {
        // Initial Room Picker (Host or Join)
        overlay.innerHTML = `
          <div style="background: #090d16; border: 1px solid #06b6d4; box-shadow: 0 0 35px rgba(6, 182, 212, 0.35); max-width: 480px; width: 100%; border-radius: 8px; overflow: hidden; padding: 24px;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 12px; margin-bottom: 20px;">
              <div>
                <div style="font-size: 11px; color: #06b6d4; font-weight: 700; letter-spacing: 2px;">⚡ WEBRTC DIRECT P2P</div>
                <div style="font-size: 20px; font-weight: 900; letter-spacing: 3px; color: #ffffff;">HOTSPOT ARENA</div>
              </div>
              <button id="lobby-close-btn" style="background: none; border: none; color: #94a3b8; font-size: 20px; cursor: pointer;">✕</button>
            </div>

            ${errorMsg ? `
              <div style="background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #fca5a5; padding: 10px 14px; font-size: 11px; border-radius: 6px; margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between;">
                <span>⚠️ ${errorMsg}</span>
              </div>
            ` : ''}

            <div style="margin-bottom: 20px;">
              <button id="lobby-create-btn" style="width: 100%; background: linear-gradient(135deg, #0284c7, #0369a1); border: 1px solid #38bdf8; color: #ffffff; padding: 14px; font-weight: 900; font-size: 14px; letter-spacing: 2px; cursor: pointer; border-radius: 4px; font-family: inherit; transition: transform 0.1s;">
                ⚡ HOST ARENA MATCH (0ms LAG)
              </button>
              <div style="font-size: 10px; color: #94a3b8; margin-top: 6px; text-align: center;">Host runs authoritative simulation locally. Friends connect directly.</div>
            </div>

            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; color: #64748b; font-size: 11px;">
              <div style="flex: 1; height: 1px; background: #1e293b;"></div>
              <span>OR JOIN WITH 4-DIGIT CODE</span>
              <div style="flex: 1; height: 1px; background: #1e293b;"></div>
            </div>

            <div style="display: flex; gap: 10px; margin-bottom: 14px;">
              <input id="lobby-code-input" placeholder="4-DIGIT CODE (e.g. 2349)" maxlength="4" style="flex: 1; background: #0f172a; border: 1px solid #334155; color: #38bdf8; font-size: 18px; font-weight: 900; letter-spacing: 4px; text-transform: uppercase; padding: 10px 14px; border-radius: 4px; text-align: center; font-family: inherit; outline: none;" />
              <button id="lobby-join-btn" style="background: #1e293b; border: 1px solid #06b6d4; color: #38bdf8; font-weight: 800; font-size: 13px; padding: 10px 20px; cursor: pointer; border-radius: 4px; font-family: inherit;">JOIN</button>
            </div>

            <div style="font-size: 11px; color: #64748b; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px;">
              <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #22c55e;"></span>
              <span>Direct WebRTC UDP-style DataChannels (<5ms local Wi-Fi / Hotspot)</span>
            </div>
          </div>
        `;

        document.getElementById('lobby-close-btn')?.addEventListener('click', () => {
          overlay.remove();
        });

        document.getElementById('lobby-create-btn')?.addEventListener('click', () => {
          const createBtn = document.getElementById('lobby-create-btn') as HTMLButtonElement;
          if (createBtn) {
            createBtn.disabled = true;
            createBtn.innerText = 'INITIALIZING HOST...';
          }
          net.hostMatch(
            this.selectedGamerTag,
            this.selectedRig,
            this.selectedWeapon,
            this.selectedMap,
            this.selectedMode,
            this.fillBots,
            this.teamSize
          ).catch((err) => {
            renderLobbyContent(undefined, `Failed to initialize host: ${err.message || err}`);
          });
        });

        document.getElementById('lobby-join-btn')?.addEventListener('click', () => {
          const inputEl = document.getElementById('lobby-code-input') as HTMLInputElement;
          const code = (inputEl?.value || '').trim();
          if (!code || code.length !== 4) {
            renderLobbyContent(undefined, 'Please enter a 4-digit room code from the host.');
            return;
          }
          const joinBtn = document.getElementById('lobby-join-btn') as HTMLButtonElement;
          if (joinBtn) {
            joinBtn.disabled = true;
            joinBtn.innerText = 'CONNECTING...';
          }
          net.joinMatch(
            code,
            this.selectedGamerTag,
            this.selectedRig,
            this.selectedWeapon
          ).then((ok) => {
            if (!ok) {
              renderLobbyContent(undefined, `Could not connect to room ${code}. Verify 4-digit code or ensure both devices are on the same Wi-Fi / Mobile Hotspot.`);
            }
          });
        });
      }
    };

    renderLobbyContent();

    net.onRoomState = (state) => {
      if (state.mode) this.selectedMode = state.mode;
      if (state.mapId) this.selectedMap = state.mapId;
      if (state.teamSize !== undefined) this.teamSize = state.teamSize;
      if (state.fillBots !== undefined) this.fillBots = state.fillBots;
      renderLobbyContent(state);
    };

    net.onError = (errMsg) => {
      renderLobbyContent(undefined, errMsg);
    };

    net.onMatchStarting = (data) => {
      if (data.mode) this.selectedMode = data.mode;
      if (data.mapId) this.selectedMap = data.mapId;
      if (data.teamSize !== undefined) this.teamSize = data.teamSize;
      if (data.fillBots !== undefined) this.fillBots = data.fillBots;
      let count = data.countdownSec || 3;
      overlay.innerHTML = `
        <div style="background: #090d16; border: 2px solid #22c55e; box-shadow: 0 0 50px rgba(34, 197, 94, 0.5); padding: 40px; text-align: center; border-radius: 8px;">
          <div style="font-size: 13px; font-weight: 800; color: #22c55e; letter-spacing: 3px; margin-bottom: 10px;">OPERATIVES SYNCHRONIZED</div>
          <div style="font-size: 32px; font-weight: 900; color: #ffffff; letter-spacing: 4px; margin-bottom: 20px;">DEPLOYING TO SECTOR 234</div>
          <div id="lobby-countdown-num" style="font-size: 72px; font-weight: 900; color: #38bdf8; text-shadow: 0 0 20px #38bdf8;">${count}</div>
        </div>
      `;

      const timer = setInterval(() => {
        count--;
        const numEl = document.getElementById('lobby-countdown-num');
        if (numEl) numEl.innerText = `${count}`;
        if (count <= 0) {
          clearInterval(timer);
          overlay.remove();
          this.executeDeploy(true, net.currentRoomId || undefined, data.fillBots);
        }
      }, 1000);
    };
  }

  private startRadarAnimation(): void {
    const theaterCanvas = document.getElementById('radar-canvas-theater') as HTMLCanvasElement;
    const kanoCanvas = document.getElementById('radar-canvas-kano') as HTMLCanvasElement;
    const lagosCanvas = document.getElementById('radar-canvas-lagos') as HTMLCanvasElement;
    if (!theaterCanvas && !kanoCanvas && !lagosCanvas) return;

    let sweepAngle = 0;
    let rainOffset = 0;

    const render = () => {
      sweepAngle += 0.04;
      rainOffset = (rainOffset + 2) % 30;

      // 0. Active Theater Radar Screen (Top Right Dock)
      if (theaterCanvas) {
        const ctx = theaterCanvas.getContext('2d');
        if (ctx) {
          const w = theaterCanvas.width;
          const h = theaterCanvas.height;
          const cx = w * 0.5;
          const cy = h * 0.5;

          ctx.fillStyle = '#030705';
          ctx.fillRect(0, 0, w, h);

          if (this.selectedMap === MapId.BIRNIN_KANO) {
            // Citadel Radar
            ctx.strokeStyle = 'rgba(34, 197, 94, 0.2)';
            ctx.lineWidth = 1;
            for (let x = 0; x < w; x += 22) {
              ctx.beginPath();
              ctx.moveTo(x, 0);
              ctx.lineTo(x, h);
              ctx.stroke();
            }
            [18, 32, 48].forEach((r) => {
              ctx.beginPath();
              ctx.arc(cx, cy, r, 0, Math.PI * 2);
              ctx.stroke();
            });

            // Sweep
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(sweepAngle);
            const grad = ctx.createLinearGradient(0, 0, 50, 0);
            grad.addColorStop(0, 'rgba(34, 197, 94, 0.6)');
            grad.addColorStop(1, 'rgba(0, 135, 81, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.arc(0, 0, 50, 0, 0.45);
            ctx.closePath();
            ctx.fill();
            ctx.restore();

            // Blips
            ctx.fillStyle = '#facc15';
            ctx.beginPath();
            ctx.arc(cx, cy, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.font = 'bold 8px monospace';
            ctx.fillText('VAULT', cx + 6, cy + 3);

            ctx.fillStyle = '#22c55e';
            ctx.fillRect(cx - 30, cy - 12, 3, 3);
            ctx.fillRect(cx + 38, cy + 14, 3, 3);
          } else {
            // Lagos 3rd Mainland Expressway Radar
            ctx.strokeStyle = '#008751';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, 20);
            ctx.lineTo(w, 20);
            ctx.moveTo(0, 50);
            ctx.lineTo(w, 50);
            ctx.stroke();

            // Lane dashes
            ctx.strokeStyle = 'rgba(34, 197, 94, 0.4)';
            ctx.setLineDash([8, 8]);
            ctx.beginPath();
            ctx.moveTo(0, 35);
            ctx.lineTo(w, 35);
            ctx.stroke();
            ctx.setLineDash([]);

            // Rain streaks
            ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
            for (let rx = 10; rx < w; rx += 25) {
              const ry = (rx * 1.5 + rainOffset * 3) % h;
              ctx.beginPath();
              ctx.moveTo(rx, ry);
              ctx.lineTo(rx - 5, ry + 10);
              ctx.stroke();
            }

            // Moving convoy blips
            const busX = (sweepAngle * 40) % (w + 40) - 20;
            ctx.fillStyle = '#22c55e';
            ctx.fillRect(busX, 32, 12, 6);
            ctx.font = 'bold 8px monospace';
            ctx.fillText('3RD MAINLAND CONVOY', 10, 12);
          }
        }
      }

      // 1. Birnin Kano Radar Sweep (Phosphor Night-Vision Military Green #22C55E / #008751)
      if (kanoCanvas) {
        const ctx = kanoCanvas.getContext('2d');
        if (ctx) {
          const w = kanoCanvas.width;
          const h = kanoCanvas.height;
          const cx = w * 0.5;
          const cy = h * 0.5;

          ctx.fillStyle = '#040705';
          ctx.fillRect(0, 0, w, h);

          // Grid lines
          ctx.strokeStyle = 'rgba(0, 135, 81, 0.2)';
          ctx.lineWidth = 1;
          for (let x = 0; x < w; x += 24) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
          }
          for (let y = 0; y < h; y += 20) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
          }

          // Concentric circles
          ctx.strokeStyle = 'rgba(34, 197, 94, 0.35)';
          [20, 36, 54].forEach((r) => {
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.stroke();
          });

          // Rotating Sweep Line
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(sweepAngle);
          const grad = ctx.createLinearGradient(0, 0, 70, 0);
          grad.addColorStop(0, 'rgba(34, 197, 94, 0.65)');
          grad.addColorStop(0.5, 'rgba(0, 135, 81, 0.3)');
          grad.addColorStop(1, 'rgba(0, 135, 81, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, 70, 0, 0.4);
          ctx.closePath();
          ctx.fill();
          ctx.restore();

          // Sarki Treasury Vault Blip (Center Green Diamond)
          ctx.fillStyle = '#22c55e';
          ctx.beginPath();
          ctx.arc(cx, cy, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.font = 'bold 8px monospace';
          ctx.fillStyle = '#ffffff';
          ctx.fillText('[◆] VAULT', cx + 6, cy + 3);

          // Operative Blips (Phosphor Green & White)
          ctx.fillStyle = '#22c55e';
          ctx.fillRect(cx - 32, cy - 14, 3, 3);
          ctx.fillRect(cx + 42, cy + 18, 3, 3);
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(cx + 28, cy - 22, 3, 3);
        }
      }

      // 2. Lagos Highway Expressway Telemetry (Night-Vision Green Grid & Convoy Blips)
      if (lagosCanvas) {
        const ctx = lagosCanvas.getContext('2d');
        if (ctx) {
          const w = lagosCanvas.width;
          const h = lagosCanvas.height;

          ctx.fillStyle = '#040705';
          ctx.fillRect(0, 0, w, h);

          // Third Mainland Highway Flyover lines
          ctx.strokeStyle = '#008751';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(0, 24);
          ctx.lineTo(w, 24);
          ctx.moveTo(0, 56);
          ctx.lineTo(w, 56);
          ctx.stroke();

          // Highway lane dividers
          ctx.strokeStyle = 'rgba(34, 197, 94, 0.4)';
          ctx.setLineDash([8, 8]);
          ctx.beginPath();
          ctx.moveTo(0, 40);
          ctx.lineTo(w, 40);
          ctx.stroke();
          ctx.setLineDash([]);

          // Rainfall streaks
          ctx.strokeStyle = 'rgba(34, 197, 94, 0.22)';
          ctx.lineWidth = 1;
          for (let rx = 10; rx < w; rx += 28) {
            const ry = (rx * 1.5 + rainOffset * 3) % h;
            ctx.beginPath();
            ctx.moveTo(rx, ry);
            ctx.lineTo(rx - 6, ry + 12);
            ctx.stroke();
          }

          // Moving Convoy Blips along expressway
          const busX1 = (sweepAngle * 40) % (w + 40) - 20;
          const busX2 = (sweepAngle * 25 + 100) % (w + 40) - 20;

          ctx.fillStyle = '#22c55e';
          ctx.fillRect(busX1, 36, 12, 7);
          ctx.fillRect(busX2, 36, 12, 7);
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(busX1 + 2, 38, 8, 3);
          ctx.fillRect(busX2 + 2, 38, 8, 3);

          // Flyover Status Text
          ctx.font = 'bold 8px monospace';
          ctx.fillStyle = '#22c55e';
          ctx.fillText('[▲] 3RD MAINLAND // NIGHT-VISION RADAR', 10, 14);
        }
      }

      this.radarAnimId = requestAnimationFrame(render);
    };

    render();
  }

  public showDossierModal(): void {
    const service = OperativeService.getInstance();

    const modal = document.createElement('div');
    modal.id = 'dossier-modal';
    modal.style.position = 'fixed';
    modal.style.inset = '0';
    modal.style.background = 'rgba(5, 8, 6, 0.95)';
    modal.style.backdropFilter = 'blur(12px)';
    modal.style.zIndex = '1000';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.padding = '14px';

    const renderDossierContent = () => {
      const p = service.getProfile();
      const armoryWeapons = [
        { id: WeaponId.SHOTGUN_AA12, cost: 250000 },
        { id: WeaponId.AKIMBO_UZIS, cost: 300000 },
        { id: WeaponId.RAIL_SNIPER, cost: 550000 },
        { id: WeaponId.VULCAN_MINIGUN, cost: 800000 },
        { id: WeaponId.BUNKER_RPG, cost: 950000 },
      ];

      modal.innerHTML = `
        <div style="width: 100%; max-width: 620px; max-height: 90vh; overflow-y: auto; background: #0a100d; border: 2px solid #008751; border-radius: 6px; padding: 22px; font-family: 'JetBrains Mono', monospace; color: #f4f4f5; box-shadow: 0 0 50px rgba(0, 135, 81, 0.35);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1c2b22; padding-bottom: 10px; margin-bottom: 16px;">
            <div>
              <div style="color: #22c55e; font-size: 11px; font-weight: 800; letter-spacing: 2px;">[XAG] SPEC-OPS CONTRACTOR DOSSIER</div>
              <h2 style="font-size: 20px; font-weight: 900; margin: 2px 0 0 0; color: #ffffff;">${p.call_sign}</h2>
            </div>
            <button id="close-dossier" style="background: rgba(255, 255, 255, 0.08); border: 1px solid #1c2b22; color: #9ca3af; padding: 6px 14px; border-radius: 3px; cursor: pointer; font-weight: 800;">[X] CLOSE</button>
          </div>

          <!-- Balance & Rank Card -->
          <div style="background: #050806; border: 1px solid #1c2b22; padding: 14px; border-radius: 4px; margin-bottom: 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div>
              <div style="color: #9ca3af; font-size: 10px; font-weight: 700;">PERMANENT OFFSHORE VAULT</div>
              <div style="color: #22c55e; font-size: 22px; font-weight: 900;">₦${p.cash_balance.toLocaleString()}</div>
            </div>
            <div>
              <div style="color: #9ca3af; font-size: 10px; font-weight: 700;">SYNDICATE CLEARANCE RANK</div>
              <div style="color: #ffffff; font-size: 22px; font-weight: 900;">RANK ${p.rank}</div>
            </div>
          </div>

          <!-- Account Claim Form -->
          ${
            !p.is_claimed
              ? `
            <div style="background: rgba(0, 135, 81, 0.1); border: 1px dashed #008751; border-radius: 4px; padding: 14px; margin-bottom: 18px;">
              <div style="color: #22c55e; font-size: 12px; font-weight: 800; margin-bottom: 4px;">CLAIM CONTRACTOR IDENTITY (CLOUD SYNC)</div>
              <p style="color: #9ca3af; font-size: 11px; margin: 0 0 10px 0;">Secure your permanent offshore bank balance with a password. Zero email confirmations needed.</p>
              <div style="display: flex; gap: 8px;">
                <input id="claim-password" type="password" placeholder="Create Secret Password" style="flex: 1; background: #050806; border: 1px solid #1c2b22; color: #fff; padding: 8px 12px; border-radius: 4px; font-size: 12px; outline: none;" />
                <button id="btn-submit-claim" style="background: #008751; color: #ffffff; border: none; font-weight: 800; padding: 8px 14px; border-radius: 4px; cursor: pointer;">CLAIM</button>
              </div>
            </div>
          `
              : `
            <div style="background: rgba(0, 135, 81, 0.12); border: 1px solid #008751; border-radius: 4px; padding: 10px 14px; margin-bottom: 18px; display: flex; align-items: center; gap: 8px;">
              <span style="color: #22c55e; font-size: 16px;">[✓]</span>
              <span style="color: #22c55e; font-size: 11px; font-weight: 800;">CONTRACTOR PROFILE VERIFIED & CLOUD-SECURED</span>
            </div>
          `
          }

          <!-- Black-Market Armory Unlocks -->
          <div>
            <div style="color: #22c55e; font-size: 12px; font-weight: 800; margin-bottom: 10px; letter-spacing: 1px;">SPEC-OPS ARMORY UNLOCKS</div>
            <div style="display: grid; gap: 8px;">
              ${armoryWeapons
                .map((w) => {
                  const def = WEAPON_REGISTRY[w.id];
                  const unlocked = service.isWeaponUnlocked(w.id);
                  return `
                  <div style="background: #050806; border: 1px solid ${unlocked ? '#008751' : '#1c2b22'}; padding: 10px 14px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                      <div style="font-size: 13px; font-weight: 800; color: ${unlocked ? '#22c55e' : '#ffffff'};">${def.name}</div>
                      <div style="font-size: 10px; color: #9ca3af;">${def.description}</div>
                    </div>
                    ${
                      unlocked
                        ? `<span style="color: #22c55e; font-size: 11px; font-weight: 800;">[UNLOCKED]</span>`
                        : `<button class="btn-unlock-weapon" data-id="${w.id}" data-cost="${w.cost}" style="background: #008751; border: 1px solid rgba(255,255,255,0.2); color: #ffffff; font-size: 11px; font-weight: 800; padding: 6px 12px; border-radius: 4px; cursor: pointer;">BUY ₦${w.cost.toLocaleString()}</button>`
                    }
                  </div>
                `;
                })
                .join('')}
            </div>
          </div>
        </div>
      `;

      // Hook modal buttons
      const closeBtn = modal.querySelector('#close-dossier');
      if (closeBtn) closeBtn.addEventListener('click', () => modal.remove());

      const claimSubmit = modal.querySelector('#btn-submit-claim');
      if (claimSubmit) {
        claimSubmit.addEventListener('click', async () => {
          const pass = (modal.querySelector('#claim-password') as HTMLInputElement)?.value;
          if (pass) {
            await service.claimAccount(p.call_sign, pass);
            renderDossierContent();
          }
        });
      }

      const unlockBtns = modal.querySelectorAll('.btn-unlock-weapon');
      unlockBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const wId = btn.getAttribute('data-id') as WeaponId;
          const cost = parseInt(btn.getAttribute('data-cost') || '0', 10);
          if (service.unlockWeapon(wId, cost)) {
            this.audio?.playCashPickup();
            renderDossierContent();
            // Also update main menu balance if still open
            const topVaultVal = document.querySelector('.xag-vault-val');
            if (topVaultVal) topVaultVal.textContent = `₦${service.getProfile().cash_balance.toLocaleString()}`;
          } else {
            alert('Insufficient balance in Offshore Vault!');
          }
        });
      });
    };

    renderDossierContent();
    document.body.appendChild(modal);
  }

  public showMatchSummary(scoreboard: MatchScoreboardEntry[], onRematch: () => void): void {
    this.onRematchCallback = onRematch;
    const sarki = scoreboard[0];

    let rowsHtml = '';
    scoreboard.forEach((entry, idx) => {
      rowsHtml += `
        <tr style="border-bottom: 1px solid #1c2b22; color: ${entry.isLocal ? '#22c55e' : '#e4e4e7'};">
          <td style="padding: 10px; font-weight: 800;">#${idx + 1}</td>
          <td style="padding: 10px;">${entry.name} ${entry.isSarki || entry.isOdogwu ? '[◆]' : ''}</td>
          <td style="padding: 10px; font-family: 'JetBrains Mono', monospace; color: #22c55e; font-weight: 800;">₦${entry.cash.toLocaleString()}</td>
          <td style="padding: 10px; text-align: center;">${entry.kills}</td>
          <td style="padding: 10px; text-align: center;">${entry.deaths}</td>
          <td style="padding: 10px; text-align: center;">${entry.wallsDestroyed}</td>
        </tr>
      `;
    });

    this.container.innerHTML = `
      <div style="position: absolute; inset: 0; background: rgba(5, 8, 6, 0.95); backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 12px; pointer-events: auto;">
        <div style="width: 100%; max-width: 640px; max-height: 94vh; overflow-y: auto; background: #0a100d; border: 1.5px solid #008751; box-shadow: 0 0 50px rgba(0, 135, 81, 0.3); padding: 20px 24px; border-radius: 6px;">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 16px;">
            <div style="color: #22c55e; font-size: 11px; font-weight: 800; letter-spacing: 2px;">STUDIO XAG // AFTER-ACTION REPORT</div>
            <h2 style="color: #ffffff; font-size: 22px; font-weight: 900; margin-top: 4px;">[◆] THE SARKI: ${sarki.name.toUpperCase()} (₦${sarki.cash.toLocaleString()})</h2>
          </div>

          <!-- Scoreboard Table -->
          <table style="width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: 12px; margin-bottom: 20px;">
            <thead>
              <tr style="border-bottom: 1px solid #1c2b22; color: #9ca3af; text-align: left;">
                <th style="padding: 8px;">RANK</th>
                <th style="padding: 8px;">OPERATIVE</th>
                <th style="padding: 8px;">NET WORTH</th>
                <th style="padding: 8px; text-align: center;">KILLS</th>
                <th style="padding: 8px; text-align: center;">DEATHS</th>
                <th style="padding: 8px; text-align: center;">BREACHES</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>

          <!-- Actions -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <button id="summary-receipt-btn" style="background: #050806; border: 1.5px solid #22c55e; color: #22c55e; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 800; padding: 12px; border-radius: 4px; cursor: pointer; letter-spacing: 1px;">
              DOWNLOAD RECEIPT (PNG)
            </button>
            <button id="summary-rematch-btn" style="background: #008751; color: #ffffff; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 900; padding: 12px; border: none; border-radius: 4px; cursor: pointer; letter-spacing: 1px;">
              NEXT CONTRACT [REMATCH]
            </button>
          </div>
        </div>
      </div>
    `;

    const rematchBtn = document.getElementById('summary-rematch-btn');
    if (rematchBtn) {
      rematchBtn.addEventListener('click', () => {
        this.container.innerHTML = '';
        if (this.onRematchCallback) this.onRematchCallback();
      });
    }

    const receiptBtn = document.getElementById('summary-receipt-btn');
    if (receiptBtn) {
      receiptBtn.addEventListener('click', () => {
        RoastReceipt.downloadReceiptPNG(scoreboard, 'SARKI HEIST', this.selectedRig, WeaponId.RIFLE_XAG47);
      });
    }
  }
}
