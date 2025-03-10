function BloksDancingAC() {
  return (
    <div
      id="scorepre"
      //   style="position: absolute; visibility: hidden"
      className="scorepre"
      style={styles.scorepre}
    >
      <span className="block1" style={styles.block1} id="one"></span>
      <span className="block1" style={styles.block1} id="two"></span>
      <span className="block1" style={styles.block1} id="three"></span>
      <span className="block1" style={styles.block1} id="four"></span>
      <span className="block1" style={styles.block1} id="five"></span>
      <span className="block1" style={styles.block1} id="six"></span>
      <span className="block1" style={styles.block1} id="seven"></span>
      <span className="block1" style={styles.block1} id="eight"></span>
      <span className="block1" style={styles.block1} id="nine"></span>
      <span className="block1" style={styles.block1} id="ten"></span>
      <span className="block1" style={styles.block1} id="eleven"></span>
      <span className="block1" style={styles.block1} id="twelve"></span>
      <span className="block1" style={styles.block1} id="thirteen"></span>
    </div>
  );
}

export default BloksDancingAC;

const styles = {
  scorepre: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    borderRadius: "20px",
    background: "-webkit-linear-gradient(to left, #292e49, #536976)",
    //   overflow: "hidden",
    background: "linear-gradient(to left, #292e49, #536976)",
    //   baackground:
    // "-webkit-linear-gradient(to left, #292e49, #536976), linear-gradient(to left, #292e49, #536976)",
    //   position: "relative", // to use 'left'
    //   left: "2%",
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
};

const animationDelays = [
  1.1, 1.2, 0.2, 0.3, 0.6, 0.7, 0.8, 0.4, 0.9, 0.5, 0.1, 1.0,
];
