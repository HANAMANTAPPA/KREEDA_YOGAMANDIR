import bicycleCrunchAudio from '../audios/BycycleCrunch.mp3';
import { calculateangle, distance } from "../../GlobalFunctions/calculateAngle";

// Bicycle Crunch Exercise Information
const bicycleCrunch = [
  "BicycleCrunch",
  "Lie on your back, lift shoulders, and pedal knees to chest while straightening the opposite leg, twisting torso to touch elbow to knee for a dynamic abdominal workout.",
  true,
  "https://gifdb.com/images/high/man-in-blue-doing-bicycle-crunches-exercise-bf3rojluw43kjlr2.gif",
  bicycleCrunchAudio,
  0.0028, // MET time (for calorie calculation)
  3.4 // Calories burned per minute for a 70 kg person
];

// // Evaluation phase 1 for Bicycle Crunch
// export function evaluate1(att) {
//   console.log("BicycleCrunch - Phase 1");
//   if (calculateangle(att[12], att[24], att[26]) > 110 && calculateangle(att[14], att[25], att[27]) < 150) {
//     return true;
//   }
// }

// // Evaluation phase 2 for Bicycle Crunch
// export function evaluate2(att) {
//   console.log("BicycleCrunch - Phase 2");
//   if (calculateangle(att[12], att[24], att[26]) < 90 && calculateangle(att[14], att[25], att[27]) > 350) {
//     return true;
//   }
// }

// Evaluation phase 1 for Bicycle Crunch
export function evaluate1(att) {
  console.log("BicycleCrunch - Phase 1");
  const cond1 = distance(att[14], att[25]) / distance(att[12], att[24]);
  // if ( distance(att[14],att[25]) > 150) {
  //   return true;
  // }
  if (cond1 >1.10) {
    return true;
  }
}

// Evaluation phase 2 for Bicycle Crunch
export function evaluate2(att) {
  const cond1 = distance(att[14], att[25]) / distance(att[12], att[24]);
  console.log("BicycleCrunch - Phase 2");
  // if ( distance(att[14],att[25]) < 50) {
  //   return true;
  // }
  if (cond1 < 0.5 ) {
    return true;
  }
}



export default bicycleCrunch;
