"use client";

import { useEffect, useState } from "react";
import styles from "./NavNew.module.css";

export function NavNew({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(forceScrolled || window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""} ${isMenuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/Logo.png" alt="MilesMe" className={styles.logoImage} />
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        <div className={`${styles.menu} ${isMenuOpen ? styles.menuVisible : ""}`}>
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
