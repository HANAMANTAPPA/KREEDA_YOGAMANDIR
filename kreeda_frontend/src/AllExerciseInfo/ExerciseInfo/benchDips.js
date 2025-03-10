import benchDipsAudio from "../audios/BenchDips.mp3";
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const benchDips = [
  "Bench Dips",
  "The sit-up strengthens the core by lifting your torso toward your thighs. Engage core, exhale up, inhale down, and repeat safely. Variations like decline sit-ups and Russian twists add challenge.",
  true,
  "https://i.pinimg.com/originals/f6/4d/e4/f64de47cbb3216c971add08850c46da8.gif",
  benchDipsAudio,
  0.002917, // arms_met_ratio
  4.09, // calories per minute for a 70 kg person
];

// Evaluation phase 1 for BenchDips
export function evaluate1(att) {
  if (
    calculateangle(att[11], att[13], att[15]) > 170 &&
    calculateangle(att[12], att[14], att[16]) > 170
  ) return true;
}

// Evaluation phase 2 for BenchDips
export function evaluate2(att) {
  if (
    calculateangle(att[11], att[13], att[15]) < 160 &&
    calculateangle(att[12], att[14], att[16]) < 160
  ) return true;
}

export default benchDips;
