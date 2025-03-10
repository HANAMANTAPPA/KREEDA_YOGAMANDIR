import React, { useEffect, useRef, useState } from 'react';
import styles from './ggoey.module.css';

function GooeyLoader({ initialStep = 1, initialScale = 1, scoreRef }) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [currentScale, setCurrentScale] = useState(initialScale);
  const wrapperRef = useRef(null);
  const previousScoreRef = useRef(null);

  // Function to check and update the score
  const checkScore = () => {
    if (scoreRef && scoreRef.current) {
      const scoreElement = scoreRef.current;
      const score = parseInt(scoreElement.textContent, 10);

      if (!isNaN(score) && score !== previousScoreRef.current) {
        previousScoreRef.current = score;
        setCurrentStep((score % 8) + 1);
        setCurrentScale(1 + Math.floor(score / 8) * 0.2);
        triggerAnimation();
      }
    }
  };

  // Function to trigger the animation
  const triggerAnimation = () => {
    if (wrapperRef.current) {
      wrapperRef.current.classList.remove(styles.animate);
      // Force a reflow
      void wrapperRef.current.offsetWidth;
      wrapperRef.current.classList.add(styles.animate);
    }
  };

  useEffect(() => {
    // Set up an interval to check the score periodically
    const intervalId = setInterval(checkScore, 100);
    return () => clearInterval(intervalId);
  }, [scoreRef]);

  return (
    <div className={styles.loader}>
      <div className={styles['number-display']}>{currentStep}</div>
      <div
        className={styles.wrapper}
        ref={wrapperRef}
        style={{ 
          transform: `scale(${currentScale})`,
          '--current-bubble': currentStep - 1
        }}
      >
        {[...Array(8)].map((_, index) => (
          <div key={index} className={styles.bubbleWrap}>
            <div className={styles.bubble}></div>
          </div>
        ))}
        <div className={styles.satWrap}>
          <div className={styles.sat}></div>
        </div>
      </div>
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default GooeyLoader;