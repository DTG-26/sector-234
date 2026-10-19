# STUDIO XAG: PROTOCOL ZERO — 2.5D THREE.JS TACTICAL ARENA MASTER SPECIFICATION

## 1. AGENT OPERATING RULES & 2.5D ENGINE DIRECTIVE (READ FIRST)
You are the Lead Game Engine Architect building **XAG: PROTOCOL ZERO**, a next-gen **2.5D side-scrolling tactical arena shooter** built for mobile and desktop browsers. It combines fast side-view combat with **Three.js 3D WebGL rendering**, **UnrealBloomPass post-processing**, **destructible 3D environments**, **articulated 3D Inverse-Kinematics (IK) tactical operators**, **4 Movement Rigs**, and **high-stakes Nigerian/African bounty game modes**.

### Strict Architectural Directives:
1. **NO 1990s FLAT 2D GAMEPLAY GRAPHICS:** Do NOT render the game world or characters using flat 2D Canvas rectangles (`ctx.fillRect`), pixel art, or stick figures. All world geometry, destructible tiles, characters, weapons, debris, and lighting MUST be rendered in **3D WebGL using Three.js (`THREE.WebGLRenderer`)** with Physically Based Rendering (`MeshStandardMaterial` / `MeshPhysicalMaterial`), dynamic shadows, and bloom shaders. Use a synchronized HTML5 Canvas/DOM overlay strictly for crisp HUD elements, 2-thumb virtual joysticks, and menus.
2. **ZERO EXTERNAL ASSET FILES:** Do NOT reference external `.glb`, `.gltf`, `.png`, `.jpg`, `.mp3`, or `.wav` files that do not exist. Construct all 3D character rigs, weapons, buildings, and particle systems procedurally using Three.js geometries/groups, generate surface roughness/bump maps via offscreen procedural canvases, and synthesize 100% of audio effects (gunshots, bass drops, C4 explosions, sonar pings) using the native browser **Web Audio API**.
3. **2.5D PLAY-PLANE PRECISION:** All gameplay physics, movement rigs, collisions, and projectiles operate strictly on the `X` (horizontal) and `Y` (vertical) axes at `Z = 0` for tight 2-thumb mobile and PC controls, while the camera, lighting, debris physics, and megacity background exist in full 3D space (`Z = -150` to `Z = +45`).
4. **MODULAR TYPESCRIPT ARCHITECTURE:** Never dump code into a single monolithic file. Follow the exact directory structure in Section 2 with zero `TODO` stubs or placeholder functions.
5. **AUTO-SWITCHING CROSS-PLATFORM INPUT:** Seamlessly support Mobile Touch (2-Thumb Smart-Stick HUD) and Desktop (WASD + 360° Mouse Aim), switching automatically based on the latest input event.
6. **PHASED BROWSER VERIFICATION:** Execute Phases 1 through 6 in order. After each phase, run the Vite dev server, inspect the built-in browser preview, verify zero console or WebGL errors, and confirm 60 FPS before moving to the next phase.

---

## 2. TECH STACK & DIRECTORY STRUCTURE
- **Core Packages:** `vite`, `typescript`, `three`, `@types/three`, `tailwindcss`, `postcss`, `autoprefixer`.
- **Viewport:** Full-screen `100vw x 100vh` locked (`overflow: hidden`, `touch-action: none`) with responsive aspect-ratio scaling.

