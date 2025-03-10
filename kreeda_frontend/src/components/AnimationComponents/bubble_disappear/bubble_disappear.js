import React, { useEffect, useState } from 'react';
import styles from './bubble_disappear.module.css';

const BubbleDisappear = ({ sorecRef }) => {
  const [bubbles, setBubbles] = useState(Array(59).fill(false));
  const [previousSorec, setPreviousSorec] = useState(sorecRef.current);

  const popBubble = (index) => {
    const newBubbles = [...bubbles];
    newBubbles[index] = true;
    setBubbles(newBubbles);

    playPopSound();

    if (newBubbles.every(bubble => bubble)) {
      setTimeout(resetAllBubbles, 500);
    }
  };

  const playPopSound = () => {
    console.log("Pop!");
    // Add actual sound playing logic here
  };

  const resetAllBubbles = () => {
    setBubbles(Array(59).fill(false));
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(`.${styles.bw__bubble}`)) {
      const unpoppedIndex = bubbles.findIndex(bubble => !bubble);
      if (unpoppedIndex !== -1) {
        popBubble(unpoppedIndex);
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
        const unpoppedIndex = bubbles.findIndex(bubble => !bubble);
        if (unpoppedIndex !== -1) {
          popBubble(unpoppedIndex);
        }
      }
    };

    const intervalId = setInterval(checkSorecChange, 100);
    return () => clearInterval(intervalId);
  }, [sorecRef, bubbles, previousSorec]);

  return (
    <form className={styles.bw} id="bw">
      <div className={styles.bw__bubbles}>
        {bubbles.map((isPopped, index) => (
          <div key={index} className={styles.bw__bubble}>
            <input
              className={styles.bw__input}
              id={`b${index + 1}`}
              type="checkbox"
              name={`b${index + 1}`}
              value={index + 1}
              checked={isPopped}
              onChange={() => popBubble(index)}
            />
            <label className={styles.bw__label} htmlFor={`b${index + 1}`}>Bubble {index + 1}</label>
            <span className={styles.bw__cover} style={{ transform: isPopped ? 'scale(0.8)' : 'scale(1)' }}></span>
          </div>
        ))}
      </div>
    </form>
  );
};

export default BubbleDisappear;