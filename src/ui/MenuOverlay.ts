import { GameModeType, MapId, MatchScoreboardEntry, MovementRigType, OperativeClass, WeaponId } from '../config/types';
import { RoastReceipt } from './RoastReceipt';
import { OperativeService } from '../services/OperativeService';
import { WEAPON_REGISTRY } from '../config/constants';
import { AudioSynth } from '../core/AudioSynth';

export interface MenuStartOptions {
  gamerTag: string;
  rigType: MovementRigType;
  modeType: GameModeType;
  mapId: MapId;
  primaryWeapon?: WeaponId;
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

    // Stop any previous radar loop
    if (this.radarAnimId !== null) {
      cancelAnimationFrame(this.radarAnimId);
      this.radarAnimId = null;
    }

    const currentWeaponDef = WEAPON_REGISTRY[this.selectedWeapon] || WEAPON_REGISTRY[WeaponId.RIFLE_XAG47];

    this.container.innerHTML = `
      <style>
        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseLed {
          0%, 100% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 6px #10b981); }
          50% { opacity: 0.4; transform: scale(0.85); filter: drop-shadow(0 0 2px #10b981); }
        }
        @keyframes deployGlow {
          0%, 100% { box-shadow: 0 0 25px rgba(245, 158, 11, 0.45), inset 0 0 15px rgba(255, 255, 255, 0.2); }
          50% { box-shadow: 0 0 45px rgba(245, 158, 11, 0.8), inset 0 0 25px rgba(255, 255, 255, 0.35); }
        }
        @keyframes scanlineMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }

        .xag-war-room {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 20%, #111420 0%, #07080c 100%);
          display: flex;
          flex-direction: column;
          z-index: 100;
          padding: 12px 18px;
          pointer-events: auto;
          box-sizing: border-box;
          overflow: hidden;
          font-family: 'JetBrains Mono', 'Chakra Petch', monospace;
          color: #f4f4f5;
          user-select: none;
        }

        /* Scanline Overlay */
        .xag-war-room::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0px, rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px);
          pointer-events: none;
          z-index: 1;
        }

        /* Top Bar */
        .xag-top-bar {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 16px;
          background: rgba(15, 19, 28, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 4px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          margin-bottom: 12px;
          flex-shrink: 0;
        }

        .xag-brand-tag {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .xag-badge {
          background: #f59e0b;
          color: #07080c;
          font-weight: 900;
          font-size: 11px;
          padding: 2px 7px;
          border-radius: 2px;
          letter-spacing: 1.5px;
        }
        .xag-title {
          font-family: 'Chakra Petch', sans-serif;
          font-weight: 900;
          font-size: 18px;
          letter-spacing: 2px;
          color: #f4f4f5;
        }
        .xag-sub {
          font-size: 10px;
          color: #71717a;
          letter-spacing: 1px;
        }

        .xag-net-status {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 4px 12px;
          border-radius: 3px;
          font-size: 11px;
          color: #10b981;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .xag-net-led {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: pulseLed 1.6s infinite ease-in-out;
        }

        .xag-vault-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.4);
          padding: 4px 12px;
          border-radius: 3px;
          cursor: pointer;
          transition: 0.15s;
        }
        .xag-vault-badge:hover {
          background: rgba(245, 158, 11, 0.2);
          border-color: #f59e0b;
          transform: translateY(-1px);
        }
        .xag-vault-val {
          color: #10b981;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        /* 3-Column Command Grid */
        .xag-grid-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1.25fr 1fr;
          gap: 14px;
          flex: 1;
          min-height: 0;
          box-sizing: border-box;
        }

        .xag-column {
          background: rgba(12, 16, 25, 0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          padding: 14px;
          box-sizing: border-box;
          overflow-y: auto;
          box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.35);
        }

        .xag-column::-webkit-scrollbar {
          width: 4px;
        }
        .xag-column::-webkit-scrollbar-thumb {
          background: rgba(245, 158, 11, 0.4);
          border-radius: 2px;
        }

        .xag-col-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 8px;
          margin-bottom: 14px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #38bdf8;
          text-transform: uppercase;
        }
        .xag-col-header.amber { color: #f59e0b; }
        .xag-col-header.emerald { color: #10b981; }

        /* Dossier Elements */
        .xag-section-label {
          font-size: 10px;
          font-weight: 800;
          color: #94a3b8;
          letter-spacing: 1.5px;
          margin-bottom: 6px;
          text-transform: uppercase;
          display: flex;
          justify-content: space-between;
        }

        .xag-input-box {
          display: flex;
          align-items: center;
          background: rgba(7, 9, 14, 0.85);
          border: 1.5px solid rgba(56, 189, 248, 0.4);
          border-radius: 3px;
          padding: 6px 10px;
          margin-bottom: 16px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .xag-input-box:focus-within {
          border-color: #38bdf8;
          box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
        }
        .xag-callsign-input {
          flex: 1;
          background: transparent;
          border: none;
          color: #f4f4f5;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          font-weight: 800;
          outline: none;
          letter-spacing: 1px;
        }
        .xag-edit-btn {
          background: rgba(56, 189, 248, 0.15);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #38bdf8;
          font-size: 11px;
          padding: 3px 7px;
          border-radius: 2px;
          cursor: pointer;
          transition: 0.1s;
        }
        .xag-edit-btn:hover {
          background: #38bdf8;
          color: #07080c;
        }

        /* Weapon Primary Card */
        .xag-weapon-card {
          background: rgba(7, 9, 14, 0.85);
          border: 1.5px solid rgba(245, 158, 11, 0.4);
          border-radius: 4px;
          padding: 10px 12px;
          margin-bottom: 16px;
          cursor: pointer;
          transition: 0.15s;
        }
        .xag-weapon-card:hover {
          border-color: #f59e0b;
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.25);
        }
        .xag-weapon-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }
        .xag-weapon-name {
          font-size: 13px;
          font-weight: 900;
          color: #f59e0b;
          letter-spacing: 1px;
        }
        .xag-cycle-btn {
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.4);
          color: #f59e0b;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 2px;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          transition: 0.15s;
        }
        .xag-cycle-btn:hover {
          background: #f59e0b;
          color: #07080c;
        }

        .xag-weapon-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          font-size: 10px;
          color: #94a3b8;
          margin-top: 8px;
        }
        .xag-stat-bar-bg {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-top: 2px;
        }
        .xag-stat-bar-fill {
          height: 100%;
          background: #f59e0b;
          border-radius: 2px;
        }

        /* Armory Button */
        .xag-armory-btn {
          margin-top: auto;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%);
          border: 1.5px solid rgba(56, 189, 248, 0.4);
          border-radius: 4px;
          padding: 12px;
          color: #f4f4f5;
          cursor: pointer;
          transition: 0.15s;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .xag-armory-btn:hover {
          border-color: #38bdf8;
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.25);
          transform: translateY(-1px);
        }
        .xag-armory-icon {
          font-size: 22px;
        }
        .xag-armory-title {
          font-size: 12px;
          font-weight: 800;
          color: #38bdf8;
          letter-spacing: 1px;
        }
        .xag-armory-sub {
          font-size: 10px;
          color: #94a3b8;
        }

        /* Theater / Map Cards */
        .xag-map-card {
          background: rgba(7, 9, 14, 0.85);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 10px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: 0.15s;
          position: relative;
          overflow: hidden;
        }
        .xag-map-card.active {
          border-color: #f59e0b;
          box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
          background: rgba(245, 158, 11, 0.05);
        }
        .xag-map-card:hover {
          border-color: rgba(245, 158, 11, 0.7);
        }
        .xag-map-card.lagos.active {
          border-color: #06b6d4;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
          background: rgba(6, 182, 212, 0.05);
        }
        .xag-map-radar-frame {
          width: 100%;
          height: 80px;
          background: #05070a;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 2px;
          margin-bottom: 8px;
          position: relative;
          overflow: hidden;
        }
        .xag-map-title {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1px;
          color: #f4f4f5;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .xag-map-bounty {
          font-size: 10px;
          font-weight: 800;
          color: #10b981;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          padding: 2px 6px;
          border-radius: 2px;
        }
        .xag-map-desc {
          font-size: 10px;
          color: #71717a;
          margin-top: 4px;
        }

        /* Mode Selector Sub-grid */
        .xag-mode-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 6px;
          margin-top: auto;
        }
        .xag-mode-pill {
          background: rgba(7, 9, 14, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 3px;
          padding: 8px 4px;
          text-align: center;
          cursor: pointer;
          transition: 0.15s;
        }
        .xag-mode-pill.active {
          border-color: #10b981;
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
        }
        .xag-mode-pill:hover {
          border-color: #10b981;
        }
        .xag-mode-name {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        /* Rig Cards */
        .xag-rig-card {
          background: rgba(7, 9, 14, 0.85);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 9px 12px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: 0.15s;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .xag-rig-card:hover {
          border-color: rgba(56, 189, 248, 0.6);
        }
        .xag-rig-card.active {
          border-color: #38bdf8;
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.25);
          background: rgba(56, 189, 248, 0.08);
        }
        .xag-rig-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .xag-rig-icon {
          font-size: 14px;
        }
        .xag-rig-name {
          font-size: 12px;
          font-weight: 800;
          color: #f4f4f5;
          letter-spacing: 1px;
        }
        .xag-rig-card.active .xag-rig-name {
          color: #38bdf8;
        }
        .xag-rig-tag {
          font-size: 9px;
          color: #71717a;
        }
        .xag-rig-card.active .xag-rig-tag {
          color: #38bdf8;
          font-weight: 800;
        }

        /* Tactical Giant Deploy Button */
        .xag-deploy-container {
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .xag-deploy-btn {
          width: 100%;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: #07080c;
          font-family: 'Chakra Petch', 'JetBrains Mono', sans-serif;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 3px;
          padding: 16px 14px;
          border: none;
          cursor: pointer;
          text-align: center;
          text-transform: uppercase;
          clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px);
          animation: deployGlow 2.5s infinite ease-in-out;
          transition: transform 0.1s, filter 0.1s;
        }
        .xag-deploy-btn:hover {
          transform: scale(1.02);
          filter: brightness(1.15);
        }
        .xag-deploy-btn:active {
          transform: scale(0.98);
        }
        .xag-deploy-decor {
          font-size: 9px;
          color: rgba(7, 8, 12, 0.7);
          letter-spacing: 4px;
          margin-bottom: 2px;
          font-weight: 800;
        }

        /* Responsive Fallback for Compact Screens */
        @media screen and (max-width: 860px) {
          .xag-grid-container {
            grid-template-columns: 1fr;
            overflow-y: auto;
          }
          .xag-top-bar {
            flex-direction: column;
            gap: 8px;
            align-items: flex-start;
          }
        }
      </style>

      <div class="xag-war-room">
        <!-- Top Status Bar -->
        <div class="xag-top-bar">
          <div class="xag-brand-tag">
            <span class="xag-badge">[XAG]</span>
            <div>
              <div class="xag-title">SECTOR 234 // PROTOCOL ZERO</div>
              <div class="xag-sub">AREWA & EKO 2.5D HEIST ARENA</div>
            </div>
          </div>

          <div class="xag-net-status">
            <div class="xag-net-led"></div>
            <span>[● NET: LAGOS-1 (14ms)]</span>
          </div>

          <div id="btn-top-vault" class="xag-vault-badge" title="Open Syndicate Offshore Vault">
            <span style="font-size: 14px;">🏦</span>
            <div>
              <div style="font-size: 9px; color: #71717a; font-weight: 700;">VAULT BALANCE</div>
              <div class="xag-vault-val">₦${profile.cash_balance.toLocaleString()}</div>
            </div>
          </div>
        </div>

        <!-- 3-Column Tactical Command Grid -->
        <div class="xag-grid-container">

          <!-- 01 // OPERATOR DOSSIER -->
          <div class="xag-column">
            <div class="xag-col-header">
              <span>01 // OPERATOR DOSSIER</span>
              <span style="font-size: 10px; color: #71717a;">ID: #${profile.id ? profile.id.slice(-4).toUpperCase() : '234'}</span>
            </div>

            <!-- Callsign Input -->
            <div class="xag-section-label">
              <span>CALLSIGN ID:</span>
              <span style="color: #38bdf8;">RANK ${profile.rank}</span>
            </div>
            <div class="xag-input-box">
              <input id="xag-callsign-input" class="xag-callsign-input" type="text" maxlength="16" value="${this.selectedGamerTag}" spellcheck="false" />
              <button id="btn-edit-callsign" class="xag-edit-btn" title="Edit Callsign">[✎]</button>
            </div>

            <!-- Loadout Primary Weapon -->
            <div class="xag-section-label">
              <span>LOADOUT PRIMARY:</span>
              <span id="weapon-cat-label" style="color: #f59e0b;">${currentWeaponDef.category.toUpperCase()}</span>
            </div>
            <div id="weapon-select-card" class="xag-weapon-card">
              <div class="xag-weapon-head">
                <span id="weapon-name-display" class="xag-weapon-name">${currentWeaponDef.name.toUpperCase()}</span>
                <button id="btn-cycle-weapon" class="xag-cycle-btn">[🔄] SWAP</button>
              </div>
              <div style="font-size: 10px; color: #71717a; line-height: 1.3;" id="weapon-desc-display">
                ${currentWeaponDef.description}
              </div>
              <div class="xag-weapon-stats">
                <div>
                  <div style="display: flex; justify-content: space-between;">
                    <span>DMG</span>
                    <span id="stat-dmg-val" style="color: #f4f4f5; font-weight: 800;">${currentWeaponDef.damage}</span>
                  </div>
                  <div class="xag-stat-bar-bg"><div id="stat-dmg-bar" class="xag-stat-bar-fill" style="width: ${Math.min(100, (currentWeaponDef.damage / 180) * 100)}%;"></div></div>
                </div>
                <div>
                  <div style="display: flex; justify-content: space-between;">
                    <span>ROF</span>
                    <span id="stat-rof-val" style="color: #f4f4f5; font-weight: 800;">${Math.round(60 / currentWeaponDef.fireInterval)}</span>
                  </div>
                  <div class="xag-stat-bar-bg"><div id="stat-rof-bar" class="xag-stat-bar-fill" style="width: ${Math.min(100, (0.4 / Math.max(0.06, currentWeaponDef.fireInterval)) * 100)}%;"></div></div>
                </div>
                <div>
                  <div style="display: flex; justify-content: space-between;">
                    <span>RNG</span>
                    <span id="stat-rng-val" style="color: #f4f4f5; font-weight: 800;">${currentWeaponDef.range}m</span>
                  </div>
                  <div class="xag-stat-bar-bg"><div id="stat-rng-bar" class="xag-stat-bar-fill" style="width: ${Math.min(100, (currentWeaponDef.range / 45) * 100)}%;"></div></div>
                </div>
                <div>
                  <div style="display: flex; justify-content: space-between;">
                    <span>MAG</span>
                    <span id="stat-mag-val" style="color: #f4f4f5; font-weight: 800;">${currentWeaponDef.magSize}</span>
                  </div>
                  <div class="xag-stat-bar-bg"><div id="stat-mag-bar" class="xag-stat-bar-fill" style="width: ${Math.min(100, (currentWeaponDef.magSize / 120) * 100)}%;"></div></div>
                </div>
              </div>
            </div>

            <!-- Open Bank & Armory -->
            <button id="btn-open-dossier" class="xag-armory-btn">
              <span class="xag-armory-icon">🗂️</span>
              <div>
                <div class="xag-armory-title">[ OPEN BANK & ARMORY ]</div>
                <div class="xag-armory-sub">Unlock Guns & Syndicate Perks</div>
              </div>
            </button>
          </div>

          <!-- 02 // DEPLOYMENT THEATER -->
          <div class="xag-column">
            <div class="xag-col-header amber">
              <span>02 // DEPLOYMENT THEATER</span>
              <span style="font-size: 10px; color: #f59e0b;">SECTOR MAP</span>
            </div>

            <!-- Birnin Kano Map Card -->
            <div class="xag-map-card ${this.selectedMap === MapId.BIRNIN_KANO ? 'active' : ''}" data-map="BIRNIN_KANO">
              <div class="xag-map-radar-frame">
                <canvas id="radar-canvas-kano" width="280" height="80" style="width: 100%; height: 100%; display: block;"></canvas>
              </div>
              <div class="xag-map-title">
                <span>🏺 BIRNIN KANO // 2099</span>
                <span class="xag-map-bounty">₦1,000,000</span>
              </div>
              <div class="xag-map-desc">
                1800s Earthen Citadel • Tubali Mud Walls • Farin Kasa Horns • Royal Vault
              </div>
            </div>

            <!-- Lagos Map Card -->
            <div class="xag-map-card lagos ${this.selectedMap === MapId.LAGOS_GOSLOW ? 'active' : ''}" data-map="LAGOS_GOSLOW">
              <div class="xag-map-radar-frame">
                <canvas id="radar-canvas-lagos" width="280" height="80" style="width: 100%; height: 100%; display: block;"></canvas>
              </div>
              <div class="xag-map-title">
                <span>🚌 LAGOS // EKO SECTOR</span>
                <span class="xag-map-bounty">₦1,500,000</span>
              </div>
              <div class="xag-map-desc">
                Danfo Expressway Gridlock • 3rd Mainland Flyover • Blackout Rain
              </div>
            </div>

            <!-- Operation Contract Mode Selector -->
            <div class="xag-section-label" style="margin-top: 6px;">
              <span>OPERATION CONTRACT [MODE]:</span>
            </div>
            <div class="xag-mode-grid">
              <div class="xag-mode-pill ${this.selectedMode === GameModeType.ODOGWU_STASH ? 'active' : ''}" data-mode="ODOGWU_STASH">
                <div class="xag-mode-name">👑 SARKI HEIST</div>
                <div style="font-size: 8px; color: #71717a; margin-top: 2px;">3-Act Evac</div>
              </div>
              <div class="xag-mode-pill ${this.selectedMode === GameModeType.VAULT_HEIST ? 'active' : ''}" data-mode="VAULT_HEIST">
                <div class="xag-mode-name">🏦 VAULT CRACK</div>
                <div style="font-size: 8px; color: #71717a; margin-top: 2px;">3v3 Strike</div>
              </div>
              <div class="xag-mode-pill ${this.selectedMode === GameModeType.APAPA_LOCKDOWN ? 'active' : ''}" data-mode="APAPA_LOCKDOWN">
                <div class="xag-mode-name">🚢 LOCKDOWN</div>
                <div style="font-size: 8px; color: #71717a; margin-top: 2px;">High-Yield</div>
              </div>
            </div>
          </div>

          <!-- 03 // TACTICAL RIG + DEPLOY LAUNCHER -->
          <div class="xag-column">
            <div class="xag-col-header emerald">
              <span>03 // TACTICAL RIG</span>
              <span style="font-size: 10px; color: #10b981;">MOBILITY CORE</span>
            </div>

            <!-- Rig 1: Phase Dash (Specter) -->
            <div class="xag-rig-card ${this.selectedRig === MovementRigType.PHASE_DASH ? 'active' : ''}" data-rig="${MovementRigType.PHASE_DASH}">
              <div class="xag-rig-info">
                <span class="xag-rig-icon">⚡</span>
                <div>
                  <div class="xag-rig-name">[⚡] SPECTER // PHASE</div>
                  <div style="font-size: 9px; color: #71717a;">High-speed tactical dash through thin covers</div>
                </div>
              </div>
              <div class="xag-rig-tag">${this.selectedRig === MovementRigType.PHASE_DASH ? 'EQUIPPED' : '3.0s CD'}</div>
            </div>

            <!-- Rig 2: Breach Booster (Vanguard) -->
            <div class="xag-rig-card ${this.selectedRig === MovementRigType.BREACH_BOOSTER ? 'active' : ''}" data-rig="${MovementRigType.BREACH_BOOSTER}">
              <div class="xag-rig-info">
                <span class="xag-rig-icon">🚀</span>
                <div>
                  <div class="xag-rig-name">[🚀] VANGUARD // BREACH</div>
                  <div style="font-size: 9px; color: #71717a;">Smashes 3 layers of mud/concrete walls</div>
                </div>
              </div>
              <div class="xag-rig-tag">${this.selectedRig === MovementRigType.BREACH_BOOSTER ? 'EQUIPPED' : '2.5s CD'}</div>
            </div>

            <!-- Rig 3: Glitch Anchor (Chronos) -->
            <div class="xag-rig-card ${this.selectedRig === MovementRigType.GLITCH_ANCHOR ? 'active' : ''}" data-rig="${MovementRigType.GLITCH_ANCHOR}">
              <div class="xag-rig-info">
                <span class="xag-rig-icon">⏱️</span>
                <div>
                  <div class="xag-rig-name">[⏱️] CHRONOS // ANCHOR</div>
                  <div style="font-size: 9px; color: #71717a;">Temporal snap-back repositioning beacon</div>
                </div>
              </div>
              <div class="xag-rig-tag">${this.selectedRig === MovementRigType.GLITCH_ANCHOR ? 'EQUIPPED' : '4.0s CD'}</div>
            </div>

            <!-- Rig 4: Overdrive Slide (Striker) -->
            <div class="xag-rig-card ${this.selectedRig === MovementRigType.OVERDRIVE_SLIDE ? 'active' : ''}" data-rig="${MovementRigType.OVERDRIVE_SLIDE}">
              <div class="xag-rig-info">
                <span class="xag-rig-icon">🔥</span>
                <div>
                  <div class="xag-rig-name">[🔥] STRIKER // SLIDE</div>
                  <div style="font-size: 9px; color: #71717a;">Kinetic power-slides + vertical wall-kicks</div>
                </div>
              </div>
              <div class="xag-rig-tag">${this.selectedRig === MovementRigType.OVERDRIVE_SLIDE ? 'EQUIPPED' : '1.5s CD'}</div>
            </div>

            <!-- Deploy Launcher Button -->
            <div class="xag-deploy-container">
              <button id="menu-deploy-btn" class="xag-deploy-btn">
                <div class="xag-deploy-decor">◢█████████████████████◣</div>
                <div>█  DEPLOY TO SECTOR 234 █</div>
                <div class="xag-deploy-decor">◥█████████████████████◤</div>
              </button>
            </div>

          </div>

        </div>
      </div>
    `;

