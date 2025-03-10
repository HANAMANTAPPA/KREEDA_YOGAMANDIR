import chairSquatAudio from '../audios/ChairSquat.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const chairSquat = [
  "Chair Squat",
  "Chair squats help control squat depth, ideal for beginners or injury prevention.",
  true,
  "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/03/chair-squats.gif?resize=600%2C600&ssl=1",
  chairSquatAudio,
  0.005833, // leg_met_ratio
  3.8 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Chair Squat
export function evaluate1(att) {
  if (calculateangle(att[23], att[25], att[27]) > 170) {
    return true;
  }
}

// Evaluation phase 2 for Chair Squat
export function evaluate2(att) {
  if (calculateangle(att[23], att[25], att[27]) < 110) {
    return true;
  }
}

export default chairSquat;
