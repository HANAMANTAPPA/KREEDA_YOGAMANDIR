import plankUpsAudio from '../audios/PlankUps.mp3';
import {calculateangle} from '../../GlobalFunctions/calculateAngle';

const plankUps = [
  'PlankUps',
  'From plank position, rapidly alternate bringing knees towards chest while maintaining core engagement and a straight body line. Aim for a quick, controlled pace to elevate heart rate and engage multiple muscle groups for an effective cardio and core workout.',
  true,
  'https://i.pinimg.com/originals/b2/9b/f6/b29bf67f29a03823286eb6357f502e59.gif',
  plankUpsAudio,
  0.006250,
  5.25, // calories per minute for a 70 kg person
];

// Evaluation phase 1 for PlankUps
export function evaluate1 (att) {
  // Check if the body is in the correct position for Plank Ups (straight line from head to heels)
  const torsoAngle = calculateangle (att[16], att[14], att[12]); // Angle between torso and legs

  // Ensure the body is in a plank position (torso angle > 160 means the body is straight)
  if (torsoAngle > 160 && calculateangle (att[15], att[13], att[11]) > 160) {
    // Now check the angles for Plank Up rep count
    return true;
  }
}

// Evaluation phase 2 for PlankUps
export function evaluate2 (att) {
  // Check if the body is in the correct position for Plank Ups (straight line from head to heels)
  const torsoAngle = calculateangle (att[16], att[14], att[12]); // Angle between torso and legs

  // Ensure the body is in a plank position (torso angle > 160 means the body is straight)
  if (torsoAngle < 120 && calculateangle (att[15], att[13], att[11]) < 120) {
    // Now check the angles for Plank Up rep count
    return true;
  }
}

export default plankUps;
