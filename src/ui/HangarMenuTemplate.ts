import { GameModeType, MapId, MovementRigType, OperativeProfile, WeaponDef } from '../config/types';

export function getModeDisplayName(selectedMode: GameModeType, teamSize: number): string {
  if (selectedMode === GameModeType.ODOGWU_STASH && teamSize === 2) return '2v2 SQUAD HEIST';
  if (selectedMode === GameModeType.TEAM_DEATHMATCH && teamSize === 2) return '2v2 TDM';
  if (selectedMode === GameModeType.TEAM_DEATHMATCH && teamSize === 3) return '3v3 TDM';
  if (selectedMode === GameModeType.ODOGWU_STASH) return 'SOLO HEIST';
  return 'FREE FOR ALL';
}

export function getMapDisplayName(selectedMap: MapId): string {
  if (selectedMap === MapId.LAGOS_GOSLOW) return 'LAGOS GO-SLOW';
  return 'BIRNIN KANO';
}

export function getHangarMenuHTML(
  profile: OperativeProfile,
  callSign: string,
  primaryWeapon: WeaponDef,
  secondaryWeapon: WeaponDef,
  selectedRig: MovementRigType,
  selectedMap: MapId,
  selectedMode: GameModeType,
  teamSize: number,
  fillBots: boolean
): string {
  const modeDisplay = getModeDisplayName(selectedMode, teamSize);
  const mapDisplay = getMapDisplayName(selectedMap);

  return `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700;800;900&family=Inter:wght@400;600;700;800;900&family=JetBrains+Mono:wght@500;700;800&display=swap');

      @keyframes pulseGlowGreen {
        0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.45), 0 4px 15px rgba(0, 0, 0, 0.6); }
        50% { box-shadow: 0 0 42px rgba(34, 197, 94, 0.85), 0 6px 20px rgba(0, 0, 0, 0.7); }
      }

      @keyframes modalSlideUp {
        from {
          opacity: 0;
          transform: translateY(24px) scale(0.98);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      /* Root Hangar Container - Full Touch Auto */
      .xag-hangar-root {
        position: absolute;
        inset: 0;
        background-color: #030712;
        background-image: 
          radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.0) 0%, rgba(3, 7, 18, 0.45) 60%, rgba(2, 6, 14, 0.96) 100%),
          url('/assets/hangar_hero.jpg');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: max(12px, env(safe-area-inset-top)) max(16px, env(safe-area-inset-right)) max(12px, env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left));
        box-sizing: border-box;
        overflow: hidden;
        font-family: 'Inter', -apple-system, sans-serif;
        color: #f1f5f9;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        pointer-events: auto !important;
        z-index: 100;
      }

      /* Top Bar */
      .xag-top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 10px;
        z-index: 10;
        pointer-events: auto !important;
      }

      .xag-top-left {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .xag-contractor-pill {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(9, 13, 22, 0.85);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(34, 197, 94, 0.45);
        padding: 5px 12px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      }
      .xag-flag-icon {
        font-size: 16px;
      }
      .xag-callsign-input {
        background: transparent;
        border: none;
        outline: none;
        color: #ffffff;
        font-family: 'Chakra Petch', sans-serif;
        font-size: 15px;
        font-weight: 900;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        width: 110px;
        padding: 0;
      }
      .xag-callsign-input:focus {
        border-bottom: 1.5px solid #22c55e;
      }
      .xag-rank-tag {
        font-family: 'JetBrains Mono', monospace;
        font-size: 10px;
        font-weight: 800;
        color: #eab308;
        background: rgba(234, 179, 8, 0.15);
        padding: 2px 6px;
        border-radius: 4px;
        border: 1px solid rgba(234, 179, 8, 0.35);
      }

      .xag-top-center {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .xag-currency-pill {
        display: flex;
        align-items: center;
        gap: 6px;
        background: rgba(9, 13, 22, 0.85);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(34, 197, 94, 0.45);
        padding: 6px 14px;
        border-radius: 20px;
        cursor: pointer;
        transition: transform 0.15s, background 0.15s;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
      }
      .xag-currency-pill:hover, .xag-currency-pill:active {
        background: rgba(34, 197, 94, 0.25);
        border-color: #22c55e;
        transform: scale(1.02);
      }
      .xag-curr-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        background: #eab308;
        color: #0f172a;
        border-radius: 50%;
        font-weight: 900;
        font-size: 11px;
      }
      .xag-curr-amount {
        font-family: 'JetBrains Mono', monospace;
        font-weight: 800;
        font-size: 13.5px;
        color: #4ade80;
      }

      .xag-top-right {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .xag-icon-btn {
        background: rgba(15, 23, 42, 0.8);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        color: #f8fafc;
        min-width: 42px;
        min-height: 42px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s ease;
      }
      .xag-icon-btn:hover, .xag-icon-btn:active {
        background: rgba(34, 197, 94, 0.25);
        border-color: #22c55e;
        color: #22c55e;
        transform: translateY(-1px);
      }

      /* Center Hero Staging - Completely Clear */
      .xag-center-stage {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        position: relative;
      }
      .xag-watermark {
        font-family: 'Chakra Petch', sans-serif;
        font-size: clamp(24px, 5vw, 48px);
        font-weight: 900;
        letter-spacing: 6px;
        color: rgba(255, 255, 255, 0.05);
        text-transform: uppercase;
        pointer-events: none;
        text-align: center;
      }

      /* Bottom Navigation Dock */
      .xag-bottom-dock {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 100%;
        gap: 16px;
        z-index: 10;
        pointer-events: auto !important;
      }

      .xag-bottom-left-group {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      /* Navigation Glass Buttons */
      .xag-nav-btn {
        background: rgba(9, 13, 22, 0.88);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1.5px solid rgba(255, 255, 255, 0.16);
        color: #ffffff;
        padding: 10px 16px;
        border-radius: 8px;
        cursor: pointer;
        touch-action: manipulation;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: all 0.15s;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
        min-height: 48px;
      }
      .xag-nav-btn:hover, .xag-nav-btn:active {
        border-color: #38bdf8;
        background: rgba(15, 23, 42, 0.95);
        transform: translateY(-2px);
      }
      .xag-nav-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
      }
      .xag-nav-text {
        display: flex;
        flex-direction: column;
        text-align: left;
      }
      .xag-nav-title {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 1.5px;
        color: #ffffff;
      }
      .xag-nav-sub {
        font-family: 'JetBrains Mono', monospace;
        font-size: 10px;
        font-weight: 700;
        color: #94a3b8;
        white-space: nowrap;
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Bottom Right Launcher Group */
      .xag-bottom-right-group {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      /* Maps & Mode Selector Card Button */
      .xag-map-mode-card {
        background: rgba(9, 13, 22, 0.92);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1.5px solid rgba(56, 189, 248, 0.45);
        border-radius: 8px;
        padding: 8px 16px;
        cursor: pointer;
        touch-action: manipulation;
        display: flex;
        align-items: center;
        gap: 14px;
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.5);
        transition: all 0.15s;
        min-height: 56px;
      }
      .xag-map-mode-card:hover, .xag-map-mode-card:active {
        border-color: #38bdf8;
        background: rgba(14, 27, 49, 0.95);
        transform: translateY(-2px);
        box-shadow: 0 0 20px rgba(56, 189, 248, 0.35);
      }
      .xag-mmc-icon {
        font-size: 22px;
      }
      .xag-mmc-info {
        display: flex;
        flex-direction: column;
        text-align: left;
      }
      .xag-mmc-tag {
        font-family: 'JetBrains Mono', monospace;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 1.5px;
        color: #38bdf8;
      }
      .xag-mmc-mode {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 15px;
        font-weight: 900;
        letter-spacing: 1.5px;
        color: #ffffff;
        line-height: 1.1;
      }
      .xag-mmc-theater {
        font-family: 'JetBrains Mono', monospace;
        font-size: 10px;
        font-weight: 700;
        color: #94a3b8;
      }
      .xag-mmc-arrow {
        color: #38bdf8;
        font-size: 14px;
        font-weight: 900;
      }

      /* Deploy Action Button */
      .xag-deploy-button {
        position: relative;
        background: linear-gradient(135deg, #22c55e 0%, #15803d 100%);
        border: 2px solid #4ade80;
        color: #030712;
        min-width: 180px;
        height: 56px;
        padding: 0 22px;
        border-radius: 8px;
        cursor: pointer;
        touch-action: manipulation;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 35px rgba(34, 197, 94, 0.55), 0 8px 24px rgba(0, 0, 0, 0.5);
        transition: transform 0.15s, box-shadow 0.15s;
        animation: pulseGlowGreen 2.4s infinite;
      }
      .xag-deploy-button:hover, .xag-deploy-button:active {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 0 50px rgba(34, 197, 94, 0.85);
      }
      .xag-hazard-stripe {
        position: absolute;
        left: 0;
        right: 0;
        height: 4px;
        background: repeating-linear-gradient(
          -45deg,
          #0f172a,
          #0f172a 8px,
          #22c55e 8px,
          #22c55e 16px
        );
      }
      .xag-hazard-stripe.top { top: 0; }
      .xag-hazard-stripe.bottom { bottom: 0; }

      .xag-deploy-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.1;
      }
      .xag-deploy-sub {
        font-family: 'JetBrains Mono', monospace;
        font-size: 9px;
        font-weight: 900;
        letter-spacing: 2px;
        color: #052e16;
      }
      .xag-deploy-main {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 18px;
        font-weight: 900;
        letter-spacing: 2px;
        color: #022c12;
      }

      /* ========================================================
         MODAL OVERLAYS (Full-screen, Backdrop-blurred, Touch-safe)
         ======================================================== */
      .xag-modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(3, 7, 18, 0.88);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        z-index: 500;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 16px;
        box-sizing: border-box;
        pointer-events: auto !important;
      }
      .xag-modal-backdrop.open {
        display: flex;
      }

      .xag-modal-dialog {
        background: #090d16;
        border: 1.5px solid #22c55e;
        box-shadow: 0 0 45px rgba(34, 197, 94, 0.35), 0 16px 40px rgba(0, 0, 0, 0.8);
        border-radius: 10px;
        width: 100%;
        max-width: 680px;
        max-height: 90vh;
        max-height: 90dvh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        animation: modalSlideUp 0.22s ease-out;
        pointer-events: auto !important;
      }

      .xag-modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 18px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(15, 23, 42, 0.6);
      }
      .xag-modal-title {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 16px;
        font-weight: 900;
        letter-spacing: 2px;
        color: #ffffff;
      }
      .xag-modal-sub {
        font-family: 'JetBrains Mono', monospace;
        font-size: 10px;
        color: #22c55e;
        letter-spacing: 1px;
      }
      .xag-modal-close-btn {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: #94a3b8;
        font-size: 18px;
        font-weight: 900;
        min-width: 36px;
        min-height: 36px;
        border-radius: 6px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        touch-action: manipulation;
        transition: all 0.15s;
      }
      .xag-modal-close-btn:hover, .xag-modal-close-btn:active {
        background: rgba(239, 68, 68, 0.25);
        border-color: #ef4444;
        color: #f87171;
      }

      .xag-modal-scrollable {
        flex: 1;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        padding: 16px 18px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .xag-modal-section-title {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 2px;
        color: #94a3b8;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      /* Arena Theater Selection Cards */
      .xag-theaters-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      .xag-theater-card {
        background: rgba(15, 23, 42, 0.6);
        border: 1.5px solid rgba(255, 255, 255, 0.12);
        border-radius: 8px;
        padding: 10px;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .xag-theater-card:hover, .xag-theater-card:active {
        border-color: #38bdf8;
        background: rgba(15, 23, 42, 0.9);
      }
      .xag-theater-card.active {
        border: 2px solid #22c55e;
        background: rgba(34, 197, 94, 0.12);
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
      }
      .xag-radar-box {
        width: 100%;
        height: 75px;
        border-radius: 4px;
        background: #040807;
        border: 1px solid rgba(34, 197, 94, 0.3);
        overflow: hidden;
      }
      .xag-theater-meta {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .xag-theater-name {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 13px;
        font-weight: 900;
        color: #ffffff;
      }
      .xag-theater-desc {
        font-size: 10px;
        color: #94a3b8;
        line-height: 1.3;
      }

      /* Game Mode Selection Cards */
      .xag-modes-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .xag-mode-card {
        background: rgba(15, 23, 42, 0.6);
        border: 1.5px solid rgba(255, 255, 255, 0.12);
        border-radius: 8px;
        padding: 10px 12px;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .xag-mode-card:hover, .xag-mode-card:active {
        border-color: #38bdf8;
        background: rgba(15, 23, 42, 0.9);
      }
      .xag-mode-card.active {
        border: 2px solid #22c55e;
        background: rgba(34, 197, 94, 0.14);
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
      }
      .xag-mode-badge {
        font-family: 'JetBrains Mono', monospace;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 1px;
        color: #22c55e;
      }
      .xag-mode-card.active .xag-mode-badge {
        color: #4ade80;
      }
      .xag-mode-title {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 13px;
        font-weight: 900;
        color: #ffffff;
      }
      .xag-mode-desc {
        font-size: 10px;
        color: #94a3b8;
        line-height: 1.3;
      }

      /* Infiltration Bots Toggle */
      .xag-toggle-card {
        background: rgba(15, 23, 42, 0.6);
        border: 1.5px solid rgba(255, 255, 255, 0.12);
        border-radius: 8px;
        padding: 12px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s;
      }
      .xag-toggle-card:hover, .xag-toggle-card:active {
        border-color: #38bdf8;
      }
      .xag-toggle-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .xag-toggle-title {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 13px;
        font-weight: 900;
        color: #ffffff;
      }
      .xag-toggle-sub {
        font-size: 10px;
        color: #94a3b8;
      }
      .xag-toggle-pill {
        font-family: 'JetBrains Mono', monospace;
        font-size: 11px;
        font-weight: 900;
        padding: 6px 14px;
        border-radius: 20px;
        transition: all 0.15s;
      }
      .xag-toggle-pill.on {
        background: rgba(34, 197, 94, 0.2);
        border: 1px solid #22c55e;
        color: #4ade80;
      }
      .xag-toggle-pill.off {
        background: rgba(239, 68, 68, 0.2);
        border: 1px solid #ef4444;
        color: #f87171;
      }

      .xag-modal-footer {
        padding: 12px 18px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: flex-end;
        background: rgba(15, 23, 42, 0.6);
      }
      .xag-confirm-btn {
        background: linear-gradient(135deg, #22c55e 0%, #15803d 100%);
        border: 1px solid #4ade80;
        color: #030712;
        font-family: 'Chakra Petch', sans-serif;
        font-size: 13px;
        font-weight: 900;
        letter-spacing: 1.5px;
        padding: 10px 24px;
        border-radius: 6px;
        cursor: pointer;
        touch-action: manipulation;
        transition: transform 0.15s;
      }
      .xag-confirm-btn:hover, .xag-confirm-btn:active {
        transform: scale(1.02);
      }

      /* Armory Tabs */
      .xag-armory-tabs {
        display: flex;
        gap: 8px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding-bottom: 8px;
      }
      .xag-armory-tab {
        background: rgba(15, 23, 42, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #94a3b8;
        font-family: 'Chakra Petch', sans-serif;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 1px;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s;
      }
      .xag-armory-tab.active {
        background: rgba(34, 197, 94, 0.2);
        border-color: #22c55e;
        color: #ffffff;
      }

      /* Weapons Grid in Armory */
      .xag-weapons-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .xag-armory-card {
        background: rgba(15, 23, 42, 0.65);
        border: 1.5px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 10px;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .xag-armory-card:hover, .xag-armory-card:active {
        border-color: #38bdf8;
      }
      .xag-armory-card.equipped {
        border: 2px solid #22c55e;
        background: rgba(34, 197, 94, 0.12);
      }
      .xag-w-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .xag-w-name {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 12px;
        font-weight: 900;
        color: #ffffff;
      }
      .xag-w-status {
        font-family: 'JetBrains Mono', monospace;
        font-size: 9px;
        font-weight: 800;
        padding: 2px 6px;
        border-radius: 3px;
      }
      .xag-w-status.active {
        background: rgba(34, 197, 94, 0.2);
        color: #4ade80;
        border: 1px solid #22c55e;
      }
      .xag-w-status.unlocked {
        background: rgba(56, 189, 248, 0.15);
        color: #38bdf8;
      }
      .xag-w-status.locked {
        background: rgba(234, 179, 8, 0.15);
        color: #eab308;
      }
      .xag-w-desc {
        font-size: 9.5px;
        color: #94a3b8;
        line-height: 1.3;
      }
      .xag-w-stats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
        font-size: 9px;
        color: #64748b;
        font-family: 'JetBrains Mono', monospace;
      }
      .xag-w-stats span b {
        color: #cbd5e1;
      }

      /* Rigs Grid in Armory */
      .xag-rigs-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }
      .xag-rig-card-full {
        background: rgba(15, 23, 42, 0.65);
        border: 1.5px solid rgba(255, 255, 255, 0.12);
        border-radius: 8px;
        padding: 12px 10px;
        cursor: pointer;
        touch-action: manipulation;
        transition: all 0.15s;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 6px;
      }
      .xag-rig-card-full:hover, .xag-rig-card-full:active {
        border-color: #38bdf8;
      }
      .xag-rig-card-full.active {
        border: 2px solid #22c55e;
        background: rgba(34, 197, 94, 0.15);
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
      }
      .xag-rig-icon-lg {
        font-size: 26px;
      }
      .xag-rig-title {
        font-family: 'Chakra Petch', sans-serif;
        font-size: 13px;
        font-weight: 900;
        letter-spacing: 1.5px;
        color: #ffffff;
      }
      .xag-rig-desc {
        font-size: 9.5px;
        color: #94a3b8;
        line-height: 1.3;
      }

      /* ========================================================
         RESPONSIVE MEDIA QUERIES (Mobile Portrait & Landscape)
         ======================================================== */
      @media screen and (max-width: 768px) {
        .xag-hangar-root {
          padding: max(10px, env(safe-area-inset-top)) max(10px, env(safe-area-inset-right)) max(10px, env(safe-area-inset-bottom)) max(10px, env(safe-area-inset-left));
        }

        .xag-top-bar {
          gap: 6px;
        }
        .xag-contractor-pill {
          padding: 4px 8px;
        }
        .xag-callsign-input {
          font-size: 13px;
          width: 85px;
        }
        .xag-currency-pill {
          padding: 4px 10px;
        }
        .xag-curr-amount {
          font-size: 11.5px;
        }
        .xag-icon-btn {
          min-width: 36px;
          min-height: 36px;
        }

        /* Bottom Dock stacks cleanly on mobile */
        .xag-bottom-dock {
          flex-direction: column;
          align-items: stretch;
          gap: 8px;
        }
        .xag-bottom-left-group {
          width: 100%;
        }
        .xag-nav-btn {
          flex: 1;
          justify-content: center;
          padding: 8px 10px;
          min-height: 44px;
        }
        .xag-bottom-right-group {
          width: 100%;
          flex-direction: column;
          gap: 8px;
        }
        .xag-map-mode-card {
          width: 100%;
          box-sizing: border-box;
          justify-content: space-between;
          padding: 8px 14px;
          min-height: 50px;
        }
        .xag-deploy-button {
          width: 100%;
          min-width: 0;
          height: 52px;
        }

        /* Modals in mobile portrait */
        .xag-theaters-grid, .xag-modes-grid, .xag-weapons-grid, .xag-rigs-grid {
          grid-template-columns: 1fr;
        }
      }

      /* Mobile Landscape (e.g. 640x360, 800x380, 932x430) */
      @media screen and (max-height: 520px) {
        .xag-hangar-root {
          padding: max(6px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right)) max(6px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left));
        }
        .xag-top-bar {
          padding: 0;
        }
        .xag-bottom-dock {
          flex-direction: row;
          align-items: flex-end;
          gap: 12px;
        }
        .xag-bottom-left-group {
          width: auto;
        }
        .xag-nav-btn {
          padding: 6px 12px;
          min-height: 42px;
        }
        .xag-bottom-right-group {
          width: auto;
          flex-direction: row;
          gap: 8px;
        }
        .xag-map-mode-card {
          width: auto;
          padding: 6px 12px;
          min-height: 46px;
        }
        .xag-deploy-button {
          height: 48px;
          min-width: 150px;
        }

        /* Landscape Modal Grid */
        .xag-modal-dialog {
          max-height: 94vh;
          max-height: 94dvh;
        }
        .xag-theaters-grid, .xag-modes-grid, .xag-weapons-grid {
          grid-template-columns: 1fr 1fr;
        }
      }
    </style>

    <div class="xag-hangar-root">
      <!-- 1. Top Bar -->
      <div class="xag-top-bar">
        <div class="xag-top-left">
          <div class="xag-contractor-pill">
            <span class="xag-flag-icon">🇳🇬</span>
            <input id="xag-callsign-input" class="xag-callsign-input" value="${callSign}" placeholder="CALLSIGN" maxlength="12" />
            <span class="xag-rank-tag">★ R${profile.rank || 10}</span>
          </div>
        </div>

        <div class="xag-top-center">
          <div id="btn-top-vault" class="xag-currency-pill" title="Offshore Vault Cash">
            <span class="xag-curr-icon">₦</span>
            <span class="xag-curr-amount">₦${profile.cash_balance.toLocaleString()}</span>
          </div>
        </div>

        <div class="xag-top-right">
          <button id="btn-audio-toggle" class="xag-icon-btn" title="Toggle SFX & Audio">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          </button>
          <button id="btn-open-settings" class="xag-icon-btn" title="Settings / Controls">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </button>
        </div>
      </div>

      <!-- 2. Center Stage (Uncluttered character view) -->
      <div class="xag-center-stage">
        <div class="xag-watermark">SECTOR 234</div>
      </div>

      <!-- 3. Bottom Navigation Dock -->
      <div class="xag-bottom-dock">
        <!-- Left Group: Armory & Multiplayer -->
        <div class="xag-bottom-left-group">
          <button id="btn-open-armory" class="xag-nav-btn" title="Equip Weapons & Movement Rigs">
            <span class="xag-nav-icon">⚔️</span>
            <div class="xag-nav-text">
              <span class="xag-nav-title">ARMORY</span>
              <span id="nav-armory-sub" class="xag-nav-sub">${primaryWeapon.name}</span>
            </div>
          </button>

          <button id="btn-open-multiplayer" class="xag-nav-btn" title="WebRTC Direct P2P Hotspot">
            <span class="xag-nav-icon">👥</span>
            <div class="xag-nav-text">
              <span class="xag-nav-title">MULTIPLAYER</span>
              <span class="xag-nav-sub">P2P HOTSPOT</span>
            </div>
          </button>
        </div>

        <!-- Right Group: Map/Mode Card & Deploy Button -->
        <div class="xag-bottom-right-group">
          <!-- Tapping this opens the dedicated Maps & Mode Modal -->
          <div id="btn-open-maps-modal" class="xag-map-mode-card" title="Click to Select Mission Theater and Game Mode">
            <span class="xag-mmc-icon">🗺️</span>
            <div class="xag-mmc-info">
              <span class="xag-mmc-tag">MAP & MODE ▾</span>
              <span id="home-mode-display" class="xag-mmc-mode">${modeDisplay}</span>
              <span id="home-map-display" class="xag-mmc-theater">${mapDisplay} • ${fillBots ? 'BOTS ON' : 'PVP ONLY'}</span>
            </div>
            <span class="xag-mmc-arrow">➔</span>
          </div>

          <!-- Deploy Button -->
          <button id="menu-deploy-btn" class="xag-deploy-button">
            <div class="xag-hazard-stripe top"></div>
            <div class="xag-deploy-content">
              <span class="xag-deploy-sub">DEPLOY TO</span>
              <span class="xag-deploy-main">SECTOR 234</span>
            </div>
            <div class="xag-hazard-stripe bottom"></div>
          </button>
        </div>
      </div>

      <!-- =======================================================
           DEDICATED MODAL 1: MAPS & GAME MODES SELECTOR
           ======================================================= -->
      <div id="xag-maps-modal" class="xag-modal-backdrop">
        <div class="xag-modal-dialog">
          <div class="xag-modal-header">
            <div>
              <div class="xag-modal-title">TACTICAL MISSION THEATER</div>
              <div class="xag-modal-sub">SELECT ARENA MAP AND ENGAGEMENT RULES</div>
            </div>
            <button id="btn-close-maps-modal" class="xag-modal-close-btn" title="Close">✕</button>
          </div>

          <div class="xag-modal-scrollable">
            <!-- 1. Arena Theaters (Maps) -->
            <div>
              <div class="xag-modal-section-title">
                <span>📍 ARENA THEATER (MAP)</span>
              </div>
              <div class="xag-theaters-grid">
                <!-- Birnin Kano -->
                <div class="xag-theater-card ${selectedMap === MapId.BIRNIN_KANO ? 'active' : ''}" data-map="${MapId.BIRNIN_KANO}">
                  <div class="xag-radar-box">
                    <canvas id="radar-canvas-kano" width="280" height="75" style="width: 100%; height: 100%; display: block;"></canvas>
                  </div>
                  <div class="xag-theater-meta">
                    <span class="xag-theater-name">BIRNIN KANO // CITADEL</span>
                    <span class="xag-theater-desc">Ancient mud-brick bastions, covered souk corridors, and fortified central treasury vault.</span>
                  </div>
                </div>

                <!-- Lagos Go-Slow -->
                <div class="xag-theater-card ${selectedMap === MapId.LAGOS_GOSLOW ? 'active' : ''}" data-map="${MapId.LAGOS_GOSLOW}">
                  <div class="xag-radar-box">
                    <canvas id="radar-canvas-lagos" width="280" height="75" style="width: 100%; height: 100%; display: block;"></canvas>
                  </div>
                  <div class="xag-theater-meta">
                    <span class="xag-theater-name">LAGOS GO-SLOW // 3RD MAINLAND</span>
                    <span class="xag-theater-desc">Coastal highway flyover, abandoned Danfo minibuses, shipping container chokepoints, night rain.</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2. Game Mode Selection -->
            <div>
              <div class="xag-modal-section-title">
                <span>⚔️ RULES OF ENGAGEMENT (GAME MODE)</span>
              </div>
              <div class="xag-modes-grid">
                <div class="xag-mode-card ${selectedMode === GameModeType.ODOGWU_STASH && teamSize === 2 ? 'active' : ''}" data-mode="${GameModeType.ODOGWU_STASH}" data-teamsize="2">
                  <span class="xag-mode-badge">⭐ SQUAD CO-OP</span>
                  <span class="xag-mode-title">2v2 SQUAD HEIST</span>
                  <span class="xag-mode-desc">Partner with an ally. Breach the vault, crack the stash, revive downed teammates, and extract alive.</span>
                </div>

                <div class="xag-mode-card ${selectedMode === GameModeType.TEAM_DEATHMATCH && teamSize === 2 ? 'active' : ''}" data-mode="${GameModeType.TEAM_DEATHMATCH}" data-teamsize="2">
                  <span class="xag-mode-badge">TACTICAL DUOS</span>
                  <span class="xag-mode-title">2v2 TEAM DEATHMATCH</span>
                  <span class="xag-mode-desc">Fast-paced 2-operative tactical elimination shootout. First squad to score cap wins.</span>
                </div>

                <div class="xag-mode-card ${selectedMode === GameModeType.TEAM_DEATHMATCH && teamSize === 3 ? 'active' : ''}" data-mode="${GameModeType.TEAM_DEATHMATCH}" data-teamsize="3">
                  <span class="xag-mode-badge">SECTOR WARFARE</span>
                  <span class="xag-mode-title">3v3 TEAM DEATHMATCH</span>
                  <span class="xag-mode-desc">Full 6-operative squad clash across fortified choke lanes.</span>
                </div>

                <div class="xag-mode-card ${selectedMode === GameModeType.ODOGWU_STASH && teamSize === 1 ? 'active' : ''}" data-mode="${GameModeType.ODOGWU_STASH}" data-teamsize="1">
                  <span class="xag-mode-badge">SOLO INFILTRATION</span>
                  <span class="xag-mode-title">SOLO HEIST</span>
                  <span class="xag-mode-desc">Infiltrate alone, shatter the vault, steal the stash, and eliminate rival contractors.</span>
                </div>

                <div class="xag-mode-card ${selectedMode === GameModeType.FREE_FOR_ALL ? 'active' : ''}" data-mode="${GameModeType.FREE_FOR_ALL}" data-teamsize="1">
                  <span class="xag-mode-badge">PURE CHAOS</span>
                  <span class="xag-mode-title">FREE FOR ALL</span>
                  <span class="xag-mode-desc">No squads, no mercy. Eliminate every contractor in the arena.</span>
                </div>
              </div>
            </div>

            <!-- 3. Infiltration Bots Toggle -->
            <div>
              <div class="xag-modal-section-title">
                <span>🤖 INFILTRATION AI SUPPORT</span>
              </div>
              <div id="btn-toggle-bots" class="xag-toggle-card">
                <div class="xag-toggle-info">
                  <span class="xag-toggle-title">TACTICAL TRAINING BOTS</span>
                  <span class="xag-toggle-sub">Automatically fills empty operative slots with adaptive AI contractors.</span>
                </div>
                <div id="modal-bot-status-pill" class="xag-toggle-pill ${fillBots ? 'on' : 'off'}">
                  ${fillBots ? '🤖 BOTS: ENABLED' : '✕ PVP ONLY'}
                </div>
              </div>
            </div>
          </div>

          <div class="xag-modal-footer">
            <button id="btn-confirm-maps-modal" class="xag-confirm-btn">✓ CONFIRM SELECTION</button>
          </div>
        </div>
      </div>

      <!-- =======================================================
           DEDICATED MODAL 2: ARMORY & LOADOUT
           ======================================================= -->
      <div id="xag-armory-modal" class="xag-modal-backdrop">
        <div class="xag-modal-dialog">
          <div class="xag-modal-header">
            <div>
              <div class="xag-modal-title">SPEC-OPS ARMORY & RIGS</div>
              <div class="xag-modal-sub">VAULT BALANCE: ₦${profile.cash_balance.toLocaleString()}</div>
            </div>
            <button id="btn-close-armory-modal" class="xag-modal-close-btn" title="Close">✕</button>
          </div>

          <div class="xag-modal-scrollable">
            <!-- Tabs -->
            <div class="xag-armory-tabs">
              <button id="tab-primary-btn" class="xag-armory-tab active">PRIMARY WEAPON</button>
              <button id="tab-secondary-btn" class="xag-armory-tab">SECONDARY WEAPON</button>
              <button id="tab-rigs-btn" class="xag-armory-tab">MOVEMENT RIGS</button>
            </div>

            <!-- Panel 1: Primary Weapons Grid -->
            <div id="armory-panel-primary" class="xag-weapons-grid">
              <!-- Dynamically rendered by MenuOverlay -->
            </div>

            <!-- Panel 2: Secondary Weapons Grid -->
            <div id="armory-panel-secondary" class="xag-weapons-grid" style="display: none;">
              <!-- Dynamically rendered by MenuOverlay -->
            </div>

            <!-- Panel 3: Movement Rigs Grid -->
            <div id="armory-panel-rigs" class="xag-rigs-grid" style="display: none;">
              <div class="xag-rig-card-full ${selectedRig === MovementRigType.BREACH_BOOSTER || selectedRig === MovementRigType.PHASE_DASH ? 'active' : ''}" data-rig="${MovementRigType.PHASE_DASH}">
                <span class="xag-rig-icon-lg">⚡</span>
                <span class="xag-rig-title">SPECTER</span>
                <span class="xag-rig-desc">Phase Dash + temporary invisibility cloaking for rapid flanks and stealth breaches.</span>
              </div>

              <div class="xag-rig-card-full ${selectedRig === MovementRigType.OVERDRIVE_SLIDE ? 'active' : ''}" data-rig="${MovementRigType.OVERDRIVE_SLIDE}">
                <span class="xag-rig-icon-lg">🛡️</span>
                <span class="xag-rig-title">VANGUARD</span>
                <span class="xag-rig-desc">Overdrive Slide + frontal ballistic barrier absorbs kinetic bullet impact.</span>
              </div>

              <div class="xag-rig-card-full ${selectedRig === MovementRigType.GLITCH_ANCHOR ? 'active' : ''}" data-rig="${MovementRigType.GLITCH_ANCHOR}">
                <span class="xag-rig-icon-lg">⏱️</span>
                <span class="xag-rig-title">CHRONOS</span>
                <span class="xag-rig-desc">Glitch Anchor rewinds operative position and partial HP 2.5 seconds into the past.</span>
              </div>
            </div>
          </div>

          <div class="xag-modal-footer">
            <button id="btn-save-armory-modal" class="xag-confirm-btn">✓ EQUIP & RETURN</button>
          </div>
        </div>
      </div>
    </div>
  `;
}
