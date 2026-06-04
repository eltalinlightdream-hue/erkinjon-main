import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Play, X, Clock, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/speaking_/topics-explained")({
  head: () => ({
    meta: [
      { title: "Topics Explained by Keith O'Hare | Abduraimov Erkinjon" },
      { name: "description", content: "Master IELTS speaking topics with real explanations and vocabulary by Keith O'Hare." },
    ],
  }),
  component: TopicsExplained,
});

type Topic = {
  id: number;
  topic: string;
  youtubeId: string;
  type: string;
  level: "beginner" | "intermediate" | "advanced";
  duration: string;
  description: string;
};

const TOPICS: Topic[] = [
  { id: 1, topic: "Singing", youtubeId: "wW5tSLTBsrA", type: "Hobbies & Interests", level: "intermediate", duration: "12:45", description: "Learn vocabulary and structures to discuss singing, musicians, and musical performances in IELTS speaking" },
  { id: 2, topic: "Business People", youtubeId: "Y5GOBlk-8hM", type: "Work & Business", level: "intermediate", duration: "14:20", description: "Discuss successful entrepreneurs and business leaders with relevant vocabulary and examples" },
  { id: 3, topic: "Studying", youtubeId: "ggtFU4_X_lg", type: "Lifestyle & Daily", level: "beginner", duration: "11:50", description: "Talk about education, learning methods, and academic experiences for IELTS Part 1 & 2" },
  { id: 4, topic: "History", youtubeId: "7HF8CF9jNyI", type: "Abstract Concepts", level: "advanced", duration: "15:30", description: "Discuss historical events, periods, and their significance with sophisticated vocabulary" },
  { id: 5, topic: "Personal Finance", youtubeId: "qv9x5fuCtkE", type: "Work & Business", level: "intermediate", duration: "13:15", description: "Learn to discuss money, budgeting, spending habits, and financial planning" },
  { id: 6, topic: "Celebrations", youtubeId: "nRJ_1m26blk", type: "Experiences & Events", level: "beginner", duration: "12:10", description: "Describe festivals, parties, and celebrations with cultural vocabulary and expressions" },
  { id: 7, topic: "Olympics", youtubeId: "DSrudiw2XME", type: "Social Topics", level: "intermediate", duration: "13:45", description: "Discuss sports, competitions, and major sporting events in detail" },
  { id: 8, topic: "Computers", youtubeId: "8E26qr8Fijs", type: "Technology", level: "intermediate", duration: "12:30", description: "Talk about computers, programming, and technology in everyday life" },
  { id: 9, topic: "Habits", youtubeId: "OR-VN7eD0Mc", type: "Lifestyle & Daily", level: "beginner", duration: "11:20", description: "Discuss daily routines, habits, and behavioral patterns with clear examples" },
  { id: 10, topic: "Holidays", youtubeId: "IX_WS4-xfFE", type: "Experiences & Events", level: "beginner", duration: "12:40", description: "Describe vacations, travel experiences, and holiday destinations" },
  { id: 11, topic: "Meetings", youtubeId: "oBEDtdzAhlk", type: "Work & Business", level: "intermediate", duration: "13:00", description: "Discuss professional meetings, conferences, and formal gatherings" },
  { id: 12, topic: "Environment", youtubeId: "pyQDyb9h_Kw", type: "Nature & Environment", level: "intermediate", duration: "14:15", description: "Talk about environmental issues, sustainability, and conservation efforts" },
  { id: 13, topic: "Relaxing", youtubeId: "11ke7BdH33U", type: "Lifestyle & Daily", level: "beginner", duration: "11:50", description: "Describe ways to relax, unwind, and manage stress" },
  { id: 14, topic: "Countryside", youtubeId: "o3TJgc7WJAc", type: "Places & Locations", level: "intermediate", duration: "12:35", description: "Discuss rural areas, farms, and countryside features" },
  { id: 15, topic: "Keeping Fit", youtubeId: "q2gsw8fBS9w", type: "Hobbies & Interests", level: "beginner", duration: "12:05", description: "Talk about exercise, fitness routines, and healthy lifestyles" },
  { id: 16, topic: "Television Series", youtubeId: "2gOYl7fhz28", type: "Hobbies & Interests", level: "intermediate", duration: "13:20", description: "Discuss TV shows, streaming content, and entertainment preferences" },
  { id: 17, topic: "Social Media", youtubeId: "ENwsM3-T598", type: "Technology", level: "intermediate", duration: "13:50", description: "Discuss social media platforms, online presence, and digital communication" },
  { id: 18, topic: "Feelings", youtubeId: "Lb1XtqZlqU4", type: "Abstract Concepts", level: "beginner", duration: "11:45", description: "Express and discuss emotions, feelings, and emotional experiences" },
  { id: 19, topic: "The Virtual World", youtubeId: "T6Sc3FgtZHs", type: "Technology", level: "intermediate", duration: "14:10", description: "Discuss online gaming, virtual reality, and digital experiences" },
  { id: 20, topic: "Friends", youtubeId: "fZjkGObio8k", type: "People & Characters", level: "beginner", duration: "11:30", description: "Describe friendships, qualities of good friends, and social relationships" },
  { id: 21, topic: "Crime", youtubeId: "OZwx2_lW578", type: "Social Topics", level: "advanced", duration: "15:00", description: "Discuss crime, justice systems, and law enforcement with academic vocabulary" },
  { id: 22, topic: "The News", youtubeId: "YaYBqzjM_vE", type: "Social Topics", level: "intermediate", duration: "14:25", description: "Discuss current events, news media, and information sources" },
  { id: 23, topic: "Art", youtubeId: "mLeLjDREqVI", type: "Hobbies & Interests", level: "intermediate", duration: "13:05", description: "Talk about artwork, artists, galleries, and creative expression" },
  { id: 24, topic: "Boredom", youtubeId: "pRh6uvisaXw", type: "Abstract Concepts", level: "intermediate", duration: "12:50", description: "Discuss boredom, entertainment, and ways to stay engaged" },
  { id: 25, topic: "Medicine", youtubeId: "XdevoRoD8so", type: "Social Topics", level: "advanced", duration: "14:40", description: "Discuss healthcare, medical treatments, and health-related topics" },
  { id: 26, topic: "Advice", youtubeId: "cWwAXRTDYGw", type: "Abstract Concepts", level: "intermediate", duration: "12:35", description: "Discuss giving and receiving advice with appropriate expressions" },
  { id: 27, topic: "Transport", youtubeId: "Bc5rKcict04", type: "Lifestyle & Daily", level: "beginner", duration: "12:15", description: "Talk about transportation methods, travel, and commuting" },
  { id: 28, topic: "Shopping", youtubeId: "cl_9vcMFO5Q", type: "Lifestyle & Daily", level: "beginner", duration: "11:55", description: "Discuss shopping habits, retail experiences, and consumer preferences" },
  { id: 29, topic: "Jobs", youtubeId: "XU30Eu6UPkU", type: "Work & Business", level: "intermediate", duration: "13:30", description: "Describe different careers, job roles, and workplace experiences" },
  { id: 30, topic: "Technology 2", youtubeId: "-pWBbQuIcuI", type: "Technology", level: "intermediate", duration: "14:05", description: "Discuss advanced technology topics, innovation, and digital transformation" },
  { id: 31, topic: "Technology 1", youtubeId: "BZWL7y2fNnE", type: "Technology", level: "intermediate", duration: "13:40", description: "Introduction to technology-related vocabulary and discussions" },
  { id: 32, topic: "Festivals", youtubeId: "t3eAOAX4av4", type: "Experiences & Events", level: "intermediate", duration: "12:50", description: "Discuss cultural festivals, celebrations, and traditional events" },
  { id: 33, topic: "Happiness", youtubeId: "DA_npneh4Nc", type: "Abstract Concepts", level: "intermediate", duration: "12:30", description: "Discuss what makes people happy and sources of joy" },
  { id: 34, topic: "Decision Making", youtubeId: "DyGtN2LW2Vw", type: "Abstract Concepts", level: "intermediate", duration: "13:15", description: "Discuss how to make decisions and factors that influence choices" },
  { id: 35, topic: "The Generation Gap", youtubeId: "GEFGCMbzsZ4", type: "Social Topics", level: "intermediate", duration: "14:00", description: "Discuss differences between generations and intergenerational relationships" },
  { id: 36, topic: "Leaders", youtubeId: "bHFp80evDjQ", type: "People & Characters", level: "advanced", duration: "14:35", description: "Discuss leadership qualities and influential leaders" },
  { id: 37, topic: "Recycling", youtubeId: "RLkG8Ude7Ho", type: "Nature & Environment", level: "intermediate", duration: "12:45", description: "Discuss waste management, sustainability, and recycling practices" },
  { id: 38, topic: "Ambition", youtubeId: "au4HIbOKqdo", type: "Abstract Concepts", level: "intermediate", duration: "13:10", description: "Discuss personal goals, ambitions, and aspirations" },
  { id: 39, topic: "Halloween", youtubeId: "PFhezRWtdt4", type: "Experiences & Events", level: "beginner", duration: "12:20", description: "Discuss Halloween traditions, costumes, and celebrations" },
  { id: 40, topic: "Business", youtubeId: "xFgYHAW5QYs", type: "Work & Business", level: "advanced", duration: "15:10", description: "Discuss business concepts, entrepreneurship, and commerce" },
  { id: 41, topic: "Money", youtubeId: "KgZfa5sZu3s", type: "Work & Business", level: "intermediate", duration: "13:45", description: "Discuss financial topics, wealth, and economic concepts" },
  { id: 42, topic: "Photos and Photography", youtubeId: "7FyYLQkP_ow", type: "Hobbies & Interests", level: "intermediate", duration: "12:55", description: "Discuss photography, cameras, and visual arts" },
  { id: 43, topic: "Change", youtubeId: "KZZ2xtxMphI", type: "Abstract Concepts", level: "intermediate", duration: "13:30", description: "Discuss change, transformation, and adaptation" },
  { id: 44, topic: "Coeducation", youtubeId: "PCuPM2zP5iE", type: "Social Topics", level: "intermediate", duration: "12:40", description: "Discuss mixed-gender education systems and related benefits/drawbacks" },
  { id: 45, topic: "Mobile Phones", youtubeId: "yvX6jzxVSkw", type: "Technology", level: "beginner", duration: "12:10", description: "Discuss mobile technology, smartphones, and digital communication" },
  { id: 46, topic: "Science", youtubeId: "lfDF0Qg_I_Y", type: "Abstract Concepts", level: "advanced", duration: "15:05", description: "Discuss scientific topics, research, and scientific advancement" },
  { id: 47, topic: "News", youtubeId: "z05af1SMilQ", type: "Social Topics", level: "intermediate", duration: "14:20", description: "Discuss news media, journalism, and current affairs" },
  { id: 48, topic: "Clothes", youtubeId: "3w6weaAHsq0", type: "Lifestyle & Daily", level: "beginner", duration: "11:40", description: "Discuss fashion, clothing styles, and dress preferences" },
  { id: 49, topic: "Noise Pollution", youtubeId: "Fc7q7rKowBw", type: "Nature & Environment", level: "intermediate", duration: "13:25", description: "Discuss environmental pollution, noise levels, and quality of life" },
  { id: 50, topic: "Nation and Culture", youtubeId: "4Lq5NCeoS_Y", type: "Social Topics", level: "advanced", duration: "14:50", description: "Discuss national identity, culture, and cultural differences" },
  { id: 51, topic: "Animals", youtubeId: "v_fbJnVMHAg", type: "Nature & Environment", level: "beginner", duration: "12:00", description: "Discuss different animals, wildlife, and animal-related topics" },
  { id: 52, topic: "Climate Change", youtubeId: "ZUIZXxPrldE", type: "Nature & Environment", level: "advanced", duration: "15:15", description: "Discuss climate change, global warming, and environmental challenges" },
  { id: 53, topic: "Childhood", youtubeId: "Pf3JjcWo0Cc", type: "Experiences & Events", level: "beginner", duration: "11:50", description: "Discuss childhood memories, games, and childhood experiences" },
  { id: 54, topic: "Cities", youtubeId: "t5NHnXR_Hrg", type: "Places & Locations", level: "intermediate", duration: "13:40", description: "Discuss urban areas, cities, and city life" },
  { id: 55, topic: "Food and Cooking", youtubeId: "KQUoj1MvQnc", type: "Lifestyle & Daily", level: "beginner", duration: "12:25", description: "Discuss cuisine, cooking, recipes, and food preferences" },
  { id: 56, topic: "Skills", youtubeId: "qVp7S_yp3AU", type: "Work & Business", level: "intermediate", duration: "13:15", description: "Discuss different skills, abilities, and skill development" },
  { id: 57, topic: "Your Home", youtubeId: "BmH722JfWVU", type: "Places & Locations", level: "beginner", duration: "11:35", description: "Describe your home, living space, and household features" },
  { id: 58, topic: "Homes and Houses", youtubeId: "ArTA9OW-srQ", type: "Places & Locations", level: "beginner", duration: "12:05", description: "Discuss different types of homes and housing styles" },
  { id: 59, topic: "Sports", youtubeId: "cZyS5nuT8Rc", type: "Hobbies & Interests", level: "beginner", duration: "12:30", description: "Discuss sports, athletic activities, and sporting events" },
  { id: 60, topic: "Work-Life Balance", youtubeId: "h9d0zFEfYWs", type: "Work & Business", level: "intermediate", duration: "13:50", description: "Discuss balancing work and personal life" },
  { id: 61, topic: "Helping", youtubeId: "BcaJUZv60tE", type: "Social Topics", level: "beginner", duration: "11:45", description: "Discuss helping others, volunteering, and community support" },
  { id: 62, topic: "Comedy and Laughter", youtubeId: "2HF93tGZiXk", type: "Hobbies & Interests", level: "intermediate", duration: "12:50", description: "Discuss humor, comedy, and what makes people laugh" },
  { id: 63, topic: "Tourism", youtubeId: "Iyvy-_euRFQ", type: "Places & Locations", level: "intermediate", duration: "13:35", description: "Discuss travel, tourism, and popular tourist destinations" },
  { id: 64, topic: "Getting Lost", youtubeId: "aJMbOBdCK-Y", type: "Experiences & Events", level: "beginner", duration: "11:55", description: "Discuss navigation, directions, and travel mishaps" },
  { id: 65, topic: "Public Places", youtubeId: "EwEZXdQ0e6g", type: "Places & Locations", level: "beginner", duration: "12:15", description: "Discuss public spaces, landmarks, and community areas" },
];

