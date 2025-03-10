import { calculateangle } from "../GlobalFunctions/calculateAngle";
import logoSetup from "../resorses/imges/lapscr.jpg";
import Setup from "./audios/Setup.mp3";
import Situp from "./audios/Situp.mp3";
import LyingLegRaise from "./audios/LyingLegRaise.mp3";
import HipRaise from "./audios/HipRaise.mp3";
import BycycleCrunch from "./audios/BycycleCrunch.mp3";
import MountainClimbers from "./audios/MountainClimbers.mp3";
import Thankyou from "./audios/Thankyou.mp3";

export let updatelistWaistlineWorkouts = [
  [
    "Setup",
    "Welcome! Please ensure your laptop displays your full body. Stand around 7 feet from the screen before the camera activates. Adjust your position to stay visible as you move during our session",
    true,
    `${logoSetup}`,
  ],
  [
    "Situp",
    "The sit-up strengthens the core by lifting your torso toward your thighs. Engage core, exhale up, inhale down, and repeat safely. Variations like decline sit-ups and Russian twists add challenge",
    true,
    "https://i.pinimg.com/originals/c6/e1/6a/c6e16a9b9dc7d97b0d4ad78b50e7b424.gif",
  ],
  [
    "Lying Leg Raise",
    "Lying leg raises train your abs and your hip flexors. The exercise can be made easier by bending your knees slightly, and you can make it heavier by using ankle weights.",
    true,
    "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/lying-leg-raises.gif?resize=600%2C600&ssl=1",
  ],
  [
    "Hip Raise",
    "Hip raises build strength in the glutes, hamstrings, and core, and activate the glutes. The glutes are the largest muscle group in the lower body, and are important for fat burning and all lower body movements",
    true,
    "https://i.pinimg.com/originals/01/c5/38/01c5384083945b97785eefc7fdf37ba0.gif",
  ],
  [
    "BycycleCrunch",
    "Lie on your back, lift shoulders, and pedal knees to chest while straightening the opposite leg, twisting torso to touch elbow to knee for a dynamic abdominal workout.",
    true,
    "https://gifdb.com/images/high/man-in-blue-doing-bicycle-crunches-exercise-bf3rojluw43kjlr2.gif",
  ],
  [
    "MountainClimbers",
    "From plank position, rapidly alternate bringing knees towards chest while maintaining core engagement and a straight body line. Aim for a quick, controlled pace to elevate heart rate and engage multiple muscle groups for an effective cardio and core workout.",
    true,
    "https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif",
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
  "Situp",
  "Lying Leg Raise",
  "Hip Raise",
  "BycycleCrunch",
  "MountainClimbers",
  "Thankyou",
];

export let exerlistWaistlineWorkoutLen = exerlist.length-2;

export let audiosource = [
  Setup,
  Situp,
  LyingLegRaise,
  HipRaise,
  BycycleCrunch,
  MountainClimbers,
  Thankyou,
];

// export let met = [
//   0,
//   5, //average is 4-6 .i.e 4 at minimum intensity and 6 at vigorous
//   3, //average is 2-4 .i.e 2 at minimum intensity and 4 at vigorous
//   3.5, //average is 3-4 .i.e 3 at minimum intensity and 4 at vigorous
//   3.4, //average is 2.8-4 .i.e 2.8 at minimum intensity and 4 at vigorous
//   6, //average is 4-8 .i.e 4 at minimum intensity and 8 at vigorous
//   0
// ];

// export let time = [
//   0,
//   3, //average is 2-3
//   4, //average is 3-4
//   3, //average is 2-3
//   3, //3 seconds is for each side, for both take it as 6
//   2, //for each side, 4 for both sides
//   0
// ]


export let met_time = [ //this is met * average time
  0,
  0.0017, // 5 * 3 / 3600
  0.0034, // 4 * 3 / 3600
  0.0030, // 3.5 * 3 / 3600
  0.0028, // 3.4 * 3 / 3600
  0.0034, // 6 * 2 / 3600
  0
]; // if we take met_time * rep_count * weight then we will get the calories burnt

export let exerlistWaistlineWorkouts = exerlist;

function distance(a, b) {
  return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}

export function evaluate1WaistlineWorkouts(att, pointer) {
  if (exerlist[pointer] === "Situp") {
    console.log("Situp");
    if (calculateangle(att[12], att[24], att[26]) > 110) return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] === "BycycleCrunch") {
    console.log("BycycleCrunch");
    if (distance(att[14], att[25]) < 150) return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] === "Hip Raise") {
    console.log("Hip Raise");
    if (calculateangle(att[12], att[24], att[26]) < 145) return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] === "MountainClimbers") {
    console.log("MountainClimbers");
    if (
      calculateangle(att[23], att[11], att[13]) > 40 &&
      calculateangle(att[24], att[26], att[28]) > 150
    )
      return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] === "Lying Leg Raise") {
    console.log("Lying Leg Raise");
    if (calculateangle(att[12], att[24], att[26]) > 170) return true;
    else {
      //   false;
    }
  }
}
export function evaluate2WaistlineWorkouts(att, pointer) {
  if (exerlist[pointer] === "Situp") {
    if (calculateangle(att[12], att[24], att[26]) < 90) return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] === "BycycleCrunch") {
    if (distance(att[14], att[25]) > 350) return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] === "MountainClimbers") {
    if (
      calculateangle(att[23], att[11], att[13]) > 40 &&
      calculateangle(att[24], att[26], att[28]) < 100
    )
      return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] === "Lying Leg Raise") {
    console.log("Lying Leg Raise");
    if (calculateangle(att[12], att[24], att[26]) < 100) return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] === "Hip Raise") {
    console.log("Hip Raise");
    if (calculateangle(att[12], att[24], att[26]) > 170) return true;
    else {
      //   false;
    }
  }
}
