import React, { useState, useEffect } from "react";
import "./dice.css"; // Import your CSS file for styling

const DiceAnimation = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sorecRef = props.sorecRef;
  let previous = sorecRef.current;

  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % 6);
  };

  useEffect(() => {
    // toggleActive(3);
    let seI = setInterval(() => {
      const currentVal = sorecRef.current;
      // console.log(
      //   "\n\n\n\n" + previous + "\n\n\n\n" + sorecRef.current + "\n\n\n\n"
      // );
      if (previous !== currentVal) {
        previous = currentVal;
        handleClick();
        // sorecRef.current += 1;
      }
    }, 1);
    // setCheckVar_Score(sorecRef.current);
    return () => clearInterval(seI);
  }, []);
  return (
    <div className="Dicecontainer" onClick={handleClick}>
      {/* Dice Faces */}
      <div className="dice">
        <div
          className={`face first-face ${currentIndex === 0 ? "active" : ""}`}
        >
          <div className="dot"></div>
        </div>
        <div
          className={`face second-face ${currentIndex === 1 ? "active" : ""}`}
        >
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div
          className={`face third-face ${currentIndex === 2 ? "active" : ""}`}
        >
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div
          className={`face fourth-face ${currentIndex === 3 ? "active" : ""}`}
        >
          <div className="column">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="column">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div
          className={`face fifth-face ${currentIndex === 4 ? "active" : ""}`}
        >
          <div className="column">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="column">
            <div className="dot"></div>
          </div>
          <div className="column">
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div
          className={`face sixth-face ${currentIndex === 5 ? "active" : ""}`}
        >
          <div className="column">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="column">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiceAnimation;
