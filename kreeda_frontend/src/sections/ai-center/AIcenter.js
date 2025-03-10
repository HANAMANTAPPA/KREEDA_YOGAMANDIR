import React from 'react';
import styles from './AIcenter.module.css'; // Import the CSS module
import Main from './Main.png';
import IMG1 from './IMG1.png';
import IMG2 from './IMG2.png';
import IMG3 from './IMG3.png';
import IMG5 from './IMG5.png';
import IMG6 from './IMG6.png';

const AIcenter = () => (
    <div className={styles['ai-center']}>
       <div className='container'>
        <h2>At-Center Workouts</h2>
            <p>
                Discover our innovative fitness ideas including trainer-led workouts, engaging group sessions, 
                and exciting gamification to elevate your fitness journey.
            </p>
            <div className={styles['main-image-container']}>
                <img src={Main} alt="Main Workout" className={styles['main-image']} />
                <div className={styles['carousel-container']}>
                    <div className={styles['carousel-scroll']}>
                        <img src={IMG1} alt="Workout 1" className={styles['small-image']} />
                        <img src={IMG2} alt="Workout 2" className={styles['small-image']} />
                        <img src={IMG3} alt="Workout 3" className={styles['small-image']} />
                        <img src={IMG6} alt="Workout 6" className={styles['small-image']} />
                        <img src={IMG5} alt="Workout 5" className={styles['small-image']} />
                    </div>
                </div>
            </div>
       </div>
    </div>
);

export default AIcenter;
