import React, { useState, useEffect } from "react";
import "./basket.css";

const BasketballAnimation = (props) => {
  const [animate, setAnimate] = useState(false);
  let sorecRef = props.sorecRef;
  let previous = sorecRef.current;

  const handleClick = () => {
    setAnimate(false); // Reset the animation
    setTimeout(() => setAnimate(true), 0); // Trigger reflow and restart animation
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
    <div className="containerBB">
      {/* <div className="title">Basketball</div> */}
      <div className="backgroundBB">
        <div className="animationContainerBB">
          <div
            className="basketBall"
            style={{ animation: animate ? "ball-fall 1s ease-in-out" : "none" }}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default BasketballAnimation;
