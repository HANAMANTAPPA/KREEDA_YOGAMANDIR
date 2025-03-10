import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ExercisePage from '../components/ExercisePageC/ExercisePage.js';
import Setup from "./setup.js";
import thankYou from "./thankYou.js"

const Workout = () => { 
  const { moduleName } = useParams();  // Get module name from URL
  const [loaded, setLoaded] = useState(false);  // Track if data is loaded
  const [exerciseData, setExerciseData] = useState({});  // Store the fetched data
  const navigate = useNavigate();  // Use for navigation

  useEffect(() => {
    const fetchWorkoutExercises = async () => {
      try {
        // No need to send the userId, the backend can handle it using session
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/exercises/${moduleName}`, // Replace with your production server URL if needed
          {
              withCredentials: true,
          }
      );
      
      
        const exercises = response.data;

        // Dynamically load exercise modules and map to the arrays
        const importedExercises = await Promise.all(
          exercises.map(exercise => import(`./ExerciseInfo/${exercise.name}`))
        );

        const exerciseInfo = {
          exerlist: [Setup[0], ...importedExercises.map(ex => ex.default[0]),thankYou[0]],
          updatelist:[Setup, ...importedExercises.map(ex => ex.default),thankYou],
          met_times: [0, ...importedExercises.map(ex => ex.default[6]), 0],
          audiosources: [Setup[4],...importedExercises.map(ex => ex.default[4]),thankYou[4]],
          evaluation1Functions: importedExercises.map(ex => ex.evaluate1 || (() => {})),
          evaluation2Functions: importedExercises.map(ex => ex.evaluate2 || (() => {})),
          exerciseSet: moduleName,
        };
        console.log("evaluation1Functions:", exerciseInfo.evaluation1Functions);
        setExerciseData(exerciseInfo);
        setLoaded(true);  // Mark as loaded
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchWorkoutExercises();
  }, [moduleName]);

  // If data isn't loaded, show a loading state
  if (!loaded) {
    return <div>Loading...</div>;
  }

  // Once data is loaded, navigate to the ExercisePage
  return (
    <ExercisePage
      exerlist={exerciseData.exerlist}
      updatelist={exerciseData.updatelist}
      evaluate1={exerciseData.evaluation1Functions}
      evaluate2={exerciseData.evaluation2Functions}
      audiosource={exerciseData.audiosources}
      met_time={exerciseData.met_times}
      exerciseSet={exerciseData.exerciseSet}
    />
  );
};

export default Workout;
