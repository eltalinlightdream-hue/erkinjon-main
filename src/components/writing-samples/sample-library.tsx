import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SampleCard } from "@/components/writing-samples/sample-card";
import {
  SAMPLE_PAGE_SIZE,
  TASK1_SAMPLE_TYPES,
  TASK2_SAMPLE_TYPES,
  typeSwatch,
  type SampleListResult,
  type SampleTask,
} from "@/lib/writing-samples-library";
import { cn } from "@/lib/utils";

export interface SampleLibraryState {
  q?: string;
  type?: string;
  page?: number;
}

interface SampleLibraryProps {
  task: SampleTask;
  result: SampleListResult | null;
  state: SampleLibraryState;
  isLoading: boolean;
  onChange: (patch: SampleLibraryState) => void;
}

const SEARCH_DEBOUNCE_MS = 250;
const PRIORITY_CARDS = 4;

export function SampleLibrary({ task, result, state, isLoading, onChange }: SampleLibraryProps) {
  const [draft, setDraft] = useState(state.q ?? "");
  const lastPushed = useRef(state.q ?? "");

  // Keep the input in sync when the URL changes from outside (back button, tab switch).
  useEffect(() => {
    if ((state.q ?? "") !== lastPushed.current) {
      lastPushed.current = state.q ?? "";
      setDraft(state.q ?? "");
    }
  }, [state.q]);

  // Debounced push of the search box into the URL.
  useEffect(() => {
    if (draft === lastPushed.current) return;
    const id = setTimeout(() => {
      lastPushed.current = draft;
      onChange({ q: draft.trim() || undefined, page: undefined });
    }, SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [draft, onChange]);

  const types = task === 1 ? TASK1_SAMPLE_TYPES : TASK2_SAMPLE_TYPES;
  const counts = result?.typeCounts ?? {};
  const allCount = Object.values(counts).reduce((a, b) => a + b, 0);
  const visibleTypes = types.filter((t) => (counts[t] ?? 0) > 0 || t === state.type);
  const items = result?.items ?? [];
  const total = result?.total ?? 0;
  const page = state.page ?? 1;
  const hasFilters = Boolean(state.q || state.type);
  const noun = task === 1 ? "reports" : "essays";

  return (
    <section aria-label={task === 1 ? "Task 1 sample reports" : "Task 2 sample essays"}>
      <div className="mb-6 rounded-2xl border border-border bg-card/70 p-3 shadow-[var(--shadow-card)] sm:p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:max-w-sm">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder={
                task === 1
                  ? "Search reports — e.g. water, 2010, Australia"
                  : "Search essays — e.g. technology, crime"
              }
              aria-label={`Search ${noun}`}
              className="h-10 rounded-xl border-border bg-background pl-9 text-sm"
            />
          </div>
          <p
            className="font-mono text-[11px] tracking-wide text-muted-foreground sm:ml-auto"
            aria-live="polite"
          >
            {isLoading ? "Searching…" : `${total} ${total === 1 ? noun.slice(0, -1) : noun}`}
            {hasFilters && !isLoading && result && ` of ${result.taskTotals[task]}`}
          </p>
        </div>

        <div
          className="-mx-1 mt-3 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:thin] sm:flex-wrap sm:overflow-visible"
          role="group"
          aria-label="Filter by type"
        >
          <FilterChip
            label="All"
            count={allCount}
            isActive={!state.type}
            onClick={() => onChange({ type: undefined, page: undefined })}
          />
          {visibleTypes.map((t) => (
            <FilterChip
              key={t}
              label={t}
              count={counts[t] ?? 0}
              swatch={typeSwatch(t)}
              isActive={state.type === t}
              onClick={() => onChange({ type: state.type === t ? undefined : t, page: undefined })}
            />
          ))}
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setDraft("");
                lastPushed.current = "";
                onChange({ q: undefined, type: undefined, page: undefined });
              }}
              className="ml-1 inline-flex shrink-0 items-center gap-1 rounded-full px-2.5 text-[11px] font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              <X className="h-3 w-3" aria-hidden="true" /> Clear
            </button>
          )}
        </div>
      </div>

      {items.length === 0 && !isLoading ? (
        <div className="rounded-2xl border border-dashed border-border px-6 py-16 text-center">
          <p className="font-serif text-xl">No {noun} match that.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try a different word or clear the filters.
          </p>
        </div>
      ) : (
        <ul
          className={cn(
            "grid grid-cols-1 gap-4 min-[440px]:grid-cols-2 lg:grid-cols-4",
            isLoading && "opacity-60 transition-opacity",
          )}
        >
          {items.map((s, i) => (
            <li key={s.id}>
              <SampleCard sample={s} isPriority={i < PRIORITY_CARDS} />
            </li>
          ))}
        </ul>
      )}

      {items.length < total && (
        <div className="mt-10 flex flex-col items-center gap-2">
          <Button
            variant="outline"
            className="rounded-full px-6 font-mono text-xs tracking-wide"
            disabled={isLoading}
            onClick={() => onChange({ page: page + 1 })}
          >
            Load {Math.min(SAMPLE_PAGE_SIZE, total - items.length)} more
          </Button>
          <p className="font-mono text-[10.5px] text-muted-foreground">
            Showing {items.length} of {total}
          </p>
        </div>
      )}
    </section>
  );
}

interface FilterChipProps {
  label: string;
  count: number;
  swatch?: string;
  isActive: boolean;
  onClick: () => void;
}

function FilterChip({ label, count, swatch, isActive, onClick }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        "inline-flex h-8 shrink-0 items-center gap-1.5 rounded-full border px-3 text-[12px] font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-background text-foreground/80 hover:border-foreground/40 hover:text-foreground",
      )}
    >
      {swatch && (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: swatch }}
        />
      )}
      {label}
      <span
        className={cn("font-mono text-[10px]", isActive ? "opacity-70" : "text-muted-foreground")}
      >
        {count}
      </span>
    </button>
  );
}
