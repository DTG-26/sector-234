import * as THREE from 'three';
import { TileMap3D } from '../world/TileMap3D';

interface BrassCasing {
  mesh: THREE.Mesh;
  vx: number;
  vy: number;
  vz: number;
  rx: number;
  ry: number;
  rz: number;
  life: number;
}

interface Spark {
  mesh: THREE.Mesh;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
}

interface Shockwave {
  mesh: THREE.Mesh;
  radius: number;
  maxRadius: number;
  alpha: number;
}

interface SmokePuff {
  mesh: THREE.Mesh;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export class ParticleSystem3D {
  public group: THREE.Group;
  private casings: BrassCasing[] = [];
  private sparks: Spark[] = [];
  private shockwaves: Shockwave[] = [];
  private smokePuffs: SmokePuff[] = [];
  private casingGeom: THREE.CylinderGeometry;
  private casingMat: THREE.MeshStandardMaterial;
  private sparkGeom: THREE.SphereGeometry;
  private sparkMat: THREE.MeshBasicMaterial;
  private smokeGeom: THREE.SphereGeometry;
  private smokeMat: THREE.MeshBasicMaterial;
  private shockwaveGeom: THREE.RingGeometry;

  constructor(scene: THREE.Scene) {
    this.group = new THREE.Group();
    scene.add(this.group);

    this.casingGeom = new THREE.CylinderGeometry(0.025, 0.025, 0.1, 8);
    this.casingMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.25,
      metalness: 0.1,
      emissive: 0xd97706,
      emissiveIntensity: 0.5,
    });

    this.sparkGeom = new THREE.SphereGeometry(0.06, 6, 6);
    this.sparkMat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.95,
    });

    this.smokeGeom = new THREE.SphereGeometry(0.22, 7, 7);
    this.smokeMat = new THREE.MeshBasicMaterial({
      color: 0xe2e8f0,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
    });

    this.shockwaveGeom = new THREE.RingGeometry(0.2, 0.5, 24);
  }

  public spawnBrassCasing(x: number, y: number, facingRight: boolean): void {
    const mesh = new THREE.Mesh(this.casingGeom, this.casingMat);
    mesh.position.set(x, y, 0.15);
    this.group.add(mesh);

    const dirX = facingRight ? -1 : 1;
    this.casings.push({
      mesh,
      vx: dirX * (2.5 + Math.random() * 3.0),
      vy: 5.0 + Math.random() * 4.0,
      vz: (Math.random() - 0.5) * 3.5,
      rx: Math.random() * 25,
      ry: Math.random() * 25,
      rz: Math.random() * 25,
      life: 0,
    });
  }

  public spawnSparks(x: number, y: number, normalX: number, normalY: number, count: number = 8): void {
    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(this.sparkGeom, this.sparkMat);
      mesh.position.set(x, y, (Math.random() - 0.5) * 0.4);
      this.group.add(mesh);

      const angle = Math.atan2(normalY, normalX) + (Math.random() - 0.5) * 1.5;
      const speed = 5.0 + Math.random() * 12.0;

      this.sparks.push({
        mesh,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        vz: (Math.random() - 0.5) * 7.0,
        life: 0,
        maxLife: 0.28 + Math.random() * 0.25,
      });
    }
  }

  public spawnExplosionShockwave(x: number, y: number): void {
    const mat = new THREE.MeshBasicMaterial({
      color: 0xff5500,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(this.shockwaveGeom, mat);
    mesh.position.set(x, y, 0.1);
    this.group.add(mesh);

    this.shockwaves.push({
      mesh,
      radius: 0.5,
      maxRadius: 5.5,
      alpha: 1.0,
    });
  }

  public spawnJetpackSmoke(x: number, y: number, vx: number = 0, vy: number = -2.5): void {
    if (this.smokePuffs.length > 25) {
      const old = this.smokePuffs.shift();
      if (old) this.group.remove(old.mesh);
    }

    const mesh = new THREE.Mesh(this.smokeGeom, this.smokeMat);
    mesh.position.set(
      x + (Math.random() - 0.5) * 0.25,
      y + (Math.random() - 0.5) * 0.15,
      -0.1
    );
    this.group.add(mesh);

    this.smokePuffs.push({
      mesh,
      vx: vx * 0.2 + (Math.random() - 0.5) * 1.5,
      vy: vy + (Math.random() - 0.5) * 1.0,
      life: 0,
      maxLife: 0.38 + Math.random() * 0.15,
    });
  }

  public update(dt: number, tileMap: TileMap3D): void {
    const gravity = -30.0;

    // 1. Casings
    for (let i = this.casings.length - 1; i >= 0; i--) {
      const c = this.casings[i];
      c.life += dt;
      c.vy += gravity * dt;

      c.mesh.position.x += c.vx * dt;
      c.mesh.position.y += c.vy * dt;
      c.mesh.position.z += c.vz * dt;

      c.mesh.rotation.x += c.rx * dt;
      c.mesh.rotation.y += c.ry * dt;

      const tx = Math.floor(c.mesh.position.x);
      const ty = Math.floor(c.mesh.position.y);
      if (tileMap.isSolid(tx, ty) && c.vy < 0) {
        c.vy = -c.vy * 0.45;
        c.vx *= 0.6;
        c.vz *= 0.6;
      }

      if (c.life > 1.5 || this.casings.length > 30) {
        this.group.remove(c.mesh);
        this.casings.splice(i, 1);
      }
    }

    // 2. Sparks
    for (let i = this.sparks.length - 1; i >= 0; i--) {
      const s = this.sparks[i];
      s.life += dt;
      s.vy += gravity * 0.5 * dt;

      s.mesh.position.x += s.vx * dt;
      s.mesh.position.y += s.vy * dt;
      s.mesh.position.z += s.vz * dt;

      const scale = Math.max(0, 1.0 - s.life / s.maxLife);
      s.mesh.scale.set(scale, scale, scale);

      if (s.life >= s.maxLife || this.sparks.length > 35) {
        this.group.remove(s.mesh);
        this.sparks.splice(i, 1);
      }
    }

    // 3. Shockwaves
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.radius += dt * 16.0;
      sw.alpha = Math.max(0, 1.0 - sw.radius / sw.maxRadius);

      sw.mesh.scale.set(sw.radius, sw.radius, 1);
      (sw.mesh.material as THREE.MeshBasicMaterial).opacity = sw.alpha;

      if (sw.radius >= sw.maxRadius) {
        this.group.remove(sw.mesh);
        (sw.mesh.material as THREE.Material).dispose();
        this.shockwaves.splice(i, 1);
      }
    }

    // 4. Mini Militia Jetpack Smoke Puffs (Smooth scaling without material clone overhead)
    for (let i = this.smokePuffs.length - 1; i >= 0; i--) {
      const sp = this.smokePuffs[i];
      sp.life += dt;
      sp.mesh.position.x += sp.vx * dt;
      sp.mesh.position.y += sp.vy * dt;

      const progress = sp.life / sp.maxLife;
      // Shrink gently as it dissipates
      const scale = Math.max(0, (1.0 - progress) * (0.8 + progress * 2.2));
      sp.mesh.scale.set(scale, scale, scale);

      if (sp.life >= sp.maxLife) {
        this.group.remove(sp.mesh);
        this.smokePuffs.splice(i, 1);
      }
    }
  }
}
