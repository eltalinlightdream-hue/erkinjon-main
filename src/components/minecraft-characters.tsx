import { useEffect, useRef } from "react";
import {
  SteveWaving,
  Creeper,
  Enderman,
  Zombie,
  EnderDragonSilhouette,
} from "@/components/minecraft-decorations";

// ═══════════════════════════════════════════════════════════════════
// SVG CHARACTER COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function SvgSkeleton({ size = 50 }: { size?: number }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 48 96" style={{ imageRendering: "pixelated" }} aria-hidden>
      <rect x="9" y="0" width="30" height="21" fill="#F0F0F0" />
      <rect x="12" y="0" width="24" height="3" fill="#E0E0E0" />
      <rect x="12" y="5" width="8" height="7" fill="#1A1A1A" />
      <rect x="28" y="5" width="8" height="7" fill="#1A1A1A" />
      <rect x="21" y="11" width="6" height="4" fill="#1A1A1A" />
      <rect x="13" y="16" width="3" height="5" fill="#F0F0F0" />
      <rect x="17" y="16" width="3" height="5" fill="#F0F0F0" />
      <rect x="25" y="16" width="3" height="5" fill="#F0F0F0" />
      <rect x="29" y="16" width="3" height="5" fill="#F0F0F0" />
      <rect x="9" y="16" width="30" height="3" fill="#D8D8D8" />
      <rect x="20" y="24" width="8" height="21" fill="#D8D8D8" />
      <rect x="10" y="27" width="10" height="3" fill="#D0D0D0" />
      <rect x="28" y="27" width="10" height="3" fill="#D0D0D0" />
      <rect x="10" y="33" width="10" height="3" fill="#D0D0D0" />
      <rect x="28" y="33" width="10" height="3" fill="#D0D0D0" />
      <rect x="10" y="39" width="10" height="3" fill="#C8C8C8" />
      <rect x="28" y="39" width="10" height="3" fill="#C8C8C8" />
      <rect x="4" y="24" width="6" height="21" fill="#D0D0D0" />
      <rect x="0" y="16" width="3" height="36" fill="#A0722A" />
      <rect x="3" y="18" width="1" height="32" fill="#E0C080" />
      <rect x="38" y="24" width="6" height="21" fill="#D0D0D0" />
      <rect x="44" y="27" width="4" height="15" fill="#D0D0D0" />
      <rect x="14" y="45" width="20" height="6" fill="#C8C8C8" />
      <rect x="14" y="51" width="8" height="27" fill="#D0D0D0" />
      <rect x="14" y="72" width="8" height="6" fill="#C0C0C0" />
      <rect x="26" y="51" width="8" height="27" fill="#D0D0D0" />
      <rect x="26" y="72" width="8" height="6" fill="#C0C0C0" />
    </svg>
  );
}

function SvgGoat({ size = 55 }: { size?: number }) {
  const s = size / 60;
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 60 48" style={{ imageRendering: "pixelated" }} aria-hidden>
      {/* Body */}
      <rect x="10" y="16" width="36" height="20" fill="#E8E0D0" />
      <rect x="10" y="16" width="36" height="2" fill="#F0E8D8" />
      <rect x="10" y="16" width="2" height="20" fill="#F0E8D8" />
      <rect x="44" y="16" width="2" height="20" fill="#C8C0B0" />
      {/* Head */}
      <rect x="36" y="8" width="20" height="16" fill="#E8E0D0" />
      <rect x="36" y="8" width="20" height="2" fill="#F0E8D8" />
      {/* Horns */}
      <rect x="38" y="2" width="4" height="8" fill="#C8B898" />
      <rect x="50" y="2" width="4" height="8" fill="#C8B898" />
      <rect x="34" y="4" width="6" height="4" fill="#C8B898" />
      <rect x="52" y="4" width="6" height="4" fill="#C8B898" />
      {/* Eye */}
      <rect x="50" y="11" width="4" height="4" fill="#1A1A1A" />
      <rect x="51" y="12" width="2" height="2" fill="#FFFFFF" />
      {/* Nose */}
      <rect x="54" y="18" width="6" height="4" fill="#D0C8B8" />
      {/* Beard */}
      <rect x="56" y="22" width="4" height="6" fill="#D8D0C0" />
      {/* Legs */}
      <rect x="12" y="36" width="6" height="12" fill="#D8D0C0" />
      <rect x="20" y="36" width="6" height="12" fill="#D0C8B8" />
      <rect x="32" y="36" width="6" height="12" fill="#D8D0C0" />
      <rect x="40" y="36" width="6" height="12" fill="#D0C8B8" />
      {/* Hooves */}
      <rect x="12" y="44" width="6" height="4" fill="#888070" />
      <rect x="20" y="44" width="6" height="4" fill="#888070" />
      <rect x="32" y="44" width="6" height="4" fill="#888070" />
      <rect x="40" y="44" width="6" height="4" fill="#888070" />
      {/* Tail */}
      <rect x="8" y="16" width="4" height="6" fill="#F0E8D8" />
    </svg>
  );
}

