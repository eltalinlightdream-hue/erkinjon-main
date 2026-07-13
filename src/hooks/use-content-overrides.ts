import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  overrideKey,
  type ContentOverrideMap,
  type ContentSection,
} from "@/lib/premium-content";

/** Shared query key so every practice page dedupes to one request. */
export const CONTENT_OVERRIDES_QUERY_KEY = ["content-overrides"] as const;

async function fetchContentOverrides(): Promise<ContentOverrideMap> {
  const { data, error } = await supabase
    .from("content_premium_overrides")
    .select("content_type, content_id, is_premium");
  if (error) throw error;

  const map: ContentOverrideMap = {};
  for (const row of data ?? []) {
    map[overrideKey(row.content_type as ContentSection, row.content_id)] = row.is_premium;
  }
  return map;
}

/**
 * Loads the admin free/premium overrides for all sections. Readable by
 * anyone (RLS allows public SELECT) so locks stay consistent for signed-out
 * visitors too. On any error it falls back to an empty map, which means the
 * built-in default rules apply — content is never accidentally exposed.
 */
export function useContentOverrides(): { overrides: ContentOverrideMap; isLoading: boolean } {
  const { data, isLoading } = useQuery({
    queryKey: CONTENT_OVERRIDES_QUERY_KEY,
    queryFn: fetchContentOverrides,
    staleTime: 60_000,
  });
  return { overrides: data ?? {}, isLoading };
}
