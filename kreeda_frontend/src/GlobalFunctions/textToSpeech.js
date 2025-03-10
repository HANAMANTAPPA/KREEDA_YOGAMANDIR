let playlist = {};
var audio = new Audio();
let audioPlaying = false;
function player(index) {
  playAudio(playlist[index]);
}
AWS.config.update({
  accessKeyId: "AKIA5SZGYBJGGEF7SQNP",
  secretAccessKey: "F+xZt+9tRgF4BBllM/BBunpZV24hri8AkNvro7sW",
  region: "ap-southeast-1", // e.g., us-east-1
});
const polly = new AWS.Polly();
async function generateSpeech(text, voiceid, name) {
  const params = {
    Text: text,
    OutputFormat: "mp3",
    VoiceId: voiceid,
  };

  polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
      console.error(err);
      // no.push(voiceid);
      return;
    }

    // Play the audio
    playlist[name] = data.AudioStream;
  });
}

// Create an HTML5 audio element
function playAudio(audioStream) {
  const audioBlob = new Blob([audioStream], { type: "audio/mp3" });
  const audioUrl = URL.createObjectURL(audioBlob);

  audio.src = audioUrl;
  // Play the audio

  audio.play();
  audioPlaying = true;
  audio.onended = function () {
    audioPlaying = false;
    bgaud.volume = 0.3;
  };
}

generateSpeech(
  `Good day, ${userName}! Raise your Right hand When setup is complete and you are ready !!`,
  "Amy",
  "msgBefrSetup"
);
generateSpeech(
  `Hi, ${userName}! As we prepare to delve into today's session, let's take a moment to ensure that our technological setup is finely tuned for our collective benefit. Kindly adjust your laptop or device to ensure that your entire body is clearly visible on the screen. Aim to maintain a distance of approximately 7 feet from the camera before it initiates. Throughout our time together, don't hesitate to make adjustments to your positioning as needed to ensure continued visibility. With these preparations complete, let's embark on our journey of learning and collaboration, making the most of our time together!`,
  "Amy",
  "Setup"
);
generateSpeech(
  `Great !! your Setup is Completed. Let's begin the exercise! in 4 seconds`,
  "Amy",
  "msgBefrStart"
);
generateSpeech(
  `${userName} Raise your both hands when your are Ready  `,
  "Amy",
  "SetupComplete"
);
generateSpeech(
  "Imagine your workout as a blooming flower. Each step is a petal, gently forming the blossom. With every move, you bring it to life, revealing the beauty of your progress. Let's get started and watch your fitness flourish!",
  "Amy",
  "exer1"
);
generateSpeech(
  "Imagine a dance of 12 blocks, each jostling for space within the frame. Your mission: to keep them all centered. As they sway and shuffle, your task is to ensure they remain perfectly aligned. Let's choreograph this symphony of motion!",
  "Amy",
  "exer2"
);
generateSpeech(
  "Visualize a tower of blocks, growing with each iteration. As new blocks join, the tower expands, a captivating symbol of your progress. Let's build this tower of achievement together!",
  "Amy",
  "exer3"
);
generateSpeech(
  "Join our hero's journey from overweight to fit, as he strides with determination. With each iteration, shedding pounds, revealing a stronger version. Twelve stages of transformation await, each closer to fitness peak. Witness his journey unfold!",
  "Amy",
  "exer4"
);
generateSpeech(
  "Experience triumph's journey as trophies emerge in a dazzling display. Each iteration unveils a new trophy, ascending from small to grand. Witness victory's tale unfold!",
  "Amy",
  "exer5"
);
generateSpeech(
  "stand with your feet shoulder-width apart, holding a barbell or dumbbells with an overhand grip, palms facing down. Bend your knees slightly and hinge forward at your hips, keeping your back straight and core engaged. Pull the weight towards your lower chest, squeezing your shoulder blades together, then lower it back down with control",
  "Amy",
  "bent-over row"
);
generateSpeech(
  "stand with feet shoulder-width apart, holding dumbbells with palms facing forward. Keeping elbows close to your sides, curl the weights upwards towards your shoulders, then lower them back down with control.",
  "Amy",
  "Bicep Curls"
);
generateSpeech(
  "Triceps kickbacks primarily target the triceps muscles, aiding in their strength and definition. This exercise helps tone the back of the arms and can contribute to improved upper body aesthetics and functional arm strength.",
  "Amy",
  "triceps kickbacks"
);
generateSpeech(
  "To do a hand-over-head stretch, stand tall and reach one arm straight up overhead. Then, gently bend your torso and stretch the opposite leg, creating a stretch along the side of your body. Repeat on the other side",
  "Amy",
  "Hand and Leg Stretch"
);
generateSpeech(
  "stand with feet shoulder-width apart, and extend one arm straight out in front of you at shoulder height. With your other hand, gently pull back on your extended arm to stretch the shoulder and chest muscles, then switch arms",
  "Amy",
  "Punching stretch"
);
generateSpeech(
  "hurray !! you have done great work today. Thank you ! See you again .",
  "Amy",
  "Thankyou"
);
generateSpeech("good !!! ", "Amy", "good");
generateSpeech("curl the weights upwards from Right hand too ", "Amy", "bc_rh");
generateSpeech("curl the weights upwards from left hand too ", "Amy", "bc_lh");
generateSpeech("curl the weights upwards from both hands ", "Amy", "bc_bh");
generateSpeech("standup and do exercise", "Amy", "bc_stand");

