import PunchingStretchAudio from '../audios/PunchingStretch.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const punchingStretch = [
  "Punching Stretch",
  "Stretching like punching targets the shoulder, chest, and arm muscles, improving flexibility and range of motion in these areas. It helps prevent muscle stiffness, enhances circulation, and prepares the upper body for physical activity.",
  true,
  `${require('../../resorses/imges/p stretch.gif')}`,
  PunchingStretchAudio,
  0.002222, // arms_met_ratio
  3.0 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Punching Stretch
export function evaluate1(att) {
  if (
    calculateangle(att[16], att[14], att[12]) < 85 &&
    calculateangle(att[14], att[12], att[24]) < 50
  ) {
    return true;
  }
}

// Evaluation phase 2 for Punching Stretch
export function evaluate2(att) {
  if (
    calculateangle(att[16], att[14], att[12]) > 170 &&
    calculateangle(att[14], att[12], att[24]) > 80
  ) {
    return true;
  }
}

export default punchingStretch;
