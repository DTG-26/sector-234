import { GameModeType, MapId, MovementRigType, WeaponId } from '../config/types';
import {
  ClientTickPayload,
  DamageEventPayload,
  FireWeaponPayload,
  GenericNetMessage,
  GroundSlamPayload,
  JoinRoomPayload,
  MatchStartingPayload,
  NetMessageType,
  NetworkLobbyPlayer,
  NetworkPlayerState,
  PickupClaimPayload,
  RigTriggerPayload,
  RoomStatePayload,
  ServerSnapshotPayload,
  TileDestroyPayload,
} from './NetworkTypes';

export class NetworkClient {
  private static instance: NetworkClient | null = null;
  public ws: WebSocket | null = null;
  public isConnected: boolean = false;
  public currentRoomId: string | null = null;
  public localPlayerId: string | null = null;
  public isHost: boolean = false;
  public ping: number = 0;
  public cachedLobbyPlayers: NetworkLobbyPlayer[] = [];
  public serverUrl: string;

  // Handlers
  public onRoomState?: (state: RoomStatePayload) => void;
  public onMatchStarting?: (data: MatchStartingPayload) => void;
  public onSnapshot?: (snapshot: ServerSnapshotPayload) => void;
  public onFireWeapon?: (fire: FireWeaponPayload) => void;
  public onRigTrigger?: (rig: RigTriggerPayload) => void;
  public onGroundSlam?: (slam: GroundSlamPayload) => void;
  public onDamageEvent?: (dmg: DamageEventPayload) => void;
  public onTileDestroy?: (tile: TileDestroyPayload) => void;
  public onPickupClaim?: (pickup: PickupClaimPayload) => void;
  public onPlayerLeft?: (playerId: string) => void;
  public onError?: (errorMsg: string) => void;

  private pingInterval: any = null;

  public static getInstance(): NetworkClient {
    if (!NetworkClient.instance) {
      NetworkClient.instance = new NetworkClient();
    }
    return NetworkClient.instance;
  }

  constructor() {
    const envUrl = (import.meta as any).env?.VITE_WS_URL || (window as any).__XAG_WS_URL__;
    if (envUrl) {
      this.serverUrl = envUrl;
    } else {
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const host = window.location.hostname || 'localhost';
      this.serverUrl = `${protocol}//${host}:8080`;
    }
  }

  public connect(): Promise<boolean> {
    return new Promise((resolve) => {
      if (this.isConnected && this.ws && this.ws.readyState === WebSocket.OPEN) {
        resolve(true);
        return;
      }

      console.log(`[NET-CLIENT] Connecting to game server at ${this.serverUrl}...`);

      try {
        this.ws = new WebSocket(this.serverUrl);
      } catch (e) {
        console.error('[NET-CLIENT] WebSocket instantiation failed:', e);
        resolve(false);
        return;
      }

      this.ws.onopen = () => {
        console.log('[NET-CLIENT] Connected to server successfully!');
        this.isConnected = true;
        this.startPingLoop();
        resolve(true);
      };

      this.ws.onclose = () => {
        console.warn('[NET-CLIENT] Disconnected from game server.');
        this.isConnected = false;
        this.stopPingLoop();
      };

      this.ws.onerror = (err) => {
        console.error('[NET-CLIENT] WebSocket error:', err);
        this.isConnected = false;
        resolve(false);
      };

      this.ws.onmessage = (event) => {
        try {
          const msg: GenericNetMessage = JSON.parse(event.data);
          this.handleIncomingMessage(msg);
        } catch (err) {
          console.error('[NET-CLIENT] Error parsing server message:', err);
        }
      };
    });
  }

  public createRoom(
    playerName: string,
    rig: MovementRigType,
    weapon: WeaponId,
    mapId: MapId = MapId.BIRNIN_KANO,
    mode: GameModeType = GameModeType.ODOGWU_STASH
  ): void {
    const payload: JoinRoomPayload = {
      roomId: '', // Empty triggers server to generate room code
      playerName,
      rig,
      weapon,
      mapId,
      mode,
    };
    this.send(NetMessageType.JOIN_ROOM, payload);
  }

  public joinRoom(
    roomId: string,
    playerName: string,
    rig: MovementRigType,
    weapon: WeaponId
  ): void {
    const payload: JoinRoomPayload = {
      roomId,
      playerName,
      rig,
      weapon,
      mapId: MapId.BIRNIN_KANO,
      mode: GameModeType.ODOGWU_STASH,
    };
    this.send(NetMessageType.JOIN_ROOM, payload);
  }

