

import check from "../../resorses/audiosFolder/correction_audios/check.mp3";
import Ba_St from "../../resorses/audiosFolder/correction_audios/Ba_St.mp3";
import Back_Stright from "../../resorses/audiosFolder/correction_audios/Back_Stright.mp3";
import bc_errorcorrection from "../../resorses/audiosFolder/correction_audios/bc_errorcorrection.mp3";
import bend_hips from "../../resorses/audiosFolder/correction_audios/bend_hips.mp3";
import bend_hips_pp from "../../resorses/audiosFolder/correction_audios/bend_hips_pp.mp3";
import bend_knees from "../../resorses/audiosFolder/correction_audios/bend_knees.mp3";
import Chest from "../../resorses/audiosFolder/correction_audios/Chest.mp3";
import Di_lo from "../../resorses/audiosFolder/correction_audios/Di_lo.mp3";
import Do_hi from "../../resorses/audiosFolder/correction_audios/Do_hi.mp3";
import Do_sw from "../../resorses/audiosFolder/correction_audios/Do_sw.mp3";
import el_45 from "../../resorses/audiosFolder/correction_audios/el_45.mp3";
import el_451 from "../../resorses/audiosFolder/correction_audios/el_451.mp3";
import Ex_Arm from "../../resorses/audiosFolder/correction_audios/Ex_Arm.mp3";
import f_mo from "../../resorses/audiosFolder/correction_audios/f_mo.mp3";
import Glutes from "../../resorses/audiosFolder/correction_audios/Glutes.mp3";
import good from "../../resorses/audiosFolder/correction_audios/good.mp3";
import hands_lock from "../../resorses/audiosFolder/correction_audios/hands_lock.mp3";
import hands_straight from "../../resorses/audiosFolder/correction_audios/hands_straight.mp3";
import heel_ground from "../../resorses/audiosFolder/correction_audios/heel_ground.mp3";
import heel_lower from "../../resorses/audiosFolder/correction_audios/heel_lower.mp3";
import hip_lowered from "../../resorses/audiosFolder/correction_audios/hip_lowered.mp3";
import hip_raised from "../../resorses/audiosFolder/correction_audios/hip_raised.mp3";
import hips from "../../resorses/audiosFolder/correction_audios/hips.mp3";
import hips1 from "../../resorses/audiosFolder/correction_audios/hips1.mp3";
import knee from "../../resorses/audiosFolder/correction_audios/knee.mp3";
import knees from "../../resorses/audiosFolder/correction_audios/knees.mp3";
import knees1 from "../../resorses/audiosFolder/correction_audios/knees1.mp3";
import knees_straight from "../../resorses/audiosFolder/correction_audios/knees_straight.mp3";
import lean_less from "../../resorses/audiosFolder/correction_audios/lean_less.mp3";
import plank from "../../resorses/audiosFolder/correction_audios/plank.mp3";
import sh_hinge from "../../resorses/audiosFolder/correction_audios/sh_hinge.mp3";
import sl_be from "../../resorses/audiosFolder/correction_audios/sl_be.mp3";
import wrists_at_abdomen from "../../resorses/audiosFolder/correction_audios/wrists_at_abdomen.mp3";
import { calculateangle , distance} from "../../GlobalFunctions/calculateAngle";
import setupGlow from "../../GlobalFunctions/setupGlow";
let setAnimateBorder = false;																						   		
let audioPlaying = false; 
let instructAud1 = document.getElementById("instructorAudio");  
// console.log(instructAud);


function correctionMessage(audioFile ,instructAud) { 
    const audio = new Audio(); 
    audio.src = audioFile;
    if (instructAud1.paused && !audioPlaying ) {  // audio paused !audioPlaying.current
        audio.play(); 
        audioPlaying = true;
      setupGlow("red", setAnimateBorder); 
    //   audioPlaying.current = true;
      
    audio.onended = () => {
      setTimeout(() => {
        audioPlaying = false;
      }, 3500);
    };
    }
    return;
  } 

