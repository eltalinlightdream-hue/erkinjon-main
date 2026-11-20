import type { ExamKind } from "@/lib/student-results";

/** Exam colours are semantic: terracotta = IELTS, olive = national CEFR. */
export const EXAM_ACCENT: Readonly<Record<ExamKind, { text: string; bar: string; track: string }>> =
  {
    ielts: {
      text: "text-[var(--tint-coral-fg)]",
      bar: "bg-[var(--terracotta)]",
      track: "bg-[var(--tint-coral-bg)]",
    },
    cefr: {
      text: "text-[var(--tint-green-fg)]",
      bar: "bg-[var(--olive)]",
      track: "bg-[var(--tint-green-bg)]",
    },
  };
