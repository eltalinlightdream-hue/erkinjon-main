import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site-layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Maximize2, Loader2, ZoomIn, ZoomOut } from "lucide-react";

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

const PDFJS_VERSION = "3.11.174";
const PDFJS_SCRIPT_URL = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.min.js`;
const PDFJS_WORKER_URL = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`;

// Loads the pdf.js library from a CDN once and reuses it after that —
// no npm install needed, keeps package.json untouched.
let pdfjsLoadingPromise: Promise<any> | null = null;
function loadPdfJs(): Promise<any> {
  if ((window as any).pdfjsLib) return Promise.resolve((window as any).pdfjsLib);
  if (pdfjsLoadingPromise) return pdfjsLoadingPromise;
  pdfjsLoadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = PDFJS_SCRIPT_URL;
    script.onload = () => {
      const lib = (window as any).pdfjsLib;
      lib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_URL;
      resolve(lib);
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
  return pdfjsLoadingPromise;
}

function BookCoverThumbnail({ file, title }: { file: string; title: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadPdfJs().then((pdfjsLib) => {
      pdfjsLib.getDocument(file).promise.then((pdf: any) => {
        if (cancelled) return;
        pdf.getPage(1).then((page: any) => {
          if (cancelled || !canvasRef.current || !containerRef.current) return;
          const containerWidth = containerRef.current.clientWidth;
          const baseViewport = page.getViewport({ scale: 1 });
          const scale = containerWidth / baseViewport.width;
          const viewport = page.getViewport({ scale });
          const canvas = canvasRef.current;
          const context = canvas.getContext("2d")!;
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          page.render({ canvasContext: context, viewport }).promise.then(() => {
            if (!cancelled) setLoaded(true);
          });
        });
      });
    });
    return () => {
      cancelled = true;
    };
  }, [file]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center overflow-hidden">
      {!loaded && <Loader2 className="w-6 h-6 text-muted-foreground animate-spin" />}
      <canvas
        ref={canvasRef}
        aria-label={`${title} — first page preview`}
        className={loaded ? "w-full h-auto" : "hidden"}
      />
    </div>
  );
}

function PdfPageViewer({ book }: { book: Book }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null); // toolbar + canvas — this is what goes fullscreen
  const pdfDocRef = useRef<any>(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(1); // multiplier on top of fit-to-width
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Load the document whenever the book changes.
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setPageNum(1);
    setZoom(1);
    loadPdfJs().then((pdfjsLib) => {
      pdfjsLib.getDocument(book.file).promise.then((pdf: any) => {
        if (cancelled) return;
        pdfDocRef.current = pdf;
        setNumPages(pdf.numPages);
        setLoading(false);
      });
    });
    return () => {
      cancelled = true;
    };
  }, [book.file]);

  // Render the current page onto the canvas whenever page or zoom changes.
  useEffect(() => {
    if (!pdfDocRef.current || !canvasRef.current || !scrollRef.current) return;
    let cancelled = false;
    pdfDocRef.current.getPage(pageNum).then((page: any) => {
      if (cancelled || !canvasRef.current || !scrollRef.current) return;
      const containerWidth = scrollRef.current.clientWidth - 32; // minus padding
      const baseViewport = page.getViewport({ scale: 1 });
      const fitScale = containerWidth / baseViewport.width;
      const viewport = page.getViewport({ scale: fitScale * zoom });
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d")!;
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      page.render({ canvasContext: context, viewport });
    });
    return () => {
      cancelled = true;
    };
  }, [pageNum, loading, zoom]);

  // Keep track of fullscreen state so we know when we're in/out of it.
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      wrapperRef.current?.requestFullscreen?.();
    }
  };

  const zoomIn = () => setZoom((z) => Math.min(3, +(z + 0.25).toFixed(2)));
  const zoomOut = () => setZoom((z) => Math.max(0.5, +(z - 0.25).toFixed(2)));

  return (
    // This whole block (toolbar + page area) is what gets fullscreened,
    // so the page controls stay usable in fullscreen too.
    <div ref={wrapperRef} className="flex-1 flex flex-col min-h-0 bg-background">
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b bg-background/60 flex-wrap">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            disabled={pageNum <= 1}
            onClick={() => setPageNum((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground min-w-[90px] text-center">
            Page {pageNum} of {numPages || "…"}
          </span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            disabled={pageNum >= numPages}
            onClick={() => setPageNum((p) => Math.min(numPages, p + 1))}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={zoomOut} disabled={zoom <= 0.5}>
            <ZoomOut className="w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground min-w-[48px] text-center">
            {Math.round(zoom * 100)}%
          </span>
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={zoomIn} disabled={zoom >= 3}>
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={toggleFullscreen} className="gap-1.5">
            <Maximize2 className="w-3.5 h-3.5" />
            {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          </Button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex-1 overflow-auto bg-muted/40 flex items-start justify-center p-4"
        // Blocks the right-click "Save image as…" menu on the page canvas.
        // Not foolproof, but removes the obvious download path.
        onContextMenu={(e) => e.preventDefault()}
      >
        {loading ? (
          <div className="flex items-center gap-2 text-muted-foreground mt-20">
            <Loader2 className="w-5 h-5 animate-spin" />
            Loading book…
          </div>
        ) : (
          <canvas ref={canvasRef} className="shadow-lg max-w-none h-auto" />
        )}
      </div>
    </div>
  );
}

function Books() {
  const [openBook, setOpenBook] = useState<Book | null>(null);

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
                  <BookCoverThumbnail file={book.file} title={book.title} />
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
          <DialogHeader className="p-3 border-b">
            <DialogTitle>{openBook?.title}</DialogTitle>
          </DialogHeader>
          {openBook && <PdfPageViewer book={openBook} />}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
