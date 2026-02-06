import styles from "./Problem.module.css";

export function Problem() {
  return (
    <section className={styles.problem}>
      <div className={styles.container}>
        <h2 className={styles.heading}>The Problem</h2>
        <p className={styles.text}>
          Running the same routes gets boring. Exploring unfamiliar areas feels risky. Planning a run shouldn't take longer than the run itself.
        </p>
      </div>
    </section>
  );
}
