import React from 'react';
import styles from '../stylesheets/FitnessCard.module.css'; // Import the CSS module

const FitnessCard = ({ imageSrc, text, isImageRight }) => {
  return (
    <div
      className={`${styles['fitness-card']} ${
        isImageRight ? styles['image-right'] : styles['image-left']
      }`}
    >
      <div className={styles['card-content']}>
        <div
          className={`${styles['image-container']} ${
            isImageRight ? styles['order-right'] : styles['order-left']
          }`}
        >
          <img src={imageSrc} alt="fitness" className={styles['card-image']} />
        </div>
        <div
          className={`${styles['text-container']} ${
            isImageRight ? styles['order-left'] : styles['order-right']
          }`}
        >
          <div className={styles['card-text']}>{text}</div>
          <div className={styles['hero-buttons']}>
            <button className={`${styles.btn} ${styles['btn-sign-up']}`}>Free Demo</button>
            <button className={`${styles.btn} ${styles['btn-join-now']}`}>Join Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessCard;
