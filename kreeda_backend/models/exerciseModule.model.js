const mongoose = require('mongoose');

// Define the schema for exercises within a module
const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

// Define the schema for exercise modules
const moduleSchema = new mongoose.Schema({
  moduleName: {
    type: String,
    required: true,
  },
  moduleImage: {
    type: String, // New field to store the image URL for each module
    required: true,
  },
  exercises: [exerciseSchema],
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  isDaily:{
    type:Boolean,
    required:false
  }
},
{ collection: 'exerciseModulesDefault' }
);

// Create the model
const ExerciseModule = mongoose.model('exerciseModule', moduleSchema);

// Function to initialize default exercise modules for new users
// const initializeDefaultModulesForUser = async (userId) => {
//   try {
//     // Check if the user already has modules
//     const existingModules = await ExerciseModule.find({ userId });
//     console.log(userId);
//     if (existingModules.length === 0) {
//       // Define default modules with image URLs
//       const defaultModules = [
//         {
//           moduleName: 'ArmsWorkout',
//           moduleImage: "https://media.istockphoto.com/id/180200014/photo/a-man-lifting-weights-on-a-bench-press.jpg?s=1024x1024&w=is&k=20&c=iWQ26nOcn1Xc-fcrLxpsea0FgnewNXJlv-xfENMLWvQ=",
//           exercises: [
//             { name: 'benchDips' },
//             { name: 'pikePushups' },
//             { name: 'pushups' },
//             { name: 'cobraPushups' },
//             { name: 'plankUps' },
//           ],
//           userId,
//           isDaily:false
//         },
//         {
//           moduleName: 'BackWorkout',
//           moduleImage: "https://media.istockphoto.com/id/635971942/photo/back-view-young-adult-girl-doing-barbell-squats.jpg?s=612x612&w=0&k=20&c=7ka8tL-bQ0qSzRw3c0WbAUZ3Ni0mpQdqA4gC0nF14YY=",
//           exercises: [
//             { name: 'crossJacks' },
//             { name: 'buttKickVariation' },
//             { name: 'runInPlace' },
//             { name: 'sideToSideSkiers' },
//             { name: 'shoulderTaps' },
//           ],
//           userId,
//           isDaily:false
//         },
//         {
//           moduleName: 'LegWorkout',
//           moduleImage: "https://media.istockphoto.com/id/1076561772/photo/his-legs-go-in-the-right-direction.jpg?s=1024x1024&w=is&k=20&c=Ec9NR_MHObq6CsTmJteTtll1Vk6JSIOxfIBz7d2vcwU=",
//           exercises: [
//             { name: 'sideLunges' },
//             { name: 'jumpingLunges' },
//             { name: 'chairSquat' },
//             { name: 'dumbbellRomanianDeadlift' },
//             { name: 'dumbbellLunges' },
//           ],
//           userId,
//           isDaily:false
//         },
//         {
//           moduleName: 'WaistlineWorkout',
//           moduleImage: "https://media.istockphoto.com/id/1191251475/photo/slim-man-measuring-his-waist-healthy-lifestyle-body-slimming-weight-loss-concept.jpg?s=1024x1024&w=is&k=20&c=_LrMRxq3OW1ZYA6iGhiYVia31p6B7xVOw724WqhO4W4=",
//           exercises: [
//             { name: 'situps' },
//             { name: 'lyingLegRaise' },
//             { name: 'hipRaise' },
//             { name: 'bicycleCrunch' },
//             { name: 'mountainClimbers' },
//           ],
//           userId,
//           isDaily:false
//         },
//         {
//           moduleName: 'ShoulderWorkout',
//           moduleImage: "https://media.istockphoto.com/id/635971942/photo/back-view-young-adult-girl-doing-barbell-squats.jpg?s=612x612&w=0&k=20&c=7ka8tL-bQ0qSzRw3c0WbAUZ3Ni0mpQdqA4gC0nF14YY=",
//           exercises: [
//             { name: 'dumbbellShoulderPress' },
//             { name: 'lateralRaises' },
//             { name: 'zPress' },
//             { name: 'dumbbellFrontRaise' },
//             { name: 'dumbbellOneArmShoulderPress' },
//           ],
//           userId,
//           isDaily:false
//         },
//         {
//           moduleName: 'ThreadmillWorkout',
//           moduleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhf4gKGcLJGKn-XEWFpYULXeG-wdO1yLx_5bNCCX3Iw&s",
//           exercises: [
//             { name: 'switchingLunges' },
//             { name: 'jumpingJack' },
//             { name: 'pushups' },
//             { name: 'sideSquat' },
//             { name: 'mountainClimbers' },
//           ],
//           userId,
//           isDaily:false
//         },
//         {
//           moduleName: 'ThreadmillWorkoutSet2',
//           moduleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhf4gKGcLJGKn-XEWFpYULXeG-wdO1yLx_5bNCCX3Iw&s",
//           exercises: [
//             { name: 'mountainClimbers' },
//             { name: 'burpees' },
//             { name: 'sidePlankRaise' },
//             { name: 'russianTwist' }
//           ],
//           userId,
//           isDaily:false
//         },
//         {
//           moduleName: 'LymphaticWorkout',
//           moduleImage: "https://images.fresha.com/lead-images/placeholders/gym-and-fitness-26.jpg?class=width-small",
//           exercises: [
//             { name: 'bentOverRow' },
//             { name: 'bicepCurls' },
//             { name: 'tricepsKickbacks' },
//             { name: 'handandLegStretch' },
//             { name: 'punchingStretch' },
//           ],
//           userId,
//           isDaily:false
//         },
//         {
//           moduleName: 'CoreAbsWorkout',
//           moduleImage: "https://cdn.mos.cms.futurecdn.net/fPJBiRqHqctHNqyd7HyKcH-650-80.jpg.webp",
//           exercises: [
//             { name: 'vups' },
//             { name: 'handPlanks' },
//             { name: 'legLowers' },
//             { name: 'abSideCrunches' },
//             { name: 'lieups' },
//           ],
//           userId,
//           isDaily:false
//         },
//         {
//           moduleName: 'Monday',
//           moduleImage: "https://cdn.mos.cms.futurecdn.net/fPJBiRqHqctHNqyd7HyKcH-650-80.jpg.webp",
//           exercises: [
//             { name: 'benchDips' },
//             { name: 'runInPlace' },
//             { name: 'sideLunges' },
//             { name: 'lyingLegRaise' },
//             { name: 'dumbbellShoulderPress' }
//           ],
//           userId:userId,
//           isDaily:true
//         },
//         {
//           moduleName: 'Tuesday',
//           moduleImage: "https://cdn.mos.cms.futurecdn.net/fPJBiRqHqctHNqyd7HyKcH-650-80.jpg.webp",
//           exercises: [
//             { name: 'pikePushups' },
//             { name: 'crossJacks' },
//             { name: 'jumpingLunges' },
//             { name: 'bicycleCrunch' },
//             { name: 'lateralRaises' }
//           ],
//           userId:userId,
//           isDaily:true
//         },
//         {
//           moduleName: 'Wednesday',
//           moduleImage: "https://cdn.mos.cms.futurecdn.net/fPJBiRqHqctHNqyd7HyKcH-650-80.jpg.webp",
//           exercises: [
//             { name: 'pushups' },
//             { name: 'sideToSideSkiers' },
//             { name: 'chairSquat' },
//             { name: 'hipRaise' },
//             { name: 'zPress' }
//           ],
//           userId:userId,
//           isDaily:true
//         },
//         {
//           moduleName: 'Thursday',
//           moduleImage: "https://cdn.mos.cms.futurecdn.net/fPJBiRqHqctHNqyd7HyKcH-650-80.jpg.webp",
//           exercises: [
//             { name: 'cobraPushups' },
//             { name: 'shoulderTaps' },
//             { name: 'dumbbellRomanianDeadlift' },
//             { name: 'mountainClimbers' },
//             { name: 'dumbbellFrontRaise' }
//           ],
//           userId:userId,
//           isDaily:true
//         },
//         {
//           moduleName: 'Friday',
//           moduleImage: "https://cdn.mos.cms.futurecdn.net/fPJBiRqHqctHNqyd7HyKcH-650-80.jpg.webp",
//           exercises: [
//             { name: 'plankUps' },
//             { name: 'buttKickVariation' },
//             { name: 'dumbbellLunges' },
//             { name: 'situps' },
//             { name: 'dumbbellOneArmShoulderPress' }
//           ],
//           userId:userId,
//           isDaily:true
//         },
//         {
//           moduleName: 'Saturday',
//           moduleImage: "https://cdn.mos.cms.futurecdn.net/fPJBiRqHqctHNqyd7HyKcH-650-80.jpg.webp",
//           exercises: [
//             { name: 'sideLunges' },
//             { name: 'punchingStretch' },
//             { name: 'vups' },
//             { name: 'abSideCrunches' },
//             { name: 'mountainClimbers' }
//           ],
//           userId:userId,
//           isDaily:true
//         },
//         {
//           moduleName: 'Sunday',
//           moduleImage: "https://cdn.mos.cms.futurecdn.net/fPJBiRqHqctHNqyd7HyKcH-650-80.jpg.webp",
//           exercises: [
//             { name: 'lieups' },
//             { name: 'handPlanks' },
//             { name: 'switchingLunges' },
//             { name: 'dumbbellShoulderPress' },
//             { name: 'zPress' }
//           ],
//           userId:userId,
//           isDaily:true
//         },
//       ];

//       // Insert default modules into the database
//       await ExerciseModule.insertMany(defaultModules);
//       console.log('Default workout modules initialized for user.');
//     } else {
//       console.log('User already has workout modules.');
//     }
//   } catch (err) {
//     console.error('Error initializing default workout modules:', err);
//   }
// };

//module.exports = { ExerciseModule, initializeDefaultModulesForUser };
module.exports = { ExerciseModule};