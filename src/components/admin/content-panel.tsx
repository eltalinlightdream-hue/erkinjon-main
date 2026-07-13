import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Crown, Loader2, RotateCcw, Search, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  CONTENT_REGISTRY,
  type ContentRegistryItem,
} from "@/lib/content-registry";
import { overrideKey, type ContentSection } from "@/lib/premium-content";
import {
  adminBulkUpsertContentPremium,
  adminResetContentOverride,
  adminSetContentPremium,
  type AdminContentOverride,
} from "@/lib/admin.functions";

type StatusFilter = "all" | "free" | "premium";

const FILTERS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "free", label: "Free" },
  { value: "premium", label: "Premium" },
];

interface ContentPanelProps {
  overrides: AdminContentOverride[];
  isLoading: boolean;
  onReload: () => Promise<void>;
}

interface RowState extends ContentRegistryItem {
  isPremium: boolean;
  isOverride: boolean;
}

export function ContentPanel({ overrides, isLoading, onReload }: ContentPanelProps) {
  const setOneFn = useServerFn(adminSetContentPremium);
  const bulkUpsertFn = useServerFn(adminBulkUpsertContentPremium);
  const resetFn = useServerFn(adminResetContentOverride);

  const [section, setSection] = useState<ContentSection>("listening");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [isBusy, setIsBusy] = useState(false);

  // override map keyed by `${section}:${contentId}` → is_premium
  const overrideMap = useMemo(() => {
    const map = new Map<string, boolean>();
    for (const o of overrides) {
      map.set(overrideKey(o.content_type as ContentSection, o.content_id), o.is_premium);
    }
    return map;
  }, [overrides]);

  const activeSection = CONTENT_REGISTRY.find((s) => s.section === section)!;

  const rows: RowState[] = useMemo(() => {
    return activeSection.items.map((item) => {
      const ov = overrideMap.get(overrideKey(item.section, item.contentId));
      return {
        ...item,
        isPremium: ov === undefined ? item.defaultIsPremium : ov,
        isOverride: ov !== undefined,
      };
    });
  }, [activeSection, overrideMap]);

  const visibleRows = useMemo(() => {
    const query = search.trim().toLowerCase();
    return rows.filter((row) => {
      if (filter === "free" && row.isPremium) return false;
      if (filter === "premium" && !row.isPremium) return false;
      if (!query) return true;
      return `${row.label} ${row.group}`.toLowerCase().includes(query);
    });
  }, [rows, search, filter]);

  const visibleIds = visibleRows.map((r) => r.contentId);
  const allVisibleSelected = visibleIds.length > 0 && visibleIds.every((id) => selected.has(id));

  function switchSection(next: ContentSection) {
    setSection(next);
    setSelected(new Set());
  }

  function toggleRowSelect(contentId: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(contentId)) next.delete(contentId);
      else next.add(contentId);
      return next;
    });
  }

  function toggleSelectAll() {
    setSelected((prev) => {
      if (visibleIds.every((id) => prev.has(id))) {
        const next = new Set(prev);
        visibleIds.forEach((id) => next.delete(id));
        return next;
      }
      const next = new Set(prev);
      visibleIds.forEach((id) => next.add(id));
      return next;
    });
  }

  async function runAction(action: () => Promise<unknown>, successMessage: string) {
    setIsBusy(true);
    try {
      await action();
      await onReload();
      toast.success(successMessage);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setIsBusy(false);
    }
  }

  // A single row toggle. When the new value equals the built-in default we
  // delete the override (auto-clear) instead of storing a redundant row.
  function toggleOne(row: RowState, nextPremium: boolean) {
    const action =
      nextPremium === row.defaultIsPremium
        ? () => resetFn({ data: { contentType: section, contentIds: [row.contentId] } })
        : () =>
            setOneFn({
              data: { contentType: section, contentId: row.contentId, isPremium: nextPremium },
            });
    void runAction(
      action,
      `“${row.label}” → ${nextPremium ? "Premium" : "Free"}`,
    );
  }

  // Apply a target status to a set of rows: rows whose default already matches
  // the target get their override cleared; the rest get an explicit override.
  function applyToRows(targetRows: RowState[], nextPremium: boolean, message: string) {
    const toUpsert = targetRows
      .filter((r) => r.defaultIsPremium !== nextPremium)
      .map((r) => r.contentId);
    const toReset = targetRows
      .filter((r) => r.defaultIsPremium === nextPremium && r.isOverride)
      .map((r) => r.contentId);

    if (toUpsert.length === 0 && toReset.length === 0) {
      toast.info("Those items already match that setting.");
      return;
    }
    void runAction(async () => {
      if (toUpsert.length > 0) {
        await bulkUpsertFn({
          data: { contentType: section, contentIds: toUpsert, isPremium: nextPremium },
        });
      }
      if (toReset.length > 0) {
        await resetFn({ data: { contentType: section, contentIds: toReset } });
      }
    }, message);
  }

  function resetRows(targetRows: RowState[], message: string) {
    const ids = targetRows.filter((r) => r.isOverride).map((r) => r.contentId);
    if (ids.length === 0) {
      toast.info("Nothing to reset — those items are already on their default.");
      return;
    }
    void runAction(() => resetFn({ data: { contentType: section, contentIds: ids } }), message);
  }

  const selectedRows = rows.filter((r) => selected.has(r.contentId));

  return (
    <Card className="p-5">
      {/* Section switcher */}
      <div className="flex flex-wrap gap-2 mb-5">
        {CONTENT_REGISTRY.map((s) => (
          <button
            key={s.section}
            type="button"
            onClick={() => switchSection(s.section)}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-mono text-xs tracking-wide transition-colors",
              section === s.section
                ? "bg-gradient-primary text-white border-transparent shadow-soft"
                : "border-border bg-accent/40 text-muted-foreground hover:text-foreground",
            )}
          >
            {s.label}
            <span
              className={cn(
                "text-[10px]",
                section === s.section ? "text-white/80" : "text-muted-foreground/70",
              )}
            >
              {s.items.length}
            </span>
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="relative flex-1 min-w-56">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={`Search ${activeSection.label.toLowerCase()} items`}
            className="pl-9"
          />
        </div>
        <div className="flex rounded-xl border border-border p-1 gap-1">
          {FILTERS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setFilter(option.value)}
              className={cn(
                "px-3 py-1.5 rounded-lg font-mono text-[11px] tracking-wide transition-colors",
                filter === option.value
                  ? "bg-gradient-primary text-white shadow-soft"
                  : "text-muted-foreground hover:bg-accent",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Whole-section actions */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="font-mono text-[11px] text-muted-foreground tracking-wide uppercase mr-1">
          Whole section
        </span>
        <Button
          variant="outline"
          size="sm"
          disabled={isBusy}
          onClick={() => applyToRows(rows, false, `All ${activeSection.label} set to Free.`)}
          className="font-mono text-[11px]"
        >
          Make all Free
        </Button>
        <Button
          variant="outline"
          size="sm"
          disabled={isBusy}
          onClick={() => applyToRows(rows, true, `All ${activeSection.label} set to Premium.`)}
          className="font-mono text-[11px]"
        >
          <Crown className="w-3.5 h-3.5 mr-1.5" /> Make all Premium
        </Button>
        <Button
          variant="ghost"
          size="sm"
          disabled={isBusy}
          onClick={() => resetRows(rows, `${activeSection.label} reset to defaults.`)}
          className="font-mono text-[11px]"
        >
          <RotateCcw className="w-3.5 h-3.5 mr-1.5" /> Reset section
        </Button>
      </div>

      {/* Bulk bar */}
      {selected.size > 0 && (
        <div className="flex flex-wrap items-center gap-3 mb-4 rounded-xl border border-dashed border-secondary/60 bg-accent/40 px-4 py-3">
          <span className="font-serif font-semibold">
            {selected.size} selected
          </span>
          <div className="flex flex-wrap gap-2 ml-auto">
            <Button
              size="sm"
              disabled={isBusy}
              onClick={() => applyToRows(selectedRows, false, `${selected.size} set to Free.`)}
              className="font-mono text-[11px]"
            >
              Make Free
            </Button>
            <Button
              size="sm"
              disabled={isBusy}
              onClick={() => applyToRows(selectedRows, true, `${selected.size} set to Premium.`)}
              className="font-mono text-[11px]"
            >
              <Crown className="w-3.5 h-3.5 mr-1.5" /> Make Premium
            </Button>
            <Button
              size="sm"
              variant="outline"
              disabled={isBusy}
              onClick={() => resetRows(selectedRows, "Selected items reset to defaults.")}
              className="font-mono text-[11px]"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" /> Reset
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setSelected(new Set())}
              className="font-mono text-[11px]"
            >
              Clear
            </Button>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="py-16 text-center">
          <Loader2 className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="py-3 pr-3 w-10">
                  <Checkbox
                    checked={allVisibleSelected}
                    onCheckedChange={toggleSelectAll}
                    aria-label="Select all"
                  />
                </th>
                <th className="py-3 pr-4 font-medium">Item</th>
                <th className="py-3 pr-4 font-medium">Default</th>
                <th className="py-3 pr-4 font-medium">Access</th>
                <th className="py-3 text-right font-medium">Reset</th>
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row) => (
                <tr
                  key={row.contentId}
                  className={cn(
                    "border-b border-border last:border-0",
                    selected.has(row.contentId) && "bg-accent/40",
                  )}
                >
                  <td className="py-3 pr-3">
                    <Checkbox
                      checked={selected.has(row.contentId)}
                      onCheckedChange={() => toggleRowSelect(row.contentId)}
                      aria-label={`Select ${row.label}`}
                    />
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="min-w-0">
                        <p className="font-medium leading-tight truncate max-w-md">{row.label}</p>
                        <p className="font-mono text-[10px] text-muted-foreground tracking-wide uppercase">
                          {row.group}
                        </p>
                      </div>
                      {row.isOverride && (
                        <span
                          title="Overrides the default"
                          className="inline-flex items-center gap-1 rounded-md bg-secondary/15 text-secondary font-mono text-[9px] tracking-wide px-1.5 py-0.5"
                        >
                          <Sparkles className="w-2.5 h-2.5" /> OVERRIDE
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <Badge variant="secondary" className="bg-accent font-mono text-[10px]">
                      {row.defaultIsPremium ? "Premium" : "Free"}
                    </Badge>
                  </td>
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2.5">
                      <Switch
                        checked={row.isPremium}
                        disabled={isBusy}
                        onCheckedChange={(checked) => toggleOne(row, checked)}
                        aria-label={`Toggle premium for ${row.label}`}
                      />
                      <span
                        className={cn(
                          "font-mono text-[11px] tracking-wide w-16",
                          row.isPremium ? "text-gold" : "text-secondary",
                        )}
                      >
                        {row.isPremium ? "Premium" : "Free"}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      disabled={isBusy || !row.isOverride}
                      onClick={() =>
                        resetRows([row], `“${row.label}” reset to default.`)
                      }
                      aria-label="Reset to default"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {visibleRows.length === 0 && (
            <p className="py-10 text-center text-sm text-muted-foreground">No items match.</p>
          )}
        </div>
      )}
    </Card>
  );
}
