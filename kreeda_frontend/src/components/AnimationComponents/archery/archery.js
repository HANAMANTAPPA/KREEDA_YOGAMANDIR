// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// gsap.registerPlugin(MotionPathPlugin);

// const ArcheryGame = ({ sorecRef }) => {
//   const svgRef = useRef(null);
//   const arrowsRef = useRef(null);
//   const tallyMarksContainerRef = useRef(null);
//   const arrowCountDisplayRef = useRef(null);
//   const perfectGoalRef = useRef(null);

//   const [arrowCount, setArrowCount] = useState(0);
//   const [tallyGroups, setTallyGroups] = useState(0);

//   useEffect(() => {
//     const svg = svgRef.current;
//     const arrows = arrowsRef.current;
//     const tallyMarksContainer = tallyMarksContainerRef.current;
//     const arrowCountDisplay = arrowCountDisplayRef.current;
//     const perfectGoal = perfectGoalRef.current;

//     const target = { x: 340, y: 80 };

//     function fireArrow() {
//       const newArrow = document.createElementNS("http://www.w3.org/2000/svg", "use");
//       newArrow.setAttributeNS('http://www.w3.org/1999/xlink', 'href', "#arrow");
//       arrows.appendChild(newArrow);
      
//       gsap.set(newArrow, { x: 20, y: 80, rotation: 0, scale: 2.25 });
      
//       const targetCenterX = 340;
//       const targetCenterY = 80;
//       const targetRadiusX = 17.25;
//       const targetRadiusY = 11.5;
      
//       const randomX = targetCenterX + (Math.random() * 2 - 1) * targetRadiusX;
//       const randomY = targetCenterY + (Math.random() * 2 - 1) * targetRadiusY;
      
//       gsap.to(newArrow, {
//         duration: 0.5,
//         x: randomX,
//         y: randomY,
//         rotation: 0,
//         ease: "power1.in",
//         onComplete: onHit,
//         onCompleteParams: [newArrow, randomX, randomY]
//       });
//     }

//     function onHit(arrow, x, y) {
//       const dx = x - target.x;
//       const dy = y - target.y;
//       const distance = Math.sqrt((dx * dx) + (dy * dy));
      
//       setArrowCount(prevCount => {
//         const newCount = prevCount + 1;
//         arrowCountDisplay.textContent = `Arrows: ${newCount}`;
        
//         if (newCount % 5 === 0) {
//           createTallyMark();
//           showPerfectGoal();
//         }
        
//         return newCount;
//       });
//     }

//     function createTallyMark() {
//       setTallyGroups(prevTallyGroups => {
//         const newTallyGroups = prevTallyGroups + 1;
//         const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
//         group.setAttribute("transform", `translate(${10 + (newTallyGroups - 1) * 50}, 10) scale(0.9)`);
        
//         const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
        
//         for (let i = 0; i < 5; i++) {
//           let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
//           line.setAttribute("x1", i * 10);
//           line.setAttribute("y1", 0);
//           line.setAttribute("x2", i * 10);
//           line.setAttribute("y2", 40);
//           line.setAttribute("stroke", colors[i]);
//           line.setAttribute("stroke-width", "4");
//           line.setAttribute("stroke-linecap", "round");
//           group.appendChild(line);
          
//           gsap.from(line, {
//             duration: 0.5,
//             scaleY: 0,
//             transformOrigin: "bottom",
//             ease: "elastic.out(1, 0.5)",
//             delay: i * 0.1
//           });
//         }
        
//         let diagonalLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
//         diagonalLine.setAttribute("x1", 0);
//         diagonalLine.setAttribute("y1", 40);
//         diagonalLine.setAttribute("x2", 40);
//         diagonalLine.setAttribute("y2", 0);
//         diagonalLine.setAttribute("stroke", "#FFD700");
//         diagonalLine.setAttribute("stroke-width", "4");
//         diagonalLine.setAttribute("stroke-linecap", "round");
//         group.appendChild(diagonalLine);
        
//         gsap.from(diagonalLine, {
//           duration: 0.5,
//           scale: 0,
//           transformOrigin: "center",
//           ease: "back.out(1.7)",
//           delay: 0.5
//         });
        
