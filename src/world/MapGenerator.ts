import { TileMap3D } from './TileMap3D';
import { MapId, TileType } from '../config/types';

export class MapGenerator {
  /**
   * MAP A: BIRNIN KANO (KOFAR 2099 — Earthen Citadel & Mud Walls)
   * Layered earthen architectural blocks, Arewa laser friezes, amber warning ledges,
   * vertical structural pillars, and the fortified Gidan Ma'aji Treasury.
   */
  public static generateBirninKano(map: TileMap3D): void {
    map.setMapTheme(MapId.BIRNIN_KANO);
    const W = map.width;
    const H = map.height;

    // 1. Bedrock bottom & boundary city walls (Ganuwa)
    for (let x = 0; x < W; x++) {
      map.setTile(x, 0, TileType.STEEL_GIRDER);
      map.setTile(x, 1, TileType.STEEL_GIRDER);
    }
    for (let y = 0; y < H; y++) {
      map.setTile(0, y, TileType.STEEL_GIRDER);
      map.setTile(W - 1, y, TileType.STEEL_GIRDER);
    }

    // 2. Continuous Earthen Street Runway (Y = 2)
    for (let x = 1; x < W - 1; x++) {
      map.setTile(x, 2, TileType.BRICK_CONCRETE);
    }

    // Traditional raised clay sitting platforms (Dakali)
    map.setTile(16, 3, TileType.WOOD_SCAFFOLD);
    map.setTile(17, 3, TileType.BRICK_CONCRETE);
    map.setTile(18, 3, TileType.BRICK_CONCRETE);
    map.setTile(19, 3, TileType.WOOD_SCAFFOLD);

    map.setTile(60, 3, TileType.WOOD_SCAFFOLD);
    map.setTile(61, 3, TileType.BRICK_CONCRETE);
    map.setTile(62, 3, TileType.BRICK_CONCRETE);
    map.setTile(63, 3, TileType.WOOD_SCAFFOLD);

    // Escape timber stairs flanking the outer city walls
    for (let i = 0; i < 5; i++) {
      map.setTile(1 + i, 4 + i * 2, TileType.WOOD_SCAFFOLD);
      map.setTile(W - 2 - i, 4 + i * 2, TileType.WOOD_SCAFFOLD);
    }

    // 3. Central Fortified Royal Treasury Compound (Gidan Ma'aji)
    // Foundation & heavy studded timber walls
    for (let x = 32; x <= 48; x++) {
      map.setTile(x, 7, TileType.BRICK_CONCRETE);
    }
    for (let y = 3; y <= 7; y++) {
      map.setTile(32, y, TileType.BRICK_CONCRETE);
      map.setTile(48, y, TileType.BRICK_CONCRETE);
    }

    // Vertical structural support pillars holding the Treasury vault
    map.addPillar(32, 2, 7);
    map.addPillar(40, 2, 7);
    map.addPillar(48, 2, 7);

    // 4. Left Earthen Mud Compound (Birnin Kudu)
    // Floor 1 (Y = 12)
    for (let x = 6; x <= 22; x++) {
      map.setTile(x, 12, TileType.BRICK_CONCRETE);
    }
    // Floor 2 (Y = 22)
    for (let x = 8; x <= 20; x++) {
      map.setTile(x, 22, TileType.BRICK_CONCRETE);
    }
    // Iconic White Lime-Washed Roof Horns (Zankwaye) on compound roof corners
    map.setTile(8, 23, TileType.BRICK_CONCRETE);
    map.setTile(20, 23, TileType.BRICK_CONCRETE);

    // Vertical support pillars under Left Compound
    map.addPillar(8, 2, 12);
    map.addPillar(20, 2, 12);
    map.addPillar(14, 12, 22);

    // 5. Central Merchant Catwalks & Palm Timber Suspension Bridges (Azara)
    // Main Central Battle Deck (Y = 16)
    for (let x = 28; x <= 52; x++) {
      if ((x >= 32 && x <= 34) || (x >= 46 && x <= 48)) {
        map.setTile(x, 16, TileType.WOOD_SCAFFOLD); // One-way jump-through!
      } else {
        map.setTile(x, 16, TileType.BRICK_CONCRETE);
      }
    }

    // Vertical pillars supporting Central Battle Deck
    map.addPillar(28, 7, 16);
    map.addPillar(52, 7, 16);

    // Upper Mosque / Palace Terrace (Y = 26)
    for (let x = 34; x <= 46; x++) {
      map.setTile(x, 26, TileType.BRICK_CONCRETE);
    }
    // Roof finials on center terrace
    map.setTile(34, 27, TileType.BRICK_CONCRETE);
    map.setTile(46, 27, TileType.BRICK_CONCRETE);
    map.addPillar(40, 16, 26);

    // Palm Timber Suspension Bridges linking Left and Center
    map.setTile(23, 13, TileType.WOOD_SCAFFOLD);
    map.setTile(24, 14, TileType.WOOD_SCAFFOLD);
    map.setTile(25, 15, TileType.WOOD_SCAFFOLD);
    map.setTile(26, 16, TileType.WOOD_SCAFFOLD);
    map.setTile(27, 16, TileType.WOOD_SCAFFOLD);

    // 6. Right Watchtower Bastion (Tudun Dala Fortress)
    // Lower Bastion (Y = 13)
    for (let x = 58; x <= 73; x++) {
      map.setTile(x, 13, TileType.BRICK_CONCRETE);
    }
    // Mid Bastion (Y = 24)
    for (let x = 60; x <= 72; x++) {
      map.setTile(x, 24, TileType.BRICK_CONCRETE);
    }
    // High Dala Lookout Sniper Roof (Y = 33)
    for (let x = 62; x <= 72; x++) {
      map.setTile(x, 33, TileType.STEEL_GIRDER);
    }
    // High Rooftop Helipad Deck (Y = 42)
    for (let x = 34; x <= 46; x++) {
      map.setTile(x, 42, TileType.STEEL_GIRDER);
    }

    // Vertical pillars under Right Bastion
    map.addPillar(60, 2, 13);
    map.addPillar(72, 2, 13);
    map.addPillar(66, 13, 24);
    map.addPillar(67, 24, 33);

    // Aviation lights on high towers
    map.addAviationLight(67, 33);
    map.addAviationLight(34, 42);
    map.addAviationLight(46, 42);

    // Neon signage / Arewa inlays
    map.addNeonSign(40, 18.5, 'GIDAN MAAJI // TREASURY', 0xfacc15);
    map.addNeonSign(66, 28, 'DALA BASTION', 0xf59e0b);

    // Bridges linking Center and Right Bastion
    map.setTile(53, 16, TileType.WOOD_SCAFFOLD);
    map.setTile(54, 15, TileType.WOOD_SCAFFOLD);
    map.setTile(55, 14, TileType.WOOD_SCAFFOLD);
    map.setTile(56, 13, TileType.WOOD_SCAFFOLD);
    map.setTile(57, 13, TileType.WOOD_SCAFFOLD);

    // High Air Bridges
    for (let x = 20; x <= 28; x++) {
      map.setTile(x, 22, TileType.WOOD_SCAFFOLD);
    }
    for (let x = 47; x <= 58; x++) {
      map.setTile(x, 25, TileType.WOOD_SCAFFOLD);
    }

    // Glass Observation Windows on upper palace
    map.setTile(62, 25, TileType.GLASS_WINDOW);
    map.setTile(72, 25, TileType.GLASS_WINDOW);

    // Power Generators / Transformers
    map.setTile(12, 13, TileType.POWER_TRANSFORMER);
    map.setTile(66, 25, TileType.POWER_TRANSFORMER);
  }

