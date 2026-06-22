import { useMemo } from "react";
import { useLocation } from "@tanstack/react-router";
import {
  SteveWaving,
  SteveMining,
  SteveReading,
  Creeper,
  Enderman,
  Zombie,
  EnderDragonSilhouette,
} from "@/components/minecraft-decorations";

// ═══════════════════════════════════════════════════════════════════
// EXTRA SVG CHARACTERS
// ═══════════════════════════════════════════════════════════════════

function SvgSkeleton({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 48 96" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="9" y="0" width="30" height="21" fill="#F0F0F0" />
      <rect x="12" y="5" width="8" height="7" fill="#1A1A1A" />
      <rect x="28" y="5" width="8" height="7" fill="#1A1A1A" />
      <rect x="21" y="11" width="6" height="4" fill="#1A1A1A" />
      <rect x="13" y="16" width="3" height="5" fill="#F0F0F0" />
      <rect x="17" y="16" width="3" height="5" fill="#F0F0F0" />
      <rect x="25" y="16" width="3" height="5" fill="#F0F0F0" />
      <rect x="29" y="16" width="3" height="5" fill="#F0F0F0" />
      <rect x="20" y="24" width="8" height="21" fill="#D8D8D8" />
      <rect x="10" y="27" width="10" height="3" fill="#D0D0D0" />
      <rect x="28" y="27" width="10" height="3" fill="#D0D0D0" />
      <rect x="10" y="33" width="10" height="3" fill="#D0D0D0" />
      <rect x="28" y="33" width="10" height="3" fill="#D0D0D0" />
      <rect x="4"  y="24" width="6" height="21" fill="#D0D0D0" />
      <rect x="38" y="24" width="6" height="21" fill="#D0D0D0" />
      <rect x="14" y="51" width="8" height="27" fill="#D0D0D0" />
      <rect x="26" y="51" width="8" height="27" fill="#D0D0D0" />
    </svg>
  );
}

function SvgSlime({ size = 42 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.85} viewBox="0 0 42 36" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="2" y="4" width="38" height="28" fill="#5BBF5B" />
      <rect x="2" y="4" width="14" height="10" fill="#7AD67A" />
      <rect x="9"  y="12" width="7" height="7" fill="#1A1A1A" />
      <rect x="26" y="12" width="7" height="7" fill="#1A1A1A" />
      <rect x="12" y="13" width="2" height="2" fill="#FFFFFF" />
      <rect x="29" y="13" width="2" height="2" fill="#FFFFFF" />
      <rect x="10" y="24" width="4" height="2" fill="#1A1A1A" />
      <rect x="28" y="24" width="4" height="2" fill="#1A1A1A" />
      <rect x="14" y="26" width="14" height="2" fill="#1A1A1A" />
      <rect x="6"  y="32" width="10" height="4" fill="#4AAE4A" />
      <rect x="26" y="32" width="10" height="4" fill="#4AAE4A" />
    </svg>
  );
}

function SvgVillager({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 48 96" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="10" y="0"  width="28" height="24" fill="#C8A878" />
      <rect x="14" y="7"  width="5"  height="5"  fill="#1A1A1A" />
      <rect x="29" y="7"  width="5"  height="5"  fill="#1A1A1A" />
      <rect x="18" y="12" width="12" height="8"  fill="#B09068" />
      <rect x="6"  y="24" width="36" height="33" fill="#7B5030" />
      <rect x="14" y="24" width="20" height="33" fill="#8B6040" />
      <rect x="0"  y="27" width="6"  height="18" fill="#7B5030" />
      <rect x="42" y="27" width="6"  height="18" fill="#7B5030" />
      <rect x="10" y="57" width="12" height="21" fill="#5D3A1A" />
      <rect x="26" y="57" width="12" height="21" fill="#5D3A1A" />
    </svg>
  );
}

