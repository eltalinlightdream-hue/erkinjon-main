import { useEffect, useState, useCallback, useRef } from "react";
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
// NEW SVG CHARACTER COMPONENTS
// ═══════════════════════════════════════════════════════════════════

function SvgSkeleton({ size = 50 }: { size: number }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 48 96" style={{ imageRendering: "pixelated" }} aria-hidden>
      {/* Skull */}
      <rect x="9" y="0" width="30" height="21" fill="#F0F0F0" />
      <rect x="12" y="0" width="24" height="3" fill="#E0E0E0" />
      {/* Eye sockets */}
      <rect x="12" y="5" width="8" height="7" fill="#1A1A1A" />
      <rect x="28" y="5" width="8" height="7" fill="#1A1A1A" />
      {/* Nose */}
      <rect x="21" y="11" width="6" height="4" fill="#1A1A1A" />
      {/* Teeth */}
      <rect x="13" y="16" width="3" height="5" fill="#F0F0F0" />
      <rect x="17" y="16" width="3" height="5" fill="#F0F0F0" />
      <rect x="25" y="16" width="3" height="5" fill="#F0F0F0" />
      <rect x="29" y="16" width="3" height="5" fill="#F0F0F0" />
      <rect x="9" y="16" width="30" height="3" fill="#D8D8D8" />
      {/* Spine / body */}
      <rect x="20" y="24" width="8" height="21" fill="#D8D8D8" />
      {/* Ribs */}
      <rect x="10" y="27" width="10" height="3" fill="#D0D0D0" />
      <rect x="28" y="27" width="10" height="3" fill="#D0D0D0" />
      <rect x="10" y="33" width="10" height="3" fill="#D0D0D0" />
      <rect x="28" y="33" width="10" height="3" fill="#D0D0D0" />
      <rect x="10" y="39" width="10" height="3" fill="#C8C8C8" />
      <rect x="28" y="39" width="10" height="3" fill="#C8C8C8" />
      {/* Left arm + bow */}
      <rect x="4" y="24" width="6" height="21" fill="#D0D0D0" />
      <rect x="0" y="16" width="3" height="36" fill="#A0722A" />
      <rect x="3" y="18" width="1" height="32" fill="#E0C080" />
      {/* Right arm */}
      <rect x="38" y="24" width="6" height="21" fill="#D0D0D0" />
      <rect x="44" y="27" width="4" height="15" fill="#D0D0D0" />
      {/* Pelvis */}
      <rect x="14" y="45" width="20" height="6" fill="#C8C8C8" />
      {/* Legs */}
      <rect x="14" y="51" width="8" height="27" fill="#D0D0D0" />
      <rect x="14" y="72" width="8" height="6" fill="#C0C0C0" />
      <rect x="26" y="51" width="8" height="27" fill="#D0D0D0" />
      <rect x="26" y="72" width="8" height="6" fill="#C0C0C0" />
    </svg>
  );
}

function SvgGhast({ size = 60 }: { size: number }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 48 58" style={{ imageRendering: "pixelated" }} aria-hidden>
      {/* Body */}
      <rect x="4" y="0" width="40" height="32" fill="#F8F8F8" />
      <rect x="4" y="0" width="40" height="2" fill="#FFFFFF" />
      <rect x="4" y="0" width="2" height="32" fill="#FFFFFF" />
      <rect x="42" y="0" width="2" height="32" fill="#D8D8D8" />
      <rect x="4" y="30" width="40" height="2" fill="#D8D8D8" />
      {/* Eyes (3×3 grid) */}
      <rect x="12" y="7" width="5" height="5" fill="#1A1A1A" />
      <rect x="22" y="7" width="5" height="5" fill="#1A1A1A" />
      <rect x="32" y="7" width="5" height="5" fill="#1A1A1A" />
      <rect x="12" y="14" width="5" height="5" fill="#1A1A1A" />
      <rect x="22" y="14" width="5" height="5" fill="#1A1A1A" />
      <rect x="32" y="14" width="5" height="5" fill="#1A1A1A" />
      {/* Frown */}
      <rect x="12" y="23" width="5" height="3" fill="#1A1A1A" />
      <rect x="32" y="23" width="5" height="3" fill="#1A1A1A" />
      <rect x="17" y="26" width="15" height="3" fill="#1A1A1A" />
      {/* Tentacles */}
      <rect x="6"  y="32" width="4" height="15" fill="#E8E8E8" />
      <rect x="12" y="32" width="4" height="22" fill="#E8E8E8" />
      <rect x="18" y="32" width="4" height="13" fill="#E8E8E8" />
      <rect x="24" y="32" width="4" height="20" fill="#E8E8E8" />
      <rect x="30" y="32" width="4" height="14" fill="#E8E8E8" />
      <rect x="36" y="32" width="4" height="18" fill="#E8E8E8" />
      <rect x="42" y="32" width="4" height="10" fill="#E8E8E8" />
    </svg>
  );
}

