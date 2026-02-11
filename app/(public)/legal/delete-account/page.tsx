"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { NavNew } from "@/components/NavNew";
import { submitDeleteRequest, type DeleteRequestResult } from "./actions";
import styles from "./page.module.css";

const initialState: DeleteRequestResult = { success: false, error: "" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={styles.submitButton}
      disabled={pending}
    >
      <span className={styles.buttonLabel}>
        {pending ? "Submitting request..." : "Submit delete request"}
      </span>
    </button>
  );
}

export default function DeleteAccountPage() {
  const [state, formAction] = useFormState(submitDeleteRequest, initialState);

  const emailError = !state.success && state.fieldErrors?.email;
  const reasonError = !state.success && state.fieldErrors?.reason;

  return (
    <div className={styles.page}>
      <NavNew forceScrolled />

      <div className={styles.layout}>
        <Link href="/legal#privacy-policy" className={styles.backLink}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 15L7 10L12 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Privacy Policy
        </Link>

        <div className={styles.card}>
          <h1 className={styles.title}>Delete your MilesMe account</h1>
          <p className={styles.subtitle}>
            Request deletion of your MilesMe account and associated data. We&apos;ll
            review your request and delete your data in line with our Privacy
            Policy.
          </p>
          <p className={styles.helper}>
            Once your account is deleted, your routes, activity history, and
            preferences may no longer be recoverable.
          </p>

          {state.success && (
            <div className={`${styles.alert} ${styles.alertSuccess}`}>
              Your request has been submitted. We&apos;ll review it and get back
              to you if we need any additional information.
            </div>
          )}

          {!state.success && state.error && (
            <div className={`${styles.alert} ${styles.alertError}`}>
              {state.error}
            </div>
          )}

          <form action={formAction} className={styles.form} noValidate>
            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <label htmlFor="email" className={styles.label}>
                  Email address
                </label>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={styles.input}
                aria-invalid={emailError ? "true" : "false"}
                aria-describedby={emailError ? "email-error" : undefined}
              />
              {emailError && (
                <p id="email-error" className={styles.errorText}>
                  {emailError}
                </p>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <div className={styles.labelRow}>
                <label htmlFor="reason" className={styles.label}>
                  Reason for deletion
                </label>
                <span className={styles.optional}>(optional)</span>
              </div>
              <textarea
                id="reason"
                name="reason"
                className={styles.textarea}
                aria-invalid={reasonError ? "true" : "false"}
                aria-describedby={reasonError ? "reason-error" : undefined}
              />
              {reasonError && (
                <p id="reason-error" className={styles.errorText}>
                  {reasonError}
                </p>
              )}
            </div>

            <div className={styles.actions}>
              <SubmitButton />
              <p className={styles.note}>
                By submitting this form, you confirm that you want your MilesMe
                account and associated data deleted in accordance with our{" "}
                <Link href="/legal#privacy-policy">Privacy Policy</Link>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

