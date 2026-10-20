// server/index.ts
import http from "http";
import { WebSocketServer } from "ws";

// server/Room.ts
import { WebSocket } from "ws";
var Room = class {
  id;
  hostId;
  mapId;
  mode;
  matchActive = false;
  clients = /* @__PURE__ */ new Map();
  tickCount = 0;
  snapshotInterval = null;
  constructor(id, hostId, mapId = "BIRNIN_KANO" /* BIRNIN_KANO */, mode = "ODOGWU_STASH" /* ODOGWU_STASH */) {
    this.id = id;
    this.hostId = hostId;
    this.mapId = mapId;
    this.mode = mode;
  }
  get playerCount() {
    return this.clients.size;
  }
  addPlayer(id, ws, name, rig, weapon) {
    const isHost = this.clients.size === 0 || this.hostId === id;
    if (this.clients.size === 0) {
      this.hostId = id;
    }
    const lobbyPlayer = {
      id,
      name: name || `Operative_${this.clients.size + 1}`,
      rig: rig || "BREACH_BOOSTER" /* BREACH_BOOSTER */,
      primaryWeapon: weapon || "RIFLE_XAG47" /* RIFLE_XAG47 */,
      isHost,
      isReady: isHost,
      // Host defaults to ready
      ping: 0
    };
    this.clients.set(id, { id, ws, lobby: lobbyPlayer });
    console.log(`[ROOM ${this.id}] Player joined: ${lobbyPlayer.name} (${id}). Total: ${this.clients.size}`);
    this.broadcastRoomState();
  }
  removePlayer(id) {
    const client = this.clients.get(id);
    if (!client) return;
    this.clients.delete(id);
    console.log(`[ROOM ${this.id}] Player left: ${client.lobby.name} (${id}). Remaining: ${this.clients.size}`);
    if (this.hostId === id && this.clients.size > 0) {
      const nextHost = this.clients.values().next().value;
      if (nextHost) {
        this.hostId = nextHost.id;
        nextHost.lobby.isHost = true;
        nextHost.lobby.isReady = true;
        console.log(`[ROOM ${this.id}] New host assigned: ${nextHost.lobby.name} (${nextHost.id})`);
      }
    }
    this.broadcast({
      type: "PLAYER_LEFT" /* PLAYER_LEFT */,
      payload: { playerId: id }
    });
    if (this.clients.size === 0) {
      this.stopSnapshotLoop();
    } else {
      this.broadcastRoomState();
    }
  }
  setReady(id, ready) {
    const client = this.clients.get(id);
    if (client) {
      client.lobby.isReady = ready;
      this.broadcastRoomState();
    }
  }
  updateClientPing(id, ping) {
    const client = this.clients.get(id);
    if (client) {
      client.lobby.ping = ping;
    }
  }
  startMatch(hostId) {
    if (this.hostId !== hostId || this.matchActive) return false;
    this.matchActive = true;
    console.log(`[ROOM ${this.id}] Match starting! Map: ${this.mapId}, Mode: ${this.mode}`);
    const payload = {
      countdownSec: 3,
      mapId: this.mapId,
      mode: this.mode,
      seed: Math.floor(Math.random() * 1e5)
    };
    this.broadcast({
      type: "MATCH_STARTING" /* MATCH_STARTING */,
      payload
    });
    this.startSnapshotLoop();
    return true;
  }
  handleClientTick(id, state) {
    const client = this.clients.get(id);
    if (client) {
      client.lastState = state;
    }
  }
  handleFireWeapon(payload, senderId) {
    this.broadcast(
      {
        type: "FIRE_WEAPON" /* FIRE_WEAPON */,
        payload
      },
      senderId
    );
  }
  handleRigTrigger(payload, senderId) {
    this.broadcast(
      {
        type: "RIG_TRIGGER" /* RIG_TRIGGER */,
        payload
      },
      senderId
    );
  }
  handleGroundSlam(payload, senderId) {
    this.broadcast(
      {
        type: "GROUND_SLAM" /* GROUND_SLAM */,
        payload
      },
      senderId
    );
  }
  handleDamageEvent(payload) {
    this.broadcast({
      type: "DAMAGE_EVENT" /* DAMAGE_EVENT */,
      payload
    });
  }
  handleTileDestroy(payload, senderId) {
    this.broadcast(
      {
        type: "TILE_DESTROY" /* TILE_DESTROY */,
        payload
      },
      senderId
    );
  }
  handlePickupClaim(payload) {
    this.broadcast({
      type: "PICKUP_CLAIM" /* PICKUP_CLAIM */,
      payload
    });
  }
  startSnapshotLoop() {
    this.stopSnapshotLoop();
    this.snapshotInterval = setInterval(() => {
      this.broadcastSnapshot();
    }, 1e3 / 35);
  }
  stopSnapshotLoop() {
    if (this.snapshotInterval) {
      clearInterval(this.snapshotInterval);
      this.snapshotInterval = null;
    }
  }
  broadcastSnapshot() {
    if (this.clients.size === 0) return;
    this.tickCount++;
    const playerStates = [];
    for (const client of this.clients.values()) {
      if (client.lastState) {
        playerStates.push(client.lastState);
      }
    }
    const payload = {
      tick: this.tickCount,
      timestamp: Date.now(),
      players: playerStates
    };
    this.broadcast({
      type: "SERVER_SNAPSHOT" /* SERVER_SNAPSHOT */,
      payload
    });
  }
  broadcastRoomState() {
    const players = Array.from(this.clients.values()).map(
      (c) => c.lobby
    );
    for (const client of this.clients.values()) {
      const payload = {
        roomId: this.id,
        yourPlayerId: client.id,
        isHost: client.id === this.hostId,
        mapId: this.mapId,
        mode: this.mode,
        players,
        matchActive: this.matchActive
      };
      this.send(client.ws, {
        type: "ROOM_STATE" /* ROOM_STATE */,
        payload
      });
    }
  }
  broadcast(msg, excludePlayerId) {
    const raw = JSON.stringify(msg);
    for (const [id, client] of this.clients.entries()) {
      if (excludePlayerId && id === excludePlayerId) continue;
      if (client.ws.readyState === WebSocket.OPEN) {
        client.ws.send(raw);
      }
    }
  }
  send(ws, msg) {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(msg));
    }
  }
};

