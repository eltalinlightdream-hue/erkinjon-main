import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { getWritingTask } from "@/lib/writing-data";

export const Route = createFileRoute("/writing/$taskId")({
  component: WritingTaskMode,
});

function WritingTaskMode() {
  const { taskId } = Route.useParams();
  const navigate = useNavigate();
  const task = getWritingTask(taskId);

  if (!task) {
    return (
      <SiteLayout>
        <section className="container mx-auto px-4 py-16 max-w-3xl text-center">
          <h1 className="text-2xl font-bold mb-4">Task not found</h1>
          <Link to="/writing">
            <Button variant="outline" className="font-mono text-xs tracking-wide">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Writing
            </Button>
          </Link>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <Link
          to="/writing"
          className="font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 mb-8 uppercase transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Writing
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">{task.title}</h1>
        <p className="text-muted-foreground mb-10">Choose how you want to practice</p>

        <div className="grid sm:grid-cols-2 gap-5">
          <button
            onClick={() =>
              navigate({ to: "/writing/$taskId/practice", params: { taskId: task.id } })
            }
            className="text-left"
          >
            <div className="bento-card rounded-3xl p-8 border-2 border-secondary/30 hover:border-secondary transition-colors h-full flex flex-col group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-1">Self Practice</h3>
              <p className="font-mono text-[11px] text-secondary tracking-wider mb-3 uppercase">Exam Simulation</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Free · Timed · Word count</p>
            </div>
          </button>
        </div>
      </section>
    </SiteLayout>
  );
}
