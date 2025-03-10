import legLowersAudio from '../audios/legLowers.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";
import legLowersImg from "../../resorses/gifs/leg_lowers.gif";
const legLowers = [
  "legLowers",
  "Leg lowers target the lower body, promoting stability, strength, balance, and overall health while maintaining mobility and engaging large muscles.",
  true,
  legLowersImg, // Replace with the actual path to the leg lowers gif
  legLowersAudio,
  0.003889, // core_met_ratio
  5.23 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Leg Lowers
export function evaluate1(att) {
  if (
    calculateangle(att[7], att[11], att[23]) > 170 &&
    calculateangle(att[23], att[25], att[27]) < 110 &&
    calculateangle(att[11], att[23], att[29]) < 140
  ) return true;
}

// Evaluation phase 2 for Leg Lowers
export function evaluate2(att) {
  if (
    calculateangle(att[7], att[23], att[27]) > 170 &&
    calculateangle(att[11], att[23], att[29]) > 170
  ) return true;
}

export default legLowers;