// server/index.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
var PORT = parseInt(process.env.PORT || "8080", 10);
var DIST_DIR = path.resolve(process.cwd(), "dist");
if (!fs.existsSync(DIST_DIR)) {
  DIST_DIR = path.resolve(__dirname, "../dist");
}
console.log(`[HTTP] Serving static web app from: ${DIST_DIR} (exists: ${fs.existsSync(DIST_DIR)})`);
var MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".glb": "model/gltf-binary",
  ".gltf": "model/gltf+json",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".ogg": "audio/ogg",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf"
};
var rooms = /* @__PURE__ */ new Map();
var clientToRoom = /* @__PURE__ */ new Map();
var clientSockets = /* @__PURE__ */ new Map();
var server = http.createServer((req, res) => {
  const reqUrl = req.url?.split("?")[0] || "/";
  if (reqUrl === "/health" || reqUrl === "/api/status") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      status: "online",
      game: "XAG: PROTOCOL ZERO",
      activeRooms: rooms.size,
      uptimeSeconds: Math.round(process.uptime())
    }));
    return;
  }
  if (fs.existsSync(DIST_DIR)) {
    let filePath = path.join(DIST_DIR, reqUrl === "/" ? "index.html" : reqUrl);
    if (!filePath.startsWith(DIST_DIR)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(DIST_DIR, "index.html");
    }
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || "application/octet-stream";
      const isAsset = reqUrl.startsWith("/assets/");
      res.writeHead(200, {
        "Content-Type": contentType,
        "Cache-Control": isAsset ? "public, max-age=31536000, immutable" : "no-cache"
      });
      fs.createReadStream(filePath).pipe(res);
      return;
    }
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    status: "online",
    game: "XAG: PROTOCOL ZERO",
    activeRooms: rooms.size,
    uptimeSeconds: Math.round(process.uptime())
  }));
});
var wss = new WebSocketServer({ server });
server.listen(PORT, "0.0.0.0", () => {
  console.log(`=======================================================`);
  console.log(`  [XAG PROTOCOL ZERO] Multiplayer Server Running on port ${PORT}`);
  console.log(`=======================================================`);
});
function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return rooms.has(code) ? generateRoomCode() : code;
}
function generatePlayerId() {
  return "p_" + Math.random().toString(36).substring(2, 9);
}
wss.on("connection", (ws) => {
  try {
    const rawSocket = ws._socket;
    if (rawSocket && typeof rawSocket.setNoDelay === "function") {
      rawSocket.setNoDelay(true);
    }
  } catch (e) {
  }
  const playerId = generatePlayerId();
  clientSockets.set(playerId, ws);
  console.log(`[NET] New client connected: ${playerId}`);
  ws.on("message", (data) => {
    try {
      const msg = JSON.parse(data.toString());
      handleMessage(playerId, ws, msg);
    } catch (err) {
      console.error(`[NET] Error parsing message from ${playerId}:`, err);
    }
  });
  ws.on("close", () => {
    handleDisconnect(playerId);
  });
  ws.on("error", (err) => {
    console.error(`[NET] Socket error for ${playerId}:`, err);
  });
});
function handleMessage(playerId, ws, msg) {
  const currentRoomId = clientToRoom.get(playerId);
  const room = currentRoomId ? rooms.get(currentRoomId) : null;
  switch (msg.type) {
    case "JOIN_ROOM" /* JOIN_ROOM */: {
      const payload = msg.payload;
      let targetRoomId = (payload.roomId || "").toUpperCase().trim();
      if (!targetRoomId) {
        targetRoomId = generateRoomCode();
        const newRoom = new Room(targetRoomId, playerId, payload.mapId, payload.mode);
        rooms.set(targetRoomId, newRoom);
        console.log(`[NET] Created new room ${targetRoomId} for host ${playerId}`);
      }
      const targetRoom = rooms.get(targetRoomId);
      if (!targetRoom) {
        ws.send(
          JSON.stringify({
            type: "ERROR" /* ERROR */,
            payload: { message: `Room ${targetRoomId} not found!` }
          })
        );
        return;
      }
      if (targetRoom.playerCount >= 8) {
        ws.send(
          JSON.stringify({
            type: "ERROR" /* ERROR */,
            payload: { message: `Room ${targetRoomId} is full!` }
          })
        );
        return;
      }
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
    case "SET_READY" /* SET_READY */: {
      if (room) {
        room.setReady(playerId, !!msg.payload?.ready);
      }
      break;
    }
    case "START_MATCH" /* START_MATCH */: {
      if (room) {
        const started = room.startMatch(playerId);
        if (!started) {
          ws.send(
            JSON.stringify({
              type: "ERROR" /* ERROR */,
              payload: { message: "Only the room host can start the match." }
            })
          );
        }
      }
      break;
    }
    case "CLIENT_TICK" /* CLIENT_TICK */: {
      if (room && msg.payload?.state) {
        room.handleClientTick(playerId, msg.payload.state);
      }
      break;
    }
    case "FIRE_WEAPON" /* FIRE_WEAPON */: {
      if (room && msg.payload) {
        room.handleFireWeapon(msg.payload, playerId);
      }
      break;
    }
    case "RIG_TRIGGER" /* RIG_TRIGGER */: {
      if (room && msg.payload) {
        room.handleRigTrigger(msg.payload, playerId);
      }
      break;
    }
    case "GROUND_SLAM" /* GROUND_SLAM */: {
      if (room && msg.payload) {
        room.handleGroundSlam(msg.payload, playerId);
      }
      break;
    }
    case "DAMAGE_EVENT" /* DAMAGE_EVENT */: {
      if (room && msg.payload) {
        room.handleDamageEvent(msg.payload);
      }
      break;
    }
    case "TILE_DESTROY" /* TILE_DESTROY */: {
      if (room && msg.payload) {
        room.handleTileDestroy(msg.payload, playerId);
      }
      break;
    }
    case "PICKUP_CLAIM" /* PICKUP_CLAIM */: {
      if (room && msg.payload) {
        room.handlePickupClaim(msg.payload);
      }
      break;
    }
    case "PING" /* PING */: {
      ws.send(
        JSON.stringify({
          type: "PONG" /* PONG */,
          payload: {
            clientTimestamp: msg.payload?.timestamp || Date.now(),
            serverTimestamp: Date.now()
          }
        })
      );
      break;
    }
    default:
      console.warn(`[NET] Unhandled message type: ${msg.type}`);
  }
}
function handleDisconnect(playerId) {
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
