import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, Download, FolderOpen, Mic, Trash2, Video } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { extensionFor } from "@/lib/speaking-practice/recorder";
import {
  MAX_RECORDINGS,
  deleteRecording,
  formatBytes,
  listRecordings,
  recordingFileName,
  type StoredRecording,
} from "@/lib/speaking-practice/recordings-db";

export const Route = createFileRoute("/speaking_/practice_/recordings")({
  head: () => ({
    meta: [
      { title: "My Speaking Recordings | Abduraimov Erkinjon" },
      {
        name: "description",
        content: "Your IELTS Speaking practice recordings, kept on this device.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Recordings,
});

const DATE = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" });

function RecordingItem({
  rec,
  onDelete,
}: {
  rec: StoredRecording;
  onDelete: (id: string) => void;
}) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const u = URL.createObjectURL(rec.blob);
    setUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [rec]);

  const Icon = rec.type === "video" ? Video : Mic;
  const minutes = Math.max(1, Math.round(rec.durationSeconds / 60));
  return (
    <li className="bento-card flex flex-col gap-4 p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="icon-tile icon-tile-blue h-10 w-10 shrink-0">
            <Icon className="h-4 w-4" />
          </span>
          <div>
            <p className="font-medium">{rec.label}</p>
            <p className="text-sm text-muted-foreground">
              {DATE.format(rec.createdAt)} · {minutes} min · {formatBytes(rec.size)}
            </p>
          </div>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={`Delete recording from ${DATE.format(rec.createdAt)}`}
          onClick={() => onDelete(rec.id)}
        >
          <Trash2 aria-hidden />
        </Button>
      </div>
      {url &&
        (rec.type === "video" ? (
          <video src={url} controls playsInline className="w-full rounded-xl bg-foreground" />
        ) : (
          <audio src={url} controls className="w-full" />
        ))}
      {url && (
        <Button asChild variant="outline" className="self-start">
          <a href={url} download={recordingFileName(rec, extensionFor(rec.mimeType))}>
            <Download aria-hidden />
            Download
          </a>
        </Button>
      )}
    </li>
  );
}

function Recordings() {
  const [items, setItems] = useState<StoredRecording[] | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    listRecordings()
      .then(setItems)
      .catch(() => {
        setHasError(true);
        setItems([]);
      });
  }, []);

  async function handleDelete(id: string) {
    if (!window.confirm("Delete this recording from this device? This cannot be undone.")) return;
    try {
      await deleteRecording(id);
      setItems((prev) => (prev ?? []).filter((r) => r.id !== id));
    } catch {
      toast.error("Could not delete the recording.");
    }
  }

  return (
    <SiteLayout>
      <section className="container mx-auto max-w-3xl px-4 py-12">
        <Link
          to="/speaking/practice"
          className="mb-8 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Speaking practice
        </Link>
        <div className="ink-bleed mb-10 text-center">
          <p className="eyebrow mb-4 text-primary">On this device only</p>
          <h1 className="mb-4 font-serif text-3xl md:text-4xl">My Recordings</h1>
          <p className="mx-auto max-w-md text-muted-foreground">
            Listen to your answers again and download the ones you want to keep.
          </p>
          <div className="ornament-rule mx-auto mt-8 max-w-xs" aria-hidden="true">
            <span className="select-none font-serif text-lg leading-none">❦</span>
          </div>
        </div>
        <p className="mb-8 flex items-start gap-2 rounded-xl bg-[var(--tint-ochre-bg)] px-4 py-3 text-sm text-[var(--tint-ochre-fg)]">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden />
          Recordings are never uploaded. Only the newest {MAX_RECORDINGS} are kept, and clearing
          your browser data removes them — download the ones you want to keep.
        </p>

        {hasError && (
          <p role="alert" className="mb-6 text-sm text-destructive">
            This browser cannot open the recordings storage (private mode can block it).
          </p>
        )}

        {items === null ? (
          <p className="text-muted-foreground">Loading…</p>
        ) : items.length === 0 ? (
          <div className="bento-card flex flex-col items-center gap-3 p-8 text-center">
            <span className="icon-tile icon-tile-blue mb-2 h-14 w-14">
              <FolderOpen className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <p className="font-serif text-xl">No recordings yet.</p>
            <p className="text-sm text-muted-foreground">
              Choose “Audio” or “Video + audio” before you start a session to record yourself.
            </p>
            <Button asChild>
              <Link to="/speaking/practice">Start practising</Link>
            </Button>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {items.map((rec) => (
              <RecordingItem key={rec.id} rec={rec} onDelete={(id) => void handleDelete(id)} />
            ))}
          </ul>
        )}
      </section>
    </SiteLayout>
  );
}
