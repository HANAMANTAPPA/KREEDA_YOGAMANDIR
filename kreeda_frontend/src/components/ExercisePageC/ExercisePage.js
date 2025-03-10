import AnimationContainerC from './AnimationContainerC';
import ExeNameC from './ExeNameC';
import TimerScore from './TimerScoreC';
import ProgressAnimationContainerC from './ProgressAnimationContainerC';
import VideoAndCanvasC from './VideoAndCanvasC';
import {useState, useEffect, useRef} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './ExercisePage.css';
import gsap from 'gsap';
import AudioC from './AudioC';
import axios from 'axios';
import {met_time} from '../../AllExerciseInfo/WaistlineWorkouts';
// import { player } from "../../GlobalFunctions/textToSpeech";
// import AWS from 'aws-sdk';
import MotivationC from './MotivationC';
import msgBefrStart from '../../AllExerciseInfo/audios/msgBefrStart.mp3';
import ExercisePoints from './ExercisePoints';

// let pointer = 0;
// let score = 0;

// Example of how to set data in localStorage
// localStorage.removeItem ('ExerciseProgressTemp');
let ExerciseProgressTemp = [];
let caloriesburnt = [];
// const exampleData = [
//   { name: "Push-up", performance: 15, calories: 50 },
//   { name: "Squats", performance: 20, calories: 80 },
// ];

// localStorage.setItem("ExerciseProgressTemp", JSON.stringify(exampleData));

