import dumbbellFrontRaiseAudio from '../audios/DumbbellFrontRaise.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const dumbbellFrontRaise = [
  "Dumbbell Front Raise",
  "Engages the front shoulders by lifting weights forward. Keep core engaged, lift arms parallel to ground, control descent.",
  true,
  "https://i.pinimg.com/originals/29/17/76/2917766fcf0abab7e2650dbac8b209bf.gif",
  dumbbellFrontRaiseAudio,
  0.0029, // arms_met_ratio
  4.0 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Dumbbell Front Raise
export function evaluate1(att) {
  return calculateangle(att[13], att[11], att[23]) < 15
    && calculateangle(att[11], att[13], att[15]) > 160
    && calculateangle(att[23], att[25], att[27]) > 170;
}

// Evaluation phase 2 for Dumbbell Front Raise
export function evaluate2(att) {
  return calculateangle(att[13], att[11], att[23]) > 80
    && calculateangle(att[11], att[13], att[15]) < 170
    && calculateangle(att[23], att[25], att[27]) > 170;
}

export default dumbbellFrontRaise;
