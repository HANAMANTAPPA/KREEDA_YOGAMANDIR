import { calculateangle, distance } from "../GlobalFunctions/calculateAngle";
import logoSetup from "../resorses/imges/lapscr.jpg";
import jumpingjacks from "../resorses/imges/jumpingjacks.gif";
import Setup from "./audios/Setup.mp3";
import SwitchingLunges from "./audios/SwitchingLunges.mp3";
import JumpingJack from "./audios/JumpingJack.mp3";
import Pushups from "./audios/Pushups.mp3";
import SideSquat from "./audios/SideSquat.mp3";
import MountainClimbers from "./audios/MountainClimbers.mp3";
import Thankyou from "./audios/Thankyou.mp3";

export let updatelistThreadmill_HK_S1 = [
  [
    "Setup",
    "Welcome! Please ensure your laptop displays your full body. Stand around 7 feet from the screen before the camera activates. Adjust your position to stay visible as you move during our session",
    true,
    `${logoSetup}`,
  ],
  [
    "switching Lunges",
    "switching lunges are an alternative to regular lunges. The explosive jumping motion enhances muscle power and agility, targeting more muscle groups than a regular lunge. It’s an excellent way to improve balance and coordination while making it a highly efficient exercise for those looking to elevate their workout intensity.",
    true,
    "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/01/jumping-lunges.gif?resize=600%2C600&ssl=1",
  ],
  [
    "jumping jack",
    "Jumping jacks offer cardiovascular benefits and engage core muscles including the abdominals, obliques, and hip flexors, promoting overall strength and stability. They are a convenient, equipment-free exercise suitable for improving endurance, coordination, and calorie burning.",
    true,
    `${jumpingjacks}`,
  ],
  [
    "Pushups",
    "Lie flat on your back on the ground.Fold your hands and place them behind your neck.Raise both of your legs so they’re perpendicular to the ground.Contract your core to prepare for the movement.",
    true,
    "https://www.verywellfit.com/thmb/G_PLH6g6WFNoNbyCYOAmnt1HEUY=/1500x1000/filters:fill(FFDB5D,1)/Verywell-42-3498282-Pushup01-1596-5994a0f8519de20010b3bdd3.gif",
  ],
  [
    "SideSquat",
    "This exercise targets the quadriceps, glutes, hamstrings, and inner and outer thighs, helping to improve lower body strength, balance, and stability.",
    true,
    "https://www.cdn.spotebi.com/wp-content/uploads/2015/02/side-to-side-squats-exercise-illustration.gif",
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
  "switching Lunges",
  "jumping jack",
  "Pushups",
  "SideSquat",
  "MountainClimbers",
  "Thankyou",
];
export let exerlistThreadmillWorkoutLen = exerlist.length-2;
export let thread_audiosource = [
  Setup,
  SwitchingLunges,
  JumpingJack,
  Pushups,
  SideSquat,
  MountainClimbers,
  Thankyou,
];

export let exerlistThreadmill_HK_S1 = exerlist;

export let thread_met_time = [0, 0.005417, 0.004167, 0.002222, 0.004444, 0.003333, 0];

export function evaluate1Threadmill_HK_S1(att, pointer) {
  if (exerlist[pointer] == "switching Lunges") {
    console.log("switching Lunges");
    if (calculateangle(att[23], att[25], att[27]) > 170) return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] == "jumping jack") {
    console.log("jumping jack");
    if (
      // calculateangle(att[27], att[23], att[11]) > 120 &&
      calculateangle(att[24], att[12], att[14]) < 50 &&
      calculateangle(att[28], att[23], att[27]) < 30
    )
      return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] == "Pushups") {
    console.log("Pushups");
    if (
      calculateangle(att[11], att[13], att[15]) > 150 &&
      calculateangle(att[12], att[14], att[16]) > 150
    )
      return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] == "SideSquat") {
    console.log("SideSquat");
    if (calculateangle(att[23], att[25], att[27]) > 170) return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] == "MountainClimbers") {
    console.log("MountainClimbers");
    if (
      calculateangle(att[23], att[11], att[13]) > 40 &&
      calculateangle(att[24], att[26], att[28]) > 150
    )
      return true;
    else {
      //   false;
    }
  }
}
export function evaluate2Threadmill_HK_S1(att, pointer) {
  if (exerlist[pointer] == "switching Lunges") {
    if (calculateangle(att[23], att[25], att[27]) < 130) return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] == "jumping jack") {
    if (
      // calculateangle(att[27], att[23], att[11]) > 120 &&
      calculateangle(att[24], att[12], att[14]) > 150 &&
      calculateangle(att[28], att[23], att[27]) > 40
    )
      return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] == "Pushups") {
    if (
      calculateangle(att[11], att[13], att[15]) < 120 &&
      calculateangle(att[12], att[14], att[16]) < 120
    )
      return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] == "SideSquat") {
    if (calculateangle(att[23], att[25], att[27]) < 100) return true;
    else {
      //   false;
    }
  } else if (exerlist[pointer] == "MountainClimbers") {
    if (
      calculateangle(att[23], att[11], att[13]) > 40 &&
      calculateangle(att[24], att[26], att[28]) < 100
    )
      return true;
    else {
      //   false;
    }
  }
}
