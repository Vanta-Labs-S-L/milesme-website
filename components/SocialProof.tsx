import styles from "./SocialProof.module.css";

export function SocialProof() {
  const stats = [
    { value: "10K+", label: "Routes Verified" },
    { value: "500+", label: "Cities Covered" },
    { value: "4.9★", label: "Runner Rating" }
  ];

  const testimonials = [
    {
      quote: "Finally, an app that understands what runners actually need. No more getting lost or running boring loops.",
      author: "Sarah M.",
      location: "Portland, OR"
    },
    {
      quote: "MilesMe transformed my morning runs. I discover new trails every week without the anxiety of getting lost.",
      author: "James K.",
      location: "Denver, CO"
    },
    {
      quote: "The privacy-first approach is what sold me. I can explore new routes without worrying about being tracked.",
      author: "Maya L.",
      location: "San Francisco, CA"
    }
  ];

  return (
    <section className={styles.socialProof}>
      <div className={styles.container}>
        <div className={styles.statsSection}>
          <h2 className={styles.heading}>Trusted by Runners Everywhere</h2>
          <div className={styles.stats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.testimonialsSection}>
          <h3 className={styles.testimonialsHeading}>What Runners Say</h3>
          <div className={styles.testimonials}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonial}>
                <p className={styles.quote}>"{testimonial.quote}"</p>
                <div className={styles.author}>
                  <span className={styles.authorName}>{testimonial.author}</span>
                  <span className={styles.authorLocation}>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