    // 1. Hook Callsign
    const callsignInput = document.getElementById('xag-callsign-input') as HTMLInputElement;
    const editBtn = document.getElementById('btn-edit-callsign');
    if (callsignInput) {
      callsignInput.addEventListener('input', () => {
        this.selectedGamerTag = callsignInput.value || 'XAG_001';
      });
      callsignInput.addEventListener('change', () => {
        const p = OperativeService.getInstance().getProfile();
        p.call_sign = this.selectedGamerTag;
        OperativeService.getInstance()['saveToStorage']?.(p);
      });
    }
    if (editBtn && callsignInput) {
      editBtn.addEventListener('click', () => {
        callsignInput.focus();
        callsignInput.select();
        this.audio?.playUISelect();
      });
    }

    // 2. Hook Weapon Primary Switcher
    const updateWeaponDisplay = () => {
      const def = WEAPON_REGISTRY[this.selectedWeapon] || WEAPON_REGISTRY[WeaponId.RIFLE_XAG47];
      const nameEl = document.getElementById('weapon-name-display');
      const catEl = document.getElementById('weapon-cat-label');
      const descEl = document.getElementById('weapon-desc-display');
      const dmgVal = document.getElementById('stat-dmg-val');
      const dmgBar = document.getElementById('stat-dmg-bar');
      const rofVal = document.getElementById('stat-rof-val');
      const rofBar = document.getElementById('stat-rof-bar');
      const rngVal = document.getElementById('stat-rng-val');
      const rngBar = document.getElementById('stat-rng-bar');
      const magVal = document.getElementById('stat-mag-val');
      const magBar = document.getElementById('stat-mag-bar');

      if (nameEl) nameEl.innerText = def.name.toUpperCase();
      if (catEl) catEl.innerText = def.category.toUpperCase();
      if (descEl) descEl.innerText = def.description;
      if (dmgVal) dmgVal.innerText = `${def.damage}`;
      if (dmgBar) dmgBar.style.width = `${Math.min(100, (def.damage / 180) * 100)}%`;
      if (rofVal) rofVal.innerText = `${Math.round(60 / def.fireInterval)}`;
      if (rofBar) rofBar.style.width = `${Math.min(100, (0.4 / Math.max(0.06, def.fireInterval)) * 100)}%`;
      if (rngVal) rngVal.innerText = `${def.range}m`;
      if (rngBar) rngBar.style.width = `${Math.min(100, (def.range / 45) * 100)}%`;
      if (magVal) magVal.innerText = `${def.magSize}`;
      if (magBar) magBar.style.width = `${Math.min(100, (def.magSize / 120) * 100)}%`;
    };

