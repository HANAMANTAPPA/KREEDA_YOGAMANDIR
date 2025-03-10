export function calculateangle(pointA, pointB, pointC) {
  // Calculate the vectors between the points
  const vectorBA = { x: pointA.x - pointB.x, y: pointA.y - pointB.y };
  const vectorBC = { x: pointC.x - pointB.x, y: pointC.y - pointB.y };

  // Calculate the dot product of the vectors
  const dotProduct = vectorBA.x * vectorBC.x + vectorBA.y * vectorBC.y;

  // Calculate the magnitudes of the vectors
  const magnitudeBA = Math.sqrt(vectorBA.x ** 2 + vectorBA.y ** 2);
  const magnitudeBC = Math.sqrt(vectorBC.x ** 2 + vectorBC.y ** 2);

  // Calculate the angle in radians
  let angleRadians = Math.acos(dotProduct / (magnitudeBA * magnitudeBC));

  // Convert radians to degrees
  let angleDegrees = angleRadians * (180 / Math.PI);

  return angleDegrees;
}

export function distance(a, b) {
  return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}

export function isPersonLying(att) {
  const thresholdY = 0.1; // Y-coordinate difference threshold to consider as lying

  // Extract the relevant landmarks (e.g., shoulders, hips, knees, feet)
  const leftShoulder = att[11];
  const rightShoulder = att[12];
  const leftHip = att[23];
  const rightHip = att[24];
  const leftKnee = att[25];
  const rightKnee = att[26];
  const leftAnkle = att[27];
  const rightAnkle = att[28];

  // Check if the Y-values of the key points are similar (lying down)
  const yDiffShoulderHip = Math.abs(leftShoulder.y - leftHip.y);
  // const yDiffHipKnee = Math.abs(leftHip.y - leftKnee.y);
  // const yDiffKneeAnkle = Math.abs(leftKnee.y - leftAnkle.y);

  // If all Y differences are below the threshold, the person is likely lying down
  const isLyingByY = yDiffShoulderHip < thresholdY 
  // && yDiffHipKnee < thresholdY && yDiffKneeAnkle < thresholdY;

  // Calculate angles to confirm lying down
  const torsoAngle = calculateangle(leftShoulder, leftHip, leftKnee);
  const legAngle = calculateangle(leftHip, leftKnee, leftAnkle);

  // Check if angles are close to 180 degrees (lying posture)
  const isLyingByAngle = torsoAngle > 170 && legAngle > 170;

  // Combine both Y-axis and angle checks
  return isLyingByY && isLyingByAngle;
}

export function getPersonHeight(pointNose, pointHeelLeft, pointHeelRight) {
  // Calculate the average y-coordinate of the two heels
  const avgHeelY = (pointHeelLeft.y + pointHeelRight.y) / 2;
  
  // Calculate the height of the person (distance between nose and average heel position)
  const height = Math.abs(pointNose.y - avgHeelY);
  
  return height;
}

export function isABinYPlane(pointA, pointB, pointNose, pointHeelLeft, pointHeelRight) {
  // Get the person's height
  const height = getPersonHeight(pointNose, pointHeelLeft, pointHeelRight);
  
  // Set threshold as 1% of the height
  const threshold = height * 0.01;
  
  // Compare the vertical distance of points A and B with the threshold
  return Math.abs(pointA.y - pointB.y) < threshold;
}
