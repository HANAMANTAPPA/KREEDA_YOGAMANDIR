// routes.js
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavbarLayout from './layouts/NavbarLayout'; // Navbar layout
import Login from './components/AuthComponents/Login';
import SignUp from './components/AuthComponents/Signup';
import Layout from './layouts/DashboardLayout'; // Sidebar layout
import MainContent from './sections/DashboardPage'; // Default Dashboard content
import Exercises from './sections/ExercisesPage'; // Exercises page
import FitnessPage from './pages/FitnessPage'; // Fitness Page
import Home from './pages/Home'; // Home component
import ExercisePreview from './sections/ExercisePreview';
import ExerciseList from './sections/ExerciseList';
import ExerciseCustomisation from './sections/ExerciseCustomisation';
import HomeDashboard from './pages/HomeDashboard'; // Home Dashboard component
import ExercisePage from './components/ExercisePageC/ExercisePage';
import ExerciseProgress from './sections/ExeProgress';
import Loader from './Loader';
import Workout from './AllExerciseInfo/workout';
import Exercise from './AllExerciseInfo/exercise';
import TempGraph from './components/Graphs/TempGraph';

import {
  updatelistLymphaticWorkout,
  exerlistLymphaticWorkout,
  evaluate1LymphaticWorkout,
  evaluate2LymphaticWorkout,
  lymph_met_time,
  lymph_audiosource,
} from './AllExerciseInfo/LymphaticWorkout';
import {
  updatelistLegWorkout,
  exerlistLegWorkout,
  evaluate1LegWorkout,
  evaluate2LegWorkout,
  leg_met_time,
  leg_audiosource,
} from './AllExerciseInfo/LegWorkout';
import {
  evaluate2ArmsWorkout,
  evaluate1ArmsWorkout,
  exerlistArmsWorkout,
  updatelistArmsWorkout,
  arms_met_time,
  arms_audiosource,
} from './AllExerciseInfo/ArmsWorkout';

import {
  updatelistWaistlineWorkouts,
  exerlistWaistlineWorkouts,
  evaluate1WaistlineWorkouts,
  evaluate2WaistlineWorkouts,
  met_time,
  audiosource,
} from './AllExerciseInfo/WaistlineWorkouts';

import {
  updatelistThreadmill_HK_S1,
  exerlistThreadmill_HK_S1,
  evaluate1Threadmill_HK_S1,
  evaluate2Threadmill_HK_S1,
  thread_met_time,
  thread_audiosource,
} from './AllExerciseInfo/Threadmill_HK_S1';

import {
  evaluate2Threadmill_S2,
  evaluate1Threadmill_S2,
  exerlistThreadmill_S2,
  updatelistThreadmill_S2,
  thread2_met_time,
  thread2_audiosource,
} from './AllExerciseInfo/Threadmill_S2';

import {
  evaluate1ShoulderWorkouts,
  evaluate2ShoulderWorkouts,
  exerlistShoulderWorkouts,
  shoulder_audiosource,
  shoulder_met_time,
  updatelistShoulderWorkouts,
} from './AllExerciseInfo/ShoulderWorkouts';

import {
  evaluate2BackWorkout,
  evaluate1BackWorkout,
  exerlistBackWorkout,
  updatelistBackWorkout,
  back_met_time,
  back_audiosource,
} from './AllExerciseInfo/BackWorkout';

import {
  evaluate2CoreWorkout,
  evaluate1CoreWorkout,
  exerlistCoreWorkout,
  updatelistCoreWorkout,
  core_met_time,
  core_audiosource,
} from './AllExerciseInfo/CoreWorkout';
import Aichatbot from './components/ai_component/Aichatbot';

