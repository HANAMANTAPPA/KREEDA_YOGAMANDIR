import React, { useEffect, useState } from 'react';
import styles from '../stylesheets/Leaderboard.module.css';
import exportIcon from '../assets/Export.png';
import goldMedal from '../assets/Gold.png';
import silverMedal from '../assets/Silver.png';
import bronzeMedal from '../assets/Bronze.png';
import axios from 'axios';

const Leaderboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null); // State to store logged-in user's profile

  const fetchData = async () => {
    try {
      setError(null);
      let responseData = [];
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/getWeeklyUserProfile`, {
        withCredentials: true
      });
      // console.log("Response from weekly user api: ",response);
      

      const loggedInUserResponse = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/getUserdata1`, {
        withCredentials: true
      });
      // console.log("loggedInUserResponse", loggedInUserResponse.data.userData);

      setLoggedInUser(loggedInUserResponse.data.userData);
      // console.log("loggedInUserResponse.data.userData", loggedInUserResponse.data.userData);
      // console.log("logged in user userid", loggedInUser.userID);

      responseData = Array.isArray(response.data) ? response.data : [response.data];
      // Sort the data based on points in descending order
      responseData.sort((a, b) => b.points - a.points);

      // Assign ranks based on sorted order
      responseData = responseData.map((student, index) => ({
        ...student,
        rank: index + 1
      }));

      // Move the logged-in user to the end if their rank is greater than 10
      const userIndex = responseData.findIndex(
        (student) => student.userID === loggedInUserResponse.data.userData.userID
      );

      if (userIndex !== -1 && responseData[userIndex].rank > 10) {
        const userEntry = responseData.splice(userIndex, 1)[0];
        responseData.push(userEntry);
      }

      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch exercise data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.leaderboard}>
      <div className={styles['leaderboard-header']}>
        <h2>Leaderboard</h2>
        <img src={exportIcon} alt="Export" className={styles['export-icon']} />
      </div>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles['student-list']}>
        {data.map((student) => (
          <div
            className={`${styles['student-item']} ${loggedInUser && student.userID === loggedInUser.userID
              ? styles['highlighted']
              : ''
              }`}
            key={student.userID}
          >
            <div className={styles['student-info']}>
              <div className={styles['student-initial']}>
                {student.userName ? student.userName.charAt(0).toUpperCase() : '?'}
              </div>
              <div className={styles['student-details']}>
                <div className={styles['student-name']}>{student.userName}</div>
                <div className={styles['student-points']}>
                  {student.points} Points
                </div>
              </div>
            </div>
            <div className={styles['student-rank']}>
              {student.rank === 1 && <img src={goldMedal} alt="Gold Medal" />}
              {student.rank === 2 && <img src={silverMedal} alt="Silver Medal" />}
              {student.rank === 3 && <img src={bronzeMedal} alt="Bronze Medal" />}
              {student.rank > 3 && <span>{student.rank}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
