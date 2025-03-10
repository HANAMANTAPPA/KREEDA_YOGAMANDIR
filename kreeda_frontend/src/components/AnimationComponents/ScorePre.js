import React, { useState, useEffect } from "react";

const styles = {
  scorepre: {
    width: "80%",
    height: "94%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    borderRadius: "20px",
    background: "#536976",
    overflow: "hidden",
    backgroundImage:
      "-webkit-linear-gradient(to left, #292e49, #536976), linear-gradient(to left, #292e49, #536976)",
    position: "absolute",
    left: "10%",
  },
  block1: {
    width: "20%",
    height: "6%",
    background: "#ffe259",
    backgroundImage:
      "-webkit-linear-gradient(to left, #ffa751, #ffe259), linear-gradient(to left, #ffa751, #ffe259)",
    borderRadius: "5px",
    animation: "animate 3s ease-in-out infinite",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "aliceblue",
    fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
    boxShadow: "2px 2px 2px white",
  },
  activeBlock: {
    background: "#11998e",
    backgroundImage: "-webkit-linear-gradient(to right, #38ef7d, #11998e)",
    backgroundImage: "linear-gradient(to right, #38ef7d, #11998e)",
  },
};

const animationDelays = [
  1.1, 1.2, 0.2, 0.3, 0.6, 0.7, 0.8, 0.4, 0.9, 0.5, 0.1, 1.0,
];

const ScorePre = (props) => {
  const [activeBlocks, setActiveBlocks] = useState([]);
  let resultRef = props.resultRef;
  let sorecRef = props.sorecRef;
  const [checkVar_Score, setCheckVar_Score] = useState(sorecRef.current);

  const toggleActive = (index) => {
    setActiveBlocks((prevState) =>
      prevState.includes(index)
        ? prevState.filter((i) => i !== index)
        : [...prevState, index]
    );
  };

  // useEffect(() => {
  //   if (resultRef.current) {
  //     resultRef.current = !resultRef.current;
  //     sorecRef.current = sorecRef.current + 1;
  //   }
  // });

  return (
    <>
      <style>
        {`
          @keyframes animate {
            0% {
              transform: translateX(-400%);
            }
            50% {
              transform: translateX(500%);
            }
            100% {
              transform: translateX(-400%);
            }
          }
        `}
      </style>
      <div id="scorepre" className="scorepre" style={styles.scorepre}>
        {animationDelays.map((delay, index) => (
          <span
            key={index}
            className={`block1 ${activeBlocks.includes(index) ? "active" : ""}`}
            style={{
              ...styles.block1,
              ...(activeBlocks.includes(index) ? styles.activeBlock : {}),
              animationDelay: `${delay}s`,
            }}
            onClick={() => toggleActive(index)}
          ></span>
        ))}
      </div>
    </>
  );
};

export default ScorePre;
