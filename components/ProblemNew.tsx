import styles from "./ProblemNew.module.css";

export function ProblemNew() {
  const problems = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 8L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="16" cy="23" r="1.5" fill="currentColor"/>
        </svg>
      ),
      title: "The same routes get boring",
      description: "You've run that loop a hundred times. Where's the adventure?"
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L20 12L28 13L22 19L24 28L16 23L8 28L10 19L4 13L12 12L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Exploring feels risky",
      description: "New areas mean getting lost, unsafe paths, or wasted time."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="6" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M6 12H26" stroke="currentColor" strokeWidth="2"/>
          <circle cx="11" cy="9" r="1" fill="currentColor"/>
          <circle cx="15" cy="9" r="1" fill="currentColor"/>
        </svg>
      ),
      title: "Planning takes too long",
      description: "Researching routes shouldn't take longer than the run itself."
    }
  ];

  return (
    <section className={styles.problem}>
      <div className={styles.container}>
        <span className={styles.overline}>The Problem</span>
        <h2 className={styles.heading}>
          Running shouldn't feel like <span className={styles.accent}>work.</span>
        </h2>
        <p className={styles.subheading}>
          Most runners face the same frustrations—routes get stale, exploring feels risky, and planning eats up your time.
        </p>

        <div className={styles.cards}>
          {problems.map((problem, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{problem.icon}</div>
              <h3 className={styles.cardTitle}>{problem.title}</h3>
              <p className={styles.cardDescription}>{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
