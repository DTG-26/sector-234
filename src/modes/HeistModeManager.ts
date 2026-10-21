import * as THREE from 'three';
import { AnnouncerEvent, HeistAct, MapId } from '../config/types';
import { Player } from '../entities/Player';
import { HypeAnnouncer } from '../ui/HypeAnnouncer';
import { OperativeService } from '../services/OperativeService';
import { ParticleSystem3D } from '../systems/ParticleSystem3D';
import { TileMap3D } from '../world/TileMap3D';

export class HeistModeManager {
  public scene: THREE.Scene;
  public matchDuration: number = 240; // 4:00
  public matchTimeRemaining: number = 240;
  public currentAct: HeistAct = HeistAct.ACT_1_BREACH;
  public mapId: MapId = MapId.BIRNIN_KANO;

  // Act I: Central Vault
  public vaultPos: THREE.Vector3 = new THREE.Vector3(40, 3.5, 0);
  public vaultHP: number = 1500;
  public maxVaultHP: number = 1500;
  public vaultMesh: THREE.Group;
  public vaultDoorL: THREE.Mesh;
  public vaultDoorR: THREE.Mesh;
  public vaultHealthBarMesh: THREE.Sprite;
  private vaultHealthCtx: CanvasRenderingContext2D;
  private vaultHealthTexture: THREE.CanvasTexture;
  public isVaultBreached: boolean = false;

  // Act II: ₦1,000,000 Master Bounty Case
  public masterCaseMesh: THREE.Group;
  public masterCaseLightPillar: THREE.Mesh;
  public masterCasePos: THREE.Vector3 = new THREE.Vector3(40, 3.5, 0);
  public carrierId: string | null = null;
  public isCaseSpawned: boolean = false;
  private passiveDripTimer: number = 0;

  // Act III: Extraction Helicopter & Rooftop Pad
  public extractionPadPos: THREE.Vector3 = new THREE.Vector3(40, 38, 0);
  public chopperGroup: THREE.Group;
  public chopperRotor: THREE.Mesh;
  public extractionRingMesh: THREE.Mesh;
  public extractionProgress: Map<string, number> = new Map(); // PlayerId -> seconds (0 to 5.0)
  public isExtractionContested: boolean = false;
  public contestedWarningTime: number = 0;

  // Kill Tracking & Announcer
  private announcer: HypeAnnouncer;
  private totalLobbyKills: number = 0;
  private killStreaks: Map<string, number> = new Map();
  private lastKillTimestamp: Map<string, number> = new Map();

