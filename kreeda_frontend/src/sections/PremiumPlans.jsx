// src/PremiumPlans.js
import React from 'react';
import PlanCard from '../components/PlanCard'; // Import the PlanCard component
import styles from '../stylesheets/PremiumPlans.module.css'; // Import the CSS module

// Import the images for the plans
import eliteImage from '../assets/ELITE.png';
import proImage from '../assets/PRO.png';
import homeImage from '../assets/HOME.png';

const PremiumPlans = () => {
  return (
    <section className={styles.premiumPlans}>
      <div className="container">
        <h2 className={styles.premiumHeading}>Our Premium Plans</h2>
        <p className={styles.premiumMessage}>
          Unlock the ultimate package with exclusive benefits and personalized services for a superior journey.
        </p>
        <div className={styles.plansContainer}>
          <PlanCard image={eliteImage} membership="Elite Membership" cost="99" />
          <PlanCard image={proImage} membership="Pro Membership" cost="49" />
          <PlanCard image={homeImage} membership="Home Membership" cost="29" />
        </div>
      </div>
    </section>
  );
};

export default PremiumPlans;
