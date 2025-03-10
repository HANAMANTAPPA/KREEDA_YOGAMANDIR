import React from "react";

const styles = {
  ScoreRepStack: {
    width: "80%",
    height: "94%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column-reverse",
    gap: "4px",
    borderRadius: "20px",
    background: "#d66d75",
    backgroundImage:
      "-webkit-linear-gradient(to left, #e29587, #d66d75), linear-gradient(to left, #e29587, #d66d75)",
    position: "absolute",
    left: "10%",
    // visibility: "hidden",
  },
  block2: {
    width: "20%",
    height: "6%",
    background: "#ff00cc",
    backgroundImage:
      "-webkit-linear-gradient(to left, #333399, #ff00cc), linear-gradient(to left, #333399, #ff00cc)",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "aliceblue",
    fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
    boxShadow: "2px 2px 2px white",
    // opacity: 0,
  },
};

const ScoreRepStack = () => {
  return (
    <div className="ScoreRepStack" style={styles.ScoreRepStack} id="scorepre2">
      <span className="block2" style={styles.block2} id="one">
        1
      </span>
      <span className="block2" style={styles.block2} id="two">
        2
      </span>
      <span className="block2" style={styles.block2} id="three">
        3
      </span>
      <span className="block2" style={styles.block2} id="four">
        4
      </span>
      <span className="block2" style={styles.block2} id="five">
        5
      </span>
      <span className="block2" style={styles.block2} id="six">
        6
      </span>
      <span className="block2" style={styles.block2} id="seven">
        7
      </span>
      <span className="block2" style={styles.block2} id="eight">
        8
      </span>
      <span className="block2" style={styles.block2} id="nine">
        9
      </span>
      <span className="block2" style={styles.block2} id="ten">
        10
      </span>
      <span className="block2" style={styles.block2} id="eleven">
        11
      </span>
      <span className="block2" style={styles.block2} id="twelve">
        12
      </span>
    </div>
  );
};

export default ScoreRepStack;
