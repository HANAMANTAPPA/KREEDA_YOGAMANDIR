function AnimationContainerC() {
  return (
    <div className="animationContainer" style={stylesInline.animationContainer}>
      <img
        id="animationGif"
        src="https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif"
        alt="animation"
        style={stylesInline.animationGif}
      />
      <img
        id="animationGif1"
        src="https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif"
        alt="animation"

        style={stylesInline.animationGif1 } 
      />
    </div>
  );
}

export default AnimationContainerC;

const stylesInline = {
  animationContainer: {
    margin: "10px",
    maxWidth: "500px",
    // height: "300px", 
    aspectRatio: "1.25/1",
    height: "40vh",
    zIndex: 1,
    animation: "fadeIn 2s ease-in-out",
  },
  animationGif: {
    borderRadius: "5px",
    boxShadow: "lightslategray 2px 2px 10px 0px",
    width: "auto",
    height: "100%",
    position : "relative",
    aspectRatio: "1.25/1",
    visibility : "hidden"
  },
  animationGif1: {
    borderRadius: "5px",
    boxShadow: "lightslategray 2px 2px 10px 0px", 
    // margin: "10px",
    width: "0px",
    height: "auto",
    position: "absolute"
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
      transform: "translateY(-30px) scale(0.9)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
    },
  },
};
