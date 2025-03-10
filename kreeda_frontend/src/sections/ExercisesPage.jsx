import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCheck, faFilter } from '@fortawesome/free-solid-svg-icons';
import ProfileSection from './profile-section/profileSection';
import ProfilePic from '../assets/profilePic.png';
import styles from '../stylesheets/ExercisePage.module.css';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas); // Add all solid icons

// Dynamically load all exercise info files
const exerciseContext = require.context('../AllExerciseInfo/ExerciseInfo', false, /\.js$/);
export const images = exerciseContext.keys().map((fileName) => {
  const exerciseData = exerciseContext(fileName).default; // Import the default export (array)

  return {
    title: exerciseData[0],              // Title from 0th index
    description: exerciseData[1],         // Description from 1st index
    src: exerciseData[3],                 // Image source from 3rd index
  };
});

// Utility function to convert title to camelCase
const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

const ExercisePage = () => {
  const [userData, setUserData] = useState({
    userName: '',
    height: null,
    weight: null,
    profilePicture: ProfilePic,
  });
  const [selectedFilter, setSelectedFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(18);
  const [showFilters, setShowFilters] = useState(false);
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
    const updateImagesPerPage = () => {
      const windowHeight = window.innerHeight * 0.6;
      const windowWidth = window.innerWidth * 0.7;
      const imageHeight = 120;
      const imageWidth = 120;
      const rowsPerPage = Math.floor(windowHeight / imageHeight);
      const colsPerRow = Math.floor(windowWidth / imageWidth);
      const totalImages = rowsPerPage * colsPerRow;
      setImagesPerPage(totalImages);
    };

    updateImagesPerPage();
    window.addEventListener('resize', updateImagesPerPage);

    return () => window.removeEventListener('resize', updateImagesPerPage);
  }, []);

  const handleImageClick = (image) => {
    const camelCasedTitle = toCamelCase(image.title); // Convert title to camelCase
    navigate(`/dashboard/exercises/preview/${camelCasedTitle}`, { state: image });
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(selectedFilter === filter ? '' : filter);
  };

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfFirstImage + imagesPerPage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className={`container-fluid ${styles.exercisePageContainer}`} style={{ overflow: 'hidden' }}>
      <div className={styles.exercisePageContent}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className={styles.exerciseHeading}>Exercises</h2>
            <p className={styles.exerciseSubheading}>
              View all exercises and start your fitness today
            </p>
          </div>
          {/* ProfileSection Component for User Info */}
          <ProfileSection userData={userData} setUserData={setUserData} />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className={styles.customSearchBar}>
            <input
              type="text"
              className={styles.customSearchInput}
              placeholder="Search"
              aria-label="Search"
            />
            <FontAwesomeIcon icon={faSearch} className={styles.customSearchIcon} />
          </div>

          <FontAwesomeIcon
            icon={faFilter}
            className={`${styles.filterIcon} ${showFilters ? styles.active : ''}`}
            onClick={toggleFilters}
          />

          <div className={`${styles.filterButtons} ${showFilters ? styles.show : ''}`}>
            {['New', 'Price Ascending', 'Price Descending', 'Rating'].map((filter) => (
              <button
                key={filter}
                type="button"
                className={`${styles.filterButton} ${selectedFilter === filter ? styles.selected : ''}`}
                onClick={() => handleFilterClick(filter)}
              >
                {selectedFilter === filter && (
                  <FontAwesomeIcon icon={faCheck} className={`me-2 ${styles.tickMark}`} />
                )}
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.imageGrid} style={{ height: '100%', overflow: 'hidden' }}>
          {currentImages.map((image, index) => (
            <div key={index} className={styles.imageCard} onClick={() => handleImageClick(image)}>
              <img src={image.src} alt={image.title} className={styles.image} />
              <h5 className={styles.imageTitle}>{image.title}</h5>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          <button
            className={`${styles.pageButton} ${styles.navButton}`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />&nbsp;&nbsp; Previous
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            if (
              pageNum === 1 ||
              pageNum === totalPages ||
              (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
            ) {
              return (
                <button
                  key={pageNum}
                  className={`${styles.pageButton} ${currentPage === pageNum ? styles.activePage : ''}`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              );
            } else if (
              pageNum === currentPage - 2 ||
              pageNum === currentPage + 2
            ) {
              return <span key={pageNum} className={styles.ellipsis}>...</span>;
            }
            return null;
          })}

          <button
            className={`${styles.pageButton} ${styles.navButton}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next&nbsp;&nbsp; <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExercisePage;
