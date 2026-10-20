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
        @keyframes pulseMilitaryLed {
          0%, 100% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 6px #22c55e); }
          50% { opacity: 0.35; transform: scale(0.85); filter: drop-shadow(0 0 2px #22c55e); }
        }
        @keyframes deployHazardGlow {
          0%, 100% { box-shadow: 0 0 25px rgba(0, 135, 81, 0.5), inset 0 0 15px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.8), inset 0 0 25px rgba(255, 255, 255, 0.3); }
        }

        .xag-war-room {
          position: absolute;
          inset: 0;
          background: #050806;
          background-image: 
            linear-gradient(rgba(0, 135, 81, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 135, 81, 0.07) 1px, transparent 1px);
          background-size: 32px 32px;
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
          background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.22) 0px, rgba(0, 0, 0, 0.22) 1px, transparent 1px, transparent 2px);
          pointer-events: none;
          z-index: 1;
        }

        /* Top Status Bar */
        .xag-top-bar {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 16px;
          background: #0a100d;
          border: 1px solid #1c2b22;
          border-radius: 4px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.6);
          margin-bottom: 12px;
          flex-shrink: 0;
        }

        .xag-brand-tag {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .xag-badge {
          background: #008751;
          color: #ffffff;
          font-weight: 900;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 2px;
          letter-spacing: 1.5px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .xag-title {
          font-family: 'Chakra Petch', sans-serif;
          font-weight: 900;
          font-size: 18px;
          letter-spacing: 2px;
          color: #ffffff;
        }
        .xag-sub {
          font-size: 10px;
          color: #22c55e;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .xag-net-status {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 135, 81, 0.12);
          border: 1px solid rgba(34, 197, 94, 0.35);
          padding: 5px 14px;
          border-radius: 3px;
          font-size: 11px;
          color: #22c55e;
          font-weight: 800;
          letter-spacing: 1px;
        }
        .xag-net-led {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          animation: pulseMilitaryLed 1.8s infinite ease-in-out;
        }

        .xag-vault-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(10, 16, 13, 0.85);
          border: 1px solid #1c2b22;
          padding: 5px 14px;
          border-radius: 3px;
          cursor: pointer;
          transition: 0.15s;
        }
        .xag-vault-badge:hover {
          background: rgba(0, 135, 81, 0.2);
          border-color: #22c55e;
          transform: translateY(-1px);
        }
        .xag-vault-val {
          color: #22c55e;
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
          background: #0a100d;
          border: 1px solid #1c2b22;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          padding: 14px;
          box-sizing: border-box;
          overflow-y: auto;
          box-shadow: inset 0 0 35px rgba(0, 0, 0, 0.5);
        }

        .xag-column::-webkit-scrollbar {
          width: 4px;
        }
        .xag-column::-webkit-scrollbar-thumb {
          background: #008751;
          border-radius: 2px;
        }

        .xag-col-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #1c2b22;
          padding-bottom: 8px;
          margin-bottom: 14px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #22c55e;
          text-transform: uppercase;
        }
        .xag-col-sublabel {
          font-size: 10px;
          color: #ffffff;
          font-weight: 700;
          letter-spacing: 1px;
        }

        /* Dossier Elements */
        .xag-section-label {
          font-size: 10px;
          font-weight: 800;
          color: #9ca3af;
          letter-spacing: 1.5px;
          margin-bottom: 6px;
          text-transform: uppercase;
          display: flex;
          justify-content: space-between;
        }

        .xag-input-box {
          display: flex;
          align-items: center;
          background: #050806;
          border: 1.5px solid #1c2b22;
          border-radius: 3px;
          padding: 6px 10px;
          margin-bottom: 16px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .xag-input-box:focus-within {
          border-color: #22c55e;
          box-shadow: 0 0 12px rgba(34, 197, 94, 0.3);
        }
        .xag-callsign-input {
          flex: 1;
          background: transparent;
          border: none;
          color: #ffffff;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          font-weight: 800;
          outline: none;
          letter-spacing: 1px;
        }
        .xag-edit-btn {
          background: rgba(0, 135, 81, 0.25);
          border: 1px solid #008751;
          color: #ffffff;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 2px;
          cursor: pointer;
          transition: 0.1s;
          letter-spacing: 1px;
        }
        .xag-edit-btn:hover {
          background: #008751;
          color: #ffffff;
        }

        /* Weapon Primary Card */
        .xag-weapon-card {
          background: #050806;
          border: 1.5px solid #1c2b22;
          border-radius: 4px;
          padding: 10px 12px;
          margin-bottom: 16px;
          cursor: pointer;
          transition: 0.15s;
        }
        .xag-weapon-card:hover {
          border-color: #22c55e;
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.25);
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
          color: #ffffff;
          letter-spacing: 1px;
        }
        .xag-cycle-btn {
          background: #008751;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 10px;
          font-weight: 900;
          padding: 4px 10px;
          border-radius: 2px;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          transition: 0.15s;
          letter-spacing: 1px;
        }
        .xag-cycle-btn:hover {
          background: #16a34a;
          color: #ffffff;
        }

        .xag-weapon-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          font-size: 10px;
          color: #9ca3af;
          margin-top: 8px;
        }
        .xag-stat-bar-bg {
          height: 5px;
          background: #1c2b22;
          border-radius: 2px;
          overflow: hidden;
          margin-top: 2px;
        }
        .xag-stat-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #008751 0%, #16a34a 75%, #22c55e 100%);
          border-radius: 2px;
          box-shadow: 0 0 6px rgba(34, 197, 94, 0.6);
        }

        /* Armory Button */
        .xag-armory-btn {
          margin-top: auto;
          background: #050806;
          border: 1.5px solid #1c2b22;
          border-radius: 4px;
          padding: 12px;
          color: #ffffff;
          cursor: pointer;
          transition: 0.15s;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .xag-armory-btn:hover {
          border-color: #22c55e;
          background: rgba(0, 135, 81, 0.12);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.25);
          transform: translateY(-1px);
        }
        .xag-armory-icon {
          font-size: 14px;
          color: #22c55e;
          font-weight: 900;
        }
        .xag-armory-title {
          font-size: 12px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 1px;
        }
        .xag-armory-sub {
          font-size: 10px;
          color: #9ca3af;
        }

        /* Theater / Map Cards */
        .xag-map-card {
          background: #050806;
          border: 1.5px solid #1c2b22;
          border-radius: 4px;
          padding: 10px;
          margin-bottom: 12px;
          cursor: pointer;
          transition: 0.15s;
          position: relative;
          overflow: hidden;
        }
        .xag-map-card:hover {
          border-color: rgba(34, 197, 94, 0.6);
        }
        .xag-map-card.active {
          border: 2px solid #22c55e;
          box-shadow: 0 0 20px rgba(0, 135, 81, 0.4);
          background: rgba(0, 135, 81, 0.15);
        }
        .xag-map-radar-frame {
          width: 100%;
          height: 80px;
          background: #040705;
          border: 1px solid #1c2b22;
          border-radius: 2px;
          margin-bottom: 8px;
          position: relative;
          overflow: hidden;
        }
        .xag-map-title {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1px;
          color: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .xag-map-bounty {
          font-size: 10px;
          font-weight: 800;
          color: #22c55e;
          background: rgba(0, 135, 81, 0.2);
          border: 1px solid #008751;
          padding: 2px 7px;
          border-radius: 2px;
        }
        .xag-map-desc {
          font-size: 10px;
          color: #9ca3af;
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
          background: #050806;
          border: 1px solid #1c2b22;
          border-radius: 3px;
          padding: 8px 4px;
          text-align: center;
          cursor: pointer;
          transition: 0.15s;
          color: #9ca3af;
        }
        .xag-mode-pill:hover {
          border-color: #22c55e;
          color: #ffffff;
        }
        .xag-mode-pill.active {
          border: 1.5px solid #22c55e;
          background: rgba(0, 135, 81, 0.2);
          color: #22c55e;
          font-weight: 800;
        }
        .xag-mode-name {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        /* Rig Cards */
        .xag-rig-card {
          background: #050806;
          border: 1.5px solid #1c2b22;
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
          border-color: rgba(34, 197, 94, 0.6);
        }
        .xag-rig-card.active {
          border: 2px solid #22c55e;
          box-shadow: 0 0 15px rgba(0, 135, 81, 0.35);
          background: rgba(0, 135, 81, 0.15);
        }
        .xag-rig-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .xag-rig-name {
          font-size: 12px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 1px;
        }
        .xag-rig-card.active .xag-rig-name {
          color: #22c55e;
        }
        .xag-rig-tag {
          font-size: 9px;
          color: #6b7280;
          font-weight: 700;
        }
        .xag-rig-card.active .xag-rig-tag {
          color: #22c55e;
          font-weight: 800;
        }

        /* Tactical Giant Deploy Button */
        .xag-deploy-container {
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px solid #1c2b22;
        }
        .xag-deploy-btn {
          width: 100%;
          background: repeating-linear-gradient(
            -45deg,
            #008751,
            #008751 16px,
            #007345 16px,
            #007345 32px
          );
          color: #ffffff;
          font-family: 'Chakra Petch', 'JetBrains Mono', sans-serif;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 3px;
          padding: 16px 14px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          cursor: pointer;
          text-align: center;
          text-transform: uppercase;
          clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px);
          animation: deployHazardGlow 2.5s infinite ease-in-out;
          transition: filter 0.15s, transform 0.1s;
        }
        .xag-deploy-btn:hover {
          filter: brightness(1.22);
          transform: scale(1.02);
        }
        .xag-deploy-btn:active {
          transform: scale(0.98);
        }
        .xag-deploy-decor {
          font-size: 9px;
          color: rgba(255, 255, 255, 0.85);
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
              <div class="xag-sub">NIGERIAN SPEC-OPS 2.5D HEIST ARENA</div>
            </div>
          </div>

          <div class="xag-net-status">
            <div class="xag-net-led"></div>
            <span>[● NET: LAGOS-1 (14ms)]</span>
          </div>

          <div id="btn-top-vault" class="xag-vault-badge" title="Open Syndicate Offshore Vault">
            <span style="font-size: 13px; color: #22c55e;">[◆]</span>
            <div>
              <div style="font-size: 9px; color: #9ca3af; font-weight: 700;">VAULT BALANCE</div>
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
              <span class="xag-col-sublabel">ID: #${profile.id ? profile.id.slice(-4).toUpperCase() : '234'}</span>
            </div>

            <!-- Callsign Input -->
            <div class="xag-section-label">
              <span>CALLSIGN ID:</span>
              <span style="color: #22c55e;">RANK ${profile.rank}</span>
            </div>
            <div class="xag-input-box">
              <input id="xag-callsign-input" class="xag-callsign-input" type="text" maxlength="16" value="${this.selectedGamerTag}" spellcheck="false" />
              <button id="btn-edit-callsign" class="xag-edit-btn" title="Edit Callsign">[EDIT]</button>
            </div>

            <!-- Loadout Primary Weapon -->
            <div class="xag-section-label">
              <span>LOADOUT PRIMARY:</span>
              <span id="weapon-cat-label" style="color: #22c55e; font-weight: 800;">${currentWeaponDef.category.toUpperCase()}</span>
            </div>
            <div id="weapon-select-card" class="xag-weapon-card">
              <div class="xag-weapon-head">
                <span id="weapon-name-display" class="xag-weapon-name">${currentWeaponDef.name.toUpperCase()}</span>
                <button id="btn-cycle-weapon" class="xag-cycle-btn">[//] SWAP</button>
              </div>
              <div style="font-size: 10px; color: #9ca3af; line-height: 1.3;" id="weapon-desc-display">
                ${currentWeaponDef.description}
              </div>
              <div class="xag-weapon-stats">
                <div>
                  <div style="display: flex; justify-content: space-between;">
                    <span>DMG</span>
                    <span id="stat-dmg-val" style="color: #ffffff; font-weight: 800;">${currentWeaponDef.damage}</span>
                  </div>
                  <div class="xag-stat-bar-bg"><div id="stat-dmg-bar" class="xag-stat-bar-fill" style="width: ${Math.min(100, (currentWeaponDef.damage / 180) * 100)}%;"></div></div>
                </div>
                <div>
                  <div style="display: flex; justify-content: space-between;">
                    <span>ROF</span>
                    <span id="stat-rof-val" style="color: #ffffff; font-weight: 800;">${Math.round(60 / currentWeaponDef.fireInterval)}</span>
                  </div>
                  <div class="xag-stat-bar-bg"><div id="stat-rof-bar" class="xag-stat-bar-fill" style="width: ${Math.min(100, (0.4 / Math.max(0.06, currentWeaponDef.fireInterval)) * 100)}%;"></div></div>
                </div>
                <div>
                  <div style="display: flex; justify-content: space-between;">
                    <span>RNG</span>
                    <span id="stat-rng-val" style="color: #ffffff; font-weight: 800;">${currentWeaponDef.range}m</span>
                  </div>
                  <div class="xag-stat-bar-bg"><div id="stat-rng-bar" class="xag-stat-bar-fill" style="width: ${Math.min(100, (currentWeaponDef.range / 45) * 100)}%;"></div></div>
                </div>
                <div>
                  <div style="display: flex; justify-content: space-between;">
                    <span>MAG</span>
                    <span id="stat-mag-val" style="color: #ffffff; font-weight: 800;">${currentWeaponDef.magSize}</span>
                  </div>
                  <div class="xag-stat-bar-bg"><div id="stat-mag-bar" class="xag-stat-bar-fill" style="width: ${Math.min(100, (currentWeaponDef.magSize / 120) * 100)}%;"></div></div>
                </div>
              </div>
            </div>

            <!-- Open Bank & Armory -->
            <button id="btn-open-dossier" class="xag-armory-btn">
              <span class="xag-armory-icon">[+]</span>
              <div>
                <div class="xag-armory-title">[ OPEN ARMORY & VAULT ]</div>
                <div class="xag-armory-sub">Unlock Weapons & Spec-Ops Assets</div>
              </div>
            </button>
          </div>

          <!-- 02 // DEPLOYMENT THEATER -->
          <div class="xag-column">
            <div class="xag-col-header">
              <span>02 // DEPLOYMENT THEATER</span>
              <span class="xag-col-sublabel">SECTOR MAP</span>
            </div>

            <!-- Birnin Kano Map Card -->
            <div class="xag-map-card ${this.selectedMap === MapId.BIRNIN_KANO ? 'active' : ''}" data-map="BIRNIN_KANO">
              <div class="xag-map-radar-frame">
                <canvas id="radar-canvas-kano" width="280" height="80" style="width: 100%; height: 100%; display: block;"></canvas>
              </div>
              <div class="xag-map-title">
                <span>[◆] BIRNIN KANO // 2099</span>
                <span class="xag-map-bounty">₦1,000,000</span>
              </div>
              <div class="xag-map-desc">
                Earthen Mud Citadel • Tubali Ramparts • Lime Zankwaye Horns • Treasury Vault
              </div>
            </div>

            <!-- Lagos Map Card -->
            <div class="xag-map-card ${this.selectedMap === MapId.LAGOS_GOSLOW ? 'active' : ''}" data-map="LAGOS_GOSLOW">
              <div class="xag-map-radar-frame">
                <canvas id="radar-canvas-lagos" width="280" height="80" style="width: 100%; height: 100%; display: block;"></canvas>
              </div>
              <div class="xag-map-title">
                <span>[▲] LAGOS // EKO SECTOR</span>
                <span class="xag-map-bounty">₦1,500,000</span>
              </div>
              <div class="xag-map-desc">
                Expressway Traffic Gridlock • 3rd Mainland Flyover • Blackout Rain
              </div>
            </div>

            <!-- Operation Contract Mode Selector -->
            <div class="xag-section-label" style="margin-top: 6px;">
              <span>OPERATION CONTRACT [MODE]:</span>
            </div>
            <div class="xag-mode-grid">
              <div class="xag-mode-pill ${this.selectedMode === GameModeType.ODOGWU_STASH ? 'active' : ''}" data-mode="ODOGWU_STASH">
                <div class="xag-mode-name">[◆] SARKI HEIST</div>
                <div style="font-size: 8px; color: #6b7280; margin-top: 2px;">3-Act Evac</div>
              </div>
              <div class="xag-mode-pill ${this.selectedMode === GameModeType.VAULT_HEIST ? 'active' : ''}" data-mode="VAULT_HEIST">
                <div class="xag-mode-name">[▲] VAULT CRACK</div>
                <div style="font-size: 8px; color: #6b7280; margin-top: 2px;">3v3 Strike</div>
              </div>
              <div class="xag-mode-pill ${this.selectedMode === GameModeType.APAPA_LOCKDOWN ? 'active' : ''}" data-mode="APAPA_LOCKDOWN">
                <div class="xag-mode-name">[//] LOCKDOWN</div>
                <div style="font-size: 8px; color: #6b7280; margin-top: 2px;">High-Yield</div>
              </div>
            </div>
          </div>

          <!-- 03 // TACTICAL RIG + DEPLOY LAUNCHER -->
          <div class="xag-column">
            <div class="xag-col-header">
              <span>03 // TACTICAL RIG</span>
              <span class="xag-col-sublabel">MOBILITY CORE</span>
            </div>

            <!-- Rig 1: Phase Dash (Specter) -->
            <div class="xag-rig-card ${this.selectedRig === MovementRigType.PHASE_DASH ? 'active' : ''}" data-rig="${MovementRigType.PHASE_DASH}">
              <div class="xag-rig-info">
                <div>
                  <div class="xag-rig-name">[▲] SPECTER // PHASE</div>
                  <div style="font-size: 9px; color: #9ca3af;">High-speed tactical dash through thin covers</div>
                </div>
              </div>
              <div class="xag-rig-tag">${this.selectedRig === MovementRigType.PHASE_DASH ? '[ACTIVE]' : '3.0s CD'}</div>
            </div>

            <!-- Rig 2: Breach Booster (Vanguard) -->
            <div class="xag-rig-card ${this.selectedRig === MovementRigType.BREACH_BOOSTER ? 'active' : ''}" data-rig="${MovementRigType.BREACH_BOOSTER}">
              <div class="xag-rig-info">
                <div>
                  <div class="xag-rig-name">[◆] VANGUARD // BREACH</div>
                  <div style="font-size: 9px; color: #9ca3af;">Smashes 3 layers of mud/concrete walls</div>
                </div>
              </div>
              <div class="xag-rig-tag">${this.selectedRig === MovementRigType.BREACH_BOOSTER ? '[ACTIVE]' : '2.5s CD'}</div>
            </div>

            <!-- Rig 3: Glitch Anchor (Chronos) -->
            <div class="xag-rig-card ${this.selectedRig === MovementRigType.GLITCH_ANCHOR ? 'active' : ''}" data-rig="${MovementRigType.GLITCH_ANCHOR}">
              <div class="xag-rig-info">
                <div>
                  <div class="xag-rig-name">[⬢] CHRONOS // ANCHOR</div>
                  <div style="font-size: 9px; color: #9ca3af;">Temporal snap-back repositioning beacon</div>
                </div>
              </div>
              <div class="xag-rig-tag">${this.selectedRig === MovementRigType.GLITCH_ANCHOR ? '[ACTIVE]' : '4.0s CD'}</div>
            </div>

            <!-- Rig 4: Overdrive Slide (Striker) -->
            <div class="xag-rig-card ${this.selectedRig === MovementRigType.OVERDRIVE_SLIDE ? 'active' : ''}" data-rig="${MovementRigType.OVERDRIVE_SLIDE}">
              <div class="xag-rig-info">
                <div>
                  <div class="xag-rig-name">[▶] STRIKER // SLIDE</div>
                  <div style="font-size: 9px; color: #9ca3af;">Kinetic power-slides + vertical wall-kicks</div>
                </div>
              </div>
              <div class="xag-rig-tag">${this.selectedRig === MovementRigType.OVERDRIVE_SLIDE ? '[ACTIVE]' : '1.5s CD'}</div>
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
        if (activeTag) activeTag.textContent = '[ACTIVE]';
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

    // 7. Start Animated Canvas Radars in Phosphor Tactical Green
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
