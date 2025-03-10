import React, { useEffect, useRef, useState } from "react";
import { Pose } from "@mediapipe/pose";
import { Camera } from "@mediapipe/camera_utils";
import { calculateangle, distance, isABinYPlane } from "../../GlobalFunctions/calculateAngle";  
// import {exerciseCorrection} from "./ErrorCorrectionLibrary";
import setupGlow from "../../GlobalFunctions/setupGlow";
import TranslucentMessage from "./TranslucentMessage";
let setAnimateBorder = false;														
							 

function VideoAndCanvasC(props) {
  function sccoreInreaseFun() {
    // debugger;
    resultRef.current = !resultRef.current;
    sorecRef.current = sorecRef.current + 1;
    ScoreAudioCount();
    return;
  }
  let queue = useRef([false, false, false, false]); 

  const exerlist = props.exerlist; 
  let pointer = props.pointer;
  const updatelist = props.updatelist;
  let restRef = props.restRef;
  let resultRef = props.resultRef;
  let sorecRef = props.sorecRef;
  const ScoreAudioCount = props.ScoreAudioCount;
  const evaluate1 = props.evaluate1;    // 
  const evaluate2 = props.evaluate2 ;   /// 
//   console.log("evaluate1 array:", evaluate1);
// console.log("evaluate2 array:", props.evaluate1[pointer.current-1]);
// console.log("pointer:", pointer);

  const TimerVal = props.TimerVal;
  let audioPlaying = props.audioPlaying;
  let time = props.time;

  const [animateBorder, setAnimateBorder] = useState(false);
  const setupGlow = (parms) => {
    const canva1 = document.getElementById("ourcanva"); 
    setAnimateBorder(true);
    if (parms === "green") {
        canva1.style.boxShadow = "green -4px 4px 50px 50px";
        setTimeout(() => {
          setAnimateBorder(false);
          canva1.style.boxShadow = "rgb(91, 90, 90) -4px 4px 10px 5px";
        }, 10000);
    }else{
      canva1.style.boxShadow = "red -4px 4px 50px 50px";
        setTimeout(() => {
          setAnimateBorder(false);
          canva1.style.boxShadow = "rgb(91, 90, 90) -4px 4px 10px 5px";
        }, 2000);
    }
     
  }; 
    
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [pose, setPose] = useState(null);

  function setupCheck(att) { 
    if (
      att[28].visibility > 0.75 &&
      calculateangle(att[14], att[12], att[24]) > 80
    ) {
      return true;
    }
    return false;
  }
 
  const [showMessage, setShowMessage] = useState(false); 
  function action(keypoints) {
    if (exerlist[pointer.current] === "Setup") { 
      const result = setupCheck(keypoints);
      if (result) { 
        TimerVal.current = 1; 
        setupGlow("green", setAnimateBorder); // ------7
        return;
      } 
    }
    if (updatelist[pointer.current][2]) {
      // debugger; 
      const instructAud = document.getElementById("instructorAudio");
      let flag = false; 
      if(updatelist[pointer.current].length == 5){
        if(updatelist[pointer.current][4].lying == 0){
          flag = true;
        } else if(updatelist[pointer.current][4].lying == 1) {
          flag = isABinYPlane(keypoints[updatelist[pointer.current][4].pointA], keypoints[updatelist[pointer.current][4].pointB]);
        }
      } else {
        flag = true;
      }
      if(flag){
        // exerciseCorrection(keypoints , exerlist[pointer.current] ,instructAud);
        // console.log(keypoints);
        if (!queue.current[0] && evaluate1[pointer.current-1](keypoints)) {
          queue.current[0] = true;
        }
        if (queue.current[0] && evaluate2[pointer.current-1](keypoints)) {
          queue.current[1] = true;
        }
        if (queue.current[0] && queue.current[1]) {
          if (exerlist[pointer.current] === exerlist[1]) {
            resultRef.current = true;

            sccoreInreaseFun();
          }
          if (exerlist[pointer.current] === exerlist[2]) {
            resultRef.current = true;

            sccoreInreaseFun();
          }
          if (exerlist[pointer.current] === exerlist[3]) { 
            resultRef.current = true;
            sccoreInreaseFun();
          }
          if (exerlist[pointer.current] === exerlist[4]) { 
            resultRef.current = true;
            sccoreInreaseFun();
          }
          if (exerlist[pointer.current] === exerlist[5]) { 
            resultRef.current = true;
            sccoreInreaseFun();
          }
          queue.current[0] = false;
          queue.current[1] = false;
        }
      } else {
        setupGlow("red", setAnimateBorder);
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 500);
        return;
      }
    } else {
      // console.log("I am at action");
    }
  }

  function drawCircle(context, x, y, color, radius) {
    if (color == null) {
      color = "#FFF";
    }
    if (radius == null) {
      radius = 1;
    }
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI); // Draw a circle path
    context.fillStyle = color;
    context.fill();
    context.closePath();
  } 
  
  let currentTimeValu = time.current;
  let previous = time.current;
 
  useEffect(() => {
    let timeinterval = setInterval(() => {
      let currentVal = time.current; 
      if (previous !== currentVal) {
        previous = currentVal; 
        currentTimeValu = currentVal; 
      }
    }, 10);

    return () => clearInterval(timeinterval);
  },[])

    
  useEffect(() => {
    const onResults = (results) => {
      if (!canvasRef.current) return;
      const canvasCtx = canvasRef.current.getContext("2d");
      canvasCtx.save();
      canvasCtx.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      canvasCtx.drawImage(
        results.image,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      if (results.poseLandmarks) {
        const landmarks = results.poseLandmarks;
        let keypoints = [];

        for (let i = 0; i < 33; i++) {
          const coordinates = {
            x: landmarks[i].x * 1280,
            y: landmarks[i].y * 720,
            z: landmarks[i].z,
            visibility: landmarks[i].visibility,
          };

          keypoints.push(coordinates);
          //   draw circle
          drawCircle(canvasCtx, coordinates.x, coordinates.y, "green", 10);
        } 
        if (keypoints[24].visibility > 0.75 && !restRef.current) {
          // c
          action(keypoints);
        } 
      }
      // canvasCtx.restore();
    };

    const pose = new Pose({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`, 
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: false,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

    pose.onResults(onResults);
    setPose(pose);
    let camera = null;
    if (videoRef.current) {
      camera = new Camera(videoRef.current, {
        onFrame: async () => {
          if (!videoRef.current) {
            // console.error("Video element is null, skipping pose.send()");
            return;
          }
          await pose.send({ image: videoRef.current });
        },
        width: 640,
        height: 480,
      });
      camera.start();
    }

    return () => {
      camera.stop();
      if (pose) {
        pose.close();
      }
      setPose(null);
    };
  }, []);
  
  return (
    <>
      {/* <div>{props.queue} </div> */}
      <div style={styleinline.canVidMainC}>
        <div style={styleinline.canVidC}>
          <video
            hidden="hidden"
            className="input_video5 bg-black"
            style={styleinline.vidStyle}
            ref={videoRef}
          ></video>
          {/* <div className={`component ${animateBorder ? 'animateBorder' : ''}`}>  */}
          <canvas
            id="ourcanva"
            className={`output5 ${animateBorder ? "animateBorder" : ""}`} //"output5"
            style={styleinline.canvas}
            ref={canvasRef}
            width={1280}
            height={720}
          ></canvas>
  
          {/* Conditional rendering of TranslucentMessage */}
          {showMessage && <TranslucentMessage />}
  
          {/* </div> */}
        </div>
      </div>
    </>
  );
  
}

export default VideoAndCanvasC;

const styleinline = {
  canvas: {
    width: "100%",
    height: "100%",
    transform: "scaleX(-1)",
    boxShadow: "rgb(91, 90, 90) -4px 4px 10px 5px", // "rgb(91, 90, 90) -4px 4px 10px 5px"
    borderRadius: "5px",
    position: "absolute",
    // opacity: '0' // Uncomment if needed
    // visibility : "hidden",
  },
  canVidC: {
    width: "75%",
    height: "75%",
    borderRadius: "10px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  canVidMainC: {
    width: "100%",
    height: "100%",
    // backgroundColor: 'black', // Uncomment if needed
    // overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Montserrat Alternates', Geneva, Tahoma, sans-serif",
    margin: "0%",
  },
  vidStyle: {
    transform: "scaleX(-1)",
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    position: "absolute",
  },
};