    const cycleWeapon = (e: Event) => {
      e.stopPropagation();
      const idx = WEAPON_CYCLE.indexOf(this.selectedWeapon);
      const nextIdx = (idx + 1) % WEAPON_CYCLE.length;
      this.selectedWeapon = WEAPON_CYCLE[nextIdx];
      updateWeaponDisplay();
      this.audio?.playUISelect();
    };

    const weaponCard = document.getElementById('weapon-select-card');
    const cycleBtn = document.getElementById('btn-cycle-weapon');
    if (weaponCard) weaponCard.addEventListener('click', cycleWeapon);
    if (cycleBtn) cycleBtn.addEventListener('click', cycleWeapon);

    // 3. Hook Maps
    const mapCards = this.container.querySelectorAll('.xag-map-card');
    mapCards.forEach((card) => {
      const selectMap = (e: Event) => {
        e.stopPropagation();
        mapCards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        this.selectedMap = card.getAttribute('data-map') as MapId;
        this.audio?.playUISelect();
      };
      card.addEventListener('click', selectMap);
      card.addEventListener('pointerdown', selectMap);
      card.addEventListener('mouseenter', () => this.audio?.playUIHover());
    });

    // 4. Hook Modes
    const modePills = this.container.querySelectorAll('.xag-mode-pill');
    modePills.forEach((pill) => {
      const selectMode = (e: Event) => {
        e.stopPropagation();
        modePills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        this.selectedMode = pill.getAttribute('data-mode') as GameModeType;
        this.audio?.playUISelect();
      };
      pill.addEventListener('click', selectMode);
      pill.addEventListener('pointerdown', selectMode);
      pill.addEventListener('mouseenter', () => this.audio?.playUIHover());
    });

