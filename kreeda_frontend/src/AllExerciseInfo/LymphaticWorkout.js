import logoSetup from "../resorses/imges/lapscr.jpg";
import Pstretch from "../resorses/imges/p stretch.gif";
import streth from "../resorses/imges/stretch.gif";
import Setup from "./audios/Setup.mp3";
import bentOverRow from "./audios/bentOverRow.mp3";
import BicepCurls from "./audios/BicepCurls.mp3";
import tricepsKickbacks from "./audios/tricepsKickbacks.mp3";
import HandandLegStretch from "./audios/HandandLegStretch.mp3";
import PunchingStretch from "./audios/PunchingStretch.mp3";
import Thankyou from "./audios/Thankyou.mp3";
//  Add genarate speech in exepage

export let updatelistLymphaticWorkout = [
  [
    "Setup",
    "Welcome! Please ensure your laptop displays your full body. Stand around 7 feet from the screen before the camera activates. Adjust your position to stay visible as you move during our session",
    true,
    `${logoSetup}`,
  ],
  [
    "bent-over row",
    "The bent-over row primarily targets the muscles of the upper back, including the latissimus dorsi, rhomboids, and trapezius, while also engaging the biceps and forearms. It helps improve posture, upper body strength, and muscle definition in the back and arms",
    true,
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/75-dumbbell-bent-over-row-1550754542.gif?resize=480:*",
  ],
  [
    "Bicep Curls",
    "Bicep curls primarily target the biceps brachii muscles while also engaging the brachialis and brachioradialis. They help increase arm strength, muscle definition, and enhance functional movements involving lifting and pulling.",
    true,
    "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bicep-curl.gif?resize=480:*",
  ],
  [
    "triceps kickbacks",
    "hold a dumbbell in each hand, hinge forward at the hips, and extend your arms straight back behind you. Keep your upper arms parallel to the ground, then return to the starting position.",
    true,
    "https://c.tenor.com/jqwaOmRs-7gAAAAC/tricep-kick-back-tricep.gif",
  ],
  [
    "Hand and Leg Stretch",
    "The Hand and Leg Stretch primarily targets the muscles along the side of the torso, including the obliques and latissimus dorsi. It helps improve flexibility, range of motion, and relieves tension in the upper body and spine",
    true,
    `${streth}`,
  ],
  [
    "Punching stretch",
    "Stretching like punching targets the shoulder, chest, and arm muscles, improving flexibility and range of motion in these areas. It helps prevent muscle stiffness, enhances circulation, and prepares the upper body for physical activity",
    true,
    `${Pstretch}`,
  ],
  [
    "Thankyou",
    "yea !! you have done great work tody. Thank you See you again.",
    true,
    // "https://mir-s3-cdn-cf.behance.net/project_modules/disp/c0ae0368346035.5b59dbb3639b9.gif",
    "https://www.slidekit.com/wp-content/uploads/2022/03/Thank-you-slide-in-gym-and-fitness-templates-for-google-slides-jpg.webp",
  ],
];

export let exerlistLymphaticWorkout = [
  "Setup",
  "bent-over row",
  "Bicep Curls",
  "triceps kickbacks",
  "Hand and Leg Stretch",
  "Punching stretch",
  "Thankyou",
];
export let exerlistLymphaticWorkoutLen = exerlistLymphaticWorkout.length-2;

export let lymph_audiosource =[
  Setup, 
  bentOverRow,
  BicepCurls,
  tricepsKickbacks,
  HandandLegStretch,
  PunchingStretch,
  Thankyou,
];

export let lymph_met_time = [0, 0.003333, 0.002917, 0.003333, 0.002778, 0.002222, 0];

function calculateangle(pointA, pointB, pointC) {
  // Calculate the vectors between the points
  const vectorBA = { x: pointA.x - pointB.x, y: pointA.y - pointB.y };
  const vectorBC = { x: pointC.x - pointB.x, y: pointC.y - pointB.y };

  // Calculate the dot product of the vectors
  const dotProduct = vectorBA.x * vectorBC.x + vectorBA.y * vectorBC.y;

  // Calculate the magnitudes of the vectors
  const magnitudeBA = Math.sqrt(vectorBA.x ** 2 + vectorBA.y ** 2);
  const magnitudeBC = Math.sqrt(vectorBC.x ** 2 + vectorBC.y ** 2);

  // Calculate the angle in radians
  let angleRadians = Math.acos(dotProduct / (magnitudeBA * magnitudeBC));

  // Convert radians to degrees
  let angleDegrees = angleRadians * (180 / Math.PI);

  return angleDegrees;
}

