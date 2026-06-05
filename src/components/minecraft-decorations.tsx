/* Minecraft pixel-art SVG characters & item decorations */

/* ─── CHARACTERS ──────────────────────────────────────────────── */

export function SteveWaving({ size = 96, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  const s = size / 48;
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 48 96"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* ── Head ── */}
      {/* Hair top */}
      <rect x="12" y="0"  width="24" height="6"  fill="#5D3A1A" />
      <rect x="12" y="6"  width="24" height="3"  fill="#7B5030" />
      {/* Skin face */}
      <rect x="12" y="9"  width="24" height="15" fill="#C68642" />
      {/* Eye whites */}
      <rect x="15" y="12" width="6"  height="6"  fill="white" />
      <rect x="27" y="12" width="6"  height="6"  fill="white" />
      {/* Pupils */}
      <rect x="18" y="15" width="3"  height="3"  fill="#1A1A1A" />
      <rect x="30" y="15" width="3"  height="3"  fill="#1A1A1A" />
      {/* Nose */}
      <rect x="22" y="18" width="4"  height="3"  fill="#A0622A" />
      {/* Mouth */}
      <rect x="18" y="21" width="12" height="3"  fill="#5D2A00" />
      <rect x="21" y="21" width="6"  height="3"  fill="#8B3A00" />
      {/* Head outline */}
      <rect x="12" y="0"  width="24" height="1"  fill="#3A2010" />
      <rect x="12" y="0"  width="1"  height="24" fill="#3A2010" />
      <rect x="35" y="0"  width="1"  height="24" fill="#3A2010" />
      <rect x="12" y="23" width="24" height="1"  fill="#3A2010" />

      {/* ── Left arm — RAISED (waving) ── */}
      {/* Shirt sleeve going up-left */}
      <rect x="0"  y="3"  width="12" height="18" fill="#3A5CB0" />
      {/* Skin on raised hand */}
      <rect x="0"  y="3"  width="12" height="6"  fill="#C68642" />
      {/* Arm border */}
      <rect x="0"  y="3"  width="1"  height="18" fill="#1A2A6A" />
      <rect x="11" y="3"  width="1"  height="18" fill="#1A2A6A" />

      {/* ── Body ── */}
      <rect x="12" y="24" width="24" height="24" fill="#3A5CB0" />
      {/* Shirt detail */}
      <rect x="22" y="24" width="4"  height="24" fill="#2A4A9A" />
      {/* Waistband */}
      <rect x="12" y="45" width="24" height="3"  fill="#2A3A80" />
      {/* Body outline */}
      <rect x="12" y="24" width="1"  height="24" fill="#1A2A6A" />
      <rect x="35" y="24" width="1"  height="24" fill="#1A2A6A" />
      <rect x="12" y="47" width="24" height="1"  fill="#1A2A6A" />

      {/* ── Right arm — at side ── */}
      <rect x="36" y="24" width="12" height="18" fill="#3A5CB0" />
      <rect x="36" y="39" width="12" height="6"  fill="#C68642" />
      <rect x="47" y="24" width="1"  height="21" fill="#1A2A6A" />

      {/* ── Left leg ── */}
      <rect x="12" y="48" width="11" height="27" fill="#2A2A8A" />
      <rect x="12" y="69" width="11" height="6"  fill="#5D3A1A" />
      <rect x="12" y="48" width="1"  height="27" fill="#1A1A5A" />
      <rect x="22" y="48" width="1"  height="27" fill="#1A1A5A" />

      {/* ── Right leg ── */}
      <rect x="25" y="48" width="11" height="27" fill="#2A2A8A" />
      <rect x="25" y="69" width="11" height="6"  fill="#5D3A1A" />
      <rect x="35" y="48" width="1"  height="27" fill="#1A1A5A" />
    </svg>
  );
}

