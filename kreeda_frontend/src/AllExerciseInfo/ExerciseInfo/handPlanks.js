import handPlanksAudio from '../audios/handPlanks.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";
import handPlankImg from "../../resorses/gifs/hand_plank.gif";
const handPlanks = [
  "handPlanks",
  "Hand planks are a versatile and effective exercise that targets the core muscles, improves posture, and enhances overall strength and stability.",
  true,
  handPlankImg, // Replace with the actual path to the hand plank gif
  handPlanksAudio,
  0.003333, // core_met_ratio
  4.17 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Hand Planks
export function evaluate1(att) {
  if (
    calculateangle(att[23], att[25], att[27]) < 100 &&
    calculateangle(att[11], att[13], att[15]) > 160
  ) return true;
}

// Evaluation phase 2 for Hand Planks
export function evaluate2(att) {
  if (
    calculateangle(att[23], att[25], att[27]) > 165 &&
    calculateangle(att[11], att[13], att[15]) > 165
  ) return true;
}

export default handPlanks;
