import styles from '@/styles/Hero.module.css';
import { destinations } from '@/lib/constants';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Wanderlust Travel Agency</h1>
      <p className={styles.subtitle}>Your adventure starts here</p>
      <div className={styles.destinations}>
        {destinations.map((dest) => (
          <div key={dest} className={styles.destination}>
            {dest}
          </div>
        ))}
      </div>
    </section>
  );
}