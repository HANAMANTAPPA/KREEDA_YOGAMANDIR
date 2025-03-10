import {useEffect, useState} from 'react';
import Sccore_audio from '../../resorses/audiosFolder/Sccore_audio.mp3';
import Timer_5sec_audio from '../../resorses/audiosFolder/Timer_5sec_audio.wav';
// import bgmisic from '../../resorses/audiosFolder/bgmisic.mp3';

function AudioC (props) {
  const audiosource = props.audiosource;
  let [audSrc, setaudSRC] = useState (audiosource[0]); //= props.audSrc;
  // console.log (audSrc);
  let pointer = props.pointer;
  let previous = pointer.current;
  useEffect (() => {
    let seI = setInterval (() => {
      const currentVal = pointer.current;
      // console.log(
      //   "\n\n\n\n" + previous + "\n\n\n\n" + pointer.current + "\n\n\n\n"
      // );
      // console.log (currentVal, ';;;;;;;;;;;;;;;;;;;;;;;;;', previous);

      if (previous !== currentVal) {
        previous = currentVal;
        // pointer.current += 1;
        setaudSRC (audiosource[currentVal]);
      }
    }, 1);
    return () => clearInterval (seI);
  }, []);

  return (
    <div>
      <audio autoPlay loop id="background-music">
        {/* <source src={bgmisic} type="audio/ogg" />
        <source src={bgmisic} type="audio/mpeg" /> */}
        Your browser does not support the audio element.
      </audio>
      {/* <!-- other sounds --> */}
      <audio id="TimerAudio">
        <source src={Timer_5sec_audio} type="audio/ogg" />
        <source src={Timer_5sec_audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="ScoreAudio0">
        <source src={Sccore_audio} type="audio/ogg" />
        <source src={Sccore_audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="ScoreAudio1">
        <source src={Sccore_audio} type="audio/ogg" />
        <source src={Sccore_audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="ScoreAudio2">
        <source src={Sccore_audio} type="audio/ogg" />
        <source src={Sccore_audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="ScoreAudio3">
        <source src={Sccore_audio} type="audio/ogg" />
        <source src={Sccore_audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="instructorAudio">
        <source src={audSrc} type="audio/wav" />
        <source src={audSrc} type="audio/mp3" />
        <source src={audSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioC;
