\"use client\";

import { useEffect } from "react";

const CHUNK_ERROR_SUBSTRINGS = [
  "Loading chunk",
  "ChunkLoadError",
  "failed to fetch dynamically imported module",
  "Importing a module script failed",
];

function shouldReloadForError(error: unknown): boolean {
  if (!error) return false;

  const message =
    typeof error === "string"
      ? error
      : (error as { message?: string })?.message ?? String(error);

  return CHUNK_ERROR_SUBSTRINGS.some((substring) =>
    message.toLowerCase().includes(substring.toLowerCase()),
  );
}

export function ChunkReloadOnError() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (shouldReloadForError(event.error ?? event.message)) {
        // Force a full reload so the browser fetches the latest chunks
        window.location.reload();
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (shouldReloadForError(event.reason)) {
        window.location.reload();
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  return null;
}

