import styles from './PackageCard.module.css';

function PackageCard({ destination, duration, groupSize, price, category }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.badge}>{category}</span>
        <h3>{destination}</h3>
      </div>
      <ul className={styles.metaList}>
        <li>{duration}</li>
        <li>{groupSize}</li>
      </ul>
      <p className={styles.price}>{price}</p>
      <button type="button" className={styles.button}>Book Preview</button>
    </article>
  );
}

export default PackageCard;
