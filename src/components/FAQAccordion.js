import { useState } from 'react';
import styles from './FAQAccordion.module.css';

function FAQAccordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  const handleToggle = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <div className={styles.wrapper}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <article key={item.id} className={styles.item}>
            <button
              type="button"
              className={styles.trigger}
              onClick={() => handleToggle(item.id)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen ? <p className={styles.answer}>{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}

export default FAQAccordion;
