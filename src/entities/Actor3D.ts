import * as THREE from 'three';
import { TileMap3D } from '../world/TileMap3D';
import { ARENA_CONFIG } from '../config/constants';

export class Actor3D {
  public position: THREE.Vector3;
  public velocity: THREE.Vector3;
  public width: number = 0.8;
  public height: number = 1.8;
  
  public isGrounded: boolean = false;
  public isTouchingWallLeft: boolean = false;
  public isTouchingWallRight: boolean = false;
  public isPhasing: boolean = false; // Phase-Dash ghost mode ignores walls
  public isJetFlying: boolean = false; // Powered thruster flight
  public isDead: boolean = false;
  public customPhysics: boolean = false; // When true, MiniMilitiaCore controls acceleration, gravity & drag

  constructor(x: number, y: number) {
    this.position = new THREE.Vector3(x, y, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);
  }

  public updatePhysics(dt: number, tileMap: TileMap3D): void {
    if (this.isDead) return;

    // 1. Apply Gravity (Only when NOT custom physics and NOT in powered flight)
    if (!this.customPhysics && !this.isJetFlying) {
      this.velocity.y += ARENA_CONFIG.GRAVITY * dt;
      if (this.velocity.y < -26.0) this.velocity.y = -26.0;
    }

    if (this.isPhasing) {
      // Free movement when phasing through walls
      this.position.x += this.velocity.x * dt;
      this.position.y += this.velocity.y * dt;
      this.isGrounded = false;
      this.isTouchingWallLeft = false;
      this.isTouchingWallRight = false;
      return;
    }

    // 2. Horizontal Movement & Collision Resolution (Step X)
    this.position.x += this.velocity.x * dt;
    this.isTouchingWallLeft = false;
    this.isTouchingWallRight = false;

    this.resolveCollisionsX(tileMap);

    // 3. Vertical Movement & Collision Resolution (Step Y)
    // Record prevY strictly after horizontal resolution and any auto step-ups
    const prevY = this.position.y;
    this.position.y += this.velocity.y * dt;
    this.isGrounded = false;

    this.resolveCollisionsY(tileMap, prevY);

    // 4. Unstuck Safeguard: ensure actor is never trapped inside solid blocks
    this.resolveUnstuck(tileMap);

    // Damping (Bypassed when custom Mini Militia air drift / ground friction is active)
    if (!this.customPhysics) {
      if (this.isGrounded) {
        this.velocity.x *= 0.88;
      } else {
        this.velocity.x *= 0.96;
      }
    }
  }

  private resolveCollisionsX(tileMap: TileMap3D): void {
    const halfW = this.width * 0.5;
    const minTileY = Math.floor(this.position.y + 0.15);
    const maxTileY = Math.floor(this.position.y + this.height - 0.2);

    if (this.velocity.x > 0) {
      const tx = Math.floor(this.position.x + halfW);
      let hitSolid = false;
      let lowestSolidY = -1;

      for (let ty = minTileY; ty <= maxTileY; ty++) {
        if (tileMap.isSolid(tx, ty)) {
          hitSolid = true;
          if (lowestSolidY === -1) lowestSolidY = ty;
        }
      }

      if (hitSolid) {
        // Auto Step-Up: if grounded and obstacle is a 1-tile curb (up to 1.05m higher)
        const stepTargetY = lowestSolidY + 1.0;
        const stepHeight = stepTargetY - this.position.y;

        let canStepUp = false;
        if (this.isGrounded && stepHeight > 0.05 && stepHeight <= 1.05) {
          const stepHeadY = Math.floor(stepTargetY + this.height - 0.15);
          let blocked = false;
          for (let ty = lowestSolidY + 1; ty <= stepHeadY; ty++) {
            if (tileMap.isSolid(tx, ty)) {
              blocked = true;
              break;
            }
          }
          if (!blocked) {
            canStepUp = true;
          }
        }

        if (canStepUp) {
          this.position.y = stepTargetY;
          this.velocity.y = 0;
          this.position.x += 0.08;
          this.isGrounded = true;
        } else {
          this.position.x = tx - halfW - 0.005;
          this.velocity.x = 0;
          this.isTouchingWallRight = true;
        }
      }
    } else if (this.velocity.x < 0) {
      const tx = Math.floor(this.position.x - halfW);
      let hitSolid = false;
      let lowestSolidY = -1;

      for (let ty = minTileY; ty <= maxTileY; ty++) {
        if (tileMap.isSolid(tx, ty)) {
          hitSolid = true;
          if (lowestSolidY === -1) lowestSolidY = ty;
        }
      }

      if (hitSolid) {
        // Auto Step-Up for leftward movement
        const stepTargetY = lowestSolidY + 1.0;
        const stepHeight = stepTargetY - this.position.y;

        let canStepUp = false;
        if (this.isGrounded && stepHeight > 0.05 && stepHeight <= 1.05) {
          const stepHeadY = Math.floor(stepTargetY + this.height - 0.15);
          let blocked = false;
          for (let ty = lowestSolidY + 1; ty <= stepHeadY; ty++) {
            if (tileMap.isSolid(tx, ty)) {
              blocked = true;
              break;
            }
          }
          if (!blocked) {
            canStepUp = true;
          }
        }

        if (canStepUp) {
          this.position.y = stepTargetY;
          this.velocity.y = 0;
          this.position.x -= 0.08;
          this.isGrounded = true;
        } else {
          this.position.x = tx + 1.0 + halfW + 0.005;
          this.velocity.x = 0;
          this.isTouchingWallLeft = true;
        }
      }
    }

    // Clamp inside world boundaries
    if (this.position.x - halfW < 1.0) {
      this.position.x = 1.0 + halfW + 0.005;
      this.velocity.x = 0;
      this.isTouchingWallLeft = true;
    } else if (this.position.x + halfW > tileMap.width - 1.0) {
      this.position.x = tileMap.width - 1.0 - halfW - 0.005;
      this.velocity.x = 0;
      this.isTouchingWallRight = true;
    }
  }

