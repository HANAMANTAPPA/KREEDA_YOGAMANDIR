import { calculateangle } from "../../GlobalFunctions/calculateAngle";
import SwitchingLungesAudio from "../audios/SwitchingLunges.mp3";

const switchingLunges = [
  "Switching Lunges",
  "Switching lunges are an alternative to regular lunges. The explosive jumping motion enhances muscle power and agility, targeting more muscle groups than a regular lunge.",
  true,
  "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/01/jumping-lunges.gif?resize=600%2C600&ssl=1",
  SwitchingLungesAudio,
  0.004167, // met ratio
  5.0 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Switching Lunges
export function evaluate1(att) {
  if (calculateangle(att[23], att[25], att[27]) > 170) {
    return true;
  }
}

// Evaluation phase 2 for Switching Lunges
export function evaluate2(att) {
  if (calculateangle(att[23], att[25], att[27]) < 130) {
    return true;
  }
}

export default switchingLunges;
