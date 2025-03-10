// src/BubbleAnimation.js
import React, { useEffect } from "react";
import "./bubble.css";

const BubbleAnimation = (props) => {
  let sorecRef = props.sorecRef;
  let previous = sorecRef.current;

  useEffect(() => {
    // setCheckVar_Score(sorecRef.current);
  }, []);

  useEffect(() => {
    let animationRunning = false;

    // toggleActive(3);
    let seI = setInterval(() => {
      const ccurrentVal = sorecRef.current;
      // console.log(
      //   "\n\n\n\n" + previous + "\n\n\n\n" + sorecRef.current + "\n\n\n\n"
      // );
      if (previous !== ccurrentVal) {
        previous = sorecRef.current;
        // document.getElementById("bubbleAnimationContainer").click();
        startAnimation();
        // sorecRef.current += 1;
      }
    }, 1);

    function startAnimation() {
      animationRunning = true;
      createBubble();
    }

    function createBubble() {
      const bubbleContainer = document.createElement("div");
      bubbleContainer.className = "bubble-container";
      bubbleContainer.innerHTML = `
        <div class="bubble">
          <div class="soup-layer"></div>
        </div>
        <div class="dotted-layer pink"></div>
        <div class="dotted-layer white"></div>
      `;
      bubbleContainer.style.left = `${Math.random() * 50}%`;
      document
        .getElementById("bubbleAnimationContainer")
        .appendChild(bubbleContainer);

      // setTimeout(() => {
      //   document
      //     .getElementById("bubbleAnimationContainer")
      //     .removeChild(bubbleContainer);
      // }, 9000); // 8000ms animation + 1000ms delay for removal
    }

    // document
    //   .getElementById("bubbleAnimationContainer")
    //   .addEventListener("click", startAnimation);

    // return () => {
    //   document
    //     .getElementById("bubbleAnimationContainer")
    //     .removeEventListener("click", startAnimation);
    return () => clearInterval(seI);
    // };
  }, []);

  return (
    <div
      id="bubbleAnimationContainer"
      style={{
        height: "100%",
        width: "100%",
        // visibility: "hidden",
      }}
    ></div>
  );
};

export default BubbleAnimation;
