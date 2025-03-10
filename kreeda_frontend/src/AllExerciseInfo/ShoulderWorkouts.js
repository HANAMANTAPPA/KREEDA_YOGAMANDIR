import { calculateangle } from "../GlobalFunctions/calculateAngle";
import logoSetup from "../resorses/imges/lapscr.jpg";
import Setup from "./audios/Setup.mp3";
import DumbbellShoulderPress from "./audios/DumbbellShoulderPress.mp3";
import LateralRaises from "./audios/LateralRaises.mp3";
import ZPress from "./audios/ZPress.mp3";
import DumbbellFrontRaise from "./audios/DumbbellFrontRaise.mp3";
import DumbbellOneArmShoulderPress from "./audios/DumbbellOneArmShoulderPress.mp3";
import Thankyou from "./audios/Thankyou.mp3";

export let updatelistShoulderWorkouts = [
  [
    "Setup",
    "Welcome! Please ensure your laptop displays your full body. Stand around 7 feet from the screen before the camera activates. Adjust your position to stay visible as you move during our session",
    true,
    `${logoSetup}`,
  ],
  [
    "Dumbbell Shoulder Press",
    "The Dumbbell Shoulder Press primarily targets the deltoid muscles of the shoulders, along with the trapezius and triceps. It helps improve shoulder strength, muscle definition, and functional upper body movements",
    true,
    "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Dumbbell-shoulder-press.gif?resize=600%2C600&ssl=1",
  ],
  [
    "Lateral Raises",
    "The Lateral Raise targets the deltoid muscles of the shoulders, helping to improve shoulder strength, muscle definition, and functional upper body movements. It also engages the trapezius and triceps muscles",
    true,
    "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/lateralraise-1456955524.gif?crop=1xw:0.75xh;center,top&resize=1200:*",
  ],
  [
    "Z Press",
    "The Z press targets the deltoids, triceps, upper chest, and traps. The core also has to work to keep the posture stable, and can help with hip mobility, hamstring flexibility, and overall stability.",
    true,
    "https://www.garagegymreviews.com/wp-content/uploads/dumbbell-z-press.gif",
  ],
  [
    "Dumbbell Front Raise",
    "Front raises primarily strengthen your shoulder muscles (deltoids), but also work the upper chest (pectorals). It is an isolation exercise for shoulder flexion and can help you build strength and definition in the front and sides of your shoulders.",
    true,
    "https://i.pinimg.com/originals/29/17/76/2917766fcf0abab7e2650dbac8b209bf.gif",
  ],
  [
    "Dumbbell One-arm Shoulder Press",
    " The single-arm dumbbell shoulder press is a unilateral exercise that increases shoulder strength, stability, and symmetry. Performing the exercise with one arm at a time will actively engage the core throughout range of motion.",
    true,
    "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/singlearmoverheadpress-1456947623.gif",
  ], 

  [
    "Thankyou",
    "yea !! you have done great work tody. Thank you See you again.",
    true,
    // "https://mir-s3-cdn-cf.behance.net/project_modules/disp/c0ae0368346035.5b59dbb3639b9.gif",
    "https://www.slidekit.com/wp-content/uploads/2022/03/Thank-you-slide-in-gym-and-fitness-templates-for-google-slides-jpg.webp",
  ],
];

let exerlist = [
  "Setup",
  "Dumbbell Shoulder Press",
  "Lateral Raises",
  "Z Press",
  "Dumbbell Front Raise",
  "Dumbbell One-arm Shoulder Press",
  "Thankyou",
];
export let exerlistShoulderWorkoutLen = exerlist.length-2;
export let shoulder_audiosource = [
  Setup,
  DumbbellShoulderPress,
  LateralRaises,
  ZPress,
  DumbbellFrontRaise,
  DumbbellOneArmShoulderPress,
  Thankyou,
];
export let shoulder_met_time = [0, 0.005000, 0.002917, 0.004167, 0.002667, 0.005333, 0];

// function distance(a, b) {
//   return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
// }
export let exerlistShoulderWorkouts = exerlist;

