import { WebSocket } from 'ws';
import {
  GameModeType,
  MapId,
  MovementRigType,
  WeaponId,
} from '../src/config/types.ts';
import type {
  DamageEventPayload,
  FireWeaponPayload,
  GenericNetMessage,
  GroundSlamPayload,
  MatchStartingPayload,
  NetworkLobbyPlayer,
  NetworkPlayerState,
  PickupClaimPayload,
  RigTriggerPayload,
  RoomStatePayload,
  ServerSnapshotPayload,
  TileDestroyPayload,
} from '../src/network/NetworkTypes.ts';
import { NetMessageType } from '../src/network/NetworkTypes.ts';

interface ConnectedClient {
  id: string;
  ws: WebSocket;
  lobby: NetworkLobbyPlayer;
  lastState?: NetworkPlayerState;
}

export class Room {
  public id: string;
  public hostId: string;
  public mapId: MapId;
  public mode: GameModeType;
  public matchActive: boolean = false;
  private clients: Map<string, ConnectedClient> = new Map();
  private tickCount: number = 0;
  private snapshotInterval: any = null;

  constructor(id: string, hostId: string, mapId: MapId = MapId.BIRNIN_KANO, mode: GameModeType = GameModeType.ODOGWU_STASH) {
    this.id = id;
    this.hostId = hostId;
    this.mapId = mapId;
    this.mode = mode;
  }

  public get playerCount(): number {
    return this.clients.size;
  }

  public addPlayer(
    id: string,
    ws: WebSocket,
    name: string,
    rig: MovementRigType,
    weapon: WeaponId
  ): void {
    const isHost = this.clients.size === 0 || this.hostId === id;
    if (this.clients.size === 0) {
      this.hostId = id;
    }

    const lobbyPlayer: NetworkLobbyPlayer = {
      id,
      name: name || `Operative_${this.clients.size + 1}`,
      rig: rig || MovementRigType.BREACH_BOOSTER,
      primaryWeapon: weapon || WeaponId.RIFLE_XAG47,
      isHost,
      isReady: isHost, // Host defaults to ready
      ping: 0,
    };

    this.clients.set(id, { id, ws, lobby: lobbyPlayer });
    console.log(`[ROOM ${this.id}] Player joined: ${lobbyPlayer.name} (${id}). Total: ${this.clients.size}`);
    this.broadcastRoomState();
  }

  public removePlayer(id: string): void {
    const client = this.clients.get(id);
    if (!client) return;

    this.clients.delete(id);
    console.log(`[ROOM ${this.id}] Player left: ${client.lobby.name} (${id}). Remaining: ${this.clients.size}`);

    // If host left, elect new host if room still has players
    if (this.hostId === id && this.clients.size > 0) {
      const nextHost = this.clients.values().next().value;
      if (nextHost) {
        this.hostId = nextHost.id;
        nextHost.lobby.isHost = true;
        nextHost.lobby.isReady = true;
        console.log(`[ROOM ${this.id}] New host assigned: ${nextHost.lobby.name} (${nextHost.id})`);
      }
    }

    // Inform other players
    this.broadcast({
      type: NetMessageType.PLAYER_LEFT,
      payload: { playerId: id },
    });

    if (this.clients.size === 0) {
      this.stopSnapshotLoop();
    } else {
      this.broadcastRoomState();
    }
  }

  public setReady(id: string, ready: boolean): void {
    const client = this.clients.get(id);
    if (client) {
      client.lobby.isReady = ready;
      this.broadcastRoomState();
    }
  }

  public updateClientPing(id: string, ping: number): void {
    const client = this.clients.get(id);
    if (client) {
      client.lobby.ping = ping;
    }
  }

