import dumbbellShoulderPressAudio from '../audios/DumbbellShoulderPress.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const dumbbellShoulderPress = [
  "Dumbbell Shoulder Press",
  "Strengthens the shoulders by pushing weights overhead while maintaining core stability. Engage core, exhale up, inhale down.",
  true,
  "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Dumbbell-shoulder-press.gif?resize=600%2C600&ssl=1",
  dumbbellShoulderPressAudio,
  0.003123, // arms_met_ratio
  5.0 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Dumbbell Shoulder Press
export function evaluate1(att) {
  return calculateangle(att[11], att[13], att[15]) > 170 && calculateangle(att[12], att[14], att[16]) > 170;
}

// Evaluation phase 2 for Dumbbell Shoulder Press
export function evaluate2(att) {
  return calculateangle(att[11], att[13], att[15]) < 90 && calculateangle(att[12], att[14], att[16]) < 90;
}

export default dumbbellShoulderPress;
