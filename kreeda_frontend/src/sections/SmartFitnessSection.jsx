// src/SmartFitnessSection.js
import React from 'react';
import styles from '../stylesheets/SmartFitnessSection.module.css'; // Import CSS module
import image from '../assets/image.png'; // Import the first image
import image2 from '../assets/image2.png'; // Import the second image

const SmartFitnessSection = () => {
  return (
    <section className={styles.smartFitnessSection}>
      <div className={`container`}>
        <div className={styles.smartFitnessContent}>
          {/* Left side: Image container with two images */}
          <div className={styles.fitnessImageContainer}>
            <img src={image2} alt="Additional Fitness" className={`${styles.fitnessImage} ${styles.imageLeft}`} />
            <img src={image} alt="Fitness" className={styles.fitnessImage} />
          </div>

          {/* Right side: Text content */}
          <div className={styles.fitnessText}>
            <h2 className={styles.fitnessHeading}>
              We provide <span className={styles.highlight}>Smart</span> <br /> AI Fitness Platform
            </h2>
            <ul className={styles.fitnessFeatures}>
              <li>Precise detection and movement observation</li>
              <li>Instant advice & feedback for better results</li>
              <li>Comprehensive support for your wellness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartFitnessSection;
