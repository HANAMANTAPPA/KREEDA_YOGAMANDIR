// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sections/Sidebar'; // Or Sidebar component
import styles from '../stylesheets/HomeDashboard.module.css'; // Import your styles

const DashboardLayout = () => {
  return (
    <div className={styles.homeDashboard}>
      <Sidebar /> {/* This is your sidebar/navbar that is always visible */}
      <main>
        <Outlet /> {/* This will render the component based on the route */}
      </main>
    </div>
  );
};

export default DashboardLayout;
