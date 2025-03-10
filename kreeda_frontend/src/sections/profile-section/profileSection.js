import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import styles from './profile.module.css'; // Create a CSS file for styling the ProfileSection
import profilePic from '../../assets/profilePic.png';

const ProfileSection = ({ userData, setUserData }) => {
  console.log("userData", userData);
  
  const [isEditing, setIsEditing] = useState({
    userName: false,
    height: false,
    weight: false,
  });
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const profileDetailsRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Close profile details when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDetailsRef.current && !profileDetailsRef.current.contains(event.target)) {
        setShowProfileDetails(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSave = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/updateUserdata`,

        userData,
        {
            withCredentials: true, // Ensures cookies are sent with the request
        }
      );

      if (response.status === 200) {
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile.');
      }
    } catch (error) {
      console.error('Error updating profile', error);
      alert('An error occurred while updating the profile.');
    } finally {
      setIsEditing({
        userName: false,
        height: false,
        weight: false,
      });
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profilePic', file); // Field name should match the multer configuration
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/updateProfilePic`,
          formData,
          {
              withCredentials: true, // Ensures cookies are sent with the request
              headers: {
                  'Content-Type': 'multipart/form-data', // Ensure content type
              },
          }
        );

        if (response.status === 200) {
          setUserData((prevData) => ({
            ...prevData,
            profilePicture: URL.createObjectURL(file),
          }));
          alert('Profile picture updated successfully!');
        } else {
          alert('Failed to update profile picture.');
        }
      } catch (error) {
        console.error('Error updating profile picture', error.response ? error.response.data : error.message);
        alert('An error occurred while updating the profile picture.');
      }
    }
  };

  const toggleProfileDetails = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  const toggleEdit = (field) => {
    setIsEditing((prevEditing) => ({
      ...prevEditing,
      [field]: !prevEditing[field],
    }));
  };

  const isAnyFieldEditing = isEditing.userName || isEditing.height || isEditing.weight;

  return (
    <div>
      <div className={styles['profile-section']} onClick={toggleProfileDetails}>
        <img src={userData.profilePicture || profilePic} alt="Profile" className={styles['profile-pic']} />
        <span className={styles['user-name']}>{userData.userName || 'Loading...'}</span>
      </div>

      {showProfileDetails && (
        <div className={styles['profile-details']} ref={profileDetailsRef}>
          <div className={styles['profilePicture']}>
            <img src={userData.profilePicture} alt="Profile" className={styles['profile-pic']} />
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="profilePicInput"
              />
              <FontAwesomeIcon
                icon={faPenToSquare}
                onClick={() => document.getElementById('profilePicInput').click()}
                style={{ cursor: 'pointer', marginLeft: '10px', color: 'white' }}
              />
            </div>
          </div>
          <div className={styles['profileContent']}>
            <p>
              <div>
                <strong>Name:</strong>{' '}
                {isEditing.userName ? (
                  <input
                    type="text"
                    name="userName"
                    value={userData.userName}
                    onChange={handleInputChange}
                  />
                ) : (
                  userData.userName
                )}
              </div>
              <FontAwesomeIcon icon={faPenToSquare} onClick={() => toggleEdit('userName')} />
            </p>
            <p>
              <div>
                <strong>Height:</strong>{' '}
                {isEditing.height ? (
                  <input
                    type="number"
                    name="height"
                    value={userData.height}
                    onChange={handleInputChange}
                  />
                ) : (
                  `${userData.height} cm`
                )}
              </div>
              <FontAwesomeIcon icon={faPenToSquare} onClick={() => toggleEdit('height')} />
            </p>
            <p>
              <div>
                <strong>Weight:</strong>{' '}
                {isEditing.weight ? (
                  <input
                    type="number"
                    name="weight"
                    value={userData.weight}
                    onChange={handleInputChange}
                  />
                ) : (
                  `${userData.weight} kg`
                )}
              </div>
              <FontAwesomeIcon icon={faPenToSquare} onClick={() => toggleEdit('weight')} />
            </p>
          </div>

          {isAnyFieldEditing && (
            <button className={styles['saveButton']} onClick={handleSave}>
              Save
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
