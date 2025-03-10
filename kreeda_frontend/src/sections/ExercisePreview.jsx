import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import { images } from './ExercisesPage';  // Import images from ExercisePage
import styles from '../stylesheets/ExercisePreview.module.css';
import playIcon from '../assets/Play.png';
import ProfileSection from './profile-section/profileSection';
import profilePic from '../assets/profilePic.png';
import axios from 'axios';

const ExercisePreview = () => {
  const [userData, setUserData] = useState({
    userName: '',
    height: null,
    weight: null,
    profilePicture: profilePic,
  });
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(
         `${process.env.REACT_APP_BASE_URL}/api/getUserdata`,
          {
              withCredentials: true, // Ensures cookies are sent with the request
          }
        );

        if (response.status === 200) {
          const data = response.data[0];
          setUserData({
            userName: data.userName,
            height: data.height,
            weight: data.weight,
            profilePicture: data.profilePic || profilePic,
          });
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        navigate('/login');
      }
    }

    fetchUserData();
  }, [navigate]);
  
  const location = useLocation();
  const { title, description, src } = location.state;

  // Utility function to convert a string to camel case
  const toCamelCase = (str) =>
    str
      .split(' ')
      .map((word, index) =>
        index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join('');

  // Filter out the current exercise image to display related exercises
  const relatedExercises = images.filter(exercise => exercise.src !== src);

  // Handle click on related exercises to navigate to the specific exercise page
  const handleRelatedExerciseClick = (exercise) => {
    navigate(`/dashboard/exercises/preview/${toCamelCase(exercise.title)}`, { state: exercise });
  };

  // Handle click to navigate to the exercise details page
  const handleClick = () => {
    navigate(`/Exercise/${toCamelCase(title)}`); // Pass camel-cased title
  };

  return (
    <div className={`container-fluid ${styles.exercisePreviewContainer}`} style={{ overflow: 'hidden' }}>
      <div className={styles.previewContainer}>
        <div className={`d-flex justify-content-between align-items-center ${styles.exercisePreviewHeadingContainer}`}>
          <div>
            <h2 className={styles.exerciseHeading}>{title}</h2>
            <p className={styles.exerciseSubheading}>Start Exercising Now!</p>
          </div>
          <ProfileSection userData={userData} setUserData={setUserData} /> {/* Updated User Section */}
        </div>

        <div className={styles.content}>
          <div className={styles.descriptionContainer}>
            <h1 className={styles.mainTitle}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <button className="start-button" onClick={handleClick}> {/* Add onClick handler */}
              Start
              <img src={playIcon} alt="Play" className="play-icon" />
            </button>
          </div>
          <div className={styles.imageContainer}>
            <img src={src} alt={title} className={styles.exerciseImage} />
          </div>
        </div>

        <div className={styles.relatedExercises}>
          <h2>Other Related Exercises</h2>
          <div className={styles.exercisesScroll}>
            {relatedExercises.map((exercise, index) => (
              <div
                className={styles.exercise}
                key={index}
                onClick={() => handleRelatedExerciseClick(exercise)}
              >
                <img src={exercise.src} alt={`Exercise ${index + 1}`} className={styles.relatedExerciseImage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisePreview;
