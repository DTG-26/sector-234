import * as THREE from 'three';

export enum TileType {
  EMPTY = 0,
  WOOD_SCAFFOLD = 1,
  GLASS_WINDOW = 2,
  BRICK_CONCRETE = 3,
  STEEL_GIRDER = 4,
  POWER_TRANSFORMER = 5,
}

export enum MovementRigType {
  BREACH_BOOSTER = 'BREACH_BOOSTER',
  OVERDRIVE_SLIDE = 'OVERDRIVE_SLIDE',
  PHASE_DASH = 'PHASE_DASH',
  GLITCH_ANCHOR = 'GLITCH_ANCHOR',
}

export enum WeaponId {
  CUTLASS = 'CUTLASS',
  PISTOL_XAG9 = 'PISTOL_XAG9',
  AKIMBO_UZIS = 'AKIMBO_UZIS',
  SHOTGUN_AA12 = 'SHOTGUN_AA12',
  REVOLVER_JUDGE = 'REVOLVER_JUDGE',
  RIFLE_XAG47 = 'RIFLE_XAG47',
  GHOST_SMG = 'GHOST_SMG',
  RICOCHET_SAW = 'RICOCHET_SAW',
  RAIL_SNIPER = 'RAIL_SNIPER',
  BUNKER_RPG = 'BUNKER_RPG',
  SHOCK_ARC = 'SHOCK_ARC',
  VULCAN_MINIGUN = 'VULCAN_MINIGUN',
}

export enum GameModeType {
  ODOGWU_STASH = 'ODOGWU_STASH',
  VAULT_HEIST = 'VAULT_HEIST',
  APAPA_LOCKDOWN = 'APAPA_LOCKDOWN',
}

export interface WeaponDef {
  id: WeaponId;
  name: string;
  category: 'Melee' | 'Sidearm' | 'SMG' | 'Shotgun' | 'Heavy' | 'Rifle' | 'Tech';
  damage: number;
  fireInterval: number; // in seconds
  wallDmgMultiplier: number;
  magSize: number;
  reloadTime: number; // in seconds
  range: number;
  speed: number;
  pellets?: number;
  piercing?: number;
  bounces?: number;
  spread: number;
  recoilKick: number;
  description: string;
}

export interface PlayerStats {
  id: string;
  name: string;
  isBot: boolean;
  isLocalPlayer: boolean;
  hp: number;
  maxHp: number;
  armor: number;
  maxArmor: number;
  cash: number;
  kills: number;
  deaths: number;
  wallsDestroyed: number;
  rigType: MovementRigType;
  primaryWeapon: WeaponId;
  secondaryWeapon: WeaponId;
  activeWeapon: WeaponId;
  ammo: Record<WeaponId, number>;
  c4Count: number;
  empCount: number;
  tearGasCount: number;
  rigCooldownTimer: number;
  isExtracted: boolean;
  isDead: boolean;
}

export interface SonarEvent {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
  sourceId: string;
}

export enum MapId {
  BIRNIN_KANO = 'BIRNIN_KANO',
  LAGOS_GOSLOW = 'LAGOS_GOSLOW',
}

export enum HeistAct {
  ACT_1_BREACH = 'ACT_1_BREACH',
  ACT_2_CARRIER = 'ACT_2_CARRIER',
  ACT_3_EXTRACTION = 'ACT_3_EXTRACTION',
  MATCH_OVER = 'MATCH_OVER',
}

export enum AnnouncerEvent {
  MATCH_START = 'MATCH_START',
  FIRST_BLOOD = 'FIRST_BLOOD',
  DOUBLE_KILL = 'DOUBLE_KILL',
  KILL_STREAK = 'KILL_STREAK',
  VAULT_BREACHED = 'VAULT_BREACHED',
  CARRIER_MARKED = 'CARRIER_MARKED',
  CHOPPER_ARRIVED = 'CHOPPER_ARRIVED',
  CLEAN_EVAC = 'CLEAN_EVAC',
}

export enum OperativeClass {
  SPECTER = 'SPECTER',
  VANGUARD = 'VANGUARD',
  CHRONOS = 'CHRONOS',
  STRIKER = 'STRIKER',
}

export interface OperativeProfile {
  id: string;
  call_sign: string;
  clan_tag: string;
  rank: number;
  cash_balance: number;
  unlocked_weapons: WeaponId[];
  selected_rig: MovementRigType;
  selected_class: OperativeClass;
  is_claimed: boolean;
}

export interface MatchScoreboardEntry {
  id: string;
  name: string;
  cash: number;
  kills: number;
  deaths: number;
  wallsDestroyed: number;
  isSarki: boolean;
  isOdogwu?: boolean;
  isLocal: boolean;
}

export interface InputState {
  moveX: number; // -1 to 1
  jump: boolean;
  groundSlam: boolean;
  rig: boolean;
  aimAngle: number; // radians
  aiming: boolean;
  firing: boolean;
  melee: boolean;
  throwBoom: boolean;
  swapWeapon: boolean;
  reload: boolean;
  isTouch: boolean;
  flyIntensity: number; // 0 to 1 for analog jetpack hover/flight
}

