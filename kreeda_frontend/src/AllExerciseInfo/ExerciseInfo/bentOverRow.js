import bentOverRowAudio from '../audios/bentOverRow.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const bentOverRow = [
  "Bent Over Row",
  "The bent-over row primarily targets the muscles of the upper back, including the latissimus dorsi, rhomboids, and trapezius, while also engaging the biceps and forearms. It helps improve posture, upper body strength, and muscle definition in the back and arms.",
  true,
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/75-dumbbell-bent-over-row-1550754542.gif?resize=480:*",
  bentOverRowAudio,
  0.003333, // lymphatic met time value
];

// Evaluation phase 1 for Bent-Over Row
export function evaluate1(att) {
  if (calculateangle(att[12], att[24], att[26]) < 160
    && calculateangle(att[11], att[23], att[25]) < 160
    && calculateangle(att[12], att[14], att[16]) > 170) {
    return true;
  }
  return false
}

// Evaluation phase 2 for Bent-Over Row
export function evaluate2(att) {
  if (calculateangle(att[12], att[24], att[26]) < 160 
  && calculateangle(att[11], att[23], att[25]) < 160
  && calculateangle(att[12], att[14], att[16]) < 70) {
    return true;
  } 
  return false
}

export default bentOverRow;
