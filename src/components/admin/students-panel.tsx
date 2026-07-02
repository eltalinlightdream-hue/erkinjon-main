import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import {
  Crown,
  Loader2,
  MailWarning,
  MonitorSmartphone,
  MoreHorizontal,
  Pencil,
  Search,
  ShieldCheck,
  Trash2,
  Unplug,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { isAdminEmail } from "@/lib/admin-config";
import {
  adminDeleteStudent,
  adminResetStudentDevice,
  adminSetPremium,
  adminUpdateStudentName,
  type AdminStudent,
} from "@/lib/admin.functions";
import { formatDate, formatRelative } from "./admin-format";

type StatusFilter = "all" | "premium" | "free";

const FILTERS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "premium", label: "Premium" },
  { value: "free", label: "Free" },
];

interface StudentsPanelProps {
  students: AdminStudent[];
  isLoading: boolean;
  onReload: () => Promise<void>;
}

export function StudentsPanel({ students, isLoading, onReload }: StudentsPanelProps) {
  const setPremiumFn = useServerFn(adminSetPremium);
  const resetDeviceFn = useServerFn(adminResetStudentDevice);
  const updateNameFn = useServerFn(adminUpdateStudentName);
  const deleteStudentFn = useServerFn(adminDeleteStudent);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<StatusFilter>("all");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [editing, setEditing] = useState<AdminStudent | null>(null);
  const [editName, setEditName] = useState("");
  const [deleting, setDeleting] = useState<AdminStudent | null>(null);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return students.filter((student) => {
      if (filter === "premium" && !student.is_premium) return false;
      if (filter === "free" && student.is_premium) return false;
      if (!query) return true;
      return [student.email, student.full_name]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(query));
    });
  }, [students, search, filter]);

  async function runAction(
    studentId: string,
    action: () => Promise<unknown>,
    successMessage: string,
  ) {
    setBusyId(studentId);
    try {
      await action();
      await onReload();
      toast.success(successMessage);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setBusyId(null);
    }
  }

  const togglePremium = (student: AdminStudent) =>
    runAction(
      student.id,
      () => setPremiumFn({ data: { userId: student.id, premium: !student.is_premium } }),
      !student.is_premium
        ? `Premium turned on for ${student.email ?? "student"}.`
        : `Premium turned off for ${student.email ?? "student"}.`,
    );

  const resetDevice = (student: AdminStudent) =>
    runAction(
      student.id,
      () => resetDeviceFn({ data: { userId: student.id } }),
      "Device binding cleared — their next device will be re-bound automatically.",
    );

  async function saveName() {
    if (!editing) return;
    const student = editing;
    setEditing(null);
    await runAction(
      student.id,
      () => updateNameFn({ data: { userId: student.id, fullName: editName } }),
      "Name updated.",
    );
  }

  async function confirmDelete() {
    if (!deleting) return;
    const student = deleting;
    setDeleting(null);
    await runAction(
      student.id,
      () => deleteStudentFn({ data: { userId: student.id } }),
      `${student.email ?? "Student"} deleted.`,
    );
  }

  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <div className="relative flex-1 min-w-56">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search students by email or name"
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

      {isLoading ? (
        <div className="py-16 text-center">
          <Loader2 className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="py-3 pr-4 font-medium">Student</th>
                <th className="py-3 pr-4 font-medium">Status</th>
                <th className="py-3 pr-4 font-medium">Last sign-in</th>
                <th className="py-3 pr-4 font-medium">Device</th>
                <th className="py-3 pr-4 font-medium">Activated</th>
                <th className="py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => {
                const isOwner = isAdminEmail(student.email);
                const isBusy = busyId === student.id;
                return (
                  <tr key={student.id} className="border-b border-border last:border-0">
                    <td className="py-3 pr-4">
                      <div className="flex items-center gap-2">
                        <div>
                          <p className="font-medium leading-tight">{student.email || "—"}</p>
                          <p className="text-xs text-muted-foreground">
                            {student.full_name || "No name"}
                          </p>
                        </div>
                        {!student.email_confirmed && !isOwner && (
                          <span title="Email not confirmed">
                            <MailWarning className="w-3.5 h-3.5 text-[#C07850]" />
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 pr-4">
                      {isOwner ? (
                        <Badge className="bg-gradient-primary text-white border-transparent">
                          <ShieldCheck className="w-3 h-3 mr-1" /> Owner
                        </Badge>
                      ) : student.is_premium ? (
                        <Badge className="bg-gold/15 text-gold border-gold/30">
                          <Crown className="w-3 h-3 mr-1" /> Premium
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-accent">
                          Free
                        </Badge>
                      )}
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">
                      {formatRelative(student.last_sign_in_at)}
                    </td>
                    <td className="py-3 pr-4">
                      {student.device_bound ? (
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MonitorSmartphone className="w-3.5 h-3.5 text-secondary" /> Bound
                        </span>
                      ) : (
                        <span className="text-xs text-muted-foreground/60">—</span>
                      )}
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">
                      {formatDate(student.activated_at)}
                    </td>
                    <td className="py-3 text-right">
                      <div className="inline-flex items-center gap-2">
                        {!isOwner && (
                          <Button
                            size="sm"
                            variant={student.is_premium ? "outline" : "default"}
                            onClick={() => togglePremium(student)}
                            disabled={isBusy}
                            className="min-w-20"
                          >
                            {isBusy ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : student.is_premium ? (
                              "Turn off"
                            ) : (
                              "Turn on"
                            )}
                          </Button>
                        )}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              size="sm"
                              variant="ghost"
                              disabled={isBusy}
                              aria-label="More actions"
                            >
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => {
                                setEditing(student);
                                setEditName(student.full_name ?? "");
                              }}
                            >
                              <Pencil className="w-4 h-4 mr-2" /> Edit name
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              disabled={!student.device_bound}
                              onClick={() => resetDevice(student)}
                            >
                              <Unplug className="w-4 h-4 mr-2" /> Reset device binding
                            </DropdownMenuItem>
                            {!isOwner && (
                              <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                  className="text-destructive focus:text-destructive"
                                  onClick={() => setDeleting(student)}
                                >
                                  <Trash2 className="w-4 h-4 mr-2" /> Delete account
                                </DropdownMenuItem>
                              </>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <p className="py-10 text-center text-sm text-muted-foreground">No students found.</p>
          )}
        </div>
      )}

      <Dialog open={!!editing} onOpenChange={(open) => !open && setEditing(null)}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit student name</DialogTitle>
            <DialogDescription>{editing?.email}</DialogDescription>
          </DialogHeader>
          <Input
            value={editName}
            onChange={(event) => setEditName(event.target.value)}
            placeholder="Full name"
            maxLength={120}
            autoFocus
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditing(null)}>
              Cancel
            </Button>
            <Button onClick={saveName} disabled={!editName.trim()}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleting} onOpenChange={(open) => !open && setDeleting(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete {deleting?.email ?? "this student"}?</AlertDialogTitle>
            <AlertDialogDescription>
              This permanently removes the account together with its progress, vocabulary, notes and
              bookmarks. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={confirmDelete}
            >
              Delete account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
}
