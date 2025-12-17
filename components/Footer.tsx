import styles from '@/styles/Footer.module.css';
import { contactInfo } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>{contactInfo.address}</p>
      <p>{contactInfo.phone}</p>
      <p>{contactInfo.email}</p>
    </footer>
  );
}