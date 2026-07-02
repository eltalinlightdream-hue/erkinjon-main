import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Check, Copy, KeyRound, Loader2, Plus, Ticket, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { adminCreateCodes, adminDeleteCode, type AdminCode } from "@/lib/admin.functions";
import { formatDate } from "./admin-format";

interface CodesPanelProps {
  codes: AdminCode[];
  isLoading: boolean;
  onReload: () => Promise<void>;
}

export function CodesPanel({ codes, isLoading, onReload }: CodesPanelProps) {
  const createCodesFn = useServerFn(adminCreateCodes);
  const deleteCodeFn = useServerFn(adminDeleteCode);

  const [count, setCount] = useState("1");
  const [note, setNote] = useState("");
  const [creating, setCreating] = useState(false);
  const [freshCodes, setFreshCodes] = useState<string[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [deletingCode, setDeletingCode] = useState<string | null>(null);
  const [busyCode, setBusyCode] = useState<string | null>(null);

  const availableCount = useMemo(() => codes.filter((c) => !c.used_by).length, [codes]);

  async function generate(event: React.FormEvent) {
    event.preventDefault();
    const parsed = Number.parseInt(count, 10);
    if (!Number.isFinite(parsed) || parsed < 1 || parsed > 50) {
      toast.error("Enter a code count between 1 and 50.");
      return;
    }
    setCreating(true);
    try {
      const result = await createCodesFn({
        data: { count: parsed, note: note.trim() || undefined },
      });
      setFreshCodes(result.codes);
      setNote("");
      setCount("1");
      await onReload();
      toast.success(
        parsed === 1 ? "1 activation code created." : `${parsed} activation codes created.`,
      );
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not create codes.");
    } finally {
      setCreating(false);
    }
  }

  async function copyCode(code: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode((current) => (current === code ? null : current)), 1500);
    } catch {
      toast.error("Could not copy to clipboard.");
    }
  }

  async function confirmDelete() {
    if (!deletingCode) return;
    const code = deletingCode;
    setDeletingCode(null);
    setBusyCode(code);
    try {
      await deleteCodeFn({ data: { code } });
      await onReload();
      toast.success("Code deleted.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not delete this code.");
    } finally {
      setBusyCode(null);
    }
  }

  return (
    <div className="space-y-4">
      <Card className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <KeyRound className="w-4 h-4 text-secondary" />
          <h2 className="font-semibold">Generate activation codes</h2>
        </div>
        <form onSubmit={generate} className="flex flex-wrap items-center gap-3">
          <Input
            type="number"
            min={1}
            max={50}
            value={count}
            onChange={(event) => setCount(event.target.value)}
            className="w-24"
            aria-label="Number of codes"
          />
          <Input
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Note (e.g. July group, Instagram promo)"
            maxLength={200}
            className="flex-1 min-w-52"
          />
          <Button type="submit" disabled={creating} className="bg-gradient-primary text-white">
            {creating ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Plus className="w-4 h-4 mr-1" />
            )}
            Generate
          </Button>
        </form>

        {freshCodes.length > 0 && (
          <div className="mt-4 rounded-xl border border-gold/30 bg-gold/5 p-4">
            <p className="font-mono text-[11px] text-muted-foreground tracking-wider uppercase mb-2">
              New codes — copy and share them now
            </p>
            <div className="flex flex-wrap gap-2">
              {freshCodes.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => copyCode(code)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 font-mono text-xs hover:border-gold/50 transition-colors"
                >
                  {code}
                  {copiedCode === code ? (
                    <Check className="w-3 h-3 text-secondary" />
                  ) : (
                    <Copy className="w-3 h-3 text-muted-foreground" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </Card>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4 text-secondary" />
            <h2 className="font-semibold">All codes</h2>
          </div>
          <p className="font-mono text-[11px] text-muted-foreground tracking-wide">
            {availableCount} available · {codes.length - availableCount} used
          </p>
        </div>

        {isLoading ? (
          <div className="py-16 text-center">
            <Loader2 className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted-foreground">
                  <th className="py-3 pr-4 font-medium">Code</th>
                  <th className="py-3 pr-4 font-medium">Status</th>
                  <th className="py-3 pr-4 font-medium">Note</th>
                  <th className="py-3 pr-4 font-medium">Created</th>
                  <th className="py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {codes.map((code) => {
                  const isUsed = Boolean(code.used_by);
                  return (
                    <tr key={code.code} className="border-b border-border last:border-0">
                      <td className="py-3 pr-4">
                        <button
                          type="button"
                          onClick={() => copyCode(code.code)}
                          className={cn(
                            "inline-flex items-center gap-1.5 font-mono text-xs rounded-md px-2 py-1 -ml-2 transition-colors hover:bg-accent",
                            isUsed && "text-muted-foreground line-through decoration-border",
                          )}
                          title="Copy code"
                        >
                          {code.code}
                          {copiedCode === code.code ? (
                            <Check className="w-3 h-3 text-secondary" />
                          ) : (
                            <Copy className="w-3 h-3 text-muted-foreground/60" />
                          )}
                        </button>
                      </td>
                      <td className="py-3 pr-4">
                        {isUsed ? (
                          <div>
                            <Badge variant="secondary" className="bg-accent">
                              Used
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">
                              {code.used_by_email ?? code.used_by_name ?? "Unknown student"}
                              {code.used_at ? ` · ${formatDate(code.used_at)}` : ""}
                            </p>
                          </div>
                        ) : (
                          <Badge className="bg-gold/15 text-gold border-gold/30">Available</Badge>
                        )}
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground max-w-48 truncate">
                        {code.note || "—"}
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">
                        {formatDate(code.created_at)}
                      </td>
                      <td className="py-3 text-right">
                        <Button
                          size="sm"
                          variant="ghost"
                          disabled={isUsed || busyCode === code.code}
                          onClick={() => setDeletingCode(code.code)}
                          aria-label="Delete code"
                          className="text-muted-foreground hover:text-destructive"
                        >
                          {busyCode === code.code ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {codes.length === 0 && (
              <p className="py-10 text-center text-sm text-muted-foreground">
                No activation codes yet — generate some above.
              </p>
            )}
          </div>
        )}
      </Card>

      <AlertDialog open={!!deletingCode} onOpenChange={(open) => !open && setDeletingCode(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete code {deletingCode}?</AlertDialogTitle>
            <AlertDialogDescription>
              Anyone holding this code will no longer be able to redeem it.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={confirmDelete}
            >
              Delete code
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
