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
      color: 0x0f1117,
      roughness: 0.25,
      metalness: 0.9,
    });
    const woodStockMat = new THREE.MeshStandardMaterial({
      color: 0x78350f,
      roughness: 0.65,
      metalness: 0.1,
    });
    const opticGlowMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
    });

    const createGunGroup = (barrelLen: number, bodyW: number, bodyH: number, hasWood: boolean = false): THREE.Group => {
      const g = new THREE.Group();
      // Receiver
      const rec = new THREE.Mesh(new THREE.BoxGeometry(bodyW, bodyH, 0.14), gunMetalMat);
      rec.castShadow = true;
      g.add(rec);
      // Barrel
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, barrelLen, 10), gunMetalMat);
      barrel.rotateZ(Math.PI * 0.5);
      barrel.position.set(barrelLen * 0.5 + bodyW * 0.4, 0.04, 0);
      barrel.castShadow = true;
      g.add(barrel);
      // Muzzle Brake
      const brake = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.1, 8), gunMetalMat);
      brake.rotateZ(Math.PI * 0.5);
      brake.position.set(barrelLen + bodyW * 0.4, 0.04, 0);
      g.add(brake);
      // Tactical Optic / Red Dot Sight
      const scope = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.09, 0.09), gunMetalMat);
      scope.position.set(0, bodyH * 0.5 + 0.05, 0);
      g.add(scope);
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.02, 6, 6), opticGlowMat);
      dot.position.set(0.09, bodyH * 0.5 + 0.05, 0);
      g.add(dot);
      // Grip
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.24, 0.09), hasWood ? woodStockMat : gunMetalMat);
      grip.position.set(-0.06, -0.18, 0);
      grip.rotateZ(-0.25);
      g.add(grip);
      // Magazine
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.22, 0.08), gunMetalMat);
      mag.position.set(0.1, -0.16, 0);
      mag.rotateZ(0.1);
      g.add(mag);
      return g;
    };

    // Tactical Cutlass
    const cutlassGroup = new THREE.Group();
    const bladeGeom = new THREE.BoxGeometry(1.0, 0.09, 0.03);
    const bladeMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.95, roughness: 0.1 });
    const blade = new THREE.Mesh(bladeGeom, bladeMat);
    blade.position.set(0.5, 0, 0);
    cutlassGroup.add(blade);
    const hilt = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 0.07), woodStockMat);
    cutlassGroup.add(hilt);
    this.weaponMeshMap.set(WeaponId.CUTLASS, cutlassGroup);

    // All Guns
    this.weaponMeshMap.set(WeaponId.PISTOL_XAG9, createGunGroup(0.35, 0.38, 0.2));
    this.weaponMeshMap.set(WeaponId.AKIMBO_UZIS, createGunGroup(0.4, 0.42, 0.22));
    this.weaponMeshMap.set(WeaponId.SHOTGUN_AA12, createGunGroup(0.7, 0.58, 0.26));
    this.weaponMeshMap.set(WeaponId.REVOLVER_JUDGE, createGunGroup(0.42, 0.4, 0.22));
    this.weaponMeshMap.set(WeaponId.RIFLE_XAG47, createGunGroup(0.75, 0.58, 0.22, true));
    this.weaponMeshMap.set(WeaponId.GHOST_SMG, createGunGroup(0.55, 0.48, 0.2));
    this.weaponMeshMap.set(WeaponId.RICOCHET_SAW, createGunGroup(0.65, 0.52, 0.32));
    this.weaponMeshMap.set(WeaponId.RAIL_SNIPER, createGunGroup(1.25, 0.7, 0.24));
    this.weaponMeshMap.set(WeaponId.BUNKER_RPG, createGunGroup(1.0, 0.75, 0.34));
    this.weaponMeshMap.set(WeaponId.SHOCK_ARC, createGunGroup(0.7, 0.52, 0.3));
    this.weaponMeshMap.set(WeaponId.VULCAN_MINIGUN, createGunGroup(0.9, 0.65, 0.36));

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
