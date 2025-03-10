import { calculateangle } from "../GlobalFunctions/calculateAngle";
import { distance } from "../GlobalFunctions/calculateAngle";
import logoSetup from "../resorses/imges/lapscr.jpg";
import vups from "../resorses/gifs/v-ups.gif";
import abc from "../resorses/gifs/ab-side-crunches.gif";
import handPlanks from "../resorses/gifs/hand_plank.gif";
import legLowers from "../resorses/gifs/leg_lowers.gif";
import lieups from "../resorses/gifs/lie-ups.gif";
import Setupaud from "./audios/Setup.mp3";
import Vupsaud from "./audios/Vups.mp3";
import handPlanksaud from "./audios/handPlanks.mp3";
import legLowersaud from "./audios/legLowers.mp3";
import abSideCrunchesaud from "./audios/abSideCrunches.mp3";
import lieupsaud from "./audios/lieups.mp3";
import Thankyouaud from "./audios/Thankyou.mp3";

export let updatelistCoreWorkout = [ 
    [
        "Setup",
        "Welcome! Please ensure your laptop displays your full body. Stand around 7 feet from the screen before the camera activates. Adjust your position to stay visible as you move during our session",
        true,
        `${logoSetup}`
    ],
    [
        "Vups",
        "V ups are great foundational exercises that strengthen your stability and core, which helps with movements like walking, running, and lunging.",
        true,
        `${vups}`
    ],   
    [
        "handPlanks",
        "Hand planks are a versatile and effective exercise that targets the core muscles, improve posture, and enhance overall strength and stability",
        true,
        `${handPlanks}`
    ],   
    [
        "legLowers",
        "Leg lowers target the lower body, promoting stability, strength, balance, and overall health while maintaining mobility and engaging large muscles.",
        true,
        `${legLowers}`
    ],   
    [
        "abSideCrunches",
        "Abdominal side crunches target the obliques, improving rotational strength, flexibility, and overall core stability, while also enhancing athletic performance and reducing lower back pain.",
        true,
        `${abc}`
    ],   
    [
        "lieups",
        "Lie ups engage the rectus abdominis, strengthening the core, improving posture, and enhancing overall athletic performance, while also reducing the risk of back injuries and improving overall body stability.",
        true,
        `${lieups}`
    ],
    [
        "Thankyou",
        "yea !! you have done great work tody. Thank you See you again.",
        true,
        // "https://mir-s3-cdn-cf.behance.net/project_modules/disp/c0ae0368346035.5b59dbb3639b9.gif",
        "https://www.slidekit.com/wp-content/uploads/2022/03/Thank-you-slide-in-gym-and-fitness-templates-for-google-slides-jpg.webp",
    ],
];

let exerlist = [
    "Setup",
    "Vups", //working
    "handPlanks", //working
    "legLowers", //working
    "abSideCrunches", //working
    "lieups", //working
    "Thankyou"
];
export let exerlistCoreWorkoutLen = exerlist.length-2;
export let core_audiosource = [
    Setupaud,
    Vupsaud,
    handPlanksaud,
    legLowersaud,
    abSideCrunchesaud,
    lieupsaud,
    Thankyouaud,
  ];

export let exerlistCoreWorkout = exerlist;

export let core_met_time = [0, 0.004167, 0.003333, 0.003889, 0.003889, 0.002500, 0];

export function evaluate1CoreWorkout(att, pointer) {
    if (exerlist[pointer] === "Vups") {
        // console.log(distance(att[15], att[25]))
        if (
            (
                (calculateangle(att[11], att[23], att[27]) > 165 || 
                calculateangle(att[12], att[24], att[28]) > 165) //&& 
                // (calculateangle(att[11], att[23], att[27]) < 170 || 
                // calculateangle(att[12], att[24], att[28]) < 170)
            ) &&
            (
                distance(att[15], att[25]) > 250 ||
                distance(att[16], att[26]) > 250
            )
        )
            return true;
        else{
            //false
        }
    } else if (exerlist[pointer] === "handPlanks") {
        if (
            (
                (
                    calculateangle(att[23], att[25], att[27]) < 100
                    // calculateangle(att[7], att[11], att[23]) > 170
                // ) //left profile evaluation
                // ||
                // (
                //     calculateangle(att[12], att[24], att[28]) < 100 &&
                //     // calculateangle(att[8], att[12], att[24]) > 170
                ) //right profile evaluation
            )
            &&
            // (
            //     // calculateangle(att[12], att[14], att[16]) > 170
                calculateangle(att[11], att[13], att[15]) > 160
            // )
        ) 
            return true;
        else{
            //false
        }
    } else if (exerlist[pointer] === "legLowers") {
        if (
            calculateangle(att[7], att[11], att[23]) > 170 &&
            calculateangle(att[23], att[25], att[27]) < 110 &&
            calculateangle(att[11], att[23], att[29]) < 140
        ) 
            return true;
        else{
            //false
        }
    } else if (exerlist[pointer] === "abSideCrunches") {
        if (
            calculateangle(att[16], att[12], att[24]) < 40 &&
            calculateangle(att[15], att[11], att[23]) < 40
        ) 
            return true;
        else{
            //false
        }
    } else if (exerlist[pointer] === "lieups") {
        if (
            calculateangle(att[11], att[23], att[27]) > 170 &&
            calculateangle(att[11], att[13], att[15]) > 170 
        ) 
            return true;
        else{
            //false
        }
    }
}

export function evaluate2CoreWorkout(att, pointer) {
    if (exerlist[pointer] === "Vups") {
        if (
            (
                calculateangle(att[11], att[23], att[27]) < 140 || 
                calculateangle(att[12], att[24], att[28]) < 140
            ) &&
            (
                distance(att[15], att[25]) < 25 ||
                distance(att[16], att[26]) < 25
            )
        ) 
            return true;
        else{
            //false
        }
    } else if (exerlist[pointer] === "handPlanks") {
        if (
            (
                (
                    calculateangle(att[23], att[25], att[27]) > 165 //&&
                    // calculateangle(att[7], att[11], att[23]) > 170
                ) //left profile evaluation
                // ||
                // (
                //     calculateangle(att[12], att[24], att[28]) > 160
                //     // calculateangle(att[8], att[12], att[24]) > 170
                // ) //right profile evaluation
            )
            &&
            (
                // calculateangle(att[12], att[14], att[16]) > 170 || 
                calculateangle(att[11], att[13], att[15]) > 165
            )
        ) 
            return true;
        else{
            //false
        }
    } else if (exerlist[pointer] === "legLowers") { 
        if (
            calculateangle(att[7], att[23], att[27]) > 170 &&
            calculateangle(att[11], att[23], att[29]) > 170
        ) 
            return true;
        else{
            //false
        }
    } else if (exerlist[pointer] === "abSideCrunches") {
        if (
            (calculateangle(att[16], att[12], att[24]) > 170 &&
            calculateangle(att[15], att[11], att[23]) < 40) || 
            (calculateangle(att[16], att[12], att[24]) < 40 &&
            calculateangle(att[15], att[11], att[23]) > 170)
        ) 
            return true;
        else{
            //false
        }
    } else if (exerlist[pointer] === "lieups") {
        if (
            calculateangle(att[11], att[23], att[27]) <100 &&
            calculateangle(att[11], att[13], att[15]) > 170
        ) 
            return true;
        else{
            //false
        }
    }
}

//mistakes while performing exercises - taking too less or too much time is also one of the mistake