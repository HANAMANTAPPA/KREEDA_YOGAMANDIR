import zPressAudio from '../audios/ZPress.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const zPress = [
  "Z Press",
  "A seated shoulder press without back support, engaging core for stability. Sit upright, lift weights overhead with controlled form.",
  true,
  "https://www.garagegymreviews.com/wp-content/uploads/dumbbell-z-press.gif",
  zPressAudio,
  0.0031, // arms_met_ratio
  5.2 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Z Press
export function evaluate1(att) {
  return calculateangle(att[11], att[13], att[15]) > 170 && calculateangle(att[12], att[14], att[16]) > 170;
}

// Evaluation phase 2 for Z Press
export function evaluate2(att) {
  return calculateangle(att[11], att[13], att[15]) < 90 && calculateangle(att[12], att[14], att[16]) < 90;
}

export default zPress;
