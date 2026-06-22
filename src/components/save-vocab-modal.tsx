import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, BookmarkPlus } from "lucide-react";
import { toast } from "sonner";
import { listFolders, addWord } from "@/lib/vocabulary.functions";

interface Props {
  open: boolean;
  onClose: () => void;
  word: string;
  definition: string;
  example: string;
}

export function SaveVocabModal({ open, onClose, word, definition, example }: Props) {
  const fetchFolders = useServerFn(listFolders);
  const addWordFn = useServerFn(addWord);
  const qc = useQueryClient();
  const [folderId, setFolderId] = useState<string>("");
  const [draftWord, setDraftWord] = useState(word);
  const [draftDefinition, setDraftDefinition] = useState(definition);
  const [draftExample, setDraftExample] = useState(example);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!open) return;
    setDraftWord(word);
    setDraftDefinition(definition);
    setDraftExample(example);
  }, [open, word, definition, example]);

  const { data: folders } = useQuery({
    queryKey: ["folders"],
    queryFn: () => fetchFolders(),
    enabled: open,
  });

  const onSave = async () => {
    const target = folderId || folders?.[0]?.id;
    if (!target) return;
    setBusy(true);
    try {
      await addWordFn({
        data: {
          folderId: target,
          word: draftWord,
          definition: draftDefinition,
          example: draftExample,
        },
      });
      qc.invalidateQueries({ queryKey: ["folders"] });
      toast.success(`Saved "${draftWord}" to your vocabulary.`);
      onClose();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Could not save.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl flex items-center gap-2">
            <BookmarkPlus className="w-5 h-5 text-secondary" /> Save to Vocabulary
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 text-sm">
          <div>
            <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-1.5 block">Word</label>
            <Input
              value={draftWord}
              onChange={(e) => setDraftWord(e.target.value)}
              className="font-mono tracking-wide h-10 rounded-xl"
            />
          </div>
          <div>
            <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-1.5 block">Definition</label>
            <Textarea
              value={draftDefinition}
              onChange={(e) => setDraftDefinition(e.target.value)}
              placeholder="Add a definition"
              className="font-mono text-sm rounded-xl resize-none"
            />
          </div>
          <div>
            <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-1.5 block">Example</label>
            <Textarea
              value={draftExample}
              onChange={(e) => setDraftExample(e.target.value)}
              placeholder="Add an example sentence"
              className="font-mono text-sm rounded-xl resize-none"
            />
          </div>
          <div className="pt-1">
            <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-1.5 block">Folder</label>
            <Select value={folderId || folders?.[0]?.id || ""} onValueChange={setFolderId}>
              <SelectTrigger className="h-10 rounded-xl font-mono text-sm">
                <SelectValue placeholder="Choose folder" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {(folders ?? []).map((f) => (
                  <SelectItem key={f.id} value={f.id} className="font-mono text-sm">
                    {f.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="ghost" onClick={onClose} className="font-mono text-xs tracking-wide">
            Cancel
          </Button>
          <Button
            onClick={onSave}
            disabled={busy || !draftWord.trim()}
            className="bg-gradient-primary text-white font-mono text-xs tracking-wide active:scale-95 transition-all"
          >
            {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
