import pikePushupsAudio from '../audios/PikePushups.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const pikePushups = [
  "PikePushups",
  "Lie on your back, lift shoulders, and pedal knees to chest while straightening the opposite leg, twisting torso to touch elbow to knee for a dynamic abdominal workout.",
  true,
  "https://i.pinimg.com/originals/2b/b7/14/2bb714fc4307d33df93cf62d56f486b2.gif",
  pikePushupsAudio,
  0.005556,
  6.42 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for PikePushups
export function evaluate1(att) {
  if (
    calculateangle(att[27], att[23], att[11]) < 160 &&
    calculateangle(att[11], att[13], att[15]) > 170
  ) return true;
}

// Evaluation phase 2 for PikePushups
export function evaluate2(att) {
  if (
    calculateangle(att[27], att[23], att[11]) < 160 &&
    calculateangle(att[11], att[13], att[15]) < 155
  ) return true; // Not in the correct position yet
}

export default pikePushups;