```text
xag-protocol-zero/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── src/
    ├── main.ts                      # Bootstrapper, resize listeners, loop init
    ├── config/
    │   ├── constants.ts             # Physics constants, 3D scale, color hexes, weapon stats
    │   └── types.ts                 # Strict TypeScript interfaces, enums, state schemas
    ├── core/
    │   ├── Engine3D.ts              # Three.js WebGLRenderer, Scene, fixed 60FPS game loop
    │   ├── PostProcessing.ts        # EffectComposer, RenderPass, UnrealBloomPass, Vignette
    │   ├── Camera3D.ts              # PerspectiveCamera, Aim-Shift, Velocity Zoom, 3D Shake
    │   ├── InputManager.ts          # 2-Thumb Smart-Stick (Mobile) + WASD/Mouse Raycaster (PC)
    │   └── AudioSynth.ts            # Web Audio API procedural gunshots, explosions, UI synth
    ├── world/
    │   ├── TileMap3D.ts             # 3D bevelled concrete/wood/steel grid + 3D chunk destruction
    │   ├── MapGenerator.ts          # Builds "Uncompleted Building" & "Apapa Container Terminal"
    │   ├── SkylineBackground3D.ts   # Z = -40 to -120 3D megacity towers, neon windows, 3D rain
    │   ├── VisionSystem3D.ts        # 2D/3D Raycast Fog-of-War, Dynamic SpotLights, Sonar Rings
    │   └── InteractiveProps3D.ts    # Shootable Power Box (12s Blackout), Ziplines, Vault Door
    ├── entities/
    │   ├── Actor3D.ts               # Base AABB 2.5D physics body (X/Y velocity, gravity, sweeps)
    │   ├── PlayerMesh3D.ts          # Articulated 3D IK Tactical Operator mesh & ragdoll rig
    │   ├── Player.ts                # Player & Bot state, HP, Armor, Bounty Cash (₦), Loadout
    │   ├── Projectile3D.ts          # 3D emissive tracers, bouncing saw-discs, piercing rails, RPGs
    │   ├── Throwable3D.ts           # Remote C4 with blinking LED light, EMP grenade, Tear Gas
    │   └── Pickup3D.ts              # Rotating 3D Cash Stacks (₦), Weapon Crates, Airdrops
    ├── systems/
    │   ├── RigSystem.ts             # 4 Movement Rigs + Universal Mid-Air Ground Slam
    │   ├── WeaponSystem.ts          # 12 Weapons, 3D recoil kick, ejected 3D brass casings
    │   ├── BotAI.ts                 # Autonomous tactical bots that use Rigs & hunt the Odogwu
    │   └── ParticleSystem3D.ts      # 3D concrete debris (X/Y/Z burst), sparks, volumetric smoke
    ├── modes/
    │   ├── ModeManager.ts           # Match state machine, timers, spawns, scoreboard
    │   ├── OdogwuStashMode.ts       # 6-Player Bounty FFA, Crown target, final 30s Extraction
    │   ├── VaultHeistMode.ts        # 3v3 Attack/Defend with laser grids & encrypted drive
    │   └── ApapaLockdownMode.ts     # Rotating 45s capture zones + rooftop chopper finale
    └── ui/
        ├── HUDCanvas.ts             # 2D Overlay: Smart-Sticks, Sonar Rings, Edge Pointers
        ├── MenuOverlay.ts           # Studio XAG Tactical Menu, Rig Picker, Mode Selector
        └── RoastReceipt.ts          # 1-Click PNG generator for the XAG Match Summary Receipt
```

---

## 3. 2.5D CINEMATIC VISUALS, 3D OPERATOR RIG & CAMERA SYSTEM

### A. Post-Processing & Lighting Pipeline (`PostProcessing.ts`)

1. **Renderer Settings:** `THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })`, `toneMapping = THREE.ACESFilmicToneMapping`, `toneMappingExposure = 1.1`, `shadowMap.enabled = true` (`THREE.PCFSoftShadowMap`).
2. **Unreal Bloom (`UnrealBloomPass`):**
* `strength = 1.3`, `radius = 0.5`, `threshold = 0.72`.
* Use `emissive` and `emissiveIntensity > 1.5` on NVG visors, laser sights, bullet tracers, C4 LEDs, thruster flames, and Gold Crowns so they physically glow against the dark monochrome architecture.

