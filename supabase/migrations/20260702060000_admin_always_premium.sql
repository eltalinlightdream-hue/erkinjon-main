-- The site owner's account is always premium.
-- A BEFORE trigger forces is_premium = true for the admin profile no matter
-- which path updates it (client, RPC, service role), so the admin can never
-- be locked out of premium content.

CREATE OR REPLACE FUNCTION public.enforce_admin_premium()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM auth.users u
    WHERE u.id = NEW.id
      AND lower(u.email) = 'eltalinlightdream@gmail.com'
  ) THEN
    NEW.is_premium := true;
    IF TG_OP = 'UPDATE' THEN
      NEW.activated_at := COALESCE(NEW.activated_at, OLD.activated_at, now());
    ELSE
      NEW.activated_at := COALESCE(NEW.activated_at, now());
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.enforce_admin_premium() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS zz_enforce_admin_premium_trigger ON public.profiles;
-- "zz" prefix so it runs after protect_premium_fields_trigger (triggers fire
-- in name order) and has the final word on is_premium.
CREATE TRIGGER zz_enforce_admin_premium_trigger
  BEFORE INSERT OR UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.enforce_admin_premium();

-- Grant premium to the admin account right now.
UPDATE public.profiles p
SET is_premium = true,
    activated_at = COALESCE(p.activated_at, now())
WHERE p.id IN (
  SELECT id FROM auth.users WHERE lower(email) = 'eltalinlightdream@gmail.com'
);
