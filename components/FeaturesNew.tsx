import styles from "./FeaturesNew.module.css";

export function FeaturesNew() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>What Makes Us Different</span>
          <h2 className={styles.heading}>
            Built for runners who <span className={styles.accent}>explore.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Large feature - spans full width */}
          <div className={styles.featureLarge}>
            <div className={styles.featureImage}>
              <img
                src="/images/runner in between trees.jpg"
                alt="Curated by real runners"
                className={styles.image}
              />
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Curated by Runners</h3>
              <p className={styles.featureDescription}>
                Every route is verified, photographed, and rated by real runners. No more guessing if that trail is worth it—see exactly what to expect before you go.
              </p>
            </div>
          </div>

          {/* Two stacked features */}
          <div className={styles.featureStacked}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="8" y="8" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 14L20 26M14 20L26 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Smart Matching</h3>
              <p className={styles.featureDescription}>
                Tell us your mood and goals. Our algorithm surfaces routes that fit your vibe—peaceful sunrise run or intense hill workout.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="10" y="10" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15 20L18 23L25 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Offline & Private</h3>
              <p className={styles.featureDescription}>
                Download routes for offline use. Your location data stays on your device. Run freely without being tracked.
              </p>
            </div>
          </div>

          {/* Full width feature - image right */}
          <div className={styles.featureFull}>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Built for Explorers</h3>
              <p className={styles.featureDescription}>
                Discover hidden gems in your city or find the best runs when traveling. Filter by scenery, surface type, elevation, and safety ratings.
              </p>
            </div>
            <div className={styles.featureImage}>
              <img
                src="/images/runner on bushy trail.jpg"
                alt="Built for explorers"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
