import { createAPIFileRoute } from "@tanstack/react-start/api";

const DRIVE_BASE = "https://drive.usercontent.google.com/download";

export const APIRoute = createAPIFileRoute("/api/audio-proxy")({
  GET: async ({ request }) => {
    const url = new URL(request.url);
    const fileId = url.searchParams.get("id");

    if (!fileId || !/^[\w-]{10,}$/.test(fileId)) {
      return new Response("Missing or invalid file ID", { status: 400 });
    }

    const driveUrl = `${DRIVE_BASE}?id=${fileId}&export=download&confirm=t`;

    const upstreamHeaders: Record<string, string> = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36",
    };

    const range = request.headers.get("Range");
    if (range) upstreamHeaders["Range"] = range;

    let upstream: Response;
    try {
      upstream = await fetch(driveUrl, {
        headers: upstreamHeaders,
        redirect: "follow",
      });
    } catch (err) {
      return new Response(`Upstream fetch failed: ${String(err)}`, { status: 502 });
    }

    const ct = upstream.headers.get("Content-Type") ?? "";

    // If Google returned a confirmation HTML page, try to extract the real download URL
    if (ct.includes("text/html")) {
      const html = await upstream.text();
      const match = html.match(
        /href="(https:\/\/drive\.usercontent\.google\.com\/download[^"]+)"/,
      );
      if (match) {
        const realUrl = match[1].replace(/&amp;/g, "&");
        try {
          upstream = await fetch(realUrl, {
            headers: upstreamHeaders,
            redirect: "follow",
          });
        } catch (err) {
          return new Response(`Redirect fetch failed: ${String(err)}`, { status: 502 });
        }
      } else {
        return new Response("Google Drive returned a confirmation page — check file permissions", {
          status: 502,
        });
      }
    }

    if (!upstream.ok && upstream.status !== 206) {
      return new Response(`Drive returned ${upstream.status}`, { status: upstream.status });
    }

    const responseHeaders = new Headers();
    responseHeaders.set("Content-Type", upstream.headers.get("Content-Type") ?? "audio/mpeg");
    responseHeaders.set("Accept-Ranges", "bytes");
    responseHeaders.set("Cache-Control", "public, max-age=3600");

    const cl = upstream.headers.get("Content-Length");
    if (cl) responseHeaders.set("Content-Length", cl);

    const cr = upstream.headers.get("Content-Range");
    if (cr) responseHeaders.set("Content-Range", cr);

    return new Response(upstream.body, {
      status: range ? 206 : upstream.status,
      headers: responseHeaders,
    });
  },
});