3. **High-Contrast Tactical Color Palette:**
* **Night Sky / Fog:** `#070709` (`THREE.FogExp2` density `0.006`)
* **3D Concrete / Brick Blocks:** `#27272A` (`roughness: 0.75`, `metalness: 0.15` with procedural bump map)
* **3D Indestructible Steel Girders:** `#D4D4D8` (`roughness: 0.25`, `metalness: 0.85`)
* **Local Operator NVG & Thruster Glow:** `#06B6D4` (Electric Cyan, `emissiveIntensity: 2.5`)
* **Enemy Operator NVG, Lasers & Tracers:** `#EF4444` (Crimson Red, `emissiveIntensity: 2.8`)
* **Muzzle Flashes & Explosions:** `#F97316` (Amber Orange) + transient `THREE.PointLight`
* **Bounty Cash Bundles (₦) & Extraction Pad:** `#10B981` (Emerald Green glow)
* **The Odogwu Crown `[👑]`:** `#F59E0B` (Pure Gold, `emissiveIntensity: 3.0`)

### B. 3D Articulated Operator Rigging (`PlayerMesh3D.ts`)

Construct each player/bot using hierarchical `THREE.Group` joints so characters move like modern 3D action figures:

1. **Head & Ballistic Helmet Group:** Rounded 3D tactical helmet (`#18181B`) with a quad-lens **Night-Vision Goggle (NVG)** mount that glows Cyan (player/ally) or Crimson (enemy). Head pitches smoothly to follow the 360° aim angle.
2. **Torso & Armored Plate Carrier:** Bevelled 3D chest rig with shoulder pads and a back-mounted **3D Thruster Unit** that fires dynamic 3D cone/particle flames during Rig activations.
3. **2-Bone Inverse Kinematics (IK) Arms (`UpperArm` -> `Forearm` -> `Hands`):** Both arms hold the 3D weapon mesh and rotate around the shoulder pivot toward the 360° aim vector. Apply procedural backward recoil translation along the weapon's local axis on every shot.
4. **2-Bone Articulated Legs (`Thigh` -> `Shin` -> `Boot`):** Driven by a procedural sine-wave sprint animation when moving, tucked knee pose when airborne, wall-brace pose during Wall-Kicks, and extended low-profile pose during the **Overdrive Slide**.
5. **3D Ragdoll on Elimination:** On death, unlock limb rotation constraints and launch the 3D operator body with impulse velocity and angular spin across the room.

### C. 2.5D Destructible World & Megacity Background (`TileMap3D.ts` & `SkylineBackground3D.ts`)

1. **3D Cross-Section Arena (`80 x 50` grid, each tile `1.0 x 1.0 x 3.5` 3D units):**
* Floors and walls have real `Z` thickness (`3.5` units deep) with bevelled edges so camera perspective shows the inside walls, ceilings, and depth of every room.
* **3D Debris Physics:** When any destructible tile breaks, spawn 18–25 3D polyhedral concrete/wood fragments that explode outward across `X`, `Y`, and **`Z` (flying toward the camera lens)** with gravity, rotational torque, and floor bouncing.

2. **3D Parallax Megacity Background (`Z = -25` to `-110`):**
* Procedural 3D high-rise silhouettes with emissive window grids, distant moving highway taillight streaks on a bridge, drifting fog planes, and 3D rain streaks falling diagonally across the scene.

### D. Camera, Dynamic Lighting & Sonar Fog-of-War (`Camera3D.ts` & `VisionSystem3D.ts`)

1. **Dynamic 3D Perspective Camera (`FOV = 48°`, Base `Z = +32`):**
* **Aim-Shift:** Smoothly offsets camera target by `AimDirection * 6.5` units (`11.0` units when holding the **Rail-Sniper**).
* **Velocity Zoom:** Smoothly pulls camera back from `Z = +32` to `Z = +42` during high-speed Rig boosts or slides.