function AppRoutes () {
  const [loading, setLoading] = React.useState (true);

  // This useEffect will handle the loading delay
  React.useEffect (() => {
    // Simulate loading resources with a delay of 2 seconds
    const loadingDelay = setTimeout (() => {
      setLoading (false); // Hide loader after delay
    }, 500); // 2000 ms = 2 seconds

    // Clean up the timeout if the component unmounts before it finishes
    return () => clearTimeout (loadingDelay);
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    // Display the loader while the page is still loading
    return <Loader />;
  }

  return (
    <Routes>
      {/* Routes for Navbar Layout (Home, Fitness, etc.) */}
      <Route element={<NavbarLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/fitness" element={<FitnessPage />} />
        {/* Add other navbar routes here if needed */}
      </Route>

      {/* Routes for Dashboard Layout with Sidebar */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<MainContent />} />
        {' '}
        {/* Default dashboard content */}
        <Route path="exercises" element={<Exercises />} />
        {' '}
        {/* Exercises page */}
        <Route path="exercises/preview/:id" element={<ExercisePreview />} />
        {' '}
        {/* Exercise preview page */}
        <Route path="exerciseList" element={<ExerciseList />} />
        {' '}
        {/* Exercise List page */}
        <Route
          path="exerciseCustomisation"
          element={<ExerciseCustomisation />}
        />
        {' '}
        {/* Exercise Customisation page */}
        <Route path="exerciseProgress" element={<ExerciseProgress />} />
        <Route path="ai-assistance" element={<Aichatbot />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/ExercisePage/:moduleName" element={<Workout />} />
      <Route path="/Exercise/:exerciseName" element={<Exercise />} />
      <Route path="/user/tempgraph" element={<TempGraph />} />
      {/* <Route
            path="/ExercisePage/LegWorkout"
            element={
            <ExercisePage
                exerlist={exerlistLegWorkout}
                updatelist={updatelistLegWorkout}
                evaluate1={evaluate1LegWorkout}
                evaluate2={evaluate2LegWorkout}
                audiosource ={leg_audiosource}
                met_time = {leg_met_time}
            />
            }
        />
        <Route
            path="/ExercisePage/ArmsWorkout"
            element={
            <ExercisePage
                exerlist={exerlistArmsWorkout}
                updatelist={updatelistArmsWorkout}
                evaluate1={evaluate1ArmsWorkout}
                evaluate2={evaluate2ArmsWorkout}
                audiosource ={arms_audiosource}
                met_time = {arms_met_time}
            />
            }
        />
        <Route
            path="/ExercisePage/WaistlineWorkouts"
            element={
            <ExercisePage
                exerlist={exerlistWaistlineWorkouts}
                updatelist={updatelistWaistlineWorkouts}
                evaluate1={evaluate1WaistlineWorkouts}
                evaluate2={evaluate2WaistlineWorkouts}
                audiosource ={audiosource}
                met_time = {met_time}
            />
            }
        />
        <Route
            path="/ExercisePage/Threadmill_HK_S1"
            element={
            <ExercisePage
                exerlist={exerlistThreadmill_HK_S1}
                updatelist={updatelistThreadmill_HK_S1}
                evaluate1={evaluate1Threadmill_HK_S1}
                evaluate2={evaluate2Threadmill_HK_S1}
                audiosource ={thread_audiosource}
                met_time = {thread_met_time}
            />
            }
        />
        <Route
            path="/ExercisePage/Threadmill_S1"
            element={
            <ExercisePage
                exerlist={exerlistThreadmill_S2}
                updatelist={updatelistThreadmill_S2}
                evaluate1={evaluate1Threadmill_S2}
                evaluate2={evaluate2Threadmill_S2}
                audiosource ={thread2_audiosource}
                met_time = {thread2_met_time}
            />
            }
        />
        <Route
            path="/ExercisePage/LymphaticWorkout"
            element={
            <ExercisePage
                exerlist={exerlistLymphaticWorkout}
                updatelist={updatelistLymphaticWorkout}
                evaluate1={evaluate1LymphaticWorkout}
                evaluate2={evaluate2LymphaticWorkout}
                audiosource ={lymph_audiosource}
                met_time = {lymph_met_time}
            />
            }
        />
        <Route
            path="/ExercisePage/ShoulderWorkouts"
            element={
            <ExercisePage
                exerlist={exerlistShoulderWorkouts}
                updatelist={updatelistShoulderWorkouts}
                evaluate1={evaluate1ShoulderWorkouts}
                evaluate2={evaluate2ShoulderWorkouts}
                audiosource ={shoulder_audiosource}
                met_time = {shoulder_met_time}
            />
            }
        />

        <Route
            path="/ExercisePage/BackWorkout"
            element={
            <ExercisePage
                exerlist={exerlistBackWorkout}
                updatelist={updatelistBackWorkout}
                evaluate1={evaluate1BackWorkout}
                evaluate2={evaluate2BackWorkout}
                audiosource ={back_audiosource}
                met_time = {back_met_time}
            />
            }
        />
        <Route
            path="/ExercisePage/CoreWorkout"
            element={
            <ExercisePage
                exerlist={exerlistCoreWorkout}
                updatelist={updatelistCoreWorkout}
                evaluate1={evaluate1CoreWorkout}
                evaluate2={evaluate2CoreWorkout}
                audiosource ={core_audiosource}
                met_time = {core_met_time}
            /> 
            }
        />*/}
    </Routes>
  );
}

export default AppRoutes;
