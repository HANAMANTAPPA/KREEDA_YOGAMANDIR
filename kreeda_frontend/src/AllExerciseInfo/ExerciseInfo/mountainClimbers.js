import mountainClimbersAudio from '../audios/MountainClimbers.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

// Mountain Climbers Exercise Information
const mountainClimbers = [
  "MountainClimbers",
  "From plank position, rapidly alternate bringing knees towards chest while maintaining core engagement and a straight body line.",
  true,
  "https://i.pinimg.com/originals/18/27/be/1827be178c019b1dc6f8a8d8b4a7b0b8.gif",
  mountainClimbersAudio,
  0.0034, // MET time (for calorie calculation)
  6.0 // Calories burned per minute for a 70 kg person
];

// Evaluation phase 1 for Mountain Climbers
export function evaluate1(att) {
  console.log("MountainClimbers - Phase 1");
  if (
    calculateangle(att[23], att[11], att[13]) > 40 &&
    calculateangle(att[24], att[26], att[28]) > 160
  ) {
    return true;
  }
}

// Evaluation phase 2 for Mountain Climbers
export function evaluate2(att) {
  console.log("MountainClimbers - Phase 2");
  if (
    calculateangle(att[23], att[11], att[13]) > 40 &&
    calculateangle(att[24], att[26], att[28]) < 80
  ) {
    return true;
  }
}

export default mountainClimbers;
