import styles from '@/styles/Services.module.css';
import { services } from '@/lib/constants';

export default function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.heading}>Our Services</h2>
      <ul className={styles.list}>
        {services.map((svc) => (
          <li key={svc.title} className={styles.item}>
            <h3>{svc.title}</h3>
            <p>{svc.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}