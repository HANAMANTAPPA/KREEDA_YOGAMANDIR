import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/YourActivities.css';
import playIcon from '../assets/Play.png';

const YourActivities = () => {
  const scrollRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);
  const [activities, setActivities] = useState([]); // State for activities
  const [loading, setLoading] = useState(true); // State for loading
  const [dayOfWeek, setDayOfWeek] = useState(''); // Store current day of the week
  const navigate = useNavigate();

  // Fetch data and dynamically import exercise files
  useEffect(() => {
    const fetchDailyActivities = async () => {
      try {
        const today = new Date();
        const day = today.toLocaleString('en-US', { weekday: 'long' }); // e.g., "Monday"
        setDayOfWeek(day); // Save the day for later use

        // Fetch the list of exercise names for the current day
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/exercises/${day}`,
          {
            withCredentials: true, // Include credentials for authentication
          }
        );

        const exerciseNames = response.data; // Array of exercise names
        // console.log(exerciseNames);
        // Dynamically import exercise modules
        const importedExercises = await Promise.all(
          exerciseNames.map((exercise) => import(`../AllExerciseInfo/ExerciseInfo/${exercise.name}`))
        );

        // Extract title and image for each exercise
        const activitiesData = importedExercises.map((exerciseModule) => ({
          title: exerciseModule.default[0], // Exercise title
          image: exerciseModule.default[3], // Exercise image
        }));

        setActivities(activitiesData);
        setLoading(false); // Data is loaded
      } catch (error) {
        console.error('Error fetching daily activities:', error);
      }
    };

    fetchDailyActivities();
  }, []);

  // Handle keyboard navigation for left and right arrow keys
  const handleKeyDown = (event) => {
    if (canScroll) {
      if (event.key === 'ArrowLeft') {
        scrollRef.current.scrollBy({
          left: -150,
          behavior: 'smooth',
        });
      } else if (event.key === 'ArrowRight') {
        scrollRef.current.scrollBy({
          left: 150,
          behavior: 'smooth',
        });
      }
    }
  };

  // Check if scrolling is needed based on container width and screen size
  const checkScroll = () => {
    if (scrollRef.current) {
      const scrollableWidth = scrollRef.current.scrollWidth;
      const containerWidth = scrollRef.current.clientWidth;
      setCanScroll(scrollableWidth > containerWidth);
    }
  };

  // Add event listeners for resize and keydown when component mounts
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', checkScroll);

    // Run the check once on component mount
    checkScroll();

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', checkScroll);
    };
  }, [canScroll]);

  return (
    <div className="your-activities">
      <h2>Your Activities for Today</h2>

      {loading ? (
        <div>Loading activities...</div>
      ) : (
        <div className="activities-scroll" ref={scrollRef}>
          {activities.map((activity, index) => (
            <div className="activity" key={index}>
              <img src={activity.image} alt={activity.title} />
              <div className="activity-title">{activity.title}</div>
            </div>
          ))}
        </div>
      )}

      <div className="activities-footer">
        <div className="activities-info">
          {activities.length} Exercises &nbsp; • 1 Hour Workout
        </div>
        <button
          className="start-button"
          onClick={() => navigate(`/ExercisePage/${dayOfWeek}`)} // Use the dayOfWeek state
        >
          Start
          <img src={playIcon} alt="Play" className="play-icon" />
        </button>
      </div>
    </div>
  );
};

export default YourActivities;
