import dumbbellRomanianDeadliftAudio from '../audios/DumbbellRomanianDeadlift.mp3';
import { calculateangle, distance } from "../../GlobalFunctions/calculateAngle";

const dumbbellRomanianDeadlift = [
  "Dumbbell Romanian Deadlift",
  "This variation shifts focus to the posterior chain, strengthening lower back and hamstrings.",
  true,
  "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/09/romanian-deadlift-with-dumbbells.gif?resize=600%2C600&ssl=1",
  dumbbellRomanianDeadliftAudio,
  0.004861, // leg_met_ratio
  4.0 // calories per minute for a 70 kg person
];

// Evaluation phase 1 for Dumbbell Romanian Deadlift
export function evaluate1(att) {
  if (calculateangle(att[11], att[23], att[27]) > 170
    && calculateangle(att[11], att[13], att[15]) > 170
    && distance(att[27], att[15]) > distance(att[27], att[25])  )
  {
    return true;
  }
}

// Evaluation phase 2 for Dumbbell Romanian Deadlift
export function evaluate2(att) {
  if (calculateangle(att[11], att[23], att[27]) < 100
    && calculateangle(att[11], att[13], att[15]) > 170 
    && distance(att[27], att[15]) < distance(att[27], att[25])  )
  {
    return true;
  }
}

export default dumbbellRomanianDeadlift;