  constructor(scene: THREE.Scene, mapId: MapId = MapId.BIRNIN_KANO) {
    this.scene = scene;
    this.mapId = mapId;
    this.announcer = HypeAnnouncer.getInstance();

    // Adjust extraction pad height per map
    if (mapId === MapId.LAGOS_GOSLOW) {
      this.extractionPadPos.set(40, 36, 0);
      this.vaultPos.set(40, 3.5, 0);
    } else {
      this.extractionPadPos.set(40, 42, 0); // Atop Dala fortress in Kano
      this.vaultPos.set(40, 3.5, 0);
    }

    // 1. Build 3D Vault
    this.vaultMesh = new THREE.Group();
    this.vaultMesh.position.copy(this.vaultPos);

    // Vault Frame (Steel / Mud-reinforced)
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      emissive: 0x1e293b,
      roughness: 0.5,
      metalness: 0.1,
    });
    const frame = new THREE.Mesh(new THREE.BoxGeometry(5.2, 5.0, 1.2), frameMat);
    this.vaultMesh.add(frame);

    // Blast Doors (Left & Right)
    const doorMat = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Bronze/gold hazard
      emissive: 0x78350f,
      emissiveIntensity: 0.8,
      roughness: 0.35,
      metalness: 0.1,
    });
    this.vaultDoorL = new THREE.Mesh(new THREE.BoxGeometry(2.1, 4.4, 0.4), doorMat);
    this.vaultDoorL.position.set(-1.15, 0, 0.45);
    this.vaultMesh.add(this.vaultDoorL);

    this.vaultDoorR = new THREE.Mesh(new THREE.BoxGeometry(2.1, 4.4, 0.4), doorMat);
    this.vaultDoorR.position.set(1.15, 0, 0.45);
    this.vaultMesh.add(this.vaultDoorR);

    // Floating 3D Health Bar Billboard
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    this.vaultHealthCtx = canvas.getContext('2d')!;
    this.vaultHealthTexture = new THREE.CanvasTexture(canvas);
    this.vaultHealthBarMesh = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.vaultHealthTexture, depthTest: false }));
    this.vaultHealthBarMesh.position.set(0, 3.6, 0);
    this.vaultHealthBarMesh.scale.set(4.5, 1.1, 1);
    this.vaultMesh.add(this.vaultHealthBarMesh);
    this.updateVaultHealthBar();

    scene.add(this.vaultMesh);

    // 2. Build ₦1,000,000 Master Bounty Case
    this.masterCaseMesh = new THREE.Group();
    const caseGeom = new THREE.BoxGeometry(0.9, 0.65, 0.35);
    const caseMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 1.5,
      metalness: 0.1,
      roughness: 0.1,
    });
    const caseBody = new THREE.Mesh(caseGeom, caseMat);
    this.masterCaseMesh.add(caseBody);

    // Vertical Golden Beacon
    const pillarGeom = new THREE.CylinderGeometry(0.35, 0.35, 40, 16);
    pillarGeom.translate(0, 20, 0);
    const pillarMat = new THREE.MeshBasicMaterial({
      color: 0xfacc15,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    this.masterCaseLightPillar = new THREE.Mesh(pillarGeom, pillarMat);
    this.masterCaseMesh.add(this.masterCaseLightPillar);
    this.masterCaseMesh.position.copy(this.masterCasePos);
    this.masterCaseMesh.visible = false;
    scene.add(this.masterCaseMesh);

    // 3. Build Extraction Helicopter & Ring
    this.chopperGroup = new THREE.Group();
    this.chopperGroup.position.set(this.extractionPadPos.x, this.extractionPadPos.y + 4.5, 0);

    // Fuselage
    const heliMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      emissive: 0x0f172a,
      roughness: 0.4,
      metalness: 0.1,
    });
    const heliBody = new THREE.Mesh(new THREE.BoxGeometry(5.5, 1.8, 1.6), heliMat);
    this.chopperGroup.add(heliBody);

    // Cockpit Canopy (Tinted Glass)
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      roughness: 0.1,
      metalness: 0.1,
      transparent: true,
      opacity: 0.7,
    });
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, 1.4), glassMat);
    canopy.position.set(2.2, 0.1, 0);
    this.chopperGroup.add(canopy);

    // Main Rotor Blades
    const rotorMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });
    this.chopperRotor = new THREE.Mesh(new THREE.BoxGeometry(8.5, 0.08, 0.35), rotorMat);
    this.chopperRotor.position.set(0.2, 1.2, 0);
    this.chopperGroup.add(this.chopperRotor);

    // Downward Searchlight
    const spot = new THREE.SpotLight(0x10b981, 6.0, 30, Math.PI * 0.25, 0.6);
    spot.position.set(0, 0, 0);
    spot.target.position.set(0, -15, 0);
    this.chopperGroup.add(spot);
    this.chopperGroup.add(spot.target);

    this.chopperGroup.visible = false;
    scene.add(this.chopperGroup);

    // Emerald Extraction Zone Ring
    const ringGeom = new THREE.RingGeometry(0.2, 3.5, 32);
    ringGeom.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    });
    this.extractionRingMesh = new THREE.Mesh(ringGeom, ringMat);
    this.extractionRingMesh.position.copy(this.extractionPadPos);
    this.extractionRingMesh.visible = false;
    scene.add(this.extractionRingMesh);

    // Trigger match start announcer
    setTimeout(() => {
      this.announcer.announce(AnnouncerEvent.MATCH_START);
    }, 600);
  }

  private updateVaultHealthBar(): void {
    const ctx = this.vaultHealthCtx;
    ctx.clearRect(0, 0, 256, 64);

    const pct = Math.max(0, this.vaultHP / this.maxVaultHP);

    // Background Panel
    ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 3;
    ctx.fillRect(4, 4, 248, 56);
    ctx.strokeRect(4, 4, 248, 56);

    // Title
    ctx.font = '800 14px "JetBrains Mono", monospace';
    ctx.fillStyle = '#f59e0b';
    ctx.textAlign = 'center';
    ctx.fillText(`CENTRAL VAULT: ${Math.round(this.vaultHP)} HP`, 128, 22);

    // HP Bar Fill
    ctx.fillStyle = '#334155';
    ctx.fillRect(16, 32, 224, 20);

    ctx.fillStyle = pct > 0.4 ? '#22c55e' : pct > 0.2 ? '#f59e0b' : '#ef4444';
    ctx.fillRect(16, 32, 224 * pct, 20);

    this.vaultHealthTexture.needsUpdate = true;
  }

  public damageVault(damage: number, tileMap?: TileMap3D, particles?: ParticleSystem3D): void {
    if (this.isVaultBreached || this.vaultHP <= 0) return;

    this.vaultHP -= damage;
    this.updateVaultHealthBar();

    if (this.vaultHP <= 0) {
      this.breachVault(particles);
    }
  }

  public breachVault(particles?: ParticleSystem3D): void {
    if (this.isVaultBreached) return;
    this.isVaultBreached = true;
    this.vaultHP = 0;
    this.updateVaultHealthBar();

    // Detonate Doors Outward
    this.vaultDoorL.position.x -= 4.0;
    this.vaultDoorL.position.z -= 2.0;
    this.vaultDoorL.rotation.y = -0.9;

    this.vaultDoorR.position.x += 4.0;
    this.vaultDoorR.position.z -= 2.0;
    this.vaultDoorR.rotation.y = 0.9;

    if (particles) {
      particles.spawnExplosionShockwave(this.vaultPos.x, this.vaultPos.y);
      particles.spawnSparks(this.vaultPos.x, this.vaultPos.y, 0, 1, 30);
    }

    // Trigger Announcer
    this.announcer.announce(AnnouncerEvent.VAULT_BREACHED);

    // Transition to Act II
    this.transitionToAct(HeistAct.ACT_2_CARRIER);
  }

  private transitionToAct(act: HeistAct): void {
    this.currentAct = act;

    if (act === HeistAct.ACT_2_CARRIER) {
      // Spawn Master Bounty Case
      this.isCaseSpawned = true;
      this.masterCaseMesh.visible = true;
      this.masterCaseMesh.position.copy(this.vaultPos);
    } else if (act === HeistAct.ACT_3_EXTRACTION) {
      // Spawn Helicopter and Extraction Ring
      this.chopperGroup.visible = true;
      this.extractionRingMesh.visible = true;
      this.announcer.announce(AnnouncerEvent.CHOPPER_ARRIVED);
    }
  }

  public handleKill(killer: Player, victim: Player): void {
    this.totalLobbyKills++;
    const now = Date.now();

    // 1. First Blood Check
    if (this.totalLobbyKills === 1) {
      this.announcer.announce(AnnouncerEvent.FIRST_BLOOD);
    }

    // 2. Double Kill Check (2 kills within 4.0s)
    const lastKill = this.lastKillTimestamp.get(killer.stats.id) || 0;
    if (now - lastKill <= 4000) {
      this.announcer.announce(AnnouncerEvent.DOUBLE_KILL);
    }
    this.lastKillTimestamp.set(killer.stats.id, now);

    // 3. Kill Streak Check (3+ consecutive kills)
    const currentStreak = (this.killStreaks.get(killer.stats.id) || 0) + 1;
    this.killStreaks.set(killer.stats.id, currentStreak);
    this.killStreaks.set(victim.stats.id, 0); // Reset victim streak

    if (currentStreak >= 3 && currentStreak % 3 === 0) {
      this.announcer.announce(AnnouncerEvent.KILL_STREAK);
    }

    // 4. If victim was the Sarki Carrier, drop the case!
    this.handlePlayerDeath(victim);
  }

  public handlePlayerDeath(victim: Player): void {
    victim.mesh.setOdogwuCrown(false);
    if (this.carrierId === victim.stats.id) {
      this.dropMasterCase(victim.actor.position.x, victim.actor.position.y);
    }
  }

  public dropMasterCase(x: number, y: number): void {
    this.carrierId = null;
    this.masterCaseMesh.visible = true;
    this.masterCaseMesh.position.set(x, y + 0.5, 0);
  }

  public update(dt: number, players: Player[], particles?: ParticleSystem3D, tileMap?: TileMap3D): void {
    if (this.currentAct === HeistAct.MATCH_OVER) return;

    // Clock countdown
    this.matchTimeRemaining -= dt;

    // ACT I: Check clock-based auto breach at 150s remaining (0:00 - 1:30 elapsed)
    if (this.currentAct === HeistAct.ACT_1_BREACH && (this.matchTimeRemaining <= 150 || this.vaultHP <= 0)) {
      this.breachVault(particles);
    }

    // ACT II: Check clock transition to Act III at 60s remaining (3:00 elapsed)
    if (this.currentAct === HeistAct.ACT_2_CARRIER && this.matchTimeRemaining <= 60) {
      this.transitionToAct(HeistAct.ACT_3_EXTRACTION);
    }

    // Spin Case & Pulsate Light Pillar
    if (this.masterCaseMesh.visible) {
      this.masterCaseMesh.rotation.y += dt * 3.0;
    }

    // ACT II: Handle Case Pickup & Carrier Passive Drip
    if (this.currentAct === HeistAct.ACT_2_CARRIER || this.currentAct === HeistAct.ACT_3_EXTRACTION) {
      if (this.carrierId) {
        const carrier = players.find((p) => p.stats.id === this.carrierId);
        if (carrier && !carrier.stats.isDead) {
          // Snap case to carrier
          this.masterCaseMesh.visible = false;
          carrier.mesh.setOdogwuCrown(true);

          // +₦10,000 / 1.0s Passive Drip
          this.passiveDripTimer += dt;
          if (this.passiveDripTimer >= 1.0) {
            carrier.stats.cash += 10000;
            this.passiveDripTimer = 0;
          }
        } else {
          // Carrier eliminated or disconnected: drop case right at death location & clear crown
          if (carrier) {
            this.handlePlayerDeath(carrier);
          } else {
            this.dropMasterCase(this.masterCasePos.x, this.masterCasePos.y);
          }
        }
      } else if (this.isCaseSpawned && this.masterCaseMesh.visible) {
        // Check if any player touches case
        for (const p of players) {
          if (!p.stats.isDead) {
            const dist = p.actor.position.distanceTo(this.masterCaseMesh.position);
            if (dist < 2.0) {
              this.carrierId = p.stats.id;
              p.mesh.setOdogwuCrown(true);
              this.announcer.announce(AnnouncerEvent.CARRIER_MARKED);
              break;
            }
          }
        }
      }
    }

    // ACT III: Extraction Gunship & Uncontested Hold
    if (this.currentAct === HeistAct.ACT_3_EXTRACTION) {
      // Rotate Helicopter Blades
      this.chopperRotor.rotation.y += dt * 30.0;

      // Check who is standing in the extraction ring
      const inZonePlayers: Player[] = [];
      players.forEach((p) => {
        if (!p.stats.isDead && p.actor.position.distanceTo(this.extractionPadPos) <= 3.5) {
          inZonePlayers.push(p);
        }
      });

      if (inZonePlayers.length === 1) {
        // Uncontested single player holding zone
        this.isExtractionContested = false;
        const holder = inZonePlayers[0];
        const prog = (this.extractionProgress.get(holder.stats.id) || 0) + dt;
        this.extractionProgress.set(holder.stats.id, prog);

        if (prog >= 5.0) {
          this.handleCleanEvac(holder, players);
        }
      } else if (inZonePlayers.length > 1) {
        // Check if all players in zone are from the SAME friendly team (e.g. 2 Blue teammates)
        const distinctTeams = new Set(inZonePlayers.map((p) => p.stats.team).filter((t) => t !== 'none'));
        if (distinctTeams.size === 1) {
          // Friendly squad holding pad together: NOT contested!
          this.isExtractionContested = false;
          const holder = inZonePlayers[0];
          const prog = (this.extractionProgress.get(holder.stats.id) || 0) + dt;
          this.extractionProgress.set(holder.stats.id, prog);

          if (prog >= 5.0) {
            this.handleCleanEvac(holder, players);
          }
        } else {
          // Rivals fighting inside the extraction ring
          this.isExtractionContested = true;
          this.contestedWarningTime = 1.0;
        }
      } else {
        this.isExtractionContested = false;
      }
    }

    // Match Time Expiry (0:00)
    if (this.matchTimeRemaining <= 0) {
      this.handleTimeout(players);
    }
  }

  private handleCleanEvac(player: Player, allPlayers: Player[] = []): void {
    this.currentAct = HeistAct.MATCH_OVER;
    player.stats.isExtracted = true;

    // Bank 100% match cash + ₦250,000 Heist Bonus into Offshore Vault
    const totalPayout = player.stats.cash + 250000;
    OperativeService.getInstance().bankMatchCash(totalPayout);

    // If team squad heist, all teammates win!
    if (player.stats.team !== 'none' && allPlayers.length > 0) {
      allPlayers.forEach((p) => {
        if (p.stats.team === player.stats.team) {
          p.stats.isExtracted = true;
        }
      });
    }

    this.announcer.announce(AnnouncerEvent.CLEAN_EVAC);
  }

  private handleTimeout(players: Player[]): void {
    this.currentAct = HeistAct.MATCH_OVER;

    // Partial 50% recovery payout for surviving players
    const local = players.find((p) => p.stats.isLocalPlayer);
    if (local && !local.stats.isDead && !local.stats.isExtracted) {
      const partialPayout = Math.floor(local.stats.cash * 0.5);
      OperativeService.getInstance().bankMatchCash(partialPayout);
    }
  }

  public destroy(scene: THREE.Scene): void {
    scene.remove(this.vaultMesh);
    scene.remove(this.masterCaseMesh);
    scene.remove(this.chopperGroup);
    scene.remove(this.extractionRingMesh);
  }
}
