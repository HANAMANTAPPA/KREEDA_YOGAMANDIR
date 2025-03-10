import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ProfileSection from './profile-section/profileSection';
import ProfilePic from '../assets/profilePic.png';
import playIcon from '../assets/Play.png';
import styles from '../stylesheets/ExerciseList.module.css';

const ExerciseList = () => {
  const [userData, setUserData] = useState({
    userName: '',
    height: null,
    weight: null,
    profilePicture: ProfilePic,
  });
  const [workoutModules, setWorkoutModules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(18);
  const [hoveredWorkout, setHoveredWorkout] = useState(null);
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
            profilePicture: data.profilePic || ProfilePic,
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

 

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/workoutModules`,
          { withCredentials: true } // Ensures cookies are sent with the request
      );
      // Filter to only include 'Pitch' and 'Arms' workout modules
      // const filteredModules = response.data.filter((module) => 
      //   module.moduleName.toLowerCase().includes("pitch") || 
      //   module.moduleName.toLowerCase().includes("arms")
      // );

      // setWorkoutModules(filteredModules);
      
      // const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
      // const filteredModules = response.data.filter(module => {
      //   // Keep non-daily modules (regular workouts)
      //   if (!module.isDaily) return true;
        
      //   // For daily modules, only keep if it matches current day
      //   const moduleDay = module.moduleName; // Assuming format "Monday Workout" etc.
      //   return moduleDay === currentDay;
      // });
      
      // setWorkoutModules(filteredModules);
      // console.log(filteredModules)
      setWorkoutModules(response.data);
      } catch (error) {
        console.error('Error fetching workout modules:', error);
      }
    };
    fetchModules();

    const updateImagesPerPage = () => {
      const windowHeight = window.innerHeight * 0.6;
      const windowWidth = window.innerWidth * 0.7;
      const imageHeight = 120;
      const imageWidth = 300;
      const rowsPerPage = Math.floor(windowHeight / imageHeight);
      const colsPerRow = Math.floor(windowWidth / imageWidth);
      const totalImages = rowsPerPage * colsPerRow;
      setImagesPerPage(totalImages);
    };

    updateImagesPerPage();
    window.addEventListener('resize', updateImagesPerPage);
    return () => window.removeEventListener('resize', updateImagesPerPage);
  }, []);

  const handleImageClick = (module) => {
    navigate(`/ExercisePage/${module.moduleName}`);
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = workoutModules.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(workoutModules.length / imagesPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className={`container-fluid ${styles.exerciseListContainer}`} style={{ overflow: 'hidden' }}>
      <div className={styles.exerciseListContent}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className={styles.exerciseListHeading}>Exercises</h2>
            <p className={styles.exerciseListSubheading}>View all exercises and start your fitness journey today</p>
          </div>
          <ProfileSection userData={userData} setUserData={setUserData} /> {/* Updated User Section */}
        </div>

        <div className={styles.imageGrid} style={{ height: '100%', overflow: 'hidden' }}>
          {currentImages.map((module, index) => (
            <div
              key={index}
              className={styles.imageCard}
              onMouseEnter={() => setHoveredWorkout(module.moduleName)}
              onMouseLeave={() => setHoveredWorkout(null)}
            >
              <img src={module.moduleImage} alt={module.moduleName} className={styles.image} />
              <div className={styles.imageOverlay}>
                <div className={styles.imageInfo}>
                  <h5 className={styles.imageTitle}>{module.moduleName}</h5>
                  <p className={styles.imageSubtitle}>{module.exercises.length} Exercises</p>
                </div>
                <button
                  className={`${styles.startButton}`}
                  onClick={() => handleImageClick(module)}
                >
                  Start
                  <img src={playIcon} alt="Play" className={styles.playIcon} />
                </button>
              </div>

              {hoveredWorkout === module.moduleName && (
                <div
                  className={
                    index === 8
                      ? styles.exerciseListPopupLastImage
                      : index === 5 || index === 2 
                      ? styles.exerciseListPopupSpecial
                      : index < 3
                      ? styles.exerciseListPopupFirstThree
                      : styles.exerciseListPopup
                  }
                >
                  <ol>
                    {module.exercises.map((exercise, idx) => (
                      <li key={idx}>{exercise.name}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          <button
            className={`${styles.pageButton} ${styles.navButton}`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Previous
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            if (pageNum === 1 || pageNum === totalPages || (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)) {
              return (
                <button
                  key={pageNum}
                  className={`${styles.pageButton} ${currentPage === pageNum ? styles.activePage : ''}`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              );
            } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
              return <span key={pageNum} className={styles.ellipsis}>...</span>;
            }
            return null;
          })}

          <button
            className={`${styles.pageButton} ${styles.navButton}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
