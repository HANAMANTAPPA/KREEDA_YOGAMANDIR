import React from "react";
import styles from "../stylesheets/SuccessPopup.module.css";


const SuccessPopup = ({ onClose }) => (
  <div className={styles.popupOverlay}>
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        <div className={styles.popupIcon}>
          {/* Replace with SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#4CAF50"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2>Customization Successful!</h2>
        <p>Your request for customization has been successfully submitted.</p>
        <button className={styles.closeBtn} onClick={onClose}>
              Close   
        </button>
      </div>
    </div>
  </div>
);

export default SuccessPopup;