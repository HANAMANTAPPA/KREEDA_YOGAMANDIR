import logoSetup from '../resorses/imges/lapscr.jpg';
import Deadlift from '../resorses/gifs/deadlift.gif';
import Diamond from '../resorses/gifs/diamond_pushups.gif';
import {calculateangle, distance} from '../GlobalFunctions/calculateAngle';
import Setup from './audios/Setup.mp3';
import Thankyou from './audios/Thankyou.mp3';

export let updatelistPitchModule = [
  [
    'Setup',
    'Welcome! Please ensure your laptop displays your full body. Stand around 7 feet from the screen before the camera activates. Adjust your position to stay visible as you move during our session',
    true,
    `${logoSetup}`,
    {lying: 0, pointA: 0, pointB: 0},
  ],
  // [
  //   "InclineBicepCurls",0.
  //   "",
  //   true,
  //   "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/incline-dumbbell-curl.gif",
  //   {"lying": 0, "pointA": 0, "pointB": 0}
  // ],
  [
    'DiamondPushups',
    '',
    true,
    `${Diamond}`,
    {lying: 1, pointA: 16, pointB: 32},
  ],
  [
    'Pushups', // or "BenchFly"
    '',
    true,
    'https://www.verywellfit.com/thmb/G_PLH6g6WFNoNbyCYOAmnt1HEUY=/1500x1000/filters:fill(FFDB5D,1)/Verywell-42-3498282-Pushup01-1596-5994a0f8519de20010b3bdd3.gif',
    {lying: 1, pointA: 16, pointB: 32},
  ],
  [
    'Lunges',
    '',
    true,
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHp5b3g4eW1jYjhvM2lscjU0YzRuZ3QwN2Y3cmt5MnB1aXo4NGU2bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/N42mOSEaxR5Hwq4QdB/giphy.webp',
    {lying: 0, pointA: 0, pointB: 0},
  ],
  ['Deadlift', '', true, `${Deadlift}`, {lying: 0, pointA: 0, pointB: 0}],
  [
    'Thankyou',
    'yea !! you have done great work tody. Thank you See you again.',
    true,
    'https://www.slidekit.com/wp-content/uploads/2022/03/Thank-you-slide-in-gym-and-fitness-templates-for-google-slides-jpg.webp',
    {lying: 0, pointA: 0, pointB: 0},
  ],
];

export let exerlistPitchModule = [
  'Setup',
  // "InclineBicepCurls",
  'DiamondPushups',
  'Pushups', // or "BenchFly"
  'Lunges',
  'Deadlift',
  'Thankyou',
];

export let pitch_audioSource = [Setup, Thankyou];

export function evaluate1PitchModule (att, pointer) {
  if (exerlistPitchModule[pointer] === 'InclineBicepCurls') {
    if (
      calculateangle (att[12], att[24], att[26]) < 150 &&
      calculateangle (att[12], att[14], att[16]) > 170
    ) {
      return true;
    } else {
      // false;
    }
  } else if (exerlistPitchModule[pointer] === 'DiamondPushups') {
    if (
      distance (att[19], att[20]) < 10 &&
      distance (att[21], att[22]) < 10 &&
      (calculateangle (att[12], att[14], att[16]) > 160 &&
        calculateangle (att[11], att[13], att[15]) > 160) &&
      (calculateangle (att[12], att[24], att[26]) > 170 &&
        calculateangle (att[24], att[26], att[28]) > 170)
    ) {
      return true;
    } else {
      // false;
    }
  } else if (exerlistPitchModule[pointer] === 'Pushups') {
    if (
      calculateangle (att[11], att[13], att[15]) > 160 &&
      calculateangle (att[12], att[14], att[16]) > 160 &&
      (calculateangle (att[12], att[24], att[26]) > 160 &&
        calculateangle (att[11], att[23], att[25]) > 160) &&
      (calculateangle (att[24], att[26], att[28]) > 160 &&
        calculateangle (att[23], att[25], att[27]) > 160)
    ) {
      return true;
    } else {
      // false;
    }
  } else if (exerlistPitchModule[pointer] === 'Lunges') {
    if (
      calculateangle (att[12], att[14], att[16]) < 100 &&
      calculateangle (att[11], att[13], att[15]) < 100 &&
      ((calculateangle (att[24], att[26], att[28]) < 100 &&
        calculateangle (att[23], att[25], att[27]) < 130) ||
        (calculateangle (att[24], att[26], att[28]) < 130 &&
          calculateangle (att[23], att[25], att[27]) < 100))
    ) {
      return true;
    } else {
      //   false;
    }
  } else if (exerlistPitchModule[pointer] === 'Deadlift') {
    if (
      // calculateangle(att[8], att[12], att[24]) > 170 &&
      calculateangle (att[24], att[26], att[28]) < 140 &&
      calculateangle (att[12], att[14], att[16]) > 170
    ) {
      return true;
    } else {
      // false;
    }
  }
}

export function evaluate2PitchModule (att, pointer) {
  if (exerlistPitchModule[pointer] === 'InclineBicepCurls') {
    if (
      calculateangle (att[12], att[24], att[26]) < 150 &&
      calculateangle (att[12], att[14], att[16]) > 60
    ) {
      return true;
    } else {
      //false;
    }
  }
  if (exerlistPitchModule[pointer] === 'DiamondPushups') {
    if (
      distance (att[19], att[20]) < 10 &&
      distance (att[21], att[22]) < 10 &&
      (calculateangle (att[12], att[14], att[16]) < 50 &&
        calculateangle (att[11], att[13], att[15]) < 50) &&
      (calculateangle (att[12], att[24], att[26]) > 170 &&
        calculateangle (att[24], att[26], att[28]) > 170)
    ) {
      return true;
    } else {
      //false;
    }
  }
  if (exerlistPitchModule[pointer] === 'Pushups') {
    if (
      calculateangle (att[11], att[13], att[15]) < 60 &&
      calculateangle (att[12], att[14], att[16]) < 60 &&
      (calculateangle (att[12], att[24], att[26]) > 160 &&
        calculateangle (att[11], att[23], att[25]) > 160) &&
      (calculateangle (att[24], att[26], att[28]) > 160 &&
        calculateangle (att[23], att[25], att[27]) > 160)
    ) {
      return true;
    } else {
      //false;
    }
  }
  if (exerlistPitchModule[pointer] === 'Lunges') {
    if (
      calculateangle (att[12], att[14], att[16]) < 100 &&
      calculateangle (att[11], att[13], att[15]) < 100 &&
      ((calculateangle (att[24], att[26], att[28]) < 100 &&
        calculateangle (att[23], att[25], att[27]) > 130) ||
        (calculateangle (att[24], att[26], att[28]) > 130 &&
          calculateangle (att[23], att[25], att[27]) < 100))
    ) {
      return true;
    } else {
      //false;
    }
  }
  if (exerlistPitchModule[pointer] === 'Deadlift') {
    if (
      // calculateangle(att[8], att[12], att[24]) > 170 &&
      calculateangle (att[24], att[26], att[28]) > 170 &&
      calculateangle (att[12], att[14], att[16]) > 170
    ) {
      return true;
    } else {
      //false;
    }
  }
}
