import * as THREE from 'three';
import { COLORS } from '../config/constants';
import { WeaponId } from '../config/types';
import type { TileMap3D } from '../world/TileMap3D';

export class PlayerMesh3D {
  public rootGroup: THREE.Group;
  public isEnemy: boolean;
  
  // Limbs and joints
  public torsoGroup: THREE.Group;
  public headGroup: THREE.Group;
  public nvgLenses: THREE.Mesh[] = [];
  public thrusterGroup: THREE.Group;
  public thrusterFlameL: THREE.Mesh;
  public thrusterFlameR: THREE.Mesh;
  public crownMesh: THREE.Mesh;

  // Arms & Weapon IK
  public shoulderGroup: THREE.Group;
  public rightArm: THREE.Group;
  public leftArm: THREE.Group;
  public weaponMount: THREE.Group;
  public weaponMeshMap: Map<WeaponId, THREE.Group> = new Map();
  public activeWeaponId: WeaponId = WeaponId.RIFLE_XAG47;
  
  // Flashlight / Aim SpotLight & Laser
  public weaponSpotLight: THREE.SpotLight;
  public weaponSpotTarget: THREE.Object3D;
  public laserLine: THREE.Line;
  public crosshairMesh: THREE.Mesh;

  // Legs
  public leftLeg: THREE.Group;
  public rightLeg: THREE.Group;

  // Overhead Status Billboard (Gamer Tag, HP, Armor)
  public statusSprite: THREE.Sprite;
  private statusCanvas: HTMLCanvasElement;
  private statusCtx: CanvasRenderingContext2D;
  private statusTexture: THREE.CanvasTexture;

  // Animation state
  private walkCycle: number = 0;
  private recoilOffset: number = 0;
  public isRagdoll: boolean = false;
  private ragdollVelocity: THREE.Vector3 = new THREE.Vector3();
  private ragdollAngVel: THREE.Vector3 = new THREE.Vector3();

