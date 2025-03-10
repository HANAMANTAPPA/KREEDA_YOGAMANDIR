import { calculateangle } from "../GlobalFunctions/calculateAngle";
import logoSetup from "../resorses/imges/lapscr.jpg";
import Setup from "./audios/Setup.mp3";
import CrossJacks from "./audios/CrossJacks.mp3";
import ButtKickVariation from "./audios/ButtKickVariation.mp3";
import RunInPlace from "./audios/RunInPlace.mp3";
import SideToSideSkiers from "./audios/SideToSideSkiers.mp3";
import ShoulderTaps from "./audios/ShoulderTaps.mp3";
import Thankyou from "./audios/Thankyou.mp3";

export let updatelistBackWorkout = [
  [
    "Setup",
    "Welcome! Please ensure your laptop displays your full body. Stand around 7 feet from the screen before the camera activates. Adjust your position to stay visible as you move during our session",
    true,
    `${logoSetup}`,
  ],
  [
    "CrossJacks",
    "Energize your body and mind with a dynamic routine of jumping jacks interspersed with cross-body movements, designed to elevate your heart rate and boost overall fitness.",
    true,
    "https://www.spotebi.com/wp-content/uploads/2016/02/cross-jacks-exercise-illustration-spotebi.gif",
  ],
  [
    "ButtKickVariation",
    "Incorporate butt kick variations into your workout to target the glutes and hamstrings while adding intensity and diversity to your training routine.",
    true,
    "https://www.spotebi.com/wp-content/uploads/2015/01/butt-kicks-exercise-illustration-spotebi.gif",
  ],
  [
    "RunInPlace",
    "Engage your muscles and elevate your heart rate with the invigorating intensity of a run in place workout.",
    true,
    "https://i.pinimg.com/originals/b3/8d/a2/b38da20664cbd52a10f93c349a8542b2.gif",
  ],
  [
    "SideToSideSkiers",
    "Experience improved agility and enhanced cardiovascular endurance by incorporating side-to-side skiers into your workout routine",
    true,
    "https://i.pinimg.com/originals/96/94/c5/9694c565c29f34641baa6b6df83b5d31.gif",
  ],
  [
    "ShoulderTaps",
    "you'll challenge your core and improve balance by alternating tapping each shoulder while in a plank position.",
    true,
    "https://i.pinimg.com/originals/98/3a/ae/983aaeb3bd5dac317af8299eeb3a2707.gif",
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
  "CrossJacks",
  "ButtKickVariation",
  "RunInPlace",
  "SideToSideSkiers",
  "ShoulderTaps",
  "Thankyou",
];
export let exerlistBackWorkoutLen = exerlist.length-2;
export let back_audiosource = [
  Setup,
  CrossJacks,
  ButtKickVariation,
  RunInPlace,
  SideToSideSkiers,
  ShoulderTaps,
  Thankyou,
];

export let back_met_time = [0, 0.003056, 0.001667, 0.001944, 0.003333, 0.002333, 0];

export let exerlistBackWorkout = exerlist;

export function evaluate1BackWorkout(att, pointer) {
  if (exerlist[pointer] === "CrossJacks") {
    // console.log("bent-over row");

    if (
      calculateangle(
        att[14],
        att[12],
        att[11] > 170 && calculateangle(att[24], att[26], att[28] > 170)
      )
    )
      return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "SideToSideSkiers") {
    console.log("SideToSideSkiers");
    if (calculateangle(att[12], att[14], att[16]) < 170) return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "RunInPlace") {
    console.log("RunInPlace");
    if (
      calculateangle(att[24], att[26], att[28]) > 170 &&
      calculateangle(att[12], att[14], att[16]) > 170
    )
      return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "ShoulderTaps") {
    console.log("ShoulderTaps");
    if (calculateangle(att[12], att[14], att[16]) > 170) return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "ButtKickVariation") {
    console.log("ButtKickVariation");
    if (calculateangle(att[24], att[26], att[28]) > 170) return true;
    else {
      // false;
    }
  }
}
export function evaluate2BackWorkout(att, pointer) {
  if (exerlist[pointer] === "CrossJacks") {
    if (calculateangle(att[14], att[12], att[11]) < 60) return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "SideToSideSkiers") {
    if (calculateangle(att[12], att[14], att[16]) < 30) return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "ShoulderTaps") {
    if (calculateangle(att[12], att[14], att[16]) < 100) return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "ButtKickVariation") {
    console.log("ButtKickVariation");

    if (calculateangle(att[24], att[26], att[28]) < 90) return true;
    else {
      //false;
    }
  } else if (exerlist[pointer] === "RunInPlace") {
    console.log("RunInPlace");
    if (calculateangle(att[12], att[24], att[26]) < 100) return true;
    else {
      //false;
    }
  }
}
