"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./HowItWorksNew.module.css";

const steps = [
  {
    number: "01",
    title: "Set Your Preferences",
    description:
      "Pick your distance, choose what terrain feels right today. We\u2019ll take it from there.",
    screen: "/images/genrate route.png",
  },
  {
    number: "02",
    title: "Get Curated Routes",
    description:
      "Routes show up instantly, built around your preferences.",
    screen: "/images/Preview route.png",
  },
  {
    number: "03",
    title: "Go & Discover",
    description:
      "Head out with confidence. Turn-by-turn navigation keeps you on track \u2014 anything you love, you can save.",
    screen: "/images/go.png",
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
          {/* Mobile-only header (above phone on small screens) */}
          <div className={styles.mobileHeader}>
            <span className={styles.overline}>How It Works</span>
            <h2 className={styles.heading}>
              Built around how you like to{" "}
              <span className={styles.accent}>walk or run.</span>
            </h2>
          </div>

          {/* Two-column content */}
          <div className={styles.columns}>
          {/* Left: Text content */}
          <div className={styles.contentColumn}>
            {/* Header */}
            <div className={styles.header}>
              <span className={styles.overline}>How It Works</span>
              <h2 className={styles.heading}>
                Built around how you like to{" "}
                <span className={styles.accent}>walk or run.</span>
              </h2>
            </div>

            <div className={styles.stepsWrapper}>
              <div
                className={styles.stepsTrack}
                style={{ '--slider-offset': `${activeStep * 100}%` } as React.CSSProperties}
              >
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
              {steps.map((step, index) => (
                <img
                  key={index}
                  src={step.screen}
                  alt={step.title}
                  className={`${styles.phoneScreen} ${
                    activeStep === index ? styles.screenActive : ""
                  }`}
                />
              ))}
            </div>

            {/* Store badges */}
            <div className={styles.storeBadges}>
              <div className={styles.storeBadge}>
                <svg className={styles.storeIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="#FFFFFF"/>
                </svg>
                <div className={styles.storeBadgeText}>
                  <span className={styles.storeBadgeLabel}>Coming soon on</span>
                  <span className={styles.storeBadgeName}>App Store</span>
                </div>
              </div>
              <div className={styles.storeBadge}>
                <svg className={styles.storeIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4"/>
                  <path d="M17.556 8.223l-3.764 3.764 3.764 3.764 4.251-2.42a1.004 1.004 0 000-1.748l-4.251-2.36z" fill="#FBBC04"/>
                  <path d="M3.609 1.814L13.792 12l3.764-3.777L6.083.462a1.21 1.21 0 00-2.474 1.352z" fill="#34A853"/>
                  <path d="M13.792 12L3.61 22.186a1.21 1.21 0 002.474 1.352l11.473-7.761L13.792 12z" fill="#EA4335"/>
                </svg>
                <div className={styles.storeBadgeText}>
                  <span className={styles.storeBadgeLabel}>Coming soon on</span>
                  <span className={styles.storeBadgeName}>Google Play</span>
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
