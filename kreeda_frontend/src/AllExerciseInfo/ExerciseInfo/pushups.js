import pushupsAudio from '../audios/Pushups.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const pushups = [
  "Pushups",
  "Lie flat on your back on the ground. Fold your hands and place them behind your neck. Raise both of your legs so they’re perpendicular to the ground. Contract your core to prepare for the movement.",
  true,
  "https://www.verywellfit.com/thmb/G_PLH6g6WFNoNbyCYOAmnt1HEUY=/1500x1000/filters:fill(FFDB5D,1)/Verywell-42-3498282-Pushup01-1596-5994a0f8519de20010b3bdd3.gif",
  pushupsAudio,
  0.002222,
  4.67 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Pushups
export function evaluate1(att) {
  // Check if the body is in the correct position for Push-ups
  if (
    calculateangle(att[11], att[13], att[15]) > 150 &&
    calculateangle(att[12], att[14], att[16]) > 150
  ) return true; // Not in the correct position yet
}

// Evaluation phase 2 for Pushups
export function evaluate2(att) {
  if (
    calculateangle(att[11], att[13], att[15]) < 90 &&
    calculateangle(att[12], att[14], att[16]) < 90
  ) return true; // Not in the correct position yet
}

export default pushups;
