import { GameModeType, MapId, MovementRigType, WeaponId } from '../config/types.ts';

export enum NetMessageType {
  // Lobby & Matchmaking
  JOIN_ROOM = 'JOIN_ROOM',
  ROOM_STATE = 'ROOM_STATE',
  SET_READY = 'SET_READY',
  START_MATCH = 'START_MATCH',
  MATCH_STARTING = 'MATCH_STARTING',
  PLAYER_LEFT = 'PLAYER_LEFT',
  ERROR = 'ERROR',

  // Real-Time Gameplay
  CLIENT_TICK = 'CLIENT_TICK',
  SERVER_SNAPSHOT = 'SERVER_SNAPSHOT',
  FIRE_WEAPON = 'FIRE_WEAPON',
  RIG_TRIGGER = 'RIG_TRIGGER',
  GROUND_SLAM = 'GROUND_SLAM',
  DAMAGE_EVENT = 'DAMAGE_EVENT',
  PLAYER_DIED = 'PLAYER_DIED',
  RESPAWN = 'RESPAWN',
  TILE_DESTROY = 'TILE_DESTROY',
  PICKUP_CLAIM = 'PICKUP_CLAIM',
  PING = 'PING',
  PONG = 'PONG',
}

export interface NetworkLobbyPlayer {
  id: string;
  name: string;
  rig: MovementRigType;
  primaryWeapon: WeaponId;
  isHost: boolean;
  isReady: boolean;
  ping: number;
}

export interface NetworkPlayerState {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  aimAngle: number;
  facingRight: boolean;
  isJetFlying: boolean;
  isGrounded: boolean;
  isSliding: boolean;
  hp: number;
  armor: number;
  fuel: number;
  activeWeapon: WeaponId;
  isDead: boolean;
  timestamp: number;
}

// Packet Payloads
export interface JoinRoomPayload {
  roomId?: string; // Empty = Create Room
  playerName: string;
  rig: MovementRigType;
  weapon: WeaponId;
  mapId: MapId;
  mode: GameModeType;
}

export interface RoomStatePayload {
  roomId: string;
  yourPlayerId: string;
  isHost: boolean;
  mapId: MapId;
  mode: GameModeType;
  players: NetworkLobbyPlayer[];
  matchActive: boolean;
}

export interface MatchStartingPayload {
  countdownSec: number;
  mapId: MapId;
  mode: GameModeType;
  seed: number;
}

export interface ClientTickPayload {
  state: NetworkPlayerState;
}

export interface ServerSnapshotPayload {
  tick: number;
  timestamp: number;
  players: NetworkPlayerState[];
}

export interface FireWeaponPayload {
  playerId: string;
  weaponId: WeaponId;
  originX: number;
  originY: number;
  aimAngle: number;
  targetX?: number;
  targetY?: number;
}

export interface RigTriggerPayload {
  playerId: string;
  rigType: MovementRigType;
  angle: number;
  popupText: string;
}

export interface GroundSlamPayload {
  playerId: string;
  x: number;
  y: number;
}

export interface DamageEventPayload {
  targetId: string;
  attackerId: string;
  damage: number;
  newHp: number;
  isHeadshot: boolean;
  x: number;
  y: number;
}

export interface PlayerDiedPayload {
  victimId: string;
  killerId: string;
  bountyCashStolen: number;
}

export interface TileDestroyPayload {
  tileX: number;
  tileY: number;
  playerId: string;
}

export interface PickupClaimPayload {
  pickupId: string;
  collectorId: string;
}

export interface GenericNetMessage<T = any> {
  type: NetMessageType;
  payload: T;
  senderId?: string;
}