export function evaluate1ShoulderWorkouts(att, pointer) {
  // const audios = document.querySelectorAll("audio");
  // let isPlaying = ////false;

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
  if (exerlist[pointer] === "Dumbbell Shoulder Press") {
    // console.log("Dumbbell Shoulder Press");

    if (
      calculateangle(att[24], att[12], att[14]) < 90 &&
      calculateangle(att[23], att[11], att[13]) < 90 &&
      calculateangle(att[12], att[14], att[16]) < 70 &&
      calculateangle(att[11], att[13], att[15]) < 70
    )
      return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "Lateral Raises") {
    console.log("Lateral Raises");
    if (
      calculateangle(att[24], att[12], att[14]) < 40 &&
      calculateangle(att[23], att[11], att[13]) < 40
    )
      return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "Z Press") {
    console.log("Z Press");

    if (
      calculateangle(att[24], att[12], att[14]) < 90 &&
      calculateangle(att[23], att[11], att[13]) < 90 &&
      calculateangle(att[12], att[14], att[16]) < 80 &&
      calculateangle(att[11], att[13], att[15]) < 80 &&
      calculateangle(att[12], att[24], att[26]) > 90 &&
      calculateangle(att[11], att[23], att[25]) < 120
    )
      return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "Dumbbell Front Raise") {
    console.log("Dumbbell Front Raise");
    if (
      calculateangle(att[24], att[12], att[14]) < 60 &&
      calculateangle(att[23], att[11], att[13]) < 60
    )
      return true;
    else {
      //false;
    }
  } else if (
    exerlistShoulderWorkouts[pointer] === "Dumbbell One-arm Shoulder Press"
  ) {
    console.log("Dumbbell One-arm Shoulder Press");
    if (
      calculateangle(att[24], att[12], att[14]) < 90 &&
      calculateangle(att[23], att[11], att[13]) <= 100 &&
      calculateangle(att[23], att[11], att[13]) >= 80 &&
      calculateangle(att[12], att[14], att[16]) < 70 &&
      calculateangle(att[11], att[13], att[15]) <= 200 &&
      calculateangle(att[11], att[13], att[15]) >= 150
    )
      return true;
    else {
      //false;
    }
  }
}
export function evaluate2ShoulderWorkouts(att, pointer) {
  if (exerlist[pointer] === "Dumbbell Shoulder Press") {
    if (
      calculateangle(att[24], att[12], att[14]) <= 180 &&
      calculateangle(att[23], att[11], att[13]) <= 180 &&
      calculateangle(att[12], att[14], att[16]) > 150 &&
      calculateangle(att[11], att[13], att[15]) > 150
    )
      return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "Lateral Raises") {
    if (
      calculateangle(att[24], att[12], att[14]) > 80 &&
      calculateangle(att[23], att[11], att[13]) > 80 &&
      calculateangle(att[24], att[12], att[14]) < 110 &&
      calculateangle(att[23], att[11], att[13]) < 110
    )
      return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "Z Press") {
    console.log("Z Press");
    if (
      calculateangle(att[24], att[12], att[14]) > 150 &&
      calculateangle(att[23], att[11], att[13]) > 150 &&
      calculateangle(att[12], att[14], att[16]) > 150 &&
      calculateangle(att[11], att[13], att[15]) > 150 &&
      calculateangle(att[12], att[24], att[26]) > 90 &&
      calculateangle(att[11], att[23], att[25]) < 120
    )
      return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "Dumbbell Front Raise") {
    console.log("Dumbbell Front Raise");

    if (
      calculateangle(att[24], att[12], att[14]) > 75 &&
      calculateangle(att[23], att[11], att[13]) > 75 &&
      calculateangle(att[24], att[12], att[14]) < 110 &&
      calculateangle(att[23], att[11], att[13]) < 110
    )
      return true;
    else {
      //false;
    }
  } else if (
    exerlistShoulderWorkouts[pointer] === "Dumbbell One-arm Shoulder Press"
  ) {
    console.log("Dumbbell One-arm Shoulder Press");
    //exeriseCorrection(att);
    if (
      calculateangle(att[24], att[12], att[14]) <= 190 &&
      calculateangle(att[23], att[11], att[13]) <= 100 &&
      calculateangle(att[23], att[11], att[13]) >= 80 &&
      calculateangle(att[12], att[14], att[16]) > 150 &&
      calculateangle(att[11], att[13], att[15]) > 150 &&
      calculateangle(att[11], att[13], att[15]) < 200
    )
      return true;
    else {
      //false;
    }
  }
}
