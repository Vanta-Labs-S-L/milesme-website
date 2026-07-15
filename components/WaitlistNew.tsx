"use client";

import { useActionState } from "react";
import { joinWaitlist } from "@/app/(public)/actions";
import styles from "./WaitlistNew.module.css";

export function WaitlistNew() {
  const [state, formAction, isPending] = useActionState(joinWaitlist, null);

  const errorMessage = state && !state.success ? state.error : "";

  return (
    <section id="waitlist" className={styles.waitlist}>
      <div className={styles.container}>
        {state?.success ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 24L21 29L32 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className={styles.successHeading}>You&apos;re on the list.</h2>
            <p className={styles.successMessage}>
              We&apos;ll email you the moment MilesMe launches. Get ready to explore.
            </p>
          </div>
        ) : (
          <div className={styles.content}>
            <span className={styles.overline}>Get Early Access</span>
            <h2 className={styles.heading}>Join the Waitlist</h2>
            <p className={styles.subheading}>
              Be the first to discover routes you&apos;ll love. No spam, just one email when we launch.
            </p>

            <form action={formAction} className={styles.form} noValidate>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={styles.input}
                  disabled={isPending}
                  required
                  aria-invalid={errorMessage ? "true" : "false"}
                  aria-describedby={errorMessage ? "waitlist-error" : undefined}
                />
                <button
                  type="submit"
                  className={`button button--primary ${styles.submitButton}`}
                  disabled={isPending}
                >
                  {isPending ? "Joining..." : "Join Waitlist"}
                </button>
              </div>

              {errorMessage && (
                <div id="waitlist-error" className={`${styles.message} ${styles.error}`}>
                  {errorMessage}
                </div>
              )}
            </form>

            <p className={styles.disclaimer}>
              We&apos;ll only email you when we launch. No spam, ever.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
