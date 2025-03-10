import React, { useState, useEffect } from "react";
import Ball from "./Ball";

function Spheers(props) {
  const [isAnimating, setIsAnimating] = useState(false);
  let sorecRef = props.sorecRef;
  let previous = sorecRef.current;

  const startStopAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Match this duration to your animation duration
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
        startStopAnimation();
        // sorecRef.current += 1;
      }
    }, 1);
    // setCheckVar_Score(sorecRef.current);
    return () => clearInterval(seI);
  }, []);
  return (
    <div
      onClick={startStopAnimation}
      style={{
        position: "absolute",
        width: "200px",
        height: "200px",
        backgroundColor: "aliceblue",
        borderRadius: "50%",
      }}
    >
      <Ball color="red" size="200px" isAnimating={isAnimating} />
      {/* <Ball color="lightblue" size="160px" isAnimating={isAnimating} />
      <Ball color="lightgreen" size="120px" isAnimating={isAnimating} /> */}
    </div>
  );
}

export default Spheers;
