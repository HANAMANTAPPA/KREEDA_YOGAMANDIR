import lateralRaisesAudio from '../audios/LateralRaises.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const lateralRaises = [
  "Lateral Raises",
  "Targets shoulder muscles by lifting arms to sides, ensuring stability. Keep a slight bend in the elbows, engage core, and lift controlled.",
  true,
  "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/lateralraise-1456955524.gif?crop=1xw:0.75xh;center,top&resize=1200:*",
  lateralRaisesAudio,
  0.0028, // arms_met_ratio
  4.5 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Lateral Raises
export function evaluate1(att) {
  if (calculateangle(att[16], att[14], att[12]) > 160
    &&calculateangle(att[15], att[13], att[11]) > 160
    && calculateangle(att[13], att[11], att[23]) < 25
    && calculateangle(att[14], att[12], att[24]) < 25) {
    return true;
  }
  return false
}

// Evaluation phase 2 for Lateral Raises
export function evaluate2(att) {
  if (calculateangle(att[16], att[14], att[12]) > 160
  &&calculateangle(att[15], att[13], att[11]) > 160
    &&calculateangle(att[13], att[11], att[23]) > 85
    && calculateangle(att[14], att[12], att[24]) > 85) {
    return true;
  }
  return false;
}

export default lateralRaises;
