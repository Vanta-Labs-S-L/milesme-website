"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const deleteRequestSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .transform((value) => value.toLowerCase()),
  reason: z
    .string()
    .trim()
    .max(2000, "Reason is too long")
    .optional()
    .or(z.literal("")),
});

export type DeleteRequestResult =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Record<string, string> };

export async function submitDeleteRequest(
  _prevState: DeleteRequestResult | null,
  formData: FormData
): Promise<DeleteRequestResult> {
  const raw = {
    email: formData.get("email"),
    reason: formData.get("reason"),
  };

  const parseResult = deleteRequestSchema.safeParse(raw);

  if (!parseResult.success) {
    const fieldErrors: Record<string, string> = {};

    for (const issue of parseResult.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }

    return {
      success: false,
      error: "Please check the form and try again.",
      fieldErrors,
    };
  }

  const { email, reason } = parseResult.data;

  try {
    const supabase = await createClient();

    const { error } = await supabase.from("delete_requests").insert({
      email,
      reason: reason || null,
      status: "pending",
    });

    if (error) {
      // Avoid leaking internal error details to the user
      return {
        success: false,
        error: "Something went wrong while submitting your request. Please try again.",
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Unable to submit your request right now. Please try again shortly.",
    };
  }
}