2. **Weapon-Mounted `THREE.SpotLight` & Raycast Fog-of-War:**
* Every operator's weapon projects a real-time 3D `SpotLight` (`castShadow = true`, angle `0.45 rad`) along their 360° aim vector.
* Rooms blocked by solid walls/ceilings are shadowed (`opacity: 0.85` dark occlusion mask), hiding enemy meshes inside closed rooms.
* **Sound Sonar Ripples (`(( 💥 ))`):** Whenever an occluded enemy sprints, jumps, shoots, or activates a Rig behind a wall or ceiling, render expanding white wireframe sonar rings at their position on top of the darkness so players can track enemies by sound and shoot/breach through floors.

3. **Edge-Screen HUD Indicators:**
* Clamp directional indicators to the viewport border pointing toward off-screen objectives:
* `[👑 38m]` Gold pointer tracking the #1 richest player (**The Odogwu**).
* `[⚠️ SNIPER]` Red lens-flare warning when an off-screen enemy sniper laser passes near the player.
* `[🚁 VAULT]` Pulsing green pointer during the final 30-second extraction phase.

---

## 4. CONTROLS & INPUT SPECIFICATION (`InputManager.ts`)

Automatically switch between Mobile Touch HUD and Desktop Keyboard/Mouse on input detection.

### A. Mobile 2-Thumb "Smart-Stick" HUD (Landscape)

1. **Floating Left Stick (Left 40% of viewport):**
* Centers dynamically at the left thumb's initial touch point.
* **Drag Left / Right:** Sprint left or right.
* **Flick Up (top quadrant):** Jump. If contacting a vertical wall in mid-air, triggers an angled **Wall-Kick**.
* **Flick Down (bottom quadrant while mid-air):** Triggers **Universal Ground Slam**—rockets the player straight downward, smashing through damaged wood/brick floors and knocking back anyone underneath.
* **`[⚡ RIG]` Arc Button:** Curved ergonomic button wrapped directly above the Left Stick (also triggered by double-tapping the Left Stick). Fires the equipped **Movement Rig** along the current movement vector.

2. **Floating Right 3-in-1 Smart-Stick (Right 40% of viewport):**
* **Inner Ring (`20%`–`65%` radius):** **Silent 360° Aim**—rotates the operator's 3D IK arms, flashlight cone, and laser sight without firing.
* **Outer Ring (`65%`–`100%` radius):** **Auto-Fire**—unloads the equipped weapon continuously along the 360° aim angle.
* **Center Tap (Tap & release `<180ms` within `20%` radius):** **Instant Melee Lunge**—lunges forward `2.5` units with the **Tactical Cutlass** (`85 DMG`, heavy ragdoll knockback, steals `+₦50,000` cash on kill).
* **`[💣 BOOM]` Arc Button:** Curved button wrapped above the Right Stick. Tap once to toss the equipped Throwable (C4, EMP, Tear Gas); if a Remote C4 is active, tapping again detonates it from anywhere on the map.

3. **Top-Right Weapon Box `[🔄]`:**
* Tap to swap between Primary and Secondary weapons; swipe horizontally across the box to reload.
* Trigger mobile haptic feedback (`navigator.vibrate(25)`) on wall breaches, explosions, and melee hits.

### B. Desktop Keyboard & Mouse Controls

* `A` / `D`: Move Left / Right
* `W` or `Space`: Jump / Wall-Kick
* `S` (mid-air): Universal Ground Slam
* **Mouse Cursor:** 3D Raycast intersection onto the `Z = 0` plane for exact 360° Aim
* **Left Mouse Button:** Fire Weapon
* **Right Mouse Button** or `Left Shift`: Activate `[⚡ RIG]` Movement Ability
* `E` or **Middle Mouse Button**: Throw / Detonate `[💣 BOOM]` Throwable
* `F` or `V`: Tactical Cutlass Melee Lunge
* `Q` or **Mouse Scroll Wheel**: Swap Weapon | `R`: Reload

---

## 5. MOVEMENT RIGS SPECIFICATION (`RigSystem.ts`)

Players select 1 of 4 Movement Rigs in the pre-match menu (AI bots are assigned randomized Rigs):

