import hipRaiseAudio from '../audios/HipRaise.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const hipRaise = [
  "Hip Raise",
  "Hip raises build strength in the glutes, hamstrings, and core. Activates the largest muscle group for fat burning and lower body movement.",
  true,
  "https://i.pinimg.com/originals/01/c5/38/01c5384083945b97785eefc7fdf37ba0.gif",
  hipRaiseAudio,
  0.0030, // MET time ratio
  3.5 // calories per minute for a 70 kg person
];

export function evaluate1(att) {
  if (calculateangle(att[12], att[24], att[26]) < 145) {
    return true;
  }
}

export function evaluate2(att) {
  if (calculateangle(att[12], att[24], att[26]) > 170) {
    return true;
  }
}

export default hipRaise;
