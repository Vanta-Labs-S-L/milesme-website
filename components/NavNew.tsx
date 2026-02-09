"use client";

import { useEffect, useState } from "react";
import styles from "./NavNew.module.css";

export function NavNew({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(forceScrolled || window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/Logo.png" alt="MilesMe" className={styles.logoImage} />
        </div>

        <div className={styles.menu}>
          <button onClick={() => scrollToSection("how-it-works")} className={styles.navLink}>
            How It Works
          </button>
          <button onClick={() => scrollToSection("features")} className={styles.navLink}>
            Why MilesMe
          </button>
          <button
            onClick={() => scrollToSection("waitlist")}
            className={`button button--primary ${styles.ctaButton}`}
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
