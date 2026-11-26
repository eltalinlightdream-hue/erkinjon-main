import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { telegramAuthSchema, verifyTelegramAuth } from "@/lib/telegram-auth";

/**
 * Telegram accounts have no email, so each one maps to a stable placeholder
 * address on a subdomain we control. No mail is ever sent to it.
 */
const TELEGRAM_EMAIL_DOMAIN = "telegram.abduraimoverkinjon.uz";

/**
 * Exchange a verified Telegram login for a Supabase magic-link token.
 * The client redeems it with `supabase.auth.verifyOtp` to get a session.
 */
export const signInWithTelegram = createServerFn({ method: "POST" })
  .inputValidator(telegramAuthSchema.parse)
  .handler(async ({ data }) => {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    if (!botToken) {
      console.error("[telegram] TELEGRAM_BOT_TOKEN is not set");
      throw new Error("Telegram sign-in is not configured yet.");
    }

    if (!(await verifyTelegramAuth(data, botToken))) {
      throw new Error("Telegram sign-in could not be verified. Please try again.");
    }

    const email = `tg-${data.id}@${TELEGRAM_EMAIL_DOMAIN}`;
    const fullName = [data.first_name, data.last_name].filter(Boolean).join(" ");

    const { error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      email_confirm: true,
      user_metadata: {
        full_name: fullName,
        avatar_url: data.photo_url,
        telegram_id: data.id,
        telegram_username: data.username,
        provider: "telegram",
      },
    });
    // An existing account is fine: this is a returning user signing in.
    if (createError && createError.code !== "email_exists") {
      console.error("[telegram] createUser failed", createError);
      throw new Error("Could not create your account. Please try again.");
    }

    const { data: link, error: linkError } = await supabaseAdmin.auth.admin.generateLink({
      type: "magiclink",
      email,
    });
    if (linkError || !link.properties?.hashed_token) {
      console.error("[telegram] generateLink failed", linkError);
      throw new Error("Could not sign you in. Please try again.");
    }

    return { tokenHash: link.properties.hashed_token };
  });
