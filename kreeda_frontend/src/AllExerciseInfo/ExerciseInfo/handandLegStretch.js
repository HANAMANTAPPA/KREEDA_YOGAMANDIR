import HandandLegStretchAudio from '../audios/HandandLegStretch.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const handAndLegStretch = [
  "Hand and Leg Stretch",
  "The Hand and Leg Stretch primarily targets the muscles along the side of the torso, including the obliques and latissimus dorsi. It helps improve flexibility, range of motion, and relieves tension in the upper body and spine.",
  true,
  `${require('../../resorses/imges/stretch.gif')}`,
  HandandLegStretchAudio,
  0.002778, // arms_met_ratio
  3.5 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Hand and Leg Stretch
export function evaluate1(att) {
  if (
    calculateangle(att[15], att[28], att[31]) < 70 &&
    calculateangle(att[23], att[11], att[13]) < 50
  ) {
    return true;
  }
}

// Evaluation phase 2 for Hand and Leg Stretch
export function evaluate2(att) {
  if (
    calculateangle(att[15], att[28], att[31]) > 85 &&
    calculateangle(att[23], att[11], att[13]) > 170
  ) {
    return true;
  }
}

export default handAndLegStretch;
