"use client";

import { useState } from "react";
import styles from "./WaitlistNew.module.css";

export function WaitlistNew() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    // Simulate submission for design preview (Supabase disabled)
    setTimeout(() => {
      setStatus("success");
      setMessage("");
      setEmail("");
    }, 1000);
  };

  return (
    <section id="waitlist" className={styles.waitlist}>
      <div className={styles.container}>
        {status === "success" ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 24L21 29L32 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className={styles.successHeading}>You're on the list.</h2>
            <p className={styles.successMessage}>
              We'll email you the moment MilesMe launches. Get ready to explore.
            </p>
          </div>
        ) : (
          <div className={styles.content}>
            <span className={styles.overline}>Get Early Access</span>
            <h2 className={styles.heading}>Join the Waitlist</h2>
            <p className={styles.subheading}>
              Be the first to discover routes you'll love. No spam, just one email when we launch.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={styles.input}
                  disabled={status === "loading"}
                  required
                />
                <button
                  type="submit"
                  className={`button button--primary ${styles.submitButton}`}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Joining..." : "Join Waitlist"}
                </button>
              </div>

              {message && (
                <div className={`${styles.message} ${status === "error" ? styles.error : ""}`}>
                  {message}
                </div>
              )}
            </form>

            <p className={styles.disclaimer}>
              We'll only email you when we launch. No spam, ever.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