export function SteveMining({ size = 96, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 48 96"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Head */}
      <rect x="12" y="0"  width="24" height="6"  fill="#5D3A1A" />
      <rect x="12" y="6"  width="24" height="3"  fill="#7B5030" />
      <rect x="12" y="9"  width="24" height="15" fill="#C68642" />
      <rect x="15" y="12" width="6"  height="6"  fill="white" />
      <rect x="27" y="12" width="6"  height="6"  fill="white" />
      <rect x="18" y="15" width="3"  height="3"  fill="#1A1A1A" />
      <rect x="30" y="15" width="3"  height="3"  fill="#1A1A1A" />
      <rect x="22" y="18" width="4"  height="3"  fill="#A0622A" />
      <rect x="18" y="21" width="12" height="3"  fill="#5D2A00" />
      {/* Body — red shirt variant */}
      <rect x="12" y="24" width="24" height="24" fill="#A03030" />
      <rect x="22" y="24" width="4"  height="24" fill="#802020" />
      <rect x="12" y="45" width="24" height="3"  fill="#601A1A" />
      {/* Left arm — holding pickaxe, angled forward */}
      <rect x="0"  y="18" width="12" height="21" fill="#A03030" />
      <rect x="0"  y="36" width="12" height="6"  fill="#C68642" />
      {/* Pickaxe held */}
      <rect x="-3" y="39" width="6"  height="3"  fill="#A0722A" /> {/* handle */}
      <rect x="-6" y="30" width="12" height="6"  fill="#8A8A8A" /> {/* head */}
      <rect x="-6" y="30" width="3"  height="3"  fill="#AAAAAA" /> {/* highlight */}
      {/* Right arm */}
      <rect x="36" y="24" width="12" height="18" fill="#A03030" />
      <rect x="36" y="39" width="12" height="6"  fill="#C68642" />
      {/* Legs */}
      <rect x="12" y="48" width="11" height="27" fill="#2A2A8A" />
      <rect x="12" y="69" width="11" height="6"  fill="#5D3A1A" />
      <rect x="25" y="48" width="11" height="27" fill="#2A2A8A" />
      <rect x="25" y="69" width="11" height="6"  fill="#5D3A1A" />
    </svg>
  );
}

export function SteveReading({ size = 96, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 48 96"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Head */}
      <rect x="12" y="0"  width="24" height="6"  fill="#5D3A1A" />
      <rect x="12" y="6"  width="24" height="3"  fill="#7B5030" />
      <rect x="12" y="9"  width="24" height="15" fill="#C68642" />
      <rect x="15" y="12" width="6"  height="6"  fill="white" />
      <rect x="27" y="12" width="6"  height="6"  fill="white" />
      <rect x="18" y="15" width="3"  height="3"  fill="#1A1A1A" />
      <rect x="30" y="15" width="3"  height="3"  fill="#1A1A1A" />
      <rect x="22" y="18" width="4"  height="3"  fill="#A0622A" />
      <rect x="18" y="21" width="12" height="3"  fill="#5D2A00" />
      {/* Body — green shirt */}
      <rect x="12" y="24" width="24" height="24" fill="#3D6B21" />
      <rect x="22" y="24" width="4"  height="24" fill="#2A5015" />
      <rect x="12" y="45" width="24" height="3"  fill="#1A3A10" />
      {/* Both arms forward holding book */}
      <rect x="0"  y="27" width="12" height="18" fill="#3D6B21" />
      <rect x="0"  y="42" width="12" height="6"  fill="#C68642" />
      <rect x="36" y="27" width="12" height="18" fill="#3D6B21" />
      <rect x="36" y="42" width="12" height="6"  fill="#C68642" />
      {/* Book held in front */}
      <rect x="3"  y="39" width="42" height="24" fill="#8B4513" />
      <rect x="6"  y="42" width="36" height="18" fill="#D4A860" />
      <rect x="24" y="39" width="3"  height="24" fill="#5D2A00" />
      <rect x="9"  y="45" width="12" height="2"  fill="#8B4513" />
      <rect x="9"  y="50" width="18" height="2"  fill="#8B4513" />
      <rect x="9"  y="55" width="9"  height="2"  fill="#8B4513" />
      {/* Legs */}
      <rect x="12" y="48" width="11" height="27" fill="#2A2A8A" />
      <rect x="12" y="69" width="11" height="6"  fill="#5D3A1A" />
      <rect x="25" y="48" width="11" height="27" fill="#2A2A8A" />
      <rect x="25" y="69" width="11" height="6"  fill="#5D3A1A" />
    </svg>
  );
}