function SvgWitch({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 48 96" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="16" y="0"  width="16" height="12" fill="#1A1A1A" />
      <rect x="6"  y="12" width="36" height="6"  fill="#1A1A1A" />
      <rect x="16" y="10" width="16" height="3"  fill="#9B59B6" />
      <rect x="12" y="18" width="24" height="21" fill="#C0C870" />
      <rect x="15" y="21" width="5"  height="5"  fill="#1A1A1A" />
      <rect x="28" y="21" width="5"  height="5"  fill="#1A1A1A" />
      <rect x="20" y="27" width="9"  height="6"  fill="#A0A850" />
      <rect x="8"  y="39" width="32" height="27" fill="#2A1A3A" />
      <rect x="0"  y="42" width="8"  height="18" fill="#2A1A3A" />
      <rect x="40" y="42" width="8"  height="18" fill="#2A1A3A" />
      <rect x="12" y="66" width="11" height="24" fill="#2A1A3A" />
      <rect x="25" y="66" width="11" height="24" fill="#2A1A3A" />
    </svg>
  );
}

function SvgIronGolem({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 64 96" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="20" y="0"  width="24" height="24" fill="#9A9A9A" />
      <rect x="23" y="6"  width="6"  height="5"  fill="#C0392B" />
      <rect x="35" y="6"  width="6"  height="5"  fill="#C0392B" />
      <rect x="28" y="12" width="8"  height="4"  fill="#888888" />
      <rect x="22" y="14" width="3"  height="7"  fill="#5D8A3C" />
      <rect x="39" y="14" width="3"  height="7"  fill="#5D8A3C" />
      <rect x="12" y="24" width="40" height="30" fill="#929292" />
      <rect x="0"  y="24" width="12" height="36" fill="#888888" />
      <rect x="0"  y="58" width="12" height="8"  fill="#787878" />
      <rect x="52" y="24" width="12" height="36" fill="#888888" />
      <rect x="52" y="58" width="12" height="8"  fill="#787878" />
      <rect x="15" y="54" width="14" height="30" fill="#8A8A8A" />
      <rect x="35" y="54" width="14" height="30" fill="#8A8A8A" />
    </svg>
  );
}

