const MS_PER_DAY = 86_400_000;

export function formatDate(value: string | null): string {
  if (!value) return "—";
  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatRelative(value: string | null): string {
  if (!value) return "Never";
  const elapsed = Date.now() - new Date(value).getTime();
  if (elapsed < 60_000) return "Just now";
  const minutes = Math.floor(elapsed / 60_000);
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(elapsed / MS_PER_DAY);
  if (days < 30) return `${days}d ago`;
  return formatDate(value);
}

export function isWithinDays(value: string | null, days: number): boolean {
  if (!value) return false;
  return Date.now() - new Date(value).getTime() <= days * MS_PER_DAY;
}
