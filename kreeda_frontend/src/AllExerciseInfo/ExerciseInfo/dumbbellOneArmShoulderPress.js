import dumbbellOneArmShoulderPressAudio
  from '../audios/DumbbellOneArmShoulderPress.mp3';
import {calculateangle} from '../../GlobalFunctions/calculateAngle';

const dumbbellOneArmShoulderPress = [
  'Dumbbell One-Arm Shoulder Press',
  'Works on one shoulder at a time, requiring balance and control. Engage core, exhale as you press up, inhale down.',
  true,
  'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/singlearmoverheadpress-1456947623.gif',
  dumbbellOneArmShoulderPressAudio,
  0.0030, // arms_met_ratio
  5.1, // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Dumbbell One-Arm Shoulder Press
// export function evaluate1 (att) {
//   return calculateangle (att[11], att[13], att[15]) > 170;
// }

// // Evaluation phase 2 for Dumbbell One-Arm Shoulder Press
// export function evaluate2 (att) {
//   return calculateangle (att[11], att[13], att[15]) < 90;
// }

export function evaluate1 (att) {
  if (calculateangle (att[12], att[14], att[16]) > 160) {
    if (calculateangle (att[11], att[13], att[15]) > 160) {
      return true;
    }
  }
}

export function evaluate2 (att) {
  if (calculateangle (att[12], att[14], att[16]) > 160) {
    if (calculateangle (att[11], att[13], att[15]) < 50) {
      return true;
    }
    return false;
  }
  if (calculateangle (att[11], att[13], att[15]) > 160) {
    if (calculateangle (att[12], att[14], att[16]) < 50) {
      return true;
    }
    return false;
  }
}

export default dumbbellOneArmShoulderPress;
