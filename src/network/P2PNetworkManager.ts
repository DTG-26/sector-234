import { Peer, DataConnection } from 'peerjs';
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

export class P2PNetworkManager {
  private static instance: P2PNetworkManager | null = null;

  public peer: Peer | null = null;
  public hostConnection: DataConnection | null = null; // Used when this client is a peer
  public clientConnections: Map<string, DataConnection> = new Map(); // Used when this client is host

  public isHost: boolean = false;
  public isConnected: boolean = false;
  public currentRoomId: string | null = null;
  public localPlayerId: string = 'player_local';
  public localPlayerName: string = 'Operative_01';
  public ping: number = 0;
  public isLocalHotspot: boolean = false;
  public cachedLobbyPlayers: NetworkLobbyPlayer[] = [];

  // Match State (Host Authoritative)
  public mapId: MapId = MapId.BIRNIN_KANO;
  public mode: GameModeType = GameModeType.TEAM_DEATHMATCH;
  public fillBots: boolean = true;
  public teamSize: number = 3;
  private isMatchRunning: boolean = false;
  private hostSnapshotInterval: any = null;
  private pingInterval: any = null;
  private clientTickStates: Map<string, NetworkPlayerState> = new Map();
  private hostPlayerState: NetworkPlayerState | null = null;
  private snapshotTick: number = 0;
  public destroyedTilesHistory: TileDestroyPayload[] = [];

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
  public onPingUpdate?: (ping: number, isLocal: boolean) => void;

  public static getInstance(): P2PNetworkManager {
    if (!P2PNetworkManager.instance) {
      P2PNetworkManager.instance = new P2PNetworkManager();
    }
    return P2PNetworkManager.instance;
  }

  // Generate clean 4-digit room code (1000 - 9999)
  public static generateRoomCode(): string {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  public static getFullPeerId(code: string): string {
    return `xag-sector234-room-${code}`;
  }

  private getPeerConfig() {
    return {
      config: {
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:stun1.l.google.com:19302' },
          { urls: 'stun:stun2.l.google.com:19302' },
        ],
        sdpSemantics: 'unified-plan',
      },
    };
  }

