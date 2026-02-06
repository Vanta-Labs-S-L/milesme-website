"use client";

import styles from "./Hero.module.css";

export function Hero() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <img
          src="/images/hero-runner.jpg"
          alt="Runner on a scenic mountain trail at sunrise"
          className={styles.heroImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.headline}>
          Discover Routes.
          <br />
          Run Further.
        </h1>
        <p className={styles.subheadline}>
          Every run should feel like an adventure. Find curated routes that match your mood, distance, and terrain—effortlessly.
        </p>
        <button
          onClick={scrollToWaitlist}
          className={`button button--primary ${styles.cta}`}
        >
          Join the Waitlist
        </button>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollArrow}>↓</span>
      </div>
    </section>
  );
}
