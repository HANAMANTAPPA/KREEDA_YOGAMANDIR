// import React, { useState, useEffect, useRef } from 'react';
// import styles from './cube.module.css';

// const CubeLoader = ({ sorecRef }) => {
//   const [clickCount, setClickCount] = useState(0);
//   const [totalLinesRaised, setTotalLinesRaised] = useState(0);
//   const containerRef = useRef(null);
//   const stackRef = useRef(null);
//   const clickCounterRef = useRef(null);
//   const animationIntervalRef = useRef(null);
//   const animationTimeoutRef = useRef(null);

//   useEffect(() => {
//     const checkExerciseProgress = () => {
//       if (sorecRef && sorecRef.current > clickCount) {
//         toggleAnimation();
//       }
//     };

//     const intervalId = setInterval(checkExerciseProgress, 100);
//     return () => clearInterval(intervalId);
//   }, [sorecRef, clickCount]);

//   const startAnimation = () => {
//     containerRef.current.classList.remove(styles.paused);

//     animationIntervalRef.current = setInterval(() => {
//       containerRef.current.classList.add(styles.paused);

//       animationTimeoutRef.current = setTimeout(() => {
//         containerRef.current.classList.remove(styles.paused);
//         stopAnimation();
//       }, 420);
//     }, 420);
//   };

//   const stopAnimation = () => {
//     clearInterval(animationIntervalRef.current);
//     clearTimeout(animationTimeoutRef.current);
//     containerRef.current.classList.add(styles.paused);
//   };

//   const toggleAnimation = () => {
//     if (clickCount >= 15) return;

//     setClickCount(prevCount => prevCount + 1);
//     setTotalLinesRaised(prevTotal => prevTotal + 1);

//     startAnimation();

//     if (clickCount + 1 >= 15) {
//       setTimeout(resetAnimation, 1000);
//     }

//     if ((clickCount + 1) % 7 === 0) {
//       addToStack();
//     }
//   };

//   const resetAnimation = () => {
//     stopAnimation();
//     setClickCount(0);
//     containerRef.current.classList.add(styles.paused);
//   };

//   const addToStack = () => {
//     const stackItem = document.createElement('div');
//     stackItem.className = styles.stackItem;
//     const staticCube = containerRef.current.cloneNode(true);
//     staticCube.classList.add(styles.paused);
//     stackItem.appendChild(staticCube);
//     stackRef.current.appendChild(stackItem);

//     stackRef.current.scrollTop = stackRef.current.scrollHeight;
//   };

//   const renderCube = (h, w, l) => (
//     <div key={`${h}-${w}-${l}`} className={`${styles.cube} ${styles[`h${h}`]} ${styles[`w${w}`]} ${styles[`l${l}`]}`}>
//       <div className={`${styles.face} ${styles.top}`}></div>
//       <div className={`${styles.face} ${styles.left}`}></div>
//       <div className={`${styles.face} ${styles.right}`}></div>
//     </div>
//   );

//   const renderCubeContainer = (h) => (
//     <div key={h} className={styles[`h${h}Container`]}>
//       {[1, 2, 3].map(w => (
//         [1, 2, 3].map(l => renderCube(h, w, l))
//       ))}
//     </div>
//   );

//   return (
//     <div className={styles.cubeContainer}>
//       <div ref={clickCounterRef} className={styles.clickCounter}>
//         <span>{clickCount}</span> / 15
//       </div>
//       <div className={styles.mainContainer}>
//         <div ref={containerRef} className={`${styles.container} ${styles.paused}`}>
//           {[1, 2, 3].map(h => renderCubeContainer(h))}
//         </div>
//         <div ref={stackRef} className={styles.stackContainer} id="stack"></div>
//       </div>
//       <div className={styles.totalLinesRaised}>
//         Total Lines Raised: {totalLinesRaised}
//       </div>
//     </div>
//   );
// };

// export default CubeLoader;

import React, { useState, useEffect, useRef } from 'react';
import styles from './cube.module.css';

const CubeLoader = ({ sorecRef }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const containerRef = useRef(null);
  const stackRef = useRef(null);
  const clickCounterRef = useRef(null);
  const animationTimeoutRef = useRef(null);

  useEffect(() => {
    if (sorecRef && sorecRef.current > clickCount) {
      toggleAnimation();
    }
  }, [sorecRef.current]); // This effect runs whenever sorecRef.current changes

  const startAnimation = () => {
    containerRef.current.classList.remove(styles.paused);
    setIsAnimating(true);

    animationTimeoutRef.current = setTimeout(() => {
      stopAnimation();
    }, 410);
  };

  const stopAnimation = () => {
    clearTimeout(animationTimeoutRef.current);
    containerRef.current.classList.add(styles.paused);
    setIsAnimating(false);
  };

  const toggleAnimation = () => {
    setClickCount(prevCount => prevCount + 1);
    startAnimation();
  };

  useEffect(() => {
    if (clickCount > 0 && clickCount % 7 === 0) {
      addToStack();
    }
  }, [clickCount]);

  const addToStack = () => {
    const stackItem = document.createElement('div');
    stackItem.className = styles.stackItem;
    const staticCube = containerRef.current.cloneNode(true);
    staticCube.classList.add(styles.paused);
    stackItem.appendChild(staticCube);
    stackRef.current.appendChild(stackItem);

    stackRef.current.scrollTop = stackRef.current.scrollHeight;
  };

  const renderCube = (h, w, l) => (
    <div key={`${h}-${w}-${l}`} className={`${styles.cube} ${styles[`h${h}`]} ${styles[`w${w}`]} ${styles[`l${l}`]}`}>
      <div className={`${styles.face} ${styles.top}`}></div>
      <div className={`${styles.face} ${styles.left}`}></div>
      <div className={`${styles.face} ${styles.right}`}></div>
    </div>
  );

  const renderCubeContainer = (h) => (
    <div key={h} className={styles[`h${h}Container`]}>
      {[1, 2, 3].map(w => (
        [1, 2, 3].map(l => renderCube(h, w, l))
      ))}
    </div>
  );

  return (
    <div className={styles.cubeContainer}>
      <div ref={clickCounterRef} className={styles.clickCounter}></div>
      <div className={styles.mainContainer}>
        <div ref={containerRef} className={`${styles.container} ${styles.paused}`}>
          {[1, 2, 3].map(h => renderCubeContainer(h))}
        </div>
        <div ref={stackRef} className={styles.stackContainer} id="stack"></div>
      </div>
    </div>
  );
};

export default CubeLoader;