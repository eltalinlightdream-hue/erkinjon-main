import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PracticeFlow } from "@/components/speaking-practice/practice-flow";

export const Route = createFileRoute("/speaking_/practice_/general")({
  head: () => ({
    meta: [
      { title: "IELTS Speaking General Training | Abduraimov Erkinjon" },
      {
        name: "description",
        content:
          "Practise IELTS Speaking Part 1, Part 2 cue cards or Part 3 discussion questions, read aloud with timers.",
      },
    ],
  }),
  component: GeneralTraining,
});

function GeneralTraining() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-10">
        <PracticeFlow mode="general" />
      </section>
    </SiteLayout>
  );
}
