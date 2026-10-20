import { GameModeType, MapId, MatchScoreboardEntry, MovementRigType, OperativeClass, WeaponId } from '../config/types';
import { RoastReceipt } from './RoastReceipt';
import { OperativeService } from '../services/OperativeService';
import { WEAPON_REGISTRY } from '../config/constants';
import { AudioSynth } from '../core/AudioSynth';
import { NetworkClient } from '../network/NetworkClient';
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
  private selectedMode: GameModeType = GameModeType.TEAM_DEATHMATCH;
  private selectedMap: MapId = MapId.BIRNIN_KANO;
  private selectedWeapon: WeaponId = WeaponId.RIFLE_XAG47;
  private selectedSecondaryWeapon: WeaponId = WeaponId.SHOTGUN_AA12;
  private fillBots: boolean = true;
  private teamSize: number = 3;

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

    this.container.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700;800;900&family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap');

        @keyframes subtlePulseGlow {
          0%, 100% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.45); }
          50% { box-shadow: 0 0 45px rgba(34, 197, 94, 0.8); }
        }
        @keyframes cyanPulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.35); }
          50% { box-shadow: 0 0 35px rgba(6, 182, 212, 0.7); }
        }

        .xag-menu-root {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 25%, #0f1724 0%, #080d14 70%, #030508 100%);
          display: flex;
          flex-direction: column;
          z-index: 100;
          padding: 16px 24px;
          pointer-events: auto;
          box-sizing: border-box;
          overflow-y: auto;
          font-family: 'Inter', -apple-system, sans-serif;
          color: #f1f5f9;
          user-select: none;
        }

        /* Top Header Navigation */
        .xag-nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 10px 20px;
          margin-bottom: 16px;
          flex-shrink: 0;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }

        .xag-nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .xag-nav-logo {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 22px;
          font-weight: 900;
          letter-spacing: 2px;
          background: linear-gradient(135deg, #ffffff 30%, #4ade80 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .xag-nav-pill {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid #22c55e;
          color: #4ade80;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 6px;
          letter-spacing: 1px;
        }

        .xag-profile-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(30, 41, 59, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 6px 14px;
          border-radius: 20px;
        }
        .xag-callsign-display {
          background: transparent;
          border: none;
          color: #ffffff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          font-weight: 800;
          outline: none;
          width: 100px;
          letter-spacing: 0.5px;
        }
        .xag-callsign-display:focus {
          border-bottom: 1px solid #38bdf8;
        }

        .xag-nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .xag-cash-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.35);
          padding: 6px 14px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .xag-cash-chip:hover {
          background: rgba(16, 185, 129, 0.3);
          transform: translateY(-1px);
        }
        .xag-cash-val {
          color: #34d399;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 900;
          font-size: 13px;
        }

        .xag-server-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          color: #4ade80;
        }
        .xag-led-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
        }

        /* Center Hub Content */
        .xag-center-hub {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          flex: 1;
        }

        /* Section Headers */
        .xag-section-title {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #94a3b8;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        /* Mode Selection Grid */
        .xag-mode-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .xag-mode-card {
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 16px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .xag-mode-card:hover {
          border-color: rgba(56, 189, 248, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
        }
        .xag-mode-card.active {
          background: linear-gradient(145deg, rgba(16, 185, 129, 0.18) 0%, rgba(15, 23, 42, 0.8) 100%);
          border: 2px solid #22c55e;
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.35);
        }

        .xag-mode-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .xag-mode-icon {
          font-size: 26px;
        }
        .xag-mode-badge {
          font-size: 9px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .xag-badge-blue { background: rgba(56, 189, 248, 0.2); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.4); }
        .xag-badge-purple { background: rgba(192, 132, 252, 0.2); color: #c084fc; border: 1px solid rgba(192, 132, 252, 0.4); }
        .xag-badge-red { background: rgba(248, 113, 113, 0.2); color: #f87171; border: 1px solid rgba(248, 113, 113, 0.4); }
        .xag-badge-gold { background: rgba(251, 191, 36, 0.2); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.4); }

        .xag-mode-title {
          font-family: 'Chakra Petch', sans-serif;
          font-size: 15px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 6px;
        }
        .xag-mode-desc {
          font-size: 11px;
          color: #94a3b8;
          line-height: 1.4;
          flex: 1;
        }
        .xag-mode-status {
          margin-top: 12px;
          font-size: 11px;
          font-weight: 800;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .xag-mode-card.active .xag-mode-status {
          color: #22c55e;
        }

        /* Match Settings Bar (Bots & Map) */
        .xag-settings-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .xag-settings-box {
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .xag-toggle-btn {
          background: #1e293b;
          border: 1.5px solid #334155;
          color: #94a3b8;
          font-family: 'Chakra Petch', sans-serif;
          font-size: 12px;
          font-weight: 800;
          padding: 8px 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .xag-toggle-btn.active {
          background: rgba(34, 197, 94, 0.2);
          border-color: #22c55e;
          color: #4ade80;
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.3);
        }

        .xag-map-selector {
          display: flex;
          gap: 8px;
        }
        .xag-map-pill {
          background: #1e293b;
          border: 1.5px solid #334155;
          color: #94a3b8;
          font-size: 12px;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .xag-map-pill.active {
          background: rgba(56, 189, 248, 0.2);
          border-color: #38bdf8;
          color: #ffffff;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
        }

        /* Action Launch Buttons */
        .xag-actions-row {
          display: grid;
          grid-template-columns: 1.6fr 1.2fr;
          gap: 14px;
          margin-top: 4px;
        }

        .xag-btn-play {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border: none;
          color: #ffffff;
          font-family: 'Chakra Petch', sans-serif;
          font-size: 18px;
          font-weight: 900;
          letter-spacing: 2px;
          padding: 16px 24px;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.2s;
          animation: subtlePulseGlow 2.5s infinite ease-in-out;
        }
        .xag-btn-play:hover {
          filter: brightness(1.15);
          transform: translateY(-2px);
        }
        .xag-btn-play:active {
          transform: translateY(1px);
        }

        .xag-btn-online {
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          border: 1.5px solid #38bdf8;
          color: #ffffff;
          font-family: 'Chakra Petch', sans-serif;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 1.5px;
          padding: 16px 20px;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.2s;
          animation: cyanPulseGlow 3s infinite ease-in-out;
        }
        .xag-btn-online:hover {
          filter: brightness(1.2);
          transform: translateY(-2px);
        }
        .xag-btn-online:active {
          transform: translateY(1px);
        }

        /* Bottom Loadout Dock */
        .xag-loadout-dock {
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 14px 18px;
          display: grid;
          grid-template-columns: 1fr 1fr 1.5fr auto;
          gap: 16px;
          align-items: center;
          margin-top: 4px;
        }

        .xag-loadout-item {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.15s;
        }
        .xag-loadout-item:hover {
          border-color: #38bdf8;
          background: rgba(30, 41, 59, 0.8);
        }
        .xag-swap-badge {
          background: #334155;
          color: #94a3b8;
          font-size: 9px;
          font-weight: 800;
          padding: 3px 6px;
          border-radius: 4px;
        }

        .xag-rig-selector {
          display: flex;
          gap: 6px;
        }
        .xag-rig-pill {
          flex: 1;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 8px 6px;
          text-align: center;
          cursor: pointer;
          transition: all 0.15s;
        }
        .xag-rig-pill:hover {
          border-color: #38bdf8;
        }
        .xag-rig-pill.active {
          background: rgba(34, 197, 94, 0.2);
          border-color: #22c55e;
          box-shadow: 0 0 12px rgba(34, 197, 94, 0.3);
        }
        .xag-rig-pill-name {
          font-size: 11px;
          font-weight: 800;
          color: #ffffff;
        }
        .xag-rig-pill.active .xag-rig-pill-name {
          color: #4ade80;
        }

        .xag-armory-btn {
          background: rgba(251, 191, 36, 0.15);
          border: 1px solid #fbbf24;
          color: #fde047;
          font-family: 'Chakra Petch', sans-serif;
          font-size: 12px;
          font-weight: 800;
          padding: 10px 14px;
          border-radius: 8px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s;
        }
        .xag-armory-btn:hover {
          background: rgba(251, 191, 36, 0.3);
        }

        /* Mobile Adjustments (< 860px) */
        @media screen and (max-width: 860px) {
          .xag-menu-root {
            padding: 10px;
          }
          .xag-nav-header {
            padding: 8px 12px;
            margin-bottom: 10px;
          }
          .xag-mode-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .xag-settings-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .xag-actions-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .xag-loadout-dock {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .xag-rig-selector {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
        }
      </style>

      <div class="xag-menu-root">
        <!-- Top Navigation Header -->
        <header class="xag-nav-header">
          <div class="xag-nav-brand">
            <span class="xag-nav-logo">SECTOR 234</span>
            <span class="xag-nav-pill">PROTOCOL ZERO</span>
          </div>

          <div class="xag-profile-chip" title="Click to edit your operative callsign">
            <span style="font-size: 12px; color: #94a3b8;">CALLSIGN:</span>
            <input id="xag-callsign-input" class="xag-callsign-display" type="text" maxlength="14" value="${this.selectedGamerTag}" spellcheck="false" />
            <span style="font-size: 10px; background: rgba(56, 189, 248, 0.2); color: #38bdf8; font-weight: 800; padding: 2px 6px; border-radius: 4px;">RANK ${profile.rank}</span>
          </div>

          <div class="xag-nav-right">
            <div id="btn-top-vault" class="xag-cash-chip" title="Open Syndicate Offshore Vault">
              <span>💰</span>
              <span class="xag-cash-val">₦${profile.cash_balance.toLocaleString()}</span>
            </div>
            <div class="xag-server-chip">
              <div class="xag-led-dot"></div>
              <span>ONLINE</span>
            </div>
          </div>
        </header>

        <!-- Center Battle Hub -->
        <main class="xag-center-hub">

          <!-- 1. Mode Selection Grid -->
          <section>
            <div class="xag-section-title">
              <span>⚔️ SELECT GAME MODE</span>
            </div>
            <div class="xag-mode-grid">

              <!-- 3v3 Team Deathmatch -->
              <div class="xag-mode-card ${this.selectedMode === GameModeType.TEAM_DEATHMATCH && this.teamSize === 3 ? 'active' : ''}" data-mode="TEAM_DEATHMATCH" data-teamsize="3">
                <div class="xag-mode-header">
                  <span class="xag-mode-icon">👥</span>
                  <span class="xag-mode-badge xag-badge-blue">COMPETITIVE</span>
                </div>
                <div class="xag-mode-title">3v3 TEAM DEATHMATCH</div>
                <div class="xag-mode-desc">Blue vs Red tactical showdown. First team to 25 eliminations wins.</div>
                <div class="xag-mode-status">
                  <span>${this.selectedMode === GameModeType.TEAM_DEATHMATCH && this.teamSize === 3 ? '✓ SELECTED' : '○ CLICK TO SELECT'}</span>
                </div>
              </div>

              <!-- 5v5 Team Deathmatch -->
              <div class="xag-mode-card ${this.selectedMode === GameModeType.TEAM_DEATHMATCH && this.teamSize === 5 ? 'active' : ''}" data-mode="TEAM_DEATHMATCH" data-teamsize="5">
                <div class="xag-mode-header">
                  <span class="xag-mode-icon">⚔️</span>
                  <span class="xag-mode-badge xag-badge-purple">10-PLAYER WAR</span>
                </div>
                <div class="xag-mode-title">5v5 TEAM DEATHMATCH</div>
                <div class="xag-mode-desc">Full squad battleground. First team to 40 eliminations claims the sector.</div>
                <div class="xag-mode-status">
                  <span>${this.selectedMode === GameModeType.TEAM_DEATHMATCH && this.teamSize === 5 ? '✓ SELECTED' : '○ CLICK TO SELECT'}</span>
                </div>
              </div>

              <!-- Free For All -->
              <div class="xag-mode-card ${this.selectedMode === GameModeType.FREE_FOR_ALL ? 'active' : ''}" data-mode="FREE_FOR_ALL" data-teamsize="1">
                <div class="xag-mode-header">
                  <span class="xag-mode-icon">💀</span>
                  <span class="xag-mode-badge xag-badge-red">DEATHMATCH</span>
                </div>
                <div class="xag-mode-title">FREE FOR ALL (SOLO)</div>
                <div class="xag-mode-desc">Every operative for themselves. Eliminate everyone. First to 20 kills wins.</div>
                <div class="xag-mode-status">
                  <span>${this.selectedMode === GameModeType.FREE_FOR_ALL ? '✓ SELECTED' : '○ CLICK TO SELECT'}</span>
                </div>
              </div>

              <!-- Odogwu Heist -->
              <div class="xag-mode-card ${this.selectedMode === GameModeType.ODOGWU_STASH ? 'active' : ''}" data-mode="ODOGWU_STASH" data-teamsize="3">
                <div class="xag-mode-header">
                  <span class="xag-mode-icon">💰</span>
                  <span class="xag-mode-badge xag-badge-gold">HEIST OBJECTIVE</span>
                </div>
                <div class="xag-mode-title">ODOGWU HEIST</div>
                <div class="xag-mode-desc">Breach the mud/concrete central vault, grab the cash bag & evac on the chopper.</div>
                <div class="xag-mode-status">
                  <span>${this.selectedMode === GameModeType.ODOGWU_STASH ? '✓ SELECTED' : '○ CLICK TO SELECT'}</span>
                </div>
              </div>

            </div>
          </section>

          <!-- 2. Match Settings (Bot Configuration & Map) -->
          <section class="xag-settings-row">
            <!-- Bot Fill Toggle -->
            <div class="xag-settings-box">
              <div>
                <div style="font-weight: 800; font-size: 13px; color: #ffffff; margin-bottom: 2px;">🤖 PLAY WITH BOTS</div>
                <div style="font-size: 11px; color: #94a3b8;">Fill empty slots with tactical AI bots</div>
              </div>
              <button id="btn-toggle-bots" type="button" class="xag-toggle-btn ${this.fillBots ? 'active' : ''}">
                <span id="bot-toggle-text">${this.fillBots ? '✓ BOTS: ON' : '✕ BOTS: OFF'}</span>
              </button>
            </div>

            <!-- Map Selection -->
            <div class="xag-settings-box">
              <div>
                <div style="font-weight: 800; font-size: 13px; color: #ffffff; margin-bottom: 2px;">🗺️ SECTOR MAP</div>
                <div style="font-size: 11px; color: #94a3b8;">Select your battle theater</div>
              </div>
              <div class="xag-map-selector">
                <button type="button" class="xag-map-pill ${this.selectedMap === MapId.BIRNIN_KANO ? 'active' : ''}" data-map="BIRNIN_KANO">
                  🏰 BIRNIN KANO
                </button>
                <button type="button" class="xag-map-pill ${this.selectedMap === MapId.LAGOS_GOSLOW ? 'active' : ''}" data-map="LAGOS_GOSLOW">
                  🚗 LAGOS GO-SLOW
                </button>
              </div>
            </div>
          </section>

          <!-- 3. Primary Actions (Play Solo/Bots vs Multiplayer Lobby) -->
          <section class="xag-actions-row">
            <button id="menu-deploy-btn" type="button" class="xag-btn-play">
              <span style="font-size: 22px;">▶</span>
              <span>PLAY MATCH (SOLO / BOTS)</span>
            </button>
            <button id="menu-online-btn" type="button" class="xag-btn-online">
              <span style="font-size: 20px;">⚡</span>
              <span>MULTIPLAYER LOBBY (PLAY ONLINE)</span>
            </button>
          </section>

          <!-- 4. Loadout Dock -->
          <section>
            <div class="xag-section-title">
              <span>🎯 OPERATIVE LOADOUT</span>
            </div>
            <div class="xag-loadout-dock">
              <!-- Primary Weapon -->
              <div id="weapon-select-card" class="xag-loadout-item" title="Click to swap weapon">
                <div>
                  <div style="font-size: 9px; color: #94a3b8; font-weight: 700;">PRIMARY WEAPON</div>
                  <div id="weapon-name-display" style="font-size: 12px; font-weight: 800; color: #ffffff;">${currentWeaponDef.name}</div>
                </div>
                <span id="btn-cycle-weapon" class="xag-swap-badge">SWAP</span>
              </div>

              <!-- Secondary Weapon -->
              <div id="sec-weapon-select-card" class="xag-loadout-item" title="Click to swap secondary">
                <div>
                  <div style="font-size: 9px; color: #94a3b8; font-weight: 700;">SECONDARY WEAPON</div>
                  <div id="sec-weapon-name-display" style="font-size: 12px; font-weight: 800; color: #ffffff;">${currentSecWeaponDef.name}</div>
                </div>
                <span id="btn-cycle-sec-weapon" class="xag-swap-badge">SWAP</span>
              </div>

              <!-- Mobility Rig Selector -->
              <div class="xag-rig-selector">
                <div class="xag-rig-pill ${this.selectedRig === MovementRigType.PHASE_DASH ? 'active' : ''}" data-rig="${MovementRigType.PHASE_DASH}" title="Specter: Phase Dash through thin cover">
                  <div style="font-size: 14px;">⚡</div>
                  <div class="xag-rig-pill-name">SPECTER</div>
                </div>
                <div class="xag-rig-pill ${this.selectedRig === MovementRigType.BREACH_BOOSTER ? 'active' : ''}" data-rig="${MovementRigType.BREACH_BOOSTER}" title="Vanguard: Smashes mud/concrete walls">
                  <div style="font-size: 14px;">🛡️</div>
                  <div class="xag-rig-pill-name">VANGUARD</div>
                </div>
                <div class="xag-rig-pill ${this.selectedRig === MovementRigType.GLITCH_ANCHOR ? 'active' : ''}" data-rig="${MovementRigType.GLITCH_ANCHOR}" title="Chronos: Snap-back teleport beacon">
                  <div style="font-size: 14px;">⏱️</div>
                  <div class="xag-rig-pill-name">CHRONOS</div>
                </div>
                <div class="xag-rig-pill ${this.selectedRig === MovementRigType.OVERDRIVE_SLIDE ? 'active' : ''}" data-rig="${MovementRigType.OVERDRIVE_SLIDE}" title="Striker: Kinetic slide and wall kick">
                  <div style="font-size: 14px;">🚀</div>
                  <div class="xag-rig-pill-name">STRIKER</div>
                </div>
              </div>

              <!-- Armory & Vault -->
              <button id="btn-open-dossier" type="button" class="xag-armory-btn">
                <span>🛒 ARMORY & SHOP</span>
              </button>
            </div>
          </section>

        </main>
      </div>
    `;

    // 1. Hook Mode Cards
    const modeCards = this.container.querySelectorAll<HTMLElement>('.xag-mode-card');
    modeCards.forEach((card) => {
      card.addEventListener('click', () => {
        modeCards.forEach((c) => {
          c.classList.remove('active');
          const status = c.querySelector('.xag-mode-status span');
          if (status) status.textContent = '○ CLICK TO SELECT';
        });

        card.classList.add('active');
        const activeStatus = card.querySelector('.xag-mode-status span');
        if (activeStatus) activeStatus.textContent = '✓ SELECTED';

        this.selectedMode = card.getAttribute('data-mode') as GameModeType;
        const ts = card.getAttribute('data-teamsize');
        this.teamSize = ts ? parseInt(ts, 10) : 3;

        this.audio?.playUISelect();
      });
    });

    // 2. Hook Bot Toggle
    const botBtn = document.getElementById('btn-toggle-bots');
    const botText = document.getElementById('bot-toggle-text');
    if (botBtn) {
      botBtn.addEventListener('click', () => {
        this.fillBots = !this.fillBots;
        botBtn.classList.toggle('active', this.fillBots);
        if (botText) {
          botText.textContent = this.fillBots ? '✓ BOTS: ON' : '✕ BOTS: OFF';
        }
        this.audio?.playUISelect();
      });
    }

    // 3. Hook Map Pills
    const mapPills = this.container.querySelectorAll<HTMLButtonElement>('.xag-map-pill');
    mapPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        mapPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        this.selectedMap = pill.getAttribute('data-map') as MapId;
        this.audio?.playUISelect();
      });
    });

    // 4. Hook Rig Pills
    const rigPills = this.container.querySelectorAll<HTMLElement>('.xag-rig-pill');
    rigPills.forEach((pill) => {
      pill.addEventListener('click', () => {
        rigPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        this.selectedRig = pill.getAttribute('data-rig') as MovementRigType;
        this.audio?.playUISelect();
      });
    });

    // 5. Hook Callsign Input
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

    // 6. Hook Weapons
    const updateWeaponDisplay = () => {
      const def = WEAPON_REGISTRY[this.selectedWeapon] || WEAPON_REGISTRY[WeaponId.RIFLE_XAG47];
      const nameEl = document.getElementById('weapon-name-display');
      if (nameEl) nameEl.innerText = def.name;
    };
    const cycleWeapon = (e: Event) => {
      e.stopPropagation();
      const idx = WEAPON_CYCLE.indexOf(this.selectedWeapon);
      const nextIdx = (idx + 1) % WEAPON_CYCLE.length;
      this.selectedWeapon = WEAPON_CYCLE[nextIdx];
      updateWeaponDisplay();
      this.audio?.playUISelect();
    };
    document.getElementById('weapon-select-card')?.addEventListener('click', cycleWeapon);
    document.getElementById('btn-cycle-weapon')?.addEventListener('click', cycleWeapon);

    const updateSecWeaponDisplay = () => {
      const def = WEAPON_REGISTRY[this.selectedSecondaryWeapon] || WEAPON_REGISTRY[WeaponId.SHOTGUN_AA12];
      const nameEl = document.getElementById('sec-weapon-name-display');
      if (nameEl) nameEl.innerText = def.name;
    };
    const cycleSecWeapon = (e: Event) => {
      e.stopPropagation();
      const idx = WEAPON_CYCLE.indexOf(this.selectedSecondaryWeapon);
      const nextIdx = (idx + 1) % WEAPON_CYCLE.length;
      this.selectedSecondaryWeapon = WEAPON_CYCLE[nextIdx];
      updateSecWeaponDisplay();
      this.audio?.playUISelect();
    };
    document.getElementById('sec-weapon-select-card')?.addEventListener('click', cycleSecWeapon);
    document.getElementById('btn-cycle-sec-weapon')?.addEventListener('click', cycleSecWeapon);

    // 7. Hook Armory / Shop
    const openArmory = (e: Event) => {
      e.stopPropagation();
      this.audio?.playCashPickup();
      this.showDossierModal();
    };
    document.getElementById('btn-open-dossier')?.addEventListener('click', openArmory);
    document.getElementById('btn-top-vault')?.addEventListener('click', openArmory);

    // 8. Hook Launch Buttons
    document.getElementById('menu-deploy-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.executeDeploy(false);
    });

    document.getElementById('menu-online-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openMultiplayerLobby();
    });
  }

  private executeDeploy(isMultiplayer = false, roomId?: string): void {
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

    this.container.innerHTML = '';
    const touchControls = document.getElementById('touch-controls');
    if (touchControls) touchControls.style.display = 'block';

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
        fillBots: this.fillBots,
        teamSize: this.teamSize,
      });
    }
  }

  private openMultiplayerLobby(): void {
    const net = NetworkClient.getInstance();

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
        const myPlayer = roomState.players.find(p => p.id === roomState.yourPlayerId);
        const isReady = myPlayer ? myPlayer.isReady : false;

        overlay.innerHTML = `
          <div style="background: #090d16; border: 1px solid #06b6d4; box-shadow: 0 0 35px rgba(6, 182, 212, 0.35); max-width: 580px; width: 100%; border-radius: 8px; overflow: hidden; padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 12px; margin-bottom: 16px;">
              <div>
                <div style="font-size: 11px; color: #06b6d4; font-weight: 700; letter-spacing: 2px;">⚡ LIVE TACTICAL ROOM</div>
                <div style="font-size: 24px; font-weight: 900; letter-spacing: 4px; color: #ffffff;">CODE: <span style="color: #38bdf8; text-shadow: 0 0 10px rgba(56, 189, 248, 0.7);">${roomState.roomId}</span></div>
              </div>
              <div style="display: flex; gap: 8px; align-items: center;">
                <button id="lobby-copy-btn" style="background: #1e293b; border: 1px solid #06b6d4; color: #38bdf8; padding: 6px 12px; font-size: 11px; font-weight: 700; cursor: pointer; border-radius: 4px; font-family: inherit;">📋 COPY CODE</button>
                <div style="font-size: 10px; background: rgba(34, 197, 94, 0.15); border: 1px solid #22c55e; color: #4ade80; padding: 4px 8px; border-radius: 4px;">🟢 ${net.ping || 20}ms</div>
              </div>
            </div>

            <div style="display: flex; gap: 12px; font-size: 11px; color: #94a3b8; margin-bottom: 16px; background: #0f172a; padding: 8px 12px; border-radius: 4px; border: 1px solid #1e293b;">
              <div>MAP: <span style="color: #ffffff; font-weight: 700;">${this.selectedMap === MapId.LAGOS_GOSLOW ? 'LAGOS GO-SLOW' : 'BIRNIN KANO'}</span></div>
              <div>MODE: <span style="color: #ffffff; font-weight: 700;">${this.selectedMode}</span></div>
              <div>OPERATIVES: <span style="color: #38bdf8; font-weight: 700;">${roomState.players.length} / 6</span></div>
            </div>

            <!-- Player Roster -->
            <div style="margin-bottom: 20px;">
              <div style="font-size: 10px; font-weight: 700; color: #64748b; letter-spacing: 2px; margin-bottom: 8px;">CONNECTED OPERATIVES:</div>
              <div style="display: flex; flex-direction: column; gap: 6px; max-height: 200px; overflow-y: auto;">
                ${roomState.players.map(p => `
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

        document.getElementById('lobby-start-btn')?.addEventListener('click', () => {
          net.startMatch();
        });

        document.getElementById('lobby-leave-btn')?.addEventListener('click', () => {
          overlay.remove();
        });

      } else {
        // Initial Room Picker (Create or Join)
        overlay.innerHTML = `
          <div style="background: #090d16; border: 1px solid #06b6d4; box-shadow: 0 0 35px rgba(6, 182, 212, 0.35); max-width: 480px; width: 100%; border-radius: 8px; overflow: hidden; padding: 24px;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 12px; margin-bottom: 20px;">
              <div>
                <div style="font-size: 11px; color: #06b6d4; font-weight: 700; letter-spacing: 2px;">⚡ MULTIPLAYER ARENA</div>
                <div style="font-size: 20px; font-weight: 900; letter-spacing: 3px; color: #ffffff;">ONLINE LOBBY</div>
              </div>
              <button id="lobby-close-btn" style="background: none; border: none; color: #94a3b8; font-size: 20px; cursor: pointer;">✕</button>
            </div>

            ${errorMsg ? `
              <div style="background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #fca5a5; padding: 10px 14px; font-size: 11px; border-radius: 6px; margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between;">
                <span>⚠️ ${errorMsg}</span>
                <button id="btn-lobby-retry" style="background: #ef4444; border: none; color: #ffffff; padding: 4px 10px; border-radius: 4px; font-size: 10px; font-weight: 800; cursor: pointer; font-family: inherit;">RETRY</button>
              </div>
            ` : ''}

            <div style="margin-bottom: 20px;">
              <button id="lobby-create-btn" style="width: 100%; background: linear-gradient(135deg, #0284c7, #0369a1); border: 1px solid #38bdf8; color: #ffffff; padding: 14px; font-weight: 900; font-size: 14px; letter-spacing: 2px; cursor: pointer; border-radius: 4px; font-family: inherit; transition: transform 0.1s;">
                CREATE NEW ARENA ROOM
              </button>
            </div>

            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; color: #64748b; font-size: 11px;">
              <div style="flex: 1; height: 1px; background: #1e293b;"></div>
              <span>OR JOIN WITH CODE</span>
              <div style="flex: 1; height: 1px; background: #1e293b;"></div>
            </div>

            <div style="display: flex; gap: 10px; margin-bottom: 14px;">
              <input id="lobby-code-input" placeholder="4-LETTER CODE" maxlength="4" style="flex: 1; background: #0f172a; border: 1px solid #334155; color: #38bdf8; font-size: 18px; font-weight: 900; letter-spacing: 4px; text-transform: uppercase; padding: 10px 14px; border-radius: 4px; text-align: center; font-family: inherit; outline: none;" />
              <button id="lobby-join-btn" style="background: #1e293b; border: 1px solid #06b6d4; color: #38bdf8; font-weight: 800; font-size: 13px; padding: 10px 20px; cursor: pointer; border-radius: 4px; font-family: inherit;">JOIN</button>
            </div>

            <div style="font-size: 11px; color: #64748b; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px;">
              <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #22c55e;"></span>
              <span>Live Railway Cloud Multiplayer (wss://sector-234-production.up.railway.app)</span>
            </div>
          </div>
        `;

        document.getElementById('lobby-close-btn')?.addEventListener('click', () => {
          overlay.remove();
        });

        document.getElementById('btn-lobby-retry')?.addEventListener('click', () => {
          renderLobbyContent();
          net.connect().then((connected) => {
            if (!connected) {
              renderLobbyContent(undefined, `Unable to reach live arena server (${net.serverUrl}).`);
            }
          });
        });

        document.getElementById('lobby-create-btn')?.addEventListener('click', () => {
          net.createRoom(
            this.selectedGamerTag,
            this.selectedRig,
            this.selectedWeapon,
            this.selectedMap,
            this.selectedMode
          );
        });

        document.getElementById('lobby-join-btn')?.addEventListener('click', () => {
          const inputEl = document.getElementById('lobby-code-input') as HTMLInputElement;
          const code = (inputEl?.value || '').trim().toUpperCase();
          if (!code) return;
          net.joinRoom(
            code,
            this.selectedGamerTag,
            this.selectedRig,
            this.selectedWeapon
          );
        });
      }
    };

    renderLobbyContent();

    net.connect().then((connected) => {
      if (!connected) {
        renderLobbyContent(undefined, `Unable to reach live arena server (${net.serverUrl}). Tap RETRY to reconnect.`);
      }
    });

    net.onRoomState = (state) => {
      renderLobbyContent(state);
    };

    net.onError = (errMsg) => {
      renderLobbyContent(undefined, errMsg);
    };

    net.onMatchStarting = (data) => {
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
          this.executeDeploy(true, net.currentRoomId || undefined);
        }
      }, 1000);
    };
  }

  private startRadarAnimation(): void {
    const kanoCanvas = document.getElementById('radar-canvas-kano') as HTMLCanvasElement;
    const lagosCanvas = document.getElementById('radar-canvas-lagos') as HTMLCanvasElement;
    if (!kanoCanvas && !lagosCanvas) return;

    let sweepAngle = 0;
    let rainOffset = 0;

    const render = () => {
      sweepAngle += 0.04;
      rainOffset = (rainOffset + 2) % 30;

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
