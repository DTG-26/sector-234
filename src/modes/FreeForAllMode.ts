import * as THREE from 'three';
import { Player } from '../entities/Player';

export class FreeForAllMode {
  public targetKills: number = 20;
  public matchTimeRemaining: number = 600;
  public isMatchOver: boolean = false;
  public winnerId: string | null = null;
  public scene: THREE.Scene;

  constructor(scene: THREE.Scene, targetKills: number = 20) {
    this.scene = scene;
    this.targetKills = targetKills;
  }

  public update(dt: number, players: Player[]): void {
    if (this.isMatchOver) return;

    this.matchTimeRemaining = Math.max(0, this.matchTimeRemaining - dt);

    // Check if any player reached target kills
    for (const p of players) {
      if (p.stats.kills >= this.targetKills) {
        this.isMatchOver = true;
        this.winnerId = p.stats.id;
        break;
      }
    }

    if (this.matchTimeRemaining <= 0) {
      this.isMatchOver = true;
      let topKills = -1;
      let topId: string | null = null;
      for (const p of players) {
        if (p.stats.kills > topKills) {
          topKills = p.stats.kills;
          topId = p.stats.id;
        }
      }
      this.winnerId = topId;
    }
  }

  public recordKill(victim: Player, killer?: Player): void {
    if (this.isMatchOver) return;

    if (killer) {
      killer.stats.kills++;
      if (killer.stats.kills >= this.targetKills) {
        this.isMatchOver = true;
        this.winnerId = killer.stats.id;
      }
    }
  }
}
