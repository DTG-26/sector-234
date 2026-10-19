import { MatchScoreboardEntry, MovementRigType, WeaponId } from '../config/types';

export class RoastReceipt {
  public static generateReceiptPNG(
    scoreboard: MatchScoreboardEntry[],
    modeName: string,
    playerRig: MovementRigType,
    playerWeapon: WeaponId
  ): string {
    const canvas = document.createElement('canvas');
    canvas.width = 460;
    canvas.height = 760;
    const ctx = canvas.getContext('2d')!;

    // 1. Crisp Receipt Paper Styling (thermal paper cream-white / textured background)
    ctx.fillStyle = '#fafaf9';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle paper edge border
    ctx.strokeStyle = '#18181b';
    ctx.lineWidth = 3;
    ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);

    ctx.fillStyle = '#09090b';
    ctx.font = '800 18px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';

    let y = 46;
    ctx.fillText('====================================', 230, y); y += 24;
    ctx.fillText('STUDIO XAG // PROTOCOL ZERO', 230, y); y += 22;
    ctx.font = '700 13px "JetBrains Mono", monospace';
    ctx.fillText('AFTER-ACTION FINANCIAL REPORT', 230, y); y += 18;
    ctx.font = '500 11px "JetBrains Mono", monospace';
    ctx.fillText(new Date().toUTCString(), 230, y); y += 16;
    ctx.fillText(`ARENA MODE: ${modeName}`, 230, y); y += 20;
    ctx.fillText('------------------------------------', 230, y); y += 30;

    // 2. THE SARKI (1st Place Richest Player)
    const sarki = scoreboard[0] || { name: 'Unknown', cash: 0, kills: 0, deaths: 0 };
    ctx.font = '800 15px "JetBrains Mono", monospace';
    ctx.fillText('👑 THE SARKI (1ST PLACE):', 230, y); y += 22;
    ctx.font = '900 24px "JetBrains Mono", monospace';
    ctx.fillText(`${sarki.name.toUpperCase()}`, 230, y); y += 26;
    ctx.font = '800 20px "JetBrains Mono", monospace';
    ctx.fillText(`NET WORTH: ₦${sarki.cash.toLocaleString()}`, 230, y); y += 24;
    ctx.fillText('------------------------------------', 230, y); y += 26;

    // 3. MAI RASHIN SA'A (Most Deaths)
    let mostDeaths = [...scoreboard].sort((a, b) => b.deaths - a.deaths)[0] || sarki;
    ctx.font = '800 13px "JetBrains Mono", monospace';
    ctx.fillText('💀 MAI RASHIN SA\'A (MOST CASUALTIES):', 230, y); y += 20;
    ctx.font = '700 15px "JetBrains Mono", monospace';
    ctx.fillText(`${mostDeaths.name} (${mostDeaths.deaths} Deaths)`, 230, y); y += 18;
    ctx.font = 'italic 11px "JetBrains Mono", monospace';
    ctx.fillText('"Babu gudu, babu ja da baya!"', 230, y); y += 22;
    ctx.fillText('------------------------------------', 230, y); y += 26;

    // 4. MAI RUSHEWA (Most Walls Broken)
    let demoKing = [...scoreboard].sort((a, b) => b.wallsDestroyed - a.wallsDestroyed)[0] || sarki;
    ctx.font = '800 13px "JetBrains Mono", monospace';
    ctx.fillText('💥 MAI RUSHEWA (DEMOLITION CHAMPION):', 230, y); y += 20;
    ctx.font = '700 14px "JetBrains Mono", monospace';
    ctx.fillText(`${demoKing.name} (${demoKing.wallsDestroyed} 3D Blocks Smashed)`, 230, y); y += 22;
    ctx.fillText('------------------------------------', 230, y); y += 26;

    // 5. PLAYER PERSONAL BREAKDOWN
    const local = scoreboard.find((s) => s.isLocal) || sarki;
    ctx.font = '800 14px "JetBrains Mono", monospace';
    ctx.fillText('PERSONAL AUDIT SUMMARY:', 230, y); y += 22;

    ctx.textAlign = 'left';
    ctx.font = '700 12px "JetBrains Mono", monospace';
    const kd = local.deaths > 0 ? (local.kills / local.deaths).toFixed(2) : local.kills.toString();
    ctx.fillText(`• FINAL BALANCE: ₦${local.cash.toLocaleString()}`, 40, y); y += 20;
    ctx.fillText(`• ELIMINATIONS:  ${local.kills} KILLS`, 40, y); y += 20;
    ctx.fillText(`• DEATH COUNT:   ${local.deaths} CASUALTIES`, 40, y); y += 20;
    ctx.fillText(`• COMBAT K/D:    ${kd}`, 40, y); y += 20;
    ctx.fillText(`• RIG UTILIZED:  ${playerRig}`, 40, y); y += 20;
    ctx.fillText(`• LOADOUT:       ${playerWeapon}`, 40, y); y += 28;

    // 6. Barcode & Signature
    ctx.textAlign = 'center';
    ctx.font = '800 12px "JetBrains Mono", monospace';
    ctx.fillText('||| | ||||| || |||||| | ||||| |||', 230, y); y += 18;
    ctx.font = '700 11px "JetBrains Mono", monospace';
    ctx.fillText('* VERIFIED BY STUDIO XAG HQ KANO // AREWA TACTICAL COMMAND *', 230, y);


    return canvas.toDataURL('image/png');
  }

  public static downloadReceiptPNG(
    scoreboard: MatchScoreboardEntry[],
    modeName: string,
    playerRig: MovementRigType,
    playerWeapon: WeaponId
  ): void {
    const dataUrl = this.generateReceiptPNG(scoreboard, modeName, playerRig, playerWeapon);
    const link = document.createElement('a');
    link.download = `XAG_ROAST_RECEIPT_${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  }
}