export function Creeper({ size = 64, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 32 64"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Head — 16x16 */}
      <rect x="8"  y="0"  width="16" height="16" fill="#5D8A3C" />
      {/* Eye left */}
      <rect x="9"  y="4"  width="5"  height="5"  fill="#1A1A1A" />
      {/* Eye right */}
      <rect x="18" y="4"  width="5"  height="5"  fill="#1A1A1A" />
      {/* Nose */}
      <rect x="13" y="9"  width="6"  height="3"  fill="#3D6B21" />
      <rect x="13" y="9"  width="6"  height="3"  fill="#1A1A1A" />
      {/* Mouth — classic creeper T-shape */}
      <rect x="11" y="12" width="10" height="3"  fill="#1A1A1A" />
      <rect x="11" y="12" width="3"  height="6"  fill="#1A1A1A" />
      <rect x="18" y="12" width="3"  height="6"  fill="#1A1A1A" />
      {/* Head shading */}
      <rect x="8"  y="0"  width="1"  height="16" fill="#3D6B21" />
      <rect x="8"  y="0"  width="16" height="1"  fill="#7DBD50" />
      <rect x="23" y="0"  width="1"  height="16" fill="#2A5015" />
      <rect x="8"  y="15" width="16" height="1"  fill="#2A5015" />

      {/* Body — 8x12 */}
      <rect x="10" y="16" width="12" height="18" fill="#5D8A3C" />
      <rect x="10" y="16" width="1"  height="18" fill="#3D6B21" />
      <rect x="21" y="16" width="1"  height="18" fill="#2A5015" />
      <rect x="10" y="33" width="12" height="1"  fill="#2A5015" />

      {/* Legs — 4 short legs */}
      <rect x="10" y="34" width="5"  height="12" fill="#5D8A3C" />
      <rect x="17" y="34" width="5"  height="12" fill="#5D8A3C" />
      {/* Front legs (slightly darker) */}
      <rect x="10" y="34" width="1"  height="12" fill="#3D6B21" />
      <rect x="21" y="34" width="1"  height="12" fill="#2A5015" />
    </svg>
  );
}

export function Enderman({ size = 48, opacity = 0.18, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 4}
      viewBox="0 0 24 96"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Head — 8x8 */}
      <rect x="8"  y="0"  width="8"  height="8"  fill="#1A1A1A" />
      {/* Purple eyes */}
      <rect x="9"  y="2"  width="2"  height="2"  fill="#9B59B6" />
      <rect x="13" y="2"  width="2"  height="2"  fill="#9B59B6" />
      {/* Eye glow */}
      <rect x="9"  y="2"  width="2"  height="2"  fill="#C39BD3" opacity="0.5" />
      <rect x="13" y="2"  width="2"  height="2"  fill="#C39BD3" opacity="0.5" />

      {/* Body — very thin 2px wide */}
      <rect x="11" y="8"  width="2"  height="24" fill="#1A1A1A" />

      {/* Long thin arms */}
      <rect x="0"  y="8"  width="2"  height="30" fill="#1A1A1A" />
      <rect x="22" y="8"  width="2"  height="30" fill="#1A1A1A" />

      {/* Long thin legs */}
      <rect x="10" y="32" width="2"  height="32" fill="#1A1A1A" />
      <rect x="12" y="32" width="2"  height="32" fill="#0A0A0A" />
    </svg>
  );
}

