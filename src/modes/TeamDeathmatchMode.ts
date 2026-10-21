import * as THREE from 'three';
import { Player } from '../entities/Player';

export class TeamDeathmatchMode {
  public teamScores: { blue: number; red: number } = { blue: 0, red: 0 };
  public get blueScore(): number { return this.teamScores.blue; }
  public get redScore(): number { return this.teamScores.red; }
  public targetScore: number = 25; // 25 for 3v3, 40 for 5v5
  public matchTimeRemaining: number = 600; // 10 minutes
  public isMatchOver: boolean = false;
  public winningTeam: 'blue' | 'red' | 'draw' | null = null;
  public scene: THREE.Scene;

  constructor(scene: THREE.Scene, teamSize: number = 3) {
    this.scene = scene;
    this.targetScore = teamSize >= 5 ? 40 : 25;
  }

  public update(dt: number): void {
    if (this.isMatchOver) return;

    this.matchTimeRemaining = Math.max(0, this.matchTimeRemaining - dt);
    if (this.matchTimeRemaining <= 0) {
      this.isMatchOver = true;
      if (this.teamScores.blue > this.teamScores.red) {
        this.winningTeam = 'blue';
      } else if (this.teamScores.red > this.teamScores.blue) {
        this.winningTeam = 'red';
      } else {
        this.winningTeam = 'draw';
      }
    }
  }

  public recordKill(victim: Player, killer?: Player): void {
    if (this.isMatchOver) return;

    if (killer && killer.stats.team && victim.stats.team) {
      // Prevent friendly fire score
      if (killer.stats.team === victim.stats.team) return;

      if (killer.stats.team === 'blue') {
        this.teamScores.blue++;
      } else if (killer.stats.team === 'red') {
        this.teamScores.red++;
      }
    }

    if (this.teamScores.blue >= this.targetScore) {
      this.isMatchOver = true;
      this.winningTeam = 'blue';
    } else if (this.teamScores.red >= this.targetScore) {
      this.isMatchOver = true;
      this.winningTeam = 'red';
    }
  }

  public isFriendlyFire(p1: Player, p2: Player): boolean {
    if (!p1.stats.team || !p2.stats.team) return false;
    if (p1.stats.team === 'none' || p2.stats.team === 'none') return false;
    return p1.stats.team === p2.stats.team;
  }
}