function SvgSpider({ size = 55 }: { size?: number }) {
  return (
    <svg width={size * 1.8} height={size * 0.55} viewBox="0 0 90 27" style={{ imageRendering: "pixelated" }} aria-hidden>
      {/* Abdomen */}
      <rect x="46" y="7" width="20" height="13" fill="#2A1010" />
      <rect x="46" y="7" width="20" height="2" fill="#3A2020" />
      {/* Cephalothorax */}
      <rect x="28" y="5" width="18" height="15" fill="#3A1A1A" />
      <rect x="28" y="5" width="18" height="2" fill="#4A2A2A" />
      {/* Eyes */}
      <rect x="30" y="7" width="4" height="4" fill="#C0392B" />
      <rect x="36" y="7" width="4" height="4" fill="#C0392B" />
      <rect x="31" y="8" width="2" height="2" fill="#FF6666" />
      <rect x="37" y="8" width="2" height="2" fill="#FF6666" />
      {/* Fangs */}
      <rect x="32" y="19" width="3" height="5" fill="#CCCCCC" />
      <rect x="37" y="19" width="3" height="5" fill="#CCCCCC" />
      {/* Left legs (4 pairs, alternating groups) */}
      <g className="mc-legs-a">
        <rect x="4"  y="1"  width="24" height="3" fill="#2A1A1A" />
        <rect x="6"  y="15" width="22" height="3" fill="#2A1A1A" />
      </g>
      <g className="mc-legs-b">
        <rect x="8"  y="8"  width="20" height="3" fill="#2A1A1A" />
        <rect x="10" y="20" width="18" height="3" fill="#2A1A1A" />
      </g>
      {/* Right legs (4 pairs, alternating groups) */}
      <g className="mc-legs-a">
        <rect x="62" y="1"  width="24" height="3" fill="#2A1A1A" />
        <rect x="62" y="15" width="22" height="3" fill="#2A1A1A" />
      </g>
      <g className="mc-legs-b">
        <rect x="62" y="8"  width="20" height="3" fill="#2A1A1A" />
        <rect x="62" y="20" width="18" height="3" fill="#2A1A1A" />
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════
// CSS ANIMATIONS (injected once)
// ═══════════════════════════════════════════════════════════════════

const MC_CSS = `
@keyframes mc-breathe {
  0%, 100% { transform: scaleY(1); }
  50%       { transform: scaleY(1.03); }
}
@keyframes mc-blink {
  0%, 89%, 100% { opacity: 1; }
  92%            { opacity: 0; }
}
@keyframes mc-dragon-flap {
  0%, 100% { transform: scaleY(1); }
  50%       { transform: scaleY(0.85); }
}
@keyframes mc-land-squash {
  0%   { transform: scaleY(0.7); }
  60%  { transform: scaleY(1.08); }
  100% { transform: scaleY(1); }
}
@keyframes mc-legs-a {
  0%, 100% { transform: rotate(-15deg); }
  50%       { transform: rotate(15deg); }
}
@keyframes mc-legs-b {
  0%, 100% { transform: rotate(15deg); }
  50%       { transform: rotate(-15deg); }
}
@keyframes mc-enderman-teleport-out {
  0%   { opacity: 1; transform: scaleY(1); }
  100% { opacity: 0; transform: scaleY(0.05) scaleX(2); }
}
@keyframes mc-enderman-teleport-in {
  0%   { opacity: 0; transform: scaleY(0.05) scaleX(2); }
  100% { opacity: 1; transform: scaleY(1); }
}
.mc-breathe {
  animation: mc-breathe 2s ease-in-out infinite;
  transform-origin: bottom center;
}
.mc-blink {
  animation: mc-blink 4s linear infinite;
}
.mc-dragon-wings {
  animation: mc-dragon-flap 0.8s ease-in-out infinite;
}
.mc-land-squash {
  animation: mc-land-squash 0.3s cubic-bezier(0.33,1,0.68,1) forwards;
  transform-origin: bottom center;
}
.mc-legs-a {
  animation: mc-legs-a 0.25s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 50% 100%;
}
.mc-legs-b {
  animation: mc-legs-b 0.25s ease-in-out infinite;
  transform-box: fill-box;
  transform-origin: 50% 100%;
}
`;

// ═══════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════

type BehaviorType = "patrol" | "wander" | "fly" | "teleport" | "jump_patrol" | "crawl";

interface SectionBounds {
  top: number; bottom: number; left: number; right: number;
}

interface PatrolState {
  kind: "patrol";
  x: number; dir: 1 | -1;
  pausing: boolean; pauseTimer: number;
  t: number;
}
interface WanderState {
  kind: "wander";
  x: number; y: number;
  targetX: number; targetY: number;
  timer: number; t: number;
  facingRight: boolean; isMoving: boolean;
}
interface FlyState {
  kind: "fly";
  t: number;
}
interface TeleportState {
  kind: "teleport";
  x: number; y: number;
  phase: "idle" | "out" | "in";
  phaseTimer: number;
  pendingX: number; pendingY: number;
}
interface JumpPatrolState {
  kind: "jump_patrol";
  x: number; dir: 1 | -1;
  pausing: boolean; pauseTimer: number;
  t: number; jumpTimer: number;
  isJumping: boolean; jumpProgress: number;
  baseY: number;
  landingSquash: boolean;
}
interface CrawlState {
  kind: "crawl";
  x: number; dir: 1 | -1; t: number;
}

type AnimState =
  | PatrolState | WanderState | FlyState
  | TeleportState | JumpPatrolState | CrawlState;

interface TickResult {
  x: number; y: number;
  flipX: 1 | -1;
  scaleY: number;
  opacity: number;
  teleportPhase?: "idle" | "out" | "in";
  landingSquash?: boolean;
}

interface CharDef {
  id: string;
  section: number;
  behavior: BehaviorType;
  w: number; h: number;
  opacity: number;
  initX?: number;
}

// ═══════════════════════════════════════════════════════════════════
// CHARACTER DEFINITIONS  (3 sections × 3 characters = 9 total)
// ═══════════════════════════════════════════════════════════════════

const CHAR_DEFS: CharDef[] = [
  // Section 0: Ender Dragon (FLY) + Steve (PATROL) + Creeper (WANDER)
  { id: "dragon",   section: 0, behavior: "fly",        w: 224, h: 80,  opacity: 0.55 },
  { id: "steve",    section: 0, behavior: "patrol",     w: 50,  h: 100, opacity: 0.70, initX: 0.25 },
  { id: "creeper1", section: 0, behavior: "wander",     w: 48,  h: 96,  opacity: 0.65 },

  // Section 1: Zombie (WANDER) + Skeleton (PATROL) + Goat (JUMP_PATROL)
  { id: "zombie",   section: 1, behavior: "wander",     w: 50,  h: 100, opacity: 0.65 },
  { id: "skeleton", section: 1, behavior: "patrol",     w: 48,  h: 96,  opacity: 0.68, initX: 0.6 },
  { id: "goat",     section: 1, behavior: "jump_patrol",w: 60,  h: 48,  opacity: 0.70, initX: 0.8 },

  // Section 2: Spider (CRAWL) + Enderman (TELEPORT) + Creeper (WANDER)
  { id: "spider",   section: 2, behavior: "crawl",      w: 99,  h: 30,  opacity: 0.70 },
  { id: "enderman", section: 2, behavior: "teleport",   w: 44,  h: 110, opacity: 0.70 },
  { id: "creeper2", section: 2, behavior: "wander",     w: 45,  h: 90,  opacity: 0.65 },
];

// ═══════════════════════════════════════════════════════════════════
// STATE INIT
// ═══════════════════════════════════════════════════════════════════

const PAD = 20;

function getBounds(section: number): SectionBounds {
  const vh = window.innerHeight;
  const vw = window.innerWidth;
  const sh = vh / 3;
  return { top: section * sh, bottom: (section + 1) * sh, left: 0, right: vw };
}

function initState(def: CharDef): AnimState {
  const b = getBounds(def.section);
  const usableW = b.right - b.left - PAD * 2 - def.w;
  const usableH = b.bottom - b.top - PAD * 2 - def.h;
  const cx = b.left + PAD + usableW * (def.initX ?? 0.5);
  const cy = b.top + PAD + usableH * 0.5;

  switch (def.behavior) {
    case "patrol":
      return { kind: "patrol", x: cx, dir: 1, pausing: false, pauseTimer: 0, t: Math.random() * 6 };
    case "wander":
      return {
        kind: "wander", x: cx, y: cy, targetX: cx, targetY: cy,
        timer: 0.5 + Math.random() * 2, t: Math.random() * 6,
        facingRight: true, isMoving: false,
      };
    case "fly":
      return { kind: "fly", t: Math.random() * Math.PI * 2 };
    case "teleport": {
      const rx = b.left + PAD + Math.random() * usableW;
      const ry = b.top + PAD + Math.random() * usableH;
      return { kind: "teleport", x: cx, y: cy, phase: "idle", phaseTimer: 2 + Math.random() * 1, pendingX: rx, pendingY: ry };
    }
    case "jump_patrol": {
      const baseY = b.bottom - def.h - PAD;
      return { kind: "jump_patrol", x: cx, dir: 1, pausing: false, pauseTimer: 0, t: Math.random() * 6, jumpTimer: 1.5 + Math.random(), isJumping: false, jumpProgress: 0, baseY, landingSquash: false };
    }
    case "crawl":
      return { kind: "crawl", x: b.left + PAD, dir: 1, t: 0 };
  }
}

// ═══════════════════════════════════════════════════════════════════
// TICK FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

function tickState(state: AnimState, dt: number, def: CharDef): TickResult {
  const b = getBounds(def.section);
  const left  = b.left  + PAD;
  const right  = b.right  - PAD - def.w;
  const top    = b.top    + PAD;
  const bottom = b.bottom - PAD - def.h;

  switch (state.kind) {
    case "patrol": {
      state.t += dt;
      if (state.pausing) {
        state.pauseTimer -= dt;
        if (state.pauseTimer <= 0) state.pausing = false;
        return { x: state.x, y: bottom, flipX: state.dir as 1 | -1, scaleY: 1, opacity: 1 };
      }
      const bobY = Math.sin(state.t * 8) * 3;
      state.x += 60 * state.dir * dt;
      if (state.x >= right) { state.x = right; state.pausing = true; state.pauseTimer = 0.5; state.dir = -1; }
      if (state.x <= left)  { state.x = left;  state.pausing = true; state.pauseTimer = 0.5; state.dir =  1; }
      return { x: state.x, y: bottom + bobY, flipX: state.dir as 1 | -1, scaleY: 1, opacity: 1 };
    }

    case "wander": {
      state.t += dt;
      state.timer -= dt;
      const dx = state.targetX - state.x;
      const dy = state.targetY - state.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 3) {
        state.isMoving = true;
        state.facingRight = dx > 0;
        const spd = 40 * dt;
        if (spd >= dist) { state.x = state.targetX; state.y = state.targetY; }
        else { state.x += (dx / dist) * spd; state.y += (dy / dist) * spd; }
      } else {
        state.isMoving = false;
      }
      if (state.timer <= 0) {
        state.targetX = left + Math.random() * Math.max(0, right - left);
        state.targetY = top  + Math.random() * Math.max(0, bottom - top);
        state.timer = 3;
      }
      const bob = state.isMoving ? Math.sin(state.t * 8) * 2 : 0;
      return { x: state.x, y: state.y + bob, flipX: state.facingRight ? 1 : -1, scaleY: 1, opacity: 1 };
    }

    case "fly": {
      state.t += dt;
      const cx = (b.left + b.right) / 2 - def.w / 2;
      const cy = (b.top + b.bottom) / 2 - def.h / 2;
      const rx = (b.right - b.left) * 0.35;
      const x = cx + Math.cos(state.t * 0.5) * rx;
      const y = cy + Math.sin(state.t * 0.8) * 60;
      const flipX = Math.cos(state.t * 0.5) >= 0 ? 1 : -1;
      return { x, y, flipX: flipX as 1 | -1, scaleY: 1, opacity: 1 };
    }

    case "teleport": {
      state.phaseTimer -= dt;
      if (state.phaseTimer <= 0) {
        if (state.phase === "idle") {
          state.phase = "out";
          state.phaseTimer = 0.15;
        } else if (state.phase === "out") {
          state.x = b.left + PAD + Math.random() * Math.max(0, right - left);
          state.y = b.top  + PAD + Math.random() * Math.max(0, bottom - top);
          state.phase = "in";
          state.phaseTimer = 0.15;
        } else {
          state.phase = "idle";
          state.phaseTimer = 2 + Math.random();
        }
      }
      const opacity = state.phase === "out" ? 0 : 1;
      return { x: state.x, y: state.y, flipX: 1, scaleY: 1, opacity, teleportPhase: state.phase };
    }

    case "jump_patrol": {
      state.t += dt;
      // Patrol X
      if (state.pausing) {
        state.pauseTimer -= dt;
        if (state.pauseTimer <= 0) state.pausing = false;
      } else {
        state.x += 60 * state.dir * dt;
        if (state.x >= right) { state.x = right; state.pausing = true; state.pauseTimer = 0.5; state.dir = -1; }
        if (state.x <= left)  { state.x = left;  state.pausing = true; state.pauseTimer = 0.5; state.dir =  1; }
      }
      // Jump trigger
      state.jumpTimer -= dt;
      if (state.jumpTimer <= 0 && !state.isJumping) {
        state.isJumping = true;
        state.jumpProgress = 0;
        state.jumpTimer = 2.5;
        state.landingSquash = false;
      }
      // Jump arc
      let yOff = 0;
      let scaleY = 1;
      let landingSquash = false;
      if (state.isJumping) {
        state.jumpProgress += dt / 0.65;
        if (state.jumpProgress >= 1) {
          state.isJumping = false;
          state.jumpProgress = 0;
          state.landingSquash = true;
          landingSquash = true;
        } else {
          yOff = -Math.sin(state.jumpProgress * Math.PI) * 80;
        }
      } else if (state.landingSquash) {
        state.landingSquash = false;
      }
      const bob = !state.isJumping ? Math.sin(state.t * 8) * 3 : 0;
      return { x: state.x, y: state.baseY + yOff + bob, flipX: state.dir as 1 | -1, scaleY, opacity: 1, landingSquash };
    }

    case "crawl": {
      state.t += dt;
      const crawlY = b.bottom - def.h - 20;
      state.x += 45 * state.dir * dt;
      if (state.x >= right) { state.x = right; state.dir = -1; }
      if (state.x <= left)  { state.x = left;  state.dir =  1; }
      return { x: state.x, y: crawlY, flipX: state.dir as 1 | -1, scaleY: 1, opacity: 1 };
    }
  }
}

// ═══════════════════════════════════════════════════════════════════
// CHARACTER RENDERER
// ═══════════════════════════════════════════════════════════════════

function renderCharContent(def: CharDef): React.ReactNode {
  switch (def.id) {
    case "dragon":
      return (
        <div className="mc-dragon-wings">
          <EnderDragonSilhouette width={224} height={80} opacity={1} />
        </div>
      );
    case "steve":
      return <div className="mc-breathe"><SteveWaving size={50} opacity={1} /></div>;
    case "creeper1":
    case "creeper2":
      return <div className="mc-breathe"><Creeper size={def.id === "creeper2" ? 45 : 48} opacity={1} /></div>;
    case "zombie":
      return <div className="mc-breathe"><Zombie size={50} opacity={1} /></div>;
    case "skeleton":
      return <div className="mc-breathe"><SvgSkeleton size={48} /></div>;
    case "goat":
      return <div className="mc-breathe"><SvgGoat size={55} /></div>;
    case "spider":
      return <SvgSpider size={55} />;
    case "enderman":
      return <div className="mc-breathe"><Enderman size={40} opacity={1} /></div>;
    default:
      return null;
  }
}

// ═══════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════

export function MinecraftCharacters() {
  const cssInjected = useRef(false);
  const outerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statesRef = useRef<AnimState[]>([]);
  const rafRef    = useRef<number>(0);
  const lastTRef  = useRef<number>(0);
  const initRef   = useRef(false);

  useEffect(() => {
    // Inject CSS once
    if (!cssInjected.current) {
      cssInjected.current = true;
      if (!document.getElementById("mc-char-css")) {
        const el = document.createElement("style");
        el.id = "mc-char-css";
        el.textContent = MC_CSS;
        document.head.appendChild(el);
      }
    }

    // Init per-character animation state
    if (!initRef.current) {
      initRef.current = true;
      statesRef.current = CHAR_DEFS.map(initState);
    }

    // rAF animation loop — updates DOM directly, no React re-renders
    function loop(ts: number) {
      const dt = Math.min((ts - lastTRef.current) / 1000, 0.05);
      lastTRef.current = ts;

      CHAR_DEFS.forEach((def, i) => {
        const outer = outerRefs.current[i];
        const inner = innerRefs.current[i];
        const state = statesRef.current[i];
        if (!outer || !inner || !state) return;

        const res = tickState(state, dt, def);

        // Position: translate(x, y) — outer div
        outer.style.transform = `translate(${res.x}px, ${res.y}px)`;
        outer.style.opacity = String(def.opacity * res.opacity);

        // Facing direction — inner div (flip around center using negative margin trick)
        if (res.flipX === -1) {
          inner.style.transform = `scaleX(-1)`;
        } else {
          inner.style.transform = `scaleX(1)`;
        }

        // Teleport: use CSS transition on opacity (set on outer)
        if (def.behavior === "teleport") {
          outer.style.transition = res.teleportPhase === "out" || res.teleportPhase === "in"
            ? "opacity 0.12s ease, transform 0s"
            : "opacity 0.12s ease";
        }

        // Goat landing squash: toggle class on inner
        if (def.behavior === "jump_patrol") {
          if (res.landingSquash) {
            inner.classList.remove("mc-land-squash");
            // Force reflow to restart animation
            void inner.offsetWidth;
            inner.classList.add("mc-land-squash");
          }
        }
      });

      rafRef.current = requestAnimationFrame(loop);
    }

    lastTRef.current = performance.now();
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 30, overflow: "hidden" }}
      aria-hidden
    >
      {CHAR_DEFS.map((def, i) => (
        <div
          key={def.id}
          ref={(el) => { outerRefs.current[i] = el; }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            willChange: "transform, opacity",
          }}
        >
          <div
            ref={(el) => { innerRefs.current[i] = el; }}
            style={{ transformOrigin: "center bottom" }}
          >
            {renderCharContent(def)}
          </div>
        </div>
      ))}
    </div>
  );
}
