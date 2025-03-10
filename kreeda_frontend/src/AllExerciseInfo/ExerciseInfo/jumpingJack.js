import { calculateangle } from "../../GlobalFunctions/calculateAngle";
import JumpingJackAudio from "../audios/JumpingJack.mp3";

const jumpingJacks = [
  "Jumping Jack",
  "Jumping jacks offer cardiovascular benefits and engage core muscles, promoting strength and stability.",
  true,
  "https://artimg.gympik.com/articles/wp-content/uploads/2020/02/jumping-jacks-gif-5.gif",
  JumpingJackAudio,
  0.004167, // met ratio
  4.5 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Jumping Jack
export function evaluate1(att) {
  if (calculateangle(att[24], att[12], att[14]) < 50 && calculateangle(att[28], att[23], att[27]) < 30) {
    return true;
  }
}

// Evaluation phase 2 for Jumping Jack
export function evaluate2(att) {
  if (calculateangle(att[24], att[12], att[14]) > 150 && calculateangle(att[28], att[23], att[27]) > 40) {
    return true;
  }
}

export default jumpingJacks;
