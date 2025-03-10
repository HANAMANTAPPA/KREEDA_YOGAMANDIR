import React, { useState, useEffect, useCallback } from 'react';
import styles from './stairs1.module.css';

const LoaderAnimation = ({ sorecRef }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const maxSteps = 40;

  const gradients = [
    'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)',
    'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
    'linear-gradient(to right, #fa709a 0%, #fee140 100%)'
  ];

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const createBar = useCallback((left, height, color) => {
    return (
      <div
        key={`bar-${left}`}
        className={styles.loader__bar}
        style={{
          left: `${left}px`,
          height: `${height}px`,
          backgroundColor: color,
          animation: 'scalechange 1s forwards'
        }}
      />
    );
  }, []);

  const createStar = useCallback(() => {
    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    const size = Math.random() * 1.545 + 0.515;

    return (
      <div
        key={`star-${left}-${top}`}
        className={styles.star}
        style={{
          left: `${left}px`,
          top: `${top}px`,
          width: `${size}px`,
          height: `${size}px`
        }}
      />
    );
  }, []);

  const [stars, setStars] = useState([]);
  const [bars, setBars] = useState([]);
  const [background, setBackground] = useState(gradients[0]);

  const resetLoader = useCallback(() => {
    setCurrentStep(0);
    setBars([]);
    setStars([]);
  }, []);

  const moveBall = useCallback(() => {
    setCurrentStep((prevStep) => {
      const newStep = prevStep + 1;

      if (newStep >= maxSteps) {
        resetLoader();
        return 0;
      }

      const left = newStep * 7.725;
      const bottom = newStep * 7.725;
      const barHeight = bottom + 2.575;

      setBars((prevBars) => [...prevBars, createBar(left, barHeight, getRandomColor())]);

      if (newStep % 5 === 0) {
        setBackground(gradients[Math.floor(newStep / 5) % gradients.length]);
        setStars((prevStars) => [...prevStars, ...Array(20).fill(null).map(createStar)]);
      }

      return newStep;
    });
  }, [createBar, createStar, resetLoader]);

  useEffect(() => {
    const handleResize = () => {
      setStars((prevStars) => prevStars.map(createStar));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [createStar]);

  useEffect(() => {
    const checkExerciseProgress = () => {
      if (sorecRef && sorecRef.current > currentStep) {
        moveBall();
      }
    };

    const intervalId = setInterval(checkExerciseProgress, 100);

    return () => clearInterval(intervalId);
  }, [sorecRef, currentStep, moveBall]);

  return (
    <div className={styles.container} style={{ background }}>
      <div
        className={styles.loader}
        style={{
          width: `${52.53 + currentStep * 7.725}px`,
          height: `${26.26 + currentStep * 3.863}px`
        }}
      >
        <div
          className={styles.loader__ball}
          style={{
            left: `${currentStep * 7.725}px`,
            bottom: `${currentStep * 7.725 + 7.725}px`,
            animation: 'ballscalechange 1s forwards'
          }}
        />
        {bars}
      </div>
      {stars}
    </div>
  );
};

export default LoaderAnimation;