import { MovementRigType, OperativeClass, OperativeProfile, WeaponId } from '../config/types';

const STORAGE_KEY = 'xag_operative_profile_v2';

export class OperativeService {
  private static instance: OperativeService;
  private currentProfile: OperativeProfile;

  private supabaseUrl: string = (import.meta as any).env?.VITE_SUPABASE_URL || '';
  private supabaseAnonKey: string = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '';

  private constructor() {
    this.currentProfile = this.loadOrCreateProfile();
  }

  public static getInstance(): OperativeService {
    if (!OperativeService.instance) {
      OperativeService.instance = new OperativeService();
    }
    return OperativeService.instance;
  }

  private loadOrCreateProfile(): OperativeProfile {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.call_sign) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('[OperativeService] Local storage read error:', e);
    }

    // Default Guest-First Profile
    const guestNum = Math.floor(1000 + Math.random() * 9000);
    const newProfile: OperativeProfile = {
      id: `guest_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      call_sign: `GUEST_234_${guestNum}`,
      clan_tag: 'XAG',
      rank: 1,
      cash_balance: 100000, // ₦100,000 starting cash
      unlocked_weapons: [WeaponId.RIFLE_XAG47, WeaponId.PISTOL_XAG9, WeaponId.CUTLASS],
      selected_rig: MovementRigType.BREACH_BOOSTER,
      selected_class: OperativeClass.VANGUARD,
      is_claimed: false,
    };

    this.saveToStorage(newProfile);
    return newProfile;
  }

  public getProfile(): OperativeProfile {
    return this.currentProfile;
  }

  private saveToStorage(profile: OperativeProfile): void {
    this.currentProfile = profile;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (e) {
      console.warn('[OperativeService] Local storage write error:', e);
    }
  }

  public async syncWithCloud(): Promise<void> {
    if (!this.supabaseUrl || !this.supabaseAnonKey) {
      return; // Offline mode is 100% supported
    }

    try {
      const response = await fetch(`${this.supabaseUrl}/rest/v1/operatives`, {
        method: 'POST',
        headers: {
          apikey: this.supabaseAnonKey,
          Authorization: `Bearer ${this.supabaseAnonKey}`,
          'Content-Type': 'application/json',
          Prefer: 'resolution=merge-duplicates',
        },
        body: JSON.stringify({
          id: this.currentProfile.id,
          call_sign: this.currentProfile.call_sign,
          clan_tag: this.currentProfile.clan_tag,
          rank: this.currentProfile.rank,
          cash_balance: this.currentProfile.cash_balance,
          unlocked_weapons: this.currentProfile.unlocked_weapons,
          selected_class: this.currentProfile.selected_class,
          updated_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.warn('[OperativeService] Cloud sync response not ok:', response.status);
      }
    } catch (err) {
      console.warn('[OperativeService] Cloud sync offline fallback:', err);
    }
  }

  public async claimAccount(callSign: string, passwordPlain: string, clanTag: string = 'XAG'): Promise<boolean> {
    const cleanCallsign = callSign.trim().toUpperCase() || this.currentProfile.call_sign;
    const cleanClan = clanTag.trim().toUpperCase() || 'XAG';

    // Hash password client-side using SHA-256
    const msgBuffer = new TextEncoder().encode(passwordPlain);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const passwordHash = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

    this.currentProfile.call_sign = cleanCallsign;
    this.currentProfile.clan_tag = cleanClan;
    this.currentProfile.is_claimed = true;
    this.saveToStorage(this.currentProfile);

    // Save hash locally and attempt cloud sync
    try {
      localStorage.setItem('xag_claimed_hash', passwordHash);
    } catch (_) {}

    await this.syncWithCloud();
    return true;
  }

  public bankMatchCash(matchEarnings: number): number {
    if (matchEarnings > 0) {
      this.currentProfile.cash_balance += matchEarnings;
      // Calculate rank up (every ₦500,000 banked increases rank)
      this.currentProfile.rank = Math.max(1, Math.floor(this.currentProfile.cash_balance / 500000) + 1);
      this.saveToStorage(this.currentProfile);
      this.syncWithCloud();
    }
    return this.currentProfile.cash_balance;
  }

  public unlockWeapon(weaponId: WeaponId, cost: number): boolean {
    if (this.currentProfile.unlocked_weapons.includes(weaponId)) {
      return true; // Already unlocked
    }

    if (this.currentProfile.cash_balance >= cost) {
      this.currentProfile.cash_balance -= cost;
      this.currentProfile.unlocked_weapons.push(weaponId);
      this.saveToStorage(this.currentProfile);
      this.syncWithCloud();
      return true;
    }
    return false;
  }

  public isWeaponUnlocked(weaponId: WeaponId): boolean {
    return this.currentProfile.unlocked_weapons.includes(weaponId);
  }

  public setClass(cls: OperativeClass): void {
    this.currentProfile.selected_class = cls;

    // Map Class to Movement Rig
    switch (cls) {
      case OperativeClass.VANGUARD:
        this.currentProfile.selected_rig = MovementRigType.BREACH_BOOSTER;
        break;
      case OperativeClass.STRIKER:
        this.currentProfile.selected_rig = MovementRigType.OVERDRIVE_SLIDE;
        break;
      case OperativeClass.SPECTER:
        this.currentProfile.selected_rig = MovementRigType.PHASE_DASH;
        break;
      case OperativeClass.CHRONOS:
        this.currentProfile.selected_rig = MovementRigType.GLITCH_ANCHOR;
        break;
    }

    this.saveToStorage(this.currentProfile);
  }
}
