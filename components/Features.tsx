import styles from "./Features.module.css";

export function Features() {
  const features = [
    {
      title: "Curated by Runners",
      description: "Every route is verified, photographed, and rated by real runners. No more guessing if that trail is worth it.",
      image: "/images/feature-curated.jpg",
      alt: "Community of runners sharing route experiences"
    },
    {
      title: "Smart Matching",
      description: "Tell us your mood and goals. Our algorithm surfaces routes that fit your vibe—whether you want a peaceful sunrise run or an intense hill workout.",
      image: "/images/feature-smart-matching.jpg",
      alt: "AI-powered route matching interface"
    },
    {
      title: "Offline & Private",
      description: "Download routes for offline use. Your location data stays on your device. Run freely without being tracked.",
      image: "/images/feature-privacy.jpg",
      alt: "Privacy-focused offline navigation"
    },
    {
      title: "Built for Explorers",
      description: "Discover hidden gems in your city or find the best runs when traveling. Filter by scenery, surface type, elevation, and safety ratings.",
      image: "/images/feature-explorer.jpg",
      alt: "Explorer discovering new running routes"
    }
  ];

  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Why MilesMe?</h2>
          <p className={styles.subheading}>
            More than just another running app. MilesMe is your personal guide to unforgettable runs.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureImageContainer}>
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className={styles.featureImage}
                />
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