const TYPE_FILTERS = [
  "People & Characters", "Objects & Things", "Places & Locations",
  "Experiences & Events", "Hobbies & Interests", "Work & Business",
  "Social Topics", "Nature & Environment", "Technology",
  "Abstract Concepts", "Lifestyle & Daily", "Current Issues",
];

const LEVEL_FILTERS = ["beginner", "intermediate", "advanced"] as const;

const LEVEL_META: Record<string, { label: string; className: string }> = {
  beginner:     { label: "Beginner",     className: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  intermediate: { label: "Intermediate", className: "bg-blue-100 text-blue-800 border-blue-200" },
  advanced:     { label: "Advanced",     className: "bg-red-100 text-red-800 border-red-200" },
};

function TopicsExplained() {
  const [activeTypes, setActiveTypes] = useState<Set<string>>(new Set());
  const [activeLevels, setActiveLevels] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState("");
  const [playing, setPlaying] = useState<Topic | null>(null);

  function toggleType(t: string) {
    setActiveTypes((prev) => { const n = new Set(prev); n.has(t) ? n.delete(t) : n.add(t); return n; });
  }

  function toggleLevel(l: string) {
    setActiveLevels((prev) => { const n = new Set(prev); n.has(l) ? n.delete(l) : n.add(l); return n; });
  }

  function clearAll() {
    setActiveTypes(new Set());
    setActiveLevels(new Set());
    setSearch("");
  }

  const hasFilters = activeTypes.size > 0 || activeLevels.size > 0 || search.trim().length > 0;
  const q = search.trim().toLowerCase();

  const visible = TOPICS.filter((t) => {
    const typeMatch = activeTypes.size === 0 || activeTypes.has(t.type);
    const levelMatch = activeLevels.size === 0 || activeLevels.has(t.level);
    const searchMatch = q.length === 0 || t.topic.toLowerCase().includes(q);
    return typeMatch && levelMatch && searchMatch;
  });

  return (
    <SiteLayout>
      <section className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Topics Explained</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Master IELTS speaking topics with real explanations and vocabulary — by Keith O'Hare.
        </p>

        {/* Search */}
        <div className="relative mb-4 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search topics..."
            className="pl-9 font-mono text-xs tracking-wide h-9"
          />
        </div>

        {/* Level filters */}
        <div className="flex flex-wrap gap-2 mb-3">
          {LEVEL_FILTERS.map((l) => (
            <button
              key={l}
              onClick={() => toggleLevel(l)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-mono tracking-wide border transition-all",
                activeLevels.has(l)
                  ? LEVEL_META[l].className + " font-semibold"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              )}
            >
              {LEVEL_META[l].label}
            </button>
          ))}
        </div>

        {/* Type filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {TYPE_FILTERS.map((t) => (
            <button
              key={t}
              onClick={() => toggleType(t)}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-mono tracking-wide border transition-all",
                activeTypes.has(t)
                  ? "bg-primary text-primary-foreground border-primary font-semibold"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              )}
            >
              {t}
            </button>
          ))}
          {hasFilters && (
            <button
              onClick={clearAll}
              className="px-3 py-1 rounded-full text-xs font-mono tracking-wide border border-destructive/40 text-destructive hover:bg-destructive/10 transition-all"
            >
              Clear all
            </button>
          )}
        </div>

        <p className="text-xs font-mono text-muted-foreground mb-6 tracking-wide">
          {visible.length} topic{visible.length !== 1 ? "s" : ""} found
        </p>

        {visible.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p className="font-mono text-sm tracking-wide">No topics match your filters.</p>
            <button onClick={clearAll} className="mt-3 text-xs font-mono text-primary underline underline-offset-2">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((topic) => (
              <div
                key={topic.id}
                className="rounded-xl border border-border bg-card overflow-hidden hover:shadow-warm hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${topic.youtubeId}/mqdefault.jpg`}
                    alt={topic.topic}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <button
                    onClick={() => setPlaying(topic)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity"
                    aria-label={`Watch ${topic.topic}`}
                  >
                    <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-primary fill-primary ml-0.5" />
                    </span>
                  </button>
                  <span className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-[10px] font-mono px-1.5 py-0.5 rounded flex items-center gap-1">
                    <Clock className="w-2.5 h-2.5" /> {topic.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge variant="secondary" className="font-mono text-[10px] tracking-wide bg-accent text-foreground">
                      {topic.type}
                    </Badge>
                    <span className={cn("text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border", LEVEL_META[topic.level].className)}>
                      {LEVEL_META[topic.level].label}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-semibold leading-snug mb-1.5 flex-1">{topic.topic}</h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{topic.description}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full font-mono text-xs tracking-wide h-8"
                    onClick={() => setPlaying(topic)}
                  >
                    <Play className="w-3 h-3 mr-1.5" /> Watch
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Video modal */}
      <Dialog open={!!playing} onOpenChange={(open) => { if (!open) setPlaying(null); }}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-none">
          <button
            onClick={() => setPlaying(null)}
            className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          {playing && (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${playing.youtubeId}?autoplay=1`}
                title={playing.topic}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
