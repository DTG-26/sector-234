import { AnnouncerEvent } from '../config/types';

interface AnnouncementItem {
  event: AnnouncerEvent;
  bannerTitle: string;
  bannerSubtitle: string;
  voiceText: string;
  color: string;
}

export class HypeAnnouncer {
  private static instance: HypeAnnouncer;
  private bannerContainer: HTMLElement;
  private audioCtx?: AudioContext;
  private queue: AnnouncementItem[] = [];
  private isDisplaying: boolean = false;

  private voiceLines: Record<AnnouncerEvent, { banner: string; sub: string; voice: string; color: string }> = {
    [AnnouncerEvent.MATCH_START]: {
      banner: 'OPERATION LIVE!',
      sub: 'ALL OPERATIVES INFILTRATE THE ARENA',
      voice: 'Yane Operatives! Target locked. Secure the Kudi!',
      color: '#06b6d4',
    },
    [AnnouncerEvent.FIRST_BLOOD]: {
      banner: 'FIRST BLOOD!',
      sub: 'FIRST CASUALTY CONFIRMED',
      voice: 'First Blood! Aiki ya fara — the hunt begins!',
      color: '#ef4444',
    },
    [AnnouncerEvent.DOUBLE_KILL]: {
      banner: 'DOUBLE ELIMINATION!',
      sub: 'RAPID TAKEDOWN CONFIRMED',
      voice: 'Double Elimination! Biyu a kasa — two down!',
      color: '#f97316',
    },
    [AnnouncerEvent.KILL_STREAK]: {
      banner: 'SARKIN YAKI RAMPAGE!',
      sub: 'UNSTOPPABLE COMBAT STREAK',
      voice: 'Sarkin Yaki! Nobody can stop this operative!',
      color: '#eab308',
    },
    [AnnouncerEvent.VAULT_BREACHED]: {
      banner: 'VAULT BREACHED!',
      sub: 'MASTER BOUNTY CASE RELEASED',
      voice: 'Vault Cracked! Ga Kudi nan — grab the master case!',
      color: '#f59e0b',
    },
    [AnnouncerEvent.CARRIER_MARKED]: {
      banner: 'TARGET MARKED [👑]',
      sub: 'SARKI BOUNTY CARRIER IDENTIFIED',
      voice: 'Bounty Target Marked! Hunt down the carrier!',
      color: '#facc15',
    },
    [AnnouncerEvent.CHOPPER_ARRIVED]: {
      banner: 'EXTRACTION LIVE!',
      sub: 'ARMORED EXTRACTION GUNSHIP HAS ARRIVED',
      voice: 'Gunship inbound! Ku taho — move to the extraction zone!',
      color: '#10b981',
    },
    [AnnouncerEvent.CLEAN_EVAC]: {
      banner: 'HEIST COMPLETED!',
      sub: '100% CLEAN EXTRACTION SECURED',
      voice: 'Gaskiya! Full payout secured. Mission complete!',
      color: '#22c55e',
    },
  };

  private constructor() {
    let container = document.getElementById('hype-announcer-banner');
    if (!container) {
      container = document.createElement('div');
      container.id = 'hype-announcer-banner';
      container.style.position = 'fixed';
      container.style.top = '14px';
      container.style.left = '50%';
      container.style.transform = 'translateX(-50%) translateY(-120%)';
      container.style.zIndex = '9999';
      container.style.pointerEvents = 'none';
      container.style.transition = 'transform 0.28s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.25s ease';
      container.style.opacity = '0';
      document.body.appendChild(container);
    }
    this.bannerContainer = container;

    // Unlock AudioContext on first touch / interaction
    const unlockAudio = () => {
      if (!this.audioCtx) {
        const AudioCtor = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtor) {
          this.audioCtx = new AudioCtor();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    };
    window.addEventListener('pointerdown', unlockAudio, { once: false });
    window.addEventListener('keydown', unlockAudio, { once: false });
  }

  public static getInstance(): HypeAnnouncer {
    if (!HypeAnnouncer.instance) {
      HypeAnnouncer.instance = new HypeAnnouncer();
    }
    return HypeAnnouncer.instance;
  }

  public announce(event: AnnouncerEvent): void {
    const data = this.voiceLines[event];
    if (!data) return;

    this.queue.push({
      event,
      bannerTitle: data.banner,
      bannerSubtitle: data.sub,
      voiceText: data.voice,
      color: data.color,
    });

    if (!this.isDisplaying) {
      this.processQueue();
    }
  }

  private processQueue(): void {
    if (this.queue.length === 0) {
      this.isDisplaying = false;
      return;
    }

    this.isDisplaying = true;
    const item = this.queue.shift()!;

    // 1. Play procedural military radio squelch + sub-bass drop
    this.playRadioFX();

    // 2. Play speech synthesis voice line
    this.playVoiceLine(item.voiceText);

    // 3. Render tactical cyber-stencil banner
    this.showBanner(item);

    // 4. Dismiss banner after 1.8s and process next
    setTimeout(() => {
      this.hideBanner();
      setTimeout(() => {
        this.processQueue();
      }, 200);
    }, 1800);
  }

  private showBanner(item: AnnouncementItem): void {
    this.bannerContainer.innerHTML = `
      <div style="
        max-width: 290px;
        background: rgba(5, 8, 6, 0.94);
        border: 1px solid ${item.color};
        box-shadow: 0 4px 18px rgba(0,0,0,0.7);
        border-radius: 4px;
        padding: 5px 14px;
        text-align: center;
        backdrop-filter: blur(6px);
        font-family: 'JetBrains Mono', 'Chakra Petch', monospace;
      ">
        <div style="
          color: ${item.color};
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.5px;
          line-height: 1.2;
        ">
          ${item.bannerTitle}
        </div>
        <div style="
          color: #94a3b8;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.8px;
          margin-top: 1px;
        ">
          ${item.bannerSubtitle}
        </div>
      </div>
    `;

    this.bannerContainer.style.transform = 'translateX(-50%) translateY(0)';
    this.bannerContainer.style.opacity = '1';
  }

  private hideBanner(): void {
    this.bannerContainer.style.transform = 'translateX(-50%) translateY(-120%)';
    this.bannerContainer.style.opacity = '0';
  }

  private playRadioFX(): void {
    if (!this.audioCtx) {
      const AudioCtor = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtor) this.audioCtx = new AudioCtor();
    }
    if (!this.audioCtx) return;

    try {
      const now = this.audioCtx.currentTime;

      // Squelch Chirp (1200Hz -> 2400Hz noise burst with bandpass filter)
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const filter = this.audioCtx.createBiquadFilter();

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.Q.setValueAtTime(4.0, now);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(2400, now + 0.08);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.09);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.1);

      // Sub-Bass Impact (80Hz -> 30Hz)
      const subOsc = this.audioCtx.createOscillator();
      const subGain = this.audioCtx.createGain();

      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(85, now);
      subOsc.frequency.exponentialRampToValueAtTime(28, now + 0.35);

      subGain.gain.setValueAtTime(0.5, now);
      subGain.gain.exponentialRampToValueAtTime(0.01, now + 0.38);

      subOsc.connect(subGain);
      subGain.connect(this.audioCtx.destination);

      subOsc.start(now);
      subOsc.stop(now + 0.4);
    } catch (e) {
      console.warn('[HypeAnnouncer] Radio FX failed:', e);
    }
  }

  private playVoiceLine(_text: string): void {
    // AI speech synthesis completely removed per user request
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (_) {}
    }
  }
}
