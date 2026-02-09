import styles from "./FeaturesNew.module.css";

export function FeaturesNew() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.overline}>Why MilesMe</span>
          <h2 className={styles.heading}>
            Getting outside should be the{" "}
            <span className={styles.accent}>easy part.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Large feature - editorial image card */}
          <div className={styles.featureLarge}>
            <img
              src="/images/green area runner.png"
              alt="Curated by real runners"
              className={styles.imageLarge}
            />
            <div className={styles.featureLargeOverlay}>
              <span className={styles.featureBadge}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M5.25 7L6.5 8.25L8.75 5.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Community Verified
              </span>
              <h3 className={styles.featureLargeTitle}>Real Route Feedback</h3>
              <p className={styles.featureLargeDescription}>
                Walkers and Runners rate routes, flag issues, and leave notes so the next person knows exactly what to expect.
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
              <h3 className={styles.featureTitle}>Routes That Get You</h3>
              <p className={styles.featureDescription}>
                Tell us your distance, terrain, and mood. MilesMe generates loop routes that fit, whether that&#39;s a peaceful sunrise walk or an intense hill session.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="10" y="10" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15 20L18 23L25 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>No Signal, No Problem</h3>
              <p className={styles.featureDescription}>
                MilesMe has great offline support, so poor signal or patchy connectivity won&#39;t slow you down. Your location data stays on your device, always.
              </p>
            </div>
          </div>

          {/* Full width feature - image right */}
          <div className={styles.featureFull}>
            <div className={styles.featureContent}>
              <div className={styles.featureIcon}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M20 8V12M20 28V32M8 20H12M28 20H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Built for Explorers</h3>
              <p className={styles.featureDescription}>
                Discover hidden gems in your city or find the best runs when traveling. Filter by what matters to you.
              </p>
              <div className={styles.filterTags}>
                <span className={styles.filterTag}>Scenery</span>
                <span className={styles.filterTag}>Surface Type</span>
                <span className={styles.filterTag}>Elevation</span>
                <span className={styles.filterTag}>Safety Rating</span>
                <span className={styles.filterTag}>Distance</span>
                <span className={styles.filterTag}>Shade</span>
              </div>
            </div>
            <div className={styles.featureImage}>
              <img
                src="/images/runner along a hill.png"
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
