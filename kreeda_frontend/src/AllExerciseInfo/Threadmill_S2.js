import { calculateangle, distance } from "../GlobalFunctions/calculateAngle";
import logoSetup from "../resorses/imges/lapscr.jpg";
import Setup from "./audios/Setup.mp3";
// import HighKneeRuns from "./audios/HighKneeRuns.mp3";
import MountainClimbers from "./audios/MountainClimbers.mp3";
import burpees from "./audios/burpees.mp3";
import SidePlankRaise from "./audios/SidePlankRaise.mp3";
import RussianTwist from "./audios/RussianTwist.mp3";
import Thankyou from "./audios/Thankyou.mp3";

export let updatelistThreadmill_S2 = [
  [
    "Setup",
    "Welcome! Please ensure your laptop displays your full body. Stand around 7 feet from the screen before the camera activates. Adjust your position to stay visible as you move during our session",
    true,
    `${logoSetup}`,
  ],
  [
    "high knee runs",
    " it helps to prepare the glutes, hamstrings, hip flexors and calf muscles for your run. It's also a great way to increase knee lift when running",
    true,
    "https://www.kineticedgept.com/wp-content/uploads/2020/08/100-up.gif",
  ],
  [
    "MountainClimbers",
    "From plank position, rapidly alternate bringing knees towards chest while maintaining core engagement and a straight body line. Aim for a quick, controlled pace to elevate heart rate and engage multiple muscle groups for an effective cardio and core workout.",
    true,
    "https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif",
  ],
  [
    "burpees",
    "Burpees involve a wide range of motion and seamless transitions from squats to planks and jumps. When you practice burpees consistently, your body becomes stronger, and you move better. ",
    true,
    "https://i0.wp.com/joshuaspodek.com/wp-content/uploads/2016/07/burpee.gif?resize=640%2C425&ssl=1",
  ],
  [
    "side plank raise",
    "Side Plank Lift and Lower is an amazing core body exercise that targets your core muscles, especially your obliques, while building strength in your shoulder and upper back. If you learn how to do Side Plank Lift and Lower you will have a tighter waistline and a stronger mid-section.",
    true,
    "https://www.spotebi.com/wp-content/uploads/2015/05/side-plank-hip-lifts-exercise-illustration.gif",
  ],
  [
    "russian twist",
    "the Russian twist works more than just your abs, or rectus abdominus, the muscles that run vertically along the front of your abdomen.",
    true,
    "https://workouts4fitness.wordpress.com/wp-content/uploads/2017/01/dumbbell-side-bend_new.gif?w=391&h=293",
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
  "high knee runs",
  "MountainClimbers",
  "burpees",
  "side plank raise",
  "russian twist",
  "Thankyou",
];

export let exerlistThreadmill2WorkoutLen = exerlist.length-2;

export let thread2_audiosource = [
  Setup,
  // HighKneeRuns,
  MountainClimbers,
  burpees,
  SidePlankRaise,
  RussianTwist,
  Thankyou,
];

export let thread2_met_time = [0, 0.002361, 0.003333, 0.004444, 0.006250, 0.003167, 0];

export let exerlistThreadmill_S2 = exerlist;

export function evaluate1Threadmill_S2(att, pointer) {
  if (exerlist[pointer] == "high knee runs") {
    console.log("high knee runs");
    if (
      calculateangle(att[11], att[13], att[15]) > 170
      // &&
      // distance(cord[23], att[23]) > 100
    )
      return true;
    else {
      // false;
    }
  } else if (exerlist[pointer] == "MountainClimbers") {
    console.log("MountainClimbers");
    if (
      calculateangle(att[23], att[11], att[13]) > 40 &&
      calculateangle(att[24], att[26], att[28]) > 150
      //  &&
      // calculateangle(att[27], att[23], att[11]) > 160 &&
      // calculateangle(att[11], att[13], att[15]) > 170
      // distance(att[2], att[3]) < 100
    )
      return true;
    else {
      // false;
    }
  } else if (exerlist[pointer] == "burpees") {
    console.log("burpees");
    if (
      // calculateangle(att[17], att[31], att[11]) < 10 &&
      calculateangle(att[11], att[13], att[15]) > 150
    )
      return true;
    else {
      // false;
    }
  } else if (exerlist[pointer] == "side plank raise") {
    console.log("side plank raise");
    if (
      calculateangle(att[12], att[24], att[26]) > 175 &&
      calculateangle(att[11], att[23], att[25]) > 175
      // calculateangle(att[14], att[12], att[24]) > 80
      // &&
      // att[11].y < att[26].y + 60
    )
      return true;
    else {
      // false;
    }
  } else if (exerlist[pointer] == "russian twist") {
    console.log("russian twist");
    if (
      calculateangle(att[12], att[24], att[26]) > 170 &&
      calculateangle(att[11], att[23], att[25]) > 170
      //   distance(att[12], att[16]) < 150 && distance(att[11], att[15]) < 150
      // && distance(att[24], att[26], att[28]) < 100
    )
      return true;
    else {
      // false;
    }
  }
}
export function evaluate2Threadmill_S2(att, pointer) {
  if (exerlist[pointer] == "high knee runs") {
    if (
      calculateangle(att[11], att[13], att[15]) < 160
      // &&
      // distance(cord[23], att[23]) < 75
    )
      return true;
    else {
      // false;
    }
  } else if (exerlist[pointer] == "MountainClimbers") {
    if (
      calculateangle(att[23], att[11], att[13]) > 40 &&
      calculateangle(att[24], att[26], att[28]) < 100
    )
      return true;
    else {
      // false;
    }
  } else if (exerlist[pointer] == "burpees") {
    if (
      // calculateangle(att[17], att[31], att[11]) > 12 &&
      calculateangle(att[11], att[13], att[15]) < 120
    )
      return true;
    else {
      // false;
    }
  } else if (exerlist[pointer] == "side plank raise") {
    if (
      // calculateangle(att[17], att[23], att[11]) > 45 &&
      calculateangle(att[12], att[24], att[26]) < 170 &&
      calculateangle(att[11], att[23], att[25]) < 170
    )
      return true;
    else {
      // false;
    }
  } else if (exerlist[pointer] == "russian twist") {
    if (
      calculateangle(att[12], att[24], att[26]) < 160 &&
      calculateangle(att[11], att[23], att[25]) < 160
      // distance(att[12], att[16]) > 150 && distance(att[11], att[15]) > 200
    )
      return true;
    else {
      // false;
    }
  }
}
