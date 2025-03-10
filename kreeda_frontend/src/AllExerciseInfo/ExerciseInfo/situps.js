import situpAudio from '../audios/Situp.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const situps = [
  "Sit-Up",
  "The sit-up strengthens the core by lifting your torso toward your thighs. Engage core, exhale up, inhale down, and repeat safely. Variations like decline sit-ups and Russian twists add challenge.",
  true,
  "https://i.pinimg.com/originals/c6/e1/6a/c6e16a9b9dc7d97b0d4ad78b50e7b424.gif",
  situpAudio,
  0.0042, // MET time for a Sit-Up rep
  4.5 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Sit-Up
export function evaluate1(att) {
  // Phase 1: Detect if torso is far back enough
  if (calculateangle(att[12], att[24], att[26]) > 110) {
    return true;
  }
}

// Evaluation phase 2 for Sit-Up
export function evaluate2(att) {
  // Phase 2: Detect if torso is close enough to the thighs
  if (calculateangle(att[12], att[24], att[26]) < 90) {
    return true;
  }
}

export default situps;