generateSpeech(
  "Stand up straight with plenty of space to your side for you to step out.Lightly brace your core, and take a big step to the side.Go as deep as possible without your heel lifting from the ground and while maintaining control. Push yourself back up by pressing the foot from the ground. Repeat for reps.",
  "Amy",
  "Side Lunges"
);
generateSpeech(
  "Take a big step forward with your right leg and sink as deep as possible in a lunge position without hitting the knee of the back leg on the floor. Explosively jump up, switching the position of your legs while in mid-air. As you land, make sure to soften the landing and go directly into the lunge position with your left leg forward. Your front knee should be over your ankle and your back knee should be pointing down towards the floor. Continue alternating legs with each jump. Maintain a steady pace and keep your torso upright throughout the exercise.",
  "Amy",
  "Jumping Lunges"
);
generateSpeech(
  "Stand with your feet about shoulder width apart, or where you feel comfortable. Squat until you touch the chair. Reverse the movement, and return to a standing position.",
  "Amy",
  "Chair Squat"
);
generateSpeech(
  "Stand upright holding a pair of dumbbells. Inhale, brace your core slightly, and lean forward by hinging in your hips. Keep your knees almost completely extended. Lean forward as far as possible without rounding your back. You don’t have to touch the dumbbells to the floor, although it is OK if you do. Reverse the movement and return to the starting position. Exhale on the way up. Take another breath, and repeat for reps.",
  "Amy",
  "Dumbbell Romanian Deadlift"
);
generateSpeech(
  "Hold a dumbbell in each hand and stand with your feet about shoulder width apart. Take a big step forward and sink as deep as possible in a lunge position, without hitting the knee of the back leg in the floor. Return to the starting position by pushing yourself back with the front leg.",
  "Amy",
  "Dumbbell Lunge"
);
generateSpeech(
  "Start by lying on your back with your knees bent. Put your fingertips on the back of your ears. Lift your torso up as close to your thighs as possible. Lower your torso down to the floor so you’re back in the starting position. Do 3 sets of 10-15 reps.",
  "Amy",
  "BenchDips"
);
generateSpeech(
  "Lift your legs up and away from your body.Bring your right knee to your chest and touch your left elbow to it.Alternate the crunch by touching the other knee with the opposite elbow.Aim for 15 to 20 crunches per set",
  "Amy",
  "PikePushups"
);
generateSpeech(
  "Perform the split squat: Start with your right foot forward and left foot back, with a wide stance. Lower your body by bending both knees, keeping your torso upright. Ensure your front knee does not go beyond your toes. Push through your front heel to return to the starting position. Repeat on the other side.",
  "Amy",
  "Pushups"
);
generateSpeech(
  "Get in a push-up position with your knees on the ground.Extend your right leg backwards with your toes pointed. Stretch your left arm forward and keep your hips balanced. Hold the position for 10 seconds and return to your original position. Perform 5 reps in this position if you’re just starting out.Switch positions and do 5 more reps. ",
  "Amy",
  "CobraPushups"
);
generateSpeech(
  "Get into plank position.Pull one knee up and in toward your midsection.Repeat the action with your other knee.Continue alternating the movement with both knees.",
  "Amy",
  "PlankUps"
);
generateSpeech(
  "Start by lying on your back with your knees bent. Put your fingertips on the back of your ears. Lift your torso up as close to your thighs as possible. Lower your torso down to the floor so you’re back in the starting position. Do 3 sets of 10-15 reps.",
  "Amy",
  "Situp"
);
generateSpeech(
  "Lie down with your back on the floor, and your arms at your sides. With straight legs, lift your legs until they are pointing straight up. Lower your legs again, with control.",
  "Amy",
  "Lying Leg Raise"
);
generateSpeech(
  "Lie on an exercise mat with your knees bent so that your feet are flat on the floor. Keep your back straight.Place your hands out to your sides palms flat for stability.Raise your glutes off the floor by extending your hips upward while pushing down through you heels.Continue until your back, hips and thighs are in a straight line. Hold for a count of one. Return to the start position by lowering your hips back to the floor. Pause then repeat.",
  "Amy",
  "Hip Raise"
);
generateSpeech(
  "Lift your legs up and away from your body.Bring your right knee to your chest and touch your left elbow to it.Alternate the crunch by touching the other knee with the opposite elbow.Aim for 15 to 20 crunches per set",
  "Amy",
  "BycycleCrunch"
);
generateSpeech(
  "Get into plank position.Pull one knee up and in toward your midsection.Repeat the action with your other knee.Continue alternating the movement with both knees.",
  "Amy",
  "MountainClimbers"
);

