import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/siteData';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.brand}>
          <span className={styles.logoMark}>✈</span>
          <span>VoyageVista</span>
        </NavLink>
        <nav aria-label="Primary navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
