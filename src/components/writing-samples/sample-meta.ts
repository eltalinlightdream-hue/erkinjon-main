import {
  sampleLabel,
  type SampleDetailResult,
  type SampleTask,
} from "@/lib/writing-samples-library";

/* ── SEO helpers shared by both detail routes ─────────────────────────── */

export function sampleMeta(task: SampleTask, result: SampleDetailResult | null | undefined) {
  if (!result) {
    return [
      { title: "Sample not found | Abduraimov Erkinjon" },
      { name: "robots", content: "noindex" },
    ];
  }
  const s = result.sample;
  const kind = task === 1 ? "Task 1" : "Task 2";
  const title = `${sampleLabel(task, s.number)}: ${s.type} — IELTS Writing ${kind} Sample | Abduraimov Erkinjon`;
  const summary = s.question.length > 140 ? `${s.question.slice(0, 137).trimEnd()}…` : s.question;
  const words = s.wordCount ? ` ${s.wordCount}-word model answer.` : "";
  const description =
    `IELTS Writing ${kind} ${s.type.toLowerCase()} sample.${words} ${summary}`.slice(0, 300);
  const image = s.images[0]?.full.src;
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "article" },
    ...(image ? [{ property: "og:image", content: image }] : []),
  ];
}
