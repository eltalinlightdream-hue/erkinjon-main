import { useEffect, useRef } from "react";

/**
 * Ambient particle-network background: a field of small colour dots that
 * drift slowly, link to nearby dots with faint lines, and react to the
 * cursor (nearby dots grow and connect to the pointer). Rendered once in
 * the root route as a fixed, behind-content canvas so it appears on every
 * page. Self-contained (no external particle library) and drawn on a single
 * <canvas> for performance.
 *
 * Motion, links, and pointer interaction are all disabled for reduced-motion
 * users; pointer interaction is also skipped on coarse-pointer (touch)
 * devices, where the dots simply drift.
 */

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: [number, number, number];
};

// Palette per theme — warm terracotta/coral/ochre plus a cool blue and
// violet so the field reads as "different colours" like the reference.
const PALETTE_LIGHT: [number, number, number][] = [
  [200, 85, 61], // terracotta
  [209, 114, 87], // coral
  [168, 116, 44], // ochre
  [92, 107, 71], // olive
  [70, 110, 190], // blue
  [138, 94, 168], // violet
];
const PALETTE_DARK: [number, number, number][] = [
  [216, 105, 78],
  [235, 162, 143],
  [210, 162, 76],
  [147, 161, 114],
  [120, 150, 230],
  [176, 130, 214],
];

const LINK_DIST = 130; // px — dots closer than this get linked
const CURSOR_DIST = 190; // px — cursor influence radius
const DENSITY = 15000; // one dot per this many css px² (lower = more dots)
const MIN_DOTS = 34;
const MAX_DOTS = 130;

export function CursorGlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const interactive = finePointer.matches && !reduceMotion.matches;

    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let isDark = document.documentElement.classList.contains("dark");
    const pointer = { x: -9999, y: -9999, active: false };

    const palette = () => (isDark ? PALETTE_DARK : PALETTE_LIGHT);

    const makeDots = () => {
      const count = Math.max(
        MIN_DOTS,
        Math.min(MAX_DOTS, Math.round((width * height) / DENSITY)),
      );
      const pal = palette();
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.1 + Math.random() * 1.7,
        color: pal[Math.floor(Math.random() * pal.length)],
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeDots();
    };

    const lineRGB = () => (isDark ? "220, 205, 185" : "120, 96, 82");

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const link = lineRGB();

      // Links between nearby dots.
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.22;
            ctx.strokeStyle = `rgba(${link}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Dots, plus cursor links / grow.
      for (const dot of dots) {
        let r = dot.r;
        if (pointer.active) {
          const dx = dot.x - pointer.x;
          const dy = dot.y - pointer.y;
          const d = Math.hypot(dx, dy);
          if (d < CURSOR_DIST) {
            const t = 1 - d / CURSOR_DIST;
            r = dot.r + t * 2.2; // grow near the cursor
            ctx.strokeStyle = `rgba(${link}, ${(t * 0.35).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
          }
        }
        const [cr, cg, cb] = dot.color;
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, 0.9)`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      for (const dot of dots) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;
        dot.x = Math.max(0, Math.min(width, dot.x));
        dot.y = Math.max(0, Math.min(height, dot.y));
      }
      draw();
    };

    let frame = 0;
    const loop = () => {
      step();
      frame = requestAnimationFrame(loop);
    };

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };

    const themeObserver = new MutationObserver(() => {
      const nowDark = document.documentElement.classList.contains("dark");
      if (nowDark !== isDark) {
        isDark = nowDark;
        const pal = palette();
        for (const dot of dots) dot.color = pal[Math.floor(Math.random() * pal.length)];
        if (reduceMotion.matches) draw();
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    resize();
    window.addEventListener("resize", resize);
    if (interactive) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerout", onPointerLeave, { passive: true });
    }

    if (reduceMotion.matches) {
      draw(); // static field, no animation
    } else {
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerLeave);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div className="cursor-glow" aria-hidden="true">
      <canvas ref={canvasRef} className="cursor-glow__canvas" />
    </div>
  );
}