    // 5. Hook Rigs
    const rigCards = this.container.querySelectorAll('.xag-rig-card');
    rigCards.forEach((card) => {
      const selectRig = (e: Event) => {
        e.stopPropagation();
        rigCards.forEach((c) => {
          c.classList.remove('active');
          const tag = c.querySelector('.xag-rig-tag');
          if (tag) tag.textContent = 'STANDBY';
        });
        card.classList.add('active');
        const activeTag = card.querySelector('.xag-rig-tag');
        if (activeTag) activeTag.textContent = 'EQUIPPED';
        this.selectedRig = card.getAttribute('data-rig') as MovementRigType;
        this.audio?.playUISelect();
      };
      card.addEventListener('click', selectRig);
      card.addEventListener('pointerdown', selectRig);
      card.addEventListener('mouseenter', () => this.audio?.playUIHover());
    });

    // 6. Hook Bank & Armory Modals
    const dossierBtn = document.getElementById('btn-open-dossier');
    const topVaultBtn = document.getElementById('btn-top-vault');
    const openDossierHandler = (e: Event) => {
      e.stopPropagation();
      this.audio?.playCashPickup();
      this.showDossierModal();
    };
    if (dossierBtn) dossierBtn.addEventListener('click', openDossierHandler);
    if (topVaultBtn) topVaultBtn.addEventListener('click', openDossierHandler);