1. **BREACH-BOOSTER (Juggernaut Class):**
* **Cooldown:** `3.5s` | **Mechanic:** Fires an explosive directional back-thruster burst (`24 units/s` for `0.35s`) along the movement/aim vector with heavy orange bloom flames.
* **Combat & Wall Interaction:** Smashes straight through up to 3 layers of destructible Wood or Brick/Concrete 3D tiles without slowing down, blasting 3D debris chunks outward. Any enemy hit takes `45 DMG` and is knocked flat for `1.0s`.

2. **OVERDRIVE SLIDE & WALL-KICK (Phantom Class):**
* **Cooldown:** `2.0s` | **Mechanic:** Ignites knee-thrusters for a sparks-flying low power-slide (`21 units/s`) that ducks under bullets and 1-tile gaps; jumping against any wall chains high-velocity zero-gravity wall-kicks up vertical shafts.
* **Combat Interaction:** Sliding through an enemy's legs sweeps them airborne and forces them to drop `10%` of their Bounty cash onto the floor.

3. **PHASE-DASH (Ghost Class):**
* **Cooldown:** `4.0s` | **Mechanic:** Dematerializes the 3D operator into dark volumetric smoke and cyan static for `0.6s`, phasing `6.0` units straight through solid 1-tile walls, ceilings, or enemy bullets without breaking the wall.

4. **GLITCH-ANCHOR (Trickster Class):**
* **Cooldown:** `6.0s` | **Mechanic:** First tap drops a spinning 3D holographic beacon at your feet (`10s` active window). Second tap from anywhere on the map snap-teleports you back to the anchor coordinates in a flash of bloom static.

---

## 6. WEAPON ARSENAL, THROWABLES & DESTRUCTIBLE TILES (`WeaponSystem.ts` & `TileMap3D.ts`)

### A. 3D Tile Types (`TileMap3D.ts`):

* `0: EMPTY`: Open air.
* `1: WOOD_SCAFFOLD` (`40 HP`): One-way jump-through platform; splinters into 3D wooden planks under gunfire or a Ground Slam.
* `2: GLASS_WINDOW` (`15 HP`): Transparent emissive-edged pane; shatters into 3D glass shards with a loud sonar ring.
* `3: BRICK_CONCRETE` (`160 HP`): Structural wall/floor; displays procedural crack geometry as HP drops; explodes into 3D concrete rubble when destroyed.
* `4: STEEL_GIRDER` (`Indestructible`): Metallic reinforcement frame; bounces Ricochet Saw-Blades and stops Breach-Boosters.
* `5: POWER_TRANSFORMER` (`100 HP`): Sparking wall-mounted electrical box. Destroying it triggers a **12-second Map-Wide Blackout** (all ambient building lights extinguish; only weapon `SpotLights`, NVG visors, laser sights, muzzle flashes, and white sonar rings remain visible). Auto-repairs after `35s`.

### B. Complete 12-Weapon Arsenal:

Every gun renders as a distinct 3D mesh held by the operator's IK hands, ejects physical 3D brass shell casings that bounce on the floor, and fires glowing 3D bloom tracers:

