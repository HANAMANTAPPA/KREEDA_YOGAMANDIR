import React from 'react';
import styles from './AIhome.module.css'; // Import the CSS module
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';

const AIhome = () => (
    <div className={styles['ai-home']}>
        <h2>At-home Workouts</h2>
        <p>
            Easily work out from home while effortlessly tracking your progress.
        </p>
        <div className={styles['gallery']}>
            <img src={img1} alt="Home Workout 1" />
            <img src={img2} alt="Home Workout 2" />
            <img src={img3} alt="Home Workout 3" />
            <img src={img4} alt="Home Workout 4" />
            <img src={img5} alt="Home Workout 5" />
        </div>
    </div>
);

export default AIhome;