export function exerciseCorrection(att, exerciseName, instructAud) { 
  instructAud1 = instructAud;
    if (true) {
      // seconds should be more than 5 sec
      // audioPlaying.current = true;
      switch (exerciseName ) {
        // exe correction for leg workout
        case "Side Lunges":
          if (calculateangle(att[27], att[23], att[28]) > 20) {
            // checking at least he is
            setTimeout(() => {
              if (
                calculateangle(att[27], att[23], att[28]) > 20 &&
                calculateangle(att[27], att[23], att[28]) < 65
              ) {
                correctionMessage(check);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;

        case "Chair Squat":
          if (calculateangle(att[23], att[25], att[27]) < 120) {
            if (att[11].x > att[25].x) {
              correctionMessage(Back_Stright);
            }
          } else {
            return;
          }
          break;
        case "Jumping Lunges":
          if (calculateangle(att[27], att[23], att[28]) > 20) {
            setTimeout(() => {
              if (
                calculateangle(att[27], att[23], att[28]) > 20 &&
                calculateangle(att[27], att[23], att[28]) < 65
              ) {
                correctionMessage(check);
                return;
              }
            }, 1000);
          } else {
            return;
          }
          break;
        // ################exe correction for Back Workouts################

        case "Barbell Rows":
          if (calculateangle(att[24], att[26], att[28]) > 170) {
            setTimeout(() => {
              if (calculateangle(att[24], att[26], att[28]) > 170) {
                correctionMessage(knee);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;

        case "Kettlebell Swings":
          if (calculateangle(att[24], att[12], att[14]) > 90) {
            setTimeout(() => {
              if (
                calculateangle(att[24], att[12], att[14]) > 90 &&
                calculateangle(att[23], att[11], att[13]) > 90
              ) {
                correctionMessage(Do_sw);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;
        case "Bent Over Band Row":
          if (calculateangle(att[24], att[26], att[28]) > 170) {
            setTimeout(() => {
              if (calculateangle(att[24], att[26], att[28]) > 170) {
                correctionMessage(knee);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;
        case "Ball Leg Curl":
          if (calculateangle(att[12], att[24], att[26]) < 155) {
            setTimeout(() => {
              if (calculateangle(att[12], att[24], att[26]) < 155) {
                correctionMessage(hips);
                return;
              }
            }, 2000);
          }
          break;
        case "Kettlebell Deadlift":
          if (calculateangle(att[24], att[26], att[28]) > 170) {
            setTimeout(() => {
              if (calculateangle(att[24], att[26], att[28]) > 170) {
                correctionMessage(knee);
                return;
              }
            }, 3000);
          } else {
            return;
          }
          break;

        // ################exe correction for Shoulder Workouts################

        case "Dumbbell Shoulder Press":
          if (
            calculateangle(att[12], att[14], att[16]) < 70 &&
            calculateangle(att[11], att[13], att[15]) < 70
          ) {
            setTimeout(() => {
              if (
                calculateangle(att[12], att[14], att[16]) < 70 &&
                calculateangle(att[11], att[13], att[15]) < 70
              ) {
                correctionMessage(el_45);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;

        case "Lateral Raises":
          if (
            calculateangle(att[24], att[12], att[14]) < 80 &&
            calculateangle(att[24], att[12], att[14]) > 40
          ) {
            setTimeout(() => {
              if (
                calculateangle(att[24], att[12], att[14]) < 80 &&
                calculateangle(att[24], att[12], att[14]) > 40 &&
                calculateangle(att[23], att[11], att[13]) < 80 &&
                calculateangle(att[23], att[11], att[13]) > 40
              ) {
                correctionMessage(Do_hi);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;
        case "Z Press":
          if (calculateangle(att[12], att[24], att[26]) < 90) {
            setTimeout(() => {
              if (
                calculateangle(att[12], att[24], att[26]) < 90 &&
                calculateangle(att[11], att[23], att[25]) < 90
              ) {
                correctionMessage(Ba_St);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;
        case "Dumbbell Front Raise":
          if (calculateangle(att[12], att[24], att[26]) < 180) {
            setTimeout(() => {
              if (
                calculateangle(att[12], att[24], att[26]) < 180 &&
                calculateangle(att[11], att[23], att[25]) < 180
              ) {
                correctionMessage(Ba_St);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;
        case "Dumbbell One-arm Shoulder Press":
          if (
            calculateangle(att[24], att[12], att[14]) <= 190 &&
            calculateangle(att[24], att[12], att[14]) >= 90
          ) {
            setTimeout(() => {
              if (
                calculateangle(att[24], att[12], att[14]) <= 190 &&
                calculateangle(att[24], att[12], att[14]) >= 90
              ) {
                correctionMessage(f_mo);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;

        // ################exe correction for Arm Workouts################

        case "BenchDips":
          if (
            calculateangle(att[11], att[13], att[15]) < 100 &&
            calculateangle(att[12], att[14], att[16]) < 100
          ) {
            setTimeout(() => {
              if (
                calculateangle(att[11], att[13], att[15]) < 100 &&
                calculateangle(att[12], att[14], att[16]) < 100
              ) {
                correctionMessage(Di_lo);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;
        case "PikePushups":
          if (calculateangle(att[12], att[24], att[26]) >170 ) {
            setTimeout(() => {
              if (
                calculateangle(att[12], att[24], att[26]) > 170 &&
                calculateangle(att[24], att[12], att[14]) > 50
              ) { 
                correctionMessage(bend_hips_pp);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;
        case "Pushups":
          // if (calculateangle(att[23], att[25], att[27]) < 165) {
          //   correctionMessage(knees_straight);
          //   return;
          // }
          if (calculateangle(att[11], att[23], att[25]) < 160) {
            setTimeout(() => {
              if (
                calculateangle(att[11], att[23], att[25]) < 160) {
                correctionMessage(hip_raised);
                return;
              }
            }, 1000);
          }
          // if (calculateangle(att[23], att[25], att[27]) > 175) {
          //   correctionMessage(hip_lowered);
          //   return;
          // }
          else {
            return;
          }
          break;
        case "CobraPushups":
          if (
            calculateangle(att[14], att[12], att[24]) > 50
            // &&
            // calculateangle(att[24], att[12], att[14]) > 70
          ) {
            setTimeout(() => {
              if (
                calculateangle(att[14], att[12], att[24]) > 50
              ) {
                correctionMessage(wrists_at_abdomen);
                return;
              }
            }, 1000);
          } else {
            return;
          }
          break;
        case "PlankUps":
          if (calculateangle(att[11], att[23], att[25]) < 160) {
            setTimeout(() => {
              if (calculateangle(att[11], att[23], att[25]) < 160) {
                correctionMessage(hip_raised);
                return;
              }
            }, 1000);
            
          }
          // if (calculateangle(att[11], att[23], att[25])  > 175) {
          //   correctionMessage(hip_lowered);
          //   return;
          // }
          else {
            return;
          }
          break;

        //        ################exe correction for Lymphatic Workouts################

        case "bent-over row":
          if (
            calculateangle(att[24], att[26], att[28]) > 170 &&
            calculateangle(att[23], att[25], att[27]) > 170
          ) {
            setTimeout(() => {
              if (
                calculateangle(att[24], att[26], att[28]) > 170 &&
                calculateangle(att[23], att[25], att[27]) > 170
              ) {
                correctionMessage(knee);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;
        case "Bicep Curls":
          if (
            calculateangle(att[12], att[14], att[16]) < 160 &&
            calculateangle(att[12], att[14], att[16]) > 60
          ) {
            setTimeout(() => {
              if (
                calculateangle(att[12], att[14], att[16]) < 160 &&
                calculateangle(att[12], att[14], att[16]) > 60
              ) {
                correctionMessage(Ex_Arm);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;

          case "triceps kickbacks":
          if(calculateangle(att[24], att[26], att[28] > 140)){
            correctionMessage(bend_knees);
            return;
          } 
          if(calculateangle(att[12], att[24], att[26]) > 120){
            correctionMessage(bend_hips);
            return;
          } else {
            return;
          }
          break;
        /* case "Hand and Leg Stretch": 
            if(calculateangle(att[12], att[14], att[16]) < 90 &&
               calculateangle(att[12], att[24], att[26]) < 160){
              setTimeout(() => {
                if(calculateangle(att[12], att[14], att[16]) < 90 &&
                   calculateangle(att[12], att[24], att[26]) < 160){
                  correctionMessage(el_45);
                  return;
                }
              }, 2000);
            }else{
              return;
            }
            break;  */

        // ################exe correction for Waistline Workouts###############
        case "Situp":
          if (calculateangle(att[24], att[26], att[28]) > 160) {
            setTimeout(() => {
              if (calculateangle(att[24], att[26], att[28]) > 160) {
                correctionMessage(knees);
                return;
              }
            }, 1000);
          } else {
            return;
          }
          break;
        case "Lying Leg Raise":
          if (calculateangle(att[24], att[26], att[28]) < 150) {
            setTimeout(() => {
              if (calculateangle(att[24], att[26], att[28]) < 150) {
                correctionMessage(knees1);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;
        case "Hip Raise":
          if (
            calculateangle(att[24], att[26], att[28]) < 45 &&
            calculateangle(att[12], att[24], att[26]) < 130
          ) {
            setTimeout(() => {
              if (
                calculateangle(att[24], att[26], att[28]) < 45 &&
                calculateangle(att[12], att[24], att[26]) < 130
              ) {
                correctionMessage(Glutes);
                return;
              }
            }, 1500);
          } else {
            return;
          }
          break;

        case "BycycleCrunch": //not working
          if (calculateangle(att[12], att[24], att[28])  > 175) {
            // correctionMessage(hands_lock);
            // return;
            setTimeout(() => {
              if (calculateangle(att[12], att[24], att[28])  > 175) {
                correctionMessage(bc_errorcorrection);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;
        case "MountainClimbers": //not working
          if (
            calculateangle(att[12], att[24], att[26]) < 150 &&
            calculateangle(att[11], att[23], att[25]) < 150
          ) {
            setTimeout(() => {
              if (
                calculateangle(att[12], att[24], att[26]) < 150 &&
                calculateangle(att[11], att[23], att[25]) < 150
              ) {
                correctionMessage(plank);
                return;
              }
            }, 1000);
          } else {
            return;
          }
          break;

        // ################exe correction for glute Workouts################
        case "Hip thrust":
          if (
            calculateangle(att[12], att[24], att[26]) > 160 &&
            calculateangle(att[24], att[26], att[28]) < 90
          ) {
            setTimeout(() => {
              if (
                calculateangle(att[12], att[24], att[26]) > 160 &&
                calculateangle(att[24], att[26], att[28]) < 90
              ) {
                correctionMessage(Glutes);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;

        case "Upward plank":
          if (calculateangle(att[12], att[24], att[26]) < 160) {
            setTimeout(() => {
              if (calculateangle(att[12], att[24], att[26]) < 160) {
                // correctionMessage(tablet);
                return;
              }
            }, 2000);
          } else {
            return;
          }
          break;

        // ################exe correction for core Workouts################
        case "V-ups":
          if (calculateangle(att[11], att[23], att[27]) > 175) {
            correctionMessage(heel_lower);
            return;
          } else {
            return;
          }
          break;

        case "handPlanks":
          if (
            calculateangle(att[11], att[23], att[25]) > 160 &&
            calculateangle(att[23], att[25], att[27]) < 165) {
            correctionMessage(knees_straight);
            return;
          }
          if (calculateangle(att[11], att[23], att[25]) < 150) {
            correctionMessage(hip_raised);
            return;
          }
          // if (calculateangle(att[11], att[23], att[25]) > 175) {
          //   correctionMessage(hip_lowered);
          //   return;
          // }
          if (calculateangle(att[11], att[13], att[15]) < 160) {
            correctionMessage(hands_straight);
            return;
          } else {
            return;
          }
          break;

        case "legLowers":
          // if (
          //     calculateangle(att[11], att[23], att[27]) > 110 &&
          //     calculateangle(att[11], att[23], att[29]) < 170) {
          //   correctionMessage(heel_ground);
          //   return;
          // }
          if (calculateangle(att[23], att[25], att[27]) > 140) {
            correctionMessage(knees);
            return;
          }
          if (calculateangle(att[11], att[13], att[15]) < 165) {
            correctionMessage(hands_straight);
            return;
          } else {
            return;
          }
          break;

        case "abSideCrunches":
          if (
            (calculateangle(att[16], att[12], att[24]) > 175 && calculateangle(att[11], att[12], att[15] < 90)) ||
            (calculateangle(att[15], att[11], att[23]) > 175 && calculateangle(att[12], att[11], att[13] < 90))
          ) {
            correctionMessage(lean_less);
            return;
          } else {
            return;
          }
          break;

        case "lieups": //lifting the knee can also be added for accuracy
          if (calculateangle(att[11], att[13], att[15]) < 165) {
            correctionMessage(hands_straight);
            return;
          }
          if (calculateangle(att[23], att[25], att[27]) < 165) {
            correctionMessage(knees_straight);
          } else {
            return;
          }
          break;

        default:
          break;
      }
    }
    return;
  }