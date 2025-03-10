
import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import styles from './grid.module.css';

const GridOfSquares = ({ sorecRef }) => {
  const [clickCount, setClickCount] = useState(0);
  const [totalLinesRaised, setTotalLinesRaised] = useState(0);
  const gridRef = useRef(null);
  const copyLayerRef = useRef(null);
  const lastAnimatedScoreRef = useRef(0);

  const staggerFromValues = ['start', 'end'];
  const [staggerIndex, setStaggerIndex] = useState(0);

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A',
    '#98D8C8', '#F6E58D', '#BADC58', '#FF9FF3',
    '#FEA47F', '#25CCF7', '#EAB543', '#55E6C1',
  ];

  useEffect(() => {
    setRandomColors();
  }, []);

  useEffect(() => {
    const checkExerciseProgress = () => {
      if (sorecRef && sorecRef.current > lastAnimatedScoreRef.current && clickCount < 15) {
        animateSquares();
        lastAnimatedScoreRef.current = sorecRef.current;
      }
    };

    const intervalId = setInterval(checkExerciseProgress, 100);
    return () => clearInterval(intervalId);
  }, [sorecRef, clickCount]);

  const setRandomColors = () => {
    const squares = gridRef.current.querySelectorAll(`.${styles.square}`);
    squares.forEach((square) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      square.style.background = color;

      const sides = square.querySelectorAll('i');
      sides.forEach((side, sideIndex) => {
        let sideColor;
        switch (sideIndex) {
          case 0:
          case 3:
            sideColor = gsap.utils.interpolate(color, '#000000', 0.2);
            break;
          case 1:
            sideColor = gsap.utils.interpolate(color, '#FFFFFF', 0.2);
            break;
          case 2:
          case 4:
            sideColor = gsap.utils.interpolate(color, '#000000', 0.4);
            break;
          default:
            sideColor = color;
        }
        side.style.background = sideColor;
      });
    });
  };

  const createCopyLayer = () => {
    if (copyLayerRef.current) {
      copyLayerRef.current.remove();
    }

    const copyLayer = gridRef.current.cloneNode(true);
    copyLayer.classList.remove(styles.originalLayer);
    copyLayer.classList.add(styles.copyLayer);
    copyLayerRef.current = copyLayer;
    gridRef.current.parentNode.appendChild(copyLayer);
  };

  const resetAnimation = () => {
    const squares = gridRef.current.querySelectorAll(`.${styles.square}`);
    gsap.to(squares, {
      duration: 1,
      z: 0,
      stagger: {
        grid: [8, 8],
        from: 'center',
        axis: 'xy',
        amount: 0.5,
      },
      ease: 'power2.in',
      onComplete: () => {
        createCopyLayer();
        setClickCount(0);
        setRandomColors();
        // Reset lastAnimatedScoreRef to allow new animations
        lastAnimatedScoreRef.current = sorecRef.current - 1;
      },
    });
  };

  const animateSquares = () => {
    if (clickCount >= 15) return;

    setClickCount(prev => prev + 1);
    setTotalLinesRaised(prev => prev + 1);

    const squares = gridRef.current.querySelectorAll(`.${styles.square}`);
    gsap.to(squares, {
      duration: 1,
      z: (index) => {
        let row = Math.floor(index / 8);
        let col = index % 8;
        let sum = row + col;
        return sum < clickCount + 1 ? 150 : 0;
      },
      stagger: {
        grid: [8, 8],
        from: staggerFromValues[staggerIndex],
        axis: 'xy',
        amount: 0.5,
      },
      ease: 'back.out(1.7)',
      onComplete: () => {
        setStaggerIndex((prev) => (prev + 1) % staggerFromValues.length);

        if (clickCount + 1 >= 15) {
          setTimeout(resetAnimation, 1000);
        }
      },
    });
  };

  return (
    <div className={styles.container1}>
      <div className={styles.counterContainer}>
        <p>
          <span>{clickCount}</span> / 15
        </p>
      </div>
      
      <div className={styles.sceneContainer}>
        <div className={`${styles.scene} ${styles.originalLayer}`} ref={gridRef}>
          <div className={styles.grid}>
            {[...Array(64)].map((_, index) => (
              <div className={styles.square} key={index}>
                {[...Array(5)].map((_, sideIndex) => (
                  <i key={sideIndex}></i>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridOfSquares;