-- ============================================================================
-- erkinjon-main — full database setup
-- Paste this whole file into the Supabase SQL Editor (Database → SQL Editor →
-- "New query" → paste → Run) on the project you want the site to use.
-- It recreates every table, policy, trigger and function the site depends on.
-- Safe to run once on a fresh project.
-- ============================================================================

-- ---------- profiles ----------
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  is_premium BOOLEAN NOT NULL DEFAULT false,
  device_fingerprint TEXT,
  device_last_seen TIMESTAMPTZ,
  activated_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile (non-premium fields)" ON public.profiles;
CREATE POLICY "Users can update own profile (non-premium fields)"
  ON public.profiles FOR UPDATE TO authenticated
  USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- ---------- activation codes (premium redemption) ----------
CREATE TABLE IF NOT EXISTS public.activation_codes (
  code TEXT PRIMARY KEY,
  note TEXT,
  used_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  used_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.activation_codes ENABLE ROW LEVEL SECURITY;

-- ---------- vocabulary_folders ----------
CREATE TABLE IF NOT EXISTS public.vocabulary_folders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  is_default BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.vocabulary_folders ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "own folders select" ON public.vocabulary_folders;
CREATE POLICY "own folders select" ON public.vocabulary_folders FOR SELECT TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "own folders insert" ON public.vocabulary_folders;
CREATE POLICY "own folders insert" ON public.vocabulary_folders FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "own folders update" ON public.vocabulary_folders;
CREATE POLICY "own folders update" ON public.vocabulary_folders FOR UPDATE TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "own folders delete" ON public.vocabulary_folders;
CREATE POLICY "own folders delete" ON public.vocabulary_folders FOR DELETE TO authenticated USING (auth.uid() = user_id AND is_default = false);

-- ---------- vocabulary_words ----------
CREATE TABLE IF NOT EXISTS public.vocabulary_words (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  folder_id UUID NOT NULL REFERENCES public.vocabulary_folders(id) ON DELETE CASCADE,
  word TEXT NOT NULL,
  definition TEXT NOT NULL,
  example TEXT,
  next_review TIMESTAMPTZ NOT NULL DEFAULT now(),
  interval_days INTEGER NOT NULL DEFAULT 0,
  ease_factor NUMERIC NOT NULL DEFAULT 2.5,
  last_reviewed TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_vocab_user_review ON public.vocabulary_words(user_id, next_review);
ALTER TABLE public.vocabulary_words ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "own words all" ON public.vocabulary_words;
CREATE POLICY "own words all" ON public.vocabulary_words FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ---------- test_results ----------
CREATE TABLE IF NOT EXISTS public.test_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  passage_title TEXT NOT NULL,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  band NUMERIC,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_results_user ON public.test_results(user_id, completed_at DESC);
ALTER TABLE public.test_results ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "own results select" ON public.test_results;
CREATE POLICY "own results select" ON public.test_results FOR SELECT TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "own results insert" ON public.test_results;
CREATE POLICY "own results insert" ON public.test_results FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

-- ---------- articles_read ----------
CREATE TABLE IF NOT EXISTS public.articles_read (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  article_slug TEXT NOT NULL,
  read_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.articles_read ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "own reads all" ON public.articles_read;
CREATE POLICY "own reads all" ON public.articles_read FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ---------- bookmarks ----------
CREATE TABLE IF NOT EXISTS public.bookmarks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('article','vocabulary')),
  reference_id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, type, reference_id)
);
ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "own bookmarks all" ON public.bookmarks;
CREATE POLICY "own bookmarks all" ON public.bookmarks FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ---------- passage_notes ----------
CREATE TABLE IF NOT EXISTS public.passage_notes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  passage_id TEXT NOT NULL,
  notes TEXT NOT NULL DEFAULT '',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, passage_id)
);
ALTER TABLE public.passage_notes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "own notes all" ON public.passage_notes;
CREATE POLICY "own notes all" ON public.passage_notes FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- ---------- test_progress ----------
CREATE TABLE IF NOT EXISTS public.test_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  test_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'not_done' CHECK (status IN ('not_done', 'not_completed', 'finished')),
  score INTEGER,
  total INTEGER,
  completed_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, test_id)
);
CREATE INDEX IF NOT EXISTS idx_test_progress_user_status ON public.test_progress(user_id, status);
ALTER TABLE public.test_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "own test progress select" ON public.test_progress;
CREATE POLICY "own test progress select" ON public.test_progress FOR SELECT TO authenticated USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "own test progress insert" ON public.test_progress;
CREATE POLICY "own test progress insert" ON public.test_progress FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "own test progress update" ON public.test_progress;
CREATE POLICY "own test progress update" ON public.test_progress FOR UPDATE TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "own test progress delete" ON public.test_progress;
CREATE POLICY "own test progress delete" ON public.test_progress FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- ---------- new-user trigger (creates profile + default vocab folder) ----------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', '')
  )
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.vocabulary_folders (user_id, name, is_default)
  VALUES (NEW.id, 'General', true)
  ON CONFLICT DO NOTHING;

  RETURN NEW;
END;
$function$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ---------- protect premium fields from self-promotion ----------
CREATE OR REPLACE FUNCTION public.protect_premium_fields()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  -- Block premium-field changes only when a user updates their OWN row.
  -- Admin RPCs (SECURITY DEFINER) update other users' rows and pass through.
  IF auth.uid() = NEW.id THEN
    NEW.is_premium := OLD.is_premium;
    NEW.activated_at := OLD.activated_at;
  END IF;
  RETURN NEW;
END;
$function$;

DROP TRIGGER IF EXISTS protect_premium_fields_trigger ON public.profiles;
CREATE TRIGGER protect_premium_fields_trigger
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.protect_premium_fields();

-- ---------- admin helpers (admin = eltalinlightdream@gmail.com) ----------
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = auth.uid()
      AND lower(email) = 'eltalinlightdream@gmail.com'
  );
$$;

CREATE OR REPLACE FUNCTION public.get_all_students()
RETURNS TABLE(id uuid, email text, full_name text, is_premium boolean, activated_at timestamptz, created_at timestamptz)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;
  RETURN QUERY
    SELECT p.id, u.email::text, p.full_name, p.is_premium, p.activated_at, p.created_at
    FROM public.profiles p
    JOIN auth.users u ON u.id = p.id
    ORDER BY p.created_at DESC;
END;
$$;

CREATE OR REPLACE FUNCTION public.admin_set_student_premium(target_user_id uuid, premium boolean)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;
  UPDATE public.profiles
  SET is_premium = premium,
      activated_at = CASE WHEN premium THEN now() ELSE NULL END
  WHERE id = target_user_id;
END;
$$;

-- Lock down function execution
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.protect_premium_fields() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.get_all_students() FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.admin_set_student_premium(uuid, boolean) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.is_admin() FROM PUBLIC, anon;

-- Done. After running, sign up on the site with eltalinlightdream@gmail.com
-- to create your (admin) account.
