import {calculateangle} from '../GlobalFunctions/calculateAngle';
import benchDips from './ExerciseInfo/benchDips';
import pikePushups from './ExerciseInfo/pikePushups';
import pushups from './ExerciseInfo/pushups';
import cobraPushups from './ExerciseInfo/cobraPushups';
import plankUps from './ExerciseInfo/plankUps';
import setup from './setup';
import thankYou from './audios/Thankyou.mp3';
import logoSetup from '../resorses/imges/lapscr.jpg';

export let updatelistArmsWorkout = [
  setup,
  benchDips, // Use the imported exercise information
  pikePushups, // Use the imported exercise information
  pushups, // Use the imported exercise information
  cobraPushups, // Use the imported exercise information
  plankUps, // Use the imported exercise information
  thankYou, // Use the imported exercise information
];

let exerlist = [
  'Setup',
  ...updatelistArmsWorkout.map (exercise => exercise[0]), // Extract exercise names from updatelist
];

export let exerlistArmsWorkoutLen = exerlist.length - 2;

// Exercise MET values:
export let arms_met_time = [
  0, // Setup
  benchDips[6], // MET value for Bench Dips
  pikePushups[6], // MET value for Pike Push-ups
  pushups[6], // MET value for Push-ups
  cobraPushups[6], // MET value for Cobra Push-ups
  plankUps[6], // MET value for Plank-ups
  0, // Thank you
];

export let arms_audiosource = [
  logoSetup,
  benchDips[5], // Audio source for Bench Dips
  pikePushups[5], // Audio source for Pike Push-ups
  pushups[5], // Audio source for Push-ups
  cobraPushups[5], // Audio source for Cobra Push-ups
  plankUps[5], // Audio source for Plank-ups
  thankYou, // Audio source for Thank You
];

export let exerlistArmsWorkout = exerlist;

export function evaluate1ArmsWorkout (att, pointer) {
  if (exerlist[pointer] === 'BenchDips') {
    if (
      calculateangle (att[11], att[13], att[15]) > 170 &&
      calculateangle (att[12], att[14], att[16]) > 170
    )
      return true;
  } else if (exerlist[pointer] === 'PikePushups') {
    if (
      calculateangle (att[27], att[23], att[11]) < 160 &&
      calculateangle (att[11], att[13], att[15]) > 170
    )
      return true;
  } else if (exerlist[pointer] === 'Pushups') {
    if (
      calculateangle (att[11], att[13], att[15]) > 150 &&
      calculateangle (att[12], att[14], att[16]) > 150
    )
      return true;
  } else if (exerlist[pointer] === 'CobraPushups') {
    if (
      calculateangle (att[25], att[23], att[11]) > 170 &&
      calculateangle (att[11], att[13], att[15]) < 70
    )
      return true;
  } else if (exerlist[pointer] === 'PlankUps') {
    if (
      calculateangle (att[16], att[14], att[12]) > 160 &&
      calculateangle (att[11], att[13], att[15]) > 160
    )
      return true;
  }
}

export function evaluate2ArmsWorkout (att, pointer) {
  if (exerlist[pointer] === 'BenchDips') {
    if (
      calculateangle (att[11], att[13], att[15]) < 160 &&
      calculateangle (att[12], att[14], att[16]) < 160
    )
      return true;
  } else if (exerlist[pointer] === 'PikePushups') {
    if (
      calculateangle (att[27], att[23], att[11]) < 160 &&
      calculateangle (att[11], att[13], att[15]) < 155
    )
      return true;
  } else if (exerlist[pointer] === 'Pushups') {
    if (
      calculateangle (att[11], att[13], att[15]) < 90 &&
      calculateangle (att[12], att[14], att[16]) < 90
    )
      return true;
  } else if (exerlist[pointer] === 'CobraPushups') {
    if (calculateangle (att[25], att[23], att[11]) < 165) return true;
  } else if (exerlist[pointer] === 'PlankUps') {
    if (
      calculateangle (att[16], att[14], att[12]) < 100 &&
      calculateangle (att[11], att[13], att[15]) < 100
    )
      return true;
  }
}
