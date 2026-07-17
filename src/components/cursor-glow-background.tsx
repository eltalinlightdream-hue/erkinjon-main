import { useEffect, useRef } from "react";

/**
 * Ambient, blurred colour orbs that drift toward the pointer. Rendered once
 * (in the root route) as a fixed, behind-everything layer so the effect is
 * present on every page. Colours come from the atelier palette via CSS
 * variables and flip automatically with the light/dark theme.
 *
 * Motion is compositor-friendly (transform only) and driven by a single
 * rAF loop that eases the parallax offset toward the latest pointer
 * position. The loop, listener, and idle float are all skipped when the
 * user prefers reduced motion or the device has no fine pointer.
 */

// Each blob: base position (%) and a parallax depth. Deeper (larger) values
// move further with the cursor, giving the field a sense of layering.
const BLOBS = [
  { varName: "--glow-1", top: "-8%", left: "-6%", depth: 90 },
  { varName: "--glow-2", top: "12%", left: "58%", depth: 55 },
  { varName: "--glow-3", top: "52%", left: "8%", depth: 70 },
  { varName: "--glow-4", top: "60%", left: "62%", depth: 40 },
  { varName: "--glow-5", top: "28%", left: "30%", depth: 110 },
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
        {BLOBS.map((blob, i) => (
          <div
            key={blob.varName}
            className="cursor-glow__blob"
            style={{
              top: blob.top,
              left: blob.left,
              // Parallax: shift opposite the pointer, scaled by this blob's depth.
              transform: `translate3d(calc(var(--px, 0) * ${-blob.depth}px), calc(var(--py, 0) * ${-blob.depth}px), 0)`,
            }}
          >
            <div
              className="cursor-glow__orb"
              style={{
                background: `radial-gradient(circle at center, rgb(var(${blob.varName}) / 1) 0%, rgb(var(${blob.varName}) / 0) 70%)`,
                // Stagger the idle float so the orbs never pulse in unison.
                animationDelay: `${i * -2.6}s`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
