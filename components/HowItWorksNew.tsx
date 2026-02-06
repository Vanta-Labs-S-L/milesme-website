"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HowItWorksNew.module.css";

const steps = [
  {
    number: "01",
    title: "Set Your Preferences",
    description:
      "Distance, terrain, mood. Tell us what kind of run you're looking for today.",
  },
  {
    number: "02",
    title: "Get Curated Routes",
    description:
      "Instantly see routes that match — verified by real runners, complete with photos and ratings.",
  },
  {
    number: "03",
    title: "Run & Discover",
    description:
      "Start with confidence. Navigate turn-by-turn, save favorites, share your best finds.",
  },
];

export function HowItWorksNew() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const scrollableDistance = sectionHeight - viewportHeight;

      if (scrolled < 0 || scrollableDistance <= 0) {
        setActiveStep(0);
        return;
      }

      const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
      const stepIndex = Math.min(
        Math.floor(progress * steps.length),
        steps.length - 1
      );
      setActiveStep(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className={styles.section}>
      <div className={styles.stickyWrapper}>
        <div className={styles.container}>
          {/* Header: full-width row above the grid */}
          <div className={styles.header}>
            <span className={styles.overline}>How It Works</span>
            <h2 className={styles.heading}>
              From curious to confident in{" "}
              <span className={styles.accent}>seconds.</span>
            </h2>
          </div>

          {/* Two-column content */}
          <div className={styles.columns}>
          {/* Left: Text content */}
          <div className={styles.contentColumn}>
            <div className={styles.stepsWrapper}>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`${styles.stepContent} ${
                    activeStep === index ? styles.stepActive : ""
                  } ${activeStep > index ? styles.stepExited : ""}`}
                >
                  <div className={styles.stepNumber}>{step.number}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.progressBar}>
              <span className={styles.progressCount}>
                {String(activeStep + 1).padStart(2, "0")}
              </span>
              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>
              <span className={styles.progressTotal}>
                {String(steps.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className={styles.phoneColumn}>
            <div className={styles.phoneGlow} />
            <div className={styles.phoneFrame}>
              <img
                src="/images/Test Mockup 17.png"
                alt="MilesMe app"
                className={styles.phoneScreen}
              />

              {/* Step 1: Preferences overlay */}
              <div
                className={`${styles.screenOverlay} ${
                  activeStep === 0 ? styles.overlayActive : ""
                }`}
              >
                <div className={styles.overlayCardTop}>
                  <div className={styles.overlayCardTitle}>Set Preferences</div>
                  <div className={styles.overlayTags}>
                    <span className={styles.overlayTag}>5-10 km</span>
                    <span className={styles.overlayTag}>Trail</span>
                    <span className={styles.overlayTag}>Scenic</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Routes overlay */}
              <div
                className={`${styles.screenOverlay} ${
                  activeStep === 1 ? styles.overlayActive : ""
                }`}
              >
                <div className={styles.overlayCardTop}>
                  <div className={styles.overlayCardTitle}>
                    Golden Gate Loop
                  </div>
                  <div className={styles.overlayCardMeta}>
                    5.2 mi &middot; Moderate &middot; 4.9&#9733;
                  </div>
                </div>
                <div className={styles.overlayCardBottom}>
                  <div className={styles.overlayCardTitle}>Sunset Trail</div>
                  <div className={styles.overlayCardMeta}>
                    3.8 mi &middot; Easy &middot; 4.7&#9733;
                  </div>
                </div>
              </div>

              {/* Step 3: Go overlay */}
              <div
                className={`${styles.screenOverlay} ${
                  activeStep === 2 ? styles.overlayActive : ""
                }`}
              >
                <div className={styles.overlayCardCenter}>
                  <div className={styles.overlayGoButton}>Start Run</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
