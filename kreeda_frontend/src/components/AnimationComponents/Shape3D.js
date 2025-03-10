import React, { useState } from "react";

const styles = {
  shapeContainer: {
    position: "relative",
    margin: "0 auto",
    paddingLeft: "10px",
    width: "200px",
    height: "200px",
    transformStyle: "preserve-3d",
    transform: "rotateX(-5deg) rotateY(-30deg)",
    transition: "transform 2s",
  },
  shape: {
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "1px solid white",
    borderRadius: "20%",
    backfaceVisibility: "hidden",
  },
  block: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "6em",
    fontWeight: "bold",
    fontFamily:
      "Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif",
    color: "rgb(51, 28, 112)",
  },
  front: {
    transform: "translateZ(63px)",
    background: "#385230",
    backgroundImage:
      "-webkit-linear-gradient(to right, #d7d2cc, #385230), linear-gradient(to right, #d7d2cc, #385230)",
  },
  right: {
    transform: "rotateY(90deg) translateZ(63px)",
    background: "#525252",
    backgroundImage:
      "-webkit-linear-gradient(to right, #d7d2cc, #385230), linear-gradient(to right, #d7d2cc, #385230)",
  },
  back: {
    transform: "rotateY(180deg) translateZ(122px)",
    background: "#f1f2b5",
    backgroundImage:
      "-webkit-linear-gradient(to right, #d7d2cc, #385230), linear-gradient(to right, #d7d2cc, #385230)",
  },
  left: {
    transform: "rotateY(270deg) translateZ(122px)",
    background: "#8e9eab",
    backgroundImage:
      "-webkit-linear-gradient(to right, #d7d2cc, #385230), linear-gradient(to right, #d7d2cc, #385230)",
  },
  top: {
    transform: "rotateX(90deg) translateZ(122px)",
    background: "#606c88",
    backgroundImage:
      "-webkit-linear-gradient(to right, #d7d2cc, #385230), linear-gradient(to right, #d7d2cc, #385230)",
  },
  bottom: {
    transform: "rotateX(270deg) rotateY(0deg) translateZ(122px)",
    background: "#e6dada",
    backgroundImage:
      "-webkit-linear-gradient(to right, #d7d2cc, #385230), linear-gradient(to right, #d7d2cc, #385230)",
  },
  showFront: {
    transform: "translateZ(63px)",
  },
  showRight: {
    transform: "rotateX(360deg) rotateY(-90deg)",
  },
  showBack: {
    transform: "rotateY(180deg)",
  },
  showLeft: {
    transform: "rotateY(90deg)",
  },
  showTop: {
    transform: "scale(1.5)",
  },
  showBottom: {
    transform: "rotateX(90deg) rotateY(360deg)",
  },
  spin: {
    animation: "spin 5s infinite linear",
  },
};

const Shape3D = () => {
  const [activeFace, setActiveFace] = useState("");

  const handleClick = (face) => {
    setActiveFace(face);
  };

  return (
    <div
      id="shape"
      style={{ /* visibility: "hidden", */ ...styles.shapeContainer }}
    >
      <div
        className={`shape ft ${activeFace === "front" ? "show-ft" : ""}`}
        style={{ ...styles.shape, ...styles.front }}
      >
        <div className="block" onClick={() => handleClick("front")}>
          <a href="#!">1</a>
        </div>
      </div>
      <div
        className={`shape rt ${activeFace === "right" ? "show-rt" : ""}`}
        style={{ ...styles.shape, ...styles.right }}
      >
        <div className="block" onClick={() => handleClick("right")}>
          <a href="#!">2</a>
        </div>
      </div>
      <div
        className={`shape bk ${activeFace === "back" ? "show-bk" : ""}`}
        style={{ ...styles.shape, ...styles.back }}
      >
        <div className="block" onClick={() => handleClick("back")}>
          <a href="#!">3</a>
        </div>
      </div>
      <div
        className={`shape lt ${activeFace === "left" ? "show-lt" : ""}`}
        style={{ ...styles.shape, ...styles.left }}
      >
        <div className="block" onClick={() => handleClick("left")}>
          <a href="#!">4</a>
        </div>
      </div>
      <div
        className={`shape tp ${activeFace === "top" ? "show-tp" : ""}`}
        style={{ ...styles.shape, ...styles.top }}
      >
        <div className="block" onClick={() => handleClick("top")}>
          <a href="#!">5</a>
        </div>
      </div>
      <div
        className={`shape bm ${activeFace === "bottom" ? "show-bm" : ""}`}
        style={{ ...styles.shape, ...styles.bottom }}
      >
        <div className="block" onClick={() => handleClick("bottom")}>
          <a href="#!">6</a>
        </div>
      </div>
    </div>
  );
};

export default Shape3D;
