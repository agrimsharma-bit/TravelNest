import styles from './SuccessMessage.module.css';

function SuccessMessage() {
  return (
    <div className={styles.message} role="status" aria-live="polite">
      <h2>Enquiry submitted successfully</h2>
      <p>Thanks for sharing your trip details. Our team will review the request and get back with a tailored plan soon.</p>
    </div>
  );
}

export default SuccessMessage;