export function Zombie({ size = 80, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 2}
      viewBox="0 0 48 96"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Head */}
      <rect x="12" y="0"  width="24" height="6"  fill="#5D3A1A" />
      <rect x="12" y="6"  width="24" height="18" fill="#7DBD8F" />
      {/* Zombie eyes — glazed */}
      <rect x="15" y="9"  width="6"  height="6"  fill="white" />
      <rect x="27" y="9"  width="6"  height="6"  fill="white" />
      <rect x="18" y="12" width="3"  height="3"  fill="#8B8BCC" />
      <rect x="30" y="12" width="3"  height="3"  fill="#8B8BCC" />
      {/* Zombie gashes */}
      <rect x="16" y="18" width="4"  height="3"  fill="#3D6B3D" />
      <rect x="27" y="18" width="5"  height="3"  fill="#3D6B3D" />
      {/* Zombie moan mouth */}
      <rect x="18" y="21" width="12" height="3"  fill="#3D6B3D" />
      {/* Body — ragged shirt */}
      <rect x="12" y="24" width="24" height="24" fill="#6B6BB0" />
      <rect x="22" y="24" width="4"  height="24" fill="#4A4A8A" />
      {/* Rags detail */}
      <rect x="12" y="42" width="5"  height="6"  fill="#4A4A8A" />
      <rect x="31" y="42" width="5"  height="6"  fill="#4A4A8A" />
      {/* Both arms outstretched (zombie pose) */}
      <rect x="0"  y="18" width="12" height="12" fill="#6B6BB0" />
      <rect x="0"  y="27" width="12" height="6"  fill="#7DBD8F" />
      <rect x="36" y="18" width="12" height="12" fill="#6B6BB0" />
      <rect x="36" y="27" width="12" height="6"  fill="#7DBD8F" />
      {/* Legs */}
      <rect x="12" y="48" width="11" height="27" fill="#2A2A5A" />
      <rect x="12" y="69" width="11" height="6"  fill="#4A3A2A" />
      <rect x="25" y="48" width="11" height="27" fill="#2A2A5A" />
      <rect x="25" y="69" width="11" height="6"  fill="#4A3A2A" />
    </svg>
  );
}

export function Pig({ size = 32, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      <rect x="4"  y="6"  width="24" height="18" fill="#F4A0A0" />
      <rect x="6"  y="9"  width="5"  height="5"  fill="#E08080" />
      <rect x="21" y="9"  width="5"  height="5"  fill="#E08080" />
      <rect x="7"  y="10" width="3"  height="3"  fill="#1A1A1A" />
      <rect x="22" y="10" width="3"  height="3"  fill="#1A1A1A" />
      <rect x="12" y="17" width="8"  height="5"  fill="#E08080" />
      <rect x="13" y="18" width="3"  height="3"  fill="#C06060" />
      <rect x="17" y="18" width="3"  height="3"  fill="#C06060" />
      {/* Legs */}
      <rect x="6"  y="24" width="5"  height="5"  fill="#E08080" />
      <rect x="21" y="24" width="5"  height="5"  fill="#E08080" />
      <rect x="10" y="24" width="5"  height="5"  fill="#F4A0A0" />
      <rect x="17" y="24" width="5"  height="5"  fill="#F4A0A0" />
    </svg>
  );
}

export function Sheep({ size = 32, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      <rect x="4"  y="4"  width="24" height="18" fill="#E8E8E8" />
      {/* Wool texture */}
      <rect x="4"  y="4"  width="6"  height="6"  fill="#D0D0D0" />
      <rect x="14" y="4"  width="6"  height="6"  fill="#D0D0D0" />
      <rect x="22" y="4"  width="6"  height="6"  fill="#D0D0D0" />
      <rect x="9"  y="8"  width="6"  height="6"  fill="#D0D0D0" />
      <rect x="19" y="8"  width="6"  height="6"  fill="#D0D0D0" />
      {/* Face (darker) */}
      <rect x="10" y="14" width="12" height="8"  fill="#5D3A1A" />
      <rect x="11" y="15" width="3"  height="3"  fill="#1A1A1A" />
      <rect x="18" y="15" width="3"  height="3"  fill="#1A1A1A" />
      {/* Legs */}
      <rect x="7"  y="22" width="4"  height="7"  fill="#5D3A1A" />
      <rect x="21" y="22" width="4"  height="7"  fill="#5D3A1A" />
      <rect x="12" y="22" width="4"  height="7"  fill="#5D3A1A" />
      <rect x="16" y="22" width="4"  height="7"  fill="#5D3A1A" />
    </svg>
  );
}

/* ─── ITEMS ───────────────────────────────────────────────────── */