| Weapon | Category | DMG | Fire Interval | Wall DMG Multiplier | Signature Mechanic |
| --- | --- | --- | --- | --- | --- |
| **Tactical Cutlass** | Melee (Center-Tap) | 85 | `0.40s` | `0.5x` | `2.5u` lunge, steals `+₦50,000` cash on kill, ragdoll knockback |
| **XAG-9 Tactical Pistol** | Backup Sidearm | 18 | `0.18s` | `1.0x` | Infinite reserve ammo, fast draw speed |
| **Akimbo Micro-Uzis** | Speed SMG | 11x2 | `0.06s` | `1.0x` | Dual-wielded, `0%` movement penalty, shreds wood/glass |
| **AA-12 "Executioner"** | Auto-Shotgun | 8x9 | `0.32s` | **`4.5x`** | Obliterates brick walls and concrete floors in 2 blasts |
| **"The Judge" Revolver** | Hand Cannon | 52 | `0.55s` | `2.0x` | Heavy physics impulse—blasts airborne enemies across the map |
| **XAG-47 Assault Rifle** | Tactical Rifle | 26 | `0.11s` | `1.5x` | High-impact mid-range workhorse, chips through concrete |
| **Suppressed Ghost SMG** | Stealth SMG | 19 | `0.08s` | `0.8x` | **Zero muzzle flash light & zero sonar rings** (deadly in Blackout) |
| **Ricochet Saw-Launcher** | Tech Launcher | 48 | `0.45s` | `0.5x` | Spinning glowing tungsten discs bounce up to **4 times** off walls |
| **Rail-Sniper** | Crate Heavy | 110 | `1.20s` | **Pierces** | Projects red warning laser; slug **pierces through 2 brick walls** |
| **Bunker-Buster RPG** | Crate Heavy | 135 | `2.00s` | **Obliterates** | Drills *into* brick wall/floor and detonates `0.4s` later inside the room |
| **Shock-Arc Cannon** | Crate Heavy | 38 | `0.70s` | `0.0x` | Chain-lightning disables enemy Rig for `4s` & forces **20% cash drop** |
| **Vulcan Minigun** | Crate Heavy | 16 | `0.04s` | **`3.0x`** | Massive recoil pushes shooter backward (firing down gives flight lift) |

### C. Throwables (`[💣 BOOM]` Arc Button / `E` Key):

1. **Remote C4 Brick:** Adheres to 3D walls, ceilings, or floors with a blinking red bloom LED and audible beep. Tap `[💣 BOOM]` a second time to detonate (`140 DMG`, destroys a `3x3` block radius of brick/concrete).
2. **Blackout EMP Grenade:** Disables all enemy Movement Rigs in a `6.0u` radius and plunges the local room into darkness for `8s`.
3. **Tear-Gas Canister:** Releases volumetric green/grey particle smoke for `7s` that deals `12 DMG/sec` and reduces movement speed by `40%`.

---

## 7. GAME MODES, BOT AI & VIRAL ROAST RECEIPT (`modes/` & `RoastReceipt.ts`)

### A. Autonomous Nigerian Bot AI (`BotAI.ts`)

Populate matches with 5 aggressive AI operators (`Ghost_Lagos`, `AbujaSniper`, `KanoWreck`, `PH_Viper`, `xag_bot`) using A* / platform-jump pathfinding. Bots actively use Movement Rigs to breach walls, pick up dropped cash stacks, hunt the current **Odogwu**, and converge on the Extraction Zone in the final 30 seconds.

### B. The 3 Core Game Modes:

1. **ODOGWU STASH (6-Player Bounty Free-For-All — Default Mode):**
* **Duration:** `3:00` | **Starting Balance:** **₦100,000** per player.
* **Cash Drops:** Eliminating an enemy spills `50%` of their held balance onto the floor as rotating 3D emerald cash bundles (`₦25,000` each).
* **The Odogwu Crown `[👑]`:** The #1 richest player wears a glowing 3D Gold Crown above their helmet, earns `+₦5,000/sec` passive interest, and is tracked on every player's edge-screen radar.
* **Final 30s Chopper Extraction:** At `0:30`, a green extraction beam opens on the top roof. Standing inside for `5.0s` banks your held cash into a secure offshore vault so it cannot be lost on death. Highest total net worth at `0:00` wins.

2. **THE VAULT HEIST (3v3 Asymmetrical Attack vs. Defend):**
* **Duration:** `2:30` | Attackers spawn on the rooftop/street and must breach down through concrete floors into the reinforced basement vault, steal the **Encrypted Drive**, and carry it to the roof extraction zone. Defenders use C4 traps and shoot the Power Box to trigger Blackouts.

3. **APAPA LOCKDOWN (Rotating Zone Control):**
* **Duration:** `3:00` | Set on the *Apapa Container Terminal* map. Every `45s`, a high-yield capture zone shifts across stacked shipping containers and suspended cranes (`+₦10,000/sec` while holding the zone). In the final `30s`, the central rooftop pad activates with a `2x` cash multiplier.

