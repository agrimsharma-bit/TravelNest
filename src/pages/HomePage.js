import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import { benefits, featureHighlights } from '../data/siteData';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.page}>
      <Hero />
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Why travelers choose us</p>
          <h2>Services built for smooth and memorable holidays.</h2>
        </div>
        <div className={styles.featureGrid}>
          {featureHighlights.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
      <section className={styles.benefitsSection}>
        <div>
          <p className={styles.eyebrow}>Benefits</p>
          <h2>Travel planning that keeps comfort, flexibility, and support in balance.</h2>
        </div>
        <ul className={styles.benefitList}>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
