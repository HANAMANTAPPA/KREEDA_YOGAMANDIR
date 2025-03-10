import { calculateangle } from "../../GlobalFunctions/calculateAngle";
import SideSquatAudio from "../audios/SideSquat.mp3";

const sideSquats = [
  "Side Squat",
  "This exercise targets lower body muscles, improving strength, balance, and stability.",
  true,
  "https://www.cdn.spotebi.com/wp-content/uploads/2015/02/side-to-side-squats-exercise-illustration.gif",
  SideSquatAudio,
  0.004444, // met ratio
  4.6 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Side Squat
export function evaluate1(att) {
  if (calculateangle(att[23], att[25], att[27]) > 170) {
    return true;
  }
}

// Evaluation phase 2 for Side Squat
export function evaluate2(att) {
  if (calculateangle(att[23], att[25], att[27]) < 100) {
    return true;
  }
}

export default sideSquats;