  constructor(scene: THREE.Scene, isEnemy: boolean = false, name: string = 'Operative') {
    this.isEnemy = isEnemy;
    this.rootGroup = new THREE.Group();
    scene.add(this.rootGroup);

    const camoColor = isEnemy ? 0x7f1d1d : 0x365314; // Crimson for enemies, Olive Drab for player
    const armorColor = isEnemy ? 0x271818 : 0x1e293b;
    const accentColor = isEnemy ? 0xef4444 : 0x22c55e;

    const bodyMat = new THREE.MeshStandardMaterial({
      color: camoColor,
      roughness: 0.6,
      metalness: 0.1,
    });
    const armorMat = new THREE.MeshStandardMaterial({
      color: armorColor,
      roughness: 0.45,
      metalness: 0.4,
    });
    const accentMat = new THREE.MeshStandardMaterial({
      color: accentColor,
      roughness: 0.4,
      metalness: 0.3,
    });
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0x8d5524, // Warm Nigerian commando skin tone
      roughness: 0.75,
      metalness: 0.05,
    });

    // 1. Torso & Heavy Plate Carrier
    this.torsoGroup = new THREE.Group();
    this.torsoGroup.position.set(0, 0.95, 0);
    this.rootGroup.add(this.torsoGroup);

    // Inner Body Fatigues
    const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.62, 0.4), bodyMat);
    torsoMesh.castShadow = true;
    this.torsoGroup.add(torsoMesh);

    // Chunky Tactical Armor Vest (Plate Carrier)
    const vestMesh = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.54, 0.46), armorMat);
    vestMesh.castShadow = true;
    this.torsoGroup.add(vestMesh);

    // Front Ammo Pouches
    for (let i = -1; i <= 1; i++) {
      const pouch = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.16, 0.08), bodyMat);
      pouch.position.set(i * 0.15, -0.1, 0.25);
      this.torsoGroup.add(pouch);
    }

    // Shoulder Pauldrons / Armor Guards
    const lShoulder = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.22), accentMat);
    lShoulder.position.set(-0.33, 0.2, 0);
    this.torsoGroup.add(lShoulder);

    const rShoulder = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.22), accentMat);
    rShoulder.position.set(0.33, 0.2, 0);
    this.torsoGroup.add(rShoulder);

    // Back Jetpack Thruster Module
    this.thrusterGroup = new THREE.Group();
    this.thrusterGroup.position.set(0, 0.05, -0.26);
    this.torsoGroup.add(this.thrusterGroup);

    const packMesh = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.42, 0.16), armorMat);
    packMesh.castShadow = true;
    this.thrusterGroup.add(packMesh);

    // Dual Rocket Exhaust Nozzles
    const nozzleGeom = new THREE.CylinderGeometry(0.07, 0.1, 0.18, 10);
    const nozzleMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.2 });
    const nozzleL = new THREE.Mesh(nozzleGeom, nozzleMat);
    nozzleL.position.set(-0.13, -0.24, 0);
    this.thrusterGroup.add(nozzleL);

    const nozzleR = new THREE.Mesh(nozzleGeom, nozzleMat);
    nozzleR.position.set(0.13, -0.24, 0);
    this.thrusterGroup.add(nozzleR);

    // Twin Jet Thruster Flames (Bright fiery orange / yellow cone)
    const flameGeom = new THREE.ConeGeometry(0.11, 0.55, 8);
    flameGeom.rotateX(Math.PI);
    const flameMat = new THREE.MeshStandardMaterial({
      color: 0xff6600,
      emissive: 0xffaa00,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.0,
    });
    this.thrusterFlameL = new THREE.Mesh(flameGeom, flameMat);
    this.thrusterFlameL.position.set(-0.13, -0.52, 0);
    this.thrusterGroup.add(this.thrusterFlameL);

    this.thrusterFlameR = new THREE.Mesh(flameGeom, flameMat.clone());
    this.thrusterFlameR.position.set(0.13, -0.52, 0);
    this.thrusterGroup.add(this.thrusterFlameR);

    // 2. Commando Head, Face & Ballistic Helmet (Iconic Mini Militia Style)
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 0.44, 0);
    this.torsoGroup.add(this.headGroup);

    // Commando Face
    const headGeom = new THREE.SphereGeometry(0.24, 16, 14);
    const headMesh = new THREE.Mesh(headGeom, skinMat);
    headMesh.castShadow = true;
    this.headGroup.add(headMesh);

    // Commando Eyes
    const eyeGeom = new THREE.BoxGeometry(0.05, 0.035, 0.04);
    const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const pupilMat = new THREE.MeshBasicMaterial({ color: 0x0f172a });

    const eyeL = new THREE.Mesh(eyeGeom, eyeWhiteMat);
    eyeL.position.set(-0.08, 0.02, 0.22);
    this.headGroup.add(eyeL);
    const pupilL = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.035, 0.04), pupilMat);
    pupilL.position.set(-0.07, 0.02, 0.23);
    this.headGroup.add(pupilL);

    const eyeR = new THREE.Mesh(eyeGeom, eyeWhiteMat);
    eyeR.position.set(0.08, 0.02, 0.22);
    this.headGroup.add(eyeR);
    const pupilR = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.035, 0.04), pupilMat);
    pupilR.position.set(0.09, 0.02, 0.23);
    this.headGroup.add(pupilR);

    // Ballistic Combat Helmet (Curved dome covering top and back)
    const helmetMat = new THREE.MeshStandardMaterial({
      color: camoColor,
      roughness: 0.5,
      metalness: 0.2,
    });
    const helmetGeom = new THREE.SphereGeometry(0.27, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.58);
    const helmetMesh = new THREE.Mesh(helmetGeom, helmetMat);
    helmetMesh.position.set(0, 0.03, 0);
    helmetMesh.castShadow = true;
    this.headGroup.add(helmetMesh);

    // Helmet Front Brim
    const brimGeom = new THREE.CylinderGeometry(0.28, 0.28, 0.04, 16, 1, false, 0, Math.PI);
    const brimMesh = new THREE.Mesh(brimGeom, helmetMat);
    brimMesh.position.set(0, 0.04, 0.08);
    brimMesh.rotation.x = 0.2;
    this.headGroup.add(brimMesh);

    // Helmet Chin-Strap
    const strapMat = new THREE.MeshBasicMaterial({ color: 0x1c1917 });
    const strapL = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.24), strapMat);
    strapL.position.set(-0.22, -0.1, 0.05);
    strapL.rotation.z = 0.25;
    this.headGroup.add(strapL);

    const strapR = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.24), strapMat);
    strapR.position.set(0.22, -0.1, 0.05);
    strapR.rotation.z = -0.25;
    this.headGroup.add(strapR);

    // Tactical Goggles strapped across helmet
    const goggleFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.34, 0.09, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4 })
    );
    goggleFrame.position.set(0, 0.12, 0.22);
    this.headGroup.add(goggleFrame);

    const goggleLens = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.06, 0.04),
      new THREE.MeshStandardMaterial({
        color: isEnemy ? 0xef4444 : 0x0284c7,
        emissive: isEnemy ? 0xdc2626 : 0x0284c7,
        emissiveIntensity: 0.2, // Clean, subtle sheen — NO blinding glare!
        roughness: 0.1,
        metalness: 0.8,
      })
    );
    goggleLens.position.set(0, 0.12, 0.26);
    this.headGroup.add(goggleLens);
    this.nvgLenses.push(goggleLens);

    // 3D Gold Odogwu Crown [👑]
    const crownGeom = new THREE.CylinderGeometry(0.26, 0.18, 0.18, 6);
    const crownMat = new THREE.MeshStandardMaterial({
      color: COLORS.ODOGWU_GOLD,
      emissive: COLORS.ODOGWU_GOLD,
      emissiveIntensity: 0.4,
      metalness: 0.95,
      roughness: 0.15,
    });
    this.crownMesh = new THREE.Mesh(crownGeom, crownMat);
    this.crownMesh.position.set(0, 0.44, 0);
    this.crownMesh.visible = false;
    this.headGroup.add(this.crownMesh);

    // 3. Arms & 360° IK Shoulder Group
    this.shoulderGroup = new THREE.Group();
    this.shoulderGroup.position.set(0, 0.16, 0);
    this.torsoGroup.add(this.shoulderGroup);

    this.rightArm = new THREE.Group();
    this.leftArm = new THREE.Group();
    this.shoulderGroup.add(this.rightArm);
    this.shoulderGroup.add(this.leftArm);

    const armGeom = new THREE.BoxGeometry(0.14, 0.44, 0.16);
    const rArmMesh = new THREE.Mesh(armGeom, bodyMat);
    rArmMesh.position.set(0.32, -0.16, 0);
    rArmMesh.castShadow = true;
    this.rightArm.add(rArmMesh);

    const lArmMesh = new THREE.Mesh(armGeom, bodyMat);
    lArmMesh.position.set(-0.32, -0.16, 0);
    lArmMesh.castShadow = true;
    this.leftArm.add(lArmMesh);

    // Weapon Mount Joint
    this.weaponMount = new THREE.Group();
    this.weaponMount.position.set(0.28, -0.2, 0.38);
    this.shoulderGroup.add(this.weaponMount);

    this.buildProceduralWeapons();

    // Weapon-mounted Tactical Light (Soft, non-shadow-casting fill)
    this.weaponSpotLight = new THREE.SpotLight(0xfffaed, 0.4, 25, 0.4, 0.5, 1.5);
    this.weaponSpotLight.castShadow = false;
    this.weaponMount.add(this.weaponSpotLight);

    this.weaponSpotTarget = new THREE.Object3D();
    this.weaponSpotTarget.position.set(12, 0, 0);
    this.weaponMount.add(this.weaponSpotTarget);
    this.weaponSpotLight.target = this.weaponSpotTarget;

    // Laser Sight Line (Iconic Mini Militia Red Aim Guide)
    const laserGeom = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(28, 0, 0),
    ]);
    const laserMat = new THREE.LineBasicMaterial({
      color: 0xff0044, // Iconic Mini Militia crimson red laser
      transparent: true,
      opacity: 0.85,
    });
    this.laserLine = new THREE.Line(laserGeom, laserMat);
    this.weaponMount.add(this.laserLine);

    // Laser Crosshair Dot at laser tip
    const crossGeom = new THREE.RingGeometry(0.12, 0.18, 12);
    const crossMat = new THREE.MeshBasicMaterial({
      color: 0xff0044,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    });
    this.crosshairMesh = new THREE.Mesh(crossGeom, crossMat);
    this.crosshairMesh.position.set(28, 0, 0);
    this.crosshairMesh.rotateY(Math.PI * 0.5);
    this.weaponMount.add(this.crosshairMesh);

    // 4. Articulated Legs with Knee Guards & Boots
    this.leftLeg = new THREE.Group();
    this.rightLeg = new THREE.Group();
    this.leftLeg.position.set(-0.18, 0.65, 0);
    this.rightLeg.position.set(0.18, 0.65, 0);
    this.rootGroup.add(this.leftLeg);
    this.rootGroup.add(this.rightLeg);

    const legGeom = new THREE.BoxGeometry(0.18, 0.68, 0.2);
    const lLegMesh = new THREE.Mesh(legGeom, bodyMat);
    lLegMesh.position.set(0, -0.34, 0);
    lLegMesh.castShadow = true;
    this.leftLeg.add(lLegMesh);

    const rLegMesh = new THREE.Mesh(legGeom, bodyMat);
    rLegMesh.position.set(0, -0.34, 0);
    rLegMesh.castShadow = true;
    this.rightLeg.add(rLegMesh);

    // Combat Boots
    const bootGeom = new THREE.BoxGeometry(0.2, 0.2, 0.28);
    const lBoot = new THREE.Mesh(bootGeom, armorMat);
    lBoot.position.set(0, -0.62, 0.04);
    this.leftLeg.add(lBoot);

    const rBoot = new THREE.Mesh(bootGeom, armorMat);
    rBoot.position.set(0, -0.62, 0.04);
    this.rightLeg.add(rBoot);

    // 5. Overhead Status Billboard (HP, Armor & Callsign Sprite)
    this.statusCanvas = document.createElement('canvas');
    this.statusCanvas.width = 256;
    this.statusCanvas.height = 96;
    this.statusCtx = this.statusCanvas.getContext('2d')!;
    this.statusTexture = new THREE.CanvasTexture(this.statusCanvas);
    this.statusTexture.minFilter = THREE.LinearFilter;

    const spriteMat = new THREE.SpriteMaterial({
      map: this.statusTexture,
      transparent: true,
      depthTest: false,
    });
    this.statusSprite = new THREE.Sprite(spriteMat);
    this.statusSprite.position.set(0, 2.2, 0);
    this.statusSprite.scale.set(1.8, 0.68, 1.0);
    this.rootGroup.add(this.statusSprite);

    this.updateStatusBillboard(100, 100, 50, 50, name, false);
  }

  public updateStatusBillboard(
    hp: number,
    maxHp: number,
    armor: number,
    maxArmor: number,
    name: string,
    isOdogwu: boolean
  ): void {
    const ctx = this.statusCtx;
    ctx.clearRect(0, 0, 256, 96);

    // Background pill
    ctx.fillStyle = 'rgba(10, 12, 18, 0.85)';
    ctx.strokeStyle = this.isEnemy ? 'rgba(239, 68, 68, 0.7)' : 'rgba(6, 182, 212, 0.7)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(8, 8, 240, 80, 10);
    ctx.fill();
    ctx.stroke();

    // Callsign
    ctx.fillStyle = isOdogwu ? '#f59e0b' : '#f4f4f5';
    ctx.font = 'bold 22px "Chakra Petch", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${name} ${isOdogwu ? '👑' : ''}`, 128, 34);

    // HP Bar
    const hpPct = Math.max(0, hp / maxHp);
    ctx.fillStyle = '#27272a';
    ctx.fillRect(24, 44, 208, 16);
    ctx.fillStyle = this.isEnemy ? '#ef4444' : '#10b981';
    ctx.fillRect(24, 44, 208 * hpPct, 16);

    // Armor Bar
    const armPct = Math.max(0, armor / maxArmor);
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(24, 64, 208, 8);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(24, 64, 208 * armPct, 8);

    this.statusTexture.needsUpdate = true;
  }

  private buildProceduralWeapons(): void {
    const gunMetalMat = new THREE.MeshStandardMaterial({
      color: 0x181a20,
      roughness: 0.28,
      metalness: 0.85,
    });
    const gunDarkMat = new THREE.MeshStandardMaterial({
      color: 0x090b10,
      roughness: 0.45,
      metalness: 0.35,
    });
    const steelSilverMat = new THREE.MeshStandardMaterial({
      color: 0xd1d5db,
      roughness: 0.18,
      metalness: 0.95,
    });
    const woodStockMat = new THREE.MeshStandardMaterial({
      color: 0x78350f,
      roughness: 0.65,
      metalness: 0.08,
    });
    const warheadGreenMat = new THREE.MeshStandardMaterial({
      color: 0x4d7c0f,
      roughness: 0.45,
      metalness: 0.25,
    });
    const brassMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.3,
      metalness: 0.85,
    });
    const hazardOrangeMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      roughness: 0.35,
      metalness: 0.45,
    });
    const opticGlowMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
    });
    const opticRedMat = new THREE.MeshBasicMaterial({
      color: 0xef4444,
    });
    const electricCyanMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 2.8,
      roughness: 0.2,
    });

    // 1. Takobin Kano (Melee Cutlass Sword)
    const buildCutlass = (): THREE.Group => {
      const g = new THREE.Group();
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.08, 0.025), steelSilverMat);
      blade.position.set(0.48, 0.02, 0);
      blade.castShadow = true;
      g.add(blade);
      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.042, 0.16, 4), steelSilverMat);
      tip.rotateZ(-Math.PI * 0.5);
      tip.position.set(0.96, 0.02, 0);
      g.add(tip);
      const guard = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.28, 0.08), brassMat);
      guard.position.set(0.05, 0.02, 0);
      g.add(guard);
      const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.22, 8), woodStockMat);
      grip.rotateZ(Math.PI * 0.5);
      grip.position.set(-0.06, 0.02, 0);
      g.add(grip);
      const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), brassMat);
      pommel.position.set(-0.18, 0.02, 0);
      g.add(pommel);
      return g;
    };

    // 2. XAG-9 Service Pistol
    const buildPistolXAG9 = (): THREE.Group => {
      const g = new THREE.Group();
      const slide = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.09, 0.08), gunMetalMat);
      slide.position.set(0.08, 0.05, 0);
      slide.castShadow = true;
      g.add(slide);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.075), gunDarkMat);
      frame.position.set(0.06, -0.01, 0);
      g.add(frame);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.06, 8), steelSilverMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.26, 0.045, 0);
      g.add(barrel);
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.20, 0.07), gunDarkMat);
      grip.position.set(-0.05, -0.12, 0);
      grip.rotateZ(-0.35);
      g.add(grip);
      const guard = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.07, 0.04), gunDarkMat);
      guard.position.set(0.04, -0.07, 0);
      g.add(guard);
      const frontSight = new THREE.Mesh(new THREE.SphereGeometry(0.015, 6, 6), opticGlowMat);
      frontSight.position.set(0.22, 0.10, 0);
      g.add(frontSight);
      return g;
    };

    // 3. Akimbo Micro-Uzis (Dual Wielded SMGs)
    const buildAkimboUzis = (): THREE.Group => {
      const g = new THREE.Group();
      const createUzi = (xOff: number, zOff: number) => {
        const u = new THREE.Group();
        const rec = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.12, 0.08), gunDarkMat);
        rec.position.set(xOff + 0.04, 0.02, zOff);
        rec.castShadow = true;
        u.add(rec);
        const grip = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.20, 0.07), gunDarkMat);
        grip.position.set(xOff - 0.03, -0.12, zOff);
        grip.rotateZ(-0.15);
        u.add(grip);
        const mag = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.22, 0.06), steelSilverMat);
        mag.position.set(xOff - 0.05, -0.26, zOff);
        mag.rotateZ(-0.15);
        u.add(mag);
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.14, 8), gunMetalMat);
        barrel.rotateZ(Math.PI * 0.5);
        barrel.position.set(xOff + 0.26, 0.02, zOff);
        u.add(barrel);
        const comp = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.06, 8), steelSilverMat);
        comp.rotateZ(Math.PI * 0.5);
        comp.position.set(xOff + 0.34, 0.02, zOff);
        u.add(comp);
        const bolt = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.04, 0.04), steelSilverMat);
        bolt.position.set(xOff + 0.04, 0.09, zOff);
        u.add(bolt);
        return u;
      };
      g.add(createUzi(0.05, 0.14));
      g.add(createUzi(-0.05, -0.14));
      return g;
    };

    // 4. AA-12 "Bunker" Shotgun (Heavy Drum-Fed Combat Shotgun)
    const buildShotgunAA12 = (): THREE.Group => {
      const g = new THREE.Group();
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.16, 0.13), gunDarkMat);
      rec.position.set(0.08, 0.04, 0);
      rec.castShadow = true;
      g.add(rec);
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.15, 0.11), gunDarkMat);
      stock.position.set(-0.32, 0.01, 0);
      g.add(stock);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.44, 10), gunMetalMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.48, 0.06, 0);
      g.add(barrel);
      const shroud = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.32, 8), gunMetalMat);
      shroud.rotateZ(Math.PI * 0.5);
      shroud.position.set(0.42, 0.06, 0);
      g.add(shroud);
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.12, 16), gunDarkMat);
      drum.rotateX(Math.PI * 0.5);
      drum.position.set(0.12, -0.16, 0);
      g.add(drum);
      const drumRing = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.13, 12), brassMat);
      drumRing.rotateX(Math.PI * 0.5);
      drumRing.position.set(0.12, -0.16, 0);
      g.add(drumRing);
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.22, 0.08), gunDarkMat);
      grip.position.set(-0.06, -0.14, 0);
      grip.rotateZ(-0.25);
      g.add(grip);
      const sight = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.09, 0.03), gunMetalMat);
      sight.position.set(0.68, 0.13, 0);
      g.add(sight);
      return g;
    };

    // 5. Kano "Zaki" .44 Revolver (Heavy Magnum Hand Cannon)
    const buildRevolverJudge = (): THREE.Group => {
      const g = new THREE.Group();
      const frame = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.14, 0.07), gunMetalMat);
      frame.position.set(0.06, 0.04, 0);
      frame.castShadow = true;
      g.add(frame);
      const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.17, 12), steelSilverMat);
      cyl.rotateZ(Math.PI * 0.5);
      cyl.position.set(0.06, 0.04, 0);
      g.add(cyl);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.38, 10), steelSilverMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.36, 0.07, 0);
      g.add(barrel);
      const underlug = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.05, 0.06), steelSilverMat);
      underlug.position.set(0.36, 0.02, 0);
      g.add(underlug);
      const rib = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.03, 0.04), gunMetalMat);
      rib.position.set(0.36, 0.11, 0);
      g.add(rib);
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.22, 0.08), woodStockMat);
      grip.position.set(-0.08, -0.12, 0);
      grip.rotateZ(-0.4);
      g.add(grip);
      const medal = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.085, 8), brassMat);
      medal.rotateX(Math.PI * 0.5);
      medal.position.set(-0.08, -0.12, 0);
      g.add(medal);
      const hammer = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.06, 0.03), steelSilverMat);
      hammer.position.set(-0.10, 0.11, 0);
      hammer.rotateZ(0.5);
      g.add(hammer);
      return g;
    };

    // 6. XAG-47 Kalashnikov (Iconic Assault Rifle with Curved Banana Mag & Wood Furniture)
    const buildRifleXAG47 = (): THREE.Group => {
      const g = new THREE.Group();
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.13, 0.11), gunMetalMat);
      rec.position.set(0.02, 0.04, 0);
      rec.castShadow = true;
      g.add(rec);
      const magUpper = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.14, 0.075), gunMetalMat);
      magUpper.position.set(0.11, -0.10, 0);
      magUpper.rotateZ(-0.25);
      g.add(magUpper);
      const magLower = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.14, 0.075), gunMetalMat);
      magLower.position.set(0.15, -0.22, 0);
      magLower.rotateZ(0.2);
      g.add(magLower);
      const handguard = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.11, 0.095), woodStockMat);
      handguard.position.set(0.34, 0.04, 0);
      g.add(handguard);
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.13, 0.08), woodStockMat);
      stock.position.set(-0.32, -0.02, 0);
      stock.rotateZ(-0.1);
      g.add(stock);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.44, 8), gunMetalMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.66, 0.03, 0);
      g.add(barrel);
      const gasTube = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.32, 8), gunMetalMat);
      gasTube.rotateZ(Math.PI * 0.5);
      gasTube.position.set(0.46, 0.085, 0);
      g.add(gasTube);
      const comp = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.08, 8), steelSilverMat);
      comp.rotateZ(Math.PI * 0.5);
      comp.position.set(0.88, 0.03, 0);
      g.add(comp);
      const frontSight = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.09, 0.03), gunMetalMat);
      frontSight.position.set(0.82, 0.10, 0);
      g.add(frontSight);
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.22, 0.08), woodStockMat);
      grip.position.set(-0.06, -0.15, 0);
      grip.rotateZ(-0.3);
      g.add(grip);
      return g;
    };

    // 7. MP5-SD "Ghost" SMG (Integrated Suppressor & Reflex Optic)
    const buildGhostSMG = (): THREE.Group => {
      const g = new THREE.Group();
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.12, 0.09), gunDarkMat);
      rec.position.set(0.04, 0.04, 0);
      rec.castShadow = true;
      g.add(rec);
      const silencer = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.52, 12), gunMetalMat);
      silencer.rotateZ(Math.PI * 0.5);
      silencer.position.set(0.45, 0.04, 0);
      g.add(silencer);
      const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.068, 0.068, 0.30, 12), gunDarkMat);
      sleeve.rotateZ(Math.PI * 0.5);
      sleeve.position.set(0.38, 0.04, 0);
      g.add(sleeve);
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.22, 0.06), gunDarkMat);
      mag.position.set(0.12, -0.15, 0);
      mag.rotateZ(0.2);
      g.add(mag);
      const stockRails = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.025, 0.10), steelSilverMat);
      stockRails.position.set(-0.16, 0.03, 0);
      g.add(stockRails);
      const optic = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.07, 0.07), gunDarkMat);
      optic.position.set(0.04, 0.13, 0);
      g.add(optic);
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 6), opticGlowMat);
      dot.position.set(0.11, 0.13, 0);
      g.add(dot);
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.20, 0.07), gunDarkMat);
      grip.position.set(-0.06, -0.14, 0);
      grip.rotateZ(-0.25);
      g.add(grip);
      return g;
    };

    // 8. Harbi Tactical Launcher (Ricochet Saw Blade Disc Launcher)
    const buildRicochetSaw = (): THREE.Group => {
      const g = new THREE.Group();
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.18, 0.14), gunMetalMat);
      chassis.position.set(0.04, 0.03, 0);
      chassis.castShadow = true;
      g.add(chassis);
      const sawBlade = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.025, 20), steelSilverMat);
      sawBlade.rotateX(Math.PI * 0.5);
      sawBlade.position.set(0.42, 0.04, 0);
      g.add(sawBlade);
      const sawHub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.035, 12), brassMat);
      sawHub.rotateX(Math.PI * 0.5);
      sawHub.position.set(0.42, 0.04, 0);
      g.add(sawHub);
      const topRail = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.06), hazardOrangeMat);
      topRail.position.set(0.40, 0.23, 0);
      g.add(topRail);
      const btmRail = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.06), hazardOrangeMat);
      btmRail.position.set(0.40, -0.15, 0);
      g.add(btmRail);
      const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.16, 12), gunDarkMat);
      motor.rotateX(Math.PI * 0.5);
      motor.position.set(0.16, 0.05, 0.09);
      g.add(motor);
      const canister = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.28, 8), hazardOrangeMat);
      canister.rotateZ(Math.PI * 0.5);
      canister.position.set(0.06, -0.12, -0.06);
      g.add(canister);
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.22, 0.08), gunDarkMat);
      grip.position.set(-0.08, -0.15, 0);
      grip.rotateZ(-0.25);
      g.add(grip);
      return g;
    };

    // 9. Arewa .50 Cal Sniper (Massive Anti-Materiel Precision Rifle)
    const buildRailSniper = (): THREE.Group => {
      const g = new THREE.Group();
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.16, 0.12), gunDarkMat);
      rec.position.set(0.05, 0.03, 0);
      rec.castShadow = true;
      g.add(rec);
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.88, 10), steelSilverMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.80, 0.05, 0);
      g.add(barrel);
      const brake = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, 0.09), gunMetalMat);
      brake.position.set(1.26, 0.05, 0);
      g.add(brake);
      const scopeTube = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.44, 12), gunMetalMat);
      scopeTube.rotateZ(Math.PI * 0.5);
      scopeTube.position.set(0.16, 0.18, 0);
      g.add(scopeTube);
      const scopeBell = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.045, 0.12, 12), gunDarkMat);
      scopeBell.rotateZ(Math.PI * 0.5);
      scopeBell.position.set(0.38, 0.18, 0);
      g.add(scopeBell);
      const scopeLens = new THREE.Mesh(new THREE.CircleGeometry(0.055, 12), opticRedMat);
      scopeLens.rotateY(Math.PI * 0.5);
      scopeLens.position.set(0.44, 0.18, 0);
      g.add(scopeLens);
      const ringF = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.09), gunDarkMat);
      ringF.position.set(0.28, 0.13, 0);
      g.add(ringF);
      const ringR = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.09), gunDarkMat);
      ringR.position.set(0.04, 0.13, 0);
      g.add(ringR);
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.26, 0.08), gunMetalMat);
      mag.position.set(0.16, -0.16, 0);
      g.add(mag);
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.16, 0.07), gunDarkMat);
      stock.position.set(-0.40, -0.01, 0);
      g.add(stock);
      const bipod = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.03, 0.08), steelSilverMat);
      bipod.position.set(0.58, -0.07, 0);
      g.add(bipod);
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.22, 0.08), gunDarkMat);
      grip.position.set(-0.08, -0.16, 0);
      grip.rotateZ(-0.25);
      g.add(grip);
      return g;
    };

    // 10. RPG-7 Bunker Buster (Shoulder Launcher with Warhead, Exhaust Bell & PGO Sight)
    const buildBunkerRPG = (): THREE.Group => {
      const g = new THREE.Group();
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.15, 12), gunMetalMat);
      tube.rotateZ(Math.PI * 0.5);
      tube.position.set(0.12, 0.04, 0);
      tube.castShadow = true;
      g.add(tube);
      const exhaust = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.22, 12), gunMetalMat);
      exhaust.rotateZ(Math.PI * 0.5);
      exhaust.position.set(-0.52, 0.04, 0);
      g.add(exhaust);
      const heatShield = new THREE.Mesh(new THREE.CylinderGeometry(0.082, 0.082, 0.44, 12), woodStockMat);
      heatShield.rotateZ(Math.PI * 0.5);
      heatShield.position.set(-0.06, 0.04, 0);
      g.add(heatShield);
      const gripFront = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.22, 0.06), woodStockMat);
      gripFront.position.set(0.18, -0.13, 0);
      gripFront.rotateZ(-0.2);
      g.add(gripFront);
      const gripRear = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.20, 0.06), woodStockMat);
      gripRear.position.set(-0.08, -0.13, 0);
      gripRear.rotateZ(-0.2);
      g.add(gripRear);
      const opticBracket = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.08), gunDarkMat);
      opticBracket.position.set(0.08, 0.14, 0.08);
      g.add(opticBracket);
      // PG-7V Rocket Warhead Protruding From Muzzle:
      const warheadBase = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.22, 10), gunDarkMat);
      warheadBase.rotateZ(Math.PI * 0.5);
      warheadBase.position.set(0.72, 0.04, 0);
      g.add(warheadBase);
      const ogive = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.28, 12), warheadGreenMat);
      ogive.rotateZ(-Math.PI * 0.5);
      ogive.position.set(0.92, 0.04, 0);
      g.add(ogive);
      const fuse = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.12, 8), steelSilverMat);
      fuse.rotateZ(Math.PI * 0.5);
      fuse.position.set(1.10, 0.04, 0);
      g.add(fuse);
      return g;
    };

    // 11. Tactical EMP Arc (Sci-Fi High-Voltage Dual-Prong Arc Projector)
    const buildShockArc = (): THREE.Group => {
      const g = new THREE.Group();
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.16, 0.12), gunDarkMat);
      chassis.position.set(0.06, 0.03, 0);
      chassis.castShadow = true;
      g.add(chassis);
      const topProng = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.035, 0.035), steelSilverMat);
      topProng.position.set(0.46, 0.11, 0);
      topProng.rotateZ(-0.1);
      g.add(topProng);
      const btmProng = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.035, 0.035), steelSilverMat);
      btmProng.position.set(0.46, -0.05, 0);
      btmProng.rotateZ(0.1);
      g.add(btmProng);
      [0.26, 0.36, 0.46].forEach((rx) => {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.018, 8, 16), electricCyanMat);
        ring.rotateY(Math.PI * 0.5);
        ring.position.set(rx, 0.03, 0);
        g.add(ring);
      });
      const plasmaCell = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.24, 10), electricCyanMat);
      plasmaCell.rotateZ(Math.PI * 0.5);
      plasmaCell.position.set(0.12, -0.14, 0);
      g.add(plasmaCell);
      const core = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.06, 0.13), electricCyanMat);
      core.position.set(0.06, 0.08, 0);
      g.add(core);
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.20, 0.07), gunDarkMat);
      grip.position.set(-0.06, -0.14, 0);
      grip.rotateZ(-0.25);
      g.add(grip);
      return g;
    };

    // 12. FN Heavy Support Gun (6-Barrel Gatling Minigun with Ammo Drum)
    const buildVulcanMinigun = (): THREE.Group => {
      const g = new THREE.Group();
      const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.76, 8), gunDarkMat);
      axle.rotateZ(Math.PI * 0.5);
      axle.position.set(0.55, 0.04, 0);
      g.add(axle);
      const barrelCount = 6;
      const barrelRadius = 0.072;
      for (let i = 0; i < barrelCount; i++) {
        const angle = i * ((Math.PI * 2) / barrelCount);
        const by = 0.04 + Math.sin(angle) * barrelRadius;
        const bz = Math.cos(angle) * barrelRadius;
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.74, 8), steelSilverMat);
        barrel.rotateZ(Math.PI * 0.5);
        barrel.position.set(0.55, by, bz);
        barrel.castShadow = true;
        g.add(barrel);
      }
      [0.45, 0.82].forEach((cx) => {
        const clamp = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.022, 8, 16), gunMetalMat);
        clamp.rotateY(Math.PI * 0.5);
        clamp.position.set(cx, 0.04, 0);
        g.add(clamp);
      });
      const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.32, 12), gunMetalMat);
      motor.rotateZ(Math.PI * 0.5);
      motor.position.set(0.12, 0.04, 0);
      motor.castShadow = true;
      g.add(motor);
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.16, 16), gunDarkMat);
      drum.rotateX(Math.PI * 0.5);
      drum.position.set(-0.06, -0.18, 0);
      g.add(drum);
      const belt = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.16, 0.08), brassMat);
      belt.position.set(0.06, -0.10, 0);
      g.add(belt);
      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.04, 0.08), gunDarkMat);
      handle.position.set(0.10, 0.22, 0);
      g.add(handle);
      const postF = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.09, 0.04), gunDarkMat);
      postF.position.set(0.20, 0.16, 0);
      g.add(postF);
      const postR = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.09, 0.04), gunDarkMat);
      postR.position.set(0.00, 0.16, 0);
      g.add(postR);
      return g;
    };

    // Register All 12 Weapon Meshes
    this.weaponMeshMap.set(WeaponId.CUTLASS, buildCutlass());
    this.weaponMeshMap.set(WeaponId.PISTOL_XAG9, buildPistolXAG9());
    this.weaponMeshMap.set(WeaponId.AKIMBO_UZIS, buildAkimboUzis());
    this.weaponMeshMap.set(WeaponId.SHOTGUN_AA12, buildShotgunAA12());
    this.weaponMeshMap.set(WeaponId.REVOLVER_JUDGE, buildRevolverJudge());
    this.weaponMeshMap.set(WeaponId.RIFLE_XAG47, buildRifleXAG47());
    this.weaponMeshMap.set(WeaponId.GHOST_SMG, buildGhostSMG());
    this.weaponMeshMap.set(WeaponId.RICOCHET_SAW, buildRicochetSaw());
    this.weaponMeshMap.set(WeaponId.RAIL_SNIPER, buildRailSniper());
    this.weaponMeshMap.set(WeaponId.BUNKER_RPG, buildBunkerRPG());
    this.weaponMeshMap.set(WeaponId.SHOCK_ARC, buildShockArc());
    this.weaponMeshMap.set(WeaponId.VULCAN_MINIGUN, buildVulcanMinigun());

    this.weaponMeshMap.forEach((mesh, id) => {
      mesh.visible = (id === this.activeWeaponId);
      this.weaponMount.add(mesh);
    });
  }

  public setWeapon(id: WeaponId): void {
    this.activeWeaponId = id;
    this.weaponMeshMap.forEach((mesh, weaponId) => {
      mesh.visible = (weaponId === id);
    });
  }

  public setOdogwuCrown(active: boolean): void {
    this.crownMesh.visible = active;
  }

  public setSarkiCrown(active: boolean): void {
    this.crownMesh.visible = active;
  }


  public triggerRecoilKick(amount: number): void {
    this.recoilOffset = Math.min(this.recoilOffset + amount, 0.45);
  }

  public triggerThrusterBurst(active: boolean): void {
    const op = active ? 0.95 : 0.0;
    (this.thrusterFlameL.material as THREE.MeshBasicMaterial).opacity = op;
    (this.thrusterFlameR.material as THREE.MeshBasicMaterial).opacity = op;
    if (active) {
      const scale = 0.8 + Math.random() * 0.5;
      this.thrusterFlameL.scale.set(scale, scale * 1.3, scale);
      this.thrusterFlameR.scale.set(scale, scale * 1.3, scale);
    }
  }

  public triggerRagdoll(impulseX: number, impulseY: number): void {
    this.isRagdoll = true;
    this.statusSprite.visible = false;
    this.ragdollVelocity.set(impulseX, impulseY, (Math.random() - 0.5) * 8.0);
    this.ragdollAngVel.set(
      (Math.random() - 0.5) * 14.0,
      (Math.random() - 0.5) * 14.0,
      (Math.random() - 0.5) * 18.0
    );
  }

  public update(
    dt: number,
    posX: number,
    posY: number,
    vx: number,
    vy: number,
    isGrounded: boolean,
    aimAngle: number,
    isSliding: boolean = false,
    tileMap?: TileMap3D
  ): void {
    if (this.isRagdoll) {
      this.ragdollVelocity.y += -34.0 * dt;
      this.rootGroup.position.addScaledVector(this.ragdollVelocity, dt);
      this.rootGroup.rotation.x += this.ragdollAngVel.x * dt;
      this.rootGroup.rotation.y += this.ragdollAngVel.y * dt;
      this.rootGroup.rotation.z += this.ragdollAngVel.z * dt;
      if (this.rootGroup.position.y < 1.0) {
        this.rootGroup.position.y = 1.0;
        this.ragdollVelocity.y *= -0.3;
        this.ragdollVelocity.x *= 0.7;
      }
      return;
    }

    this.rootGroup.position.set(posX, posY, 0);

    const facingRight = Math.cos(aimAngle) >= 0;
    this.rootGroup.scale.x = facingRight ? 1 : -1;

    // Calculate local shoulder angle accurately without modular wrap discontinuity
    const targetAngle = facingRight
      ? THREE.MathUtils.clamp(aimAngle, -1.45, 1.45)
      : THREE.MathUtils.clamp(Math.atan2(Math.sin(aimAngle), -Math.cos(aimAngle)), -1.45, 1.45);

    // Shortest angular difference wrapping (prevents 360-degree somersault flip bug)
    let diff = targetAngle - this.shoulderGroup.rotation.z;
    while (diff < -Math.PI) diff += Math.PI * 2;
    while (diff > Math.PI) diff -= Math.PI * 2;

    this.shoulderGroup.rotation.z += diff * Math.min(dt * 30.0, 1.0);
    this.headGroup.rotation.z = this.shoulderGroup.rotation.z * 0.45;

    // Laser Sight Obstacle Raycasting: snaps to wall surfaces cleanly like Mini Militia (Player only)
    if (!this.isEnemy) {
      let laserDist = 26.0;
      if (tileMap) {
        const cosA = Math.cos(aimAngle);
        const sinA = Math.sin(aimAngle);
        const startX = posX + (facingRight ? 0.3 : -0.3);
        const startY = posY + 0.95;

        for (let d = 0.6; d <= 26.0; d += 0.5) {
          const checkX = Math.floor(startX + cosA * d);
          const checkY = Math.floor(startY + sinA * d);
          if (tileMap.isSolid(checkX, checkY)) {
            laserDist = Math.max(0.6, d);
            break;
          }
        }
      }

      this.laserLine.scale.x = laserDist / 28.0;
      this.crosshairMesh.position.x = laserDist;
      this.laserLine.visible = true;
      this.crosshairMesh.visible = true;
    } else {
      this.laserLine.visible = false;
      this.crosshairMesh.visible = false;
    }

    // Procedural Recoil Kick
    if (this.recoilOffset > 0) {
      this.weaponMount.position.x = 0.28 - this.recoilOffset;
      this.recoilOffset = Math.max(0, this.recoilOffset - dt * 2.8);
    } else {
      this.weaponMount.position.x = 0.28;
    }

    // Crown spinning
    if (this.crownMesh.visible) {
      this.crownMesh.rotation.y += dt * 3.5;
    }

    // Legs Animation
    if (isSliding) {
      this.torsoGroup.position.y = 0.42;
      this.torsoGroup.rotation.z = facingRight ? -0.75 : 0.75;
      this.leftLeg.rotation.z = -1.25;
      this.rightLeg.rotation.z = -1.15;
    } else {
      this.torsoGroup.position.y = 0.95;
      this.torsoGroup.rotation.z = 0;

      if (!isGrounded) {
        this.leftLeg.rotation.z = -0.55;
        this.rightLeg.rotation.z = 0.45;
      } else if (Math.abs(vx) > 0.5) {
        this.walkCycle += dt * 15.0;
        const swing = Math.sin(this.walkCycle) * 0.7;
        this.leftLeg.rotation.z = swing;
        this.rightLeg.rotation.z = -swing;
      } else {
        this.leftLeg.rotation.z = 0;
        this.rightLeg.rotation.z = 0;
      }
    }
  }

  public destroy(scene: THREE.Scene): void {
    if (this.statusTexture) this.statusTexture.dispose();
    this.rootGroup.traverse((obj) => {
      if ((obj as THREE.Mesh).geometry) {
        (obj as THREE.Mesh).geometry.dispose();
      }
      if ((obj as THREE.Mesh).material) {
        const mat = (obj as THREE.Mesh).material;
        if (Array.isArray(mat)) {
          mat.forEach((m) => m.dispose());
        } else {
          mat.dispose();
        }
      }
    });
    scene.remove(this.rootGroup);
  }
}