export function Pickaxe({ size = 32, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Handle */}
      <rect x="18" y="14" width="3"  height="3"  fill="#A0722A" />
      <rect x="21" y="17" width="3"  height="3"  fill="#8B6020" />
      <rect x="24" y="20" width="3"  height="3"  fill="#8B6020" />
      <rect x="27" y="23" width="3"  height="3"  fill="#7A5010" />
      {/* Pickaxe head */}
      <rect x="3"  y="3"  width="18" height="6"  fill="#8A8A8A" />
      <rect x="3"  y="3"  width="3"  height="12" fill="#9A9A9A" />
      <rect x="18" y="3"  width="3"  height="12" fill="#9A9A9A" />
      <rect x="9"  y="6"  width="6"  height="9"  fill="#8A8A8A" />
      {/* Highlight */}
      <rect x="3"  y="3"  width="18" height="2"  fill="#AAAAAA" />
      <rect x="3"  y="3"  width="2"  height="12" fill="#AAAAAA" />
    </svg>
  );
}

export function Torch({ size = 24, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 16 24"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Flame */}
      <rect x="6"  y="0"  width="4"  height="2"  fill="#FFD700" />
      <rect x="5"  y="1"  width="6"  height="3"  fill="#FFA500" />
      <rect x="6"  y="3"  width="4"  height="2"  fill="#FF6600" />
      {/* Coal top */}
      <rect x="6"  y="5"  width="4"  height="3"  fill="#2A2A2A" />
      {/* Stick */}
      <rect x="7"  y="8"  width="2"  height="12" fill="#A0722A" />
      <rect x="7"  y="8"  width="1"  height="12" fill="#C09040" />
    </svg>
  );
}

export function BookItem({ size = 28, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Book body */}
      <rect x="4"  y="4"  width="20" height="22" fill="#8B4513" />
      <rect x="6"  y="4"  width="18" height="22" fill="#D4A860" />
      {/* Spine */}
      <rect x="4"  y="4"  width="3"  height="22" fill="#5D2A00" />
      {/* Pages */}
      <rect x="8"  y="8"  width="12" height="2"  fill="#8B4513" />
      <rect x="8"  y="12" width="14" height="2"  fill="#8B4513" />
      <rect x="8"  y="16" width="10" height="2"  fill="#8B4513" />
      <rect x="8"  y="20" width="12" height="2"  fill="#8B4513" />
      {/* Cover highlight */}
      <rect x="6"  y="4"  width="18" height="2"  fill="#E8C080" />
      <rect x="6"  y="4"  width="2"  height="22" fill="#E8C080" />
    </svg>
  );
}

export function CraftingTable({ size = 32, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Top face (wood) */}
      <rect x="2"  y="2"  width="28" height="14" fill="#A0722A" />
      {/* Grid lines on top */}
      <rect x="2"  y="2"  width="28" height="2"  fill="#C09040" />
      <rect x="2"  y="2"  width="2"  height="14" fill="#C09040" />
      <rect x="11" y="2"  width="2"  height="14" fill="#7A5010" />
      <rect x="19" y="2"  width="2"  height="14" fill="#7A5010" />
      <rect x="2"  y="8"  width="28" height="2"  fill="#7A5010" />
      {/* Crafting symbols */}
      <rect x="4"  y="4"  width="5"  height="2"  fill="#5D3A1A" />
      <rect x="4"  y="4"  width="2"  height="5"  fill="#5D3A1A" />
      <rect x="13" y="4"  width="5"  height="5"  fill="#5D3A1A" />
      <rect x="21" y="4"  width="5"  height="2"  fill="#5D3A1A" />
      <rect x="24" y="4"  width="2"  height="5"  fill="#5D3A1A" />
      {/* Front face */}
      <rect x="2"  y="16" width="28" height="14" fill="#C09040" />
      {/* Front detail */}
      <rect x="2"  y="16" width="2"  height="14" fill="#E8C080" />
      <rect x="2"  y="16" width="28" height="2"  fill="#E8C080" />
      <rect x="28" y="16" width="2"  height="14" fill="#7A5010" />
      <rect x="2"  y="28" width="28" height="2"  fill="#7A5010" />
    </svg>
  );
}

