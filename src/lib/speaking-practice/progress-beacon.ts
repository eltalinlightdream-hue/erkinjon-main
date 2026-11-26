// Last-chance save of practice time when the page is hidden or closed.
//
// Server functions cannot be sent with `keepalive`, so a request started while
// the tab closes may be cancelled. This one call goes straight to the
// `speaking_session_progress` database function with `keepalive: true`. It is
// the same function the server uses: it checks the signed-in user and caps the
// time, so the browser cannot save more than the real elapsed time.

import { supabase } from "@/integrations/supabase/client";

let cachedToken: string | null = null;

/** Keep a fresh access token ready, because there is no time to fetch one while the page closes. */
export async function refreshBeaconToken(): Promise<void> {
  const { data } = await supabase.auth.getSession();
  cachedToken = data.session?.access_token ?? null;
}

export function sendProgressBeacon(sessionId: string, seconds: number): void {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!cachedToken || !url || !key) return;
  try {
    void fetch(`${url}/rest/v1/rpc/speaking_session_progress`, {
      method: "POST",
      keepalive: true,
      headers: {
        apikey: key,
        Authorization: `Bearer ${cachedToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        p_session_id: sessionId,
        p_active_seconds: seconds,
        p_finished: false,
      }),
    }).catch(() => undefined);
  } catch {
    /* the 30-second saves already kept most of the time */
  }
}
