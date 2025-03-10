import React, { useEffect, useRef } from 'react';
import styles from './score.module.css';

const Score = ({ sorecRef }) => {
  const maxScore = 40;
  const scorePathRefs = useRef([]);

  useEffect(() => {
    const updateScorePaths = () => {
      const score = sorecRef.current;
      const progress = score / maxScore;
      scorePathRefs.current.forEach((path, index) => {
        if (path) {
          const radius = 48 - index * 12;
          const circumference = 2 * Math.PI * radius;
          const dashArray = `${circumference * progress} ${circumference}`;
          path.setAttribute('d', `M50 ${50-radius} A${radius} ${radius} 0 1 1 ${50-0.001} ${50-radius}`);
          path.style.strokeDasharray = dashArray;
        }
      });
    };

    const intervalId = setInterval(updateScorePaths, 100);

    return () => clearInterval(intervalId);
  }, [sorecRef]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.scoreCircle}>
          <svg width="300" height="300" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#333" strokeWidth="4"/>
            {['#00ffff', '#ff00ff', '#ff0000', '#ffff00'].map((color, index) => (
              <path
                key={index}
                ref={el => scorePathRefs.current[index] = el}
                fill="none"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
              />
            ))}
          </svg>
          <div className={styles.scoreDisplay}>
            <div className={styles.luminScore}>{sorecRef.current}</div>
            <div className={styles.scoreLabel}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;