import { AlertTriangle, Info, Mic, MicOff, Play, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeviceCheck } from "@/components/speaking-practice/device-check";
import { stopStream } from "@/lib/speaking-practice/recorder";
import type { RecordingType } from "@/lib/speaking-practice/types";
import { cn } from "@/lib/utils";

const CHOICES = [
  { type: "audio", label: "Audio", help: "Record your voice", Icon: Mic },
  { type: "video", label: "Video + audio", help: "Record yourself with the camera", Icon: Video },
  { type: "none", label: "No recording", help: "Just practise", Icon: MicOff },
] as const;

type Props = {
  recordingType: RecordingType;
  onRecordingTypeChange: (type: RecordingType) => void;
  stream: MediaStream | null;
  onStreamChange: (stream: MediaStream | null) => void;
  isIOS: boolean;
  isStarting: boolean;
  error: string | null;
  onBack?: () => void;
  onStart: () => void;
};

/** Second step before a session: choose recording, check the microphone, then start. */
export function RecordingStep({
  recordingType,
  onRecordingTypeChange,
  stream,
  onStreamChange,
  isIOS,
  isStarting,
  error,
  onBack,
  onStart,
}: Props) {
  const canStart = recordingType === "none" || !!stream;

  function choose(type: RecordingType) {
    onRecordingTypeChange(type);
    // A video stream is needed for video; an audio-only stream is not enough (and vice versa).
    const hasVideo = (stream?.getVideoTracks().length ?? 0) > 0;
    if (stream && (type === "none" || (type === "video") !== hasVideo)) {
      stopStream(stream);
      onStreamChange(null);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <section className="bento-card flex flex-col gap-5 p-5 sm:p-6">
        <div>
          <h2 className="font-serif text-xl">Recording</h2>
          <p className="text-sm text-muted-foreground">
            Recordings stay only on this device. They are never uploaded.
          </p>
        </div>
        <div role="radiogroup" aria-label="Recording" className="grid gap-3 sm:grid-cols-3">
          {CHOICES.map(({ type, label, help, Icon }) => {
            const isSelected = type === recordingType;
            return (
              <button
                key={type}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => choose(type)}
                className={cn(
                  "flex min-h-20 flex-col items-start gap-1 rounded-xl border-2 p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isSelected
                    ? "border-primary bg-[var(--terracotta-wash)]"
                    : "border-border bg-card hover:border-primary/40",
                )}
              >
                <span className="flex items-center gap-2 font-medium">
                  <Icon
                    className={cn("size-5", isSelected ? "text-primary" : "text-muted-foreground")}
                    aria-hidden
                  />
                  {label}
                </span>
                <span className="text-sm text-muted-foreground">{help}</span>
              </button>
            );
          })}
        </div>
        {recordingType !== "none" && (
          <DeviceCheck
            key={recordingType}
            type={recordingType}
            stream={stream}
            onReady={onStreamChange}
          />
        )}
      </section>

      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
        <p className="flex items-start gap-2">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
          Questions are read aloud by your device&apos;s voice. Turn the sound on.
        </p>
        {isIOS && (
          <p className="flex items-start gap-2">
            <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
            On iPhone, keep the screen on and stay on this page while you practise.
          </p>
        )}
      </div>

      {error && (
        <p
          role="alert"
          className="flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          <AlertTriangle className="size-4 shrink-0" aria-hidden />
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        {onBack && (
          <Button type="button" variant="ghost" size="lg" onClick={onBack}>
            Back
          </Button>
        )}
        <Button type="button" size="lg" onClick={onStart} disabled={!canStart || isStarting}>
          <Play aria-hidden />
          {isStarting ? "Starting…" : "Start practice"}
        </Button>
      </div>
    </div>
  );
}
