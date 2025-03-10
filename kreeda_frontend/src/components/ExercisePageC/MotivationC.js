
import React, { useEffect  } from "react";

// import AWS from "aws-sdk";

import just from "../../resorses/audiosFolder/motivation_audios/just.mp3";
import RepCount5 from "../../resorses/audiosFolder/motivation_audios/Repcount5.mp3";
import RepCount10 from "../../resorses/audiosFolder/motivation_audios/Repcount10.mp3";
import RepCount12 from "../../resorses/audiosFolder/motivation_audios/Repcount12.mp3";
import RepCount15 from "../../resorses/audiosFolder/motivation_audios/Repcount15.mp3";
import RepCount20 from "../../resorses/audiosFolder/motivation_audios/Repcount20.mp3";


export default function MotivationC(props) {
  let sorecRef = props.sorecRef;
  let previous = sorecRef.current;

  let audioPlaying = props.audioPlaying;
  let playlist = {};
  let deletedPlaylist = {};
  var audio = new Audio(); // Create an HTML5 audio element

  function playAudio(audioStream) {
    // const bgaud = document.getElementById("background-music");
    const audioBlob = new Blob([audioStream], { type: "audio/mp3" });
    const audioUrl = URL.createObjectURL(audioBlob);

    audio.src = audioUrl;
    // Play the audio
    audio.play();
    // bgaud.volume = 0.1;
    audioPlaying.current = true;
    audio.onended = function () {
      setTimeout(() => {
        audioPlaying.current = false;
      }, 2000);
      // bgaud.volume = 0.3;
    };
  }

  function playLocalAudio(audioFile) {
    audio.src = audioFile;
    audio.play();
    audioPlaying.current = true;
    audio.onended = () => {
      setTimeout(() => {
        audioPlaying.current = false;
      }, 2000);
    };
  }

  function player(index) {
    playAudio(playlist[index]);
  }

  function motivationMessage(messageID) {
    // Check if messageID corresponds to a local file
    if (messageID === "just") {
      playLocalAudio(just); // Play the imported 'just' audio file
      return;
    } else if (messageID === "5thRepcount") {
      playLocalAudio(RepCount5); // Play imported 'RepCount5' audio file
      return;
    } else if (messageID === "10thRepcount") {
      playLocalAudio(RepCount10); // Play imported 'RepCount10' audio file
      return;
    } else if (messageID === "12thRepcount") {
      playLocalAudio(RepCount12); // Play imported 'RepCount12' audio file
      return;
    } else if (messageID === "15thRepcount") {
      playLocalAudio(RepCount15); // Play imported 'RepCount15' audio file
      return;
    } else if (messageID === "20thRepcount") {
      playLocalAudio(RepCount20); // Play imported 'RepCount20' audio file
      return;
    }

    // Handle Polly-generated messages
  //   if (playlist[messageID] && !audioPlaying.current) {
  //     audioPlaying.current = true;
  //     player(messageID);
  //     deletedPlaylist[messageID] = playlist[messageID];
  //     delete playlist[messageID];
  //     setTimeout(() => {
  //       playlist[messageID] = deletedPlaylist[messageID];
  //     }, 10000); // Adjust the timeout as needed
  //   }
  }
    
    // function fun() { 
    //     AWS.config.update({
    //       accessKeyId: "AKIA5SZGYBJGGEF7SQNP",
    //       secretAccessKey: "F+xZt+9tRgF4BBllM/BBunpZV24hri8AkNvro7sW",
    //       region: "ap-southeast-1", // e.g., us-east-1
    //     });
    //     const polly = new AWS.Polly();
    //     async function generateSpeech(text, voiceid, name) {
    //       const params = {
    //         Text: text,
    //         OutputFormat: "mp3",
    //         VoiceId: voiceid,
    //       };
    
    //       polly.synthesizeSpeech(params, (err, data) => {
    //         if (err) {
    //           console.error(err);
    //           // no.push(voiceid);
    //           return;
    //         }
    
    //         // Play the audio
    //         playlist[name] = data.AudioStream;
    //         // console.log(`\n\n\n\n\n\n\n   ${playlist}   \n\n\\n\n\n\n`);
    //       });
    //     }
    
    //     generateSpeech(` Please start exercise`, "Raveena", "just"); 
    //     generateSpeech("You're on fire! Keep it going!", "Amy", "5thRepcount");
    //     generateSpeech("Great job! You're halfway there!", "Amy", "10thRepcount");  
    //     generateSpeech("Amazing! Your strength is showing!", "Amy", "12thRepcount"); 
    //     generateSpeech("Unstoppable! You're crushing it!", "Amy", "15thRepcount"); 
    //     generateSpeech("Fantastic! Keep pushing to new heights!", "Amy", "20thRepcount"); 

        
    // }

    // useEffect(() => {
    //   fun();
    //   console.log("fun got executed ");
    // }, []);
  
    
    useEffect(() => {
        
        let seI = setInterval(() => {
          const currentVal = sorecRef.current; 
          if (previous !== currentVal) {
              previous = currentVal; 
              switch (currentVal) {
                case 0:
                  motivationMessage({just});
                  return; 
                case 5:
                  motivationMessage("5thRepcount");
                  return; 
                case 10:
                  motivationMessage("10thRepcount");
                return; 
                case 12:
                  motivationMessage("12thRepcount");
                return; 
                case 15:
                  motivationMessage("15thRepcount");
                  return; 
                default:
                    break;
              }
          }
        }, 1);
        // setCheckVar_Score(sorecRef.current);
        return () => clearInterval(seI);
      }, []);
    

    return (<></>)

    
}