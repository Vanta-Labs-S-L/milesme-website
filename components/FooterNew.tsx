import Link from "next/link";
import styles from "./FooterNew.module.css";

export function FooterNew() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src="/images/Logo.png" alt="MilesMe" className={styles.logoImage} />
              <span className={styles.logoText}>milesme</span>
            </div>
            <p className={styles.tagline}>Let's move.</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkHeading}>Product</h4>
              <nav className={styles.linkList}>
                <a href="#features" className={styles.link}>Features</a>
                <a href="#how-it-works" className={styles.link}>How It Works</a>
              </nav>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.linkHeading}>Company</h4>
              <nav className={styles.linkList}>
                <Link href="/privacy" className={styles.link}>Privacy</Link>
                <Link href="/terms" className={styles.link}>Terms</Link>
              </nav>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.linkHeading}>Connect</h4>
              <nav className={styles.linkList}>
                <a href="mailto:hello@milesme.app" className={styles.link}>Contact</a>
                <a href="https://instagram.com/milesme" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
                <a href="https://twitter.com/milesme" target="_blank" rel="noopener noreferrer" className={styles.link}>Twitter</a>
              </nav>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} MilesMe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
