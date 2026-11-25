import { useCallback, useEffect, useState, type RefObject } from "react";

/* ─── Media query ────────────────────────────────────────────── */

/** SSR-safe: returns false until mounted. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);
  return matches;
}

/* ─── Reader preferences (persisted per browser) ─────────────── */

export type ReaderTheme = "auto" | "sepia" | "night";
export type ReaderFont = "serif" | "sans";

export interface ReaderPrefs {
  theme: ReaderTheme;
  size: number;
  font: ReaderFont;
  focus: boolean;
}

export const READER_SIZE_MIN = 15;
export const READER_SIZE_MAX = 24;
const PREFS_KEY = "erkinjon_reader_prefs";
const DEFAULT_PREFS: ReaderPrefs = { theme: "auto", size: 18, font: "serif", focus: false };

function parsePrefs(raw: string | null): ReaderPrefs {
  if (!raw) return DEFAULT_PREFS;
  try {
    const p = JSON.parse(raw) as Partial<ReaderPrefs>;
    return {
      theme: p.theme === "sepia" || p.theme === "night" ? p.theme : "auto",
      size:
        typeof p.size === "number"
          ? Math.min(READER_SIZE_MAX, Math.max(READER_SIZE_MIN, Math.round(p.size)))
          : DEFAULT_PREFS.size,
      font: p.font === "sans" ? "sans" : "serif",
      focus: p.focus === true,
    };
  } catch {
    return DEFAULT_PREFS;
  }
}

export function useReaderPrefs(): [ReaderPrefs, (patch: Partial<ReaderPrefs>) => void] {
  const [prefs, setPrefs] = useState<ReaderPrefs>(DEFAULT_PREFS);

  useEffect(() => {
    try {
      setPrefs(parsePrefs(localStorage.getItem(PREFS_KEY)));
    } catch {
      /* storage unavailable — keep defaults */
    }
  }, []);

  const update = useCallback((patch: Partial<ReaderPrefs>) => {
    setPrefs((prev) => {
      const next = { ...prev, ...patch };
      try {
        localStorage.setItem(PREFS_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable — keep in memory only */
      }
      return next;
    });
  }, []);

  return [prefs, update];
}

/* ─── Active paragraph ───────────────────────────────────────── */

/** Tracks which `p[data-para]` sits in the reading band of the
 *  viewport and tags it with `.is-active` (used by line focus and
 *  the study-mode paragraph letters). */
export function useActiveParagraph(
  bodyRef: RefObject<HTMLElement | null>,
  contentKey: string,
): number {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    const paras = Array.from(body.querySelectorAll<HTMLElement>("p[data-para]"));
    if (!paras.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting);
        if (hit) setActive(Number((hit.target as HTMLElement).dataset.para) || 1);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    paras.forEach((p) => observer.observe(p));
    return () => observer.disconnect();
  }, [bodyRef, contentKey]);

  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    body.querySelectorAll("p.is-active").forEach((p) => p.classList.remove("is-active"));
    body.querySelector(`p[data-para="${active}"]`)?.classList.add("is-active");
  }, [bodyRef, active, contentKey]);

  return active;
}

/* ─── Reading progress ───────────────────────────────────────── */

/** 0 → 1 as the element scrolls through the viewport. */
export function useReadingProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const read = -rect.top + window.innerHeight * 0.25;
      setProgress(total > 0 ? Math.min(1, Math.max(0, read / total)) : 1);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return progress;
}

/* ─── Speech support (client-only, avoids hydration mismatch) ── */

export function useCanSpeak(): boolean {
  const [can, setCan] = useState(false);
  useEffect(() => setCan(typeof window !== "undefined" && "speechSynthesis" in window), []);
  return can;
}
