import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Folder, Plus, Trash2, Pencil, Play, Loader2, Flame, ArrowLeft, Search, BookOpen, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";
import {
  listFolders, createFolder, renameFolder, deleteFolder,
  listWords, addWord, deleteWord, dueWords, reviewWord, reviewStreak,
} from "@/lib/vocabulary.functions";

export const Route = createFileRoute("/vocabulary")({
  head: () => ({ meta: [
    { title: "Vocabulary Practice — Abduraimov Erkinjon" },
    { name: "description", content: "Anki-style flashcard practice. Build folders, add words, and review with spaced repetition." },
  ]}),
  component: Vocab,
});

type View = { kind: "folders" } | { kind: "folder"; id: string } | { kind: "review"; folderId?: string };

function Vocab() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [view, setView] = useState<View>({ kind: "folders" });

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/auth" });
  }, [loading, user, navigate]);

  if (!user) {
    return (
      <SiteLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <Loader2 className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        {view.kind === "folders" && <Folders onOpen={(id) => setView({ kind: "folder", id })} onReview={(id) => setView({ kind: "review", folderId: id })} />}
        {view.kind === "folder" && <FolderDetail folderId={view.id} onBack={() => setView({ kind: "folders" })} onReview={() => setView({ kind: "review", folderId: view.id })} />}
        {view.kind === "review" && <Review folderId={view.folderId} onBack={() => setView({ kind: "folders" })} />}
      </section>
    </SiteLayout>
  );
}

// ─── Folders list ─────────────────────────────────────────────────────────────
function Folders({ onOpen, onReview }: { onOpen: (id: string) => void; onReview: (id?: string) => void }) {
  const fetchFolders = useServerFn(listFolders);
  const fetchStreak = useServerFn(reviewStreak);
  const createFn = useServerFn(createFolder);
  const qc = useQueryClient();
  const [newName, setNewName] = useState("");
  const [adding, setAdding] = useState(false);

  const { data: folders, isLoading } = useQuery({ queryKey: ["folders"], queryFn: () => fetchFolders() });
  const { data: streak } = useQuery({ queryKey: ["streak"], queryFn: () => fetchStreak() });

  const onCreate = async () => {
    if (!newName.trim()) return;
    setAdding(true);
    try {
      await createFn({ data: { name: newName.trim() } });
      setNewName("");
      qc.invalidateQueries({ queryKey: ["folders"] });
      toast.success("Folder created!");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not create folder.");
    } finally { setAdding(false); }
  };

  const totalDue = (folders ?? []).reduce((s, f) => s + (f.due ?? 0), 0);
  const totalWords = (folders ?? []).reduce((s, f) => s + (f.count ?? 0), 0);

  return (
    <>
      {/* Header */}
      <div className="flex items-end justify-between gap-4 flex-wrap mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Vocabulary</h1>
          <p className="text-muted-foreground">Folders, spaced-repetition flashcards, and your review streak.</p>
        </div>
        <div className="flex gap-3 flex-wrap items-center">
          {/* Streak chip */}
          <div className="bento-card rounded-xl px-4 py-2.5 inline-flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#C07850]" />
            <span className="font-mono text-xs tracking-wide">
              <strong className="font-semibold">{streak?.streak ?? 0}</strong> day streak
            </span>
          </div>
          {/* Word count chip */}
          <div className="bento-card rounded-xl px-4 py-2.5 inline-flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-secondary" />
            <span className="font-mono text-xs tracking-wide">
              <strong className="font-semibold">{totalWords}</strong> total words
            </span>
          </div>
          <Button
            onClick={() => onReview(undefined)}
            disabled={totalDue === 0}
            className="bg-gradient-primary text-white font-mono text-xs tracking-wide active:scale-95 transition-all"
          >
            <Play className="w-4 h-4 mr-1.5" /> Review all ({totalDue})
          </Button>
        </div>
      </div>

      {/* New folder input */}
      <div className="bento-card rounded-2xl p-4 mb-6 flex items-center gap-3">
        <Folder className="w-4 h-4 text-muted-foreground shrink-0" />
        <Input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New folder name…"
          onKeyDown={(e) => e.key === "Enter" && onCreate()}
          className="border-0 shadow-none bg-transparent font-mono text-sm tracking-wide focus-visible:ring-0 p-0 h-auto"
        />
        <Button
          onClick={onCreate}
          disabled={adding || !newName.trim()}
          size="sm"
          className="shrink-0 font-mono text-[11px] tracking-wide rounded-lg active:scale-95 transition-all"
        >
          <Plus className="w-3.5 h-3.5 mr-1" /> Create
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
        </div>
      ) : (folders ?? []).length === 0 ? (
        <div className="text-center py-20 text-muted-foreground">
          <div className="w-20 h-20 rounded-3xl bg-muted/60 flex items-center justify-center mx-auto mb-5">
            <Folder className="w-10 h-10 opacity-30" />
          </div>
          <p className="font-mono text-sm tracking-wide">No folders yet. Create one above to get started.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(folders ?? []).map((f) => (
            <FolderCard key={f.id} folder={f} onOpen={() => onOpen(f.id)} onReview={() => onReview(f.id)} />
          ))}
        </div>
      )}
    </>
  );
}

