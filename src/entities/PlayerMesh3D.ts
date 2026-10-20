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
  public slashAnimTimer: number = 0;
  public isRagdoll: boolean = false;
  private ragdollVelocity: THREE.Vector3 = new THREE.Vector3();
  private ragdollAngVel: THREE.Vector3 = new THREE.Vector3();

  constructor(scene: THREE.Scene, isEnemy: boolean = false, name: string = 'Operative') {
    this.isEnemy = isEnemy;
    this.rootGroup = new THREE.Group();
    scene.add(this.rootGroup);

    // 1. HIGH-CONTRAST SELF-ILLUMINATING OPERATOR MATERIALS (NO BLACK SILHOUETTES)
    // Under-Suit (Arms & Legs): Crisp Tactical Grey (Player) vs Light Charcoal (Enemy)
    const underSuitMat = new THREE.MeshStandardMaterial({
      color: isEnemy ? 0x52525b : 0x64748b,
      emissive: isEnemy ? 0x18181b : 0x1e293b,
      roughness: 0.6,
      metalness: 0.05,
    });

    // Armored Chest Rig, Knee Pads & Helmet: Nigerian Army Olive Green vs Crimson-Trimmed Slate
    const armorMat = new THREE.MeshStandardMaterial({
      color: isEnemy ? 0x991b1b : 0x16a34a,
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

    // 3. Head & Ballistic Combat Helmet
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 0.44, 0);
    this.torsoGroup.add(this.headGroup);

    // Commando Face
    const headGeom = new THREE.SphereGeometry(0.24, 16, 14);
    const headMesh = new THREE.Mesh(headGeom, skinMat);
    headMesh.castShadow = true;
    this.headGroup.add(headMesh);

    // Ballistic Helmet Dome
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

    // Tactical Quad-NVG Visor Eyes (Bright Unlit MeshBasicMaterial)
    const goggleFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.34, 0.09, 0.08),
      underSuitMat
    );
    goggleFrame.position.set(0, 0.12, 0.22);
    this.headGroup.add(goggleFrame);

    const goggleLens = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.06, 0.04),
      nvgMat
    );
    goggleLens.position.set(0, 0.12, 0.26);
    this.headGroup.add(goggleLens);
    this.nvgLenses.push(goggleLens);

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
    ctx.strokeStyle = this.isEnemy ? 'rgba(239, 68, 68, 0.85)' : 'rgba(34, 197, 94, 0.85)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(8, 8, 240, 80, 10);
    ctx.fill();
    ctx.stroke();

    // Callsign
    ctx.fillStyle = isOdogwu ? '#22c55e' : '#ffffff';
    ctx.font = 'bold 22px "Chakra Petch", "JetBrains Mono", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${name} ${isOdogwu ? '[◆]' : ''}`, 128, 34);

    // HP Bar
    const hpPct = Math.max(0, hp / maxHp);
    ctx.fillStyle = '#1c2b22';
    ctx.fillRect(24, 44, 208, 16);
    ctx.fillStyle = this.isEnemy ? '#ef4444' : '#22c55e';
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
    // 1. Main Receiver Body (Brushed Silver-Titanium)
    const receiverMat = new THREE.MeshStandardMaterial({
      color: 0xcbd5e1,
      emissive: 0x334155,
      metalness: 0.1,
      roughness: 0.4,
    });

    // 2. Barrel, Muzzle Brake & Upper Rail (Gunmetal Steel)
    const barrelMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      emissive: 0x1e293b,
      metalness: 0.1,
      roughness: 0.4,
    });

    // 3. Magazine, Stock & Grip (Matte Tactical Green)
    const tacGreenMat = new THREE.MeshStandardMaterial({
      color: 0x15803d,
      emissive: 0x064e3b,
      metalness: 0.08,
      roughness: 0.5,
    });

    // 3b. Desert Tan Stock & Grip (for XAG-47 / Judge)
    const tanFurnitureMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      emissive: 0x451a03,
      metalness: 0.08,
      roughness: 0.5,
    });

    // 4. Glowing Holographic & Energy Strips
    const glowGreenMat = new THREE.MeshBasicMaterial({ color: 0x22c55e });
    const glowRedMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const glowCyanMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const glowOrangeMat = new THREE.MeshBasicMaterial({ color: 0xf97316 });
    const steelBladeMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      emissive: 0x475569,
      metalness: 0.12,
      roughness: 0.2,
    });

    // Helper to apply 1.35x scale to all weapons
    const applyWeaponScale = (g: THREE.Group): THREE.Group => {
      g.scale.set(1.35, 1.35, 1.35);
      return g;
    };

    // 1. Takobin Kano (Melee Cutlass Sword)
    const buildCutlass = (): THREE.Group => {
      const g = new THREE.Group();
      // Blade (Steel with glowing energy spine)
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.08, 0.03), steelBladeMat);
      blade.position.set(0.48, 0.02, 0);
      g.add(blade);

      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.16, 4), steelBladeMat);
      tip.rotateZ(-Math.PI * 0.5);
      tip.position.set(0.96, 0.02, 0);
      g.add(tip);

      const energySpine = new THREE.Mesh(new THREE.BoxGeometry(0.70, 0.02, 0.035), glowCyanMat);
      energySpine.position.set(0.44, 0.05, 0);
      g.add(energySpine);

      // Guard
      const guard = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.28, 0.08), tanFurnitureMat);
      guard.position.set(0.05, 0.02, 0);
      g.add(guard);

      // Grip
      const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.22, 8), tacGreenMat);
      grip.rotateZ(Math.PI * 0.5);
      grip.position.set(-0.06, 0.02, 0);
      g.add(grip);

      return applyWeaponScale(g);
    };

    // 2. XAG-9 Service Pistol
    const buildPistolXAG9 = (): THREE.Group => {
      const g = new THREE.Group();
      // 1. Receiver / Slide
      const slide = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.10, 0.08), receiverMat);
      slide.position.set(0.08, 0.05, 0);
      g.add(slide);

      // 2. Barrel with glowing muzzle tip
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.10, 8), barrelMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.28, 0.05, 0);
      g.add(barrel);

      const tip = new THREE.Mesh(new THREE.RingGeometry(0.015, 0.032, 8), glowGreenMat);
      tip.rotateY(Math.PI * 0.5);
      tip.position.set(0.33, 0.05, 0);
      g.add(tip);

      // 3. Grip angled downward
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.22, 0.075), tacGreenMat);
      grip.position.set(-0.05, -0.12, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      // 4. Glowing Side Energy Strip & Sight
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.018, 0.085), glowGreenMat);
      strip.position.set(0.08, 0.07, 0);
      g.add(strip);

      return applyWeaponScale(g);
    };

    // 3. Akimbo Micro-Uzis (Dual Wielded SMGs)
    const buildAkimboUzis = (): THREE.Group => {
      const g = new THREE.Group();
      const createUzi = (xOff: number, zOff: number) => {
        const u = new THREE.Group();
        // 1. Receiver
        const rec = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.12, 0.08), receiverMat);
        rec.position.set(xOff + 0.04, 0.02, zOff);
        u.add(rec);

        // 2. Barrel
        const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.16, 8), barrelMat);
        barrel.rotateZ(Math.PI * 0.5);
        barrel.position.set(xOff + 0.27, 0.02, zOff);
        u.add(barrel);

        const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.05, 8), glowGreenMat);
        tip.rotateZ(Math.PI * 0.5);
        tip.position.set(xOff + 0.35, 0.02, zOff);
        u.add(tip);

        // 3. Grip & Mag angled downward
        const grip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.20, 0.07), tacGreenMat);
        grip.position.set(xOff - 0.03, -0.12, zOff);
        grip.rotateZ(-0.25);
        u.add(grip);

        const mag = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.24, 0.06), tanFurnitureMat);
        mag.position.set(xOff - 0.05, -0.27, zOff);
        mag.rotateZ(-0.25);
        u.add(mag);

        // 4. Glowing Side Neon Strip
        const strip = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.015, 0.085), glowGreenMat);
        strip.position.set(xOff + 0.04, 0.05, zOff);
        u.add(strip);

        return u;
      };
      g.add(createUzi(0.05, 0.16));
      g.add(createUzi(-0.05, -0.16));
      return applyWeaponScale(g);
    };

    // 4. AA-12 Bunker Shotgun (Heavy Drum-Fed Combat Shotgun)
    const buildShotgunAA12 = (): THREE.Group => {
      const g = new THREE.Group();
      // 1. Receiver
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.16, 0.13), receiverMat);
      rec.position.set(0.08, 0.04, 0);
      g.add(rec);

      // 2. Heavy Barrel & Shroud with Glowing Red Tip
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.46, 10), barrelMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.50, 0.06, 0);
      g.add(barrel);

      const muzzleTip = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.08, 10), glowRedMat);
      muzzleTip.rotateZ(Math.PI * 0.5);
      muzzleTip.position.set(0.74, 0.06, 0);
      g.add(muzzleTip);

      // 3. Stock, Grip & Drum Magazine
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.15, 0.11), tacGreenMat);
      stock.position.set(-0.32, 0.01, 0);
      g.add(stock);

      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.22, 0.08), tacGreenMat);
      grip.position.set(-0.06, -0.14, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.13, 16), tanFurnitureMat);
      drum.rotateX(Math.PI * 0.5);
      drum.position.set(0.12, -0.16, 0);
      g.add(drum);

      // 4. Glowing Red Side Strip & Sight
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.02, 0.135), glowRedMat);
      strip.position.set(0.08, 0.09, 0);
      g.add(strip);

      return applyWeaponScale(g);
    };

    // 5. Kano "Zaki" .44 Revolver (Heavy Magnum Hand Cannon)
    const buildRevolverJudge = (): THREE.Group => {
      const g = new THREE.Group();
      // 1. Frame
      const frame = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.14, 0.07), receiverMat);
      frame.position.set(0.06, 0.04, 0);
      g.add(frame);

      // 2. Cylinder & Barrel
      const cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.17, 12), barrelMat);
      cyl.rotateZ(Math.PI * 0.5);
      cyl.position.set(0.06, 0.04, 0);
      g.add(cyl);

      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.40, 10), barrelMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.38, 0.07, 0);
      g.add(barrel);

      // 3. Desert Tan Grip angled downward
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.22, 0.08), tanFurnitureMat);
      grip.position.set(-0.08, -0.12, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      // 4. Glowing Cyan Sight Rib
      const rib = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.03, 0.04), glowCyanMat);
      rib.position.set(0.36, 0.11, 0);
      g.add(rib);

      return applyWeaponScale(g);
    };

    // 6. XAG-47 Kalashnikov (Assault Rifle with Curved Banana Mag & Furniture)
    const buildRifleXAG47 = (): THREE.Group => {
      const g = new THREE.Group();
      // 1. Main Receiver Body (Brushed Silver-Titanium)
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.14, 0.11), receiverMat);
      rec.position.set(0.02, 0.04, 0);
      g.add(rec);

      // 2. Barrel, Gas Tube & Muzzle Brake with Glowing Tip
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.48, 8), barrelMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.66, 0.03, 0);
      g.add(barrel);

      const comp = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.04, 0.08, 8), glowGreenMat);
      comp.rotateZ(Math.PI * 0.5);
      comp.position.set(0.91, 0.03, 0);
      g.add(comp);

      // 3. Stock, Grip & Curved Banana Mag (Desert Tan & Tactical Green)
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.13, 0.085), tanFurnitureMat);
      stock.position.set(-0.33, -0.02, 0);
      stock.rotateZ(-0.1);
      g.add(stock);

      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.22, 0.08), tanFurnitureMat);
      grip.position.set(-0.06, -0.15, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      // Curved Banana Magazine
      const magUpper = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.15, 0.075), tanFurnitureMat);
      magUpper.position.set(0.12, -0.10, 0);
      magUpper.rotateZ(-0.25);
      g.add(magUpper);

      const magLower = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.15, 0.075), tanFurnitureMat);
      magLower.position.set(0.17, -0.22, 0);
      magLower.rotateZ(0.2);
      g.add(magLower);

      // 4. Glowing Holographic Green Energy Strip along receiver
      const sideStrip = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.018, 0.115), glowGreenMat);
      sideStrip.position.set(0.02, 0.08, 0);
      g.add(sideStrip);

      return applyWeaponScale(g);
    };

    // 7. MP5-SD "Ghost" SMG (Integrated Suppressor & Reflex Optic)
    const buildGhostSMG = (): THREE.Group => {
      const g = new THREE.Group();
      // 1. Receiver
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.12, 0.09), receiverMat);
      rec.position.set(0.04, 0.04, 0);
      g.add(rec);

      // 2. Silencer Barrel
      const silencer = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.52, 12), barrelMat);
      silencer.rotateZ(Math.PI * 0.5);
      silencer.position.set(0.45, 0.04, 0);
      g.add(silencer);

      // 3. Grip & Mag angled downward
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.20, 0.07), tacGreenMat);
      grip.position.set(-0.06, -0.14, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.22, 0.06), tanFurnitureMat);
      mag.position.set(0.12, -0.15, 0);
      mag.rotateZ(0.2);
      g.add(mag);

      // 4. Glowing Green Reflex Optic & Strip
      const optic = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.07, 0.07), barrelMat);
      optic.position.set(0.04, 0.13, 0);
      g.add(optic);

      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 6), glowGreenMat);
      dot.position.set(0.11, 0.13, 0);
      g.add(dot);

      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.016, 0.095), glowGreenMat);
      strip.position.set(0.04, 0.06, 0);
      g.add(strip);

      return applyWeaponScale(g);
    };

    // 8. Harbi Tactical Launcher (Ricochet Saw Blade Disc Launcher)
    const buildRicochetSaw = (): THREE.Group => {
      const g = new THREE.Group();
      // 1. Chassis
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.18, 0.14), receiverMat);
      chassis.position.set(0.04, 0.03, 0);
      g.add(chassis);

      // 2. Saw Blade & Rails
      const sawBlade = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.03), steelBladeMat);
      sawBlade.rotateX(Math.PI * 0.5);
      sawBlade.position.set(0.42, 0.04, 0);
      g.add(sawBlade);

      const topRail = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.06), barrelMat);
      topRail.position.set(0.40, 0.23, 0);
      g.add(topRail);

      // 3. Grip & Stock
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.22, 0.08), tacGreenMat);
      grip.position.set(-0.08, -0.15, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      // 4. Glowing Red/Orange Energy Teeth & Hazard Strip
      const sawHub = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.04), glowRedMat);
      sawHub.rotateX(Math.PI * 0.5);
      sawHub.position.set(0.42, 0.04, 0);
      g.add(sawHub);

      const hazard = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.02, 0.145), glowOrangeMat);
      hazard.position.set(0.04, 0.10, 0);
      g.add(hazard);

      return applyWeaponScale(g);
    };

    // 9. Arewa .50 Cal Sniper (Massive Anti-Materiel Precision Rifle)
    const buildRailSniper = (): THREE.Group => {
      const g = new THREE.Group();
      // 1. Heavy Receiver
      const rec = new THREE.Mesh(new THREE.BoxGeometry(0.70, 0.17, 0.12), receiverMat);
      rec.position.set(0.05, 0.03, 0);
      g.add(rec);

      // 2. Heavy Fluted Barrel & Muzzle Brake
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.92, 10), barrelMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(0.82, 0.05, 0);
      g.add(barrel);

      const brake = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, 0.09), barrelMat);
      brake.position.set(1.30, 0.05, 0);
      g.add(brake);

      // 3. Stock, Grip & Box Magazine
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.16, 0.08), tacGreenMat);
      stock.position.set(-0.40, -0.01, 0);
      g.add(stock);

      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.22, 0.08), tacGreenMat);
      grip.position.set(-0.08, -0.16, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.26, 0.08), tanFurnitureMat);
      mag.position.set(0.16, -0.16, 0);
      mag.rotateZ(-0.25);
      g.add(mag);

      // 4. Illuminated Scope & Full Rail Accelerator Strip (Glowing Cyan)
      const scopeTube = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.44, 12), barrelMat);
      scopeTube.rotateZ(Math.PI * 0.5);
      scopeTube.position.set(0.16, 0.18, 0);
      g.add(scopeTube);

      const scopeLens = new THREE.Mesh(new THREE.CircleGeometry(0.055, 12), glowCyanMat);
      scopeLens.rotateY(Math.PI * 0.5);
      scopeLens.position.set(0.44, 0.18, 0);
      g.add(scopeLens);

      const railStrip = new THREE.Mesh(new THREE.BoxGeometry(0.96, 0.022, 0.125), glowCyanMat);
      railStrip.position.set(0.50, 0.10, 0);
      g.add(railStrip);

      return applyWeaponScale(g);
    };

    // 10. RPG-7 Bunker Buster (Shoulder Launcher with PG-7V Rocket)
    const buildBunkerRPG = (): THREE.Group => {
      const g = new THREE.Group();
      // 1. Tube Chassis
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 1.15, 12), receiverMat);
      tube.rotateZ(Math.PI * 0.5);
      tube.position.set(0.12, 0.04, 0);
      g.add(tube);

      const exhaust = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.22, 12), barrelMat);
      exhaust.rotateZ(Math.PI * 0.5);
      exhaust.position.set(-0.52, 0.04, 0);
      g.add(exhaust);

      // 2. Heat Shield & Grips
      const heatShield = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 0.44, 12), tanFurnitureMat);
      heatShield.rotateZ(Math.PI * 0.5);
      heatShield.position.set(-0.06, 0.04, 0);
      g.add(heatShield);

      const gripFront = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.22, 0.06), tacGreenMat);
      gripFront.position.set(0.18, -0.13, 0);
      gripFront.rotateZ(-0.25);
      g.add(gripFront);

      // 3. Protruding Rocket Warhead
      const ogive = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.28, 12), tacGreenMat);
      ogive.rotateZ(-Math.PI * 0.5);
      ogive.position.set(0.92, 0.04, 0);
      g.add(ogive);

      const fuse = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.12, 8), glowOrangeMat);
      fuse.rotateZ(Math.PI * 0.5);
      fuse.position.set(1.10, 0.04, 0);
      g.add(fuse);

      // 4. Optical Sight & Red Laser Guide Strip
      const laserStrip = new THREE.Mesh(new THREE.BoxGeometry(0.60, 0.02, 0.09), glowRedMat);
      laserStrip.position.set(0.20, 0.11, 0);
      g.add(laserStrip);

      return applyWeaponScale(g);
    };

    // 11. Tactical EMP Arc (Sci-Fi High-Voltage Dual-Prong Arc Projector)
    const buildShockArc = (): THREE.Group => {
      const g = new THREE.Group();
      // 1. Chassis
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.16, 0.12), receiverMat);
      chassis.position.set(0.06, 0.03, 0);
      g.add(chassis);

      // 2. Dual Forward Discharge Prongs
      const topProng = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.035, 0.035), barrelMat);
      topProng.position.set(0.48, 0.11, 0);
      topProng.rotateZ(-0.1);
      g.add(topProng);

      const btmProng = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.035, 0.035), barrelMat);
      btmProng.position.set(0.48, -0.05, 0);
      btmProng.rotateZ(0.1);
      g.add(btmProng);

      // 3. Grip & Battery Cell
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.20, 0.07), tacGreenMat);
      grip.position.set(-0.06, -0.14, 0);
      grip.rotateZ(-0.25);
      g.add(grip);

      // 4. Plasma Acceleration Rings & Glowing Cyan Core
      [0.26, 0.36, 0.46].forEach((rx) => {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.065, 0.02, 8, 16), glowCyanMat);
        ring.rotateY(Math.PI * 0.5);
        ring.position.set(rx, 0.03, 0);
        g.add(ring);
      });

      const core = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.13), glowCyanMat);
      core.position.set(0.06, 0.08, 0);
      g.add(core);

      return applyWeaponScale(g);
    };

    // 12. FN Heavy Support Gun (6-Barrel Gatling Minigun with Ammo Drum)
    const buildVulcanMinigun = (): THREE.Group => {
      const g = new THREE.Group();
      // 1. Motor Housing
      const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.34, 12), receiverMat);
      motor.rotateZ(Math.PI * 0.5);
      motor.position.set(0.12, 0.04, 0);
      g.add(motor);

      // 2. 6 Rotating Barrels
      const barrelCount = 6;
      const barrelRadius = 0.072;
      for (let i = 0; i < barrelCount; i++) {
        const angle = i * ((Math.PI * 2) / barrelCount);
        const by = 0.04 + Math.sin(angle) * barrelRadius;
        const bz = Math.cos(angle) * barrelRadius;
        const bMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.74, 8), barrelMat);
        bMesh.rotateZ(Math.PI * 0.5);
        bMesh.position.set(0.55, by, bz);
        g.add(bMesh);
      }

      // 3. Ammo Drum & Top Grip
      const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.16, 16), tacGreenMat);
      drum.rotateX(Math.PI * 0.5);
      drum.position.set(-0.06, -0.18, 0);
      g.add(drum);

      const belt = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.16, 0.08), tanFurnitureMat);
      belt.position.set(0.06, -0.10, 0);
      g.add(belt);

      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.04, 0.08), tanFurnitureMat);
      handle.position.set(0.10, 0.22, 0);
      g.add(handle);

      // 4. Glowing Cyan Muzzle Rings
      [0.45, 0.88].forEach((cx) => {
        const clamp = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.022, 8, 16), glowCyanMat);
        clamp.rotateY(Math.PI * 0.5);
        clamp.position.set(cx, 0.04, 0);
        g.add(clamp);
      });

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