export function Chest({ size = 32, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Chest body */}
      <rect x="2"  y="10" width="28" height="20" fill="#8B6343" />
      <rect x="2"  y="10" width="28" height="2"  fill="#C09060" />
      <rect x="2"  y="10" width="2"  height="20" fill="#C09060" />
      <rect x="28" y="10" width="2"  height="20" fill="#5D3A1A" />
      <rect x="2"  y="28" width="28" height="2"  fill="#5D3A1A" />
      {/* Lid */}
      <rect x="2"  y="4"  width="28" height="8"  fill="#A0722A" />
      <rect x="2"  y="4"  width="28" height="2"  fill="#C09040" />
      <rect x="2"  y="4"  width="2"  height="8"  fill="#C09040" />
      <rect x="28" y="4"  width="2"  height="8"  fill="#7A5010" />
      <rect x="2"  y="11" width="28" height="1"  fill="#5D3A1A" />
      {/* Latch */}
      <rect x="14" y="11" width="4"  height="6"  fill="#D4A060" />
      <rect x="15" y="12" width="2"  height="4"  fill="#A07820" />
    </svg>
  );
}

export function Compass({ size = 28, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Compass background */}
      <rect x="4"  y="4"  width="20" height="20" fill="#C09040" />
      <rect x="4"  y="4"  width="20" height="2"  fill="#E8C060" />
      <rect x="4"  y="4"  width="2"  height="20" fill="#E8C060" />
      <rect x="22" y="4"  width="2"  height="20" fill="#8A6020" />
      <rect x="4"  y="22" width="20" height="2"  fill="#8A6020" />
      {/* Cardinal directions */}
      <rect x="12" y="6"  width="4"  height="3"  fill="#F5F5F5" />
      <rect x="12" y="19" width="4"  height="3"  fill="#F5F5F5" />
      <rect x="6"  y="12" width="3"  height="4"  fill="#F5F5F5" />
      <rect x="19" y="12" width="3"  height="4"  fill="#F5F5F5" />
      {/* Red needle */}
      <rect x="13" y="9"  width="2"  height="5"  fill="#C0392B" />
      {/* White needle */}
      <rect x="13" y="14" width="2"  height="5"  fill="#F5F5F5" />
      {/* Center */}
      <rect x="12" y="12" width="4"  height="4"  fill="#1A1A1A" />
    </svg>
  );
}

export function Sword({ size = 28, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 28 34"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Blade — diamond colored */}
      <rect x="12" y="0"  width="4"  height="20" fill="#74B9E8" />
      <rect x="12" y="0"  width="2"  height="20" fill="#9DCFED" />
      <rect x="14" y="0"  width="2"  height="20" fill="#5A9AC0" />
      {/* Tip */}
      <rect x="13" y="20" width="2"  height="2"  fill="#74B9E8" />
      {/* Guard */}
      <rect x="6"  y="20" width="16" height="4"  fill="#A0722A" />
      <rect x="6"  y="20" width="16" height="2"  fill="#C09040" />
      {/* Handle */}
      <rect x="12" y="24" width="4"  height="8"  fill="#8B4513" />
      <rect x="12" y="24" width="2"  height="8"  fill="#A05520" />
      {/* Pommel */}
      <rect x="11" y="30" width="6"  height="4"  fill="#A0722A" />
    </svg>
  );
}

export function GrassBlock({ size = 24, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Top (grass) */}
      <rect x="0" y="0" width="24" height="8"  fill="#5D8A3C" />
      {/* Grass texture */}
      <rect x="3" y="0" width="2"  height="3"  fill="#7DBD50" />
      <rect x="9" y="0" width="2"  height="4"  fill="#7DBD50" />
      <rect x="16" y="0" width="2" height="3"  fill="#7DBD50" />
      <rect x="20" y="0" width="2" height="4"  fill="#7DBD50" />
      {/* Dirt face */}
      <rect x="0" y="8" width="24" height="16" fill="#8B6343" />
      {/* Dirt texture */}
      <rect x="3" y="10" width="3" height="3"  fill="#7A5535" />
      <rect x="12" y="12" width="4" height="3" fill="#7A5535" />
      <rect x="18" y="16" width="3" height="3" fill="#7A5535" />
      <rect x="6" y="18" width="3" height="3"  fill="#7A5535" />
      {/* Block outline */}
      <rect x="0" y="0" width="24" height="1"  fill="#3D6B21" />
      <rect x="0" y="0" width="1"  height="24" fill="#3D6B21" />
      <rect x="23" y="0" width="1" height="24" fill="#3A2A1A" />
      <rect x="0" y="23" width="24" height="1" fill="#3A2A1A" />
    </svg>
  );
}

