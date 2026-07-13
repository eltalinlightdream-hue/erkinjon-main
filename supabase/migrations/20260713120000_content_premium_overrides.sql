-- Admin-controlled free/premium overrides for individual content items.
--
-- Practice content (listening / reading / writing / speaking) is not stored in
-- the database — it lives in code with built-in "first N free" defaults. This
-- table records only the admin's explicit exceptions to those defaults, keyed
-- by the section and the item's existing stable id. An absent row means "use
-- the default rule".

CREATE TABLE IF NOT EXISTS public.content_premium_overrides (
  content_type text NOT NULL CHECK (content_type IN ('listening', 'reading', 'writing', 'speaking')),
  content_id   text NOT NULL,
  is_premium   boolean NOT NULL,
  updated_at   timestamptz NOT NULL DEFAULT now(),
  updated_by   uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  PRIMARY KEY (content_type, content_id)
);

ALTER TABLE public.content_premium_overrides ENABLE ROW LEVEL SECURITY;

-- Anyone (including signed-out visitors) may READ overrides: premium status is
-- not secret, and the practice pages need it to render locks consistently.
CREATE POLICY "content overrides are readable by everyone"
  ON public.content_premium_overrides
  FOR SELECT
  USING (true);

-- Only the admin may WRITE, mirroring the app-layer requireAdmin middleware.
CREATE POLICY "only admin can change content overrides"
  ON public.content_premium_overrides
  FOR ALL
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());
