// import React, { useEffect } from "react";
// import "./rain.css"; // Ensure to import your CSS file if needed

// const RainRippleEffect = (props) => {
//   const sorecRef = props.sorecRef;
//   let previous = sorecRef.current;
//   useEffect(() => {
//     // toggleActive(3);
//     let seI = setInterval(() => {
//       const currentVal = sorecRef.current;
//       // console.log(
//       //   "\n\n\n\n" + previous + "\n\n\n\n" + sorecRef.current + "\n\n\n\n"
//       // );
//       if (previous !== currentVal) {
//         previous = currentVal;
//         document.getElementById("container").click();
//         // sorecRef.current += 1;
//       }
//     }, 1);
//     // setCheckVar_Score(sorecRef.current);
//     return () => clearInterval(seI);
//   }, []);
//   useEffect(() => {
//     const container = document.getElementById("container");

//     const animate = () => {
//       // Create a new ripple container
//       const ripplesContainer = document.createElement("div");
//       ripplesContainer.className = "ripples";
//       container.appendChild(ripplesContainer);

//       // Create a new drop
//       const newDrop = document.createElement("div");
//       newDrop.className = "drop";
//       newDrop.style.top = "0";
//       newDrop.style.opacity = "0";
//       newDrop.innerHTML = `
//         <svg viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="20" cy="20" r="20" />
//         </svg>
//       `;
//       container.appendChild(newDrop);

//       // Create a new ripple
//       const newRipple = document.createElement("div");
//       newRipple.className = "ripple";
//       newRipple.style.top = "68px";
//       newRipple.style.left = "-70px";
//       newRipple.style.transform = "rotateX(65deg) scale3d(0.2, 0.2, 0.2)";
//       newRipple.innerHTML = `
//         <div class="ripple-svg">
//             <svg viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="30" cy="30" r="24" />
//             </svg>
//         </div>
//       `;
//       ripplesContainer.appendChild(newRipple);

//       // Trigger animations
//       setTimeout(() => {
//         newDrop.classList.add("animate");
//         newRipple.classList.add("animate");

//         // Remove elements after animation completes
//         setTimeout(() => {
//           newDrop.remove();
//           newRipple.remove();
//         }, 2000); // Adjust this time to match your animation duration
//       }, 50); // Delay to ensure DOM updates are applied
//     };

//     container.addEventListener("click", animate);

//     return () => {
//       container.removeEventListener("click", animate);
//     };
//   }, []);

//   return (
//     <div className="rainDropContainer">
//       <div id="container" className="wrap">
//         <div className="drop-outer">
//           <svg
//             className="drop"
//             viewBox="0 0 40 40"
//             version="1.1"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <circle cx="20" cy="20" r="20" />
//           </svg>
//         </div>
//         <div className="ripples">
//           {/* Ripples will be dynamically added here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RainRippleEffect;



import React, { useEffect } from "react";
import styles from "./rain.module.css";

const RainRippleEffect = (props) => {
  const sorecRef = props.sorecRef;
  let previous = sorecRef.current;

  useEffect(() => {
    let seI = setInterval(() => {
      const currentVal = sorecRef.current;
      if (previous !== currentVal) {
        previous = currentVal;
        document.getElementById("container").click();
      }
    }, 1);
    return () => clearInterval(seI);
  }, []);

  useEffect(() => {
    const container = document.getElementById("container");

    const animate = () => {
      const ripplesContainer = document.createElement("div");
      ripplesContainer.className = styles.ripples;
      container.appendChild(ripplesContainer);

      const newDrop = document.createElement("div");
      newDrop.className = styles.drop;
      newDrop.style.top = "0";
      newDrop.style.opacity = "0";
      newDrop.innerHTML = `
        <svg viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
        </svg>
      `;
      container.appendChild(newDrop);

      const newRipple = document.createElement("div");
      newRipple.className = styles.ripple;
      newRipple.style.top = "68px";
      newRipple.style.left = "-70px";
      newRipple.style.transform = "rotateX(65deg) scale3d(0.2, 0.2, 0.2)";
      newRipple.innerHTML = `
        <div class="${styles['ripple-svg']}">
            <svg viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="24" />
            </svg>
        </div>
      `;
      ripplesContainer.appendChild(newRipple);

      setTimeout(() => {
        newDrop.classList.add(styles.animate);
        newRipple.classList.add(styles.animate);

        setTimeout(() => {
          newDrop.remove();
          newRipple.remove();
        }, 2000);
      }, 50);
    };

    container.addEventListener("click", animate);

    return () => {
      container.removeEventListener("click", animate);
    };
  }, []);

  return (
    <div className={styles.rainDropContainer}>
      <div id="container" className={styles.wrap}>
        <div className={styles['drop-outer']}>
          <svg
            className={styles.drop}
            viewBox="0 0 40 40"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" />
          </svg>
        </div>
        <div className={styles.ripples}>
          {/* Ripples will be dynamically added here */}
        </div>
      </div>
    </div>
  );
};

export default RainRippleEffect;