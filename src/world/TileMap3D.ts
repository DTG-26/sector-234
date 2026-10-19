import * as THREE from 'three';
import { MapId, TileType } from '../config/types';
import { ARENA_CONFIG } from '../config/constants';

interface DebrisChunk {
  mesh: THREE.Mesh;
  vx: number;
  vy: number;
  vz: number;
  rx: number;
  ry: number;
  rz: number;
  life: number;
  maxLife: number;
}

export class TileMap3D {
  public width: number;
  public height: number;
  public tiles: Uint8Array;
  public tileHp: Float32Array;
  public maxHp: Float32Array;
  public scene: THREE.Scene;

  public group: THREE.Group;
  private tileMeshes: (THREE.Mesh | null)[];
  
  // Clean PBR Materials (Realistic, high-contrast, no harsh repetitive wireframes)
  private concreteMaterial!: THREE.MeshStandardMaterial;
  private concreteDamagedMaterial!: THREE.MeshStandardMaterial;
  private woodMaterial!: THREE.MeshStandardMaterial;
  private glassMaterial!: THREE.MeshPhysicalMaterial;
  private steelMaterial!: THREE.MeshStandardMaterial;
  private transformerMaterial!: THREE.MeshStandardMaterial;
  private sharedBoxGeometry!: THREE.BoxGeometry;
  private woodGeometry!: THREE.BoxGeometry;

  // Debris
  private debrisGroup: THREE.Group;
  private activeDebris: DebrisChunk[] = [];
  private debrisGeometries: THREE.BufferGeometry[] = [];

  public onBlackoutTriggered?: () => void;

  constructor(scene: THREE.Scene, width: number = ARENA_CONFIG.GRID_WIDTH, height: number = ARENA_CONFIG.GRID_HEIGHT) {
    this.scene = scene;
    this.width = width;
    this.height = height;
    this.tiles = new Uint8Array(width * height);
    this.tileHp = new Float32Array(width * height);
    this.maxHp = new Float32Array(width * height);
    this.tileMeshes = new Array(width * height).fill(null);

    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.debrisGroup = new THREE.Group();
    this.scene.add(this.debrisGroup);

    this.initProceduralMaterials();
    this.initDebrisGeometries();
  }

  public currentMapId: MapId = MapId.BIRNIN_KANO;

  public setMapTheme(mapId: MapId): void {
    this.currentMapId = mapId;
    if (mapId === MapId.BIRNIN_KANO) {
      this.initKanoMaterials();
    } else {
      this.initLagosMaterials();
    }
  }

  private initKanoMaterials(): void {
    // 1. Birnin Kano Earthen Mud Wall (Tubali) with White Lime-Washed Parapet (Farin Kasa)
    const mudCanvas = document.createElement('canvas');
    mudCanvas.width = 128;
    mudCanvas.height = 128;
    const ctx = mudCanvas.getContext('2d')!;

    // Warm terracotta sun-baked clay
    ctx.fillStyle = '#9a3412';
    ctx.fillRect(0, 0, 128, 128);

    // Earthen clay variations & straw binders
    ctx.fillStyle = '#b45309';
    for (let i = 0; i < 180; i++) {
      ctx.fillRect(Math.random() * 128, Math.random() * 128, 2 + Math.random() * 3, 2 + Math.random() * 2);
    }
    ctx.fillStyle = '#78350f';
    for (let i = 0; i < 120; i++) {
      ctx.fillRect(Math.random() * 128, Math.random() * 128, 2, 2);
    }

    // Iconic White Lime-Wash Roof Parapet (Farin Kasa) seen on Hausa mud houses
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, 128, 18);
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(0, 18, 128, 4);

    const mudTexture = new THREE.CanvasTexture(mudCanvas);
    mudTexture.wrapS = THREE.RepeatWrapping;
    mudTexture.wrapT = THREE.RepeatWrapping;

