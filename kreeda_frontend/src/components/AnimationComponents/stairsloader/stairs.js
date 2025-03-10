// import React, { useEffect, useState } from 'react';
// import './stairs.css';

// const Loader = (props) => {
//   const [isAnimating, setIsAnimating] = useState(false);
//   let sorecRef = props.sorecRef;
//   let previous = sorecRef.current;


//   const toggleAnimation = () => {
//     setIsAnimating(!isAnimating);
//   };

//   return (
//     <div className="loader" onClick={toggleAnimation}>
//       <div className={`loader__bar loader__bar--1 ${isAnimating ? 'animate' : ''}`} />
//       <div className={`loader__bar loader__bar--2 ${isAnimating ? 'animate' : ''}`} />
//       <div className={`loader__bar loader__bar--3 ${isAnimating ? 'animate' : ''}`} />
//       <div className={`loader__bar loader__bar--4 ${isAnimating ? 'animate' : ''}`} />
//       <div className={`loader__bar loader__bar--5 ${isAnimating ? 'animate' : ''}`} />
//       <div className={`loader__ball ${isAnimating ? 'animate' : ''}`} />
//     </div>
//   );
// };

// export default Loader;




// import React, { useEffect, useRef, useState } from 'react';
// import './stairs.css';

// const Loader = ({ sorecRef }) => {
//   const [isAnimating, setIsAnimating] = useState(false);
//   const previousRef = useRef(sorecRef.current);

//   useEffect(() => {
//     // Effect to handle changes in sorecRef.current
//     const seI = setInterval(() => {
//       const currentVal = sorecRef.current;
//       if (previousRef.current !== currentVal) {
//         previousRef.current = currentVal;
//         startStopAnimation();
//       }
//     }, 1);

//     return () => clearInterval(seI);
//   }, [sorecRef]);

//   useEffect(() => {
//     let timeout;
//     if (isAnimating) {
//       timeout = setTimeout(() => {
//         setIsAnimating(false);
//       }, 450); // 400ms to match the original code
//     }
//     return () => clearTimeout(timeout);
//   }, [isAnimating]);

//   const toggleAnimation = () => {
//     setIsAnimating(!isAnimating);
//   };

//   const startStopAnimation = () => {
//     setIsAnimating(true);
//   };

//   return (
//     <div className="loader" onClick={toggleAnimation}>
//       <div className={`loader__bar loader__bar--1 ${isAnimating ? 'animate' : ''}`} />
//       <div className={`loader__bar loader__bar--2 ${isAnimating ? 'animate' : ''}`} />
//       <div className={`loader__bar loader__bar--3 ${isAnimating ? 'animate' : ''}`} />
//       <div className={`loader__bar loader__bar--4 ${isAnimating ? 'animate' : ''}`} />
//       <div className={`loader__bar loader__bar--5 ${isAnimating ? 'animate' : ''}`} />
//       <div className={`loader__ball ${isAnimating ? 'animate' : ''}`} />
//     </div>
//   );
// };

// export default Loader;

import React, { useEffect, useRef, useState } from 'react';
import styles from './stairs.module.css';

const Loader = ({ sorecRef }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const previousRef = useRef(sorecRef.current);

  useEffect(() => {
    // Effect to handle changes in sorecRef.current
    const seI = setInterval(() => {
      const currentVal = sorecRef.current;
      if (previousRef.current !== currentVal) {
        previousRef.current = currentVal;
        startStopAnimation();
      }
    }, 1);

    return () => clearInterval(seI);
  }, [sorecRef]);

  useEffect(() => {
    let timeout;
    if (isAnimating) {
      timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 450); // 400ms to match the original code
    }
    return () => clearTimeout(timeout);
  }, [isAnimating]);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const startStopAnimation = () => {
    setIsAnimating(true);
  };

  return (
    <div className={styles.loader} onClick={toggleAnimation}>
      <div className={`${styles.loader__bar} ${styles['loader__bar--1']} ${isAnimating ? styles.animate : ''}`} />
      <div className={`${styles.loader__bar} ${styles['loader__bar--2']} ${isAnimating ? styles.animate : ''}`} />
      <div className={`${styles.loader__bar} ${styles['loader__bar--3']} ${isAnimating ? styles.animate : ''}`} />
      <div className={`${styles.loader__bar} ${styles['loader__bar--4']} ${isAnimating ? styles.animate : ''}`} />
      <div className={`${styles.loader__bar} ${styles['loader__bar--5']} ${isAnimating ? styles.animate : ''}`} />
      <div className={`${styles.loader__ball} ${isAnimating ? styles.animate : ''}`} />
    </div>
  );
};

export default Loader;



