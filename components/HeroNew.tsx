"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroNew.module.css";

export function HeroNew() {
  const collageRef = useRef<HTMLDivElement>(null);

  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Parallax on scroll
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const handleScroll = () => {
      const collage = collageRef.current;
      if (!collage) return;

      const scrollY = window.scrollY;
      const cards = collage.children as HTMLCollectionOf<HTMLElement>;

      // Each card moves at a different speed for depth
      if (cards[0]) cards[0].style.transform = `rotate(-3deg) translateY(${scrollY * -0.04}px)`;
      if (cards[1]) cards[1].style.transform = `rotate(2deg) translateY(${scrollY * -0.08}px)`;
      if (cards[2]) cards[2].style.transform = `rotate(-1.5deg) translateY(${scrollY * -0.12}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left — Copy */}
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Made for your next{" "}
            <span className={styles.accent}>route.</span>
          </h1>

          <p className={styles.tagline}>
            Loop routes tailored to your distance, terrain, and preferences.
          </p>

          <div className={styles.ctaGroup}>
            <button
              onClick={scrollToWaitlist}
              className={styles.ctaButton}
            >
              Join Waitlist
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("how-it-works");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={styles.ctaSecondary}
            >
              How It Works
            </button>
          </div>
        </div>

        {/* Right — Floating Collage */}
        <div className={styles.collage} ref={collageRef}>
          {/* Card 1: largest, back-left */}
          <div className={styles.card1}>
            <img
              src="/images/runner in between trees.jpg"
              alt="Scenic trail runner"
              className={styles.cardImage}
            />
            <span className={styles.tagPill} style={{ bottom: 20, left: 20 }}>
              Scenic
            </span>
          </div>

          {/* Card 2: medium, back-right */}
          <div className={styles.card2}>
            <img
              src="/images/runner on a street.jpg"
              alt="Urban runner"
              className={styles.cardImage}
            />
            <span className={styles.tagPill} style={{ top: 20, right: 20 }}>
              Urban
            </span>
          </div>

          {/* Card 3: smallest, front-center */}
          <div className={styles.card3}>
            <img
              src="/images/runner on bushy trail.jpg"
              alt="Nature trail runner"
              className={styles.cardImage}
            />
            <span className={styles.tagPill} style={{ bottom: 20, right: 20 }}>
              Trail
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