  public setReady(ready: boolean): void {
    this.send(NetMessageType.SET_READY, { ready });
  }

  public startMatch(): void {
    this.send(NetMessageType.START_MATCH, {});
  }

  public sendTick(state: NetworkPlayerState): void {
    if (!this.isConnected) return;
    const payload: ClientTickPayload = { state };
    this.send(NetMessageType.CLIENT_TICK, payload);
  }

  public sendFire(payload: FireWeaponPayload): void {
    this.send(NetMessageType.FIRE_WEAPON, payload);
  }

  public sendRigTrigger(payload: RigTriggerPayload): void {
    this.send(NetMessageType.RIG_TRIGGER, payload);
  }

  public sendGroundSlam(payload: GroundSlamPayload): void {
    this.send(NetMessageType.GROUND_SLAM, payload);
  }

  public sendDamage(payload: DamageEventPayload): void {
    this.send(NetMessageType.DAMAGE_EVENT, payload);
  }

  public sendTileDestroy(tileX: number, tileY: number, playerId: string): void {
    const payload: TileDestroyPayload = { tileX, tileY, playerId };
    this.send(NetMessageType.TILE_DESTROY, payload);
  }

  public sendPickupClaim(pickupId: string, collectorId: string): void {
    const payload: PickupClaimPayload = { pickupId, collectorId };
    this.send(NetMessageType.PICKUP_CLAIM, payload);
  }

  private handleIncomingMessage(msg: GenericNetMessage): void {
    switch (msg.type) {
      case NetMessageType.ROOM_STATE: {
        const payload = msg.payload as RoomStatePayload;
        this.currentRoomId = payload.roomId;
        this.localPlayerId = payload.yourPlayerId;
        this.isHost = payload.isHost;
        this.cachedLobbyPlayers = payload.players;
        if (this.onRoomState) {
          this.onRoomState(payload);
        }
        break;
      }

      case NetMessageType.MATCH_STARTING: {
        const payload = msg.payload as MatchStartingPayload;
        if (this.onMatchStarting) {
          this.onMatchStarting(payload);
        }
        break;
      }

      case NetMessageType.SERVER_SNAPSHOT: {
        const payload = msg.payload as ServerSnapshotPayload;
        if (this.onSnapshot) {
          this.onSnapshot(payload);
        }
        break;
      }

      case NetMessageType.FIRE_WEAPON: {
        const payload = msg.payload as FireWeaponPayload;
        if (this.onFireWeapon) {
          this.onFireWeapon(payload);
        }
        break;
      }

      case NetMessageType.RIG_TRIGGER: {
        const payload = msg.payload as RigTriggerPayload;
        if (this.onRigTrigger) {
          this.onRigTrigger(payload);
        }
        break;
      }

      case NetMessageType.GROUND_SLAM: {
        const payload = msg.payload as GroundSlamPayload;
        if (this.onGroundSlam) {
          this.onGroundSlam(payload);
        }
        break;
      }

      case NetMessageType.DAMAGE_EVENT: {
        const payload = msg.payload as DamageEventPayload;
        if (this.onDamageEvent) {
          this.onDamageEvent(payload);
        }
        break;
      }

      case NetMessageType.TILE_DESTROY: {
        const payload = msg.payload as TileDestroyPayload;
        if (this.onTileDestroy) {
          this.onTileDestroy(payload);
        }
        break;
      }

      case NetMessageType.PICKUP_CLAIM: {
        const payload = msg.payload as PickupClaimPayload;
        if (this.onPickupClaim) {
          this.onPickupClaim(payload);
        }
        break;
      }

      case NetMessageType.PLAYER_LEFT: {
        const pid = msg.payload?.playerId;
        if (pid && this.onPlayerLeft) {
          this.onPlayerLeft(pid);
        }
        break;
      }

      case NetMessageType.ERROR: {
        const errMsg = msg.payload?.message || 'Server error';
        if (this.onError) {
          this.onError(errMsg);
        }
        break;
      }

      case NetMessageType.PONG: {
        const clientTimestamp = msg.payload?.clientTimestamp || Date.now();
        this.ping = Math.max(1, Math.round((Date.now() - clientTimestamp) * 0.5));
        break;
      }
    }
  }

  private send(type: NetMessageType, payload: any): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    this.ws.send(JSON.stringify({ type, payload }));
  }

  private startPingLoop(): void {
    this.stopPingLoop();
    this.pingInterval = setInterval(() => {
      this.send(NetMessageType.PING, { timestamp: Date.now() });
    }, 2000);
  }

  private stopPingLoop(): void {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }
}
