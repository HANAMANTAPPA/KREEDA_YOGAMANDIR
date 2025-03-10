import lyingLegRaiseAudio from '../audios/LyingLegRaise.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const lyingLegRaise = [
  "Lying Leg Raise",
  "Lying leg raises train your abs and hip flexors. Easier by bending knees slightly; harder with ankle weights.",
  true,
  "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/10/lying-leg-raises.gif?resize=600%2C600&ssl=1",
  lyingLegRaiseAudio,
  0.0028, // MET time ratio
  3.4 // calories per minute for a 70 kg person
];

export function evaluate1(att) {
  if (calculateangle(att[12], att[24], att[26]) > 170) {
    return true;
  }
}

export function evaluate2(att) {
  if (calculateangle(att[12], att[24], att[26]) < 100) {
    return true;
  }
}

export default lyingLegRaise;
