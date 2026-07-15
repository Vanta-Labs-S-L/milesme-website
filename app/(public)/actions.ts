"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const waitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .transform((value) => value.toLowerCase()),
});

export type WaitlistResult =
  | { success: true }
  | { success: false; error: string };

async function notifyNewSignup(email: string): Promise<void> {
  const webhookUrl = process.env.SLACK_WAITLIST_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `🎉 New MilesMe waitlist signup: ${email}`,
      }),
    });
  } catch {}
}

export async function joinWaitlist(
  _prevState: WaitlistResult | null,
  formData: FormData
): Promise<WaitlistResult> {
  const parsed = waitlistSchema.safeParse({ email: formData.get("email") });

  if (!parsed.success) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const { email } = parsed.data;

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("waitlist").insert({ email });

    if (error) {
      // 23505 is a unique-constraint violation: this email is already on the
      // list. Treat it as success so we don't reveal who has already signed
      // up, and skip the notification since it isn't a new signup.
      if (error.code === "23505") {
        return { success: true };
      }

      return {
        success: false,
        error: "Something went wrong. Please try again.",
      };
    }

    await notifyNewSignup(email);

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Unable to join right now. Please try again shortly.",
    };
  }
}
