import lieUpsAudio from '../audios/lieups.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";
import lieupsImg from "../../resorses/gifs/lie-ups.gif";
const lieUps = [
  "lieUps",
  "Lie ups engage the rectus abdominis, strengthening the core, improving posture, and enhancing overall athletic performance, while also reducing the risk of back injuries and improving overall body stability.",
  true,
  lieupsImg, // Replace with the actual path to the lie-ups gif
  lieUpsAudio,
  0.002500, // core_met_ratio
  3.8 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Lie Ups
export function evaluate1(att) {
  if (
    calculateangle(att[11], att[23], att[27]) > 170 &&
    calculateangle(att[11], att[13], att[15]) > 170
  ) return true;
}

// Evaluation phase 2 for Lie Ups
export function evaluate2(att) {
  if (
    calculateangle(att[11], att[23], att[27]) < 100 &&
    calculateangle(att[11], att[13], att[15]) > 170
  ) return true;
}

export default lieUps;
