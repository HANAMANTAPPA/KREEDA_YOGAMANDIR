import React from 'react';
import styles from '../stylesheets/Herosection.module.css'; // Import CSS module
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS (if not already done globally)

const Hero = () => {
  return (
    <section className={styles['hero-section']}>
      {/* Use Bootstrap class directly without referencing it via CSS module */}
      <div className={`container text-center ${styles.containerCustom}`}>
        <h1 className={styles['hero-heading']}>
          Personalized fitness training anytime, anywhere
        </h1>
        <button className={styles['btn-powered-by-ai']}>Powered by AI</button>
        <p className={styles['hero-description']}>
          Empowering your fitness journey with <strong>AI-driven workouts</strong> and personalized guidance.
          Experience the future of fitness with <strong>Kreeda.ai</strong>, where technology meets your training goals.
        </p>
        <div className={styles['hero-buttons']}>
          <button className={`${styles.btn} ${styles['btn-sign-up']}`}>FREE DEMO</button>
          <button className={`${styles.btn} ${styles['btn-join-now']}`}>JOIN NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
