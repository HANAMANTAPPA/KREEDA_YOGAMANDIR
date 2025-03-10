import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import styles from '../stylesheets/HomeDashboard.module.css';
import logo from '../assets/symbol.png';
import {IconChartPie3} from '@tabler/icons-react';
import {IconClipboardText} from '@tabler/icons-react';
import {IconCalendar} from '@tabler/icons-react';
import {IconTrendingUp} from '@tabler/icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faArrowRightFromBracket, faMap } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useEffect } from 'react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Access current location

  useEffect(() => {
    console.log(`${process.env.REACT_APP_BASE_URL}`);
    
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/getUserdata`, {
          withCredentials: true,
        });
        // Handle response if necessary
        if (response.status === 200) {
          // Perform any required actions
        } else if (response.status === 203) {
          navigate("/login");
        }
      } catch (error) {
        console.log("error : == ", error);
        navigate("/login");
      }
    };
    fetchData();
  }, [navigate]);




  const handleLogout = async () => {
    try {
      const response=await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/logout`, {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        // console.log("loggedout"); 
        navigate("/login");
      }
    } catch (error) {
      console.log("Logout error: ", error);
    }
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles['logo-section']}>
        <a href="/">
          <img src={logo} alt="Logo" className={styles.logo2} />
        </a>
      </div>
      <hr className={`${styles.divider} d-none d-md-block`} />
      <ul className={styles['dashboard-options']}>
        <NavLink
          to="/dashboard"
          className={location.pathname === "/dashboard" ? styles.active : styles.navlink}
        >
          <li>
            <IconChartPie3 />
            <span>Dashboard</span>
          </li>
        </NavLink>
        <NavLink
          to="/dashboard/exercises"
          className={location.pathname === "/dashboard/exercises" ? styles.active : styles.navlink}
        >
          <li>
            <IconClipboardText />
            <span>Exercises</span>
          </li>
        </NavLink>
        <NavLink
          to="/dashboard/exerciseList"
          className={location.pathname === "/dashboard/exerciseList" ? styles.active : styles.navlink}
        >
          <li>
            <FontAwesomeIcon icon={faList} className={styles.iconStyle} />
            <span>Exercise List</span>
          </li>
        </NavLink>
        <NavLink
          to="/dashboard/exerciseCustomisation"
          className={location.pathname === "/dashboard/exerciseCustomisation" ? styles.active : styles.navlink}
        >
          <li>
            <IconCalendar />
            <span>Customize Exercises</span>
          </li>
        </NavLink>
        <NavLink
          to="/dashboard/ExerciseProgress"
          className={location.pathname === "/dashboard/ExerciseProgress" ? styles.active : styles.navlink}
        >
          <li>
            <FontAwesomeIcon icon={faMap} />
            <span>Progress</span>
          </li>
        </NavLink>
        <NavLink
          to="/dashboard/ai-assistance"
          className={location.pathname === "/dashboard/ai-assistance" ? styles.active : styles.navlink}
        >
          <li>
            <IconTrendingUp />
            <span>AI Assistance</span>
          </li>
        </NavLink>
      </ul>

      <div className={styles.logoutSec}>
        <hr className={`${styles['logout-divider']} d-none d-md-block`} />
        <div className={styles.logoutC} onClick={handleLogout}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} style={{marginRight: '2%' }} />
          <span className={`${styles.logoutT} d-none d-md-block`}>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
