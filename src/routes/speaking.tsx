import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Mic2, Lightbulb, FileText, Quote, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "IELTS Speaking Practice | Abduraimov Erkinjon" },
      { name: "description", content: "Speaking practice sections: Pronunciation, Topics Explained, Written Samples, and Tips & Chunks." },
    ],
  }),
  component: Speaking,
});

type SpeakingSection = {
  to: string;
  title: string;
  icon: React.ElementType;
  desc: string;
  tint: string;
  disabled?: boolean;
};

const SECTIONS: SpeakingSection[] = [
  {
    to: "/speaking/pronunciation",
    title: "Pronunciation",
    icon: Mic2,
    desc: "Learn American English pronunciation with Rachel's English lessons",
    tint: "bg-secondary/15 text-secondary",
  },
  {
    to: "/speaking/topics-explained",
    title: "Topics Explained",
    icon: Lightbulb,
    desc: "Master IELTS speaking topics with Keith O'Hare's explanations",
    tint: "bg-gold/15 text-gold",
  },
  {
    to: "/speaking/written-samples",
    title: "Written Samples",
    icon: FileText,
    desc: "Model answers for Part 1, 2 & 3 with the key language explained",
    tint: "bg-sage/15 text-sage",
  },
  {
    to: "/speaking/tips-chunks",
    title: "Tips & Chunks",
    icon: Quote,
    desc: "Discourse markers, vocabulary patterns and go-to language chunks for speaking",
    tint: "bg-primary/15 text-primary",
  },
];

function SectionCard({ section }: { section: SpeakingSection }) {
  const inner = (
    <Card
      className={cn(
        "p-6 h-full flex flex-col transition-all duration-200",
        section.disabled
          ? "opacity-60 cursor-not-allowed"
          : "hover:shadow-warm hover:-translate-y-1 group-active:shadow-warm group-active:-translate-y-1 cursor-pointer"
      )}
    >
      <span className={`w-12 h-12 rounded-xl ${section.tint} flex items-center justify-center mb-4`}>
        <section.icon className="w-5 h-5" />
      </span>
      <h2 className="font-serif text-xl font-semibold mb-1">{section.title}</h2>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{section.desc}</p>
      {section.disabled ? (
        <span className="text-sm font-mono text-muted-foreground/60 tracking-wide">Coming soon</span>
      ) : (
        <span className="text-sm font-medium text-secondary inline-flex items-center gap-1">
          Start <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </Card>
  );

  if (section.disabled) return <div className="h-full">{inner}</div>;
  return (
    <Link to={section.to as any} className="group block h-full">
      {inner}
    </Link>
  );
}

function Speaking() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="ink-bleed text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">IELTS Speaking</h1>
          <p className="text-lg text-muted-foreground">
            Pick a skill and start — every section is built around real IELTS question types.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} className="h-full" delay={(i % 3) * 80}>
              <SectionCard section={s} />
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
