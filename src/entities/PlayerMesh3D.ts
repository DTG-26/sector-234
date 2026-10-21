import * as THREE from 'three';
import { COLORS } from '../config/constants';
import { WeaponId } from '../config/types';
import type { TileMap3D } from '../world/TileMap3D';

function createCamoTexture(isEnemy: boolean): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = isEnemy ? '#1e293b' : '#142914';
  ctx.fillRect(0, 0, 128, 128);

  const colors = isEnemy
    ? ['#0f172a', '#334155', '#475569', '#7f1d1d']
    : ['#2e5328', '#1b3b1e', '#3d6b35', '#4b5523'];

  for (let i = 0; i < 35; i++) {
    ctx.fillStyle = colors[i % colors.length];
    const x = Math.floor(Math.random() * 128);
    const y = Math.floor(Math.random() * 128);
    const w = 12 + Math.floor(Math.random() * 26);
    const h = 8 + Math.floor(Math.random() * 18);
    ctx.beginPath();
    ctx.ellipse(x, y, w * 0.5, h * 0.5, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 2);
  return tex;
}

function createFlagTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 36;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = '#008751';
  ctx.fillRect(0, 0, 21, 36);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(21, 0, 22, 36);
  ctx.fillStyle = '#008751';
  ctx.fillRect(43, 0, 21, 36);

  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, 62, 34);

  return new THREE.CanvasTexture(canvas);
}

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
  public slashAnimTimer: number = 0;
  public isRagdoll: boolean = false;
  private ragdollVelocity: THREE.Vector3 = new THREE.Vector3();
  private ragdollAngVel: THREE.Vector3 = new THREE.Vector3();
  // Team, Ally & Damage Flash State
  public isAlly: boolean = false;
  public team: 'blue' | 'red' | 'none' = 'none';
  public damageFlashTimer: number = 0;
  public underSuitMat: THREE.MeshStandardMaterial;
  public armorMat: THREE.MeshStandardMaterial;
  public trimMat: THREE.Material;
  public nvgMat: THREE.MeshBasicMaterial;
  private defaultArmorEmissive: number = 0x064e3b;

  constructor(scene: THREE.Scene, isEnemy: boolean = false, name: string = 'Operative') {
    this.isEnemy = isEnemy;
    this.isAlly = !isEnemy;
    this.rootGroup = new THREE.Group();
    scene.add(this.rootGroup);

    // 1. HIGH-CONTRAST SPEC-OPS CAMOUFLAGE & TACTICAL MATERIALS
    const camoTex = createCamoTexture(isEnemy);
    const flagTex = createFlagTexture();
    const flagMat = new THREE.MeshBasicMaterial({ map: flagTex });

    // Under-Suit Fatigues with Nigerian Woodland DPM Camo
    const underSuitMat = new THREE.MeshStandardMaterial({
      color: isEnemy ? 0x52525b : 0x3d5a35,
      map: camoTex,
      emissive: isEnemy ? 0x18181b : 0x0f200f,
      roughness: 0.65,
      metalness: 0.05,
    });

    // Armored Chest Rig & Knee Guards
    const armorMat = new THREE.MeshStandardMaterial({
      color: isEnemy ? 0x991b1b : 0x16a34a,
      map: camoTex,
      emissive: isEnemy ? 0x450a0a : 0x064e3b,
      roughness: 0.5,
      metalness: 0.1,
    });

    // Shoulder Trim, Belt & Gloves: Stark White (Player) vs Glowing Crimson (Enemy)
    const trimMat = isEnemy
      ? new THREE.MeshBasicMaterial({ color: 0xef4444 })
      : new THREE.MeshStandardMaterial({
          color: 0xf8fafc,
          emissive: 0x475569,
          roughness: 0.4,
          metalness: 0.05,
        });

    // Warm Commando Skin Tone
    const skinMat = new THREE.MeshStandardMaterial({
      color: isEnemy ? 0x854d0e : 0xa16207,
      emissive: isEnemy ? 0x2e1002 : 0x3d1d05,
      roughness: 0.7,
      metalness: 0.05,
    });

    // Quad-NVG Visor Eyes: Pure Unlit MeshBasicMaterial (Phosphor Green vs Glowing Red)
    const nvgMat = new THREE.MeshBasicMaterial({
      color: isEnemy ? 0xef4444 : 0x4ade80,
    });

    this.underSuitMat = underSuitMat;
    this.armorMat = armorMat;
    this.trimMat = trimMat;
    this.nvgMat = nvgMat;
    this.defaultArmorEmissive = isEnemy ? 0x450a0a : 0x064e3b;

    // 2. Torso & Heavy Plate Carrier
    this.torsoGroup = new THREE.Group();
    this.torsoGroup.position.set(0, 0.95, 0);
    this.rootGroup.add(this.torsoGroup);

    // Inner Body Fatigues (Under-suit)
    const torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.62, 0.4), underSuitMat);
    torsoMesh.castShadow = true;
    this.torsoGroup.add(torsoMesh);

    // Chunky Tactical Plate Carrier (Armor Mat)
    const vestMesh = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.54, 0.46), armorMat);
    vestMesh.castShadow = true;
    this.torsoGroup.add(vestMesh);

    // Nigerian Flag Patches on Chest and Left Shoulder (Player & Allies)
    if (!isEnemy) {
      const chestFlag = new THREE.Mesh(new THREE.PlaneGeometry(0.18, 0.10), flagMat);
      chestFlag.position.set(0, 0.08, 0.24);
      this.torsoGroup.add(chestFlag);

      const armFlag = new THREE.Mesh(new THREE.PlaneGeometry(0.14, 0.08), flagMat);
      armFlag.position.set(-0.34, 0.10, 0.12);
      armFlag.rotation.y = -Math.PI * 0.35;
      this.torsoGroup.add(armFlag);
    }

    // Tactical Radio with Antenna on left shoulder
    const radioMesh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.15, 0.07), underSuitMat);
    radioMesh.position.set(-0.20, 0.28, -0.12);
    this.torsoGroup.add(radioMesh);
    const antennaMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.32, 6), underSuitMat);
    antennaMesh.position.set(-0.20, 0.45, -0.12);
    this.torsoGroup.add(antennaMesh);

    // Tactical Waist Belt
    const beltMesh = new THREE.Mesh(new THREE.BoxGeometry(0.59, 0.10, 0.47), trimMat);
    beltMesh.position.set(0, -0.22, 0);
    this.torsoGroup.add(beltMesh);

    // Front Ammo Pouches
    for (let i = -1; i <= 1; i++) {
      const pouch = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.16, 0.08), armorMat);
      pouch.position.set(i * 0.16, -0.06, 0.25);
      this.torsoGroup.add(pouch);
    }

    // Shoulder Pauldrons / Armor Guards with Contrast Trim Strips
    const lShoulder = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.24), armorMat);
    lShoulder.position.set(-0.33, 0.2, 0);
    this.torsoGroup.add(lShoulder);
    const lTrim = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.04, 0.25), trimMat);
    lTrim.position.set(-0.33, 0.29, 0);
    this.torsoGroup.add(lTrim);

    const rShoulder = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.24), armorMat);
    rShoulder.position.set(0.33, 0.2, 0);
    this.torsoGroup.add(rShoulder);
    const rTrim = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.04, 0.25), trimMat);
    rTrim.position.set(0.33, 0.29, 0);
    this.torsoGroup.add(rTrim);

    // Back Jetpack Thruster Module
    this.thrusterGroup = new THREE.Group();
    this.thrusterGroup.position.set(0, 0.05, -0.26);
    this.torsoGroup.add(this.thrusterGroup);

    const packMesh = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.44, 0.16), armorMat);
    packMesh.castShadow = true;
    this.thrusterGroup.add(packMesh);

    // Dual Rocket Exhaust Nozzles (Gunmetal Steel with low metalness)
    const nozzleGeom = new THREE.CylinderGeometry(0.07, 0.1, 0.18, 10);
    const nozzleMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      emissive: 0x1e293b,
      metalness: 0.1,
      roughness: 0.3,
    });
    const nozzleL = new THREE.Mesh(nozzleGeom, nozzleMat);
    nozzleL.position.set(-0.13, -0.24, 0);
    this.thrusterGroup.add(nozzleL);

    const nozzleR = new THREE.Mesh(nozzleGeom, nozzleMat);
    nozzleR.position.set(0.13, -0.24, 0);
    this.thrusterGroup.add(nozzleR);

    // Twin Jet Thruster Flames (Bright fiery orange / yellow cone)
    const flameGeom = new THREE.ConeGeometry(0.11, 0.55, 8);
    flameGeom.rotateX(Math.PI);
    const flameMat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.0,
    });
    this.thrusterFlameL = new THREE.Mesh(flameGeom, flameMat);
    this.thrusterFlameL.position.set(-0.13, -0.52, 0);
    this.thrusterGroup.add(this.thrusterFlameL);

    this.thrusterFlameR = new THREE.Mesh(flameGeom, flameMat.clone());
    this.thrusterFlameR.position.set(0.13, -0.52, 0);
    this.thrusterGroup.add(this.thrusterFlameR);

    // 3. Head & Ballistic Combat Helmet / Nigerian Army Green Beret
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 0.44, 0);
    this.torsoGroup.add(this.headGroup);

    // Commando Face
    const headGeom = new THREE.SphereGeometry(0.24, 16, 14);
    const headMesh = new THREE.Mesh(headGeom, skinMat);
    headMesh.castShadow = true;
    this.headGroup.add(headMesh);

    if (!isEnemy) {
      // Authentic Nigerian Army Spec-Ops Green Beret
      const beretGeom = new THREE.CylinderGeometry(0.26, 0.21, 0.11, 16);
      beretGeom.scale(1.15, 0.8, 1.1);
      const beretMat = new THREE.MeshStandardMaterial({
        color: 0x00502e,
        roughness: 0.75,
        metalness: 0.05,
        emissive: 0x002616,
        emissiveIntensity: 0.35,
      });
      const beret = new THREE.Mesh(beretGeom, beretMat);
      beret.position.set(0.04, 0.16, 0.02);
      beret.rotation.z = -0.22;
      beret.rotation.x = -0.08;
      beret.castShadow = true;
      this.headGroup.add(beret);

      // Brass Military Eagle Crest Badge on Beret Front-Left
      const crestGeom = new THREE.BoxGeometry(0.06, 0.08, 0.02);
      const crestMat = new THREE.MeshStandardMaterial({
        color: 0xfacc15,
        metalness: 0.4,
        roughness: 0.3,
        emissive: 0x854d0e,
      });
      const crest = new THREE.Mesh(crestGeom, crestMat);
      crest.position.set(-0.14, 0.16, 0.18);
      crest.rotation.y = -0.3;
      this.headGroup.add(crest);

      // Tactical Ear Comms Headset with Mic Boom
      const commsMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });
      const earCup = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.04, 8), commsMat);
      earCup.position.set(-0.25, 0.02, 0);
      earCup.rotation.z = Math.PI * 0.5;
      this.headGroup.add(earCup);

      const micBoom = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.18, 6), commsMat);
      micBoom.position.set(-0.23, -0.06, 0.10);
      micBoom.rotation.x = 0.5;
      this.headGroup.add(micBoom);
    } else {
      // Ballistic Helmet Dome for Enemy Operatives
      const helmetGeom = new THREE.SphereGeometry(0.27, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.58);
      const helmetMesh = new THREE.Mesh(helmetGeom, armorMat);
      helmetMesh.position.set(0, 0.03, 0);
      helmetMesh.castShadow = true;
      this.headGroup.add(helmetMesh);

      // Helmet Front Rim Trim (Stark White / Red)
      const brimGeom = new THREE.CylinderGeometry(0.285, 0.285, 0.045, 16, 1, false, 0, Math.PI);
      const brimMesh = new THREE.Mesh(brimGeom, trimMat);
      brimMesh.position.set(0, 0.04, 0.08);
      brimMesh.rotation.x = 0.2;
      this.headGroup.add(brimMesh);

      // Tactical Quad-NVG Visor Eyes
      const goggleFrame = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.09, 0.08), underSuitMat);
      goggleFrame.position.set(0, 0.12, 0.22);
      this.headGroup.add(goggleFrame);

      const goggleLens = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.06, 0.04), nvgMat);
      goggleLens.position.set(0, 0.12, 0.26);
      this.headGroup.add(goggleLens);
      this.nvgLenses.push(goggleLens);
    }

    // 3D Gold Odogwu Crown
    const crownGeom = new THREE.CylinderGeometry(0.26, 0.18, 0.18, 6);
    const crownMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 0.8,
      metalness: 0.12,
      roughness: 0.2,
    });
    this.crownMesh = new THREE.Mesh(crownGeom, crownMat);
    this.crownMesh.position.set(0, 0.44, 0);
    this.crownMesh.visible = false;
    this.headGroup.add(this.crownMesh);

    // 4. Arms & 360° IK Shoulder Group
    this.shoulderGroup = new THREE.Group();
    this.shoulderGroup.position.set(0, 0.16, 0);
    this.torsoGroup.add(this.shoulderGroup);

    this.rightArm = new THREE.Group();
    this.leftArm = new THREE.Group();
    this.shoulderGroup.add(this.rightArm);
    this.shoulderGroup.add(this.leftArm);

    const armGeom = new THREE.BoxGeometry(0.14, 0.44, 0.16);
    const rArmMesh = new THREE.Mesh(armGeom, underSuitMat);
    rArmMesh.position.set(0.32, -0.16, 0);
    rArmMesh.castShadow = true;
    this.rightArm.add(rArmMesh);

    // Stark Contrast Gloves
    const rGlove = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.12, 0.17), trimMat);
    rGlove.position.set(0.32, -0.32, 0);
    this.rightArm.add(rGlove);

    const lArmMesh = new THREE.Mesh(armGeom, underSuitMat);
    lArmMesh.position.set(-0.32, -0.16, 0);
    lArmMesh.castShadow = true;
    this.leftArm.add(lArmMesh);

    const lGlove = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.12, 0.17), trimMat);
    lGlove.position.set(-0.32, -0.32, 0);
    this.leftArm.add(lGlove);

    // Weapon Mount Joint
    this.weaponMount = new THREE.Group();
    this.weaponMount.position.set(0.28, -0.2, 0.38);
    this.shoulderGroup.add(this.weaponMount);

    this.buildProceduralWeapons();

    // Weapon-mounted Tactical Light (Soft, non-shadow-casting fill)
    this.weaponSpotLight = new THREE.SpotLight(0xfffaed, 0.8, 25, 0.4, 0.5, 1.5);
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
      color: 0xff0044,
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

    // 5. Articulated Legs with Knee Guards & Boots
    this.leftLeg = new THREE.Group();
    this.rightLeg = new THREE.Group();
    this.leftLeg.position.set(-0.18, 0.65, 0);
    this.rightLeg.position.set(0.18, 0.65, 0);
    this.rootGroup.add(this.leftLeg);
    this.rootGroup.add(this.rightLeg);

    const legGeom = new THREE.BoxGeometry(0.18, 0.68, 0.2);
    const lLegMesh = new THREE.Mesh(legGeom, underSuitMat);
    lLegMesh.position.set(0, -0.34, 0);
    lLegMesh.castShadow = true;
    this.leftLeg.add(lLegMesh);

    // Knee Armor Guard
    const lKnee = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.16, 0.08), armorMat);
    lKnee.position.set(0, -0.32, 0.12);
    this.leftLeg.add(lKnee);

    const rLegMesh = new THREE.Mesh(legGeom, underSuitMat);
    rLegMesh.position.set(0, -0.34, 0);
    rLegMesh.castShadow = true;
    this.rightLeg.add(rLegMesh);

    const rKnee = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.16, 0.08), armorMat);
    rKnee.position.set(0, -0.32, 0.12);
    this.rightLeg.add(rKnee);

    // Combat Boots
    const bootGeom = new THREE.BoxGeometry(0.20, 0.20, 0.28);
    const lBoot = new THREE.Mesh(bootGeom, armorMat);
    lBoot.position.set(0, -0.62, 0.04);
    this.leftLeg.add(lBoot);

    const lSole = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.05, 0.29), trimMat);
    lSole.position.set(0, -0.72, 0.04);
    this.leftLeg.add(lSole);

    const rBoot = new THREE.Mesh(bootGeom, armorMat);
    rBoot.position.set(0, -0.62, 0.04);
    this.rightLeg.add(rBoot);

    const rSole = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.05, 0.29), trimMat);
    rSole.position.set(0, -0.72, 0.04);
    this.rightLeg.add(rSole);

    // 6. Overhead Status Billboard (HP, Armor & Callsign Sprite)
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

  public setTeam(team: 'blue' | 'red' | 'none', isAlly: boolean): void {
    this.team = team;
    this.isAlly = isAlly;
    this.isEnemy = !isAlly;

    if (team === 'blue') {
      this.armorMat.color.setHex(0x1d4ed8);
      this.defaultArmorEmissive = 0x1e3a8a;
      this.armorMat.emissive.setHex(0x1e3a8a);
      if (this.trimMat instanceof THREE.MeshBasicMaterial || this.trimMat instanceof THREE.MeshStandardMaterial) {
        this.trimMat.color.setHex(0x38bdf8);
      }
      this.nvgMat.color.setHex(0x38bdf8);
    } else if (team === 'red') {
      this.armorMat.color.setHex(0x991b1b);
      this.defaultArmorEmissive = 0x450a0a;
      this.armorMat.emissive.setHex(0x450a0a);
      if (this.trimMat instanceof THREE.MeshBasicMaterial || this.trimMat instanceof THREE.MeshStandardMaterial) {
        this.trimMat.color.setHex(0xef4444);
      }
      this.nvgMat.color.setHex(0xef4444);
    } else {
      if (isAlly) {
        this.armorMat.color.setHex(0x16a34a);
        this.defaultArmorEmissive = 0x064e3b;
        this.armorMat.emissive.setHex(0x064e3b);
        if (this.trimMat instanceof THREE.MeshBasicMaterial || this.trimMat instanceof THREE.MeshStandardMaterial) {
          this.trimMat.color.setHex(0xf8fafc);
        }
        this.nvgMat.color.setHex(0x4ade80);
      } else {
        this.armorMat.color.setHex(0x991b1b);
        this.defaultArmorEmissive = 0x450a0a;
        this.armorMat.emissive.setHex(0x450a0a);
        if (this.trimMat instanceof THREE.MeshBasicMaterial || this.trimMat instanceof THREE.MeshStandardMaterial) {
          this.trimMat.color.setHex(0xef4444);
        }
        this.nvgMat.color.setHex(0xef4444);
      }
    }
  }

  public triggerDamageFlash(): void {
    this.damageFlashTimer = 0.12;
    this.armorMat.emissive.setHex(0xffffff);
    this.armorMat.emissiveIntensity = 2.0;
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
    ctx.fillStyle = 'rgba(5, 8, 6, 0.90)';

    let borderStroke = 'rgba(239, 68, 68, 0.85)';
    let hpColor = '#ef4444';
    let teamTag = '';

    if (this.team === 'blue') {
      borderStroke = 'rgba(56, 189, 248, 0.90)';
      hpColor = '#38bdf8';
      teamTag = this.isAlly ? '[BLUE ALLY] ' : '[BLUE] ';
    } else if (this.team === 'red') {
      borderStroke = 'rgba(239, 68, 68, 0.90)';
      hpColor = '#ef4444';
      teamTag = this.isAlly ? '[RED ALLY] ' : '[RED] ';
    } else {
      if (this.isAlly) {
        borderStroke = 'rgba(34, 197, 94, 0.90)';
        hpColor = '#22c55e';
      } else {
        borderStroke = 'rgba(239, 68, 68, 0.90)';
        hpColor = '#ef4444';
      }
    }

    ctx.strokeStyle = borderStroke;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(8, 8, 240, 80, 10);
    ctx.fill();
    ctx.stroke();

    // Callsign
    ctx.fillStyle = isOdogwu ? '#22c55e' : (this.team === 'blue' ? '#38bdf8' : (this.team === 'red' ? '#fca5a5' : '#ffffff'));
    ctx.font = 'bold 20px "Chakra Petch", "JetBrains Mono", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${teamTag}${name} ${isOdogwu ? '[◆]' : ''}`, 128, 34);

    // HP Bar
    const hpPct = Math.max(0, hp / maxHp);
    ctx.fillStyle = '#1c2b22';
    ctx.fillRect(24, 44, 208, 16);
    ctx.fillStyle = hpColor;
    ctx.fillRect(24, 44, 208 * hpPct, 16);

    // Armor Bar
    const armPct = Math.max(0, armor / maxArmor);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(24, 64, 208, 8);
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(24, 64, 208 * armPct, 8);

    this.statusTexture.needsUpdate = true;
  }

  private buildProceduralWeapons(): void {
    // 1. Dark Ordnance Gunmetal Steel (Receivers, Slides, Barrels)
    const gunmetalMat = new THREE.MeshStandardMaterial({
      color: 0x27272a,
      emissive: 0x09090b,
      metalness: 0.85,
      roughness: 0.35,
    });

    // 2. Matte Tactical Polymer (Stocks, Grips, Polymer Lower Receivers)
    const polymerBlackMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      emissive: 0x09090b,
      metalness: 0.15,
      roughness: 0.70,
    });

    // 3. Blued Precision Steel (Barrels, Cylinders, Muzzle Brakes)
    const bluedSteelMat = new THREE.MeshStandardMaterial({
      color: 0x3f3f46,
      emissive: 0x18181b,
      metalness: 0.88,
      roughness: 0.28,
    });

    // 4. Polished Mahogany Wood (for AK-47 & RPG heat shield)
    const akWoodMat = new THREE.MeshStandardMaterial({
      color: 0x78350f,
      roughness: 0.45,
      metalness: 0.05,
      emissive: 0x451a03,
      emissiveIntensity: 0.25,
    });

    // 5. Desert Tan / Coyote FDE Furniture
    const coyoteTanMat = new THREE.MeshStandardMaterial({
      color: 0x78563a,
      emissive: 0x2e1e12,
      metalness: 0.12,
      roughness: 0.60,
    });

    // 6. High-Carbon Polished Edge Steel (Cutlass blade)
    const polishedSteelMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      emissive: 0x334155,
      metalness: 0.95,
      roughness: 0.18,
    });

    // 7. Tactical Accent Mats
    const opticDotGreen = new THREE.MeshBasicMaterial({ color: 0x22c55e });
    const opticDotRed = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const opticLensMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      roughness: 0.1,
      metalness: 0.9,
    });
    const brassAmmoMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      emissive: 0x78350f,
      metalness: 0.9,
      roughness: 0.22,
    });
    const odGreenMat = new THREE.MeshStandardMaterial({
      color: 0x365314,
      emissive: 0x142008,
      metalness: 0.15,
      roughness: 0.65,
    });

    // Helper to apply 1.35x scale to all weapons
    const applyWeaponScale = (g: THREE.Group): THREE.Group => {
      g.scale.set(1.35, 1.35, 1.35);
      return g;
    };

    // 1. Takobin Kano (Traditional Spec-Ops Tactical Sword)
    const buildCutlass = (): THREE.Group => {
      const g = new THREE.Group();
      // Double-edged steel blade with fuller blood-groove
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.07, 0.025), polishedSteelMat);
      blade.position.set(0.50, 0.02, 0);
      g.add(blade);

      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.18, 4), polishedSteelMat);
      tip.rotateZ(-Math.PI * 0.5);
      tip.position.set(0.98, 0.02, 0);
      g.add(tip);

      const fuller = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.015, 0.028), gunmetalMat);
      fuller.position.set(0.44, 0.02, 0);
      g.add(fuller);

      // Brass Crossguard
      const guard = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.26, 0.06), brassAmmoMat);
      guard.position.set(0.05, 0.02, 0);
      g.add(guard);

      // Leather-wrapped Grip & Pommel
      const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.032, 0.22, 8), akWoodMat);
      grip.rotateZ(Math.PI * 0.5);
      grip.position.set(-0.06, 0.02, 0);
      g.add(grip);

      const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), brassAmmoMat);
      pommel.position.set(-0.18, 0.02, 0);
      g.add(pommel);

      return applyWeaponScale(g);
    };

    // 2. XAG-9 Service Pistol (Tactical Polymer 9mm Sidearm)
    const buildPistolXAG9 = (): THREE.Group => {
      const g = new THREE.Group();
      // Serrated Steel Slide
      const slide = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.09, 0.075), bluedSteelMat);
      slide.position.set(0.09, 0.05, 0);
      g.add(slide);

      // Polymer Frame & Ergonomic Grip
      const frame = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.06, 0.072), polymerBlackMat);
      frame.position.set(0.07, 0.00, 0);
      g.add(frame);

      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.20, 0.07), polymerBlackMat);
      grip.position.set(-0.04, -0.11, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      // Trigger Guard
      const guard = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.02), polymerBlackMat);
      guard.position.set(0.08, -0.05, 0);
      g.add(guard);

      // Threaded Barrel Muzzle
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.08, 8), gunmetalMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.29, 0.05, 0);
      g.add(barrel);

      // 3-Dot Combat Sights
      const rearSight = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.03, 0.06), opticDotGreen);
      rearSight.position.set(-0.06, 0.10, 0);
      g.add(rearSight);

      const frontSight = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.03, 0.02), opticDotGreen);
      frontSight.position.set(0.24, 0.10, 0);
      g.add(frontSight);

      return applyWeaponScale(g);
    };

    // 3. Akimbo Micro-Uzis (Dual Stamped-Steel Machine Pistols)
    const buildAkimboUzis = (): THREE.Group => {
      const g = new THREE.Group();
      const createUzi = (xOff: number, zOff: number) => {
        const u = new THREE.Group();
        // Stamped Steel Box Receiver
        const rec = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.11, 0.075), gunmetalMat);
        rec.position.set(xOff + 0.04, 0.02, zOff);
        u.add(rec);

        // Cocking handle slot on top
        const slot = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.02, 0.03), polymerBlackMat);
        slot.position.set(xOff + 0.04, 0.08, zOff);
        u.add(slot);

        // Threaded Barrel Nut & Short Barrel
        const bNut = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.036, 0.05, 8), gunmetalMat);
        bNut.rotateZ(Math.PI * 0.5);
        bNut.position.set(xOff + 0.23, 0.02, zOff);
        u.add(bNut);

        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.14, 8), bluedSteelMat);
        barrel.rotateZ(Math.PI * 0.5);
        barrel.position.set(xOff + 0.29, 0.02, zOff);
        u.add(barrel);

        // Grip with 32-round Stick Magazine extending from base
        const grip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.18, 0.068), polymerBlackMat);
        grip.position.set(xOff - 0.02, -0.10, zOff);
        grip.rotateZ(-0.25);
        u.add(grip);

        const mag = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.24, 0.055), gunmetalMat);
        mag.position.set(xOff - 0.04, -0.24, zOff);
        mag.rotateZ(-0.25);
        u.add(mag);

        // Folding Wire Stock collapsed along receiver
        const foldStock = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.015, 0.08), gunmetalMat);
        foldStock.position.set(xOff - 0.08, 0.06, zOff);
        u.add(foldStock);

        return u;
      };
      g.add(createUzi(0.05, 0.16));
      g.add(createUzi(-0.05, -0.16));
      return applyWeaponScale(g);
    };

    // 4. AA-12 Bunker Shotgun (Heavy Combat Shotgun with 20-Round Drum)
    const buildShotgunAA12 = (): THREE.Group => {
      const g = new THREE.Group();
      // Matte Black Heavy Combat Receiver
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.15, 0.11), gunmetalMat);
      rec.position.set(0.08, 0.04, 0);
      g.add(rec);

      // Perforated Barrel Shroud & Heavy 12-Gauge Barrel
      const shroud = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.44, 10), gunmetalMat);
      shroud.rotateZ(Math.PI * 0.5);
      shroud.position.set(0.48, 0.06, 0);
      g.add(shroud);

      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.16, 8), bluedSteelMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.72, 0.06, 0);
      g.add(barrel);

      // High Ghost-Ring Combat Sights
      const rearSight = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.05, 0.05), gunmetalMat);
      rearSight.position.set(-0.16, 0.13, 0);
      g.add(rearSight);

      const frontSight = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.06, 0.02), opticDotRed);
      frontSight.position.set(0.68, 0.12, 0);
      g.add(frontSight);

      // Full Synthetic Buttstock with Recoil Pad
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.14, 0.09), polymerBlackMat);
      stock.position.set(-0.32, 0.00, 0);
      g.add(stock);

      const pad = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.16, 0.095), polymerBlackMat);
      pad.position.set(-0.50, 0.00, 0);
      g.add(pad);

      // Pistol Grip
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.20, 0.075), polymerBlackMat);
      grip.position.set(-0.06, -0.14, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      // Heavy 20-Round Circular Drum Magazine
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.12, 18), polymerBlackMat);
      drum.rotateX(Math.PI * 0.5);
      drum.position.set(0.12, -0.16, 0);
      g.add(drum);

      // Drum Ribbed Center Clamp
      const drumRim = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.13, 12), gunmetalMat);
      drumRim.rotateX(Math.PI * 0.5);
      drumRim.position.set(0.12, -0.16, 0);
      g.add(drumRim);

      return applyWeaponScale(g);
    };

    // 5. Kano "Zaki" .44 Revolver (Heavy Magnum Hand Cannon)
    const buildRevolverJudge = (): THREE.Group => {
      const g = new THREE.Group();
      // Heavy Steel Solid Frame
      const frame = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.13, 0.065), bluedSteelMat);
      frame.position.set(0.06, 0.04, 0);
      g.add(frame);

      // 6-Shot Fluted Cylinder
      const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.082, 0.082, 0.16, 12), gunmetalMat);
      cyl.rotateZ(Math.PI * 0.5);
      cyl.position.set(0.06, 0.04, 0);
      g.add(cyl);

      // Heavy Full-Lug Barrel
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.42, 10), bluedSteelMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.38, 0.07, 0);
      g.add(barrel);

      const underLug = new THREE.Mesh(new THREE.BoxGeometry(0.40, 0.04, 0.05), bluedSteelMat);
      underLug.position.set(0.38, 0.02, 0);
      g.add(underLug);

      // Ergonomic Wood / Rubber Grip
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.22, 0.075), akWoodMat);
      grip.position.set(-0.08, -0.12, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      // Hammer & Red Ramp Front Sight
      const hammer = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.05, 0.02), gunmetalMat);
      hammer.position.set(-0.10, 0.10, 0);
      g.add(hammer);

      const rampSight = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.02), opticDotRed);
      rampSight.position.set(0.56, 0.12, 0);
      g.add(rampSight);

      return applyWeaponScale(g);
    };

    // 6. XAG-47 Kalashnikov (Assault Rifle with Curved Banana Mag & Mahogany Furniture)
    const buildRifleXAG47 = (): THREE.Group => {
      const g = new THREE.Group();

      // 1. Stamped Steel Receiver Body
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.14, 0.10), gunmetalMat);
      rec.position.set(0.02, 0.04, 0);
      g.add(rec);

      // Ribbed Dust Cover top
      const dustCover = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.42, 8, 1, false, 0, Math.PI), gunmetalMat);
      dustCover.rotateZ(Math.PI * 0.5);
      dustCover.position.set(0.02, 0.11, 0);
      g.add(dustCover);

      // 2. Barrel, Gas Tube & Slanted Muzzle Brake
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.52, 8), bluedSteelMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.68, 0.03, 0);
      g.add(barrel);

      const gasTube = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.32, 8), gunmetalMat);
      gasTube.rotateZ(Math.PI * 0.5);
      gasTube.position.set(0.50, 0.07, 0);
      g.add(gasTube);

      // Wooden Handguard enclosing gas tube
      const handguard = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.09, 0.09), akWoodMat);
      handguard.position.set(0.46, 0.04, 0);
      g.add(handguard);

      // Hooded Front Sight Post
      const frontSight = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.07, 0.03), gunmetalMat);
      frontSight.position.set(0.88, 0.08, 0);
      g.add(frontSight);

      // Slanted Muzzle Brake Tip
      const comp = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.034, 0.07, 8), bluedSteelMat);
      comp.rotateZ(Math.PI * 0.5);
      comp.position.set(0.95, 0.03, 0);
      g.add(comp);

      // 3. Ergonomic Wood Stock with Buttplate
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.13, 0.08), akWoodMat);
      stock.position.set(-0.33, -0.02, 0);
      stock.rotateZ(-0.1);
      g.add(stock);

      const buttPlate = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.14, 0.085), gunmetalMat);
      buttPlate.position.set(-0.50, -0.04, 0);
      buttPlate.rotateZ(-0.1);
      g.add(buttPlate);

      // Pistol Grip
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.20, 0.07), akWoodMat);
      grip.position.set(-0.06, -0.14, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      // Curved Banana Magazine (Segmented Curve)
      const magTop = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.14, 0.07), gunmetalMat);
      magTop.position.set(0.12, -0.10, 0);
      magTop.rotateZ(-0.2);
      g.add(magTop);

      const magMid = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.14, 0.068), gunmetalMat);
      magMid.position.set(0.16, -0.22, 0);
      magMid.rotateZ(0.22);
      g.add(magMid);

      // 4. Subtle Spec-Ops Neon Laser Strip
      const sideStrip = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.016, 0.105), opticDotGreen);
      sideStrip.position.set(0.02, 0.08, 0);
      g.add(sideStrip);

      return applyWeaponScale(g);
    };

    // 7. MP5-SD "Ghost" SMG (Ribbed Suppressor & Curved 30-Round Mag)
    const buildGhostSMG = (): THREE.Group => {
      const g = new THREE.Group();
      // Stamped Steel Upper Receiver
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.12, 0.085), gunmetalMat);
      rec.position.set(0.04, 0.04, 0);
      g.add(rec);

      // Large Ribbed Integral Sound Suppressor
      const silencer = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.54, 12), polymerBlackMat);
      silencer.rotateZ(Math.PI * 0.5);
      silencer.position.set(0.46, 0.04, 0);
      g.add(silencer);

      // Ribbed Handguard Bands on Suppressor
      [0.32, 0.44, 0.56].forEach((bx) => {
        const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.025, 12), gunmetalMat);
        ring.rotateZ(Math.PI * 0.5);
        ring.position.set(bx, 0.04, 0);
        g.add(ring);
      });

      // Curved 30-Round 9mm Steel Magazine
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.065, 0.24, 0.055), gunmetalMat);
      mag.position.set(0.12, -0.16, 0);
      mag.rotateZ(0.22);
      g.add(mag);

      // Pistol Grip
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.20, 0.068), polymerBlackMat);
      grip.position.set(-0.06, -0.14, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      // Retractable Wire Stock Struts & Buttpad
      const stockStrut = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.015, 0.09), gunmetalMat);
      stockStrut.position.set(-0.24, 0.02, 0);
      g.add(stockStrut);

      const buttPad = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.14, 0.085), polymerBlackMat);
      buttPad.position.set(-0.38, 0.00, 0);
      g.add(buttPad);

      // Low-Profile Reflex Sight with Micro Green Dot
      const opticBase = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.05), gunmetalMat);
      opticBase.position.set(0.04, 0.12, 0);
      g.add(opticBase);

      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 6), opticDotGreen);
      dot.position.set(0.09, 0.13, 0);
      g.add(dot);

      return applyWeaponScale(g);
    };

    // 8. Harbi Tactical Launcher (Saw Blade Disc Launcher)
    const buildRicochetSaw = (): THREE.Group => {
      const g = new THREE.Group();
      // Heavy Industrial Receiver Chassis
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.18, 0.13), gunmetalMat);
      chassis.position.set(0.04, 0.03, 0);
      g.add(chassis);

      // Steel Circular Saw Blade & Guide Rails
      const sawBlade = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.03), polishedSteelMat);
      sawBlade.rotateX(Math.PI * 0.5);
      sawBlade.position.set(0.42, 0.04, 0);
      g.add(sawBlade);

      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.04), gunmetalMat);
      hub.rotateX(Math.PI * 0.5);
      hub.position.set(0.42, 0.04, 0);
      g.add(hub);

      const topRail = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.04, 0.06), bluedSteelMat);
      topRail.position.set(0.40, 0.23, 0);
      g.add(topRail);

      // Grip & Stock
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.22, 0.08), polymerBlackMat);
      grip.position.set(-0.08, -0.15, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      return applyWeaponScale(g);
    };

    // 9. Arewa .50 Cal Sniper (Massive Anti-Materiel Precision Rifle)
    const buildRailSniper = (): THREE.Group => {
      const g = new THREE.Group();
      // Heavy Steel Bolt-Action Receiver
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.16, 0.11), gunmetalMat);
      rec.position.set(0.05, 0.03, 0);
      g.add(rec);

      // Massive Fluted Barrel & Slotted Chevron Muzzle Brake
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.048, 0.94, 12), bluedSteelMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.84, 0.05, 0);
      g.add(barrel);

      const brake = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, 0.085), gunmetalMat);
      brake.position.set(1.34, 0.05, 0);
      g.add(brake);

      // Heavy 10-Round Box Magazine
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.24, 0.075), gunmetalMat);
      mag.position.set(0.14, -0.15, 0);
      mag.rotateZ(-0.20);
      g.add(mag);

      // Sniper Stock with Adjustable Cheek Rest & Grip
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.15, 0.08), polymerBlackMat);
      stock.position.set(-0.40, -0.01, 0);
      g.add(stock);

      const cheek = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.06, 0.085), coyoteTanMat);
      cheek.position.set(-0.35, 0.09, 0);
      g.add(cheek);

      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.22, 0.075), polymerBlackMat);
      grip.position.set(-0.08, -0.16, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      // High-Magnification Military Sniper Scope with Sunshade & Blue Coated Glass
      const scopeBody = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.46, 12), gunmetalMat);
      scopeBody.rotateZ(Math.PI * 0.5);
      scopeBody.position.set(0.16, 0.18, 0);
      g.add(scopeBody);

      const turrets = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.12), gunmetalMat);
      turrets.position.set(0.16, 0.18, 0);
      g.add(turrets);

      const frontLens = new THREE.Mesh(new THREE.CircleGeometry(0.052, 12), opticLensMat);
      frontLens.rotateY(Math.PI * 0.5);
      frontLens.position.set(0.40, 0.18, 0);
      g.add(frontLens);

      return applyWeaponScale(g);
    };

    // 10. RPG-7 Bunker Buster (Authentic Shoulder Launcher with PG-7V Rocket)
    const buildBunkerRPG = (): THREE.Group => {
      const g = new THREE.Group();
      // Steel Launch Tube & Conical Exhaust Bell
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.060, 0.060, 1.15, 12), gunmetalMat);
      tube.rotateZ(Math.PI * 0.5);
      tube.position.set(0.12, 0.04, 0);
      g.add(tube);

      const exhaust = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.22, 12), gunmetalMat);
      exhaust.rotateZ(Math.PI * 0.5);
      exhaust.position.set(-0.54, 0.04, 0);
      g.add(exhaust);

      // Authentic Mahogany Wooden Heat Insulation Panels
      const woodJacket = new THREE.Mesh(new THREE.CylinderGeometry(0.082, 0.082, 0.44, 12), akWoodMat);
      woodJacket.rotateZ(Math.PI * 0.5);
      woodJacket.position.set(-0.06, 0.04, 0);
      g.add(woodJacket);

      // Dual Pistol Grips
      const gripFront = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.20, 0.06), akWoodMat);
      gripFront.position.set(0.20, -0.13, 0);
      gripFront.rotateZ(-0.25);
      g.add(gripFront);

      const gripRear = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.18, 0.055), akWoodMat);
      gripRear.position.set(-0.16, -0.12, 0);
      gripRear.rotateZ(-0.2);
      g.add(gripRear);

      // PGO-7 Optical Sight Bracket
      const pgoSight = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.10, 0.08), gunmetalMat);
      pgoSight.position.set(0.14, 0.15, 0.06);
      g.add(pgoSight);

      // Protruding PG-7V Shaped-Charge Rocket
      const rocketShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.24, 8), gunmetalMat);
      rocketShaft.rotateZ(Math.PI * 0.5);
      rocketShaft.position.set(0.76, 0.04, 0);
      g.add(rocketShaft);

      const warhead = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.28, 12), odGreenMat);
      warhead.rotateZ(-Math.PI * 0.5);
      warhead.position.set(0.96, 0.04, 0);
      g.add(warhead);

      const noseFuse = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.10, 8), gunmetalMat);
      noseFuse.rotateZ(Math.PI * 0.5);
      noseFuse.position.set(1.14, 0.04, 0);
      g.add(noseFuse);

      return applyWeaponScale(g);
    };

    // 11. Shock Arc (High-Voltage Tactical EMP Rifle)
    const buildShockArc = (): THREE.Group => {
      const g = new THREE.Group();
      // Receiver
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.16, 0.12), gunmetalMat);
      rec.position.set(0.06, 0.03, 0);
      g.add(rec);

      // Dual Forward Emitter Rails
      const topRail = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.03, 0.03), bluedSteelMat);
      topRail.position.set(0.48, 0.09, 0);
      g.add(topRail);

      const btmRail = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.03, 0.03), bluedSteelMat);
      btmRail.position.set(0.48, -0.03, 0);
      g.add(btmRail);

      // Grip & Stock
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.20, 0.07), polymerBlackMat);
      grip.position.set(-0.06, -0.14, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.08), polymerBlackMat);
      stock.position.set(-0.30, 0.00, 0);
      g.add(stock);

      return applyWeaponScale(g);
    };

    // 12. Vulcan Minigun (6-Barrel Gatling Gun with Ammo Drum & Belt)
    const buildVulcanMinigun = (): THREE.Group => {
      const g = new THREE.Group();
      // Motor Housing & Drive Gear
      const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.36, 12), gunmetalMat);
      motor.rotateZ(Math.PI * 0.5);
      motor.position.set(0.10, 0.04, 0);
      g.add(motor);

      // 6 Rotating Gunmetal Barrels
      const barrelCount = 6;
      const barrelRadius = 0.068;
      for (let i = 0; i < barrelCount; i++) {
        const angle = i * ((Math.PI * 2) / barrelCount);
        const by = 0.04 + Math.sin(angle) * barrelRadius;
        const bz = Math.cos(angle) * barrelRadius;
        const bMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.020, 0.020, 0.74, 8), bluedSteelMat);
        bMesh.rotateZ(Math.PI * 0.5);
        bMesh.position.set(0.55, by, bz);
        g.add(bMesh);
      }

      // Front and Middle Barrel Clamp Rings
      [0.45, 0.85].forEach((cx) => {
        const clamp = new THREE.Mesh(new THREE.TorusGeometry(0.082, 0.016, 8, 16), gunmetalMat);
        clamp.rotateY(Math.PI * 0.5);
        clamp.position.set(cx, 0.04, 0);
        g.add(clamp);
      });

      // Top Carrying Handle
      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.04, 0.06), polymerBlackMat);
      handle.position.set(0.10, 0.20, 0);
      g.add(handle);

      // Side Ammunition Canister & Brass Linked Feed
      const ammoCan = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.22, 0.16), odGreenMat);
      ammoCan.position.set(-0.06, -0.16, 0.05);
      g.add(ammoCan);

      const belt = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.12, 0.08), brassAmmoMat);
      belt.position.set(0.08, -0.06, 0.05);
      g.add(belt);

      // Dual Rear Spade Grips
      const spadeGrip = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.18, 0.16), polymerBlackMat);
      spadeGrip.position.set(-0.16, 0.04, 0);
      g.add(spadeGrip);

      return applyWeaponScale(g);
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

  public triggerSlashAnim(): void {
    this.slashAnimTimer = 0.22;
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
    // Cap Z-velocity strictly to +/- 0.5 to keep operator in camera frustum
    this.ragdollVelocity.set(impulseX, impulseY, (Math.random() - 0.5) * 1.0);
    this.ragdollAngVel.set(
      (Math.random() - 0.5) * 14.0,
      (Math.random() - 0.5) * 14.0,
      (Math.random() - 0.5) * 18.0
    );
  }

  public resetFromRagdoll(posX: number, posY: number): void {
    this.isRagdoll = false;
    this.statusSprite.visible = true;
    this.rootGroup.position.set(posX, posY, 0);
    this.rootGroup.rotation.set(0, 0, 0);
    this.rootGroup.visible = true;
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

    if (this.damageFlashTimer > 0) {
      this.damageFlashTimer -= dt;
      if (this.damageFlashTimer <= 0) {
        this.armorMat.emissive.setHex(this.defaultArmorEmissive);
        this.armorMat.emissiveIntensity = 1.0;
      }
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

    // Procedural Recoil Kick & Sword Slash Swing
    if (this.slashAnimTimer > 0) {
      const t = 1.0 - this.slashAnimTimer / 0.22;
      this.weaponMount.rotation.z = Math.sin(t * Math.PI) * -1.35;
      this.weaponMount.position.x = 0.28 + Math.sin(t * Math.PI) * 0.25;
      this.slashAnimTimer = Math.max(0, this.slashAnimTimer - dt);
    } else {
      this.weaponMount.rotation.z = 0;
      if (this.recoilOffset > 0) {
        this.weaponMount.position.x = 0.28 - this.recoilOffset;
        this.recoilOffset = Math.max(0, this.recoilOffset - dt * 2.8);
      } else {
        this.weaponMount.position.x = 0.28;
      }
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
