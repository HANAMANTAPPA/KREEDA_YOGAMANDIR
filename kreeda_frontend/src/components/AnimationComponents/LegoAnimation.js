// import lottie from "lottie-web";
// import React, { useEffect } from "react";

// function LegoAnimation() {
//   let isAnimationPlaying = false;
//   function PlusLegoAnimation() {
//     if (!isAnimationPlaying) {
//       anim.play();
//       setTimeout(() => {
//         anim.pause();
//       }, 503);
//     }
//   }

//   var animData = {
//     container: document.querySelector("#LogoAnimationWindow"),
//     renderer: "svg",
//     loop: true,
//     autoplay: false,
//     path: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader_chrisgannon.json",
//   };

//   var anim = lottie.loadAnimation(animData);
//   anim.setSpeed(4);
//   useEffect(() => {}, []);

//   return (
//     <div id="legoClass">
//       <div id="LogoAnimationWindow" onClick={PlusLegoAnimation}></div>
//     </div>
//   );
// }

// export default LegoAnimation;


// import lottie from 'lottie-web';
// import React, { useEffect, useRef, useState } from 'react';

// const AnimationComponent = (props) => {
//   const animationContainer = useRef(null);
//   const [animation, setAnimation] = useState(null);
//   const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
//   let animationInterval = useRef(null);

//   let sorecRef = props.sorecRef;
//   let previous = sorecRef.current;




//   useEffect(() => {
//     const anim = lottie.loadAnimation({
//       container: animationContainer.current,
//       renderer: 'svg',
//       loop: true,
//       autoplay: false,
//       path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader_chrisgannon.json'
//     });

//     anim.setSpeed(4);
//     setAnimation(anim);

//     return () => {
//       if (animationInterval.current) {
//         clearInterval(animationInterval.current);
//       }
//       anim.destroy();
//     };
//   }, []);


//   useEffect(() => {
//     // toggleActive(3);
//     let seI = setInterval(() => {
//       const currentVal = sorecRef.current;
//       if (previous !== currentVal) {
//         previous = currentVal;
//         animationContainer.current.click();
       
//       }
//     }, 1);
//     // setCheckVar_Score(sorecRef.current);
//     return () => clearInterval(seI);
//   }, []);


//   const toggleAnimation = () => {
//     if (isAnimationPlaying) {
//       animation.pause();
//       clearInterval(animationInterval.current);
//       setIsAnimationPlaying(false);
//     } else {
//       animation.play();
//       animationInterval.current = setInterval(() => {
//         animation.pause();
//         clearInterval(animationInterval.current);
//         setIsAnimationPlaying(false);
//       }, 1000);
//     }
//   };

//   const startNstop = () => {
//     if (!isAnimationPlaying) {
//       animation.play();
//       setTimeout(() => {
//         animation.pause();
//       }, 500);
//     }
//   };

//   return (
//     <div ref={animationContainer} onClick={startNstop} style={{ cursor: 'pointer' }}>
//     </div>
//   );
// };

// export default AnimationComponent;


import lottie from 'lottie-web';
import React, { useEffect, useRef, useState } from 'react';

const AnimationComponent = (props) => {
  const animationContainer = useRef(null);
  const [animation, setAnimation] = useState(null);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  let animationInterval = useRef(null);

  let sorecRef = props.sorecRef;
  let previous = sorecRef.current;

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader_chrisgannon.json',
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice' // Ensures the animation scales properly
      }
    });

    anim.setSpeed(4);
    setAnimation(anim);

    return () => {
      if (animationInterval.current) {
        clearInterval(animationInterval.current);
      }
      anim.destroy();
    };
  }, []);

  useEffect(() => {
    let seI = setInterval(() => {
      const currentVal = sorecRef.current;
      if (previous !== currentVal) {
        previous = currentVal;
        animationContainer.current.click();
      }
    }, 1);
    return () => clearInterval(seI);
  }, []);

  const toggleAnimation = () => {
    if (isAnimationPlaying) {
      animation.pause();
      clearInterval(animationInterval.current);
      setIsAnimationPlaying(false);
    } else {
      animation.play();
      animationInterval.current = setInterval(() => {
        animation.pause();
        clearInterval(animationInterval.current);
        setIsAnimationPlaying(false);
      }, 1000);
    }
  };

  const startNstop = () => {
    if (!isAnimationPlaying) {
      animation.play();
      setTimeout(() => {
        animation.pause();
      }, 500);
    }
  };

  return (
    <div
      ref={animationContainer}
      onClick={startNstop}
      style={{
        cursor: 'pointer',
        width: '500px', // Further increased width
        height: '500px', // Further increased height
        marginTop: '2px'

      }}
    ></div>
  );
};

export default AnimationComponent;

