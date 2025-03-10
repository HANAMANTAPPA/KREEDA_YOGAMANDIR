import tricepsKickbacksAudio from '../audios/tricepsKickbacks.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const tricepKickbacks = [
  "Triceps Kickbacks",
  "Hold a dumbbell in each hand, hinge forward at the hips, and extend your arms straight back behind you. Keep your upper arms parallel to the ground, then return to the starting position.",
  true,
  "https://c.tenor.com/jqwaOmRs-7gAAAAC/tricep-kick-back-tricep.gif",
  tricepsKickbacksAudio,
  0.003333, // arms_met_ratio
  4.2 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Triceps Kickbacks
export function evaluate1(att) {
  if (
    calculateangle(att[12], att[14], att[16]) < 90 &&
    calculateangle(att[12], att[24], att[26]) < 160
  ) {
    return true;
  }
}

// Evaluation phase 2 for Triceps Kickbacks
export function evaluate2(att) {
  if (
    calculateangle(att[12], att[14], att[16]) > 160 &&
    calculateangle(att[12], att[24], att[26]) < 160
  ) {
    return true;
  }
}

export default tricepKickbacks;
