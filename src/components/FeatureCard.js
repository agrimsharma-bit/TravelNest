import styles from './FeatureCard.module.css';

function FeatureCard({ icon, title, description }) {
  return (
    <article className={styles.card}>
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default FeatureCard;
