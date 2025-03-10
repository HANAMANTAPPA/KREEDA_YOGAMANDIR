// DashboardPage.js 
import axios from 'axios';
import React, {useEffect, useState } from 'react'; 
import YourActivities from '../sections/YourActivities';
import Leaderoard from '../sections/Leaderboard';
import FitnessActivity from '../sections/FitnessActivity';
import InfoBoxes from '../sections/InfoBoxes';
import ProfileSection from './profile-section/profileSection';
import profilePic from '../assets/profilePic.png';
import fireIcon from '../assets/Fire.png';
import styles from '../stylesheets/HomeDashboard.module.css'; 
import { useNavigate } from 'react-router-dom';

import ProfilePic from '../assets/profilePic.png';


const DashboardPage = () => {
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
   

  return (
    <div className={styles['main-content']}>
      <div className={styles['activity-tracking']}>
        <img src={fireIcon} alt="Fire Icon" className={styles['fire-icon']} />
        <div className={styles['activity-text']}>
          <h1>Track your daily activity</h1>
          <p>Check your daily fitness activities and maintain your Health.</p>
        </div>

        {/* Use the ProfileSection component */}
        <ProfileSection userData={userData} setUserData={setUserData} />

      </div>

      <YourActivities />
      <div className={styles['bottom-sections']}>
        <div className={styles['leaderboard-section']}>
          <Leaderoard />
        </div>
        <div className={styles['fitness-section']}>
          <FitnessActivity />
          <InfoBoxes />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
