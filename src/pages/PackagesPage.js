import { faqs, packages, pricingPlans, testimonials } from '../data/siteData';
import FAQAccordion from '../components/FAQAccordion';
import PackageCard from '../components/PackageCard';
import styles from './PackagesPage.module.css';

function PackagesPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Tour packages</p>
        <h1>Choose from curated escapes designed for different travel goals and budgets.</h1>
        <p>
          Discover destination options, price tiers, and traveler feedback in one place before making your next booking decision.
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2>Package overview</h2>
          <p>Each package is rendered from reusable data so the list can scale without duplicate markup.</p>
        </div>
        <div className={styles.cardGrid}>
          {packages.map((travelPackage) => (
            <PackageCard key={travelPackage.id} {...travelPackage} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2>Pricing plans</h2>
        </div>
        <div className={styles.planGrid}>
          {pricingPlans.map((plan) => (
            <article className={styles.planCard} key={plan.name}>
              <h3>{plan.name}</h3>
              <p className={styles.planPrice}>{plan.price}</p>
              <p>{plan.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2>Traveler stories</h2>
        </div>
        <div className={styles.testimonialList}>
          {testimonials.map((testimonial) => (
            <article className={styles.testimonialCard} key={testimonial.id}>
              <p>“{testimonial.quote}”</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2>Frequently asked questions</h2>
        </div>
        <FAQAccordion items={faqs} />
      </section>
    </div>
  );
}

export default PackagesPage;
