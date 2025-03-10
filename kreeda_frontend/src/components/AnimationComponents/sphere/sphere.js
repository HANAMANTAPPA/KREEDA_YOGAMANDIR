import React, { useEffect, useState } from 'react';
import styles from './sphere.module.css';

function Sphere({ sorecRef }) {
  const initialBalls = [
    { color: 'lightgreen', size: 80},
    { color: 'rgb(8, 136, 179)', size: 100 },
    { color: 'red', size: 110 }
  ];

  const [balls, setBalls] = useState(initialBalls.sort((a, b) => a.size - b.size).map(ball => ({ ...ball, progress: 0, filled: false })));
  const [currentBallIndex, setCurrentBallIndex] = useState(0);
  const [previousSorec, setPreviousSorec] = useState(sorecRef.current);

  const fillSphere = () => {
    const newBalls = [...balls];
    const ball = newBalls[currentBallIndex];

    if (ball.filled) return;

    ball.progress += 10;

    if (ball.progress >= 100) {
      ball.filled = true;
      setCurrentBallIndex(currentBallIndex + 1);

      if (currentBallIndex >= newBalls.length - 1) {
        setTimeout(() => {
          setBalls(initialBalls.sort((a, b) => a.size - b.size).map(ball => ({ ...ball, progress: 0, filled: false })));
          setCurrentBallIndex(0);
        }, 1000);
      }
    }

    setBalls(newBalls);
  };

  useEffect(() => {
    const handleClick = () => {
      if (currentBallIndex < balls.length && !balls[currentBallIndex].filled) {
        fillSphere();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [currentBallIndex, balls]);

  useEffect(() => {
    const checkSorecChange = () => {
      if (sorecRef.current !== previousSorec) {
        setPreviousSorec(sorecRef.current);
        if (currentBallIndex < balls.length && !balls[currentBallIndex].filled) {
          fillSphere();
        }
      }
    };

    const intervalId = setInterval(checkSorecChange, 100);
    return () => clearInterval(intervalId);
  }, [sorecRef, balls, previousSorec]);

  return (
    <div className={styles.container}>
      {balls.map((ball, index) => (
        <div
          key={index}
          className={`${styles.ball} ${ball.filled ? styles.filled : ''}`}
          style={{
            '--s': `${ball.size}px`,
            '--c': ball.color,
            '--progress': `${ball.progress}%`
          }}
        ></div>
      ))}
    </div>
  );
}

export default Sphere;