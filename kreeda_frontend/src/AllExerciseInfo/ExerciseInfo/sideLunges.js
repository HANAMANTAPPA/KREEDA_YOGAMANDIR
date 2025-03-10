import sideLungesAudio from '../audios/SideLunges.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const sideLunges = [
  "Side Lunges",
  "Side lunges strengthen leg muscles and help improve balance, coordination, and control.",
  true,
  "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/06/Side-lunges.gif?resize=566%2C566&ssl=1",
  sideLungesAudio,
  0.004444, // leg_met_ratio
  3.5 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Side Lunges
export function evaluate1(att) {
  if (
    calculateangle(att[27], att[23], att[28]) < 15 &&
    ((calculateangle(att[27], att[25], att[23]) > 170) || (calculateangle(att[24], att[26], att[28]) > 170))
  ) {
    return true;
  }
}

// Evaluation phase 2 for Side Lunges
export function evaluate2(att) {
  if (
    calculateangle(att[27], att[23], att[28]) > 65 &&
    ((calculateangle(att[27], att[25], att[23]) < 160) || (calculateangle(att[24], att[26], att[28]) < 160))
  ) {
    return true;
  }
}

export default sideLunges;
