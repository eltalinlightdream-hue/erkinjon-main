import { FileCheck2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EXAM_META, formatScore, type StudentResult } from "@/lib/student-results";

type ProofDialogProps = {
  result: StudentResult;
  className?: string;
};

/**
 * "View certificate" button + dialog showing the redacted proof image.
 * Radix only mounts the content while open, so the full-size image is never
 * downloaded unless a visitor asks for it.
 */
export function ProofDialog({ result, className }: ProofDialogProps) {
  const { proof } = result;
  if (!proof) return null;

  const noun = proof.kind === "certificate" ? "certificate" : "official result";
  const score = `${EXAM_META[result.exam].label} ${formatScore(result.exam, result.overall)}`;
  const isNarrow = proof.width / proof.height < 0.66;

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "group/proof inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-[12px] font-medium text-foreground cursor-pointer transition-all duration-200",
          "hover:border-primary/40 hover:text-primary hover:-translate-y-px active:translate-y-0",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
        aria-label={`View ${result.name}'s ${noun}`}
      >
        <FileCheck2
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover/proof:scale-110"
          strokeWidth={1.8}
        />
        View {noun}
      </DialogTrigger>
      <DialogContent
        className={cn(
          "w-[calc(100%-2rem)] max-h-[90vh] gap-0 overflow-hidden rounded-2xl p-0 sm:rounded-2xl bg-card",
          isNarrow ? "max-w-md" : "max-w-3xl",
        )}
      >
        <div className="border-b border-border px-5 py-4 pr-12">
          <DialogTitle className="font-serif text-lg font-normal">
            {result.name} · {score}
          </DialogTitle>
          <DialogDescription className="mt-1.5 flex items-start gap-1.5 text-[12px] leading-snug">
            <ShieldCheck
              className="mt-px w-3.5 h-3.5 shrink-0 text-[var(--olive)]"
              strokeWidth={1.8}
            />
            Photo, ID numbers, certificate number and QR code are hidden to protect the
            student&apos;s privacy.
          </DialogDescription>
        </div>
        <div className="max-h-[calc(90vh-5.5rem)] overflow-y-auto bg-[var(--paper-deep)] p-3 sm:p-5">
          <img
            src={proof.src}
            width={proof.width}
            height={proof.height}
            alt={`${result.name}'s ${score} ${noun}, with personal details hidden`}
            decoding="async"
            className="mx-auto h-auto w-full rounded-lg shadow-warm"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
