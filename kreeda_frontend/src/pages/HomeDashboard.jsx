// import React from 'react';
// import '../stylesheets/HomeDashboard.css';
// import logo from '../assets/symbol.png';
// import symbol1 from '../assets/symbol1.png';
// import symbol2 from '../assets/symbol2.png';
// import symbol3 from '../assets/symbol3.png';
// import symbol4 from '../assets/symbol4.png';
// import symbol5 from '../assets/symbol5.png';
// import fireIcon from '../assets/Fire.png';
// import profilePic from '../assets/profilePic.png';
// import logoutIcon from '../assets/Logout.png'; // Import the logout icon
// import YourActivities from '../sections/YourActivities';
// import Leaderboard from '../sections/Leaderboard';
// import FitnessActivity from '../sections/FitnessActivity';
// import InfoBoxes from '../sections/InfoBoxes';

// const HomeDashboard = () => {
//   return (
//     <div className="home-dashboard">
//       {/* Dashboard Section */}
//       <div className="dashboard">
//         <div className="logo-section">
//           <img src={logo} alt="Logo" className="logo2" />
//           <h2 className="d-none d-md-block">Healthish</h2> {/* Hidden on small screens */}
//         </div>
//         <hr className="divider d-none d-md-block" /> {/* Hidden on small screens */}
//         <ul className="dashboard-options">
//           <li>
//             <img src={symbol1} alt="Dashboard" />
//             <span className="d-none d-md-block">Dashboard</span> {/* Hidden on small screens */}
//           </li>
//           <li>
//             <img src={symbol2} alt="Exercises" />
//             <span className="d-none d-md-block">Exercises</span> {/* Hidden on small screens */}
//           </li>
//           <li>
//             <img src={symbol3} alt="Customize Exercises" />
//             <span className="d-none d-md-block">Customize Exercises</span> {/* Hidden on small screens */}
//           </li>
//           <li>
//             <img src={symbol4} alt="Progress" />
//             <span className="d-none d-md-block">Progress</span> {/* Hidden on small screens */}
//           </li>
//           <li>
//             <img src={symbol5} alt="AI Assistance" />
//             <span className="d-none d-md-block">AI Assistance</span> {/* Hidden on small screens */}
//           </li>
//         </ul>

//         {/* Logout Section */}
//         <div className="logoutSec"> {/* Hidden on small screens */}
//           <hr className="logout-divider d-none d-md-block" />
//           <div className="logoutC">
//             <img src={logoutIcon} alt="Log Out" className="logoutI" />
//             <span className="logoutT d-none d-md-block">Log Out</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content Section */}
//       <div className="main-content">
//         <div className="activity-tracking">
//           <img src={fireIcon} alt="Fire Icon" className="fire-icon" />
//           <div className="activity-text">
//             <h1>Track your daily activity</h1>
//             <p>Check your daily fitness activities and maintain your Health.</p>
//           </div>
//           <div className="profile-section">
//             <img src={profilePic} alt="Profile" className="profile-pic" />
//             <span className="user-name">John Doe</span>
//           </div>
//         </div>

//         <YourActivities />

//         <div className="bottom-sections">
//           <div className="leaderboard-section">
//             <Leaderboard />
//           </div>
//           <div className="fitness-section">
//             <FitnessActivity />
//             <InfoBoxes />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeDashboard;