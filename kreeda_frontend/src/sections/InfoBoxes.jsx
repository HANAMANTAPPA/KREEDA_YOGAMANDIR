import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../stylesheets/InfoBoxes.module.css'; // Import the CSS module

const InfoBoxes = () => {
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalExercises, setTotalExercises] = useState(0); // New state for total exercises
  const [totalReps, setTotalReps] = useState(0); // New state for total reps
  const [error, setError] = useState(null);

  // Helper function to convert total seconds into HH:MM:SS format
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Ensure two-digit formatting for hours, minutes, and seconds
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const fetchWeeklyProgress = async () => {
    try {
      // Get the start and end dates for the week
      const startOfWeek = new Date();
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
  
      const startFormatted = startOfWeek.toISOString().split('T')[0];
      const endFormatted = endOfWeek.toISOString().split('T')[0];
  
      // Fetch weekly progress data from the API
      const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/getProgressForDateRange?startDate=${startFormatted}&endDate=${endFormatted}`,
                    {
            withCredentials: true, // Ensures cookies are sent with the request
        }
    );
    
  
      const data = response.data;
      // console.log(data);
      
  
      // Initialize variables for total calories, exercises, and reps
      let totalCalories = 0;
      let totalExercises = 0;
      let totalReps = 0; 
  
      // Create a mapping for the fetched data by date
      const dataMap = {};
      data.forEach(item => {
        dataMap[item.day] = {
          calories: parseFloat(item.calories) || 0, // Use 0 if parsing fails
          exercises: item.exercises ? Object.keys(item.exercises).length : 0, // Count number of exercises
          repCount: item.performance || 0 // Use 0 if no repCount is available
        };
      });
  
      // Loop through the week to calculate total calories, exercises, and reps
      for (let d = startOfWeek; d <= endOfWeek; d.setDate(d.getDate() + 1)) {
        const dateString = d.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
        const dailyData = dataMap[dateString] || { calories: 0, exercises: 0, repCount: 0 }; // Default to 0 if no data for the date
        totalCalories += dailyData.calories; // Add calories to total
        totalExercises += dailyData.exercises; // Add exercises to total
        totalReps += dailyData.repCount; // Add reps to total
      }
  
      setTotalCalories(totalCalories); // Set the total calories state
      setTotalExercises(totalExercises); // Set the total exercises state
      setTotalReps(totalReps); // Set the total reps state
  
    } catch (err) {
      console.error('Error fetching weekly progress:', err); // Log the error
      setError('Failed to fetch weekly progress data.'); // Set error message
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchWeeklyProgress();
  }, []);

  // Calculate total time based on number of exercises (each exercise is 50 seconds)
  const totalTimeInSeconds = totalExercises * 50;
  const formattedTime = formatTime(totalTimeInSeconds); // Format the total time

  return (
    <div className={styles.infoBoxes}>
      <div className={`${styles.infoBox} ${styles.calories}`}>
        <h3 className={styles.boxTitle}>Calories Burnt</h3>
        <p className={styles.caloriesValue}>{totalCalories.toFixed(2)} kcal</p> {/* Display total calories */}
        {error && <p className={styles.errorMessage}>{error}</p>} {/* Display error if any */}
      </div>
      <div className={`${styles.infoBox} ${styles.hours}`}>
        <h3 className={styles.boxTitle}>Total Hours</h3>
        <div className={styles.hoursText}>
          <span>{formattedTime}</span> {/* Display formatted total time */}
          <p>This Week</p>
        </div>
      </div>
      <div className={`${styles.infoBox} ${styles.exercises}`}>
        <h3 className={styles.boxTitle}>No of Reps:</h3>
        <p className={styles.noOfExercises}>{totalReps}</p> {/* Display total reps */}
      </div>
      <div className={`${styles.infoBox} ${styles.exercises}`}>
        <h3 className={styles.boxTitle}>Exercises</h3>
        <p className={styles.noOfExercises}>{totalExercises}</p> {/* Display total exercises */}
      </div>
    </div>
  );
};

export default InfoBoxes;
