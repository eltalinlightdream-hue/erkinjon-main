import { createServerFn } from "@tanstack/react-start";

export type Video = { id: string; title: string; duration: string; thumbnail: string };
export type Playlist = { id: string; title: string; description: string; videos: Video[] };
export type YouTubeResult =
  | { ok: true; playlists: Playlist[] }
  | { ok: false; error: string };

const CHANNEL_HANDLE = "erkinjon_writes";
const API = "https://www.googleapis.com/youtube/v3";

function fmtDuration(iso: string): string {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return "";
  const h = Number(m[1] || 0);
  const mm = Number(m[2] || 0);
  const ss = Number(m[3] || 0);
  const pad = (n: number) => String(n).padStart(2, "0");
  return h > 0 ? `${h}:${pad(mm)}:${pad(ss)}` : `${mm}:${pad(ss)}`;
}

async function gfetch(path: string, params: Record<string, string>, apiKey: string) {
  const url = new URL(`${API}/${path}`);
  Object.entries({ ...params, key: apiKey }).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString());
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`YouTube API ${res.status}: ${body.slice(0, 400)}`);
  }
  return res.json();
}

export const getChannelPlaylists = createServerFn({ method: "GET" })
  .handler(async (): Promise<YouTubeResult> => {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    if (!API_KEY) {
      return { ok: false, error: "YOUTUBE_API_KEY environment variable is not set. Add it in your Vercel project settings." };
    }

    try {
      const ch = await gfetch("channels", { part: "id", forHandle: CHANNEL_HANDLE }, API_KEY);
      const channelId = ch.items?.[0]?.id;
      if (!channelId) return { ok: false, error: "channel_not_found: no channel matched handle @" + CHANNEL_HANDLE };

      const pl = await gfetch("playlists", { part: "snippet,contentDetails", channelId, maxResults: "50" }, API_KEY);
      const playlistsRaw = pl.items || [];
      if (playlistsRaw.length === 0) return { ok: true, playlists: [] };

      const playlists: Playlist[] = [];
      for (const p of playlistsRaw) {
        const items = await gfetch("playlistItems", { part: "snippet,contentDetails", playlistId: p.id, maxResults: "25" }, API_KEY);
        const videoIds: string[] = (items.items || []).map((it: any) => it.contentDetails?.videoId).filter(Boolean);

        if (videoIds.length === 0) {
          playlists.push({ id: p.id, title: p.snippet?.title || "Untitled", description: p.snippet?.description || "", videos: [] });
          continue;
        }

        const vids = await gfetch("videos", { part: "snippet,contentDetails", id: videoIds.join(",") }, API_KEY);
        const videos: Video[] = (vids.items || []).map((v: any) => ({
          id: v.id,
          title: v.snippet?.title || "",
          duration: fmtDuration(v.contentDetails?.duration || ""),
          thumbnail: v.snippet?.thumbnails?.high?.url || `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
        }));

        playlists.push({ id: p.id, title: p.snippet?.title || "Untitled", description: p.snippet?.description || "", videos });
      }
      return { ok: true, playlists };
    } catch (e) {
      const msg = e instanceof Error ? e.message : "unknown_error";
      console.error("YouTube fetch failed:", msg);
      return { ok: false, error: msg };
    }
  });
