import styles from './GuideCard.module.css';

function GuideCard({ photo, name, expertise, bio }) {
  return (
    <article className={styles.card}>
      <img src={photo} alt={name} className={styles.photo} loading="lazy" />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.expertise}>{expertise}</p>
        <p>{bio}</p>
      </div>
    </article>
  );
}

export default GuideCard;