### C. End-of-Match "XAG Roast Receipt" (`RoastReceipt.ts`)

At match completion, display an interactive summary screen with a **"Download Status Receipt (PNG)"** button that renders a high-contrast black-and-white tactical receipt image containing:

* **STUDIO XAG // AFTER-ACTION FINANCIAL REPORT** header + timestamp & mode name
* **THE ODOGWU (1st Place):** Gamer Tag + Final Net Worth (e.g., `₦1,620,000`)
* **CHIEF CUSTOMER (Most Eliminated):** Gamer Tag + Death Count + subtitle (*"Generously funded the entire lobby"*)
* **DEMOLITION EXPERT:** Most 3D walls/floors destroyed
* **Player's Personal Stats:** Net Worth, K/D Ratio, Rig Used, and Signature Weapon.

---

## 8. PHASED EXECUTION ROADMAP (EXECUTE IN STRICT ORDER)

* **PHASE 1 (3D Engine, Post-Processing & Destructible World):** Initialize Vite + TypeScript + Three.js + Tailwind. Build `Engine3D.ts`, `PostProcessing.ts` (`UnrealBloomPass`), `Camera3D.ts`, `TileMap3D.ts` (3D bevelled concrete/wood/steel blocks + 3D debris chunk explosion physics), `MapGenerator.ts`, and `SkylineBackground3D.ts` (3D megacity + rain). Verify 60 FPS 3D rendering in the preview browser.
* **PHASE 2 (3D Articulated Operator, 2-Thumb Smart-Stick & 4 Movement Rigs):** Build `PlayerMesh3D.ts` (hierarchical 3D limbs, glowing NVG helmet, 360° IK arms, procedural leg cycles, ragdoll death), `InputManager.ts` (Mobile 2-Thumb Smart-Stick HUD + Desktop WASD/Mouse auto-switching), and `RigSystem.ts` (Breach-Booster breaking 3D walls, Overdrive Slide & Wall-Kick, Phase-Dash, Glitch-Anchor, and Universal Ground Slam).
* **PHASE 3 (12 Weapons, 3D Projectiles, C4 & Web Audio Synth):** Build `WeaponSystem.ts`, `Projectile3D.ts`, `Throwable3D.ts`, `ParticleSystem3D.ts`, and `AudioSynth.ts`. Implement all 12 weapons, center-tap Cutlass lunge, remote C4 detonation destroying `3x3` 3D tiles, ejected 3D brass casings, and procedural Web Audio gunshots/explosions.
* **PHASE 4 (Volumetric Lighting, Fog-of-War, Sonar Rings & Blackout):** Build `VisionSystem3D.ts` and `InteractiveProps3D.ts`. Add weapon-mounted shadow-casting `SpotLights`, room occlusion masks, expanding white sound sonar rings (`(( 💥 ))`) for occluded enemies, ziplines, and the shootable Power Transformer (12s Map-Wide Blackout).
* **PHASE 5 (Bounty Economy, 3 Game Modes & Nigerian Bot AI):** Build `Pickup3D.ts` (3D rotating cash stacks & weapon crates), `BotAI.ts`, and all 3 modes (`OdogwuStashMode.ts`, `VaultHeistMode.ts`, `ApapaLockdownMode.ts`) with the 3D Odogwu Crown `[👑]`, edge-screen indicators, and final 30s roof extraction.
* **PHASE 6 (Studio XAG Menu UI & Downloadable Roast Receipt):** Build `MenuOverlay.ts` (gamer tag input, Rig selector, Mode picker, Fullscreen/Landscape trigger) and `RoastReceipt.ts` (1-click PNG status card generator). Perform final end-to-end verification across desktop and mobile viewports.

BEGIN IMMEDIATELY WITH PHASE 1 AND PROCEED AUTONOMOUSLY THROUGH PHASE 6.
