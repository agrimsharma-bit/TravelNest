import GuideCard from '../components/GuideCard';
import { guides, storyTimeline } from '../data/siteData';
import styles from './AboutPage.module.css';

function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>About the agency</p>
        <h1>We build travel experiences around trust, insight, and traveler-first planning.</h1>
        <div className={styles.missionGrid}>
          <article>
            <h2>Mission</h2>
            <p>To make travel planning easier through curated journeys, helpful guidance, and reliable support at every step.</p>
          </article>
          <article>
            <h2>Vision</h2>
            <p>To become a trusted travel partner for modern explorers seeking meaningful, well-organized adventures.</p>
          </article>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2>Meet the guides</h2>
          <p>Guide profiles are rendered from a reusable data array for cleaner scaling and maintenance.</p>
        </div>
        <div className={styles.guideGrid}>
          {guides.map((guide) => (
            <GuideCard key={guide.id} {...guide} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2>Agency story</h2>
        </div>
        <div className={styles.timeline}>
          {storyTimeline.map((item) => (
            <article key={item.year} className={styles.timelineItem}>
              <span>{item.year}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
