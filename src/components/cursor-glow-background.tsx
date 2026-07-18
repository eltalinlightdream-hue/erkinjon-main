import { useEffect, useRef } from "react";

/**
 * Ambient field of soft colour bubbles that drift toward the pointer.
 * Rendered once (in the root route) as a fixed, behind-content layer so the
 * effect is present on every page. Bubble colours come from the atelier
 * palette via CSS variables and flip automatically with the light/dark theme.
 *
 * Each bubble is a defined translucent disc with a light sheen and only a
 * gentle blur — visible as a bubble, not a diffuse cloud. Motion is
 * compositor-friendly (transform only): a single rAF loop eases a parallax
 * offset toward the pointer, and a slow idle float keeps the field alive.
 * The loop, listener, and float are all skipped for reduced-motion users
 * and coarse-pointer (touch) devices.
 */

// A bubble: colour token, diameter (px), base position (%), parallax depth
// (px it travels with the cursor), and a float duration for variety. Fixed
// list so server and client render identically (no hydration mismatch).
const BUBBLES = [
  { c: "--glow-1", size: 230, top: "6%", left: "5%", depth: 130, dur: 20 },
  { c: "--glow-5", size: 140, top: "16%", left: "78%", depth: 190, dur: 17 },
  { c: "--glow-3", size: 190, top: "60%", left: "10%", depth: 150, dur: 23 },
  { c: "--glow-2", size: 110, top: "72%", left: "58%", depth: 210, dur: 16 },
  { c: "--glow-6", size: 170, top: "34%", left: "40%", depth: 250, dur: 21 },
  { c: "--glow-4", size: 90, top: "12%", left: "50%", depth: 170, dur: 15 },
  { c: "--glow-1", size: 70, top: "82%", left: "86%", depth: 230, dur: 14 },
  { c: "--glow-5", size: 120, top: "48%", left: "88%", depth: 150, dur: 19 },
  { c: "--glow-3", size: 80, top: "26%", left: "22%", depth: 260, dur: 18 },
  { c: "--glow-2", size: 210, top: "2%", left: "34%", depth: 110, dur: 24 },
  { c: "--glow-6", size: 100, top: "86%", left: "34%", depth: 200, dur: 16 },
  { c: "--glow-4", size: 130, top: "56%", left: "70%", depth: 180, dur: 20 },
  { c: "--glow-1", size: 95, top: "40%", left: "6%", depth: 220, dur: 17 },
  { c: "--glow-5", size: 150, top: "88%", left: "64%", depth: 140, dur: 22 },
  { c: "--glow-3", size: 60, top: "50%", left: "48%", depth: 280, dur: 13 },
  { c: "--glow-6", size: 115, top: "20%", left: "63%", depth: 160, dur: 19 },
] as const;

export function CursorGlowBackground() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    if (reduceMotion.matches || !finePointer.matches) return;

    // target = where the pointer is; current = eased value we render.
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const onPointerMove = (e: PointerEvent) => {
      // Normalise to roughly -0.5 … 0.5 around the viewport centre.
      target.x = e.clientX / window.innerWidth - 0.5;
      target.y = e.clientY / window.innerHeight - 0.5;
    };

    const tick = () => {
      // Critically-damped-ish easing toward the pointer.
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      layer.style.setProperty("--px", current.x.toFixed(4));
      layer.style.setProperty("--py", current.y.toFixed(4));
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div className="cursor-glow" aria-hidden="true">
      <div ref={layerRef} className="cursor-glow__layer">
        {BUBBLES.map((b, i) => (
          <div
            key={`${b.c}-${i}`}
            className="cursor-glow__bubble"
            style={{
              top: b.top,
              left: b.left,
              width: `${b.size}px`,
              height: `${b.size}px`,
              // Parallax: shift opposite the pointer, scaled by this bubble's depth.
              transform: `translate3d(calc(var(--px, 0) * ${-b.depth}px), calc(var(--py, 0) * ${-b.depth}px), 0)`,
            }}
          >
            <span
              className="cursor-glow__orb"
              style={{
                // Off-centre highlight → a glossy "bubble" read, with a
                // defined edge that fades out only near the rim.
                background: `radial-gradient(circle at 32% 28%, rgb(var(${b.c}) / 0.95) 0%, rgb(var(${b.c}) / 0.6) 45%, rgb(var(${b.c}) / 0.28) 78%, rgb(var(${b.c}) / 0) 100%)`,
                boxShadow: `0 0 30px rgb(var(${b.c}) / 0.35), inset 0 0 24px rgb(var(${b.c}) / 0.25)`,
                animationDuration: `${b.dur}s`,
                animationDelay: `${i * -1.7}s`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