  private resolveUnstuck(tileMap: TileMap3D): void {
    const tx = Math.floor(this.position.x);
    const ty = Math.floor(this.position.y + 0.5);
    const footTy = Math.floor(this.position.y + 0.1);
    const halfW = this.width * 0.5;

    // Only unstuck if BOTH center and feet are fully embedded in solid blocks
    if (tileMap.isSolid(tx, ty) && tileMap.isSolid(tx, footTy)) {
      if (!tileMap.isSolid(tx, ty + 1)) {
        this.position.y = ty + 1.0;
        this.velocity.y = 0;
      } else if (!tileMap.isSolid(tx + 1, ty)) {
        this.position.x = tx + 1.0 + halfW + 0.05;
        this.velocity.x = 0;
      } else if (!tileMap.isSolid(tx - 1, ty)) {
        this.position.x = tx - halfW - 0.05;
        this.velocity.x = 0;
      }
    }
  }

  private resolveCollisionsY(tileMap: TileMap3D, prevY: number): void {
    const halfW = this.width * 0.5;
    const minTileX = Math.floor(this.position.x - halfW + 0.14);
    const maxTileX = Math.floor(this.position.x + halfW - 0.14);

    // 1. Moving downwards / falling: Check feet landing only
    if (this.velocity.y <= 0) {
      const startTy = Math.floor(prevY);
      const endTy = Math.floor(this.position.y - 0.05);
      let landed = false;

      for (let ty = Math.max(startTy, endTy); ty >= Math.min(startTy, endTy); ty--) {
        for (let tx = minTileX; tx <= maxTileX; tx++) {
          if (tileMap.isSolid(tx, ty)) {
            // A solid tile is ONLY a landing floor if the tile directly above it is open air,
            // AND the actor was actually above the floor surface in the previous frame
            if (!tileMap.isSolid(tx, ty + 1) && prevY >= ty + 1.0 - 0.35) {
              this.position.y = ty + 1.0;
              this.velocity.y = 0;
              this.isGrounded = true;
              landed = true;
              break;
            }
          } else if (tileMap.isOneWayPlatform(tx, ty)) {
            const platformTop = ty + 1.0;
            // Clean one-way platform landing:
            // Must be falling downward or grounded, NOT in powered flight, and crossing down onto platform
            if (
              !this.isJetFlying &&
              prevY >= platformTop - 0.15 &&
              this.position.y <= platformTop + 0.1
            ) {
              this.position.y = platformTop;
              this.velocity.y = 0;
              this.isGrounded = true;
              landed = true;
              break;
            }
          }
        }
        if (landed) break;
      }

      // Check bottom bedrock boundary (top of indestructible steel girder foundation at Y = 1 is Y = 2.0)
      if (!landed && this.position.y <= 2.0) {
        this.position.y = 2.0;
        this.velocity.y = 0;
        this.isGrounded = true;
      }
    }

    // 2. Moving upwards: Check head ceiling bump only
    else if (this.velocity.y > 0) {
      const ty = Math.floor(this.position.y + this.height);
      for (let tx = minTileX; tx <= maxTileX; tx++) {
        if (tileMap.isSolid(tx, ty)) {
          this.position.y = ty - this.height - 0.02;
          this.velocity.y = 0;
          break;
        }
      }

      // Gentle sky ceiling limit (Y = 46.0): smooth hovering at sky limit with zero slamming
      if (this.position.y > 46.0) {
        this.position.y = 46.0;
        this.velocity.y = 0;
      }
    }
  }
}