    this.concreteMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: mudTexture,
      roughness: 0.95,
      metalness: 0.02,
    });

    // Damaged Mud Wall (Cracked clay and fissures)
    const dCanvas = document.createElement('canvas');
    dCanvas.width = 128;
    dCanvas.height = 128;
    const dCtx = dCanvas.getContext('2d')!;
    dCtx.drawImage(mudCanvas, 0, 0);
    dCtx.fillStyle = 'rgba(67, 20, 7, 0.55)';
    dCtx.fillRect(0, 22, 128, 106);
    dCtx.strokeStyle = '#451a03';
    dCtx.lineWidth = 3;
    dCtx.beginPath();
    dCtx.moveTo(25, 25);
    dCtx.lineTo(65, 80);
    dCtx.lineTo(110, 115);
    dCtx.moveTo(75, 30);
    dCtx.lineTo(40, 95);
    dCtx.stroke();

    this.concreteDamagedMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: new THREE.CanvasTexture(dCanvas),
      roughness: 0.98,
      metalness: 0.02,
    });

    // Palm Timber Beams (Azara) for jump-through platforms
    const palmCanvas = document.createElement('canvas');
    palmCanvas.width = 128;
    palmCanvas.height = 64;
    const pCtx = palmCanvas.getContext('2d')!;
    pCtx.fillStyle = '#451a03'; // Dark fibrous timber
    pCtx.fillRect(0, 0, 128, 64);
    pCtx.fillStyle = '#78350f';
    pCtx.fillRect(2, 4, 124, 25);
    pCtx.fillRect(2, 33, 124, 25);

    this.woodMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: new THREE.CanvasTexture(palmCanvas),
      roughness: 0.85,
      metalness: 0.05,
    });

    // Ancient Iron Treasury Doors (Gidan Ma'aji)
    const ironCanvas = document.createElement('canvas');
    ironCanvas.width = 128;
    ironCanvas.height = 128;
    const iCtx = ironCanvas.getContext('2d')!;
    iCtx.fillStyle = '#292524';
    iCtx.fillRect(0, 0, 128, 128);
    iCtx.strokeStyle = '#d97706';
    iCtx.lineWidth = 4;
    iCtx.strokeRect(4, 4, 120, 120);
    // Heavy brass studs
    iCtx.fillStyle = '#f59e0b';
    for (let x = 18; x < 120; x += 30) {
      for (let y = 18; y < 120; y += 30) {
        iCtx.fillRect(x, y, 6, 6);
      }
    }

    this.steelMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: new THREE.CanvasTexture(ironCanvas),
      roughness: 0.45,
      metalness: 0.75,
    });
  }

  private initLagosMaterials(): void {
    // 1. Asphalt Roadway & Concrete Flyover Pillars
    const roadCanvas = document.createElement('canvas');
    roadCanvas.width = 128;
    roadCanvas.height = 128;
    const ctx = roadCanvas.getContext('2d')!;
    ctx.fillStyle = '#1e293b'; // Wet dark asphalt
    ctx.fillRect(0, 0, 128, 128);
    ctx.fillStyle = '#334155';
    for (let i = 0; i < 150; i++) {
      ctx.fillRect(Math.random() * 128, Math.random() * 128, 2, 2);
    }
    // Subtle highway white line at top
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(0, 0, 128, 8);

    this.concreteMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: new THREE.CanvasTexture(roadCanvas),
      roughness: 0.6,
      metalness: 0.15,
    });

    this.concreteDamagedMaterial = this.concreteMaterial;

    // 2. Iconic Yellow Danfo Minibus Metal with Bold Black Stripes!
    const danfoCanvas = document.createElement('canvas');
    danfoCanvas.width = 128;
    danfoCanvas.height = 128;
    const dCtx = danfoCanvas.getContext('2d')!;

    // Vibrant Danfo Yellow
    dCtx.fillStyle = '#facc15';
    dCtx.fillRect(0, 0, 128, 128);

    // Double Black Stripes (The legendary Lagos Danfo livery!)
    dCtx.fillStyle = '#0f172a';
    dCtx.fillRect(0, 42, 128, 18);
    dCtx.fillRect(0, 68, 128, 18);

    // Bus window row at top
    dCtx.fillStyle = '#1e293b';
    dCtx.fillRect(10, 8, 48, 26);
    dCtx.fillRect(70, 8, 48, 26);

    this.steelMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: new THREE.CanvasTexture(danfoCanvas),
      roughness: 0.35,
      metalness: 0.55,
    });

    // 3. Market Umbrellas & Wooden Catwalks
    const stallCanvas = document.createElement('canvas');
    stallCanvas.width = 128;
    stallCanvas.height = 64;
    const sCtx = stallCanvas.getContext('2d')!;
    // Striped colorful market umbrella fabric (Blue and orange)
    sCtx.fillStyle = '#ea580c';
    sCtx.fillRect(0, 0, 128, 64);
    sCtx.fillStyle = '#0284c7';
    for (let x = 0; x < 128; x += 32) {
      sCtx.fillRect(x, 0, 16, 64);
    }

    this.woodMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: new THREE.CanvasTexture(stallCanvas),
      roughness: 0.7,
      metalness: 0.05,
    });

    // 4. Mikano Diesel Generator Transformer Box
    const genCanvas = document.createElement('canvas');
    genCanvas.width = 128;
    genCanvas.height = 128;
    const gCtx = genCanvas.getContext('2d')!;
    gCtx.fillStyle = '#15803d'; // Generator green
    gCtx.fillRect(0, 0, 128, 128);
    gCtx.fillStyle = '#eab308';
    gCtx.fillRect(10, 10, 108, 14); // Hazard badge
    gCtx.fillStyle = '#0f172a';
    gCtx.font = 'bold 10px monospace';
    gCtx.fillText('DIESEL GEN', 24, 21);

    this.transformerMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: new THREE.CanvasTexture(genCanvas),
      roughness: 0.4,
      metalness: 0.6,
      emissive: 0x15803d,
      emissiveIntensity: 0.2,
    });
  }

  private initProceduralMaterials(): void {
    this.initKanoMaterials();

    this.glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0.35,
      transmission: 0.9,
      roughness: 0.1,
      metalness: 0.05,
    });

    this.transformerMaterial = new THREE.MeshStandardMaterial({
      color: 0xca8a04,
      roughness: 0.45,
      metalness: 0.65,
      emissive: 0xca8a04,
      emissiveIntensity: 0.2,
    });

    this.sharedBoxGeometry = new THREE.BoxGeometry(
      ARENA_CONFIG.TILE_SIZE,
      ARENA_CONFIG.TILE_SIZE,
      ARENA_CONFIG.TILE_DEPTH
    );

    this.woodGeometry = new THREE.BoxGeometry(
      ARENA_CONFIG.TILE_SIZE,
      0.35,
      ARENA_CONFIG.TILE_DEPTH
    );
  }


  private initDebrisGeometries(): void {
    this.debrisGeometries.push(new THREE.DodecahedronGeometry(0.2));
    this.debrisGeometries.push(new THREE.TetrahedronGeometry(0.25));
    this.debrisGeometries.push(new THREE.BoxGeometry(0.22, 0.22, 0.22));
  }

  public setTile(x: number, y: number, type: TileType): void {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) return;
    const index = y * this.width + x;
    this.tiles[index] = type;

    let hp = 0;
    switch (type) {
      case TileType.WOOD_SCAFFOLD: hp = 40; break;
      case TileType.GLASS_WINDOW: hp = 15; break;
      case TileType.BRICK_CONCRETE: hp = 160; break;
      case TileType.STEEL_GIRDER: hp = 999999; break;
      case TileType.POWER_TRANSFORMER: hp = 100; break;
      default: hp = 0; break;
    }
    this.tileHp[index] = hp;
    this.maxHp[index] = hp;

    if (this.tileMeshes[index]) {
      this.group.remove(this.tileMeshes[index]!);
      this.tileMeshes[index] = null;
    }

    if (type === TileType.EMPTY) return;

    let mat: THREE.Material = this.concreteMaterial;
    let geom: THREE.BufferGeometry = this.sharedBoxGeometry;
    let offsetY = 0;

    if (type === TileType.WOOD_SCAFFOLD) {
      mat = this.woodMaterial;
      geom = this.woodGeometry;
      offsetY = 0.325;
    } else if (type === TileType.GLASS_WINDOW) {
      mat = this.glassMaterial;
    } else if (type === TileType.STEEL_GIRDER) {
      mat = this.steelMaterial;
    } else if (type === TileType.POWER_TRANSFORMER) {
      mat = this.transformerMaterial;
    }

    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.set(x + 0.5, y + 0.5 + offsetY, 0);
    mesh.castShadow = (type !== TileType.GLASS_WINDOW);
    mesh.receiveShadow = true;

    this.group.add(mesh);
    this.tileMeshes[index] = mesh;
  }

  public getTile(x: number, y: number): TileType {
    if (x < 0 || x >= this.width || y < 0) return TileType.STEEL_GIRDER;
    if (y >= this.height) return TileType.EMPTY; // Open sky above the arena is open air!
    return this.tiles[y * this.width + x];
  }

  public isSolid(x: number, y: number): boolean {
    const t = this.getTile(x, y);
    return t === TileType.BRICK_CONCRETE || t === TileType.STEEL_GIRDER || t === TileType.POWER_TRANSFORMER;
  }

  public isOneWayPlatform(x: number, y: number): boolean {
    return this.getTile(x, y) === TileType.WOOD_SCAFFOLD;
  }

  public damageTile(x: number, y: number, damage: number): boolean {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) return false;
    const index = y * this.width + x;
    const type = this.tiles[index];
    if (type === TileType.EMPTY || type === TileType.STEEL_GIRDER) return false;

    this.tileHp[index] -= damage;

    if (type === TileType.BRICK_CONCRETE && this.tileMeshes[index]) {
      if (this.tileHp[index] < this.maxHp[index] * 0.5) {
        this.tileMeshes[index]!.material = this.concreteDamagedMaterial;
      }
    }

    if (this.tileHp[index] <= 0) {
      this.destroyTile(x, y);
      return true;
    }
    return false;
  }

  public destroyTile(x: number, y: number): void {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) return;
    const index = y * this.width + x;
    const type = this.tiles[index];
    if (type === TileType.EMPTY || type === TileType.STEEL_GIRDER) return;

    if (type === TileType.POWER_TRANSFORMER) {
      if (this.onBlackoutTriggered) {
        this.onBlackoutTriggered();
      }
    }

    this.spawnDebrisBurst(x + 0.5, y + 0.5, type);

    this.tiles[index] = TileType.EMPTY;
    this.tileHp[index] = 0;
    if (this.tileMeshes[index]) {
      this.group.remove(this.tileMeshes[index]!);
      this.tileMeshes[index] = null;
    }
  }

  public clear(): void {
    // 1. Remove all tile meshes cleanly with 0 debris
    for (let i = 0; i < this.tileMeshes.length; i++) {
      if (this.tileMeshes[i]) {
        this.group.remove(this.tileMeshes[i]!);
        this.tileMeshes[i] = null;
      }
    }
    this.tiles.fill(TileType.EMPTY);
    this.tileHp.fill(0);
    this.maxHp.fill(0);

    // 2. Clean up any active debris
    for (let i = 0; i < this.activeDebris.length; i++) {
      this.debrisGroup.remove(this.activeDebris[i].mesh);
    }
    this.activeDebris = [];
  }

  public spawnDebrisBurst(centerX: number, centerY: number, tileType: TileType): void {
    const chunkCount = 12 + Math.floor(Math.random() * 6);
    let mat = this.concreteMaterial;
    if (tileType === TileType.WOOD_SCAFFOLD) mat = this.woodMaterial;
    else if (tileType === TileType.GLASS_WINDOW) mat = this.glassMaterial;
    else if (tileType === TileType.POWER_TRANSFORMER) mat = this.transformerMaterial;

    for (let i = 0; i < chunkCount; i++) {
      const geom = this.debrisGeometries[Math.floor(Math.random() * this.debrisGeometries.length)];
      const mesh = new THREE.Mesh(geom, mat);
      
      mesh.position.set(
        centerX + (Math.random() - 0.5) * 0.6,
        centerY + (Math.random() - 0.5) * 0.6,
        (Math.random() - 0.5) * 1.2
      );
      
      const angle = Math.random() * Math.PI * 2;
      const speed = 4.0 + Math.random() * 10.0;
      const vz = 3.0 + Math.random() * 12.0;
      
      mesh.castShadow = true;
      this.debrisGroup.add(mesh);

      this.activeDebris.push({
        mesh,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 3.0,
        vz: vz,
        rx: (Math.random() - 0.5) * 15.0,
        ry: (Math.random() - 0.5) * 15.0,
        rz: (Math.random() - 0.5) * 15.0,
        life: 0,
        maxLife: 1.8 + Math.random() * 0.8,
      });
    }
  }

  public updateDebris(dt: number): void {
    const gravity = -30.0;

    for (let i = this.activeDebris.length - 1; i >= 0; i--) {
      const d = this.activeDebris[i];
      d.life += dt;
      d.vy += gravity * dt;

      d.mesh.position.x += d.vx * dt;
      d.mesh.position.y += d.vy * dt;
      d.mesh.position.z += d.vz * dt;

      d.vx *= 0.98;
      d.vz *= 0.97;

      d.mesh.rotation.x += d.rx * dt;
      d.mesh.rotation.y += d.ry * dt;
      d.mesh.rotation.z += d.rz * dt;

      if (d.life > d.maxLife * 0.7) {
        const factor = Math.max(0, 1.0 - (d.life - d.maxLife * 0.7) / (d.maxLife * 0.3));
        d.mesh.scale.set(factor, factor, factor);
      }

      if (d.life >= d.maxLife) {
        this.debrisGroup.remove(d.mesh);
        this.activeDebris.splice(i, 1);
      }
    }
  }
}
