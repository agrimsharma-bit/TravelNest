import { useState } from 'react';
import SuccessMessage from '../components/SuccessMessage';
import styles from './ContactPage.module.css';

const initialFormState = {
  fullName: '',
  email: '',
  phoneNumber: '',
  preferredTravelDate: '',
  destinationType: 'Beach',
  travelStyle: 'Solo',
  interests: [],
  message: '',
};

function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((item) => item !== value),
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Enter a 10-digit phone number.';
    }
    if (!formData.preferredTravelDate) newErrors.preferredTravelDate = 'Preferred travel date is required.';
    if (!formData.message.trim()) newErrors.message = 'Please share your trip query.';
    if (formData.interests.length === 0) newErrors.interests = 'Select at least one interest.';

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <p className={styles.eyebrow}>Trip enquiry</p>
        <h1>Tell us about your ideal trip and get a personalized plan.</h1>
      </section>

      {isSubmitted ? (
        <SuccessMessage />
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.grid}>
            <label>
              Full Name
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
              {errors.fullName ? <span className={styles.error}>{errors.fullName}</span> : null}
            </label>

            <label>
              Email
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
              {errors.email ? <span className={styles.error}>{errors.email}</span> : null}
            </label>

            <label>
              Phone Number
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              {errors.phoneNumber ? <span className={styles.error}>{errors.phoneNumber}</span> : null}
            </label>

            <label>
              Preferred Travel Date
              <input
                type="date"
                name="preferredTravelDate"
                value={formData.preferredTravelDate}
                onChange={handleChange}
              />
              {errors.preferredTravelDate ? <span className={styles.error}>{errors.preferredTravelDate}</span> : null}
            </label>

            <label>
              Destination Type
              <select name="destinationType" value={formData.destinationType} onChange={handleChange}>
                <option>Beach</option>
                <option>Mountain</option>
                <option>Heritage</option>
                <option>International</option>
              </select>
            </label>
          </div>

          <fieldset className={styles.fieldset}>
            <legend>Travel Style</legend>
            <div className={styles.optionRow}>
              {['Solo', 'Family', 'Group'].map((style) => (
                <label key={style} className={styles.inlineOption}>
                  <input
                    type="radio"
                    name="travelStyle"
                    value={style}
                    checked={formData.travelStyle === style}
                    onChange={handleChange}
                  />
                  {style}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend>Interests</legend>
            <div className={styles.optionRow}>
              {['Adventure', 'Sightseeing', 'Food Tours', 'Wildlife'].map((interest) => (
                <label key={interest} className={styles.inlineOption}>
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleChange}
                  />
                  {interest}
                </label>
              ))}
            </div>
            {errors.interests ? <span className={styles.error}>{errors.interests}</span> : null}
          </fieldset>

          <label className={styles.fullWidth}>
            Message / Query
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} />
            {errors.message ? <span className={styles.error}>{errors.message}</span> : null}
          </label>

          <div className={styles.buttonRow}>
            <button type="submit" className={styles.primaryButton}>Submit</button>
            <button type="button" className={styles.secondaryButton} onClick={handleReset}>Reset</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactPage;
