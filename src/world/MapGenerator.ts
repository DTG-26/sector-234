import { TileMap3D } from './TileMap3D';
import { MapId, TileType } from '../config/types';

export class MapGenerator {
  /**
   * MAP A: BIRNIN KANO (1800s Earthen Citadel)
   * Authentic 1800s Hausa earthen mud architecture (Tubali, white lime Zankwaye roof horns,
   * palm timber beams, and the fortified Gidan Ma'aji Treasury).
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

    // 5. Central Merchant Catwalks & Palm Timber Suspension Bridges (Azara)
    // Main Central Battle Deck (Y = 16)
    for (let x = 28; x <= 52; x++) {
      if ((x >= 32 && x <= 34) || (x >= 46 && x <= 48)) {
        map.setTile(x, 16, TileType.WOOD_SCAFFOLD); // One-way jump-through!
      } else {
        map.setTile(x, 16, TileType.BRICK_CONCRETE);
      }
    }

    // Upper Mosque / Palace Terrace (Y = 26)
    for (let x = 34; x <= 46; x++) {
      map.setTile(x, 26, TileType.BRICK_CONCRETE);
    }
    // Roof finials on center terrace
    map.setTile(34, 27, TileType.BRICK_CONCRETE);
    map.setTile(46, 27, TileType.BRICK_CONCRETE);

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
   * MAP B: LAGOS GO-SLOW (Danfo Traffic Gridlock)
   * Iconic yellow Danfo minibuses jammed bumper-to-bumper, colorful market umbrellas,
   * overhead concrete highway flyover bridge, and rooftop extraction helipad.
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

    // 2. Wet Asphalt Highway (Y = 2)
    for (let x = 1; x < W - 1; x++) {
      map.setTile(x, 2, TileType.BRICK_CONCRETE);
    }

    // Helper to spawn a 3D Yellow Danfo Minibus in the traffic jam
    const placeDanfoBus = (startX: number) => {
      // Bus body (Steel Girder with vibrant Danfo yellow & black stripes)
      for (let x = startX; x < startX + 6; x++) {
        map.setTile(x, 3, TileType.STEEL_GIRDER);
        map.setTile(x, 4, TileType.STEEL_GIRDER);
        // Bus roof is a walkable platform!
        map.setTile(x, 5, TileType.WOOD_SCAFFOLD);
      }
    };

    // Stalled Yellow Danfo Buses bumper-to-bumper along the expressway
    const busPositions = [5, 13, 21, 29, 45, 53, 61, 69];
    busPositions.forEach((bx) => placeDanfoBus(bx));

    // Colorful Street Market Umbrellas / Pedestrian Ramps between the buses
    const umbrellaX = [11, 12, 19, 20, 27, 28, 51, 52, 59, 60, 67, 68];
    umbrellaX.forEach((ux) => {
      map.setTile(ux, 3, TileType.WOOD_SCAFFOLD);
      map.setTile(ux, 4, TileType.WOOD_SCAFFOLD);
    });

    // 3. Concrete Flyover Expressway Bridge (Third Mainland / Oshodi Bridge at Y = 18–20)
    for (let x = 14; x <= 66; x++) {
      if (x % 5 === 0) {
        map.setTile(x, 18, TileType.STEEL_GIRDER); // Heavy highway pillar
        map.setTile(x, 19, TileType.BRICK_CONCRETE);
        map.setTile(x, 20, TileType.STEEL_GIRDER);
      } else {
        map.setTile(x, 20, TileType.BRICK_CONCRETE); // Smooth road surface
      }
    }

    // Jump-through access ramps up to the flyover bridge
    map.setTile(12, 10, TileType.WOOD_SCAFFOLD);
    map.setTile(13, 14, TileType.WOOD_SCAFFOLD);
    map.setTile(67, 10, TileType.WOOD_SCAFFOLD);
    map.setTile(68, 14, TileType.WOOD_SCAFFOLD);

    // 4. Commercial Street Storefronts & Billboards (Left and Right)
    // Left Storefront Complex (X: 5 to 20)
    for (let x = 5; x <= 18; x++) {
      map.setTile(x, 10, TileType.BRICK_CONCRETE);
      map.setTile(x, 26, TileType.BRICK_CONCRETE);
    }
    // High Billboard Perch
    for (let x = 8; x <= 16; x++) {
      map.setTile(x, 32, TileType.STEEL_GIRDER);
    }

    // Right Commercial Complex (X: 60 to 74)
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

    // High Catwalks linking commercial buildings to helipad
    for (let x = 19; x <= 31; x++) {
      map.setTile(x, 28, TileType.WOOD_SCAFFOLD);
    }
    for (let x = 49; x <= 61; x++) {
      map.setTile(x, 28, TileType.WOOD_SCAFFOLD);
    }

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
