import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  className?: string;
  /** Stagger delay in milliseconds before this item animates in. */
  delay?: number;
  /** Fraction of the element that must be visible before it reveals (0–1). */
  threshold?: number;
}

/**
 * Reveal — fades & lifts its children into view the first time they enter
 * the viewport, reusing the site's existing ink-bleed motion. It is
 * hydration-safe (server and first client render both start hidden, so the
 * markup matches), falls back to fully visible when IntersectionObserver is
 * unavailable, and is neutralised under `prefers-reduced-motion` via CSS.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, visible]);

  const Component: ElementType = Tag;

  let style: CSSProperties | undefined;
  if (delay > 0) {
    style = { "--reveal-delay": `${delay}ms` } as Record<string, string> as CSSProperties;
  }

  return (
    <Component ref={ref} className={cn("reveal", visible && "is-visible", className)} style={style}>
      {children}
    </Component>
  );
}
