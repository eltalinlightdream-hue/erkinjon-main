import { z } from "zod";

/** Payload returned by Telegram's login widget (`Telegram.Login.auth`). */
export const telegramAuthSchema = z.object({
  id: z.number().int().positive(),
  first_name: z.string().max(256),
  last_name: z.string().max(256).optional(),
  username: z.string().max(64).optional(),
  photo_url: z.string().url().max(2048).optional(),
  auth_date: z.number().int().positive(),
  hash: z.string().regex(/^[0-9a-f]{64}$/),
});

export type TelegramAuthPayload = z.infer<typeof telegramAuthSchema>;

/** Reject logins older than this, so a leaked payload can't be replayed forever. */
export const TELEGRAM_AUTH_MAX_AGE_SECONDS = 60 * 60 * 24;

const encoder = new TextEncoder();

function toHex(buf: ArrayBuffer): string {
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Telegram's data-check-string: every field except `hash`, sorted, as `key=value` lines. */
export function buildDataCheckString(payload: TelegramAuthPayload): string {
  return Object.entries(payload)
    .filter(([key, value]) => key !== "hash" && value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .sort()
    .join("\n");
}

/**
 * Verify a Telegram login payload as documented at
 * https://core.telegram.org/widgets/login#checking-authorization:
 * HMAC-SHA256(data_check_string, key = SHA256(bot_token)) must equal `hash`.
 * Uses Web Crypto so it runs on both Node and edge runtimes.
 */
export async function verifyTelegramAuth(
  payload: TelegramAuthPayload,
  botToken: string,
  nowSeconds: number = Math.floor(Date.now() / 1000),
): Promise<boolean> {
  if (nowSeconds - payload.auth_date > TELEGRAM_AUTH_MAX_AGE_SECONDS) return false;

  const secret = await crypto.subtle.digest("SHA-256", encoder.encode(botToken));
  const key = await crypto.subtle.importKey(
    "raw",
    secret,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(buildDataCheckString(payload)),
  );
  return constantTimeEqual(toHex(signature), payload.hash);
}
