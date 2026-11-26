import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PracticeFlow } from "@/components/speaking-practice/practice-flow";

export const Route = createFileRoute("/speaking_/practice_/mock")({
  head: () => ({
    meta: [
      { title: "IELTS Speaking Mock Test | Abduraimov Erkinjon" },
      {
        name: "description",
        content:
          "A full IELTS Speaking mock test — Parts 1, 2 and 3 with real exam timings, read aloud.",
      },
    ],
  }),
  component: MockTest,
});

function MockTest() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-10">
        <PracticeFlow mode="mock" />
      </section>
    </SiteLayout>
  );
}