//         tallyMarksContainer.appendChild(group);
//         return newTallyGroups;
//       });
//     }

//     function showPerfectGoal() {
//       gsap.fromTo(perfectGoal, 
//         { opacity: 1, scale: 1 },
//         { opacity: 0, scale: 2, duration: 1, ease: "bounce.out" }
//       );
//     }

//     // Check sorecRef and fire arrows automatically
//     const checkSorecRef = () => {
//       if (sorecRef && sorecRef.current > arrowCount) {
//         fireArrow();
//       }
//     };

//     const intervalId = setInterval(checkSorecRef, 100);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [sorecRef, arrowCount]);

//   return (
//     <div className="archery-game-container">
//       <style>{`
//         .archery-game-container {
//           margin: 0;
//            height: 40vh;
//            width: 40vh;
//           background: #222;
//           padding: 20px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//         #game-container {
//           width: 40vh;
//           height: 40vh;
//           position: relative;
//           overflow: hidden;
//         }
//         svg {
//           width: 100%;
//           height: 100%;
//           position: absolute;
//           top: 0;
//           left: 0;
//         }
//         .tally-container {
//           position: absolute;
//           top: 10px;
//           left: 10px;
//           color: white;
//           gap: 0.5px;
//           font-family: sans-serif;
//           font-size: 1.5vh;
//         }
//         .arrow-count {
//           position: absolute;
//           top: 3vh;
//           left: 10px;
//           color: white;
//           font-family: sans-serif;
//           font-size: 1.5vh;
//         }
//         .perfect-goal {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           color: white;
//           font-family: sans-serif;
//           font-size: 3vh;
//           text-align: center;
//           opacity: 0;
//         }
//       `}</style>
//       <div id="game-container">
//         <div className="tally-container" id="tally-container"></div>
//         <div className="arrow-count" id="arrow-count" ref={arrowCountDisplayRef}>Arrows: 0</div>
//         <div className="perfect-goal" id="perfect-goal" ref={perfectGoalRef}>Perfect !</div>
//         <svg id="game" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160" overflow="visible" ref={svgRef}>
//           <defs>
//             <g id="arrow">
//               <line x2="36" fill="none" stroke="#888" strokeWidth="1.5" />
//               <polygon fill="#888" points="38.4 0 34.8 1.2 33.6 0 34.8 -1.2" />
//               <polygon fill="#88ce02" points="1.2 -1.8 -2.4 -1.8 -0.6 0 -2.4 1.8 1.2 1.8 3 0" />
//             </g>
//           </defs>
//           <g id="target" transform="translate(360, 80) scale(1)">
//             <path fill="#FFF" d="M924.2,274.2c-21.5,21.5-45.9,19.9-52,3.2c-4.4-12.1,2.4-29.2,14.2-41c11.8-11.8,29-18.6,41-14.2 C944.1,228.3,945.7,252.8,924.2,274.2z" transform="translate(-900, -240)" />
//             <path fill="#F4531C" d="M915.8,265.8c-14.1,14.1-30.8,14.6-36,4.1c-4.1-8.3,0.5-21.3,9.7-30.5s22.2-13.8,30.5-9.7 C930.4,235,929.9,251.7,915.8,265.8z" transform="translate(-900, -240)" />
//             <path fill="#FFF" d="M908.9,258.9c-8,8-17.9,9.2-21.6,3.5c-3.2-4.9-0.5-13.4,5.6-19.5c6.1-6.1,14.6-8.8,19.5-5.6 C918.1,241,916.9,250.9,908.9,258.9z" transform="translate(-900, -240)" />
//             <path fill="#F4531C" d="M903.2,253.2c-2.9,2.9-6.7,3.6-8.3,1.7c-1.5-1.8-0.6-5.4,2-8c2.6-2.6,6.2-3.6,8-2 C906.8,246.5,906.1,250.2,903.2,253.2z" transform="translate(-900, -240)" />
//           </g>
//           <g id="bow" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" pointerEvents="none" transform="translate(40, 35) scale(2.25)">
//             <polyline fill="none" stroke="#ddd" strokeLinecap="round" points="0,0 0,33.33 0,66.67" />
//             <path fill="none" stroke="#88ce02" strokeWidth="2" strokeLinecap="round" d="M0,66.67 c0-6.73,8-16.73,8-33.33s-8-26.6-8-33.33" />
//           </g>
//           <g className="arrows" ref={arrowsRef} pointerEvents="none"></g>
//           <g id="tally-marks" ref={tallyMarksContainerRef}></g>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default ArcheryGame;
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const ArcheryGame = ({ sorecRef }) => {
  const svgRef = useRef(null);
  const arrowsRef = useRef(null);
  const tallyMarksContainerRef = useRef(null);
  const arrowCountDisplayRef = useRef(null);
  const perfectGoalRef = useRef(null);

  const [arrowCount, setArrowCount] = useState(0);
  const [tallyGroups, setTallyGroups] = useState(0);
  const lastFiredCountRef = useRef(0);

  useEffect(() => {
    const arrows = arrowsRef.current;
    const tallyMarksContainer = tallyMarksContainerRef.current;
    const arrowCountDisplay = arrowCountDisplayRef.current;
    const perfectGoal = perfectGoalRef.current;

    const target = { x: 340, y: 80 };

    function fireArrow() {
      const newArrow = document.createElementNS("http://www.w3.org/2000/svg", "use");
      newArrow.setAttributeNS('http://www.w3.org/1999/xlink', 'href', "#arrow");
      arrows.appendChild(newArrow);
      
      gsap.set(newArrow, { x: 20, y: 80, rotation: 0, scale: 2.25 });
      
      const targetCenterX = 340;
      const targetCenterY = 80;
      const targetRadiusX = 17.25;
      const targetRadiusY = 11.5;
      
      const randomX = targetCenterX + (Math.random() * 2 - 1) * targetRadiusX;
      const randomY = targetCenterY + (Math.random() * 2 - 1) * targetRadiusY;
      
      gsap.to(newArrow, {
        duration: 0.5,
        x: randomX,
        y: randomY,
        rotation: 0,
        ease: "power1.in",
        onComplete: onHit,
        onCompleteParams: [newArrow, randomX, randomY]
      });
    }

    function onHit(arrow, x, y) {
      setArrowCount(prevCount => {
        const newCount = prevCount + 1;
        arrowCountDisplay.textContent = `Arrows: ${newCount}`;
        
        if (newCount % 5 === 0) {
          createTallyMark();
          showPerfectGoal();
        }
        
        return newCount;
      });
    }

    function createTallyMark() {
      setTallyGroups(prevTallyGroups => {
        const newTallyGroups = prevTallyGroups + 1;
        const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
        group.setAttribute("transform", `translate(${10 + (newTallyGroups - 1) * 50}, 10) scale(0.9)`);
        
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
        
        for (let i = 0; i < 5; i++) {
          let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", i * 10);
          line.setAttribute("y1", 0);
          line.setAttribute("x2", i * 10);
          line.setAttribute("y2", 40);
          line.setAttribute("stroke", colors[i]);
          line.setAttribute("stroke-width", "4");
          line.setAttribute("stroke-linecap", "round");
          group.appendChild(line);
          
          gsap.from(line, {
            duration: 0.5,
            scaleY: 0,
            transformOrigin: "bottom",
            ease: "elastic.out(1, 0.5)",
            delay: i * 0.1
          });
        }
        
        let diagonalLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        diagonalLine.setAttribute("x1", 0);
        diagonalLine.setAttribute("y1", 40);
        diagonalLine.setAttribute("x2", 40);
        diagonalLine.setAttribute("y2", 0);
        diagonalLine.setAttribute("stroke", "#FFD700");
        diagonalLine.setAttribute("stroke-width", "4");
        diagonalLine.setAttribute("stroke-linecap", "round");
        group.appendChild(diagonalLine);
        
        gsap.from(diagonalLine, {
          duration: 0.5,
          scale: 0,
          transformOrigin: "center",
          ease: "back.out(1.7)",
          delay: 0.5
        });
        
        tallyMarksContainer.appendChild(group);
        return newTallyGroups;
      });
    }

    function showPerfectGoal() {
      gsap.fromTo(perfectGoal, 
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 2, duration: 1, ease: "bounce.out" }
      );
    }

    // Check sorecRef and fire arrows based on its value
    const checkSorecRef = () => {
      if (sorecRef && sorecRef.current > lastFiredCountRef.current) {
        fireArrow();
        lastFiredCountRef.current = sorecRef.current;
      }
    };

    const intervalId = setInterval(checkSorecRef, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [sorecRef]);

  return (
    <div className="archery-game-container">
      <style>{`
        .archery-game-container {
          margin: 0;
          height: 40vh;
          width: 40vh;
          background: #222;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #game-container {
          width: 40vh;
          height: 40vh;
          position: relative;
          overflow: hidden;
        }
        svg {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        .tally-container {
          position: absolute;
          top: 10px;
          left: 10px;
          color: white;
          gap: 0.5px;
          font-family: sans-serif;
          font-size: 1.5vh;
        }
        .arrow-count {
          position: absolute;
          top: 3vh;
          left: 10px;
          color: white;
          font-family: sans-serif;
          font-size: 1.5vh;
        }
        .perfect-goal {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-family: sans-serif;
          font-size: 3vh;
          text-align: center;
          opacity: 0;
        }
      `}</style>
      <div id="game-container">
        <div className="tally-container" id="tally-container"></div>
        <div className="arrow-count" id="arrow-count" ref={arrowCountDisplayRef}>Arrows: 0</div>
        <div className="perfect-goal" id="perfect-goal" ref={perfectGoalRef}>Perfect!</div>
        <svg id="game" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 160" overflow="visible" ref={svgRef}>
          <defs>
            <g id="arrow">
              <line x2="36" fill="none" stroke="#888" strokeWidth="1.5" />
              <polygon fill="#888" points="38.4 0 34.8 1.2 33.6 0 34.8 -1.2" />
              <polygon fill="#88ce02" points="1.2 -1.8 -2.4 -1.8 -0.6 0 -2.4 1.8 1.2 1.8 3 0" />
            </g>
          </defs>
          <g id="target" transform="translate(360, 80) scale(1)">
            <path fill="#FFF" d="M924.2,274.2c-21.5,21.5-45.9,19.9-52,3.2c-4.4-12.1,2.4-29.2,14.2-41c11.8-11.8,29-18.6,41-14.2 C944.1,228.3,945.7,252.8,924.2,274.2z" transform="translate(-900, -240)" />
            <path fill="#F4531C" d="M915.8,265.8c-14.1,14.1-30.8,14.6-36,4.1c-4.1-8.3,0.5-21.3,9.7-30.5s22.2-13.8,30.5-9.7 C930.4,235,929.9,251.7,915.8,265.8z" transform="translate(-900, -240)" />
            <path fill="#FFF" d="M908.9,258.9c-8,8-17.9,9.2-21.6,3.5c-3.2-4.9-0.5-13.4,5.6-19.5c6.1-6.1,14.6-8.8,19.5-5.6 C918.1,241,916.9,250.9,908.9,258.9z" transform="translate(-900, -240)" />
            <path fill="#F4531C" d="M903.2,253.2c-2.9,2.9-6.7,3.6-8.3,1.7c-1.5-1.8-0.6-5.4,2-8c2.6-2.6,6.2-3.6,8-2 C906.8,246.5,906.1,250.2,903.2,253.2z" transform="translate(-900, -240)" />
          </g>
          <g id="bow" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke" pointerEvents="none" transform="translate(40, 35) scale(2.25)">
            <polyline fill="none" stroke="#ddd" strokeLinecap="round" points="0,0 0,33.33 0,66.67" />
            <path fill="none" stroke="#88ce02" strokeWidth="2" strokeLinecap="round" d="M0,66.67 c0-6.73,8-16.73,8-33.33s-8-26.6-8-33.33" />
          </g>
          <g className="arrows" ref={arrowsRef} pointerEvents="none"></g>
          <g id="tally-marks" ref={tallyMarksContainerRef}></g>
        </svg>ṅ
      </div>
    </div>
  );
};

export default ArcheryGame;