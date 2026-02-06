import styles from "./HowItWorks.module.css";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Set Your Preferences",
      description: "Tell us your distance, terrain preference, and how you're feeling today. Want hills? Flat paths? Scenic views?",
      image: "/images/step-1-preferences.jpg",
      alt: "Mobile app showing preference selection screen"
    },
    {
      number: "02",
      title: "Get Curated Routes",
      description: "MilesMe instantly surfaces routes that match your criteria—verified by real runners, complete with photos and ratings.",
      image: "/images/step-2-routes.jpg",
      alt: "Mobile app showing curated route recommendations"
    },
    {
      number: "03",
      title: "Run & Discover",
      description: "Start your run with confidence. Navigate turn-by-turn, save favorites, and share your best discoveries with the community.",
      image: "/images/step-3-run.jpg",
      alt: "Mobile app showing navigation during a run"
    }
  ];

  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.container}>
        <h2 className={styles.heading}>How It Works</h2>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepContent}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              <div className={styles.stepImageContainer}>
                <img
                  src={step.image}
                  alt={step.alt}
                  className={styles.stepImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