export function EnderDragonSilhouette({ width = 300, height = 120, opacity = 0.08, className = "" }: { width?: number; height?: number; opacity?: number; className?: string }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 120"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Dragon body */}
      <rect x="90"  y="40"  width="120" height="40" fill="#4A0A6A" />
      {/* Neck */}
      <rect x="170" y="20"  width="20"  height="30" fill="#4A0A6A" />
      {/* Head */}
      <rect x="175" y="5"   width="30"  height="25" fill="#4A0A6A" />
      {/* Jaw */}
      <rect x="185" y="24"  width="24"  height="8"  fill="#3A0858" />
      {/* Eyes */}
      <rect x="178" y="10"  width="4"   height="4"  fill="#9B59B6" />
      <rect x="196" y="10"  width="4"   height="4"  fill="#9B59B6" />
      {/* Horns */}
      <rect x="177" y="2"   width="4"   height="6"  fill="#4A0A6A" />
      <rect x="202" y="1"   width="4"   height="8"  fill="#4A0A6A" />
      {/* Tail */}
      <rect x="80"  y="50"  width="15"  height="12" fill="#4A0A6A" />
      <rect x="68"  y="55"  width="14"  height="9"  fill="#4A0A6A" />
      <rect x="57"  y="60"  width="12"  height="6"  fill="#4A0A6A" />
      <rect x="47"  y="64"  width="10"  height="4"  fill="#4A0A6A" />
      <rect x="38"  y="67"  width="8"   height="3"  fill="#4A0A6A" />
      {/* Left wing */}
      <rect x="40"  y="20"  width="60"  height="10" fill="#4A0A6A" />
      <rect x="30"  y="15"  width="40"  height="8"  fill="#3A0858" />
      <rect x="20"  y="12"  width="25"  height="6"  fill="#3A0858" />
      <rect x="10"  y="10"  width="15"  height="4"  fill="#3A0858" />
      <rect x="30"  y="23"  width="10"  height="20" fill="#3A0858" />
      <rect x="15"  y="16"  width="10"  height="25" fill="#3A0858" />
      <rect x="3"   y="14"  width="8"   height="22" fill="#2A0640" />
      {/* Wing membrane */}
      <rect x="40"  y="30"  width="15"  height="30" fill="#3A0858" />
      <rect x="20"  y="25"  width="10"  height="35" fill="#2A0640" />
      {/* Right wing */}
      <rect x="210" y="20"  width="60"  height="10" fill="#4A0A6A" />
      <rect x="240" y="15"  width="30"  height="8"  fill="#3A0858" />
      <rect x="260" y="12"  width="20"  height="6"  fill="#3A0858" />
      <rect x="276" y="10"  width="12"  height="4"  fill="#3A0858" />
      <rect x="270" y="23"  width="10"  height="20" fill="#3A0858" />
      <rect x="275" y="16"  width="10"  height="25" fill="#3A0858" />
      <rect x="285" y="14"  width="8"   height="22" fill="#2A0640" />
      {/* Right wing membrane */}
      <rect x="255" y="30"  width="15"  height="30" fill="#3A0858" />
      <rect x="270" y="25"  width="10"  height="35" fill="#2A0640" />
      {/* Legs */}
      <rect x="105" y="78"  width="12"  height="20" fill="#4A0A6A" />
      <rect x="180" y="78"  width="12"  height="20" fill="#4A0A6A" />
      <rect x="103" y="95"  width="16"  height="6"  fill="#3A0858" />
      <rect x="178" y="95"  width="16"  height="6"  fill="#3A0858" />
    </svg>
  );
}

