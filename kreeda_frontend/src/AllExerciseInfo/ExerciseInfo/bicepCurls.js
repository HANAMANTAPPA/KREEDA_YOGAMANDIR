import BicepCurlsAudio from '../audios/BicepCurls.mp3';
import { calculateangle } from "../../GlobalFunctions/calculateAngle";

const bicepCurls = [
  "Bicep Curls",
  "Bicep curls primarily target the biceps brachii muscles while also engaging the brachialis and brachioradialis. They help increase arm strength, muscle definition, and enhance functional movements involving lifting and pulling.",
  true,
  "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bicep-curl.gif?resize=480:*",
  BicepCurlsAudio,
  0.002917, // lymphatic met time value
];

// Evaluation phase 1 for Bicep Curls
export function evaluate1(att) {
  if (calculateangle(att[12], att[14], att[16]) > 170 && calculateangle(att[11], att[13], att[15]) > 160) {
    return true;
  }
}

// Evaluation phase 2 for Bicep Curls
export function evaluate2(att) {
  if (calculateangle(att[12], att[14], att[16]) < 60 && calculateangle(att[11], att[13], att[15]) < 60) {
    return true;
  }
}

export default bicepCurls;
