import vupsAudio from '../audios/Vups.mp3';
import { calculateangle, distance } from "../../GlobalFunctions/calculateAngle";
import vupsImg from "../../resorses/gifs/v-ups.gif";

const vups = [
  "Vups",
  "V ups are great foundational exercises that strengthen your stability and core, which helps with movements like walking, running, and lunging.",
  true,
  vupsImg, // Replace with the actual path to the v-ups gif
  vupsAudio,
  0.004167, // core_met_ratio
  5.23 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for V-ups
export function evaluate1(att) {
  if (
    (calculateangle(att[11], att[23], att[27]) > 165 || calculateangle(att[12], att[24], att[28]) > 165) &&
    (distance(att[15], att[25]) > 250 || distance(att[16], att[26]) > 250)
  ) return true;
}

// Evaluation phase 2 for V-ups
export function evaluate2(att) {
  if (
    (calculateangle(att[11], att[23], att[27]) < 140 || calculateangle(att[12], att[24], att[28]) < 140) &&
    (distance(att[15], att[25]) < 25 || distance(att[16], att[26]) < 25)
  ) return true;
}

export default vups;
