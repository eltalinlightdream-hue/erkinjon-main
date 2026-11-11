import { useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import {
  Loader2,
  MailWarning,
  MoreHorizontal,
  Pencil,
  Search,
  ShieldCheck,
  Trash2,
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
import { isAdminEmail } from "@/lib/admin-config";
import {
  adminDeleteStudent,
  adminUpdateStudentName,
  type AdminStudent,
} from "@/lib/admin.functions";
import { formatDate, formatRelative } from "./admin-format";

interface StudentsPanelProps {
  students: AdminStudent[];
  isLoading: boolean;
  onReload: () => Promise<void>;
}

export function StudentsPanel({ students, isLoading, onReload }: StudentsPanelProps) {
  const updateNameFn = useServerFn(adminUpdateStudentName);
  const deleteStudentFn = useServerFn(adminDeleteStudent);

  const [search, setSearch] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [editing, setEditing] = useState<AdminStudent | null>(null);
  const [editName, setEditName] = useState("");
  const [deleting, setDeleting] = useState<AdminStudent | null>(null);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return students.filter((student) => {
      if (!query) return true;
      return [student.email, student.full_name]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(query));
    });
  }, [students, search]);

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
                <th className="py-3 pr-4 font-medium">Tests</th>
                <th className="py-3 pr-4 font-medium">Avg band</th>
                <th className="py-3 pr-4 font-medium">Words saved</th>
                <th className="py-3 pr-4 font-medium">Last sign-in</th>
                <th className="py-3 pr-4 font-medium">Joined</th>
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
                      ) : (
                        <Badge variant="secondary" className="bg-accent">
                          Student
                        </Badge>
                      )}
                    </td>
                    <td className="py-3 pr-4 whitespace-nowrap">
                      <span className="font-medium">{student.tests_total}</span>
                      {student.tests_week > 0 && (
                        <span className="text-xs text-muted-foreground ml-1.5">
                          +{student.tests_week} this week
                        </span>
                      )}
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">
                      {student.avg_band !== null ? student.avg_band.toFixed(1) : "—"}
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">
                      {student.words_total}
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">
                      {formatRelative(student.last_sign_in_at)}
                    </td>
                    <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">
                      {formatDate(student.created_at)}
                    </td>
                    <td className="py-3 text-right">
                      <div className="inline-flex items-center gap-2">
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
