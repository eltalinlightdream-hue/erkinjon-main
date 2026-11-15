import { createFileRoute } from "@tanstack/react-router";
import { getWritingSample } from "@/lib/writing-samples.functions";
import { SampleDetailPage, SampleNotFound } from "@/components/writing-samples/sample-detail";
import { sampleMeta } from "@/components/writing-samples/sample-meta";

export const Route = createFileRoute("/writing_/essay/$id")({
  loader: ({ params }) =>
    /^t2-\d{1,4}$/.test(params.id) ? getWritingSample({ data: { task: 2, id: params.id } }) : null,
  staleTime: 10 * 60_000,
  head: ({ loaderData }) => ({ meta: sampleMeta(2, loaderData) }),
  component: WritingEssayView,
});

function WritingEssayView() {
  const result = Route.useLoaderData();
  if (!result) return <SampleNotFound task={2} />;
  return <SampleDetailPage key={result.sample.id} task={2} result={result} />;
}
