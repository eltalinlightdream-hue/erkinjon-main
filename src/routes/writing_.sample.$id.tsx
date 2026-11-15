import { createFileRoute } from "@tanstack/react-router";
import { getWritingSample } from "@/lib/writing-samples.functions";
import { SampleDetailPage, SampleNotFound } from "@/components/writing-samples/sample-detail";
import { sampleMeta } from "@/components/writing-samples/sample-meta";

export const Route = createFileRoute("/writing_/sample/$id")({
  loader: ({ params }) =>
    /^t1-\d{1,4}$/.test(params.id) ? getWritingSample({ data: { task: 1, id: params.id } }) : null,
  staleTime: 10 * 60_000,
  head: ({ loaderData }) => ({ meta: sampleMeta(1, loaderData) }),
  component: WritingSampleView,
});

function WritingSampleView() {
  const result = Route.useLoaderData();
  if (!result) return <SampleNotFound task={1} />;
  return <SampleDetailPage key={result.sample.id} task={1} result={result} />;
}
