
// import React from "react";
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
// import "./DailyProgress.css";

// const ExerciseProgress = ({ selectedDate }) => {
//   const data = [
//     {
//       date: "2024-08-01",
//       exercises: [
//         { name: "Pushups", performance: 90, calories: 50 },
//         { name: "ButtKickVariation", performance: 85, calories: 40 },
//       ],
//     },
//     {
//       date: "2024-08-02",
//       exercises: [
//         { name: "RunInPlace", performance: 88, calories: 60 },
//         { name: "CrossJacks", performance: 82, calories: 45 },
//       ],
//     },
//     {
//     date: "2024-08-03",
//     exercises: [
//         {name: "side raise", performance: 40, calories: 311},
//         {name: "dumbell raise", performance: 80, calories: 200},
//     ],
//     },

//     {
//         date: "2024-08-04",
//         exercises: [
//             {name: "Run in place", performance: 50, calories: 500},
//             {name: "Shoulder taps", performance: 20, calories: 150},
//         ],
//         },

//         {
//             date: "2024-08-05",
//             exercises: [
//                 {name: "Cross Jacks", performance: 40, calories: 240},
//                 {name: "dumbell raise", performance: 25, calories: 300},
//             ],
//             },

//             {
//                 date: "2024-08-06",
//                 exercises: [
//                     {name: "side raise", performance: 40, calories: 311},
//                     {name: "dumbell raise", performance: 80, calories: 200},
//                 ],
//                 },

//                 {
//                     date: "2024-08-07",
//                     exercises: [
//                         {name: "side raise", performance: 40, calories: 311},
//                         {name: "dumbell raise", performance: 80, calories: 200},
//                     ],
//                     },

//                     {
//                         date: "2024-08-08",
//                         exercises: [
//                             {name: "side raise", performance: 40, calories: 311},
//                             {name: "dumbell raise", performance: 80, calories: 200},
//                         ],
//                         },

//                         {
//                             date: "2024-08-09",
//                             exercises: [
//                                 {name: "side raise", performance: 40, calories: 311},
//                                 {name: "dumbell raise", performance: 80, calories: 200},
//                             ],
//                             },

//                             {
//                                 date: "2024-08-10",
//                                 exercises: [
//                                     {name: "side raise", performance: 40, calories: 311},
//                                     {name: "dumbell raise", performance: 80, calories: 200},
//                                 ],
//                                 },

//                                 {
//                                     date: "2024-08-11",
//                                     exercises: [
//                                         {name: "side raise", performance: 40, calories: 311},
//                                         {name: "dumbell raise", performance: 80, calories: 200},
//                                     ],
//                                     },

//                                     {
//                                         date: "2024-08-12",
//                                         exercises: [
//                                             {name: "side raise", performance: 40, calories: 311},
//                                             {name: "dumbell raise", performance: 80, calories: 200},
//                                         ],
//                                         },

//                                         {
//                                             date: "2024-08-13",
//                                             exercises: [
//                                                 {name: "side raise", performance: 40, calories: 311},
//                                                 {name: "dumbell raise", performance: 80, calories: 200},
//                                             ],
//                                             },

//                                             {
//                                                 date: "2024-08-14",
//                                                 exercises: [
//                                                     {name: "side raise", performance: 40, calories: 311},
//                                                     {name: "dumbell raise", performance: 80, calories: 200},
//                                                 ],
//                                                 },

//                                                 {
//                                                     date: "2024-08-15",
//                                                     exercises: [
//                                                         {name: "side raise", performance: 11, calories: 212},
//                                                         {name: "dumbell raise", performance: 23, calories: 434},
//                                                     ],
//                                                     },

//   ];

//   const filteredData = data.find((item) => item.date === selectedDate)?.exercises || [];

//   return (
//     <div className="exercise-progress-container">
//       <h2>Exercise Performance Overview for {selectedDate}</h2>
//       <ResponsiveContainer width="100%" height={400}>
//         <LineChart data={filteredData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="performance" stroke="#8884d8" activeDot={{ r: 8 }} />
//           <Line type="monotone" dataKey="calories" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default ExerciseProgress;





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
// import "./DailyProgress.css";

// const ExerciseProgress = ({ exerciseData }) => (
//   <div className="exercise-progress-container">
//     <h2>Exercise Performance Overview</h2>
//     <ResponsiveContainer width="100%" height={400}>
//       <LineChart data={exerciseData}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line type="monotone" dataKey="performance" stroke="#8884d8" activeDot={{ r: 8 }} />
//         <Line type="monotone" dataKey="calories" stroke="#82ca9d" />
//       </LineChart>
//     </ResponsiveContainer>
//   </div>
// );

// const ExercisePage = () => {
//   const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//   const [isComplete, setIsComplete] = useState(false);
//   const [exerciseData, setExerciseData] = useState([]);

//   const exercises = [
//     "BenchDips",
//     "PikePushups",
//     "Pushups",
//     "CobraPushups",
//     "PlankUps",
//   ];

//   const handleExerciseComplete = (exerciseResult) => {
//     setExerciseData([...exerciseData, exerciseResult]);
//     if (currentExerciseIndex < exercises.length - 1) {
//       setCurrentExerciseIndex(currentExerciseIndex + 1);
//     } else {
//       setIsComplete(true);
//     }
//   };

//   useEffect(() => {
//     // Simulate exercise completion
//     const exerciseResult = {
//       name: exercises[currentExerciseIndex],
//       performance: Math.floor(Math.random() * 100),
//       calories: Math.floor(Math.random() * 100),
//     };
//     handleExerciseComplete(exerciseResult);
//   }, [currentExerciseIndex]);

//   return (
//     <div>
//       <h1>Arms Workout</h1>
//       {isComplete ? (
//         <ExerciseProgress exerciseData={exerciseData} />
//       ) : (
//         <p>Exercise {exercises[currentExerciseIndex]} in progress...</p>
//       )}
//     </div>
//   );
// };

// export default ExercisePage;



import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./DailyProgress.css";

const ExerciseProgress = ({ exerciseData }) => (
  <div className="exercise-progress-container">
    <h2>Exercise Performance Overview</h2>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={exerciseData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Performance" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="calories" stroke="#82ca9d" />
        {/* <Line typ="monotone" datatkey="" */}

      </LineChart>
    </ResponsiveContainer>
  </div>
);

const ExercisePage = ({ selectedDate }) => {
  const [exerciseData, setExerciseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const response = await fetch(`/api/exercise-data?date=${selectedDate}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setExerciseData(data.exercises); // Assuming the API returns an object with a key `exercises`
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchExerciseData();
  }, [selectedDate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Exercise Analytics for {selectedDate}</h1>
      {exerciseData.length > 0 ? (
        <ExerciseProgress exerciseData={exerciseData} />
      ) : (
        <p>No exercise data available for this date.</p>
      )}
    </div>
  );
};

export default ExercisePage;
