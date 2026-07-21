import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { TASK1_STRUCTURES, type Task1Structure } from "@/lib/task1-structures-data";

/** Split a "Model: …" example into its label and the model sentence. */
function parseExample(example: string): { isModel: boolean; text: string } {
  if (example.startsWith("Model:")) {
    return {
      isModel: true,
      text: example.slice("Model:".length).trim().replace(/^[“"]|[”"]$/g, ""),
    };
  }
  return { isModel: false, text: example };
}

function ChunkCard({ item }: { item: Task1Structure }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="h-fit rounded-[0.75rem] border border-border bg-card shadow-card transition-colors duration-200 hover:border-[var(--terracotta-soft)] data-[state=open]:border-[var(--terracotta-soft)]"
    >
      <AccordionItem value="content" className="border-b-0">
        <AccordionTrigger className="items-start gap-2 px-3 py-3 hover:no-underline [&[data-state=open]>svg]:text-[var(--terracotta)]">
          <span className="flex min-w-0 flex-col gap-1.5">
            <span className="font-mono text-[10px] font-semibold tracking-widest text-[var(--terracotta)]">
              {String(item.n).padStart(2, "0")}
            </span>
            <span className="font-serif text-[13px] font-medium leading-snug text-foreground">
              {item.structure}
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent className="px-3">
          <ul className="space-y-2.5 border-t border-border/60 pt-3">
            {item.examples.map((ex, i) => {
              const { isModel, text } = parseExample(ex);
              return (
                <li key={i} className="flex gap-2 text-[13px] leading-relaxed">
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--olive)]"
                  />
                  <span className="min-w-0">
                    {isModel && (
                      <span className="mr-1.5 rounded-full bg-[var(--badge-info-bg)] px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-[var(--badge-info-fg)]">
                        Model
                      </span>
                    )}
                    <span className={cn(isModel ? "italic text-muted-foreground" : "text-foreground/85")}>
                      {text}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export function Task1ChunksSection() {
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TASK1_STRUCTURES;
    return TASK1_STRUCTURES.filter(
      (s) =>
        s.structure.toLowerCase().includes(q) ||
        s.examples.some((ex) => ex.toLowerCase().includes(q)),
    );
  }, [query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-xl text-sm text-muted-foreground">
          {TASK1_STRUCTURES.length} sentence structures and language chunks for Task 1, each with
          natural example sentences. Tap a card to reveal its examples.
        </p>
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search structures or examples..."
            className="h-9 rounded-xl border-border pl-9 font-mono text-sm"
          />
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-center font-mono text-sm tracking-wide text-muted-foreground">
          No structures found.
        </p>
      ) : (
        <div className="grid grid-cols-3 gap-3 lg:grid-cols-6">
          {visible.map((item) => (
            <ChunkCard key={item.n} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