  /**
   * MAP B: LAGOS EKO SECTOR (Expressway Gridlock & Flyovers)
   * Industrial reinforced shipping containers, dark asphalt highway concrete,
   * yellow/white lane stripes, hazard chevrons, vertical steel girders, and aviation lights.
   */
  public static generateLagosGoSlow(map: TileMap3D): void {
    map.setMapTheme(MapId.LAGOS_GOSLOW);
    const W = map.width;
    const H = map.height;

    // 1. Bedrock & side boundaries
    for (let x = 0; x < W; x++) {
      map.setTile(x, 0, TileType.STEEL_GIRDER);
      map.setTile(x, 1, TileType.STEEL_GIRDER);
    }
    for (let y = 0; y < H; y++) {
      map.setTile(0, y, TileType.STEEL_GIRDER);
      map.setTile(W - 1, y, TileType.STEEL_GIRDER);
    }

    // 2. Wet Asphalt Highway Ground Runway (Y = 2)
    for (let x = 1; x < W - 1; x++) {
      map.setTile(x, 2, TileType.BRICK_CONCRETE);
    }

    // Helper to spawn a 3D Reinforced Shipping Container Cluster
    const placeContainerStack = (startX: number, baseY: number, width: number, height: number) => {
      for (let x = startX; x < startX + width; x++) {
        for (let y = baseY; y < baseY + height; y++) {
          map.setTile(x, y, TileType.BRICK_CONCRETE);
        }
        // Top is walkable container roof deck with jump-through grating
        map.setTile(x, baseY + height, TileType.WOOD_SCAFFOLD);
      }
    };

    // Industrial Container Stacks along ground level
    placeContainerStack(4, 3, 6, 2);   // Container 1
    placeContainerStack(14, 3, 7, 3);  // Container 2 (2-high)
    placeContainerStack(24, 3, 6, 2);  // Container 3
    placeContainerStack(46, 3, 6, 2);  // Container 4
    placeContainerStack(56, 3, 7, 3);  // Container 5 (2-high)
    placeContainerStack(67, 3, 6, 2);  // Container 6

    // Maintenance catwalks between containers
    const catwalkX = [10, 11, 21, 22, 52, 53, 63, 64];
    catwalkX.forEach((cx) => {
      map.setTile(cx, 4, TileType.WOOD_SCAFFOLD);
    });

    // 3. Concrete Flyover Expressway Bridge (Third Mainland Highway at Y = 18–20)
    for (let x = 14; x <= 66; x++) {
      if (x % 6 === 0) {
        map.setTile(x, 18, TileType.STEEL_GIRDER);
        map.setTile(x, 19, TileType.STEEL_GIRDER);
        map.setTile(x, 20, TileType.STEEL_GIRDER);
      } else {
        map.setTile(x, 20, TileType.BRICK_CONCRETE); // Smooth road surface
      }
    }

    // Heavy vertical steel bridge support piers extending to the ground
    map.addPillar(18, 2, 20);
    map.addPillar(30, 2, 20);
    map.addPillar(42, 2, 20);
    map.addPillar(54, 2, 20);
    map.addPillar(66, 2, 20);

    // Jump-through access ramps up to the flyover bridge
    map.setTile(12, 10, TileType.WOOD_SCAFFOLD);
    map.setTile(13, 14, TileType.WOOD_SCAFFOLD);
    map.setTile(67, 10, TileType.WOOD_SCAFFOLD);
    map.setTile(68, 14, TileType.WOOD_SCAFFOLD);

    // 4. Commercial Stacks & Gantry Cranes (Left and Right)
    // Left Complex (X: 5 to 18)
    for (let x = 5; x <= 18; x++) {
      map.setTile(x, 10, TileType.BRICK_CONCRETE);
      map.setTile(x, 26, TileType.BRICK_CONCRETE);
    }
    // High Billboard Perch
    for (let x = 8; x <= 16; x++) {
      map.setTile(x, 32, TileType.STEEL_GIRDER);
    }

    // Right Complex (X: 62 to 74)
    for (let x = 62; x <= 74; x++) {
      map.setTile(x, 10, TileType.BRICK_CONCRETE);
      map.setTile(x, 26, TileType.BRICK_CONCRETE);
    }
    // High Billboard Perch
    for (let x = 64; x <= 72; x++) {
      map.setTile(x, 32, TileType.STEEL_GIRDER);
    }

    // 5. Central Rooftop Extraction Helipad (Y = 36)
    for (let x = 32; x <= 48; x++) {
      map.setTile(x, 36, TileType.STEEL_GIRDER);
    }

    // High Catwalks linking buildings to helipad
    for (let x = 19; x <= 31; x++) {
      map.setTile(x, 28, TileType.WOOD_SCAFFOLD);
    }
    for (let x = 49; x <= 61; x++) {
      map.setTile(x, 28, TileType.WOOD_SCAFFOLD);
    }

    // Blinking red aviation warning beacons on high towers
    map.addAviationLight(12, 33);
    map.addAviationLight(68, 33);
    map.addAviationLight(32, 37);
    map.addAviationLight(48, 37);

    // Glowing Neon Signage along structural frames
    map.addNeonSign(40, 22.5, 'THIRD MAINLAND // FLYOVER', 0x38bdf8);
    map.addNeonSign(12, 12.5, 'LOS PORT TERMINAL', 0x22c55e);
    map.addNeonSign(68, 12.5, 'APAPA SEC 234', 0x06b6d4);

    // 6. Street-Level Mikano Diesel Generators (Destroy to trigger 12s blackout!)
    map.setTile(3, 3, TileType.POWER_TRANSFORMER);
    map.setTile(76, 3, TileType.POWER_TRANSFORMER);
  }

  // Backwards Compatibility Aliases
  public static generateOutpostArena(map: TileMap3D): void {
    MapGenerator.generateBirninKano(map);
  }

  public static generateApapaTerminal(map: TileMap3D): void {
    MapGenerator.generateLagosGoSlow(map);
  }
}