  // 1. HOST MATCH (Authoritative WebRTC Host)
  public hostMatch(
    playerName: string,
    rig: MovementRigType,
    weapon: WeaponId,
    mapId: MapId,
    mode: GameModeType,
    fillBots: boolean = true,
    teamSize: number = 3
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      this.leaveRoom();

      const code = P2PNetworkManager.generateRoomCode();
      const hostPeerId = P2PNetworkManager.getFullPeerId(code);
      this.isHost = true;
      this.currentRoomId = code;
      this.localPlayerId = `host_${Math.random().toString(36).substring(2, 7)}`;
      this.localPlayerName = playerName || 'Commander_Host';
      this.mapId = mapId;
      this.mode = mode;
      this.fillBots = fillBots;
      this.teamSize = teamSize;

      this.cachedLobbyPlayers = [
        {
          id: this.localPlayerId,
          name: this.localPlayerName,
          rig,
          primaryWeapon: weapon,
          isHost: true,
          isReady: true,
          ping: 0,
        },
      ];

      try {
        this.peer = new Peer(hostPeerId, this.getPeerConfig());
      } catch (err) {
        console.error('[P2P] Peer creation failed:', err);
        reject(err);
        return;
      }

      this.peer.on('open', (id) => {
        console.log(`[P2P HOST] Arena Host online with ID: ${id} (Code: ${code})`);
        this.isConnected = true;
        this.broadcastRoomState();
        resolve(code);
      });

      this.peer.on('connection', (conn) => {
        console.log(`[P2P HOST] Inbound client connection from: ${conn.peer}`);
        this.setupHostConnection(conn);
      });

      this.peer.on('error', (err: any) => {
        console.error('[P2P HOST] Peer error:', err);
        if (err.type === 'unavailable-id') {
          // Room ID collision (rare), retry with new code
          this.hostMatch(playerName, rig, weapon, mapId, mode, fillBots, teamSize)
            .then(resolve)
            .catch(reject);
          return;
        }
        if (this.onError) this.onError(err.message || 'Host connection error');
        reject(err);
      });
    });
  }

  private setupHostConnection(conn: DataConnection): void {
    conn.on('open', () => {
      console.log(`[P2P HOST] Data channel established with ${conn.peer}`);
      this.clientConnections.set(conn.peer, conn);

      // Send immediate room state to newly connected client
      conn.send({
        type: NetMessageType.ROOM_STATE,
        payload: this.getRoomStatePayload(conn.peer),
      });

      // Synchronize all previously destroyed building tiles so the new player sees identical terrain
      if (this.destroyedTilesHistory.length > 0) {
        this.destroyedTilesHistory.forEach((tile) => {
          conn.send({
            type: NetMessageType.TILE_DESTROY,
            payload: tile,
          });
        });
      }
    });

    conn.on('data', (raw: any) => {
      this.handleHostReceivedData(conn, raw);
    });

    conn.on('close', () => {
      console.log(`[P2P HOST] Client disconnected: ${conn.peer}`);
      this.clientConnections.delete(conn.peer);
      const leavingIdx = this.cachedLobbyPlayers.findIndex((p) => p.id === conn.peer);
      if (leavingIdx !== -1) {
        this.cachedLobbyPlayers.splice(leavingIdx, 1);
      }
      this.clientTickStates.delete(conn.peer);
      if (this.onPlayerLeft) this.onPlayerLeft(conn.peer);
      this.broadcastRoomState();
    });

    conn.on('error', (err) => {
      console.warn(`[P2P HOST] Connection error with ${conn.peer}:`, err);
    });
  }

  // 2. JOIN MATCH (Client WebRTC Connection via 4-Digit Code)
  public joinMatch(
    code: string,
    playerName: string,
    rig: MovementRigType,
    weapon: WeaponId
  ): Promise<boolean> {
    return new Promise((resolve) => {
      this.leaveRoom();

      const sanitizedCode = code.trim().replace(/\D/g, '').substring(0, 4);
      if (sanitizedCode.length !== 4) {
        if (this.onError) this.onError('Please enter a valid 4-digit room code');
        resolve(false);
        return;
      }

      this.isHost = false;
      this.currentRoomId = sanitizedCode;
      this.localPlayerId = `client_${Math.random().toString(36).substring(2, 7)}`;
      this.localPlayerName = playerName || 'Operative';

      const hostPeerId = P2PNetworkManager.getFullPeerId(sanitizedCode);
      const clientPeerId = `xag-client-${this.localPlayerId}`;

      try {
        this.peer = new Peer(clientPeerId, this.getPeerConfig());
      } catch (err) {
        console.error('[P2P CLIENT] Peer creation failed:', err);
        resolve(false);
        return;
      }

      let connectionTimeout = setTimeout(() => {
        if (!this.isConnected) {
          console.warn('[P2P CLIENT] Connection timeout trying to reach host:', hostPeerId);
          if (this.onError) this.onError(`Could not reach Host room ${sanitizedCode}. Check code or same Wi-Fi.`);
          resolve(false);
        }
      }, 9000);

      this.peer.on('open', (id) => {
        console.log(`[P2P CLIENT] Peer ready (${id}), connecting to host: ${hostPeerId}...`);

        // Connect with unreliable, unordered UDP-style speed
        const conn = this.peer!.connect(hostPeerId, {
          reliable: false, // UDP-style real-time delivery without TCP HOL blocking
          serialization: 'binary', // Compact binary packets
        });

        this.hostConnection = conn;

        conn.on('open', () => {
          clearTimeout(connectionTimeout);
          console.log(`[P2P CLIENT] Connected directly to host: ${hostPeerId}!`);
          this.isConnected = true;

          // Send JOIN_ROOM payload
          conn.send({
            type: NetMessageType.JOIN_ROOM,
            payload: {
              playerName: this.localPlayerName,
              rig,
              weapon,
              mapId: this.mapId,
              mode: this.mode,
            } as JoinRoomPayload,
          });

          // Start ping heartbeat
          this.startPingMeasurement();
          resolve(true);
        });

        conn.on('data', (raw: any) => {
          this.handleClientReceivedData(raw);
        });

        conn.on('close', () => {
          console.log('[P2P CLIENT] Disconnected from host');
          this.isConnected = false;
          if (this.onError) this.onError('Host ended the match or closed the room');
        });

        conn.on('error', (err) => {
          console.error('[P2P CLIENT] Connection error:', err);
          if (this.onError) this.onError(`Connection failed: ${err}`);
        });
      });

      this.peer.on('error', (err: any) => {
        console.error('[P2P CLIENT] Peer error:', err);
        clearTimeout(connectionTimeout);
        if (this.onError) this.onError(`Connection error: ${err.type || err}`);
        resolve(false);
      });
    });
  }

  // 3. HOST INCOMING DATA ROUTER
  private handleHostReceivedData(conn: DataConnection, raw: any): void {
    if (!raw) return;

    // Check for compact array tick: [PacketCode.TICK, id, x, y, vx, vy, aimAngle, flags, weapon, hp, armor, fuel]
    if (Array.isArray(raw) && raw[0] === 3) {
      this.unpackClientTick(raw);
      return;
    }

    const msg = raw as GenericNetMessage;

    // Heartbeat ping/pong for RTT measurement
    if (msg.type === NetMessageType.PING) {
      conn.send({
        type: NetMessageType.PONG,
        payload: { time: msg.payload?.time || Date.now() },
      });
      return;
    }

    if (msg.type === NetMessageType.JOIN_ROOM) {
      const p = msg.payload as JoinRoomPayload;
      // Add or update lobby player
      const existing = this.cachedLobbyPlayers.find((lp) => lp.id === conn.peer);
      if (!existing) {
        this.cachedLobbyPlayers.push({
          id: conn.peer,
          name: p.playerName || 'Operative',
          rig: p.rig,
          primaryWeapon: p.weapon,
          isHost: false,
          isReady: false,
          ping: 10,
        });
      }
      this.broadcastRoomState();
      return;
    }

    if (msg.type === NetMessageType.SET_READY) {
      const player = this.cachedLobbyPlayers.find((p) => p.id === conn.peer);
      if (player) {
        player.isReady = !!msg.payload?.isReady;
        this.broadcastRoomState();
      }
      return;
    }

    if (msg.type === NetMessageType.CLIENT_TICK) {
      const tick = msg.payload as ClientTickPayload;
      if (tick && tick.state) {
        this.clientTickStates.set(tick.state.id, tick.state);
      }
      return;
    }

    // Gameplay Actions: Relay to all other clients and notify host locally
    if (msg.type === NetMessageType.FIRE_WEAPON) {
      const fire = msg.payload as FireWeaponPayload;
      if (this.onFireWeapon) this.onFireWeapon(fire);
      this.broadcastExcept(conn.peer, msg);
      return;
    }

    if (msg.type === NetMessageType.RIG_TRIGGER) {
      const rig = msg.payload as RigTriggerPayload;
      if (this.onRigTrigger) this.onRigTrigger(rig);
      this.broadcastExcept(conn.peer, msg);
      return;
    }

    if (msg.type === NetMessageType.GROUND_SLAM) {
      const slam = msg.payload as GroundSlamPayload;
      if (this.onGroundSlam) this.onGroundSlam(slam);
      this.broadcastExcept(conn.peer, msg);
      return;
    }

    if (msg.type === NetMessageType.DAMAGE_EVENT) {
      const dmg = msg.payload as DamageEventPayload;
      if (this.onDamageEvent) this.onDamageEvent(dmg);
      this.broadcastExcept(conn.peer, msg);
      return;
    }

    if (msg.type === NetMessageType.TILE_DESTROY) {
      const tile = msg.payload as TileDestroyPayload;
      this.destroyedTilesHistory.push(tile);
      if (this.onTileDestroy) this.onTileDestroy(tile);
      this.broadcastExcept(conn.peer, msg);
      return;
    }

    if (msg.type === NetMessageType.PICKUP_CLAIM) {
      const pk = msg.payload as PickupClaimPayload;
      if (this.onPickupClaim) this.onPickupClaim(pk);
      this.broadcastExcept(conn.peer, msg);
      return;
    }
  }

  // 4. CLIENT INCOMING DATA ROUTER
  private handleClientReceivedData(raw: any): void {
    if (!raw) return;

    // Check for compact array snapshot: [PacketCode.SNAPSHOT, tick, timestamp, [[...player1], [...player2]]]
    if (Array.isArray(raw) && raw[0] === 4) {
      this.unpackServerSnapshot(raw);
      return;
    }

    const msg = raw as GenericNetMessage;

    if (msg.type === NetMessageType.PONG) {
      const sentTime = msg.payload?.time || Date.now();
      const rtt = Math.max(1, Date.now() - sentTime);
      this.ping = rtt;
      this.isLocalHotspot = rtt <= 15;
      if (this.onPingUpdate) this.onPingUpdate(this.ping, this.isLocalHotspot);
      return;
    }

    if (msg.type === NetMessageType.ROOM_STATE) {
      const state = msg.payload as RoomStatePayload;
      this.cachedLobbyPlayers = state.players || [];
      this.mapId = state.mapId;
      this.mode = state.mode;
      this.fillBots = state.fillBots;
      if (this.onRoomState) this.onRoomState(state);
      return;
    }

    if (msg.type === NetMessageType.MATCH_STARTING) {
      const startData = msg.payload as MatchStartingPayload;
      this.isMatchRunning = true;
      if (this.onMatchStarting) this.onMatchStarting(startData);
      return;
    }

    if (msg.type === NetMessageType.SERVER_SNAPSHOT) {
      const snapshot = msg.payload as ServerSnapshotPayload;
      if (this.onSnapshot) this.onSnapshot(snapshot);
      return;
    }

    if (msg.type === NetMessageType.FIRE_WEAPON) {
      const fire = msg.payload as FireWeaponPayload;
      if (this.onFireWeapon) this.onFireWeapon(fire);
      return;
    }

    if (msg.type === NetMessageType.RIG_TRIGGER) {
      const rig = msg.payload as RigTriggerPayload;
      if (this.onRigTrigger) this.onRigTrigger(rig);
      return;
    }

    if (msg.type === NetMessageType.GROUND_SLAM) {
      const slam = msg.payload as GroundSlamPayload;
      if (this.onGroundSlam) this.onGroundSlam(slam);
      return;
    }

    if (msg.type === NetMessageType.DAMAGE_EVENT) {
      const dmg = msg.payload as DamageEventPayload;
      if (this.onDamageEvent) this.onDamageEvent(dmg);
      return;
    }

    if (msg.type === NetMessageType.TILE_DESTROY) {
      const tile = msg.payload as TileDestroyPayload;
      if (this.onTileDestroy) this.onTileDestroy(tile);
      return;
    }

    if (msg.type === NetMessageType.PICKUP_CLAIM) {
      const pk = msg.payload as PickupClaimPayload;
      if (this.onPickupClaim) this.onPickupClaim(pk);
      return;
    }

    if (msg.type === NetMessageType.PLAYER_LEFT) {
      const pId = msg.payload?.playerId;
      if (pId && this.onPlayerLeft) this.onPlayerLeft(pId);
      return;
    }
  }

  // 5. COMPACT BINARY PACKET ENCODING & DECODING
  private packPlayerState(s: NetworkPlayerState): any[] {
    const flags =
      (s.isJetFlying ? 1 : 0) |
      (s.isGrounded ? 2 : 0) |
      (s.isSliding ? 4 : 0) |
      (s.isDead ? 8 : 0) |
      (s.facingRight ? 16 : 0);

    const teamCode = s.team === 'blue' ? 1 : (s.team === 'red' ? 2 : 0);
    return [
      s.id,
      Math.round(s.x * 100) / 100,
      Math.round(s.y * 100) / 100,
      Math.round(s.vx * 10) / 10,
      Math.round(s.vy * 10) / 10,
      Number(s.aimAngle.toFixed(2)),
      flags,
      s.activeWeapon,
      Math.round(s.hp),
      Math.round(s.armor),
      Math.round(s.fuel),
      teamCode,
    ];
  }

  private unpackPlayerState(arr: any[]): NetworkPlayerState {
    const flags = arr[6] || 0;
    const teamCode = arr[11] || 0;
    const team: 'blue' | 'red' | 'none' = teamCode === 1 ? 'blue' : (teamCode === 2 ? 'red' : 'none');
    return {
      id: arr[0],
      x: arr[1],
      y: arr[2],
      vx: arr[3],
      vy: arr[4],
      aimAngle: arr[5],
      facingRight: (flags & 16) !== 0,
      isJetFlying: (flags & 1) !== 0,
      isGrounded: (flags & 2) !== 0,
      isSliding: (flags & 4) !== 0,
      isDead: (flags & 8) !== 0,
      activeWeapon: arr[7] as WeaponId,
      hp: arr[8],
      armor: arr[9],
      fuel: arr[10],
      team,
      timestamp: Date.now(),
    };
  }

  private unpackClientTick(raw: any[]): void {
    const playerArr = raw.slice(1);
    const state = this.unpackPlayerState(playerArr);
    this.clientTickStates.set(state.id, state);

    // Deliver client's tick immediately to host local simulation (0ms host reaction)
    if (this.onSnapshot) {
      this.onSnapshot({
        tick: this.snapshotTick,
        timestamp: Date.now(),
        players: [state],
      });
    }
  }

  private unpackServerSnapshot(raw: any[]): void {
    const tick = raw[1];
    const timestamp = raw[2];
    const playersArr = raw[3] as any[][];
    const players: NetworkPlayerState[] = playersArr.map((p) => this.unpackPlayerState(p));

    if (this.onSnapshot) {
      this.onSnapshot({
        tick,
        timestamp,
        players,
      });
    }
  }

  // 6. SEND CLIENT TICK (Every 33ms / 30Hz from main loop)
  public sendTick(state: NetworkPlayerState): void {
    if (this.isHost) {
      this.hostPlayerState = state;
      return;
    }

    if (!this.isConnected || !this.hostConnection || !this.hostConnection.open) return;

    // Send compact array format: [3, ...packed]
    const packed = this.packPlayerState(state);
    this.hostConnection.send([3, ...packed]);
  }

  // Authoritative Host Broadcast Method called from main.ts with all players & bots
  public broadcastHostSnapshot(allStates: NetworkPlayerState[]): void {
    if (!this.isHost || this.clientConnections.size === 0) return;
    this.snapshotTick++;

    const packedPlayers = allStates.map((s) => this.packPlayerState(s));
    const packet = [4, this.snapshotTick, Date.now(), packedPlayers];

    this.clientConnections.forEach((conn) => {
      if (conn.open) {
        conn.send(packet);
      }
    });
  }

  // 7. HOST 30Hz (33ms) AUTHORITATIVE BROADCAST FALLBACK LOOP
  public startHostBroadcastLoop(): void {
    if (this.hostSnapshotInterval) clearInterval(this.hostSnapshotInterval);

    this.snapshotTick = 0;
    this.hostSnapshotInterval = setInterval(() => {
      if (!this.isHost || !this.isMatchRunning) return;

      this.snapshotTick++;
      const allStates: NetworkPlayerState[] = [];

      if (this.hostPlayerState) {
        allStates.push(this.hostPlayerState);
      }

      this.clientTickStates.forEach((st) => {
        allStates.push(st);
      });

      // Encode as compact array: [4, tick, timestamp, packedPlayers]
      const packedPlayers = allStates.map((s) => this.packPlayerState(s));
      const packet = [4, this.snapshotTick, Date.now(), packedPlayers];

      this.clientConnections.forEach((conn) => {
        if (conn.open) {
          conn.send(packet);
        }
      });
    }, 33); // 30Hz (every 33ms)
  }

  // 8. ACTIONS BROADCAST
  public sendFire(fire: FireWeaponPayload): void {
    if (this.isHost) {
      this.broadcastAll({ type: NetMessageType.FIRE_WEAPON, payload: fire });
      if (this.onFireWeapon) this.onFireWeapon(fire);
    } else if (this.hostConnection && this.hostConnection.open) {
      this.hostConnection.send({ type: NetMessageType.FIRE_WEAPON, payload: fire });
    }
  }

  public sendRig(rig: RigTriggerPayload): void {
    if (this.isHost) {
      this.broadcastAll({ type: NetMessageType.RIG_TRIGGER, payload: rig });
      if (this.onRigTrigger) this.onRigTrigger(rig);
    } else if (this.hostConnection && this.hostConnection.open) {
      this.hostConnection.send({ type: NetMessageType.RIG_TRIGGER, payload: rig });
    }
  }

  public sendRigTrigger(rig: RigTriggerPayload): void {
    this.sendRig(rig);
  }

  public sendGroundSlam(slam: GroundSlamPayload): void {
    if (this.isHost) {
      this.broadcastAll({ type: NetMessageType.GROUND_SLAM, payload: slam });
      if (this.onGroundSlam) this.onGroundSlam(slam);
    } else if (this.hostConnection && this.hostConnection.open) {
      this.hostConnection.send({ type: NetMessageType.GROUND_SLAM, payload: slam });
    }
  }

  public sendDamage(dmg: DamageEventPayload): void {
    if (this.isHost) {
      this.broadcastAll({ type: NetMessageType.DAMAGE_EVENT, payload: dmg });
      if (this.onDamageEvent) this.onDamageEvent(dmg);
    } else if (this.hostConnection && this.hostConnection.open) {
      this.hostConnection.send({ type: NetMessageType.DAMAGE_EVENT, payload: dmg });
    }
  }

  public sendTileDestroy(tile: TileDestroyPayload): void {
    if (this.isHost) {
      this.destroyedTilesHistory.push(tile);
      this.broadcastAll({ type: NetMessageType.TILE_DESTROY, payload: tile });
    } else if (this.hostConnection && this.hostConnection.open) {
      this.hostConnection.send({ type: NetMessageType.TILE_DESTROY, payload: tile });
    }
  }

  public sendPickupClaim(claim: PickupClaimPayload): void {
    if (this.isHost) {
      this.broadcastAll({ type: NetMessageType.PICKUP_CLAIM, payload: claim });
      if (this.onPickupClaim) this.onPickupClaim(claim);
    } else if (this.hostConnection && this.hostConnection.open) {
      this.hostConnection.send({ type: NetMessageType.PICKUP_CLAIM, payload: claim });
    }
  }

  // 9. LOBBY COMMANDS
  public setReady(isReady: boolean): void {
    if (this.isHost) {
      const hostP = this.cachedLobbyPlayers.find((p) => p.isHost);
      if (hostP) hostP.isReady = isReady;
      this.broadcastRoomState();
    } else if (this.hostConnection && this.hostConnection.open) {
      this.hostConnection.send({
        type: NetMessageType.SET_READY,
        payload: { isReady },
      });
    }
  }

  public toggleBots(fillBots: boolean): void {
    if (!this.isHost) return;
    this.fillBots = fillBots;
    this.broadcastRoomState();
  }

  public startMatch(): void {
    if (!this.isHost) return;
    this.isMatchRunning = true;

    const payload: MatchStartingPayload = {
      countdownSec: 0,
      mapId: this.mapId,
      mode: this.mode,
      seed: Math.floor(Math.random() * 100000),
      fillBots: this.fillBots,
      teamSize: this.teamSize,
    };

    this.broadcastAll({
      type: NetMessageType.MATCH_STARTING,
      payload,
    });

    if (this.onMatchStarting) this.onMatchStarting(payload);
    this.startHostBroadcastLoop();
  }

  private broadcastAll(msg: any): void {
    this.clientConnections.forEach((conn) => {
      if (conn.open) conn.send(msg);
    });
  }

  private broadcastExcept(excludePeerId: string, msg: any): void {
    this.clientConnections.forEach((conn, peerId) => {
      if (peerId !== excludePeerId && conn.open) {
        conn.send(msg);
      }
    });
  }

  private getRoomStatePayload(forPlayerId?: string): RoomStatePayload {
    return {
      roomId: this.currentRoomId || '2340',
      yourPlayerId: forPlayerId || this.localPlayerId,
      isHost: this.isHost,
      mapId: this.mapId,
      mode: this.mode,
      players: this.cachedLobbyPlayers,
      matchActive: this.isMatchRunning,
      fillBots: this.fillBots,
      teamSize: this.teamSize,
    };
  }

  private broadcastRoomState(): void {
    if (!this.isHost) return;

    this.clientConnections.forEach((conn, peerId) => {
      if (conn.open) {
        conn.send({
          type: NetMessageType.ROOM_STATE,
          payload: this.getRoomStatePayload(peerId),
        });
      }
    });

    if (this.onRoomState) {
      this.onRoomState(this.getRoomStatePayload(this.localPlayerId));
    }
  }

  private startPingMeasurement(): void {
    if (this.pingInterval) clearInterval(this.pingInterval);
    this.pingInterval = setInterval(() => {
      if (this.hostConnection && this.hostConnection.open) {
        this.hostConnection.send({
          type: NetMessageType.PING,
          payload: { time: Date.now() },
        });
      }
    }, 1200);
  }

  public leaveRoom(): void {
    this.isMatchRunning = false;
    this.isConnected = false;
    this.isHost = false;
    this.currentRoomId = null;

    if (this.hostSnapshotInterval) {
      clearInterval(this.hostSnapshotInterval);
      this.hostSnapshotInterval = null;
    }
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }

    if (this.hostConnection) {
      try {
        this.hostConnection.close();
      } catch (e) {}
      this.hostConnection = null;
    }

    this.clientConnections.forEach((conn) => {
      try {
        conn.close();
      } catch (e) {}
    });
    this.clientConnections.clear();
    this.clientTickStates.clear();
    this.hostPlayerState = null;

    if (this.peer) {
      try {
        this.peer.destroy();
      } catch (e) {}
      this.peer = null;
    }
  }
}