function SvgSlime({ size = 42 }: { size: number }) {
  return (
    <svg width={size} height={size * 0.85} viewBox="0 0 42 36" style={{ imageRendering: "pixelated" }} aria-hidden>
      {/* Body */}
      <rect x="2" y="4" width="38" height="28" fill="#5BBF5B" />
      <rect x="2" y="4" width="14" height="10" fill="#7AD67A" />
      <rect x="2" y="4" width="38" height="2" fill="#7AD67A" />
      <rect x="2" y="4" width="2" height="28" fill="#7AD67A" />
      <rect x="38" y="4" width="2" height="28" fill="#3D9B3D" />
      <rect x="2" y="30" width="38" height="2" fill="#3D9B3D" />
      {/* Eyes */}
      <rect x="9"  y="12" width="7" height="7" fill="#1A1A1A" />
      <rect x="26" y="12" width="7" height="7" fill="#1A1A1A" />
      <rect x="12" y="13" width="2" height="2" fill="#FFFFFF" />
      <rect x="29" y="13" width="2" height="2" fill="#FFFFFF" />
      {/* Smile */}
      <rect x="10" y="24" width="4" height="2" fill="#1A1A1A" />
      <rect x="28" y="24" width="4" height="2" fill="#1A1A1A" />
      <rect x="14" y="26" width="14" height="2" fill="#1A1A1A" />
      {/* Feet */}
      <rect x="6"  y="32" width="10" height="4" fill="#4AAE4A" />
      <rect x="26" y="32" width="10" height="4" fill="#4AAE4A" />
    </svg>
  );
}

function SvgVillager({ size = 48 }: { size: number }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 48 96" style={{ imageRendering: "pixelated" }} aria-hidden>
      {/* Head */}
      <rect x="10" y="0"  width="28" height="24" fill="#C8A878" />
      <rect x="10" y="0"  width="28" height="2"  fill="#D8B888" />
      <rect x="10" y="0"  width="2"  height="24" fill="#D8B888" />
      {/* Eyes */}
      <rect x="14" y="7"  width="5"  height="5"  fill="#1A1A1A" />
      <rect x="29" y="7"  width="5"  height="5"  fill="#1A1A1A" />
      {/* Big nose */}
      <rect x="18" y="12" width="12" height="8"  fill="#B09068" />
      <rect x="20" y="14" width="8"  height="6"  fill="#C8A070" />
      {/* Mouth */}
      <rect x="18" y="21" width="12" height="2"  fill="#8B6040" />
      {/* Robe */}
      <rect x="6"  y="24" width="36" height="33" fill="#7B5030" />
      <rect x="14" y="24" width="20" height="33" fill="#8B6040" />
      <rect x="17" y="24" width="14" height="7"  fill="#A07050" />
      {/* Arms */}
      <rect x="0"  y="27" width="6"  height="18" fill="#7B5030" />
      <rect x="0"  y="42" width="6"  height="6"  fill="#C8A878" />
      <rect x="42" y="27" width="6"  height="18" fill="#7B5030" />
      <rect x="42" y="42" width="6"  height="6"  fill="#C8A878" />
      {/* Legs */}
      <rect x="10" y="57" width="12" height="21" fill="#5D3A1A" />
      <rect x="10" y="72" width="12" height="6"  fill="#4A2A0A" />
      <rect x="26" y="57" width="12" height="21" fill="#5D3A1A" />
      <rect x="26" y="72" width="12" height="6"  fill="#4A2A0A" />
    </svg>
  );
}

function SvgIronGolem({ size = 65 }: { size: number }) {
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 64 96" style={{ imageRendering: "pixelated" }} aria-hidden>
      {/* Head */}
      <rect x="20" y="0"  width="24" height="24" fill="#9A9A9A" />
      <rect x="20" y="0"  width="24" height="2"  fill="#AAAAAA" />
      <rect x="20" y="0"  width="2"  height="24" fill="#AAAAAA" />
      <rect x="42" y="0"  width="2"  height="24" fill="#787878" />
      {/* Eyes */}
      <rect x="23" y="6"  width="6"  height="5"  fill="#C0392B" />
      <rect x="35" y="6"  width="6"  height="5"  fill="#C0392B" />
      {/* Nose */}
      <rect x="28" y="12" width="8"  height="4"  fill="#888888" />
      {/* Vines */}
      <rect x="22" y="14" width="3"  height="7"  fill="#5D8A3C" />
      <rect x="39" y="14" width="3"  height="7"  fill="#5D8A3C" />
      {/* Body */}
      <rect x="12" y="24" width="40" height="30" fill="#929292" />
      <rect x="12" y="24" width="40" height="2"  fill="#AAAAAA" />
      <rect x="12" y="24" width="2"  height="30" fill="#AAAAAA" />
      <rect x="50" y="24" width="2"  height="30" fill="#787878" />
      <rect x="12" y="52" width="40" height="2"  fill="#787878" />
      {/* Chest vines */}
      <rect x="18" y="28" width="4"  height="10" fill="#5D8A3C" />
      <rect x="18" y="38" width="8"  height="4"  fill="#5D8A3C" />
      {/* Long arms */}
      <rect x="0"  y="24" width="12" height="36" fill="#888888" />
      <rect x="0"  y="24" width="2"  height="36" fill="#AAAAAA" />
      <rect x="0"  y="58" width="12" height="8"  fill="#787878" />
      <rect x="52" y="24" width="12" height="36" fill="#888888" />
      <rect x="62" y="24" width="2"  height="36" fill="#787878" />
      <rect x="52" y="58" width="12" height="8"  fill="#787878" />
      {/* Legs */}
      <rect x="15" y="54" width="14" height="30" fill="#8A8A8A" />
      <rect x="15" y="78" width="14" height="6"  fill="#787878" />
      <rect x="35" y="54" width="14" height="30" fill="#8A8A8A" />
      <rect x="35" y="78" width="14" height="6"  fill="#787878" />
    </svg>
  );
}

function SvgWitch({ size = 50 }: { size: number }) {
  return (
    <svg width={size} height={size * 2} viewBox="0 0 48 96" style={{ imageRendering: "pixelated" }} aria-hidden>
      {/* Hat tip */}
      <rect x="16" y="0"  width="16" height="12" fill="#1A1A1A" />
      <rect x="19" y="0"  width="10" height="3"  fill="#2A2A2A" />
      {/* Hat brim */}
      <rect x="6"  y="12" width="36" height="6"  fill="#1A1A1A" />
      {/* Hat band */}
      <rect x="16" y="10" width="16" height="3"  fill="#9B59B6" />
      {/* Head */}
      <rect x="12" y="18" width="24" height="21" fill="#C0C870" />
      <rect x="12" y="18" width="24" height="2"  fill="#D0D880" />
      {/* Eyes */}
      <rect x="15" y="21" width="5"  height="5"  fill="#1A1A1A" />
      <rect x="28" y="21" width="5"  height="5"  fill="#1A1A1A" />
      {/* Nose */}
      <rect x="20" y="27" width="9"  height="6"  fill="#A0A850" />
      <rect x="26" y="25" width="4"  height="3"  fill="#888840" />
      {/* Scowl */}
      <rect x="16" y="34" width="16" height="2"  fill="#4A4A1A" />
      <rect x="16" y="34" width="4"  height="4"  fill="#4A4A1A" />
      <rect x="28" y="34" width="4"  height="4"  fill="#4A4A1A" />
      {/* Robe */}
      <rect x="8"  y="39" width="32" height="27" fill="#2A1A3A" />
      <rect x="14" y="39" width="20" height="27" fill="#3A2A4A" />
      {/* Left arm + potion */}
      <rect x="0"  y="42" width="8"  height="18" fill="#2A1A3A" />
      <rect x="0"  y="57" width="8"  height="6"  fill="#C0C870" />
      <rect x="-4" y="51" width="10" height="13" fill="#9B59B6" />
      <rect x="-1" y="48" width="5"  height="5"  fill="#7A2AA0" />
      <rect x="-4" y="51" width="10" height="4"  fill="#CF80F0" opacity="0.6" />
      {/* Right arm */}
      <rect x="40" y="42" width="8"  height="18" fill="#2A1A3A" />
      <rect x="40" y="57" width="8"  height="6"  fill="#C0C870" />
      {/* Legs */}
      <rect x="12" y="66" width="11" height="24" fill="#2A1A3A" />
      <rect x="12" y="84" width="11" height="6"  fill="#1A1A1A" />
      <rect x="25" y="66" width="11" height="24" fill="#2A1A3A" />
      <rect x="25" y="84" width="11" height="6"  fill="#1A1A1A" />
    </svg>
  );
}

function SvgBat({ size = 30 }: { size: number }) {
  return (
    <svg width={size * 2} height={size} viewBox="0 0 60 30" style={{ imageRendering: "pixelated" }} aria-hidden>
      {/* Left wing */}
      <rect x="0"  y="8"  width="22" height="14" fill="#2A1A3A" />
      <rect x="4"  y="5"  width="14" height="5"  fill="#2A1A3A" />
      <rect x="0"  y="10" width="5"  height="10" fill="#3A2A4A" />
      <rect x="22" y="14" width="4"  height="8"  fill="#2A1A3A" />
      {/* Body */}
      <rect x="24" y="5"  width="12" height="17" fill="#1A0A2A" />
      {/* Ears */}
      <rect x="24" y="1"  width="4"  height="6"  fill="#1A0A2A" />
      <rect x="32" y="1"  width="4"  height="6"  fill="#1A0A2A" />
      {/* Eyes */}
      <rect x="26" y="7"  width="3"  height="3"  fill="#C0392B" />
      <rect x="31" y="7"  width="3"  height="3"  fill="#C0392B" />
      {/* Right wing */}
      <rect x="34" y="14" width="4"  height="8"  fill="#2A1A3A" />
      <rect x="38" y="8"  width="22" height="14" fill="#2A1A3A" />
      <rect x="42" y="5"  width="14" height="5"  fill="#2A1A3A" />
      <rect x="55" y="10" width="5"  height="10" fill="#3A2A4A" />
    </svg>
  );
}

function SvgWither({ size = 70 }: { size: number }) {
  return (
    <svg width={size} height={size * 0.65} viewBox="0 0 80 52" style={{ imageRendering: "pixelated" }} aria-hidden>
      {/* Central skull */}
      <rect x="30" y="0"  width="20" height="16" fill="#2A2A2A" />
      <rect x="28" y="2"  width="24" height="14" fill="#333333" />
      <rect x="32" y="2"  width="5"  height="6"  fill="#4A0A6A" />
      <rect x="43" y="2"  width="5"  height="6"  fill="#4A0A6A" />
      <rect x="32" y="11" width="3"  height="5"  fill="#1A1A1A" />
      <rect x="38" y="11" width="3"  height="5"  fill="#1A1A1A" />
      <rect x="45" y="11" width="3"  height="5"  fill="#1A1A1A" />
      {/* Left skull */}
      <rect x="3"  y="6"  width="16" height="14" fill="#2A2A2A" />
      <rect x="4"  y="8"  width="4"  height="4"  fill="#4A0A6A" />
      <rect x="12" y="8"  width="4"  height="4"  fill="#4A0A6A" />
      <rect x="5"  y="16" width="3"  height="4"  fill="#1A1A1A" />
      <rect x="12" y="16" width="3"  height="4"  fill="#1A1A1A" />
      {/* Right skull */}
      <rect x="61" y="6"  width="16" height="14" fill="#2A2A2A" />
      <rect x="62" y="8"  width="4"  height="4"  fill="#4A0A6A" />
      <rect x="70" y="8"  width="4"  height="4"  fill="#4A0A6A" />
      <rect x="63" y="16" width="3"  height="4"  fill="#1A1A1A" />
      <rect x="70" y="16" width="3"  height="4"  fill="#1A1A1A" />
      {/* Shoulder bar */}
      <rect x="12" y="20" width="56" height="6"  fill="#222222" />
      {/* Central spine */}
      <rect x="36" y="16" width="8"  height="26" fill="#1A1A1A" />
      <rect x="30" y="30" width="9"  height="4"  fill="#222222" />
      <rect x="41" y="30" width="9"  height="4"  fill="#222222" />
      {/* Aura particles */}
      <rect x="26" y="0"  width="4"  height="4"  fill="#4A0A6A" opacity="0.5" />
      <rect x="50" y="2"  width="4"  height="4"  fill="#4A0A6A" opacity="0.5" />
      <rect x="0"  y="8"  width="4"  height="4"  fill="#4A0A6A" opacity="0.4" />
      <rect x="76" y="10" width="4"  height="4"  fill="#4A0A6A" opacity="0.4" />
      <rect x="34" y="42" width="6"  height="6"  fill="#9B59B6" opacity="0.3" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════
// CSS ANIMATIONS (injected once into document.head)
// ═══════════════════════════════════════════════════════════════════

const MC_CHAR_CSS = `
@keyframes mc-walk-ltr {
  from { transform: translateX(-200px); }
  to   { transform: translateX(calc(100vw + 200px)); }
}
@keyframes mc-walk-rtl {
  from { transform: translateX(calc(100vw + 200px)); }
  to   { transform: translateX(-200px); }
}
@keyframes mc-fly-ltr {
  0%   { transform: translateX(-400px) translateY(0px); }
  20%  { transform: translateX(20vw) translateY(-30px); }
  50%  { transform: translateX(50vw) translateY(15px); }
  80%  { transform: translateX(80vw) translateY(-20px); }
  100% { transform: translateX(calc(100vw + 400px)) translateY(0px); }
}
@keyframes mc-fly-rtl {
  0%   { transform: translateX(calc(100vw + 400px)) translateY(0px); }
  20%  { transform: translateX(80vw) translateY(-30px); }
  50%  { transform: translateX(50vw) translateY(15px); }
  80%  { transform: translateX(20vw) translateY(-20px); }
  100% { transform: translateX(-400px) translateY(0px); }
}
@keyframes mc-float-ltr {
  from { transform: translateX(-200px); }
  to   { transform: translateX(calc(100vw + 200px)); }
}
@keyframes mc-float-rtl {
  from { transform: translateX(calc(100vw + 200px)); }
  to   { transform: translateX(-200px); }
}
@keyframes mc-bounce-ltr {
  from { transform: translateX(-150px); }
  to   { transform: translateX(calc(100vw + 150px)); }
}
@keyframes mc-bounce-rtl {
  from { transform: translateX(calc(100vw + 150px)); }
  to   { transform: translateX(-150px); }
}
@keyframes mc-erratic-ltr {
  0%   { transform: translateX(-100px) translateY(0px); }
  10%  { transform: translateX(10vw)  translateY(-35px); }
  20%  { transform: translateX(20vw)  translateY(25px); }
  30%  { transform: translateX(30vw)  translateY(-45px); }
  40%  { transform: translateX(40vw)  translateY(20px); }
  50%  { transform: translateX(50vw)  translateY(-25px); }
  60%  { transform: translateX(60vw)  translateY(40px); }
  70%  { transform: translateX(70vw)  translateY(-15px); }
  80%  { transform: translateX(80vw)  translateY(30px); }
  90%  { transform: translateX(90vw)  translateY(-35px); }
  100% { transform: translateX(calc(100vw + 100px)) translateY(0px); }
}
@keyframes mc-erratic-rtl {
  0%   { transform: translateX(calc(100vw + 100px)) translateY(0px); }
  10%  { transform: translateX(90vw)  translateY(-35px); }
  20%  { transform: translateX(80vw)  translateY(25px); }
  30%  { transform: translateX(70vw)  translateY(-45px); }
  40%  { transform: translateX(60vw)  translateY(20px); }
  50%  { transform: translateX(50vw)  translateY(-25px); }
  60%  { transform: translateX(40vw)  translateY(40px); }
  70%  { transform: translateX(30vw)  translateY(-15px); }
  80%  { transform: translateX(20vw)  translateY(30px); }
  90%  { transform: translateX(10vw)  translateY(-35px); }
  100% { transform: translateX(-100px) translateY(0px); }
}
@keyframes mc-teleport {
  0%   { opacity: 0; transform: scaleY(0.05) scaleX(2.5); }
  12%  { opacity: 1; transform: scaleY(1) scaleX(1); }
  78%  { opacity: 1; transform: scaleY(1) scaleX(1); }
  88%  { opacity: 0.3; transform: scaleY(1.1) scaleX(0.9); }
  100% { opacity: 0; transform: scaleY(0.05) scaleX(2.5); }
}
@keyframes mc-wither-drift-ltr {
  from { transform: translateX(-250px) rotate(0deg); }
  to   { transform: translateX(calc(100vw + 250px)) rotate(6deg); }
}
@keyframes mc-wither-drift-rtl {
  from { transform: translateX(calc(100vw + 250px)) rotate(0deg); }
  to   { transform: translateX(-250px) rotate(-6deg); }
}

/* Inner / secondary animations */
@keyframes mc-bob {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-7px); }
}
@keyframes mc-ghost-bob {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-16px); }
}
@keyframes mc-slime-squash {
  0%, 40%, 100% { transform: scaleY(1) scaleX(1); }
  50%            { transform: scaleY(0.55) scaleX(1.45) translateY(5px); }
  60%            { transform: scaleY(1.15) scaleX(0.88); }
}
@keyframes mc-creeper-hiss {
  0%, 72%, 100% { filter: none; }
  78%, 88%       { filter: drop-shadow(0 0 10px #C0392B) brightness(1.4); }
}
@keyframes mc-wither-glow {
  0%, 100% { filter: drop-shadow(0 0 5px #9B59B6); }
  50%       { filter: drop-shadow(0 0 18px #9B59B6) brightness(1.25); }
}
@keyframes mc-witch-glow {
  0%, 78%, 100% { filter: none; }
  83%, 93%       { filter: drop-shadow(0 0 8px #9B59B6) brightness(1.15); }
}
@keyframes mc-dragon-flap {
  0%, 100% { transform: scaleY(1); }
  50%       { transform: scaleY(0.85); }
}
@keyframes mc-bat-flap {
  0%   { transform: scaleX(1) scaleY(1); }
  50%  { transform: scaleX(0.7) scaleY(0.6); }
  100% { transform: scaleX(1) scaleY(1); }
}
`;

// ═══════════════════════════════════════════════════════════════════
// CHARACTER CONFIGURATION
// ═══════════════════════════════════════════════════════════════════

type CharKey =
  | "steve-wave" | "steve-mine" | "steve-read"
  | "creeper" | "ender-dragon" | "enderman"
  | "zombie" | "skeleton" | "ghast" | "slime"
  | "villager" | "iron-golem" | "witch" | "bat" | "wither";

type MovementType = "walk" | "fly" | "float" | "bounce" | "erratic" | "teleport" | "wither-drift";

interface CharConfig {
  key: CharKey;
  spawnMin: number;
  spawnMax: number;
  durMin: number;
  durMax: number;
  sizeMin: number;
  sizeMax: number;
  opacity: number;
  movement: MovementType;
  yMin: number;
  yMax: number;
  pages: string[] | "all";
  showMobile: boolean;
}

const CONFIGS: CharConfig[] = [
  { key: "steve-wave",   spawnMin: 6,  spawnMax: 10, durMin: 6,  durMax: 10, sizeMin: 50, sizeMax: 60, opacity: 0.70, movement: "walk",        yMin: 58, yMax: 82, pages: "all",                                           showMobile: true  },
  { key: "steve-mine",   spawnMin: 9,  spawnMax: 14, durMin: 7,  durMax: 11, sizeMin: 50, sizeMax: 58, opacity: 0.70, movement: "walk",        yMin: 58, yMax: 82, pages: ["/practice","/writing","/listening","/reading"], showMobile: true  },
  { key: "steve-read",   spawnMin: 10, spawnMax: 15, durMin: 7,  durMax: 11, sizeMin: 48, sizeMax: 56, opacity: 0.70, movement: "walk",        yMin: 58, yMax: 82, pages: ["/reading","/articles","/vocabulary"],           showMobile: true  },
  { key: "creeper",      spawnMin: 8,  spawnMax: 12, durMin: 8,  durMax: 12, sizeMin: 45, sizeMax: 55, opacity: 0.65, movement: "walk",        yMin: 58, yMax: 82, pages: "all",                                           showMobile: true  },
  { key: "ender-dragon", spawnMin: 12, spawnMax: 18, durMin: 11, durMax: 15, sizeMin: 70, sizeMax: 90, opacity: 0.60, movement: "fly",         yMin: 3,  yMax: 22, pages: "all",                                           showMobile: false },
  { key: "enderman",     spawnMin: 10, spawnMax: 15, durMin: 4,  durMax: 6,  sizeMin: 55, sizeMax: 70, opacity: 0.70, movement: "teleport",    yMin: 25, yMax: 68, pages: ["/","/practice","/vocabulary","/premium","/admin","/writing","/speaking"], showMobile: false },
  { key: "zombie",       spawnMin: 7,  spawnMax: 11, durMin: 9,  durMax: 13, sizeMin: 48, sizeMax: 52, opacity: 0.65, movement: "walk",        yMin: 58, yMax: 82, pages: "all",                                           showMobile: true  },
  { key: "skeleton",     spawnMin: 9,  spawnMax: 13, durMin: 7,  durMax: 11, sizeMin: 44, sizeMax: 52, opacity: 0.68, movement: "walk",        yMin: 58, yMax: 82, pages: "all",                                           showMobile: true  },
  { key: "ghast",        spawnMin: 11, spawnMax: 17, durMin: 13, durMax: 19, sizeMin: 55, sizeMax: 65, opacity: 0.55, movement: "float",       yMin: 8,  yMax: 48, pages: "all",                                           showMobile: false },
  { key: "slime",        spawnMin: 5,  spawnMax: 9,  durMin: 4,  durMax: 7,  sizeMin: 38, sizeMax: 48, opacity: 0.75, movement: "bounce",      yMin: 68, yMax: 84, pages: "all",                                           showMobile: true  },
  { key: "villager",     spawnMin: 10, spawnMax: 14, durMin: 8,  durMax: 12, sizeMin: 42, sizeMax: 48, opacity: 0.70, movement: "walk",        yMin: 58, yMax: 82, pages: "all",                                           showMobile: true  },
  { key: "iron-golem",   spawnMin: 13, spawnMax: 18, durMin: 9,  durMax: 13, sizeMin: 60, sizeMax: 72, opacity: 0.75, movement: "walk",        yMin: 55, yMax: 80, pages: ["/","/practice","/premium","/vocabulary","/writing"], showMobile: false },
  { key: "witch",        spawnMin: 12, spawnMax: 16, durMin: 7,  durMax: 11, sizeMin: 46, sizeMax: 52, opacity: 0.70, movement: "walk",        yMin: 58, yMax: 82, pages: ["/writing","/reading","/articles","/vocabulary","/"], showMobile: true  },
  { key: "bat",          spawnMin: 4,  spawnMax: 8,  durMin: 4,  durMax: 6,  sizeMin: 22, sizeMax: 32, opacity: 0.50, movement: "erratic",     yMin: 8,  yMax: 78, pages: "all",                                           showMobile: true  },
  { key: "wither",       spawnMin: 15, spawnMax: 20, durMin: 9,  durMax: 13, sizeMin: 68, sizeMax: 80, opacity: 0.55, movement: "wither-drift",yMin: 4,  yMax: 24, pages: ["/practice","/writing","/admin","/premium","/speaking"], showMobile: false },
];

// ═══════════════════════════════════════════════════════════════════
// SPAWNER HOOK
// ═══════════════════════════════════════════════════════════════════

interface SpawnedChar {
  id: number;
  key: CharKey;
  direction: "ltr" | "rtl";
  size: number;
  opacity: number;
  y: number;
  x: number;
  duration: number;
  movement: MovementType;
}

let _id = 0;
const rand = (a: number, b: number) => Math.random() * (b - a) + a;
const randInt = (a: number, b: number) => Math.floor(rand(a, b + 1));

function useCharSpawner(pathname: string) {
  const [chars, setChars] = useState<SpawnedChar[]>([]);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const MAX = isMobile ? 2 : 4;

  const trySpawn = useCallback((cfg: CharConfig) => {
    if (!cfg.showMobile && isMobile) return;

    if (cfg.pages !== "all") {
      const match = cfg.pages.some((p) => pathname === p || pathname.startsWith(p + "/"));
      if (!match) return;
    }

    setChars((prev) => {
      if (prev.length >= MAX) return prev;
      const dir: "ltr" | "rtl" = Math.random() > 0.5 ? "ltr" : "rtl";
      const c: SpawnedChar = {
        id: ++_id,
        key: cfg.key,
        direction: dir,
        size: randInt(cfg.sizeMin, cfg.sizeMax),
        opacity: cfg.opacity,
        y: rand(cfg.yMin, cfg.yMax),
        x: rand(10, 80),
        duration: rand(cfg.durMin, cfg.durMax),
        movement: cfg.movement,
      };
      return [...prev, c];
    });
  }, [pathname, isMobile, MAX]);

  const remove = useCallback((id: number) => {
    setChars((prev) => prev.filter((c) => c.id !== id));
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const mobileMultiplier = isMobile ? 2 : 1;

    function schedule(cfg: CharConfig) {
      const delay = rand(cfg.spawnMin, cfg.spawnMax) * 1000 * mobileMultiplier;
      const t = setTimeout(() => {
        trySpawn(cfg);
        schedule(cfg);
      }, delay);
      timers.push(t);
    }

    CONFIGS.forEach((cfg, i) => {
      const init = setTimeout(() => schedule(cfg), i * 800);
      timers.push(init);
    });

    return () => timers.forEach(clearTimeout);
  }, [trySpawn, isMobile]);

  return { chars, remove };
}

// ═══════════════════════════════════════════════════════════════════
// RENDER HELPERS
// ═══════════════════════════════════════════════════════════════════

function getOuterAnimName(movement: MovementType, dir: "ltr" | "rtl"): string {
  switch (movement) {
    case "fly":          return `mc-fly-${dir}`;
    case "float":        return `mc-float-${dir}`;
    case "bounce":       return `mc-bounce-${dir}`;
    case "erratic":      return `mc-erratic-${dir}`;
    case "teleport":     return "mc-teleport";
    case "wither-drift": return `mc-wither-drift-${dir}`;
    default:             return `mc-walk-${dir}`;
  }
}

function getInnerAnim(key: CharKey): string {
  switch (key) {
    case "ghast":        return "mc-ghost-bob 3.5s ease-in-out infinite";
    case "slime":        return "mc-slime-squash 0.45s ease-in-out infinite";
    case "creeper":      return "mc-creeper-hiss 11s ease-in-out infinite";
    case "wither":       return "mc-wither-glow 2.2s ease-in-out infinite";
    case "witch":        return "mc-witch-glow 9s ease-in-out infinite";
    case "bat":          return "mc-bat-flap 0.18s ease-in-out infinite";
    case "ender-dragon": return "mc-dragon-flap 0.8s ease-in-out infinite";
    default:             return "mc-bob 0.5s ease-in-out infinite";
  }
}

function CharSvg({ charKey, size }: { charKey: CharKey; size: number }) {
  switch (charKey) {
    case "steve-wave":   return <SteveWaving size={size} opacity={1} />;
    case "steve-mine":   return <SteveMining size={size} opacity={1} />;
    case "steve-read":   return <SteveReading size={size} opacity={1} />;
    case "creeper":      return <Creeper size={size} opacity={1} />;
    case "ender-dragon": return <EnderDragonSilhouette width={size * 2.8} height={size} opacity={1} />;
    case "enderman":     return <Enderman size={size * 0.55} opacity={1} />;
    case "zombie":       return <Zombie size={size} opacity={1} />;
    case "skeleton":     return <SvgSkeleton size={size} />;
    case "ghast":        return <SvgGhast size={size} />;
    case "slime":        return <SvgSlime size={size} />;
    case "villager":     return <SvgVillager size={size} />;
    case "iron-golem":   return <SvgIronGolem size={size} />;
    case "witch":        return <SvgWitch size={size} />;
    case "bat":          return <SvgBat size={size} />;
    case "wither":       return <SvgWither size={size} />;
  }
}

// ═══════════════════════════════════════════════════════════════════
// SPRITE COMPONENT
// ═══════════════════════════════════════════════════════════════════

function Sprite({ char, onDone }: { char: SpawnedChar; onDone: () => void }) {
  const isTeleport = char.movement === "teleport";
  const isRTL = char.direction === "rtl";

  const outerStyle: React.CSSProperties = isTeleport
    ? {
        position: "absolute",
        top: `${char.y}%`,
        left: `${char.x}%`,
        opacity: char.opacity,
        animation: `mc-teleport ${char.duration}s ease forwards`,
        willChange: "transform, opacity",
      }
    : {
        position: "absolute",
        top: `${char.y}%`,
        left: 0,
        opacity: char.opacity,
        animation: `${getOuterAnimName(char.movement, char.direction)} ${char.duration}s linear forwards`,
        willChange: "transform",
      };

  const innerStyle: React.CSSProperties = {
    transform: isRTL && !isTeleport ? "scaleX(-1)" : undefined,
    animation: getInnerAnim(char.key),
    willChange: "transform, filter",
  };

  return (
    <div
      style={outerStyle}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget) onDone();
      }}
    >
      <div style={innerStyle}>
        <CharSvg charKey={char.key} size={char.size} />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN EXPORT
// ═══════════════════════════════════════════════════════════════════

export function MinecraftCharacters() {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    const style = document.createElement("style");
    style.id = "mc-char-animations";
    style.textContent = MC_CHAR_CSS;
    document.head.appendChild(style);
  }, []);

  const location = useLocation();
  const { chars, remove } = useCharSpawner(location.pathname);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 30,
        overflow: "hidden",
      }}
      aria-hidden
    >
      {chars.map((c) => (
        <Sprite key={c.id} char={c} onDone={() => remove(c.id)} />
      ))}
    </div>
  );
}