    // 7. Start Animated Canvas Radars
    this.startRadarAnimation();

    // 8. Deploy Button Handler
    const deployBtn = document.getElementById('menu-deploy-btn')!;
    let deployed = false;
    const handleDeploy = (e: Event) => {
      e.stopPropagation();
      if (deployed) return;
      deployed = true;

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
        });
      }
    };

    deployBtn.addEventListener('click', handleDeploy);
    deployBtn.addEventListener('pointerdown', handleDeploy);
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

      // 1. Birnin Kano Radar Sweep (Warm Terracotta / Gold Radar)
      if (kanoCanvas) {
        const ctx = kanoCanvas.getContext('2d');
        if (ctx) {
          const w = kanoCanvas.width;
          const h = kanoCanvas.height;
          const cx = w * 0.5;
          const cy = h * 0.5;

          ctx.fillStyle = '#05070a';
          ctx.fillRect(0, 0, w, h);

          // Grid lines
          ctx.strokeStyle = 'rgba(245, 158, 11, 0.12)';
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
          grad.addColorStop(0, 'rgba(245, 158, 11, 0.6)');
          grad.addColorStop(1, 'rgba(245, 158, 11, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, 70, 0, 0.4);
          ctx.closePath();
          ctx.fill();
          ctx.restore();

          // Sarki Treasury Vault Blip (Center Gold Diamond)
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(cx, cy, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.font = 'bold 8px monospace';
          ctx.fillStyle = '#f59e0b';
          ctx.fillText('VAULT', cx + 6, cy + 3);

          // Operative Blips
          ctx.fillStyle = '#10b981';
          ctx.fillRect(cx - 32, cy - 14, 3, 3);
          ctx.fillRect(cx + 42, cy + 18, 3, 3);
          ctx.fillStyle = '#ef4444';
          ctx.fillRect(cx + 28, cy - 22, 3, 3);
        }
      }

      // 2. Lagos Highway Expressway Telemetry (Rain & Moving Danfo Blips)
      if (lagosCanvas) {
        const ctx = lagosCanvas.getContext('2d');
        if (ctx) {
          const w = lagosCanvas.width;
          const h = lagosCanvas.height;

          ctx.fillStyle = '#05070a';
          ctx.fillRect(0, 0, w, h);

          // Third Mainland Highway Flyover lines
          ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(0, 24);
          ctx.lineTo(w, 24);
          ctx.moveTo(0, 56);
          ctx.lineTo(w, 56);
          ctx.stroke();

          // Highway lane dividers
          ctx.strokeStyle = 'rgba(250, 204, 21, 0.35)';
          ctx.setLineDash([8, 8]);
          ctx.beginPath();
          ctx.moveTo(0, 40);
          ctx.lineTo(w, 40);
          ctx.stroke();
          ctx.setLineDash([]);

          // Rainfall streaks
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.18)';
          ctx.lineWidth = 1;
          for (let rx = 10; rx < w; rx += 28) {
            const ry = (rx * 1.5 + rainOffset * 3) % h;
            ctx.beginPath();
            ctx.moveTo(rx, ry);
            ctx.lineTo(rx - 6, ry + 12);
            ctx.stroke();
          }

          // Yellow Danfo Bus blips moving along expressway
          const busX1 = (sweepAngle * 40) % (w + 40) - 20;
          const busX2 = (sweepAngle * 25 + 100) % (w + 40) - 20;

          ctx.fillStyle = '#facc15';
          ctx.fillRect(busX1, 36, 12, 7);
          ctx.fillRect(busX2, 36, 12, 7);
          ctx.fillStyle = '#0f172a';
          ctx.fillRect(busX1 + 2, 38, 8, 3);
          ctx.fillRect(busX2 + 2, 38, 8, 3);

          // Flyover Status Text
          ctx.font = 'bold 8px monospace';
          ctx.fillStyle = '#06b6d4';
          ctx.fillText('3RD MAINLAND RADAR // EKO GRIDLOCK', 10, 14);
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
    modal.style.background = 'rgba(7, 7, 9, 0.94)';
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
        <div style="width: 100%; max-width: 620px; max-height: 90vh; overflow-y: auto; background: #0c1019; border: 2px solid #f59e0b; border-radius: 6px; padding: 22px; font-family: 'JetBrains Mono', monospace; color: #f4f4f5; box-shadow: 0 0 50px rgba(245, 158, 11, 0.25);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255, 255, 255, 0.1); padding-bottom: 10px; margin-bottom: 16px;">
            <div>
              <div style="color: #f59e0b; font-size: 11px; font-weight: 800; letter-spacing: 2px;">[XAG] SYNDICATE CONTRACTOR DOSSIER</div>
              <h2 style="font-size: 20px; font-weight: 900; margin: 2px 0 0 0;">${p.call_sign}</h2>
            </div>
            <button id="close-dossier" style="background: rgba(255, 255, 255, 0.08); border: 1px solid #3f3f46; color: #a1a1aa; padding: 6px 14px; border-radius: 3px; cursor: pointer; font-weight: 800;">✕ CLOSE</button>
          </div>

          <!-- Balance & Rank Card -->
          <div style="background: rgba(7, 9, 14, 0.85); border: 1px solid rgba(255, 255, 255, 0.1); padding: 14px; border-radius: 4px; margin-bottom: 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div>
              <div style="color: #71717a; font-size: 10px; font-weight: 700;">PERMANENT OFFSHORE VAULT</div>
              <div style="color: #10b981; font-size: 22px; font-weight: 900;">₦${p.cash_balance.toLocaleString()}</div>
            </div>
            <div>
              <div style="color: #71717a; font-size: 10px; font-weight: 700;">SYNDICATE CLEARANCE RANK</div>
              <div style="color: #f59e0b; font-size: 22px; font-weight: 900;">RANK ${p.rank}</div>
            </div>
          </div>

          <!-- Account Claim Form -->
          ${
            !p.is_claimed
              ? `
            <div style="background: rgba(245, 158, 11, 0.08); border: 1px dashed #f59e0b; border-radius: 4px; padding: 14px; margin-bottom: 18px;">
              <div style="color: #f59e0b; font-size: 12px; font-weight: 800; margin-bottom: 4px;">CLAIM CONTRACTOR IDENTITY (CLOUD SYNC)</div>
              <p style="color: #a1a1aa; font-size: 11px; margin: 0 0 10px 0;">Secure your permanent offshore bank balance with a password. Zero email confirmations needed.</p>
              <div style="display: flex; gap: 8px;">
                <input id="claim-password" type="password" placeholder="Create Secret Password" style="flex: 1; background: #18181b; border: 1px solid #3f3f46; color: #fff; padding: 8px 12px; border-radius: 4px; font-size: 12px; outline: none;" />
                <button id="btn-submit-claim" style="background: #f59e0b; color: #000; border: none; font-weight: 800; padding: 8px 14px; border-radius: 4px; cursor: pointer;">CLAIM</button>
              </div>
            </div>
          `
              : `
            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid #10b981; border-radius: 4px; padding: 10px 14px; margin-bottom: 18px; display: flex; align-items: center; gap: 8px;">
              <span style="color: #10b981; font-size: 16px;">✓</span>
              <span style="color: #10b981; font-size: 11px; font-weight: 700;">CONTRACTOR PROFILE VERIFIED & CLOUD-SECURED</span>
            </div>
          `
          }

          <!-- Black-Market Armory Unlocks -->
          <div>
            <div style="color: #f4f4f5; font-size: 12px; font-weight: 800; margin-bottom: 10px; letter-spacing: 1px;">BLACK-MARKET ARMORY UNLOCKS</div>
            <div style="display: grid; gap: 8px;">
              ${armoryWeapons
                .map((w) => {
                  const def = WEAPON_REGISTRY[w.id];
                  const unlocked = service.isWeaponUnlocked(w.id);
                  return `
                  <div style="background: rgba(7, 9, 14, 0.85); border: 1px solid ${unlocked ? '#10b981' : 'rgba(255, 255, 255, 0.1)'}; padding: 10px 14px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                      <div style="font-size: 13px; font-weight: 800; color: ${unlocked ? '#10b981' : '#f4f4f5'};">${def.name}</div>
                      <div style="font-size: 10px; color: #71717a;">${def.description}</div>
                    </div>
                    ${
                      unlocked
                        ? `<span style="color: #10b981; font-size: 11px; font-weight: 800;">UNLOCKED</span>`
                        : `<button class="btn-unlock-weapon" data-id="${w.id}" data-cost="${w.cost}" style="background: #27272a; border: 1px solid #3f3f46; color: #f59e0b; font-size: 11px; font-weight: 800; padding: 6px 12px; border-radius: 4px; cursor: pointer;">BUY ₦${w.cost.toLocaleString()}</button>`
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
        <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.08); color: ${entry.isLocal ? '#06b6d4' : '#e4e4e7'};">
          <td style="padding: 10px; font-weight: 800;">#${idx + 1}</td>
          <td style="padding: 10px;">${entry.name} ${entry.isSarki || entry.isOdogwu ? '👑' : ''}</td>
          <td style="padding: 10px; font-family: 'JetBrains Mono', monospace; color: #10b981; font-weight: 800;">₦${entry.cash.toLocaleString()}</td>
          <td style="padding: 10px; text-align: center;">${entry.kills}</td>
          <td style="padding: 10px; text-align: center;">${entry.deaths}</td>
          <td style="padding: 10px; text-align: center;">${entry.wallsDestroyed}</td>
        </tr>
      `;
    });

    this.container.innerHTML = `
      <div style="position: absolute; inset: 0; background: rgba(7, 7, 9, 0.95); backdrop-filter: blur(12px); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 12px; pointer-events: auto;">
        <div style="width: 100%; max-width: 640px; max-height: 94vh; overflow-y: auto; background: #0c1019; border: 1.5px solid rgba(245, 158, 11, 0.4); box-shadow: 0 0 50px rgba(245, 158, 11, 0.25); padding: 20px 24px; border-radius: 6px;">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 16px;">
            <div style="color: #f59e0b; font-size: 11px; font-weight: 800; letter-spacing: 2px;">STUDIO XAG // AFTER-ACTION REPORT</div>
            <h2 style="color: #f4f4f5; font-size: 22px; font-weight: 900; margin-top: 4px;">👑 THE SARKI: ${sarki.name.toUpperCase()} (₦${sarki.cash.toLocaleString()})</h2>
          </div>

          <!-- Scoreboard Table -->
          <table style="width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: 12px; margin-bottom: 20px;">
            <thead>
              <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.15); color: #a1a1aa; text-align: left;">
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
            <button id="summary-receipt-btn" style="background: rgba(245, 158, 11, 0.1); border: 1.5px solid #f59e0b; color: #f59e0b; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 800; padding: 12px; border-radius: 4px; cursor: pointer; letter-spacing: 1px;">
              DOWNLOAD RECEIPT (PNG)
            </button>
            <button id="summary-rematch-btn" style="background: #10b981; color: #070709; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 900; padding: 12px; border: none; border-radius: 4px; cursor: pointer; letter-spacing: 1px;">
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
