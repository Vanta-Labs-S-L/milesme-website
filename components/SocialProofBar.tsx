import styles from "./SocialProofBar.module.css";

export function SocialProofBar() {
  const stats = [
    { value: "10K+", label: "Routes Verified" },
    { value: "500+", label: "Cities Covered" },
    { value: "4.9★", label: "Runner Rating" }
  ];

  return (
    <section className={styles.socialProofBar}>
      <div className={styles.container}>
        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
