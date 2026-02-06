"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>M</span>
          <span className={styles.logoText}>milesme.</span>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.menu} ${isMobileMenuOpen ? styles.menuOpen : ""}`}>
          <button onClick={() => scrollToSection("features")} className={styles.navLink}>
            Features
          </button>
          <button onClick={() => scrollToSection("how-it-works")} className={styles.navLink}>
            How It Works
          </button>
          <button onClick={() => scrollToSection("pricing")} className={styles.navLink}>
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("waitlist")}
            className={`button button--primary ${styles.ctaButton}`}
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
