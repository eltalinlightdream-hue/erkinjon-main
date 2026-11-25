import type { ReactNode } from "react";
import { BookOpen, Download, GraduationCap, Loader2, Minus, Plus, Type } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { READER_SIZE_MAX, READER_SIZE_MIN, type ReaderPrefs, type ReaderTheme } from "./use-reader";

export type ReaderMode = "read" | "study";

type Props = {
  title: string;
  progress: number;
  minutesLeft: number;
  mode: ReaderMode;
  onModeChange: (mode: ReaderMode) => void;
  canStudy: boolean;
  prefs: ReaderPrefs;
  onPrefsChange: (patch: Partial<ReaderPrefs>) => void;
  isDownloading: boolean;
  onDownload: () => void;
};

const THEMES: { value: ReaderTheme; label: string; swatch: string }[] = [
  { value: "auto", label: "Paper", swatch: "bg-[#FAF6F0] text-[#2A231C]" },
  { value: "sepia", label: "Sepia", swatch: "bg-[#F3E9D7] text-[#3B2F22]" },
  { value: "night", label: "Night", swatch: "bg-[#1A1511] text-[#E9E1D5]" },
];

export function ReaderToolbar({
  title,
  progress,
  minutesLeft,
  mode,
  onModeChange,
  canStudy,
  prefs,
  onPrefsChange,
  isDownloading,
  onDownload,
}: Props) {
  const status = progress >= 0.98 ? "Finished" : `${minutesLeft} min left`;

  return (
    <div className="sticky top-14 z-30 glass-nav border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl h-[52px] flex items-center gap-3">
        <p className="hidden md:block min-w-0 flex-1 truncate font-serif text-[15px] font-semibold">
          {title}
        </p>
        <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground md:hidden flex-1">
          {Math.round(progress * 100)}% · {status}
        </span>
        <span className="hidden md:inline font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground shrink-0">
          {Math.round(progress * 100)}% · {status}
        </span>

        {canStudy && (
          <div
            className="hidden lg:flex items-center rounded-full bg-muted p-0.5"
            role="tablist"
            aria-label="Reading mode"
          >
            <ModeButton
              isActive={mode === "read"}
              onClick={() => onModeChange("read")}
              icon={<BookOpen className="w-3.5 h-3.5" />}
              label="Read"
            />
            <ModeButton
              isActive={mode === "study"}
              onClick={() => onModeChange("study")}
              icon={<GraduationCap className="w-3.5 h-3.5" />}
              label="Study"
            />
          </div>
        )}

        <ReaderSettings prefs={prefs} onPrefsChange={onPrefsChange} />

        <button
          type="button"
          onClick={onDownload}
          disabled={isDownloading}
          title="Download this article and its vocabulary as a PDF"
          className="shrink-0 inline-flex items-center gap-1.5 h-8 px-3 rounded-full font-mono text-[10px] font-semibold tracking-[0.14em] uppercase bg-secondary text-white hover:bg-secondary/90 active:scale-95 transition disabled:opacity-60"
        >
          {isDownloading ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Download className="w-3.5 h-3.5" />
          )}
          <span className="hidden sm:inline">{isDownloading ? "Preparing…" : "PDF"}</span>
        </button>
      </div>
      <div className="h-[3px] bg-transparent" aria-hidden>
        <div
          className="h-full bg-[var(--olive)] origin-left transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </div>
  );
}

function ModeButton({
  isActive,
  onClick,
  icon,
  label,
}: {
  isActive: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 h-7 px-3.5 rounded-full text-[12px] font-semibold transition-all",
        isActive
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {icon}
      {label}
    </button>
  );
}

function ReaderSettings({
  prefs,
  onPrefsChange,
}: {
  prefs: ReaderPrefs;
  onPrefsChange: Props["onPrefsChange"];
}) {
  const label = "font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground";
  return (
    <Popover>
      <PopoverTrigger
        className="shrink-0 grid place-items-center h-8 w-9 rounded-full font-serif font-semibold text-[15px] hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--olive)]"
        aria-label="Reading settings"
      >
        Aa
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72 rounded-2xl p-4 space-y-4">
        <div className="flex items-center justify-between">
          <span className={label}>Theme</span>
          <div className="flex gap-2">
            {THEMES.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => onPrefsChange({ theme: t.value })}
                aria-pressed={prefs.theme === t.value}
                title={t.label}
                className={cn(
                  "grid place-items-center w-9 h-9 rounded-full border border-border font-serif font-semibold text-sm transition",
                  t.swatch,
                  prefs.theme === t.value &&
                    "ring-2 ring-[var(--olive)] ring-offset-2 ring-offset-popover",
                )}
              >
                A<span className="sr-only">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className={label}>Size</span>
          <div className="flex items-center rounded-xl bg-muted p-0.5">
            <button
              type="button"
              onClick={() => onPrefsChange({ size: Math.max(READER_SIZE_MIN, prefs.size - 1) })}
              disabled={prefs.size <= READER_SIZE_MIN}
              className="grid place-items-center w-9 h-8 rounded-lg hover:bg-background disabled:opacity-40"
              aria-label="Smaller text"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-10 text-center text-sm font-semibold tabular-nums">
              {prefs.size}
            </span>
            <button
              type="button"
              onClick={() => onPrefsChange({ size: Math.min(READER_SIZE_MAX, prefs.size + 1) })}
              disabled={prefs.size >= READER_SIZE_MAX}
              className="grid place-items-center w-9 h-8 rounded-lg hover:bg-background disabled:opacity-40"
              aria-label="Larger text"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className={label}>Font</span>
          <div className="flex rounded-xl bg-muted p-0.5">
            {(["serif", "sans"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => onPrefsChange({ font: f })}
                aria-pressed={prefs.font === f}
                className={cn(
                  "inline-flex items-center gap-1 h-8 px-3.5 rounded-lg text-sm transition",
                  f === "serif" ? "font-serif" : "font-sans",
                  prefs.font === f && "bg-background font-semibold shadow-sm",
                )}
              >
                {f === "sans" && <Type className="w-3.5 h-3.5" />}
                {f === "serif" ? "Serif" : "Sans"}
              </button>
            ))}
          </div>
        </div>

        <label className="flex items-center justify-between cursor-pointer">
          <span className={label}>Line focus</span>
          <Switch checked={prefs.focus} onCheckedChange={(focus) => onPrefsChange({ focus })} />
        </label>
      </PopoverContent>
    </Popover>
  );
}
