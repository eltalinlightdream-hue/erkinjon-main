import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Mic, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  classifyMediaError,
  getMediaStream,
  recordingSupported,
} from "@/lib/speaking-practice/recorder";
import type { RecordingType } from "@/lib/speaking-practice/types";

const ERRORS = {
  denied:
    "Permission was denied. Allow the microphone (and camera) for this site in your browser settings, then try again.",
  notFound: "No microphone or camera was found on this device.",
  unsupported:
    "This browser cannot record. Try the latest Chrome or Safari, or choose “No recording”.",
} as const;

interface DeviceCheckProps {
  type: Exclude<RecordingType, "none">;
  stream: MediaStream | null;
  onReady: (stream: MediaStream) => void;
}

/**
 * Asks for microphone (and camera) permission and shows a live level meter.
 * The stream is then reused for the session so the browser does not ask twice.
 */
export function DeviceCheck({ type, stream, onReady }: DeviceCheckProps) {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [level, setLevel] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Live microphone level from the stream.
  useEffect(() => {
    if (!stream || stream.getAudioTracks().length === 0) return;
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 512;
    const source = ctx.createMediaStreamSource(stream);
    source.connect(analyser);
    const data = new Uint8Array(analyser.fftSize);
    let raf = 0;
    const tick = () => {
      analyser.getByteTimeDomainData(data);
      let peak = 0;
      for (const v of data) peak = Math.max(peak, Math.abs(v - 128));
      setLevel(Math.min(1, peak / 64));
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      source.disconnect();
      ctx.close().catch(() => undefined);
    };
  }, [stream]);

  useEffect(() => {
    if (videoRef.current && stream && type === "video") videoRef.current.srcObject = stream;
  }, [stream, type]);

  async function check() {
    setBusy(true);
    setError(null);
    try {
      if (!recordingSupported()) {
        throw Object.assign(new Error("unsupported"), { name: "NotSupportedError" });
      }
      onReady(await getMediaStream(type));
    } catch (e) {
      const { kind, message } = classifyMediaError(e);
      setError(kind === "other" ? `Could not start the microphone: ${message}` : ERRORS[kind]);
    } finally {
      setBusy(false);
    }
  }

  const isVideo = type === "video";
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-border bg-background/60 p-4 sm:p-5">
      <p className="eyebrow text-muted-foreground">
        {isVideo ? "Camera & microphone check" : "Microphone check"}
      </p>
      {!stream ? (
        <Button
          type="button"
          variant="outline"
          onClick={check}
          disabled={busy}
          className="self-start"
        >
          {isVideo ? <Video aria-hidden /> : <Mic aria-hidden />}
          {busy
            ? "Waiting for permission…"
            : isVideo
              ? "Check camera and microphone"
              : "Check microphone"}
        </Button>
      ) : (
        <div className="flex flex-col gap-3">
          {isVideo && (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="aspect-video w-full max-w-sm -scale-x-100 rounded-xl bg-foreground object-cover"
            />
          )}
          <p className="flex items-center gap-2 font-medium text-[var(--tint-green-fg)]">
            <CheckCircle2 className="size-5" aria-hidden />
            Working — say something, the bar should move.
          </p>
          <div
            className="h-2.5 w-full max-w-sm overflow-hidden rounded-full bg-muted"
            role="meter"
            aria-label="Microphone level"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(level * 100)}
          >
            <div
              className="h-full rounded-full bg-secondary transition-[width] duration-75"
              style={{ width: `${Math.round(level * 100)}%` }}
            />
          </div>
        </div>
      )}
      {error && (
        <p
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          {error}
        </p>
      )}
    </div>
  );
}
