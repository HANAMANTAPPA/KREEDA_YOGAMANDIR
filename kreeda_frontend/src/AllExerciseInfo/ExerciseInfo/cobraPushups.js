import cobraPushupsAudio from '../audios/CobraPushups.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const cobraPushups = [
  "CobraPushups",
  "CobraPush-ups squats are aimed at developing lower body strength, flexibility, and endurance. They can be challenging due to the deep squat position and the requirement to perform repetitions without any support or stability assistance.",
  true,
  "https://www.fitnessrobust.com/wp-content/uploads/2021/09/Bhujangasana.gif",
  cobraPushupsAudio,
  0.002500,
  4.67 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for CobraPushups
export function evaluate1(att) {
  if (
    calculateangle(att[25], att[23], att[11]) > 170 &&
    calculateangle(att[11], att[13], att[15]) < 70
  ) return true; // Not in the correct position yet
}

// Evaluation phase 2 for CobraPushups
export function evaluate2(att) {
  if (
    calculateangle(att[25], att[23], att[11]) < 165
    && calculateangle(att[11], att[13], att[15]) >160
  ) return true; // Not in the correct position yet
}

export default cobraPushups;
