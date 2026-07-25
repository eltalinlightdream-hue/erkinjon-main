import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, Maximize2 } from "lucide-react";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books by the Author | Abduraimov Erkinjon" },
      { name: "description", content: "Books written by the author, readable online." },
    ],
  }),
  component: Books,
});

// ── EDIT THIS LIST to add/change books ────────────────────────────────────
// `file` must match a PDF already placed in /public/books and sources/
// (spaces in the path are written as %20 below).
type Book = {
  id: string;
  title: string;
  description: string;
  skill: "Reading" | "Listening" | "Speaking" | "Writing";
  cover?: string; // optional cover image path in /public
  file: string;
};

const BOOKS: Book[] = [
  {
    id: "book-1",
    title: "Writing Task 1 Report Collection",
    description:
      "A set of IELTS Writing Task 1 model reports covering line graphs, bar charts, transport and employment data, and more — full sample reports with analysis.",
    skill: "Writing",
    file: "/books%20and%20sources/project%200.1.pdf",
  },
  {
    id: "book-2",
    title: "Essays and Reports Collection",
    description:
      "A combined collection of IELTS Writing Task 1 reports and Task 2 essays across many full practice tests — bar charts, maps, processes, and opinion essays.",
    skill: "Writing",
    file: "/books%20and%20sources/project%200.2.pdf",
  },
  {
    id: "book-3",
    title: "IELTS Writing Task 1 — Model Report Workbook",
    description:
      "Twenty-eight band-ready reports — line, bar, pie, table, map & process — each paired with collocations, sentence frames, and guided writing practice.",
    skill: "Writing",
    file: "/books%20and%20sources/project%200.32.pdf",
  },
];
// ────────────────────────────────────────────────────────────────────────

function Books() {
  const [openBook, setOpenBook] = useState<Book | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const goFullscreen = () => {
    iframeRef.current?.requestFullscreen?.();
  };

  return (
    <SiteLayout>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Books by the Author</h1>
          <p className="text-muted-foreground">
            Read these books directly in your browser — no download needed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BOOKS.map((book) => (
            <Card
              key={book.id}
              onClick={() => setOpenBook(book)}
              className="cursor-pointer overflow-hidden flex flex-col hover:shadow-[0_16px_40px_rgba(43,64,128,0.14)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative bg-muted aspect-[3/4] flex items-center justify-center">
                {book.cover ? (
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                ) : (
                  <BookOpen className="w-12 h-12 text-muted-foreground" />
                )}
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <Badge variant="secondary" className="w-fit">
                  {book.skill}
                </Badge>
                <h3 className="font-semibold leading-snug">{book.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{book.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!openBook} onOpenChange={(v) => !v && setOpenBook(null)}>
        <DialogContent className="max-w-[96vw] w-[96vw] h-[92vh] p-0 flex flex-col sm:max-w-[96vw]">
          <DialogHeader className="p-3 border-b flex-row items-center justify-between space-y-0">
            <DialogTitle>{openBook?.title}</DialogTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={goFullscreen}
              className="gap-1.5 mr-8"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              Fullscreen
            </Button>
          </DialogHeader>
          {openBook && (
            // Native browser PDF viewer: page-by-page navigation, zoom, and
            // fullscreen all come built in with the toolbar shown. Note:
            // showing the toolbar means the browser's own download icon is
            // visible too — there is no fully download-proof way to show a
            // PDF on the web, so this trades a bit of that friction for a
            // much better reading experience.
            <iframe
              ref={iframeRef}
              src={`${openBook.file}#view=FitH`}
              title={openBook.title}
              className="flex-1 w-full"
            />
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