function SvgBat({ size = 30 }: { size?: number }) {
  return (
    <svg width={size * 2} height={size} viewBox="0 0 60 30" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="0"  y="8"  width="22" height="14" fill="#2A1A3A" />
      <rect x="4"  y="5"  width="14" height="5"  fill="#2A1A3A" />
      <rect x="24" y="5"  width="12" height="17" fill="#1A0A2A" />
      <rect x="24" y="1"  width="4"  height="6"  fill="#1A0A2A" />
      <rect x="32" y="1"  width="4"  height="6"  fill="#1A0A2A" />
      <rect x="26" y="7"  width="3"  height="3"  fill="#C0392B" />
      <rect x="31" y="7"  width="3"  height="3"  fill="#C0392B" />
      <rect x="34" y="14" width="4"  height="8"  fill="#2A1A3A" />
      <rect x="38" y="8"  width="22" height="14" fill="#2A1A3A" />
      <rect x="42" y="5"  width="14" height="5"  fill="#2A1A3A" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════
// STATIC PLACEMENT CSS (injected once)
// ═══════════════════════════════════════════════════════════════════

const MC_STATIC_CSS = `
@keyframes mc-breathe {
  0%, 100% { transform: scaleY(1); }
  50%       { transform: scaleY(1.03); }
}
@keyframes mc-float-idle {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-6px); }
}
@keyframes mc-bat-flap {
  0%, 100% { transform: scaleX(1) scaleY(1); }
  50%       { transform: scaleX(0.7) scaleY(0.65); }
}
@keyframes mc-dragon-flap {
  0%, 100% { transform: scaleY(1); }
  50%       { transform: scaleY(0.82); }
}
.mc-static-breathe { animation: mc-breathe 2.2s ease-in-out infinite; transform-origin: bottom center; }
.mc-static-float   { animation: mc-float-idle 3s ease-in-out infinite; }
.mc-static-bat     { animation: mc-bat-flap 0.2s ease-in-out infinite; }
.mc-static-dragon  { animation: mc-dragon-flap 0.9s ease-in-out infinite; }
`;

let cssInjected = false;
function injectCss() {
  if (cssInjected || typeof document === "undefined") return;
  cssInjected = true;
  if (document.getElementById("mc-static-css")) return;
  const el = document.createElement("style");
  el.id = "mc-static-css";
  el.textContent = MC_STATIC_CSS;
  document.head.appendChild(el);
}

// ═══════════════════════════════════════════════════════════════════
// CHARACTER REGISTRY
// ═══════════════════════════════════════════════════════════════════

type CharKey =
  | "steve-wave" | "steve-mine" | "steve-read"
  | "creeper" | "zombie" | "skeleton"
  | "enderman" | "dragon"
  | "slime" | "villager" | "witch" | "iron-golem" | "bat";

interface CharSpec {
  key: CharKey;
  animClass: string;
  w: number;   // pixel width  (for flip calculation)
  h: number;   // pixel height
}

const CHAR_SPECS: Record<CharKey, CharSpec> = {
  "steve-wave":  { key: "steve-wave",  animClass: "mc-static-breathe", w: 48,  h: 96  },
  "steve-mine":  { key: "steve-mine",  animClass: "mc-static-breathe", w: 48,  h: 96  },
  "steve-read":  { key: "steve-read",  animClass: "mc-static-breathe", w: 48,  h: 96  },
  "creeper":     { key: "creeper",     animClass: "mc-static-breathe", w: 48,  h: 96  },
  "zombie":      { key: "zombie",      animClass: "mc-static-breathe", w: 48,  h: 96  },
  "skeleton":    { key: "skeleton",    animClass: "mc-static-breathe", w: 48,  h: 96  },
  "enderman":    { key: "enderman",    animClass: "mc-static-float",   w: 40,  h: 110 },
  "dragon":      { key: "dragon",      animClass: "mc-static-dragon",  w: 200, h: 72  },
  "slime":       { key: "slime",       animClass: "mc-static-float",   w: 42,  h: 36  },
  "villager":    { key: "villager",    animClass: "mc-static-breathe", w: 48,  h: 96  },
  "witch":       { key: "witch",       animClass: "mc-static-breathe", w: 48,  h: 96  },
  "iron-golem":  { key: "iron-golem",  animClass: "mc-static-breathe", w: 64,  h: 96  },
  "bat":         { key: "bat",         animClass: "mc-static-bat",     w: 60,  h: 30  },
};

function renderChar(key: CharKey, size: number): React.ReactNode {
  switch (key) {
    case "steve-wave":  return <SteveWaving size={size} opacity={1} />;
    case "steve-mine":  return <SteveMining size={size} opacity={1} />;
    case "steve-read":  return <SteveReading size={size} opacity={1} />;
    case "creeper":     return <Creeper size={size} opacity={1} />;
    case "zombie":      return <Zombie size={size} opacity={1} />;
    case "skeleton":    return <SvgSkeleton size={size} />;
    case "enderman":    return <Enderman size={size * 0.55} opacity={1} />;
    case "dragon":      return <EnderDragonSilhouette width={size * 2.8} height={size} opacity={1} />;
    case "slime":       return <SvgSlime size={size} />;
    case "villager":    return <SvgVillager size={size} />;
    case "witch":       return <SvgWitch size={size} />;
    case "iron-golem":  return <SvgIronGolem size={size} />;
    case "bat":         return <SvgBat size={size} />;
  }
}

// ═══════════════════════════════════════════════════════════════════
// PAGE → CHARACTER MAPPING
// ═══════════════════════════════════════════════════════════════════

function charsForPath(pathname: string): CharKey[] {
  if (pathname === "/")                           return ["dragon", "steve-wave", "creeper", "slime"];
  if (pathname.startsWith("/practice"))           return ["steve-mine", "zombie", "skeleton", "creeper"];
  if (pathname.startsWith("/writing"))            return ["steve-read", "witch", "villager", "creeper"];
  if (pathname.startsWith("/reading"))            return ["steve-read", "skeleton", "witch", "slime"];
  if (pathname.startsWith("/listening"))          return ["bat", "zombie", "creeper", "skeleton"];
  if (pathname.startsWith("/speaking"))           return ["enderman", "bat", "witch", "villager"];
  if (pathname.startsWith("/vocabulary"))         return ["iron-golem", "villager", "slime", "steve-read"];
  if (pathname.startsWith("/videos"))             return ["bat", "steve-wave", "creeper", "slime"];
  if (pathname.startsWith("/articles"))           return ["steve-read", "villager", "witch", "bat"];
  if (pathname.startsWith("/premium"))            return ["dragon", "iron-golem", "steve-wave", "enderman"];
  if (pathname.startsWith("/admin"))              return ["enderman", "skeleton", "witch", "zombie"];
  if (pathname.startsWith("/account"))            return ["villager", "steve-wave", "slime"];
  return ["steve-wave", "creeper", "slime"];
}

// ═══════════════════════════════════════════════════════════════════
// DETERMINISTIC POSITION GENERATOR
// ═══════════════════════════════════════════════════════════════════

function seededRand(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (Math.imul(1664525, s) + 1013904223) | 0;
    return (s >>> 0) / 0xffffffff;
  };
}

function hashStr(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (Math.imul(33, h) ^ s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

interface PlacedChar {
  key: CharKey;
  size: number;     // px
  left: number;     // %
  top: number;      // %
  flipX: boolean;
  opacity: number;
  animDelay: string;
}

// Spread characters across the page without overlapping the center content.
// Strategy: place them in outer bands — left 12%, right 12%, bottom strip.
function computePlacements(pathname: string): PlacedChar[] {
  const keys = charsForPath(pathname);
  const rand = seededRand(hashStr(pathname));

  // Slot zones: leftEdge, rightEdge, bottomLeft, bottomRight, topSide
  const zones = [
    { leftMin: 1,  leftMax: 10, topMin: 15, topMax: 75 },
    { leftMin: 88, leftMax: 97, topMin: 15, topMax: 75 },
    { leftMin: 2,  leftMax: 18, topMin: 70, topMax: 88 },
    { leftMin: 80, leftMax: 96, topMin: 70, topMax: 88 },
    { leftMin: 30, leftMax: 68, topMin: 80, topMax: 92 },
  ];

  return keys.map((key, i) => {
    const zone = zones[i % zones.length];
    const left = zone.leftMin + rand() * (zone.leftMax - zone.leftMin);
    const top  = zone.topMin  + rand() * (zone.topMax  - zone.topMin);
    const size = 40 + Math.floor(rand() * 20); // 40–60px
    const flipX = left > 50; // face inward toward center
    const opacity = 0.35 + rand() * 0.25; // 0.35–0.60
    const animDelay = `-${(rand() * 3).toFixed(1)}s`;
    return { key, size, left, top, flipX, opacity, animDelay };
  });
}

// ═══════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════

export function MinecraftCharacters() {
  injectCss();
  const location = useLocation();
  const placements = useMemo(() => computePlacements(location.pathname), [location.pathname]);

  return (
    <div
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 10, overflow: "hidden" }}
      aria-hidden
    >
      {placements.map((p, i) => {
        const spec = CHAR_SPECS[p.key];
        return (
          <div
            key={`${location.pathname}-${i}`}
            style={{
              position: "absolute",
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              transform: p.flipX ? "scaleX(-1)" : undefined,
              transformOrigin: "center bottom",
            }}
          >
            <div
              className={spec.animClass}
              style={{ animationDelay: p.animDelay }}
            >
              {renderChar(p.key, p.size)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
