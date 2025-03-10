import { useEffect } from "react";

// import DiceAnimation from "../AnimationComponents/dice/DiceAnimation";
import LegoAnimationComponent from "../AnimationComponents/LegoAnimation";
import BubbleAnimation from "../AnimationComponents/BubbleAnimation ";
import RainRippleEffect from "../AnimationComponents/rain/RainRippleEffect";
import Spheers from "../AnimationComponents/spherefilling/Spheers";
import BasketballAnimation from "../AnimationComponents/basketBall/BasketballAnimation";
import ArcheryGame from "../AnimationComponents/archery/archery";
import BlockRush from "../AnimationComponents/block/block";
// import BubbleAppear from "../AnimationComponents/bubble_appear/bubble_appear";
// import BubbleDisappear from "../AnimationComponents/bubble_disappear/bubble_disappear";
import CubeLoader from "../AnimationComponents/cube-loader/cube";
import GooeyLoader from "../AnimationComponents/ggoeyloader/ggoey";
import GridOfSquares from "../AnimationComponents/grid/grid";
import Score from "../AnimationComponents/score/score";
import Sphere from "../AnimationComponents/sphere/sphere";
import Stack from "../AnimationComponents/stack/stack";
import LoaderAnimation from "../AnimationComponents/stairs1/stairs1";
// import Loader from "../AnimationComponents/stairsloader/stairs";
// import BloksDancingAC from "../AnimationComponents/BloksDancingAC";

function ProgressAnimationContainerC(props) {
  const sorecRef = props.sorecRef;
  let pointer = props.pointer;
  let previous = pointer.current;

  // add random Animations
  let x = 0;
  useEffect(() => {
    // toggleActive(3);
    setInterval(() => {
      const currentVal = pointer.current;
      // console.log(
      //   "\n\n\n\n" + previous + "\n\n\n\n" + sorecRef.current + "\n\n\n\n"
      // );
      if (previous !== currentVal) {
        previous = currentVal;
        x = Math.floor(Math.random() * 5) + 1;
        // console.log("\n\n\n\n\n\n X values is " + x + "\n\n\n\n\n\n");
        // func(x, sorecRef);
        // sorecRef.current += 1;
      }
    }, 100);
    // setCheckVar_Score(sorecRef.current);
  }, []);

  let func = (x, sorecRef) => {
    switch (x) {
      case 0:
        return <></>;
      case 2:
        return <Spheers sorecRef={sorecRef} />;
      case 22222:
        return <RainRippleEffect sorecRef={sorecRef} />;
      case 3333:
        return <BasketballAnimation sorecRef={sorecRef} />;
      case 444444:
        return <BubbleAnimation sorecRef={sorecRef} />;
      case 5555555:
        return <LegoAnimationComponent sorecRef={sorecRef} />;
      case 3:
        return <ArcheryGame sorecRef={sorecRef} />;
      case 7:
        return <BlockRush sorecRef={sorecRef} />;
      // case 8:
      //   return <BubbleAppear sorecRef={sorecRef} />;
      // case 9:
      //   return <BubbleDisappear sorecRef={sorecRef} />;
      case 1:
        return <CubeLoader sorecRef={sorecRef} />;
      case 11:
        return <GooeyLoader sorecRef={sorecRef} />;
      case 13:
        return <GridOfSquares sorecRef={sorecRef} />;
      case 44444:
        return <Score sorecRef={sorecRef} />;
      case 5:
        return <Sphere sorecRef={sorecRef} />;
      case 4:
        return <Stack sorecRef={sorecRef} />;
      case 16:
        return <LoaderAnimation sorecRef={sorecRef} />;
      // case 17:
      //   return <Loader sorecRef={sorecRef} />;
      // case 18:
      //   return <BloksDancingAC sorecRef={sorecRef} />;
      // case 19:
      //   return <Loader sorecRef={sorecRef} />;
      // case 20:
      //   return <Loader sorecRef={sorecRef} />;
      case 21:
        return <></>;
      default:
        return <Spheers sorecRef={sorecRef} />;
    }
  };
  return (
    // <div style={{ position: "relative" }} className="">
    <div
    id="progressAnimationContainer"
      className="progressAnimationContainer"
      style={stylesInline.progressAnimationContainer}
    >
      {func(pointer.current, sorecRef)}
      {/* <BasketballAnimation sorecRef={sorecRef} /> */}
      {/* <BubbleAnimation sorecRef={sorecRef} /> */}
      {/* <Spheers sorecRef={sorecRef} /> */}
      {/* <RainRippleEffect sorecRef={sorecRef} /> */}
      {/* <DiceAnimation sorecRef={sorecRef} /> */}
    </div>
    // </div>
  );
}

export default ProgressAnimationContainerC;

const stylesInline = {
  progressAnimationContainer: {
    margin: "10px",
    // width: "300px",
    // height: "400px",
    height: "40vh",
    width: "40vh",
    // border: "1px solid black",     -----     
    opacity:  1, //0.8,
    borderRadius: "5px",
    // backgroundColor: "red",
    visibility : "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
};
