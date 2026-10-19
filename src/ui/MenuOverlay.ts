import { GameModeType, MapId, MatchScoreboardEntry, MovementRigType, OperativeClass, WeaponId } from '../config/types';
import { RoastReceipt } from './RoastReceipt';
import { OperativeService } from '../services/OperativeService';
import { WEAPON_REGISTRY } from '../config/constants';

export interface MenuStartOptions {
  gamerTag: string;
  rigType: MovementRigType;
  modeType: GameModeType;
  mapId: MapId;
}

export class MenuOverlay {
  private container: HTMLElement;
  private onStartGameCallback?: (opts: MenuStartOptions) => void;
  private onRematchCallback?: () => void;

  private selectedGamerTag: string = 'Operative_X';
  private selectedRig: MovementRigType = MovementRigType.BREACH_BOOSTER;
  private selectedMode: GameModeType = GameModeType.ODOGWU_STASH;
  private selectedMap: MapId = MapId.BIRNIN_KANO;

  constructor(containerId: string) {
    const el = document.getElementById(containerId);
    if (!el) throw new Error(`UI container ${containerId} not found`);
    this.container = el;

    // Load saved callsign and rig from OperativeService
    const profile = OperativeService.getInstance().getProfile();
    this.selectedGamerTag = profile.call_sign;
    this.selectedRig = profile.selected_rig;
  }

