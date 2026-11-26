import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, Download, FolderOpen, RotateCcw, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { extensionFor } from "@/lib/speaking-practice/recorder";
import { recordingFileName, type StoredRecording } from "@/lib/speaking-practice/recordings-db";

type Props = {
  label: string;
  activeSeconds: number;
  savedSeconds: number | null;
  isSignedIn: boolean;
  recording: StoredRecording | null;
  hasRecordingError: boolean;
  onAgain: () => void;
};

export function FinishScreen({
  label,
  activeSeconds,
  savedSeconds,
  isSignedIn,
  recording,
  hasRecordingError,
  onAgain,
}: Props) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!recording) return;
    const u = URL.createObjectURL(recording.blob);
    setUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [recording]);

  const shown = savedSeconds ?? activeSeconds;
  const minutes = Math.floor(shown / 60);
  const seconds = shown % 60;

  let saveNote: React.ReactNode;
  if (savedSeconds !== null) {
    saveNote = <p className="text-sm text-muted-foreground">Saved to your speaking progress.</p>;
  } else if (isSignedIn) {
    saveNote = (
      <p className="flex items-center gap-2 text-sm text-destructive" role="alert">
        <WifiOff className="size-4" aria-hidden />
        Could not save your practice time. Check your internet connection.
      </p>
    );
  } else {
    saveNote = (
      <p className="text-sm text-muted-foreground">
        <Link to="/auth" className="font-medium text-primary underline-offset-4 hover:underline">
          Sign in
        </Link>{" "}
        to keep your practice time and daily streak.
      </p>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-6">
      <div className="text-center">
        <p className="eyebrow mb-3 text-primary">{label}</p>
        <h1 className="font-serif text-4xl">Well done.</h1>
      </div>

      <div className="bento-card flex flex-col items-center gap-1 p-6 text-center">
        <p className="eyebrow text-muted-foreground">Speaking time</p>
        <p className="font-serif text-5xl tabular-nums text-foreground">
          {minutes}
          <span className="text-2xl text-muted-foreground">m</span>{" "}
          {String(seconds).padStart(2, "0")}
          <span className="text-2xl text-muted-foreground">s</span>
        </p>
        {saveNote}
      </div>

      {recording && url ? (
        <div className="bento-card flex flex-col gap-4 p-5">
          {recording.type === "video" ? (
            <video src={url} controls playsInline className="w-full rounded-xl bg-foreground" />
          ) : (
            <audio src={url} controls className="w-full" />
          )}
          <p className="flex items-start gap-2 rounded-xl bg-[var(--tint-ochre-bg)] px-3 py-2 text-sm text-[var(--tint-ochre-fg)]">
            <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden />
            This recording is only on this device. Download it to keep it — only the newest 10 are
            kept.
          </p>
          <Button asChild size="lg">
            <a href={url} download={recordingFileName(recording, extensionFor(recording.mimeType))}>
              <Download aria-hidden />
              Download recording
            </a>
          </Button>
        </div>
      ) : hasRecordingError ? (
        <p className="flex items-center gap-2 text-sm text-destructive" role="alert">
          <AlertTriangle className="size-4" aria-hidden />
          The recording could not be saved on this device.
        </p>
      ) : null}

      <div className="flex flex-wrap justify-center gap-3">
        <Button type="button" variant={recording ? "outline" : "default"} onClick={onAgain}>
          <RotateCcw aria-hidden />
          Practise again
        </Button>
        <Button asChild variant="ghost">
          <Link to="/speaking/practice">
            <ArrowLeft aria-hidden />
            Speaking practice
          </Link>
        </Button>
        {recording && (
          <Button asChild variant="ghost">
            <Link to="/speaking/practice/recordings">
              <FolderOpen aria-hidden />
              My recordings
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
