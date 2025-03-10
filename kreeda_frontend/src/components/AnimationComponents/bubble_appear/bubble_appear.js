import React, { useEffect, useRef, useState } from 'react';
import styles from './bubble_appear.module.css';

const BubbleAppear = ({ sorecRef }) => {
  const [bubbles, setBubbles] = useState(Array(59).fill(true));
  const [previousSorec, setPreviousSorec] = useState(sorecRef.current);
  const nextBubbleIndexRef = useRef(0);

  const revealBubble = (index) => {
    if (bubbles[index]) {
      const newBubbles = [...bubbles];
      newBubbles[index] = false;
      setBubbles(newBubbles);
      playPopSound();
      nextBubbleIndexRef.current++;

      if (nextBubbleIndexRef.current === bubbles.length) {
        resetBubbles();
      }
    }
  };

  const resetBubbles = () => {
    setBubbles(Array(59).fill(true));
    nextBubbleIndexRef.current = 0;
  };

  const playPopSound = () => {
    console.log("Pop!");
    // Add actual sound playing logic here
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(`.${styles.bw__bubble}`)) {
      if (nextBubbleIndexRef.current < bubbles.length) {
        revealBubble(nextBubbleIndexRef.current);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [bubbles]);

  useEffect(() => {
    const checkSorecChange = () => {
      if (sorecRef.current !== previousSorec) {
        setPreviousSorec(sorecRef.current);
        if (nextBubbleIndexRef.current < bubbles.length) {
          revealBubble(nextBubbleIndexRef.current);
        }
      }
    };

    const intervalId = setInterval(checkSorecChange, 100);
    return () => clearInterval(intervalId);
  }, [sorecRef, bubbles, previousSorec]);

  return (
    <form className={styles.bw} id="bw">
      <div className={styles.bw__bubbles}>
        {bubbles.map((isHidden, index) => (
          <div key={index} className={styles.bw__bubble}>
            <input
              className={styles.bw__input}
              id={`b${index + 1}`}
              type="checkbox"
              name={`b${index + 1}`}
              value={index + 1}
              checked={isHidden}
              onChange={() => {
                if (index === nextBubbleIndexRef.current) {
                  revealBubble(index);
                }
              }}
            />
            <label className={styles.bw__label} htmlFor={`b${index + 1}`}>Bubble {index + 1}</label>
            <span className={styles.bw__cover} style={{ transform: isHidden ? 'scale(1)' : 'scale(0.8)' }}></span>
          </div>
        ))}
      </div>
    </form>
  );
};

export default BubbleAppear;