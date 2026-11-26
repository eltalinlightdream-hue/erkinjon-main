import { createHash, createHmac } from "node:crypto";
import { describe, expect, test } from "bun:test";
import {
  TELEGRAM_AUTH_MAX_AGE_SECONDS,
  type TelegramAuthPayload,
  buildDataCheckString,
  verifyTelegramAuth,
} from "./telegram-auth";

const BOT_TOKEN = "123456:TEST-token";
const NOW = 1_800_000_000;

function sign(fields: Omit<TelegramAuthPayload, "hash">, token = BOT_TOKEN): TelegramAuthPayload {
  const checkString = Object.entries(fields)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => `${k}=${v}`)
    .sort()
    .join("\n");
  const secret = createHash("sha256").update(token).digest();
  const hash = createHmac("sha256", secret).update(checkString).digest("hex");
  return { ...fields, hash };
}

const base = { id: 42, first_name: "Erkin", username: "erkin", auth_date: NOW - 60 };

describe("verifyTelegramAuth", () => {
  test("accepts a payload signed with the bot token", async () => {
    expect(await verifyTelegramAuth(sign(base), BOT_TOKEN, NOW)).toBe(true);
  });

  test("rejects a payload signed with a different token", async () => {
    expect(await verifyTelegramAuth(sign(base, "999:other"), BOT_TOKEN, NOW)).toBe(false);
  });

  test("rejects a payload whose fields were changed after signing", async () => {
    const tampered = { ...sign(base), id: 43 };
    expect(await verifyTelegramAuth(tampered, BOT_TOKEN, NOW)).toBe(false);
  });

  test("rejects a payload older than the max age", async () => {
    const old = sign({ ...base, auth_date: NOW - TELEGRAM_AUTH_MAX_AGE_SECONDS - 1 });
    expect(await verifyTelegramAuth(old, BOT_TOKEN, NOW)).toBe(false);
  });
});

describe("buildDataCheckString", () => {
  test("sorts fields, skips hash and undefined values", () => {
    const payload = { ...sign(base), last_name: undefined };
    expect(buildDataCheckString(payload)).toBe(
      `auth_date=${NOW - 60}\nfirst_name=Erkin\nid=42\nusername=erkin`,
    );
  });
});