  public startMatch(hostId: string): boolean {
    if (this.hostId !== hostId || this.matchActive) return false;
    this.matchActive = true;

    console.log(`[ROOM ${this.id}] Match starting! Map: ${this.mapId}, Mode: ${this.mode}`);

    const payload: MatchStartingPayload = {
      countdownSec: 3,
      mapId: this.mapId,
      mode: this.mode,
      seed: Math.floor(Math.random() * 100000),
    };

    this.broadcast({
      type: NetMessageType.MATCH_STARTING,
      payload,
    });

    this.startSnapshotLoop();
    return true;
  }

  public handleClientTick(id: string, state: NetworkPlayerState): void {
    const client = this.clients.get(id);
    if (client) {
      client.lastState = state;
    }
  }

  public handleFireWeapon(payload: FireWeaponPayload, senderId: string): void {
    this.broadcast(
      {
        type: NetMessageType.FIRE_WEAPON,
        payload,
      },
      senderId
    );
  }

  public handleRigTrigger(payload: RigTriggerPayload, senderId: string): void {
    this.broadcast(
      {
        type: NetMessageType.RIG_TRIGGER,
        payload,
      },
      senderId
    );
  }

  public handleGroundSlam(payload: GroundSlamPayload, senderId: string): void {
    this.broadcast(
      {
        type: NetMessageType.GROUND_SLAM,
        payload,
      },
      senderId
    );
  }

  public handleDamageEvent(payload: DamageEventPayload): void {
    // Relay damage event to all players in the room for visual numbers + health update
    this.broadcast({
      type: NetMessageType.DAMAGE_EVENT,
      payload,
    });
  }

  public handleTileDestroy(payload: TileDestroyPayload, senderId: string): void {
    this.broadcast(
      {
        type: NetMessageType.TILE_DESTROY,
        payload,
      },
      senderId
    );
  }

  public handlePickupClaim(payload: PickupClaimPayload): void {
    this.broadcast({
      type: NetMessageType.PICKUP_CLAIM,
      payload,
    });
  }

  private startSnapshotLoop(): void {
    this.stopSnapshotLoop();
    // 35 Hz server snapshot broadcast (every 28.5ms) for buttery-smooth multiplayer tracking
    this.snapshotInterval = setInterval(() => {
      this.broadcastSnapshot();
    }, 1000 / 35);
  }

  private stopSnapshotLoop(): void {
    if (this.snapshotInterval) {
      clearInterval(this.snapshotInterval);
      this.snapshotInterval = null;
    }
  }

  private broadcastSnapshot(): void {
    if (this.clients.size === 0) return;

    this.tickCount++;
    const playerStates: NetworkPlayerState[] = [];

    for (const client of this.clients.values()) {
      if (client.lastState) {
        playerStates.push(client.lastState);
      }
    }

    const payload: ServerSnapshotPayload = {
      tick: this.tickCount,
      timestamp: Date.now(),
      players: playerStates,
    };

    this.broadcast({
      type: NetMessageType.SERVER_SNAPSHOT,
      payload,
    });
  }

  public broadcastRoomState(): void {
    const players: NetworkLobbyPlayer[] = Array.from(this.clients.values()).map(
      (c) => c.lobby
    );

    for (const client of this.clients.values()) {
      const payload: RoomStatePayload = {
        roomId: this.id,
        yourPlayerId: client.id,
        isHost: client.id === this.hostId,
        mapId: this.mapId,
        mode: this.mode,
        players,
        matchActive: this.matchActive,
      };

      this.send(client.ws, {
        type: NetMessageType.ROOM_STATE,
        payload,
      });
    }
  }

  public broadcast(msg: GenericNetMessage, excludePlayerId?: string): void {
    const raw = JSON.stringify(msg);
    for (const [id, client] of this.clients.entries()) {
      if (excludePlayerId && id === excludePlayerId) continue;
      if (client.ws.readyState === WebSocket.OPEN) {
        client.ws.send(raw);
      }
    }
  }

  private send(ws: WebSocket, msg: GenericNetMessage): void {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(msg));
    }
  }
}
