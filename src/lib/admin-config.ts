// Single source of truth for the site owner / admin account.
// The database mirrors this in `is_admin()` and `enforce_admin_premium()`
// (supabase/migrations) — keep them in sync if the admin email ever changes.
export const ADMIN_EMAIL = "eltalinlightdream@gmail.com";

export function isAdminEmail(email: string | null | undefined): boolean {
  return (email ?? "").trim().toLowerCase() === ADMIN_EMAIL;
}
