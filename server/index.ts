import http from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { Room } from './Room.ts';
import type {
  GenericNetMessage,
  JoinRoomPayload,
} from '../src/network/NetworkTypes.ts';
import { NetMessageType } from '../src/network/NetworkTypes.ts';

const PORT = parseInt(process.env.PORT || '8080', 10);

const rooms: Map<string, Room> = new Map();
const clientToRoom: Map<string, string> = new Map();
const clientSockets: Map<string, WebSocket> = new Map();

// HTTP server for Railway / Render healthchecks
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'online',
    game: 'XAG: PROTOCOL ZERO',
    activeRooms: rooms.size,
    uptimeSeconds: Math.round(process.uptime()),
  }));
});

const wss = new WebSocketServer({ server });

server.listen(PORT, '0.0.0.0', () => {
  console.log(`=======================================================`);
  console.log(`  [XAG PROTOCOL ZERO] Multiplayer Server Running on port ${PORT}`);
  console.log(`=======================================================`);
});


function generateRoomCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return rooms.has(code) ? generateRoomCode() : code;
}

function generatePlayerId(): string {
  return 'p_' + Math.random().toString(36).substring(2, 9);
}

wss.on('connection', (ws: WebSocket) => {
  const playerId = generatePlayerId();
  clientSockets.set(playerId, ws);

  console.log(`[NET] New client connected: ${playerId}`);

  ws.on('message', (data: string) => {
    try {
      const msg: GenericNetMessage = JSON.parse(data.toString());
      handleMessage(playerId, ws, msg);
    } catch (err) {
      console.error(`[NET] Error parsing message from ${playerId}:`, err);
    }
  });

  ws.on('close', () => {
    handleDisconnect(playerId);
  });

  ws.on('error', (err) => {
    console.error(`[NET] Socket error for ${playerId}:`, err);
  });
});

function handleMessage(playerId: string, ws: WebSocket, msg: GenericNetMessage): void {
  const currentRoomId = clientToRoom.get(playerId);
  const room = currentRoomId ? rooms.get(currentRoomId) : null;

  switch (msg.type) {
    case NetMessageType.JOIN_ROOM: {
      const payload: JoinRoomPayload = msg.payload;
      let targetRoomId = (payload.roomId || '').toUpperCase().trim();

      if (!targetRoomId) {
        // Create new room
        targetRoomId = generateRoomCode();
        const newRoom = new Room(targetRoomId, playerId, payload.mapId, payload.mode);
        rooms.set(targetRoomId, newRoom);
        console.log(`[NET] Created new room ${targetRoomId} for host ${playerId}`);
      }

      const targetRoom = rooms.get(targetRoomId);
      if (!targetRoom) {
        ws.send(
          JSON.stringify({
            type: NetMessageType.ERROR,
            payload: { message: `Room ${targetRoomId} not found!` },
          })
        );
        return;
      }

      if (targetRoom.playerCount >= 8) {
        ws.send(
          JSON.stringify({
            type: NetMessageType.ERROR,
            payload: { message: `Room ${targetRoomId} is full!` },
          })
        );
        return;
      }

      // If already in a room, leave it first
      if (currentRoomId && currentRoomId !== targetRoomId) {
        handleDisconnect(playerId);
      }

      clientToRoom.set(playerId, targetRoomId);
      targetRoom.addPlayer(
        playerId,
        ws,
        payload.playerName,
        payload.rig,
        payload.weapon
      );
      break;
    }

    case NetMessageType.SET_READY: {
      if (room) {
        room.setReady(playerId, !!msg.payload?.ready);
      }
      break;
    }

    case NetMessageType.START_MATCH: {
      if (room) {
        const started = room.startMatch(playerId);
        if (!started) {
          ws.send(
            JSON.stringify({
              type: NetMessageType.ERROR,
              payload: { message: 'Only the room host can start the match.' },
            })
          );
        }
      }
      break;
    }

    case NetMessageType.CLIENT_TICK: {
      if (room && msg.payload?.state) {
        room.handleClientTick(playerId, msg.payload.state);
      }
      break;
    }

    case NetMessageType.FIRE_WEAPON: {
      if (room && msg.payload) {
        room.handleFireWeapon(msg.payload, playerId);
      }
      break;
    }

    case NetMessageType.RIG_TRIGGER: {
      if (room && msg.payload) {
        room.handleRigTrigger(msg.payload, playerId);
      }
      break;
    }

    case NetMessageType.GROUND_SLAM: {
      if (room && msg.payload) {
        room.handleGroundSlam(msg.payload, playerId);
      }
      break;
    }

    case NetMessageType.DAMAGE_EVENT: {
      if (room && msg.payload) {
        room.handleDamageEvent(msg.payload);
      }
      break;
    }

    case NetMessageType.TILE_DESTROY: {
      if (room && msg.payload) {
        room.handleTileDestroy(msg.payload, playerId);
      }
      break;
    }

    case NetMessageType.PICKUP_CLAIM: {
      if (room && msg.payload) {
        room.handlePickupClaim(msg.payload);
      }
      break;
    }

    case NetMessageType.PING: {
      ws.send(
        JSON.stringify({
          type: NetMessageType.PONG,
          payload: {
            clientTimestamp: msg.payload?.timestamp || Date.now(),
            serverTimestamp: Date.now(),
          },
        })
      );
      break;
    }

    default:
      console.warn(`[NET] Unhandled message type: ${msg.type}`);
  }
}

function handleDisconnect(playerId: string): void {
  const roomId = clientToRoom.get(playerId);
  if (roomId) {
    const room = rooms.get(roomId);
    if (room) {
      room.removePlayer(playerId);
      if (room.playerCount === 0) {
        rooms.delete(roomId);
        console.log(`[NET] Room ${roomId} closed (all players left)`);
      }
    }
    clientToRoom.delete(playerId);
  }
  clientSockets.delete(playerId);
  console.log(`[NET] Client disconnected: ${playerId}`);
}