generateSpeech(
  "Stand with feet hip-width apart, arms hanging at sides. Quickly jump both feet out to sides until wider than shoulder-width apart. Simultaneously, raise both arms out to the side and over head, palms facing forward. After feet hit the floor, quickly jump both feet back to center while lowering arms back down to sides to return to the starting position.",
  "Amy",
  "jumping jack"
);
generateSpeech(
  "Get in a push-up position with your knees on the ground.Extend your right leg backwards with your toes pointed. Stretch your left arm forward and keep your hips balanced. Hold the position for 10 seconds and return to your original position. Perform 5 reps in this position if you’re just starting out.Switch positions and do 5 more reps. ",
  "Amy",
  "SideSquat"
);
generateSpeech(
  "Take a big step forward with your right leg and sink as deep as possible in a lunge position without hitting the knee of the back leg on the floor. Explosively jump up, switching the position of your legs while in mid-air. As you land, make sure to soften the landing and go directly into the lunge position with your left leg forward. Your front knee should be over your ankle and your back knee should be pointing down towards the floor. Continue alternating legs with each jump. Maintain a steady pace and keep your torso upright throughout the exercise.",
  "Amy",
  "switching Lunges"
);
generateSpeech(
  "Start in a squat position with your knees bent, back straight, and your feet about shoulder-width apart.Lower your hands to the floor in front of you so they’re just inside your feet. With your weight on your hands, kick your feet back so you’re on your hands and toes, and in a pushup position.Keeping your body straight from head to heels, do one pushup. Remember not to let your back sag or to stick your butt in the air. Do a frog kick by jumping your feet back to their starting position. Stand and reach your arms over your head. Jump quickly into the air so you land back where you started. As soon as you land with knees bent, get into a squat position and do another repetition.",
  "Amy",
  "burpees"
);
generateSpeech(
  "Start by laying on your right side with forearm below shoulder, body lifted and legs long and feet stacked. Keep body straight, abs tight and place left hand on hip. Dip your hips down towards the mat and lift back up using your obliques and core muscles.",
  "Amy",
  "side plank raise"
);
generateSpeech(
  "Sit with your knees bent out in front of you, feet flexed, and heels on the floor.Hold your hands in front of your chest and lean your torso back until you feel your abdominal muscles engage.Slowly twist your torso from right to left. Remember to keep your core tight (and breathe!) throughout",
  "Amy",
  "russian twist"
);
generateSpeech(
  "Grab a pair of dumbbells, and lift them up to the starting position at your shoulders. Inhale and lightly brace your core. Press the dumbbells up to straight arms, while exhaling. Inhale at the top, or while lowering the dumbbells with control back to your shoulders",
  "Amy",
  "Dumbbell Shoulder Press"
);
generateSpeech(
  "grab a couple of dumbbells and stand with them by your sides, with your palms facing your body. Stand tall with your core switched on and shoulder blades pulled back and down. Keeping your back straight, and your upper body still – that means no swinging – lift the dumbbells out to your side with a slight bend at your elbows, keeping the weights higher than your forearms. Lift until your arms are parallel to the floor, then slowly lower to the start position",
  "Amy",
  "Lateral Raises"
);
generateSpeech(
  "Sit down on the floor and extend your legs straight out in front so they’re flat on the ground, between hip and shoulder width apart. Lift the dumbbells, barbell, or kettlebells so they are positioned between your shoulders and ears. Engage your core and, keeping your legs in contact with the floor, extend both arms up to press the load above your head. Slowly lower the weights back to the starting position.",
  "Amy",
  "Z Press"
);
generateSpeech(
  "Lift the weights upward while inhaling. Your arms are extended, palms facing down, with a slight bend in the elbows to reduce stress on the joints. Pause briefly when your arms are horizontal to the floor at shoulder height. Lower the dumbbells to the starting position (at the thighs) with a slow and controlled motion while exhaling.",
  "Amy",
  "Dumbbell Front Raise"
);
generateSpeech(
  "Standing with a kettlebell or dumbbell at shoulder height, elbow pointed down towards the ground and core braced. Drive the weight up over your head, until the weight is over the center of your head. Slowly return the weight down to shoulder height.",
  "Amy",
  "Dumbbell One-arm Shoulder Press"
);
generateSpeech(
  "Perform the Cross Jacks: begin by jumping your feet out wide, Jumping jack motion, cross-body movement, cross your right arm over your body towards your left side while lifting your left knee towards your chest, repeat the cross body movement, cross your left arm towards your right side lifting your right knee towards your chest, continue the sequence .Maintain strength and stability throughout the movement",
  "Amy",
  "CrossJacks"
);
generateSpeech(
  "Perform the Butt kick Variation: Stand upright with your feet hip-width apart and arms relaxed by your sides, butt kicks - lifting your right heel towards your glutes while simultaneously swinging your right arm forward. Do this steps on alternate sides, Maintain a Steady Pace . Engage your core, arms movement, breathing",
  "Amy",
  "ButtKickVariation"
);
generateSpeech(
  "Perform the Run in Place: Stand upright with your feet hip-width apart, and arms relaxed by your sides. Lift your knees alternatively towards your chest in a running motion while staying in place. Engage your arms  - swing your arms naturally. Maintain your proper posture, keep your back straight. Land softly, Breathe regularly.",
  "Amy",
  "RunInPlace"
);
generateSpeech(
  "Perform the side to side Skiers: Stand with your feet hip-width apart, slightly bent, and arms relaxed by your sides, jump to the right,simultaneously swinging your arms to the right while keeping them bent at the elbows. Land softly,bring your left foot behind your right foot. Engage your core, jump to the left, repeat hte movement.",
  "Amy",
  "SideToSideSkiers"
);
generateSpeech(
  "Perform the Shoulder Taps: Start in a plank position with your hands directly under your shoulders and your body forming a straight line from head to heels, Engage your core muscles to stabilize your body and prevent your hips from swaying side to side. Lift your right hand off the floor and tap your left shoulder with your right hand. Return your right hand to the starting position and repeat the movement on the opposite side, lifting your left hand and tapping your right shoulder with your left hand.",
  "Amy",
  "ShoulderTaps"
);
