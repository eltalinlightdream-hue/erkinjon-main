import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Dumbbell, FolderOpen, Timer } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import { ProgressPanel } from "@/components/speaking-practice/progress-panel";
import { MOCK_SETS } from "@/lib/speaking-practice/plan";

export const Route = createFileRoute("/speaking_/practice")({
  head: () => ({
    meta: [
      { title: "IELTS Speaking Practice Tests | Abduraimov Erkinjon" },
      {
        name: "description",
        content:
          "Practise IELTS Speaking out loud: questions are read to you, timers run like the real exam, and you can record yourself on your own device.",
      },
    ],
  }),
  component: SpeakingPractice,
});

function SpeakingPractice() {
  return (
    <SiteLayout>
      <section className="container mx-auto max-w-5xl px-4 py-12">
        <Link
          to="/speaking"
          className="mb-8 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Speaking
        </Link>

        <div className="ink-bleed mb-10 max-w-2xl">
          <p className="eyebrow mb-4 text-primary">Speak out loud, every day</p>
          <h1 className="mb-4 font-serif text-4xl md:text-5xl">Speaking practice room</h1>
          <p className="text-lg text-muted-foreground">
            The examiner&apos;s questions are read aloud, the timer runs, and you answer — just like
            test day. Record yourself and listen back; recordings never leave your device.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,22rem)]">
          <div className="flex flex-col gap-5">
            <Reveal>
              <Link to="/speaking/practice/mock" className="group block">
                <article className="bento-card relative overflow-hidden p-7 sm:p-9">
                  <span
                    className="pointer-events-none absolute right-6 top-4 select-none font-serif text-[6rem] leading-none text-primary/10 sm:text-[8rem]"
                    aria-hidden
                  >
                    {MOCK_SETS.length}
                  </span>
                  <span className="icon-tile icon-tile-coral mb-6 h-14 w-14">
                    <Timer className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <p className="eyebrow mb-2 text-primary">Exam conditions</p>
                  <h2 className="mb-2 font-serif text-2xl sm:text-3xl">Full mock test</h2>
                  <p className="mb-6 max-w-md text-muted-foreground">
                    Parts 1, 2 and 3 in order, with real timings and no replay. {MOCK_SETS.length}{" "}
                    complete tests, never repeated until you have done them all.
                  </p>
                  <span className="inline-flex items-center gap-2 font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
                    Start a mock test <ArrowRight className="size-4" />
                  </span>
                </article>
              </Link>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-[1.4fr_1fr]">
              <Reveal delay={80}>
                <Link to="/speaking/practice/general" className="group block h-full">
                  <article className="bento-card h-full p-6">
                    <span className="icon-tile icon-tile-green mb-5 h-12 w-12">
                      <Dumbbell className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h2 className="mb-1 font-serif text-xl">General training</h2>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Pick Part 1, 2, 3 or Part 1 + 3. Random questions from every set, replay
                      allowed.
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--tint-green-fg)] transition-transform duration-300 group-hover:translate-x-1">
                      Train <ArrowRight className="size-4" />
                    </span>
                  </article>
                </Link>
              </Reveal>
              <Reveal delay={160}>
                <Link to="/speaking/practice/recordings" className="group block h-full">
                  <article className="bento-card h-full p-6">
                    <span className="icon-tile icon-tile-blue mb-5 h-12 w-12">
                      <FolderOpen className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h2 className="mb-1 font-serif text-xl">My recordings</h2>
                    <p className="mb-4 text-sm text-muted-foreground">
                      Listen back and download. Kept on this device only.
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--tint-blue-fg)] transition-transform duration-300 group-hover:translate-x-1">
                      Open <ArrowRight className="size-4" />
                    </span>
                  </article>
                </Link>
              </Reveal>
            </div>
          </div>

          <Reveal delay={120}>
            <ProgressPanel />
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
