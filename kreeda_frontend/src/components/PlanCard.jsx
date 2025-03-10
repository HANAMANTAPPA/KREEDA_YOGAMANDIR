import React from 'react';
import styles from '../stylesheets/PlanCard.module.css'; // Import the CSS module

const PlanCard = ({ image, membership, cost }) => {
  return (
    <div className={styles['plan-card']}>
      <img src={image} alt="Plan" className={styles['plan-image']} /> {/* Replaced heading with image */}
      <h4 className={styles['plan-membership']}>{membership}</h4>
      <p className={styles['plan-starting']}>Starting</p>
      <p className={styles['plan-cost']}>
        <strong className={styles['plan-cost-amount']}>${cost}</strong> / month
      </p>
    </div>
  );
};

export default PlanCard;
