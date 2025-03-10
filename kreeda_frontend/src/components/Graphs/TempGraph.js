import React, { useState, useEffect } from "react";
// import Sidebar from '../navbar/navbar';
// import './index.css';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./ExeProgress.css";
import axios from "axios";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

const TempGraph = () => {
  const [showPerformance, setShowPerformance] = useState(true);
  const [showCalories, setShowCalories] = useState(true);
  const [combinedData, setCombinedData] = useState([]);
  // const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      let data = localStorage.getItem("ExerciseProgressTemp");
      console.log("Data from localStorage:", data);
      if (data) {
        try {
          data = JSON.parse(data);
          console.log(data);
          setCombinedData(data);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.log("No data found in localStorage");
      }

      // try {
      //   const year = selectedDate.getFullYear();
      //   const month = selectedDate.getMonth() + 1;
      //   const day = selectedDate.getDate();
      //   const formattedDate = `${year}-${month}-${day}`;
      //   console.log(formattedDate);

      //   try {
      //     const exerciseResponse = await axios.get(
      //       `${process.env.REACT_APP_Baseurl}/get-exeProgress?date=${formattedDate}`,
      //       { withCredentials: true }
      //     );
      //     const exerciseData = exerciseResponse.data;
      //     const calorieResponse = await axios.get(
      //       `${process.env.REACT_APP_Baseurl}/get-calProgress?date=${formattedDate}`,
      //       { withCredentials: true }
      //     );

      //     const calorieData = calorieResponse.data;

      //     const combined = exerciseData.map((exercise) => {
      //       const calorieEntry = calorieData.find(
      //         (calorie) => calorie.exeName === exercise.exeName
      //       );
      //       return {
      //         name: exercise.exeName,
      //         performance: exercise.repCount,
      //         exerciseSet: exercise.exerciseSet,
      //         calories: calorieEntry ? calorieEntry.caloriesburnt : 0,
      //       };
      //     });

      //     setCombinedData(combined);
      //     console.log(combined);
      //   } catch (error) {
      //     console.log("Error in fetching exercise response");
      //   }
      // } catch (error) {
      //   console.error("Error fetching data:", error);
      // }
    };

    fetchData();

    // setTimeout(() => {
    //   document.getElementById("redirecttopage").click();
    // }, 6000);
  }, []);

  const date1 = new Date();

  // Get the IST date parts
  const year = date1.toLocaleString("en-IN", { year: 'numeric', timeZone: "Asia/Kolkata" });
  const month = date1.toLocaleString("en-IN", { month: 'numeric', timeZone: "Asia/Kolkata" });
  const day = date1.toLocaleString("en-IN", { day: 'numeric', timeZone: "Asia/Kolkata" });

  const istFormattedDateTime = `${year}-${month}-${day}`;

  // Define the custom tick components
  const RepCountTick = ({ x, y, payload }) => {
    return (
      <text x={x} y={y} dy={-10} fontSize={12} textAnchor="end">
        {payload.value} Reps
      </text>
    );
  };

  const CaloriesTick = ({ x, y, payload }) => {
    return (
      <text x={x} y={y} dy={10} fontSize={12} textAnchor="end">
        {payload.value} Calories
      </text>
    );
  };

  const handleClose = () => {
    window.location.href = "/dashboard/exerciseList"; // Redirect to the desired page on close button click
  };

  return (
    <div className="app-container">
      <div className="exercise-progress-container">
        <h2>Exercise Performance & Calories Burned</h2>
        <div className="date-picker-container">
          <label>
            <strong>Date : &nbsp;{istFormattedDateTime}</strong>
          </label>
          {/* <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate (date)}
            dateFormat="yyyy-MM-dd"
          /> */}
        </div>

        <div className="button-container">
          <button
            onClick={() => setShowPerformance(!showPerformance)}
            className={showPerformance ? "active" : ""}
          >
            Toggle Performance
          </button>
          <button
            onClick={() => setShowCalories(!showCalories)}
            className={showCalories ? "active" : ""}
          >
            Toggle Calories Burned
          </button>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={combinedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              yAxisId="left"
              orientation="left"
              tick={<RepCountTick />}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={<CaloriesTick />}
            />
            <Tooltip />
            <Legend />
            {showPerformance && (
              <Bar
                yAxisId="left"
                dataKey="performance"
                fill="#8884d8"
                name="Performance"
                barSize={20}
              />
            )}
            {showCalories && (
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="calories"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
                strokeWidth={3} // Increase the line width to 3 (default is 1)
                name="Calories Burned"
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>

        {/* Close Button */}
        <div className="close-button-container">
          <button onClick={handleClose} className="close-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TempGraph;
