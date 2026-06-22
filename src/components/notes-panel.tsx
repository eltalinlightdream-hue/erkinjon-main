import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, NotebookPen, Loader2, Check } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { getNote, saveNote } from "@/lib/notes.functions";
import { Link } from "@tanstack/react-router";

export function NotesPanel({ passageId }: { passageId: string }) {
  const { user } = useAuth();
  const fetchNote = useServerFn(getNote);
  const persistNote = useServerFn(saveNote);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const { data } = useQuery({
    queryKey: ["note", passageId, user?.id],
    queryFn: () => fetchNote({ data: { passageId } }),
    enabled: !!user && open,
  });

  useEffect(() => {
    if (data?.notes !== undefined) setText(data.notes);
  }, [data]);

  const onSave = async () => {
    if (!user) return;
    setSaving(true); setSaved(false);
    try {
      await persistNote({ data: { passageId, notes: text } });
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    } finally { setSaving(false); }
  };

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="border border-border/60 rounded-2xl bg-card overflow-hidden">
      <CollapsibleTrigger className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-muted/40 transition-colors">
        <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wide">
          <NotebookPen className="w-4 h-4 text-secondary" /> My Notes
        </span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </CollapsibleTrigger>

      <CollapsibleContent className="px-5 pb-5 border-t border-border/40">
        {!user ? (
          <p className="font-mono text-[11px] text-muted-foreground tracking-wide mt-4">
            <Link to="/auth" className="text-secondary underline underline-offset-2 hover:text-secondary/80">Sign in</Link>{" "}
            to save personal notes for this passage.
          </p>
        ) : (
          <div className="space-y-3 mt-4">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              onBlur={onSave}
              placeholder="Vocabulary, paraphrases, mistakes to remember…"
              className="min-h-[140px] resize-y font-mono text-sm rounded-xl border-border/60"
            />
            <div className="flex items-center justify-end gap-3">
              {saved && (
                <span className="font-mono text-[11px] text-secondary tracking-wide inline-flex items-center gap-1">
                  <Check className="w-3 h-3" /> Saved
                </span>
              )}
              <Button size="sm" variant="outline" onClick={onSave} disabled={saving}
                className="font-mono text-[11px] tracking-wide h-7 rounded-lg">
                {saving ? <Loader2 className="w-3 h-3 animate-spin" /> : "Save"}
              </Button>
            </div>
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}
