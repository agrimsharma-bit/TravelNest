import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.kicker}>Plan with confidence</p>
        <h1>Discover remarkable journeys designed for every kind of traveler.</h1>
        <p>
          Explore curated packages, flexible itineraries, and on-ground support that turns travel ideas into memorable experiences.
        </p>
        <Link to="/packages" className={styles.ctaButton}>
          Explore Destinations
        </Link>
      </div>
      <div className={styles.visualCard}>
        <div>
          <span>Popular this season</span>
          <strong>Beach, mountain, heritage, and international escapes</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;