function ExercisePage (props) {
  // console.log("Exercise Page  inside Function");
  let restRef = useRef (true);
  let pointer = useRef (0);
  let resultRef = useRef (false);
  let sorecRef = useRef (0);
  const TimerVal = useRef (0);
  const updatelist = props.updatelist;
  // console.log("updatelist", updatelist);
  const exerlist = props.exerlist;
  // console.log("exerlist", exerlist);
  const evaluate2 = props.evaluate2;
  const evaluate1 = props.evaluate1;
  const calorieList = props.calorieList;
  const audiosource = props.audiosource;
  let audioPlaying = useRef (false);
  let userResponse = {};

  // let pointer = 0;
  // let cord = [];
  // let start = false;
  let update = true;
  let fLageforSetup = true;
  // let played = false;
  // const [pointer, setPointer] = useState(0);
  const [time, setTime] = useState (0);
  let setplayer;

  const audSrc = audiosource[pointer.current];
  // console.log(audSrc, audiosource[pointer.current]);

  function updater () {
    if (updatelist[pointer.current][0] === 'Thankyou') {
      console.log ('\n\n\n in Thank You ', ExerciseProgressTemp);

      ExerciseProgressTemp = JSON.stringify (ExerciseProgressTemp);
      localStorage.setItem ('ExerciseProgressTemp', ExerciseProgressTemp);

      let data = localStorage.getItem ('ExerciseProgressTemp');
      data = JSON.parse (data);

      setTimeout (() => {
        document.getElementById ('redirect').click ();
        // console.log("inside 2o sec/n\n");
      }, 8000);
    }
    document.getElementById ('ExeNameh1').innerHTML =
      updatelist[pointer.current][0];
    document.getElementById ('animationGif').src =
      updatelist[pointer.current][3];
    document.getElementById ('animationGif1').src =
      updatelist[pointer.current][3];
    update = true;
    // debugger;
    if (exerlist[pointer.current] === exerlist[0]) {
      setTimeout (function () {
        // document.getElementById("card").style.visibility = "";
        // console.log("Hey bro i'm printing");
        // console.log("inside 2o sec/n\n");
      }, 10000);
    }

    if (exerlist[pointer.current] === exerlist[1]) {
      // debugger;
      setTimeout (function () {}, 10000);
    }
    if (exerlist[pointer.current] === exerlist[2]) {
      setTimeout (function () {
        // console.log("inside 2o sec");
        // console.log("inside 2o sec/n\n");
      }, 10000);
    }
    if (exerlist[pointer.current] === exerlist[3]) {
      setTimeout (function () {
        // console.log("inside 2o sec");
        // console.log("inside 2o sec/n\n");
      }, 10000);
    }
    if (exerlist[pointer.current] === exerlist[4]) {
      setTimeout (function () {
        // console.log("inside 2o sec");
        // console.log("inside 2o sec/n\n");
      }, 10000);
    }
    if (exerlist[pointer.current] === exerlist[5]) {
      setTimeout (function () {
        // console.log("hi");
        // console.log("inside 2o sec/n\n");
      }, 10000);
    }
  }

  function ScoreAudioCount () {
    const aud0 = document.getElementById ('ScoreAudio0');
    if (!aud0.paused) {
      const aud1 = document.getElementById ('ScoreAudio1');
      if (!aud1.paused) {
        const aud2 = document.getElementById ('ScoreAudio2');
        if (!aud2.paused) {
          const aud3 = document.getElementById ('ScoreAudio3');
          aud3.play ();
        } else {
          aud2.play ();
        }
      } else {
        aud1.play ();
      }
    } else {
      aud0.play ();
    }
    // aud.volume = 0.1;
    return;
  }

  function timerAudiofun () {
    let aud = document.getElementById ('TimerAudio');
    aud.play ();
    aud.volume = 0.2;
    // console.log("\n \n \n \n timer audio played \n \n \n \n ");
    return;
  }

  // Database call
  const handleDatabase = async e => {
    // e.preventDefault();

    // let userName = localStorage.getItem("name");
    // async function fetchUser() {
    //   userResponse = await axios.get(
    //     `${process.env.REACT_APP_Baseurl}/getUserdata1`,
    //     {
    //       withCredentials: true, // Important: Ensures cookies are sent with the request
    //     }
    //   );
    // }
    // fetchUser();
    // console.log("dnjxdcdxzc");
    // console.log(userResponse);
    let userName = userResponse.data.userData.userName;
    let userID = userResponse.data.userData.userID;
    // console.log(userName);
    const exerciseSet = props.exerciseSet || 'individualExercise';
    const exeName = exerlist[pointer.current - 1];
    const repCount = sorecRef.current;
    const value = met_time[pointer.current - 1];
    // console.log(
    //   "exercisePoints",
    //   ExercisePoints,
    //   `\n\n\ ${ExercisePoints[exeName]} \n\n`,
    //   exeName
    // );
    const singlePoints = ExercisePoints[exeName];
    console.log (
      `Points for single rep of ${exeName} exercise: `,
      singlePoints
    );

    // console.log('repCount:', repCount, typeof repCount);
    // console.log('value:', value, typeof value);
    // console.log('userResponse:', userResponse, typeof userResponse);
    // console.log('userResponse.data:', userResponse.data, typeof userResponse.data);
    // console.log('userResponse.data.userData.weight:', userResponse.data.userData.weight, typeof userResponse.data.userData.weight);
    // console.log('userResponse.weight:', userResponse.weight, typeof userResponse.weight);
    const caloriesburnt = repCount * value * userResponse.data.userData.weight;
    const points = singlePoints * repCount;
    // console.log(caloriesburnt);
    // const caloriesburnt = calorieList[pointer.current - 1];
    const tempdat = {
      name: exeName,
      performance: repCount,
      calories: caloriesburnt,
      points: points,
    };

    // console.log(tempdat);
    ExerciseProgressTemp.push (tempdat);
    // console.log(ExerciseProgressTemp);
    // Optionally store it in localStorage to persist between sessions
    localStorage.setItem (
      'ExerciseProgressTemp',
      JSON.stringify (ExerciseProgressTemp)
    );

    const data = {userName, exerciseSet, exeName, repCount, caloriesburnt};
    console.log ('data', data);

    const pointsData = {userName, points};
    // const dataExeProgrs = { userName, exerciseSet, exeName, repCount };
    // console.log(dataExeProgrs);

    try {
      if (exeName !== 'Setup') {
        const userExerciseProfile = await axios.get (
          `${process.env.REACT_APP_BASE_URL}/api/getuserExerciseProfile`,
          {withCredentials: true}
        );
        console.log ('Userexerciseprofile  \n\n : ', userExerciseProfile);

        const existingProfile = userExerciseProfile.data.find (
          profile => profile.userName === pointsData.userName
        );
        console.log ('existingProfile: ', existingProfile);

        const exerciseProfileResponse = await axios.post (
          `${process.env.REACT_APP_BASE_URL}/api/addOrUpdateUserExerciseProfile`,
          pointsData,
          {withCredentials: true}
        );
        console.log ('exerciseProfileResponse', exerciseProfileResponse);
      }
    } catch (error) {
      console.log ('Error while sending points data: ', error);
    }

    // try{
    //   if(exeName != "Setup"){
    //     const response = await axios.post(
    //       `${process.env.REACT_APP_Baseurl}/addProgress`,
    //       data,
    //       {
    //         withCredentials: true,
    //       }
    //     );
    //   }
    // } catch (error) {
    //   console.log("Error while sending data: ",error);
    // }

    // const dataExeProgrs = { userName, exerciseSet, exeName, repCount };
    // console.log(dataExeProgrs);

    try {
      // console.log("111", exeName);
      if (exeName != 'Setup') {
        console.log ('222', exeName);
        const response = await axios.post (
          `${process.env.REACT_APP_BASE_URL}/api/addProgress`,
          data,
          {
            withCredentials: true, // Ensures cookies are sent with the request
          }
        );
        console.log ('response of progress', response);
        // console.log(`${process.env.REACT_APP_Baseurl}/add-exeProgress`);
        // console.log(response.data);
      }
    } catch (error) {
      console.error ('Error sending data:', error);
    }
    // const dataCalorie = { userName, exerciseSet, exeName, caloriesburnt };
    // console.log(dataCalorie);

    // try {
    //   if (exeName != "Setup") {
    //     const response = await axios.post(
    //       `${process.env.REACT_APP_BASE_URL}/api/addCalProgress`, // Local development URL
    //       dataCalorie,
    //       {
    //         withCredentials: true, // Ensures cookies are sent with the request
    //       }
    //     );

    //     console.log("http://localhost:5001/api/addCalProgress");
    //     // console.log(response.data);
    //   }
    // } catch (error) {
    //   console.error("Error sending data:", error);
    // }
  };

  // useEffect(() => {
  //   // let intt = setInterval(() => {
  //   //   if (time === 4) {
  //   //     clearInterval(intt);
  //   //   } else {
  //   //     console.log("time 2 increased: " + time + " times");
  //   //     setTime((prevTime) => prevTime + 1);
  //   //     console.log("inner setInterval rendered");
  //   //   }
  //   // }, 1000);
  // }, []);

  useEffect (() => {
    try {
      async function fetchUser () {
        userResponse = await axios.get (
          `${process.env.REACT_APP_BASE_URL}/api/getUserdata1`, // Local development URL
          {
            withCredentials: true, // Ensures cookies are sent with the request
          }
        );

        console.log ('axios', userResponse);
      }
      fetchUser ();
    } catch (error) {
      // userName = localStorage.getItem("name");
      console.log (localStorage.getItem ('name'));
    }
    localStorage.removeItem ('ExerciseProgressTemp');
  }, []);

  useEffect (() => {
    let bgaud = document.getElementById ('background-music');
    bgaud.volume = 0;
    const userName = localStorage.getItem ('name');
    // let score = 0;
    // let scoreREf = 0;
    // let q = 0;
    let second = 10;
    // let queue = [false, false, false, false];
    // let result = [];
    let k = 0;

    let intt = setInterval (function () {
      second--;
      if (!restRef.current && k < 1) {
        k += 1;
      }
      // document.getElementById("time").innerHTML = second;
      if (TimerVal.current == 1 && fLageforSetup) {
        TimerVal.current = 0;
        fLageforSetup = false;
        second = 10;
        // t1.pause();
        clearTimeout (SetUpTimeOut);
        clearInterval (setUpInterupt);
        clearTimeout ('startSetupInterupt');
        // player("msgBefrStart"); // ------6
        const audSrcplay = document.getElementById ('instructorAudio');
        audSrcplay.pause ();
        audSrcplay.src = msgBefrStart;
        audSrcplay.play ();
        audSrcplay.onended = () => {
          audSrcplay.src = audiosource[pointer.current + 1];
        };

        setTimeout (() => {
          second = 10;
          // pointer.current = pointer.current + 1;
          clearTimeout (SetUpTimeOut);
          t1.restart ();
        }, 10000);
      }
      setTime (second);
      if (second === 4) {
        timerAudiofun ();
      }

      if (!restRef.current && second < 1) {
        pointer.current = pointer.current + 1;
        second = 10;
        k = 0;
      }
    }, 1000);
    // let t2 = gsap.timeline();

    // t2.pause();
    let SetUpTimeOut = 0;
    let startSetupInterupt = 0;
    let setUpInterupt = 0;
    let t1 = gsap.timeline ({
      onStart: function () {
        document.getElementById ('animationGif').style.visibility = 'hidden';
        document.getElementById (
          'progressAnimationContainer'
        ).style.visibility =
          'hidden';
        document.getElementById ('ourcanva').style.opacity = '0';
        gsap.to ('#animationGif1', {
          delay: 1,
          duration: 2,
          // x: "100px",
          // y: "100px",
          aspectRatio: '5/4',
          width: '100%',
          height: '80%',
          ease: 'power2.inOut',
        });
        gsap.to ('#animationGif1', {
          delay: 7,
          duration: 2,
          // x: "50vw",
          // y: "50vh",
          aspectRatio: '1.25/1',
          width: '0%',
          height: '0%',
          ease: 'power2.inOut',
        });
        // Animation for ExeNameC
        gsap.fromTo (
          '#ExeNameC',
          {x: '32vw'}, // Starting position
          {
            x: '1.25vw', // Ending position
            delay: 8,
            duration: 2,
            ease: 'power2.inOut',
          }
        );

        sorecRef.current = 0;
        audioPlaying.current = false;
        updater ();
        // debugger;
        restRef.current = true;
        bgaud.volume = 0.15;
        if (exerlist[pointer.current] === 'Setup') {
          const audSrcplay = document.getElementById ('instructorAudio');
          // audSrcplay.play ();
          // player("Setup");
          startSetupInterupt = setTimeout (() => {
            // player("msgBefrSetup"); // ------6
            // console.log(`\n\n\n\n\n ${audioPlaying}   \n\n\n\n\n`);
            // if (!audioPlaying) {
            // setTimeout(() => {
            //   player("SetupComplete");
            // }, 37000);
            // }

            audSrcplay.play ();
            setUpInterupt = setTimeout (() => {
              // player("Setup"); // ------6
            }, 8000);
          }, 2000);
        } else {
          if (pointer.current && exerlist[pointer.current] !== 'Setup') {
            // document.getElementById("exer1").click();
            // document.getElementById("bent-over row").click();
            // player(exerlist[pointer.current]); //   ------6

            // audio file needs to be played here

            setTimeout (() => {
              const audSrcplay = document.getElementById ('instructorAudio');
              audSrcplay.load ();
              audSrcplay.play ();
            }, 1000);
          }
        }

        if (exerlist[pointer.current] === 'Thankyou') {
          // player("Thankyou");
          // document.getElementById("exer5").click();
          // document.getElementById("thankyou").click();
        }
      },
      onComplete: function () {
        // gsap.to("#animationGif1", {
        //   duration: 1,
        //   // x: "50vw",      // Move to the center of the screen horizontally
        //   // y: "50vh",      // Move to the center of the screen vertically
        //   width: "0%", // Expand to full width
        //   height: "0%", // Expand to full height
        //   ease: "power2.inOut"
        // })

        second = 50;
        restRef.current = false;
        document.getElementById ('animationGif').style.visibility = 'visible';
        document.getElementById (
          'progressAnimationContainer'
        ).style.visibility =
          'visible';
        // document.getElementById("ourcanva").style.visibility = "visible";

        SetUpTimeOut = setTimeout (function () {
          // Add data to DB
          if (userResponse) {
            console.log ('in if of handledatabase');
            handleDatabase ();
          } else {
            let local_name = localStorage.getItem ('name');
            console.log (local_name);
            // let userName = local_name;
            const exeName = exerlist[pointer.current - 1];
            const repCount = sorecRef.current;
            // const value = met_time[pointer.current - 1];
            const caloriesburnt = 0;
            const tempdat = {
              name: exeName,
              performance: repCount,
              calories: caloriesburnt,
            };
            // console.log(tempdat);
            ExerciseProgressTemp.push (tempdat);
            // console.log(ExerciseProgressTemp);
            localStorage.setItem (
              'ExerciseProgressTemp',
              JSON.stringify (ExerciseProgressTemp)
            );
          }
          t1.restart ();
          // setTimeout(function () {}, 500);
        }, 50000);
      },
    });

    t1.to ('#ourcanva', {
      delay: 9,
      x: 250,
      width: '80%',
      height: '80%',
      duration: 1,
      opacity: 1,
    });

    return () => {
      console.log("Exercise page component Unmounted");
      
      t1.kill();
      clearInterval(intt);
    };
  }, []);
  return (
    <div className="exebody">
      <VideoAndCanvasC
        exerlist={exerlist}
        pointer={pointer}
        updatelist={updatelist}
        restRef={restRef}
        resultRef={resultRef}
        sorecRef={sorecRef}
        ScoreAudioCount={ScoreAudioCount}
        evaluate2={evaluate2}
        evaluate1={evaluate1}
        TimerVal={TimerVal}
        audioPlaying={audioPlaying}
        time={time}
        // setplayer={setplayer}
      />
      <div style={stylesInline.mainContainer2}>
        {/* video component */}
        {/* left container */}
        {/* animation container */}
        <div id="leftContainer" style={stylesInline.leftContainer}>
          <ExeNameC />
          <AnimationContainerC />
          <ProgressAnimationContainerC
            resultRef={resultRef}
            sorecRef={sorecRef}
            pointer={pointer}
          />
        </div>
        <div id="rightContainer" style={stylesInline.rightContainer}>
          <TimerScore
            time={sorecRef.current}
            animationType={'increasing'}
            animationColor={'#57b1db'}
            position="top-right"
          />
          {' '}
          {/*socre increasing   */}
          <TimerScore
            time={time}
            animationType={'decreasing'}
            animationColor={'#DA22FF'}
            position="bottom-right"
          />
        </div>
        {/* <!-- audio element --> */}
        <AudioC audSrc={audSrc} audiosource={audiosource} pointer={pointer} />
        <MotivationC audioPlaying={audioPlaying} sorecRef={sorecRef} />
        <div style={{visibility: 'hidden'}}>
          <a href="/user/tempgraph">
            <div id="redirect">a</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExercisePage;

const stylesInline = {
  mainContainer2: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
  },
  leftContainer: {
    paddingTop: '2%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "blue",
  },
  rightContainer: {
    paddingLeft: '162%',
    width: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: "red",
  },
};
