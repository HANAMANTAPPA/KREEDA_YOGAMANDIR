import logoSetup from '../resorses/imges/lapscr.jpg';
import Setup from './audios/Setup.mp3';
import SideLunges from './audios/SideLunges.mp3';
import JumpingLunges from './audios/JumpingLunges.mp3';
import ChairSquat from './audios/ChairSquat.mp3';
import DumbbellRomanianDeadlift from './audios/DumbbellRomanianDeadlift.mp3';
import DumbbellLunges from './audios/DumbbellLunges.mp3';
import Thankyou from './audios/Thankyou.mp3';

export let updatelistLegWorkout = [
  [
    'Setup',
    'Welcome! Please ensure your laptop displays your full body. Stand around 7 feet from the screen before the camera activates. Adjust your position to stay visible as you move during our session',
    true,
    `${logoSetup}`,
  ],
  [
    'Side Lunges',
    'Side lunges is a variant of the body weight lunge. The lunge is a body weight exercise that not only strengthens your leg muscles, but it can also be used to train your balance, coordination and control.',
    true,
    'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/06/Side-lunges.gif?resize=566%2C566&ssl=1',
  ],
  [
    'Jumping Lunges',
    'Jumping lunges are an alternative to regular lunges. The explosive jumping motion enhances muscle power and agility, targeting more muscle groups than a regular lunge. It’s an excellent way to improve balance and coordination while making it a highly efficient exercise for those looking to elevate their workout intensity.',
    true,
    'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2024/01/jumping-lunges.gif?resize=600%2C600&ssl=1',
  ],
  [
    'Chair Squat',
    'This is the home version of the box squat. It is suitable if you can not do a squat with full depth yet, or if you want to restrict the depth because of an injury.',
    true,
    'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/03/chair-squats.gif?resize=600%2C600&ssl=1',
  ],
  [
    'Dumbbell Romanian Deadlift',
    'The dumbbell Romanian deadlift is a variation of the traditional deadlift, where you have almost entirely shifted the work to your posterior chain.',
    true,
    'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/09/romanian-deadlift-with-dumbbells.gif?resize=600%2C600&ssl=1',
  ],
  [
    'Dumbbell Lunge',
    'The lunge is an exercise that not only strengthens your leg muscles, but it can also be used to train your balance, coordination and control.',
    true,
    'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Dumbbell-Lunge.gif?resize=600%2C600&ssl=1',
  ],
  [
    'Thankyou',
    'yea !! you have done great work tody. Thank you See you again.',
    true,
    // "https://mir-s3-cdn-cf.behance.net/project_modules/disp/c0ae0368346035.5b59dbb3639b9.gif",
    'https://www.slidekit.com/wp-content/uploads/2022/03/Thank-you-slide-in-gym-and-fitness-templates-for-google-slides-jpg.webp',
  ],
];

export let exerlistLegWorkout = [
  'Setup',
  'Side Lunges',
  'Jumping Lunges',
  'Chair Squat',
  'Dumbbell Romanian Deadlift',
  'Dumbbell Lunge',
  'Thankyou',
];
export let exerlistLegWorkoutLen = exerlistLegWorkout.length - 2;
export let leg_audiosource = [
  Setup,
  SideLunges,
  JumpingLunges,
  ChairSquat,
  DumbbellRomanianDeadlift,
  DumbbellLunges,
  Thankyou,
];

export let leg_met_time = [
  0,
  0.004444,
  0.005833,
  0.005833,
  0.004861,
  0.005000,
  0,
];

function calculateangle (pointA, pointB, pointC) {
  // Calculate the vectors between the points
  const vectorBA = {x: pointA.x - pointB.x, y: pointA.y - pointB.y};
  const vectorBC = {x: pointC.x - pointB.x, y: pointC.y - pointB.y};

  // Calculate the dot product of the vectors
  const dotProduct = vectorBA.x * vectorBC.x + vectorBA.y * vectorBC.y;

  // Calculate the magnitudes of the vectors
  const magnitudeBA = Math.sqrt (vectorBA.x ** 2 + vectorBA.y ** 2);
  const magnitudeBC = Math.sqrt (vectorBC.x ** 2 + vectorBC.y ** 2);

  // Calculate the angle in radians
  let angleRadians = Math.acos (dotProduct / (magnitudeBA * magnitudeBC));

  // Convert radians to degrees
  let angleDegrees = angleRadians * (180 / Math.PI);

  return angleDegrees;
}

export function evaluate1LegWorkout (att, pointer) {
  if (exerlistLegWorkout[pointer] == 'Side Lunges') {
    // console.log("Side Lunges");
    if (
      calculateangle (att[27], att[23], att[28]) < 15 &&
      (calculateangle (att[27], att[25], att[23]) > 170 ||
        calculateangle (att[24], att[26], att[28]) > 170)
    )
      return true;
    else {
      //   false;
    }
  } else if (exerlistLegWorkout[pointer] == 'Dumbbell Romanian Deadlift') {
    console.log ('Dumbbell Romanian Deadlift');
    if (calculateangle (att[11], att[23], att[27]) > 170) return true;
    else {
      //   false;
    }
  } else if (exerlistLegWorkout[pointer] == 'Chair Squat') {
    console.log ('Chair Squat');
    if (calculateangle (att[23], att[25], att[27]) > 170) return true;
    else {
      //   false;
    }
  } else if (exerlistLegWorkout[pointer] == 'Dumbbell Lunge') {
    console.log ('Dumbbell Lunge');
    if (calculateangle (att[24], att[26], att[28]) > 170) return true;
    else {
      //   false;
    }
  } else if (exerlistLegWorkout[pointer] == 'Jumping Lunges') {
    console.log ('Jumping Lunges');
    if (calculateangle (att[23], att[25], att[27]) > 170) return true;
    else {
      //   false;
    }
  }
}
export function evaluate2LegWorkout (att, pointer) {
  if (exerlistLegWorkout[pointer] == 'Side Lunges') {
    if (
      calculateangle (att[27], att[23], att[28]) > 65 &&
      (calculateangle (att[27], att[25], att[23]) < 160 ||
        calculateangle (att[24], att[26], att[28]) < 160)
    )
      return true;
    else {
      //   false;
    }
  } else if (exerlistLegWorkout[pointer] == 'Dumbbell Romanian Deadlift') {
    if (calculateangle (att[11], att[23], att[27]) < 100) return true;
    else {
      //   false;
    }
  } else if (exerlistLegWorkout[pointer] == 'Dumbbell Lunge') {
    if (calculateangle (att[24], att[26], att[28]) < 160) return true;
    else {
      //   false;
    }
  } else if (exerlistLegWorkout[pointer] == 'Jumping Lunges') {
    console.log ('Jumping Lunges');

    if (calculateangle (att[23], att[25], att[27]) < 140) return true;
    else {
      //   false;
    }
  } else if (exerlistLegWorkout[pointer] == 'Chair Squat') {
    console.log ('Chair Squat');
    if (calculateangle (att[23], att[25], att[27]) < 130) return true;
    else {
      //   false;
    }
  }
}