function FolderCard({ folder, onOpen, onReview }: { folder: any; onOpen: () => void; onReview: () => void }) {
  const renameFn = useServerFn(renameFolder);
  const deleteFn = useServerFn(deleteFolder);
  const qc = useQueryClient();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(folder.name);

  const save = async () => {
    if (!name.trim()) return;
    try {
      await renameFn({ data: { id: folder.id, name: name.trim() } });
      setEditing(false);
      qc.invalidateQueries({ queryKey: ["folders"] });
      toast.success("Folder renamed.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not rename folder.");
    }
  };

  const remove = async () => {
    if (!confirm(`Delete folder "${folder.name}" and all its words?`)) return;
    try {
      await deleteFn({ data: { id: folder.id } });
      qc.invalidateQueries({ queryKey: ["folders"] });
      toast.success("Folder deleted.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not delete folder.");
    }
  };

  return (
    <div className="bento-card rounded-2xl p-6 flex flex-col group">
      {/* Sakura top accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: "linear-gradient(90deg, #F5D5CB 0%, #4A9B7A 100%)" }} />

      <div className="flex items-center justify-between mb-4">
        <span className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center transition-transform group-hover:scale-105">
          <Folder className="w-5 h-5 text-secondary" />
        </span>
        {folder.is_default && (
          <Badge variant="secondary" className="bg-accent text-foreground font-mono text-[9px] tracking-widest uppercase">Default</Badge>
        )}
      </div>

      {editing ? (
        <div className="flex gap-2 mb-3">
          <Input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e) => e.key === "Enter" && save()}
            className="font-mono text-sm h-9" />
          <Button size="sm" onClick={save} className="font-mono text-[10px] tracking-wide shrink-0">Save</Button>
        </div>
      ) : (
        <h3 className="font-serif text-xl font-semibold mb-1">{folder.name}</h3>
      )}

      <div className="font-mono text-[11px] text-muted-foreground mb-5 flex flex-wrap gap-2 items-center tracking-wide">
        <span>{folder.count ?? 0} words</span>
        {(folder.due ?? 0) > 0 && (
          <span className="bg-[#C07850]/10 text-[#C07850] border border-[#C07850]/20 px-2 py-0.5 rounded-full text-[10px] tracking-wider font-semibold">
            {folder.due} due today
          </span>
        )}
        {folder.last_reviewed && (
          <span className="text-muted-foreground/70">· {new Date(folder.last_reviewed).toLocaleDateString()}</span>
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={onOpen}
          className="font-mono text-[11px] tracking-wide">Open</Button>
        <Button
          size="sm"
          onClick={onReview}
          disabled={(folder.count ?? 0) === 0}
          className="bg-gradient-primary text-white font-mono text-[11px] tracking-wide active:scale-95 transition-all"
        >
          <Play className="w-3 h-3 mr-1" /> Review
        </Button>
        {!folder.is_default && (
          <>
            <Button size="icon" variant="ghost" onClick={() => setEditing(!editing)} title="Rename"
              className="h-8 w-8 rounded-lg">
              <Pencil className="w-3.5 h-3.5" />
            </Button>
            <Button size="icon" variant="ghost" onClick={remove} title="Delete"
              className="h-8 w-8 rounded-lg">
              <Trash2 className="w-3.5 h-3.5 text-destructive" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Folder detail ────────────────────────────────────────────────────────────
function FolderDetail({ folderId, onBack, onReview }: { folderId: string; onBack: () => void; onReview: () => void }) {
  const fetchWords = useServerFn(listWords);
  const addFn = useServerFn(addWord);
  const delFn = useServerFn(deleteWord);
  const fetchFolders = useServerFn(listFolders);
  const qc = useQueryClient();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ word: "", definition: "", example: "" });
  const [search, setSearch] = useState("");

  const { data: folders } = useQuery({ queryKey: ["folders"], queryFn: () => fetchFolders() });
  const folder = folders?.find((f) => f.id === folderId);
  const { data: words, isLoading } = useQuery({
    queryKey: ["words", folderId],
    queryFn: () => fetchWords({ data: { folderId } }),
  });

  const filtered = useMemo(() => {
    if (!words) return [];
    if (!search.trim()) return words;
    const q = search.toLowerCase();
    return words.filter(w =>
      w.word.toLowerCase().includes(q) ||
      w.definition.toLowerCase().includes(q)
    );
  }, [words, search]);

  const onAdd = async () => {
    if (!form.word.trim() || !form.definition.trim()) {
      toast.error("Word and definition are required.");
      return;
    }
    await addFn({ data: { folderId, word: form.word.trim(), definition: form.definition.trim(), example: form.example.trim() } });
    setForm({ word: "", definition: "", example: "" });
    setOpen(false);
    qc.invalidateQueries({ queryKey: ["words", folderId] });
    qc.invalidateQueries({ queryKey: ["folders"] });
    toast.success("Word added!");
  };

  return (
    <>
      <button onClick={onBack} className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 mb-6 uppercase transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" /> All folders
      </button>

      <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
        <div>
          <h1 className="text-3xl font-bold">{folder?.name ?? "Folder"}</h1>
          <p className="font-mono text-xs text-muted-foreground tracking-wider mt-0.5">
            {words?.length ?? 0} words
            {(folder?.due ?? 0) > 0 && (
              <span className="ml-2 text-[#C07850] font-semibold">{folder!.due} due today</span>
            )}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" onClick={() => setOpen(true)}
            className="font-mono text-xs tracking-wide">
            <Plus className="w-4 h-4 mr-1" /> Add Word
          </Button>
          <Button
            onClick={onReview}
            disabled={!words?.length}
            className="bg-gradient-primary text-white font-mono text-xs tracking-wide active:scale-95 transition-all"
          >
            <Play className="w-4 h-4 mr-1" /> Review
          </Button>
        </div>
      </div>

      {(words?.length ?? 0) > 0 && (
        <div className="relative mb-6 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search words…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 font-mono text-sm h-10 rounded-xl border-border/60"
          />
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center py-16"><Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /></div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((w) => (
            <div key={w.id} className="bento-card rounded-2xl p-5 group">
              <div className="flex items-start justify-between mb-2 gap-2">
                <h3 className="font-serif text-xl font-semibold">{w.word}</h3>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 rounded-lg shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={async () => {
                    if (!confirm(`Delete "${w.word}"?`)) return;
                    await delFn({ data: { id: w.id } });
                    qc.invalidateQueries({ queryKey: ["words", folderId] });
                    qc.invalidateQueries({ queryKey: ["folders"] });
                    toast.success("Word deleted.");
                  }}
                >
                  <Trash2 className="w-3.5 h-3.5 text-destructive" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.definition}</p>
              {w.example && <p className="text-sm italic text-muted-foreground mt-1.5 border-l-2 pl-2.5" style={{ borderColor: "#F5D5CB" }}>"{w.example}"</p>}
              {w.next_review && (
                <p className="font-mono text-[10px] text-muted-foreground/70 mt-3 tracking-wide">
                  Next review:{" "}
                  {new Date(w.next_review) <= new Date()
                    ? <span className="text-[#C07850] font-semibold">Due now</span>
                    : new Date(w.next_review).toLocaleDateString()
                  }
                </p>
              )}
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="font-mono text-sm text-muted-foreground sm:col-span-2 text-center py-14 tracking-wide">
              {search ? "No words match your search." : "No words yet — add your first one."}
            </p>
          )}
        </div>
      )}

      {/* Add word dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Add Word</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Input
              placeholder="Word *"
              value={form.word}
              onChange={(e) => setForm({ ...form, word: e.target.value })}
              className="font-mono tracking-wide h-11 rounded-xl"
            />
            <Textarea
              placeholder="Definition *"
              value={form.definition}
              onChange={(e) => setForm({ ...form, definition: e.target.value })}
              className="font-mono text-sm rounded-xl resize-none"
            />
            <Textarea
              placeholder="Example sentence (optional)"
              value={form.example}
              onChange={(e) => setForm({ ...form, example: e.target.value })}
              className="font-mono text-sm rounded-xl resize-none"
            />
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)} className="font-mono text-xs tracking-wide">Cancel</Button>
            <Button onClick={onAdd} className="bg-gradient-primary text-white font-mono text-xs tracking-wide active:scale-95 transition-all">
              Save Word
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

// ─── Review session ───────────────────────────────────────────────────────────
function Review({ folderId, onBack }: { folderId?: string; onBack: () => void }) {
  const fetchDue = useServerFn(dueWords);
  const reviewFn = useServerFn(reviewWord);
  const qc = useQueryClient();

  const { data: cards, isLoading, refetch } = useQuery({
    queryKey: ["due", folderId ?? "all"],
    queryFn: () => fetchDue({ data: { folderId } }),
    refetchOnMount: "always",
  });

  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionDone, setSessionDone] = useState(false);
  const [correct, setCorrect] = useState(0);

  const total = cards?.length ?? 0;
  const current = cards?.[i];
  const progress = total ? Math.round((i / total) * 100) : 0;

  const rate = async (rating: "again" | "hard" | "good" | "easy") => {
    if (!current) return;
    await reviewFn({ data: { id: current.id, rating } });
    if (rating === "good" || rating === "easy") setCorrect(c => c + 1);
    setFlipped(false);
    if (i + 1 >= total) {
      qc.invalidateQueries({ queryKey: ["folders"] });
      qc.invalidateQueries({ queryKey: ["streak"] });
      setSessionDone(true);
    } else {
      setI(i + 1);
    }
  };

  const restart = async () => {
    setI(0);
    setFlipped(false);
    setCorrect(0);
    setSessionDone(false);
    await refetch();
  };

  if (isLoading) {
    return (
      <>
        <button onClick={onBack} className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 mb-6 uppercase transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Exit session
        </button>
        <div className="flex justify-center py-16"><Loader2 className="w-6 h-6 animate-spin text-muted-foreground" /></div>
      </>
    );
  }

  return (
    <>
      <button onClick={onBack} className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 mb-6 uppercase transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" /> Exit session
      </button>
      <h1 className="text-3xl font-bold mb-6">Review</h1>

      {/* ── Session complete ── */}
      {sessionDone || !current ? (
        <div className="bento-card rounded-3xl p-14 text-center max-w-lg mx-auto">
          <div className="text-6xl mb-5">🎉</div>
          <h3 className="font-serif text-3xl font-semibold mb-3">Session complete!</h3>
          <p className="text-muted-foreground mb-2">
            You reviewed <strong>{total}</strong> card{total !== 1 ? "s" : ""}.
          </p>
          <p className="text-muted-foreground mb-8">
            Good/Easy:{" "}
            <span className="text-green-600 font-semibold font-mono">{correct}</span>
            {" · "}
            Again/Hard:{" "}
            <span className="text-destructive font-semibold font-mono">{total - correct}</span>
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button onClick={restart} variant="outline" className="font-mono text-xs tracking-wide">
              <RotateCcw className="w-4 h-4 mr-1" /> Review again
            </Button>
            <Button onClick={onBack} className="bg-gradient-primary text-white font-mono text-xs tracking-wide active:scale-95 transition-all">
              Back to folders
            </Button>
          </div>
        </div>
      ) : (
        <>
          {/* Progress */}
          <div className="flex items-center justify-between font-mono text-xs text-muted-foreground tracking-wider mb-2">
            <span>{i + 1} of {total}</span>
            <span>{correct} correct so far</span>
          </div>
          <Progress value={progress} className="mb-8 h-[3px]" />

          {/* ── 3D Flip Card ── */}
          <div className="flashcard-scene mb-6" style={{ height: "300px" }}>
            <div
              className={cn("flashcard w-full h-full", flipped && "is-flipped")}
              onClick={() => setFlipped(!flipped)}
            >
              {/* Front — word */}
              <div
                className="flashcard-face border border-border/60 shadow-[0_8px_32px_rgba(43,64,128,0.10)]"
                style={{ background: "linear-gradient(160deg, #FFFFFF 0%, #F5F3F9 100%)" }}
              >
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-4">Tap to reveal</p>
                <h2 className="font-serif text-5xl font-bold text-primary leading-tight">{current.word}</h2>
              </div>

              {/* Back — definition */}
              <div
                className="flashcard-back flashcard-face shadow-[0_8px_32px_rgba(43,64,128,0.18)]"
                style={{ background: "linear-gradient(160deg, #2B4080 0%, #1a2d60 100%)" }}
              >
                <p className="text-white/90 text-lg leading-relaxed mb-4 max-w-sm">{current.definition}</p>
                {current.example && (
                  <p className="italic text-white/55 text-sm border-t border-white/20 pt-4 mt-1 max-w-sm">
                    "{current.example}"
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Rating buttons or hint */}
          {flipped ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <Button
                variant="outline"
                onClick={() => rate("again")}
                className="border-destructive/40 text-destructive hover:bg-destructive/8 font-mono text-[11px] tracking-wider h-11 active:scale-95 transition-all"
              >
                Again
              </Button>
              <Button
                variant="outline"
                onClick={() => rate("hard")}
                className="hover:bg-muted font-mono text-[11px] tracking-wider h-11 active:scale-95 transition-all"
              >
                Hard
              </Button>
              <Button
                variant="outline"
                onClick={() => rate("good")}
                className="border-green-400/40 text-green-700 hover:bg-green-50 font-mono text-[11px] tracking-wider h-11 active:scale-95 transition-all"
              >
                Good
              </Button>
              <Button
                onClick={() => rate("easy")}
                className="bg-gradient-primary text-white font-mono text-[11px] tracking-wider h-11 active:scale-95 transition-all"
              >
                Easy
              </Button>
            </div>
          ) : (
            <p className="text-center font-mono text-[11px] text-muted-foreground tracking-widest uppercase">
              Click the card to flip it
            </p>
          )}
        </>
      )}
    </>
  );
}

void Link;
