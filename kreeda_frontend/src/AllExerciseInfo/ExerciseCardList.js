import { exerlistLegWorkoutLen } from './LegWorkout';
import { exerlistArmsWorkoutLen } from './ArmsWorkout';
import { exerlistWaistlineWorkoutLen } from './WaistlineWorkouts';
import { exerlistShoulderWorkoutLen } from './ShoulderWorkouts';
import { exerlistThreadmillWorkoutLen } from './Threadmill_HK_S1';
import { exerlistThreadmill2WorkoutLen } from './Threadmill_S2';
import { exerlistLymphaticWorkoutLen } from './LymphaticWorkout';
import { exerlistCoreWorkoutLen } from './CoreWorkout';
let exerlistMixedWorkoutLen = exerlistLegWorkoutLen+exerlistArmsWorkoutLen +exerlistWaistlineWorkoutLen + exerlistShoulderWorkoutLen +exerlistThreadmillWorkoutLen +exerlistThreadmill2WorkoutLen+ exerlistLymphaticWorkoutLen+exerlistCoreWorkoutLen;
export let exercise_cards_list = [
  [
    "https://media.istockphoto.com/id/1076561772/photo/his-legs-go-in-the-right-direction.jpg?s=1024x1024&w=is&k=20&c=Ec9NR_MHObq6CsTmJteTtll1Vk6JSIOxfIBz7d2vcwU=",
    "Leg Workout",
    "Unleash the Power Within Your Legs: Ignite Strength and Stamina.",
    "/ExercisePage/LegWorkout",
    exerlistLegWorkoutLen // Length of Leg Workout exercises
  ],
  [
    "https://media.istockphoto.com/id/180200014/photo/a-man-lifting-weights-on-a-bench-press.jpg?s=1024x1024&w=is&k=20&c=iWQ26nOcn1Xc-fcrLxpsea0FgnewNXJlv-xfENMLWvQ=",
    "Arms Workout",
    "Embrace the burn, for it is the forge where your arms are sculpted into strength and resilience.",
    "/ExercisePage/ArmsWorkout",
    exerlistArmsWorkoutLen // Length of Arms Workout exercises
  ],
  [
    "https://media.istockphoto.com/id/1191251475/photo/slim-man-measuring-his-waist-healthy-lifestyle-body-slimming-weight-loss-concept.jpg?s=1024x1024&w=is&k=20&c=_LrMRxq3OW1ZYA6iGhiYVia31p6B7xVOw724WqhO4W4=",
    "Waistline Workouts",
    "Forge a Core of Steel: Sculpt, Define, and Conquer Your Abs.",
    "/ExercisePage/WaistlineWorkouts",
    exerlistWaistlineWorkoutLen // Length of Waistline Workouts exercises
  ],
  [
    "https://media.istockphoto.com/id/635971942/photo/back-view-young-adult-girl-doing-barbell-squats.jpg?s=612x612&w=0&k=20&c=7ka8tL-bQ0qSzRw3c0WbAUZ3Ni0mpQdqA4gC0nF14YY=",
    "Shoulder Workout",
    "Embrace the tension, for it is the crucible where your back is molded into strength and resilience.",
    "/ExercisePage/BackWorkout",
    exerlistShoulderWorkoutLen // Length of Shoulder Workout exercises
  ],
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhf4gKGcLJGKn-XEWFpYULXeG-wdO1yLx_5bNCCX3Iw&s",
    "Threadmill Workout",
    "Embrace the challenge, for it is the track where your arms are honed into strength and resilience through treadmill workouts.",
    "/ExercisePage/Threadmill_HK_S1",
    exerlistThreadmillWorkoutLen // Length of Threadmill Workout Set 1 exercises
  ],
  [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhf4gKGcLJGKn-XEWFpYULXeG-wdO1yLx_5bNCCX3Iw&s",
    "Threadmill Workout Set-2",
    "Embrace the challenge, for it is the track where your arms are honed into strength and resilience through treadmill workouts.",
    "/ExercisePage/Threadmill_S1",
    exerlistThreadmill2WorkoutLen // Length of Threadmill Workout Set 2 exercises
  ],
  [
    "https://images.fresha.com/lead-images/placeholders/gym-and-fitness-26.jpg?class=width-small",
    "Lymphatic Workout",
    "Embrace the rhythm, for it is the path where your arms are fortified with strength and resilience through lymphatic exercises.",
    "/ExercisePage/LymphaticWorkout",
    exerlistLymphaticWorkoutLen // Length of Lymphatic Workout exercises
  ],
  [
    "https://cdn.mos.cms.futurecdn.net/fPJBiRqHqctHNqyd7HyKcH-650-80.jpg.webp",
    "Core Abs Workout",
    "Embrace the rhythm, for it is the path where your arms are fortified with strength and resilience through core ab exercises.",
    "/ExercisePage/CoreWorkout",
    exerlistCoreWorkoutLen // Length of Core Abs Workout exercises
  ],
  // [
  //   "https://media.istockphoto.com/id/635971942/photo/back-view-young-adult-girl-doing-barbell-squats.jpg?s=612x612&w=0&k=20&c=7ka8tL-bQ0qSzRw3c0WbAUZ3Ni0mpQdqA4gC0nF14YY=",
  //   "Mixed Workout",
  //   "Embrace the rhythm, for it is the path where your arms are fortified with strength and resilience through core ab exercises.",
  //   "/ExercisePage/Pitch_module",
  //   exerlistMixedWorkoutLen // Length of Mixed Workout exercises
  // ]
];
