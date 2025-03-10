function ExeNameC() {
  return (
    <div  style={stylesInline.exeName} id="ExeNameC"> 
      <h1 id="ExeNameh1" style={{ color: "aliceblue", opacity: 1 }}>
        Exercise Name
      </h1>
    </div>
  );
}

export default ExeNameC;

const stylesInline = {
  exeName: {
    display: "flex",
    paddingLeft: "20px",
    height: "auto",
    width: "30vw",
    // maxWidth: "400vw",
    backgroundColor: "black",
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
    color: "antiquewhite",
    borderRadius: "5px",
    boxShadow: "lightslategray 2px 2px 10px 0px",
    zIndex: 1,
    animationName: "fadeDown",
    animationDuration: "2s",
  },
  fadeDown: {
    "0%": {
      opacity: 0,
      transform: "translateY(-30px) scale(0.9)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
    },
  },
  exeNameH2: {
    backgroundColor: "blue",
  },
  //   progressAnimationContainer: {
  //     margin: "10px",
  //     width: "300px",
  //     height: "400px",
  //     border: "1px solid black",
  //     opacity: 0.8,
  //     borderRadius: "5px",
  //   },
};
