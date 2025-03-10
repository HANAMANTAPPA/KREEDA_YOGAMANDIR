import React from 'react';
import FitnessCard from '../components/FitnessCard';
import Fitness1 from '../assets/Fitness1.png';
import Fitness2 from '../assets/Fitness2.png';
import Fitness3 from '../assets/Fitness3.png';
import styles from '../stylesheets/FitnessPage.module.css'; // Import the CSS module

const FitnessPage = () => {
  return (
    <div className={styles['fitness-page']}style ={{maxWidth: "100vw",overflowX:"hidden"}}>
      <FitnessCard imageSrc={Fitness1} text="Achieve Your Fitness Goals with Tailored Workouts" isImageRight={false} />
      <FitnessCard imageSrc={Fitness2} text="Find Your Balance with Mindful Yoga Practices" isImageRight={true} />
      <FitnessCard imageSrc={Fitness3} text="Elevate Your Game with Expert-Led Sports Training" isImageRight={false} />
    </div>
  );
};

export default FitnessPage;
