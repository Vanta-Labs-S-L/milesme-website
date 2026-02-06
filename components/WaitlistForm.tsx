"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import styles from "./WaitlistForm.module.css";

export function WaitlistForm() {
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
      setMessage("You're on the list! We'll be in touch soon.");
      setEmail("");
    }, 1000);

    /* Uncomment when Supabase is set up:
    try {
      const supabase = createClient();

      const { error } = await supabase
        .from("waitlist")
        .insert([
          {
            email: email.toLowerCase().trim(),
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        if (error.code === "23505") {
          setStatus("error");
          setMessage("You're already on the waitlist!");
        } else {
          throw error;
        }
      } else {
        setStatus("success");
        setMessage("You're on the list! We'll be in touch soon.");
        setEmail("");
      }
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
    */
  };

  return (
    <section id="waitlist" className={styles.waitlist}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Join the Waitlist</h2>
          <p className={styles.subheading}>
            Be the first to know when MilesMe launches. Get early access and exclusive route packs.
          </p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
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
              <div className={`${styles.message} ${status === "success" ? styles.success : styles.error}`}>
                {message}
              </div>
            )}
          </form>

          <p className={styles.disclaimer}>
            We respect your privacy. No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