export function SkeletonHorse({ size = 48, opacity = 1, className = "" }: { size?: number; opacity?: number; className?: string }) {
  const w = size;
  const h = size * 0.75;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 64 48"
      style={{ opacity, imageRendering: "pixelated" }}
      className={className}
      aria-hidden
    >
      {/* Body */}
      <rect x="14" y="14" width="36" height="20" fill="#D8D8D0" />
      {/* Rib bones on body */}
      <rect x="18" y="17" width="2" height="14" fill="#B8B8B0" />
      <rect x="24" y="17" width="2" height="14" fill="#B8B8B0" />
      <rect x="30" y="17" width="2" height="14" fill="#B8B8B0" />
      <rect x="36" y="17" width="2" height="14" fill="#B8B8B0" />
      <rect x="42" y="17" width="2" height="14" fill="#B8B8B0" />
      {/* Spine top */}
      <rect x="14" y="14" width="36" height="2" fill="#C0C0B8" />
      {/* Neck */}
      <rect x="48" y="6" width="8" height="14" fill="#D8D8D0" />
      {/* Head */}
      <rect x="52" y="2" width="12" height="10" fill="#D8D8D0" />
      {/* Snout */}
      <rect x="60" y="7" width="4" height="5" fill="#C8C8C0" />
      <rect x="61" y="8" width="2" height="2" fill="#888880" />
      {/* Eye sockets */}
      <rect x="54" y="3" width="3" height="3" fill="#1A1A1A" />
      <rect x="59" y="3" width="3" height="3" fill="#1A1A1A" />
      {/* Mane */}
      <rect x="48" y="4" width="4" height="8" fill="#EBEBEB" />
      <rect x="50" y="2" width="4" height="8" fill="#D0D0C8" />
      {/* Tail */}
      <rect x="12" y="14" width="3" height="12" fill="#D8D8D0" />
      <rect x="10" y="18" width="3" height="10" fill="#EBEBEB" />
      {/* Front legs */}
      <rect x="40" y="34" width="5" height="12" fill="#C8C8C0" />
      <rect x="48" y="34" width="5" height="12" fill="#C8C8C0" />
      {/* Back legs */}
      <rect x="16" y="34" width="5" height="12" fill="#C8C8C0" />
      <rect x="24" y="34" width="5" height="12" fill="#C8C8C0" />
      {/* Hooves */}
      <rect x="40" y="44" width="5" height="4" fill="#555550" />
      <rect x="48" y="44" width="5" height="4" fill="#555550" />
      <rect x="16" y="44" width="5" height="4" fill="#555550" />
      <rect x="24" y="44" width="5" height="4" fill="#555550" />
      {/* Bone joints on legs */}
      <rect x="40" y="34" width="5" height="2" fill="#E8E8E0" />
      <rect x="48" y="34" width="5" height="2" fill="#E8E8E0" />
      <rect x="16" y="34" width="5" height="2" fill="#E8E8E0" />
      <rect x="24" y="34" width="5" height="2" fill="#E8E8E0" />
    </svg>
  );
}

/* ─── WRAPPER COMPONENTS ──────────────────────────────────────── */

type CharacterType = "steve-waving" | "steve-mining" | "steve-reading" | "creeper" | "enderman" | "zombie" | "pig" | "sheep" | "skeleton-horse";
type ItemType = "pickaxe" | "torch" | "book" | "crafting-table" | "chest" | "compass" | "sword" | "grass-block";

interface McCharacterProps {
  character: CharacterType;
  size?: number;
  opacity?: number;
  className?: string;
}

interface McItemProps {
  item: ItemType;
  size?: number;
  opacity?: number;
  className?: string;
}

export function McCharacter({ character, size = 80, opacity = 1, className = "" }: McCharacterProps) {
  const props = { size, opacity, className };
  switch (character) {
    case "steve-waving":   return <SteveWaving {...props} />;
    case "steve-mining":   return <SteveMining {...props} />;
    case "steve-reading":  return <SteveReading {...props} />;
    case "creeper":        return <Creeper {...props} />;
    case "enderman":       return <Enderman {...props} />;
    case "zombie":         return <Zombie {...props} />;
    case "pig":            return <Pig {...props} />;
    case "sheep":          return <Sheep {...props} />;
    case "skeleton-horse": return <SkeletonHorse {...props} />;
  }
}

export function McItem({ item, size = 28, opacity = 1, className = "" }: McItemProps) {
  const props = { size, opacity, className };
  switch (item) {
    case "pickaxe":        return <Pickaxe {...props} />;
    case "torch":          return <Torch {...props} />;
    case "book":           return <BookItem {...props} />;
    case "crafting-table": return <CraftingTable {...props} />;
    case "chest":          return <Chest {...props} />;
    case "compass":        return <Compass {...props} />;
    case "sword":          return <Sword {...props} />;
    case "grass-block":    return <GrassBlock {...props} />;
  }
}