export function evaluate1LymphaticWorkout(att, pointer) {
  // debugger;
  // const audios = document.querySelectorAll("audio");
  // let isPlaying = false;

  // audios.forEach((eachaudio) => {
  //   console.log("audio printed ");
  //   if (!eachaudio.paused || eachaudio.ended) {
  //     isPlaying = true;
  //   }
  // });
  // if (!isPlaying) {
  //   // bgaud = document.getElementById("background-music");
  //   bgaud.play();
  //   bgaud.volume = 0.15;
  // }
  // document.getElementById("background-music").play();
  // console.log(
  //   `\n\n\n\n\n\n\n\n\n\n ${exerlist[pointer.current]} \n\n\n\n\n\n\n\n`
  // );
  console.log(exerlistLymphaticWorkout[pointer] === "bent-over row");
  if (exerlistLymphaticWorkout[pointer] === "bent-over row") {
    // console.log("bent-over row");
    // debugger;
    if (
      calculateangle(att[12], att[24], att[26]) < 160 &&
      calculateangle(att[12], att[14], att[16]) > 170
    )
      return true;
    else {
      // return false;
    }
  } else if (exerlistLymphaticWorkout[pointer] === "Hand and Leg Stretch") {
    console.log("Hand and Leg Stretch");
    // debugger;
    if (
      calculateangle(att[15], att[28], att[31]) < 70 &&
      calculateangle(att[23], att[11], att[13]) < 50
    )
      return true;
    else {
      // return false;
    }
  } else if (exerlistLymphaticWorkout[pointer] === "triceps kickbacks") {
    console.log("triceps kickbacks");
    // debugger;
    if (
      calculateangle(att[12], att[14], att[16]) < 90 &&
      calculateangle(att[12], att[24], att[26]) < 160
    )
      return true;
    else {
      // return false;
    }
  } else if (exerlistLymphaticWorkout[pointer] === "Punching stretch") {
    console.log("Punching stretch");
    if (
      calculateangle(att[16], att[14], att[12]) < 85 &&
      calculateangle(att[14], att[12], att[24]) < 50
    )
      return true;
    else {
      // return false;
    }
  } else if (exerlistLymphaticWorkout[pointer] === "Bicep Curls") {
    console.log("Bicep Curls");
    // exerciseCorrection(att);
    if (
      calculateangle(att[12], att[14], att[16]) > 170 &&
      calculateangle(att[11], att[13], att[15]) > 160
    )
      return true;
    else {
      // return false;
    }
  }
}
export function evaluate2LymphaticWorkout(att, pointer) {
  // debugger;
  if (exerlistLymphaticWorkout[pointer] === "bent-over row") {
    if (
      calculateangle(att[12], att[24], att[26]) < 160 &&
      calculateangle(att[12], att[14], att[16]) < 60
    )
      return true;
    else {
      // return false;
    }
  } else if (exerlistLymphaticWorkout[pointer] === "Hand and Leg Stretch") {
    if (
      calculateangle(att[15], att[28], att[31]) > 85 &&
      calculateangle(att[23], att[11], att[13]) > 170
    )
      return true;
    else {
      // return false;
    }
  } else if (exerlistLymphaticWorkout[pointer] === "Punching stretch") {
    if (
      calculateangle(att[16], att[14], att[12]) > 170 &&
      calculateangle(att[14], att[12], att[24]) > 80
    )
      return true;
    else {
      // return false;
    }
  } else if (exerlistLymphaticWorkout[pointer] === "Bicep Curls") {
    console.log("Bicep Curls");
    // exerciseCorrection(att);
    if (
      calculateangle(att[12], att[14], att[16]) < 60 &&
      calculateangle(att[11], att[13], att[15]) < 60
    )
      return true;
    else {
      // return false;
    }
  } else if (exerlistLymphaticWorkout[pointer] === "triceps kickbacks") {
    console.log("triceps kickbacks");
    if (
      calculateangle(att[12], att[14], att[16]) > 160 &&
      calculateangle(att[12], att[24], att[26]) < 160
    )
      return true;
    else {
      // return false;
    }
  }
}
