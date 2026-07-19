import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h3>VoyageVista</h3>
          <p>Crafting memorable escapes for explorers, families, and curious travelers.</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: hello@voyagevista.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
        <div>
          <h4>Social</h4>
          <p>Instagram · Facebook · YouTube</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
