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
    this.group.add(this.decorGroup);
    this.scene.add(this.group);

    this.debrisGroup = new THREE.Group();
    this.scene.add(this.debrisGroup);

    this.initProceduralMaterials();
    this.initDebrisGeometries();
  }

  public currentMapId: MapId = MapId.BIRNIN_KANO;

  private concreteDamagedLightMaterial!: THREE.MeshStandardMaterial;
  private concreteDamagedHeavyMaterial!: THREE.MeshStandardMaterial;
  public decorGroup: THREE.Group = new THREE.Group();
  private aviationLights: THREE.Mesh[] = [];
  private animTimer: number = 0;

  public setMapTheme(mapId: MapId): void {
    this.currentMapId = mapId;
    // Clear previous decor
    while (this.decorGroup.children.length > 0) {
      this.decorGroup.remove(this.decorGroup.children[0]);
    }
    this.aviationLights = [];

    if (mapId === MapId.BIRNIN_KANO) {
      this.initKanoMaterials();
    } else {
      this.initLagosMaterials();
    }
  }

  private initKanoMaterials(): void {
    // 1. BIRNIN KANO EARTHEN ARCHITECTURAL BLOCKS (Terracotta Tubali + Arewa Laser Inlay + Amber Edge)
    const mudCanvas = document.createElement('canvas');
    mudCanvas.width = 256;
    mudCanvas.height = 256;
    const ctx = mudCanvas.getContext('2d')!;

    // Rich warm terracotta / silt-mud base (#854d0e to #a16207)
    const baseGrad = ctx.createLinearGradient(0, 0, 0, 256);
    baseGrad.addColorStop(0, '#a16207');
    baseGrad.addColorStop(0.5, '#854d0e');
    baseGrad.addColorStop(1, '#713f12');
    ctx.fillStyle = baseGrad;
    ctx.fillRect(0, 0, 256, 256);

    // Procedural mortar & brick-joint lines (Horizontal courses with running bond)
    ctx.strokeStyle = '#582e0c';
    ctx.lineWidth = 3;
    const rowHeight = 32;
    for (let y = 30; y < 256; y += rowHeight) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(256, y);
      ctx.stroke();

      const offset = (Math.floor(y / rowHeight) % 2) * 32;
      for (let x = offset; x < 256; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + rowHeight);
        ctx.stroke();
      }
    }

    // Weathered clay surface speckles & silt grain
    ctx.fillStyle = 'rgba(202, 138, 4, 0.25)';
    for (let i = 0; i < 300; i++) {
      ctx.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
    }
    ctx.fillStyle = 'rgba(67, 20, 7, 0.35)';
    for (let i = 0; i < 200; i++) {
      ctx.fillRect(Math.random() * 256, Math.random() * 256, 3, 2);
    }

    // Decorative Ancient-Futuristic "Arewa" Geometric Laser-Frieze Inlay along side
    ctx.strokeStyle = 'rgba(250, 204, 21, 0.85)';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = '#facc15';
    ctx.shadowBlur = 8;
    // Interlocking diamond knot pattern across center band
    for (let cx = 32; cx < 256; cx += 64) {
      ctx.beginPath();
      ctx.moveTo(cx, 100);
      ctx.lineTo(cx + 16, 128);
      ctx.lineTo(cx, 156);
      ctx.lineTo(cx - 16, 128);
      ctx.closePath();
      ctx.stroke();
      // Inner star knot
      ctx.strokeRect(cx - 6, 122, 12, 12);
    }
    ctx.shadowBlur = 0;

    // Weathered Concrete & Lime-Wash Edge Trim (#ca8a04 to #eab308)
    ctx.fillStyle = '#ca8a04';
    ctx.fillRect(0, 0, 256, 22);
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(0, 22, 256, 4);

    // Glowing Amber Warning Landing Strip on top edge (#f59e0b)
    ctx.fillStyle = '#f59e0b';
    ctx.shadowColor = '#fbbf24';
    ctx.shadowBlur = 12;
    ctx.fillRect(0, 0, 256, 6);
    ctx.shadowBlur = 0;

    const mudTexture = new THREE.CanvasTexture(mudCanvas);
    mudTexture.wrapS = THREE.RepeatWrapping;
    mudTexture.wrapT = THREE.RepeatWrapping;

    this.concreteMaterial = new THREE.MeshStandardMaterial({
      map: mudTexture,
      roughness: 0.90,
      metalness: 0.05,
      emissive: 0x451a03,
      emissiveIntensity: 0.25,
    });

    // 2. BIRNIN KANO DAMAGED STAGE 1 (Moderate Cracks 35% - 70% HP)
    const d1Canvas = document.createElement('canvas');
    d1Canvas.width = 256;
    d1Canvas.height = 256;
    const d1Ctx = d1Canvas.getContext('2d')!;
    d1Ctx.drawImage(mudCanvas, 0, 0);

    // Surface stress fractures & jagged impact fissures
    d1Ctx.strokeStyle = '#3e1a06';
    d1Ctx.lineWidth = 4;
    d1Ctx.beginPath();
    d1Ctx.moveTo(40, 26);
    d1Ctx.lineTo(90, 110);
    d1Ctx.lineTo(150, 150);
    d1Ctx.lineTo(210, 230);
    d1Ctx.moveTo(100, 115);
    d1Ctx.lineTo(60, 190);
    d1Ctx.stroke();

    this.concreteDamagedLightMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.CanvasTexture(d1Canvas),
      roughness: 0.95,
      metalness: 0.05,
      emissive: 0x78350f,
      emissiveIntensity: 0.35,
    });

    // 3. BIRNIN KANO DAMAGED STAGE 2 (Severe Crumbling + Glowing Fractures < 35% HP)
    const d2Canvas = document.createElement('canvas');
    d2Canvas.width = 256;
    d2Canvas.height = 256;
    const d2Ctx = d2Canvas.getContext('2d')!;
    d2Ctx.drawImage(d1Canvas, 0, 0);

    // Deep gaping impact crater
    d2Ctx.fillStyle = '#270c04';
    d2Ctx.beginPath();
    d2Ctx.arc(128, 128, 42, 0, Math.PI * 2);
    d2Ctx.fill();

    // Glowing Amber/Red Wireframe Fracture Edge
    d2Ctx.strokeStyle = '#ef4444';
    d2Ctx.lineWidth = 5;
    d2Ctx.shadowColor = '#f97316';
    d2Ctx.shadowBlur = 15;
    d2Ctx.strokeRect(6, 6, 244, 244);
    // Radiating glowing red fissures
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
      d2Ctx.beginPath();
      d2Ctx.moveTo(128, 128);
      d2Ctx.lineTo(128 + Math.cos(a) * 90, 128 + Math.sin(a) * 90);
      d2Ctx.stroke();
    }
    d2Ctx.shadowBlur = 0;

    this.concreteDamagedHeavyMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.CanvasTexture(d2Canvas),
      roughness: 0.98,
      metalness: 0.08,
      emissive: 0xef4444,
      emissiveIntensity: 0.65,
    });

    this.concreteDamagedMaterial = this.concreteDamagedLightMaterial;

    // 4. Palm Timber Scaffold (Azara) with Amber Edge Runes
    const palmCanvas = document.createElement('canvas');
    palmCanvas.width = 256;
    palmCanvas.height = 128;
    const pCtx = palmCanvas.getContext('2d')!;
    pCtx.fillStyle = '#451a03'; // Dark fibrous palm timber
    pCtx.fillRect(0, 0, 256, 128);

    // Weathered wood grain fibers
    pCtx.fillStyle = '#78350f';
    for (let y = 10; y < 128; y += 22) {
      pCtx.fillRect(4, y, 248, 14);
    }
    // Brass binding bands on scaffold edges
    pCtx.fillStyle = '#d97706';
    pCtx.fillRect(16, 0, 16, 128);
    pCtx.fillRect(224, 0, 16, 128);
    // Glowing amber landing edge on scaffold top
    pCtx.fillStyle = '#f59e0b';
    pCtx.shadowColor = '#f59e0b';
    pCtx.shadowBlur = 8;
    pCtx.fillRect(0, 0, 256, 8);
    pCtx.shadowBlur = 0;

    this.woodMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.CanvasTexture(palmCanvas),
      roughness: 0.85,
      metalness: 0.05,
      emissive: 0x451a03,
      emissiveIntensity: 0.3,
    });

    // 5. Heavy Bronze-Steel Structural Pillars & Vault Doors (Gidan Ma'aji)
    const ironCanvas = document.createElement('canvas');
    ironCanvas.width = 256;
    ironCanvas.height = 256;
    const iCtx = ironCanvas.getContext('2d')!;
    iCtx.fillStyle = '#1c1917';
    iCtx.fillRect(0, 0, 256, 256);

    // Heavy burnished bronze structural frame
    iCtx.strokeStyle = '#d97706';
    iCtx.lineWidth = 12;
    iCtx.strokeRect(6, 6, 244, 244);

    // Concentric geometric Arewa diamond emblem
    iCtx.strokeStyle = '#facc15';
    iCtx.lineWidth = 6;
    iCtx.beginPath();
    iCtx.moveTo(128, 40);
    iCtx.lineTo(216, 128);
    iCtx.lineTo(128, 216);
    iCtx.lineTo(40, 128);
    iCtx.closePath();
    iCtx.stroke();

    // Heavy brass bolt studs
    iCtx.fillStyle = '#f59e0b';
    for (let x = 32; x < 256; x += 64) {
      for (let y = 32; y < 256; y += 64) {
        iCtx.beginPath();
        iCtx.arc(x, y, 7, 0, Math.PI * 2);
        iCtx.fill();
      }
    }

    this.steelMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.CanvasTexture(ironCanvas),
      roughness: 0.45,
      metalness: 0.15,
      emissive: 0x78350f,
      emissiveIntensity: 0.35,
    });
  }

  private initLagosMaterials(): void {
    // 1. LAGOS EKO SECTOR REINFORCED SHIPPING CONTAINER & ASPHALT
    const roadCanvas = document.createElement('canvas');
    roadCanvas.width = 256;
    roadCanvas.height = 256;
    const ctx = roadCanvas.getContext('2d')!;

    // Industrial Container Base (Marine / Tactical Navy Slate #0f172a to #1e293b)
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 256, 256);

    // Corrugated Vertical Steel Ribs
    for (let x = 0; x < 256; x += 32) {
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(x, 40, 16, 216);
      ctx.fillStyle = '#334155';
      ctx.fillRect(x + 12, 40, 4, 216); // Specular edge on rib
    }

    // Heavy Reinforced Steel Corner Casting Brackets with Rivets
    ctx.fillStyle = '#475569';
    ctx.fillRect(0, 36, 36, 36);
    ctx.fillRect(220, 36, 36, 36);
    ctx.fillRect(0, 220, 36, 36);
    ctx.fillRect(220, 220, 36, 36);

    ctx.fillStyle = '#94a3b8';
    // Heavy rivet bolts in brackets
    [[14, 50], [242, 50], [14, 238], [242, 238]].forEach(([bx, by]) => {
      ctx.beginPath();
      ctx.arc(bx, by, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // Stencil Code Markings ("LOS-234 // SPEC-OPS")
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('LOS-234 // APAPA SEC', 48, 80);
    ctx.fillText('MAX PAYLOAD 32,500 KG', 48, 100);

    // Dark Asphalt Highway Deck on Top (#1e293b)
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, 0, 256, 36);

    // Painted Dashed Highway Lane Striping (#f8fafc)
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(20, 14, 45, 6);
    ctx.fillRect(100, 14, 45, 6);
    ctx.fillRect(180, 14, 45, 6);

    // Yellow / Black Hazard Chevron Warning Stripes on rim
    for (let x = 0; x < 256; x += 24) {
      ctx.fillStyle = '#eab308';
      ctx.beginPath();
      ctx.moveTo(x, 30);
      ctx.lineTo(x + 12, 30);
      ctx.lineTo(x + 4, 38);
      ctx.lineTo(x - 8, 38);
      ctx.closePath();
      ctx.fill();
    }

    const roadTexture = new THREE.CanvasTexture(roadCanvas);
    roadTexture.wrapS = THREE.RepeatWrapping;
    roadTexture.wrapT = THREE.RepeatWrapping;

    this.concreteMaterial = new THREE.MeshStandardMaterial({
      map: roadTexture,
      roughness: 0.55,
      metalness: 0.15,
      emissive: 0x0f172a,
      emissiveIntensity: 0.25,
    });

    // 2. LAGOS DAMAGED STAGE 1 (Fractured Asphalt & Crumpled Sheet Metal)
    const ld1Canvas = document.createElement('canvas');
    ld1Canvas.width = 256;
    ld1Canvas.height = 256;
    const ld1Ctx = ld1Canvas.getContext('2d')!;
    ld1Ctx.drawImage(roadCanvas, 0, 0);

    // Jagged impact fractures & bullet punctures
    ld1Ctx.strokeStyle = '#020617';
    ld1Ctx.lineWidth = 4;
    ld1Ctx.beginPath();
    ld1Ctx.moveTo(50, 15);
    ld1Ctx.lineTo(90, 80);
    ld1Ctx.lineTo(160, 140);
    ld1Ctx.lineTo(220, 210);
    ld1Ctx.stroke();

    this.concreteDamagedLightMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.CanvasTexture(ld1Canvas),
      roughness: 0.75,
      metalness: 0.12,
      emissive: 0x1e293b,
      emissiveIntensity: 0.35,
    });

    // 3. LAGOS DAMAGED STAGE 2 (Severe Explosion Crumpling + Pulsing Hazard Edge)
    const ld2Canvas = document.createElement('canvas');
    ld2Canvas.width = 256;
    ld2Canvas.height = 256;
    const ld2Ctx = ld2Canvas.getContext('2d')!;
    ld2Ctx.drawImage(ld1Canvas, 0, 0);

    // Molten blast center
    ld2Ctx.fillStyle = '#020617';
    ld2Ctx.beginPath();
    ld2Ctx.arc(128, 128, 48, 0, Math.PI * 2);
    ld2Ctx.fill();

    // Flashing orange/red hazard outline
    ld2Ctx.strokeStyle = '#f97316';
    ld2Ctx.lineWidth = 6;
    ld2Ctx.shadowColor = '#ef4444';
    ld2Ctx.shadowBlur = 14;
    ld2Ctx.strokeRect(6, 6, 244, 244);
    ld2Ctx.shadowBlur = 0;

    this.concreteDamagedHeavyMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.CanvasTexture(ld2Canvas),
      roughness: 0.85,
      metalness: 0.15,
      emissive: 0xf97316,
      emissiveIntensity: 0.75,
    });

    this.concreteDamagedMaterial = this.concreteDamagedLightMaterial;

    // 4. Heavy Industrial Steel Girder (Highway Flyover I-Beam with Riveted Flanges)
    const steelCanvas = document.createElement('canvas');
    steelCanvas.width = 256;
    steelCanvas.height = 256;
    const stCtx = steelCanvas.getContext('2d')!;
    stCtx.fillStyle = '#1e293b';
    stCtx.fillRect(0, 0, 256, 256);

    // Heavy steel flange plates top and bottom
    stCtx.fillStyle = '#334155';
    stCtx.fillRect(0, 0, 256, 32);
    stCtx.fillRect(0, 224, 256, 32);

    // Bolted rivets along flange seams
    stCtx.fillStyle = '#94a3b8';
    for (let x = 16; x < 256; x += 32) {
      stCtx.beginPath();
      stCtx.arc(x, 16, 5, 0, Math.PI * 2);
      stCtx.arc(x, 240, 5, 0, Math.PI * 2);
      stCtx.fill();
    }

    // Heavy industrial cross-strut truss
    stCtx.strokeStyle = '#475569';
    stCtx.lineWidth = 8;
    stCtx.beginPath();
    stCtx.moveTo(0, 32);
    stCtx.lineTo(256, 224);
    stCtx.moveTo(256, 32);
    stCtx.lineTo(0, 224);
    stCtx.stroke();

    this.steelMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.CanvasTexture(steelCanvas),
      roughness: 0.35,
      metalness: 0.15,
      emissive: 0x1e293b,
      emissiveIntensity: 0.35,
    });

    // 5. Industrial Grating / Scaffolding Deck (Wood Scaffold Slot)
    const grateCanvas = document.createElement('canvas');
    grateCanvas.width = 256;
    grateCanvas.height = 128;
    const grCtx = grateCanvas.getContext('2d')!;
    grCtx.fillStyle = '#0f172a';
    grCtx.fillRect(0, 0, 256, 128);

    // Steel mesh diamond grating
    grCtx.strokeStyle = '#38bdf8';
    grCtx.lineWidth = 1.5;
    for (let x = -128; x < 384; x += 20) {
      grCtx.beginPath();
      grCtx.moveTo(x, 0);
      grCtx.lineTo(x + 128, 128);
      grCtx.moveTo(x + 128, 0);
      grCtx.lineTo(x, 128);
      grCtx.stroke();
    }
    // Cyan safety edge line on grating top
    grCtx.fillStyle = '#06b6d4';
    grCtx.fillRect(0, 0, 256, 8);

    this.woodMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.CanvasTexture(grateCanvas),
      roughness: 0.45,
      metalness: 0.15,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
    });

    // 6. High-Tech Mikano Diesel Generator Transformer
    const genCanvas = document.createElement('canvas');
    genCanvas.width = 256;
    genCanvas.height = 256;
    const gCtx = genCanvas.getContext('2d')!;
    gCtx.fillStyle = '#15803d'; // Generator green
    gCtx.fillRect(0, 0, 256, 256);

    // Cooling vent louvers
    gCtx.fillStyle = '#0f172a';
    for (let y = 60; y < 190; y += 14) {
      gCtx.fillRect(30, y, 196, 7);
    }
    // High voltage hazard badge
    gCtx.fillStyle = '#eab308';
    gCtx.fillRect(20, 20, 216, 24);
    gCtx.fillStyle = '#0f172a';
    gCtx.font = 'bold 13px monospace';
    gCtx.fillText('MIKANO POWER // 415V HIGH YIELD', 28, 37);

    // Digital Volt readout
    gCtx.fillStyle = '#22c55e';
    gCtx.font = 'bold 14px monospace';
    gCtx.fillText('OUTPUT: 240V 50Hz [ONLINE]', 30, 225);

    this.transformerMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.CanvasTexture(genCanvas),
      roughness: 0.4,
      metalness: 0.12,
      emissive: 0x15803d,
      emissiveIntensity: 0.45,
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
      metalness: 0.1,
      emissive: 0xca8a04,
      emissiveIntensity: 0.3,
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
      const ratio = this.tileHp[index] / this.maxHp[index];
      if (ratio < 0.35) {
        this.tileMeshes[index]!.material = this.concreteDamagedHeavyMaterial;
      } else if (ratio < 0.70) {
        this.tileMeshes[index]!.material = this.concreteDamagedLightMaterial;
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

    // 3. Clear architectural decor group
    while (this.decorGroup.children.length > 0) {
      this.decorGroup.remove(this.decorGroup.children[0]);
    }
    this.aviationLights = [];
  }

  /**
   * Add a vertical structural support pillar under elevated platforms
   */
  public addPillar(x: number, yBottom: number, yTop: number): void {
    const height = yTop - yBottom;
    if (height <= 0) return;

    const pillarGeom = new THREE.BoxGeometry(0.55, height, 0.85);
    const pillarMat = this.steelMaterial;
    const pillarMesh = new THREE.Mesh(pillarGeom, pillarMat);
    pillarMesh.position.set(x + 0.5, yBottom + height * 0.5, -0.15);
    pillarMesh.castShadow = true;
    pillarMesh.receiveShadow = true;
    this.decorGroup.add(pillarMesh);

    // Base plate & capital flange
    const flangeGeom = new THREE.BoxGeometry(0.85, 0.25, 1.1);
    const baseFlange = new THREE.Mesh(flangeGeom, pillarMat);
    baseFlange.position.set(x + 0.5, yBottom + 0.12, -0.15);
    baseFlange.castShadow = true;
    this.decorGroup.add(baseFlange);

    const topFlange = new THREE.Mesh(flangeGeom, pillarMat);
    topFlange.position.set(x + 0.5, yTop - 0.12, -0.15);
    topFlange.castShadow = true;
    this.decorGroup.add(topFlange);
  }

  /**
   * Add a blinking red aviation warning beacon on high towers
   */
  public addAviationLight(x: number, y: number): void {
    // Mast post
    const mastGeom = new THREE.CylinderGeometry(0.06, 0.08, 0.7, 6);
    const mastMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.2, roughness: 0.5 });
    const mast = new THREE.Mesh(mastGeom, mastMat);
    mast.position.set(x + 0.5, y + 0.35, 0.1);
    mast.castShadow = true;
    this.decorGroup.add(mast);

    // Glowing red beacon sphere
    const beaconGeom = new THREE.SphereGeometry(0.16, 8, 8);
    const beaconMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
      transparent: true,
      opacity: 1.0,
    });
    const beacon = new THREE.Mesh(beaconGeom, beaconMat);
    beacon.position.set(x + 0.5, y + 0.75, 0.1);
    this.decorGroup.add(beacon);
    this.aviationLights.push(beacon);
  }

  /**
   * Add glowing neon signage tags in the background
   */
  public addNeonSign(x: number, y: number, text: string, colorHex: number = 0x38bdf8): void {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#050806';
    ctx.fillRect(0, 0, 256, 64);

    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 3;
    ctx.strokeRect(2, 2, 252, 60);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    const geom = new THREE.PlaneGeometry(3.2, 0.8);
    const mat = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.9,
    });
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.set(x, y, -0.55);
    this.decorGroup.add(mesh);
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

  public update(dt: number): void {
    this.updateDebris(dt);
    this.animTimer += dt;

    // Blinking red aviation lights on high towers
    if (this.aviationLights.length > 0) {
      const isBlink = Math.sin(this.animTimer * 5.5) > 0.15;
      for (let i = 0; i < this.aviationLights.length; i++) {
        (this.aviationLights[i].material as THREE.MeshBasicMaterial).opacity = isBlink ? 1.0 : 0.12;
      }
    }
  }
}
