import jumpingLungesAudio from '../audios/JumpingLunges.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const jumpingLunges = [
  "Jumping Lunges",
  "Jumping lunges improve balance and coordination, enhancing muscle power and agility.",
  true,
  "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/01/jumping-lunges.gif?resize=600%2C600&ssl=1",
  jumpingLungesAudio,
  0.005833, // leg_met_ratio
  4.2 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Jumping Lunges
export function evaluate1(att) {
  if (calculateangle(att[23], att[25], att[27]) > 170) {
    return true;
  }
}

// Evaluation phase 2 for Jumping Lunges
export function evaluate2(att) {
  if (calculateangle(att[23], att[25], att[27]) < 140) {
    return true;
  }
}

export default jumpingLunges;
