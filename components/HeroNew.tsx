"use client";

import styles from "./HeroNew.module.css";

export function HeroNew() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Column - Content */}
        <div className={styles.content}>
          <span className={styles.overlinePill}>Your next adventure awaits</span>

          <h1 className={styles.headline}>
            Routes you can <span className={styles.accent}>trust.</span>
          </h1>

          <p className={styles.subheadline}>
            Every run should feel like an adventure. Find curated routes that
            match your mood, distance, and terrain — effortlessly.
          </p>

          <div className={styles.buttonGroup}>
            <button
              onClick={scrollToWaitlist}
              className={`button button--primary ${styles.primaryButton}`}
            >
              Join Waitlist &rarr;
            </button>
            <button
              onClick={scrollToHowItWorks}
              className={`button button--secondary ${styles.secondaryButton}`}
            >
              See How It Works
            </button>
          </div>

          <span className={styles.trustText}>
            Join 5,000+ active explorers
          </span>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statValue}>10K+</span>
              <span className={styles.statLabel}>Routes</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>Cities</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>4.9</span>
              <span className={styles.statLabel}>Rating</span>
            </div>
          </div>
        </div>

        {/* Right Column - Overlapping Images */}
        <div className={styles.imageComposition}>
          <div className={styles.imagePrimary}>
            <img
              src="/images/runner on a street.jpg"
              alt="Runner on a scenic street route"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.imageSecondary}>
            <img
              src="/images/runner in between trees.jpg"
              alt="Runner on a forest trail"
              className={styles.heroImage}
            />
          </div>

          <div className={styles.floatingBadge}>
            <div className={styles.badgeIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="var(--color--green-500)"/>
              </svg>
            </div>
            <div className={styles.badgeText}>
              <div className={styles.badgeTitle}>Top Rated</div>
              <div className={styles.badgeSub}>Curated Trails</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