  public showMainMenu(onStart: (opts: MenuStartOptions) => void): void {
    this.onStartGameCallback = onStart;
    const touchControls = document.getElementById('touch-controls');
    if (touchControls) touchControls.style.display = 'none';

    const profile = OperativeService.getInstance().getProfile();
    this.selectedGamerTag = profile.call_sign;

    this.container.innerHTML = `
      <div style="position: absolute; inset: 0; background: rgba(7, 7, 9, 0.94); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 12px; pointer-events: auto;">
        <div style="width: 100%; max-width: 680px; max-height: 94vh; overflow-y: auto; background: #121217; border: 1.5px solid #27272a; box-shadow: 0 0 50px rgba(245, 158, 11, 0.15); padding: 18px 22px; border-radius: 8px;">
          <!-- Header -->
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #27272a; padding-bottom: 12px; margin-bottom: 14px;">
            <div>
              <div style="color: #f59e0b; font-size: 10px; font-weight: 800; letter-spacing: 2px;">STUDIO XAG // SECTOR 234</div>
              <h1 style="color: #f4f4f5; font-size: 24px; font-weight: 900; letter-spacing: 2px; margin: 0;">PROTOCOL ZERO</h1>
              <p style="color: #71717a; font-size: 11px; margin: 2px 0 0 0;">AREWA & NIGERIAN 2.5D HEIST ARENA</p>
            </div>
            <!-- Syndicate Dossier Button -->
            <button id="btn-open-dossier" style="background: #1e293b; border: 1.5px solid #f59e0b; color: #f59e0b; padding: 8px 14px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 11px; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 6px;">
              <span>📂 CONTRACTOR DOSSIER</span>
              <span style="background: #f59e0b; color: #000; padding: 2px 6px; border-radius: 3px; font-size: 10px;">₦${profile.cash_balance.toLocaleString()}</span>
            </button>
          </div>

          <!-- Gamer Tag Input -->
          <div style="margin-bottom: 16px;">
            <label style="display: block; color: #a1a1aa; font-size: 10px; font-weight: 700; margin-bottom: 6px; letter-spacing: 1px;">OPERATOR CALLSIGN</label>
            <input id="menu-callsign" type="text" value="${this.selectedGamerTag}" style="width: 100%; background: #18181b; border: 1px solid #3f3f46; color: #f4f4f5; padding: 10px 14px; font-family: 'JetBrains Mono', monospace; font-size: 14px; border-radius: 4px; outline: none;" />
          </div>

          <!-- Dual Map Selector -->
          <div style="margin-bottom: 18px;">
            <label style="display: block; color: #f59e0b; font-size: 10px; font-weight: 800; margin-bottom: 8px; letter-spacing: 1px;">SELECT ARENA THEATER [MAP]</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <button class="map-btn" data-map="BIRNIN_KANO" style="background: #18181b; border: 1.5px solid #f59e0b; color: #f4f4f5; padding: 10px; border-radius: 4px; text-align: left; cursor: pointer;">
                <div style="color: #f59e0b; font-weight: 800; font-size: 13px;">🏺 BIRNIN KANO (1800s)</div>
                <div style="color: #a1a1aa; font-size: 10px; margin-top: 2px;">Earthen mud walls (Tubali), white roof horns & royal treasury</div>
              </button>
              <button class="map-btn" data-map="LAGOS_GOSLOW" style="background: #18181b; border: 1px solid #27272a; color: #f4f4f5; padding: 10px; border-radius: 4px; text-align: left; cursor: pointer;">
                <div style="color: #e4e4e7; font-weight: 800; font-size: 13px;">🚌 LAGOS GO-SLOW</div>
                <div style="color: #71717a; font-size: 10px; margin-top: 2px;">Bumper-to-bumper Danfo traffic, flyover bridge & rain</div>
              </button>
            </div>
          </div>

          <!-- Rig Picker -->
          <div style="margin-bottom: 18px;">
            <label style="display: block; color: #a1a1aa; font-size: 10px; font-weight: 700; margin-bottom: 8px; letter-spacing: 1px;">SELECT COMBAT RIG</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <button class="rig-btn" data-rig="BREACH_BOOSTER" style="background: #18181b; border: 1.5px solid #06b6d4; color: #f4f4f5; padding: 9px; border-radius: 4px; text-align: left; cursor: pointer;">
                <div style="color: #06b6d4; font-weight: 800; font-size: 12px;">⚡ BREACH-BOOSTER (Vanguard)</div>
                <div style="color: #71717a; font-size: 9px; margin-top: 2px;">Smashes 3 layers of mud/concrete walls</div>
              </button>
              <button class="rig-btn" data-rig="OVERDRIVE_SLIDE" style="background: #18181b; border: 1px solid #27272a; color: #f4f4f5; padding: 9px; border-radius: 4px; text-align: left; cursor: pointer;">
                <div style="color: #e4e4e7; font-weight: 800; font-size: 12px;">💨 OVERDRIVE SLIDE (Striker)</div>
                <div style="color: #71717a; font-size: 9px; margin-top: 2px;">Low power-slide + vertical wall-kicks</div>
              </button>
              <button class="rig-btn" data-rig="PHASE_DASH" style="background: #18181b; border: 1px solid #27272a; color: #f4f4f5; padding: 9px; border-radius: 4px; text-align: left; cursor: pointer;">
                <div style="color: #e4e4e7; font-weight: 800; font-size: 12px;">👻 TACTICAL DASH (Specter)</div>
                <div style="color: #71717a; font-size: 9px; margin-top: 2px;">High-speed tactical burst through thin covers</div>
              </button>
              <button class="rig-btn" data-rig="GLITCH_ANCHOR" style="background: #18181b; border: 1px solid #27272a; color: #f4f4f5; padding: 9px; border-radius: 4px; text-align: left; cursor: pointer;">
                <div style="color: #e4e4e7; font-weight: 800; font-size: 12px;">🔮 COMBAT ANCHOR (Chronos)</div>
                <div style="color: #71717a; font-size: 9px; margin-top: 2px;">Beacon snap repositioning</div>
              </button>
            </div>
          </div>

          <!-- Mode Picker -->
          <div style="margin-bottom: 20px;">
            <label style="display: block; color: #a1a1aa; font-size: 10px; font-weight: 700; margin-bottom: 8px; letter-spacing: 1px;">SELECT ARENA CONTRACT [MODE]</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px;">
              <button class="mode-btn" data-mode="ODOGWU_STASH" style="background: #18181b; border: 1.5px solid #10b981; color: #f4f4f5; padding: 10px 6px; border-radius: 4px; text-align: center; cursor: pointer;">
                <div style="color: #10b981; font-weight: 800; font-size: 12px;">👑 SARKI HEIST (3-ACT)</div>
                <div style="color: #71717a; font-size: 9px; margin-top: 2px;">Vault Breach & Chopper Evac</div>
              </button>
              <button class="mode-btn" data-mode="VAULT_HEIST" style="background: #18181b; border: 1px solid #27272a; color: #f4f4f5; padding: 10px 6px; border-radius: 4px; text-align: center; cursor: pointer;">
                <div style="color: #e4e4e7; font-weight: 800; font-size: 12px;">🏦 VAULT CRACK</div>
                <div style="color: #71717a; font-size: 9px; margin-top: 2px;">3v3 Attack / Defend</div>
              </button>
              <button class="mode-btn" data-mode="APAPA_LOCKDOWN" style="background: #18181b; border: 1px solid #27272a; color: #f4f4f5; padding: 10px 6px; border-radius: 4px; text-align: center; cursor: pointer;">
                <div style="color: #e4e4e7; font-weight: 800; font-size: 12px;">🚢 ZONE LOCKDOWN</div>
                <div style="color: #71717a; font-size: 9px; margin-top: 2px;">Rotating High-Yield Zones</div>
              </button>
            </div>
          </div>

          <!-- Deploy Button -->
          <button id="menu-deploy-btn" style="width: 100%; background: #f59e0b; color: #070709; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 900; padding: 14px; border: none; border-radius: 4px; cursor: pointer; letter-spacing: 2px; transition: 0.2s;">
            DEPLOY TO ARENA [START HEIST]
          </button>
        </div>
      </div>
    `;

    // Hook inputs
    const callsignInput = document.getElementById('menu-callsign') as HTMLInputElement;
    if (callsignInput) {
      callsignInput.addEventListener('input', () => {
        this.selectedGamerTag = callsignInput.value || 'Operative_X';
      });
    }

    // Map selection
    const mapBtns = this.container.querySelectorAll('.map-btn');
    mapBtns.forEach((btn) => {
      const selectMap = (e: Event) => {
        e.stopPropagation();
        mapBtns.forEach((b) => {
          (b as HTMLElement).style.borderColor = '#27272a';
          const title = b.querySelector('div:first-child') as HTMLElement;
          if (title) title.style.color = '#e4e4e7';
        });
        (btn as HTMLElement).style.borderColor = '#f59e0b';
        const activeTitle = btn.querySelector('div:first-child') as HTMLElement;
        if (activeTitle) activeTitle.style.color = '#f59e0b';
        this.selectedMap = btn.getAttribute('data-map') as MapId;
      };
      btn.addEventListener('click', selectMap);
      btn.addEventListener('pointerdown', selectMap);
    });

    // Rig selection
    const rigBtns = this.container.querySelectorAll('.rig-btn');
    rigBtns.forEach((btn) => {
      const selectRig = (e: Event) => {
        e.stopPropagation();
        rigBtns.forEach((b) => ((b as HTMLElement).style.borderColor = '#27272a'));
        (btn as HTMLElement).style.borderColor = '#06b6d4';
        this.selectedRig = btn.getAttribute('data-rig') as MovementRigType;
      };
      btn.addEventListener('click', selectRig);
      btn.addEventListener('pointerdown', selectRig);
    });

    // Mode selection
    const modeBtns = this.container.querySelectorAll('.mode-btn');
    modeBtns.forEach((btn) => {
      const selectMode = (e: Event) => {
        e.stopPropagation();
        modeBtns.forEach((b) => ((b as HTMLElement).style.borderColor = '#27272a'));
        (btn as HTMLElement).style.borderColor = '#10b981';
        this.selectedMode = btn.getAttribute('data-mode') as GameModeType;
      };
      btn.addEventListener('click', selectMode);
      btn.addEventListener('pointerdown', selectMode);
    });

    // Dossier Modal Button
    const dossierBtn = document.getElementById('btn-open-dossier');
    if (dossierBtn) {
      dossierBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.showDossierModal();
      });
    }

    // Deploy Button
    const deployBtn = document.getElementById('menu-deploy-btn')!;
    let deployed = false;
    const handleDeploy = (e: Event) => {
      e.stopPropagation();
      if (deployed) return;
      deployed = true;

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
        });
      }
    };

    deployBtn.addEventListener('click', handleDeploy);
    deployBtn.addEventListener('pointerdown', handleDeploy);
  }

  public showDossierModal(): void {
    const service = OperativeService.getInstance();
    const profile = service.getProfile();

    const modal = document.createElement('div');
    modal.id = 'dossier-modal';
    modal.style.position = 'fixed';
    modal.style.inset = '0';
    modal.style.background = 'rgba(7, 7, 9, 0.92)';
    modal.style.backdropFilter = 'blur(10px)';
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
      ];

      modal.innerHTML = `
        <div style="width: 100%; max-width: 600px; max-height: 90vh; overflow-y: auto; background: #121217; border: 2px solid #f59e0b; border-radius: 8px; padding: 22px; font-family: 'JetBrains Mono', monospace; color: #f4f4f5;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #27272a; padding-bottom: 10px; margin-bottom: 16px;">
            <div>
              <div style="color: #f59e0b; font-size: 11px; font-weight: 800; letter-spacing: 2px;">[XAG] SYNDICATE CONTRACTOR DOSSIER</div>
              <h2 style="font-size: 20px; font-weight: 900; margin: 2px 0 0 0;">${p.call_sign}</h2>
            </div>
            <button id="close-dossier" style="background: transparent; border: 1px solid #3f3f46; color: #a1a1aa; padding: 6px 12px; border-radius: 4px; cursor: pointer;">✕ CLOSE</button>
          </div>

          <!-- Balance & Rank Card -->
          <div style="background: #18181b; border: 1px solid #27272a; padding: 14px; border-radius: 6px; margin-bottom: 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <div>
              <div style="color: #71717a; font-size: 10px;">PERMANENT OFFSHORE VAULT</div>
              <div style="color: #10b981; font-size: 20px; font-weight: 900;">₦${p.cash_balance.toLocaleString()}</div>
            </div>
            <div>
              <div style="color: #71717a; font-size: 10px;">SYNDICATE CLEARANCE RANK</div>
              <div style="color: #f59e0b; font-size: 20px; font-weight: 900;">RANK ${p.rank}</div>
            </div>
          </div>

          <!-- Account Claim Form -->
          ${
            !p.is_claimed
              ? `
            <div style="background: rgba(245, 158, 11, 0.08); border: 1px dashed #f59e0b; border-radius: 6px; padding: 14px; margin-bottom: 18px;">
              <div style="color: #f59e0b; font-size: 12px; font-weight: 800; margin-bottom: 4px;">CLAIM CONTRACTOR IDENTITY (CLOUD SYNC)</div>
              <p style="color: #a1a1aa; font-size: 11px; margin: 0 0 10px 0;">Secure your permanent offshore bank balance with a password. Zero email confirmations needed.</p>
              <div style="display: flex; gap: 8px;">
                <input id="claim-password" type="password" placeholder="Create Secret Password" style="flex: 1; background: #18181b; border: 1px solid #3f3f46; color: #fff; padding: 8px 12px; border-radius: 4px; font-size: 12px; outline: none;" />
                <button id="btn-submit-claim" style="background: #f59e0b; color: #000; border: none; font-weight: 800; padding: 8px 14px; border-radius: 4px; cursor: pointer;">CLAIM</button>
              </div>
            </div>
          `
              : `
            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid #10b981; border-radius: 6px; padding: 10px 14px; margin-bottom: 18px; display: flex; align-items: center; gap: 8px;">
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
                  <div style="background: #18181b; border: 1px solid ${unlocked ? '#10b981' : '#27272a'}; padding: 10px 14px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
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
            renderDossierContent();
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
        <tr style="border-bottom: 1px solid #27272a; color: ${entry.isLocal ? '#06b6d4' : '#e4e4e7'};">
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
      <div style="position: absolute; inset: 0; background: rgba(7, 7, 9, 0.95); backdrop-filter: blur(10px); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 12px; pointer-events: auto;">
        <div style="width: 100%; max-width: 640px; max-height: 94vh; overflow-y: auto; background: #121217; border: 1.5px solid #27272a; box-shadow: 0 0 50px rgba(245, 158, 11, 0.2); padding: 20px 24px; border-radius: 8px;">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 16px;">
            <div style="color: #f59e0b; font-size: 11px; font-weight: 800; letter-spacing: 2px;">STUDIO XAG // AFTER-ACTION REPORT</div>
            <h2 style="color: #f4f4f5; font-size: 24px; font-weight: 800;">👑 THE SARKI: ${sarki.name.toUpperCase()} (₦${sarki.cash.toLocaleString()})</h2>
          </div>

          <!-- Scoreboard Table -->
          <table style="width: 100%; border-collapse: collapse; font-family: 'JetBrains Mono', monospace; font-size: 12px; margin-bottom: 20px;">
            <thead>
              <tr style="border-bottom: 1px solid #3f3f46; color: #a1a1aa; text-align: left;">
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
            <button id="summary-receipt-btn" style="background: #18181b; border: 1.5px solid #f59e0b; color: #f59e0b; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 800; padding: 12px; border-radius: 4px; cursor: pointer; letter-spacing: 1px;">
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
