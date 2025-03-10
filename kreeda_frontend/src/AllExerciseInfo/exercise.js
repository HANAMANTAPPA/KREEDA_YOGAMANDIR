import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ExercisePage from '../components/ExercisePageC/ExercisePage';
import Setup from "./setup.js";
import thankYou from "./thankYou.js";

const Exercise = () => {
  const { exerciseName } = useParams();  // Get exercise name from URL
  const [loaded, setLoaded] = useState(false);  // Track if data is loaded
  const [exerciseData, setExerciseData] = useState({});  // Store the exercise data

  useEffect(() => {
    const fetchWorkoutExercise = async () => {
      try {
        // Dynamically import the specific exercise module based on `moduleName`
        const importedExercise = await import(`./ExerciseInfo/${exerciseName}`);
        
        // Create the exerciseInfo data structure
        const exerciseInfo = {
          exerlist: [Setup[0], importedExercise.default[0], thankYou[0]],  // Setup, specific exercise, ThankYou
          updatelist: [Setup, importedExercise.default, thankYou],         // All details from each module
          met_times: [0, importedExercise.default[6], 0],                  // MET times for each phase
          audiosources: [Setup[4], importedExercise.default[4], thankYou[4]], // Audio sources for each phase
          evaluation1Functions: [importedExercise.evaluate1 || (() => {})], // Evaluation phase 1 function
          evaluation2Functions: [importedExercise.evaluate2 || (() => {})], // Evaluation phase 2 function
        };

        setExerciseData(exerciseInfo);
        setLoaded(true);  // Mark as loaded
      } catch (error) {
        console.error('Error loading exercise module:', error);
      }
    };

    fetchWorkoutExercise();
  }, [exerciseName]);

  // If data isn't loaded, show a loading state 
  if (!loaded) {
    return <div>Loading...</div>;
  }

  // Once data is loaded, render the ExercisePage
  return (
    <ExercisePage
      exerlist={exerciseData.exerlist}
      updatelist={exerciseData.updatelist}
      evaluate1={exerciseData.evaluation1Functions}
      evaluate2={exerciseData.evaluation2Functions}
      audiosource={exerciseData.audiosources}
      met_time={exerciseData.met_times}
    />
  );
};

export default Exercise;