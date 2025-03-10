// import React, { useState, useEffect } from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import "./ExeProgress.css";
// import axios from "axios";

//  const data1 = [
//     { name: "CrossJacks", performance: 20, calories: 600 },
//     { name: "ButtKickVariation", performance: 12, calories: 450 },
//     { name: "RunInPlace", performance: 8, calories: 150 },
//     { name: "SideToSideSkiers", performance: 25, calories: 110 },
//     { name: "ShoulderTaps", performance: 15, calories: 95 },
//   ];


// const ExerciseProgress = ({ exercisesCompleted }) => {
//   const [showPerformance, setShowPerformance] = useState(true);
//   const [showCalories, setShowCalories] = useState(true);
//   const [workoutData, setWorkoutData] = useState([]);

//   useEffect(() => {
//     // Fetch exercise data (adjust the fetch URL and data processing as needed)
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_BASE_URL}/api/get-exeProgress`,
//           {
//               withCredentials: true, // Ensures cookies are sent with the request
//           }
//       );
      
    
//         const data = response.data;
//         console.log(data);
    
//         const processedData = data.map((workout) => {
//           let formattedData = [];
    
//           formattedData.push({
//             name: workout.exeName,
//             performance: workout.repCount,
//             exerciseSet: workout.exerciseSet,
//           });
    
//           return formattedData;
//         });
    
//         setWorkoutData(processedData.flat());
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//     // try{
//     //   fetch("http://localhost:5001/api/get-exeProgress")
//     //   .then((response) => response.json())
//     //   .then((data) => {
//     //     // console.log(data);
        
//     //     const processedData = data.map((workout) => {
//     //       let formattedData = [];
//     //       // Object.keys(workout.exerciseSets).forEach((category) => {
//     //       //   Object.keys(workout.exerciseSets[category]).forEach((exercise) => {
//     //       //     formattedData.push({
//     //       //       name: exercise,
//     //       //       performance: workout.exerciseSets[category][exercise].Cnt,
//     //       //       exerciseSet: workout.exerciseSets[category][exercise].exerciseSet,
//     //       //       // calories: workout.exerciseSets[category][exercise].Calories,
//     //       //     });
//     //       //   });
//     //       // });

//     //       formattedData.push({
//     //               name: workout.exeName,
//     //               performance: workout.repCount,
//     //               exerciseSet: workout.exerciseSet,
//     //         //       // calories: workout.exerciseSets[category][exercise].Calories,
//     //             });

//     //       // console.log(formattedData);
//     //       return formattedData;
//     //     });
//     //     setWorkoutData(processedData.flat());
//     //     // console.log(typeof(formattedData));
//     //   });
//     // } catch(error) {
//     //   res.json({message: "Error in fetching the data"})
//     // }
//   }, []);

//   // Show chart only after all exercises are completed
//   // if (!exercisesCompleted) {
//   //     return <div>Please complete all exercises to view your progress.</div>;
//   //  }

//   return (
//     <div className="exercise-progress-container">
//       <h2>Exercise Performance & Calories Burned</h2>
//       <div className="button-container">
//         <button
//           onClick={() => setShowPerformance(!showPerformance)}
//           className={showPerformance ? "active" : ""}
//         >
//           Toggle Performance
//         </button>
//         <button
//           onClick={() => setShowCalories(!showCalories)}
//           className={showCalories ? "active" : ""}
//           >
//           Toggle Calories Burned
//         </button>
//       </div>
//       <ResponsiveContainer width="100%" height={400}>
//         <LineChart data={workoutData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis yAxisId="left" orientation="left" />
//           <YAxis yAxisId="right" orientation="right" />
//           <Tooltip />
//           <Legend />
//           {showPerformance && (
//             <Line
//               yAxisId="left"
//               type="monotone"
//               dataKey="performance"
//               stroke="#8884d8"
//               activeDot={{ r: 8 }}
//               name="Performance"
//             />
//           )}
//           {showCalories && (
//             <Line
//               yAxisId="right"
//               type="monotone"
//               dataKey="calories"
//               stroke="#82ca9d"
//               activeDot={{ r: 8 }}
//               name="Calories Burned"
//             />
//           )}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default ExerciseProgress;
