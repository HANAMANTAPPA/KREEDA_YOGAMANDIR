import React, { useState, useRef, useEffect } from "react";
import styles from "../stylesheets/ExerciseCustomization.module.css";
import exercise1 from "../assets/Exercise1.jpg";
import exercise2 from "../assets/Exercise2.jpg";
import exercise3 from "../assets/Exercise3.jpg";
import exercise4 from "../assets/Exercise4.jpg";
import exercise5 from "../assets/Exercise5.jpg";
import exercise6 from "../assets/Exercise6.jpg";
import customize from "../assets/customizebutton.jpg";
import SuccessPopup from "./SuccessPopup";

const ExerciseCard = ({ image, title, sets, reps, time, onCustomizeClick }) => {
  const [showCustomize, setShowCustomize] = useState(false);
  const cardRef = useRef(null);

  const handleOptionsClick = () => {
    setShowCustomize((prev) => !prev); // Toggle Customize button visibility
  };

  // Close customize button when clicking outside of ExerciseCard
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setShowCustomize(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.exerciseCard} ref={cardRef}>
      <div className={styles.optionsBtn} onClick={handleOptionsClick}>
        ...
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.exerciseImage} />
      </div>
      <div className={styles.textContainer}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.textbody}>
          Body text for whatever you’d like to say. Add main takeaway points,
          quotes, anecdotes, or even a very very short story.
        </p>
        <p className={styles.details}>
          {sets} Sets | {reps} Reps | {time} mins
        </p>
        {showCustomize && (
          <button className={styles.newCustomizeBtn} onClick={onCustomizeClick}>
            Customize
          </button>
        )}
      </div>
    </div>
  );
};

const ExerciseCustomization = () => {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset the time to midnight (00:00:00)
    return today.getDate();
  });
  const [dates, setDates] = useState(
    Array.from({ length: 7 }, (_, i) => i + 1)
  );
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [repCount, setRepCount] = useState(7);
  const [totalSets, setTotalSets] = useState(2);
  const [showPopup, setShowPopup] = useState(false);

  const exercises = [
    { image: exercise1, title: "Exercise 1", sets: 2, reps: 7, time: 10 },
    { image: exercise2, title: "Exercise 2", sets: 2, reps: 7, time: 10 },
    { image: exercise3, title: "Exercise 3", sets: 2, reps: 7, time: 10 },
    { image: exercise4, title: "Exercise 4", sets: 2, reps: 7, time: 10 },
    { image: exercise5, title: "Exercise 5", sets: 2, reps: 7, time: 10 },
    { image: exercise6, title: "Exercise 6", sets: 2, reps: 7, time: 10 },
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handlePrevClick = () => {
    setDates(dates.map((date) => (date === 1 ? 31 : date - 1)));
  };
  
  const handleNextClick = () => {
    setDates(dates.map((date) => (date === 31 ? 1 : date + 1)));
  };
  

  const handleCustomizeClick = (exercise) => {
    setSelectedExercise(exercise);
    setRepCount(exercise.reps);
    setTotalSets(exercise.sets);
    setRightPanelOpen(true);
  };

  const closeRightPanel = () => {
    setRightPanelOpen(false);
  };

  const increaseReps = () => setRepCount(repCount + 1);
  const decreaseReps = () => setRepCount(repCount > 1 ? repCount - 1 : 1);

  const increaseSets = () => setTotalSets(totalSets + 1);
  const decreaseSets = () => setTotalSets(totalSets > 1 ? totalSets - 1 : 1);

  const handleRequestCustomization = () => {
    setShowPopup(true);
  };

  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  const rightPanelRef = useRef(null);
  const cardRef = useRef(null); // Added for closing the exercise card customize button

  // Close the right panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rightPanelRef.current && !rightPanelRef.current.contains(event.target)) {
        setRightPanelOpen(false);
      }

      if (cardRef.current && !cardRef.current.contains(event.target)) {
        const exerciseCards = document.querySelectorAll(`.${styles.exerciseCard}`);
        exerciseCards.forEach((card) => {
          const customizeButton = card.querySelector(`.${styles.newCustomizeBtn}`);
          if (customizeButton) {
            customizeButton.style.display = "none";
          }
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.returnbody}>
      <div className={styles.exerciseCustomization}>
        {/* Blurrable Content */}
        <div
          className={`${styles.mainContent} ${
            rightPanelOpen ? styles.blurredBehindRightPanel : ""
          }`}
        >
          <div className={styles.header}>
            <h2>
              {" "}
              {selectedDate} December 2024 | {daysOfWeek[(selectedDate - 4) % 7]}day
            </h2>
          </div>
          <div className={styles.dateSection}>
            <button className={styles.arrowBtn} onClick={handlePrevClick}>
              &lt;
            </button>
            <div className={styles.dayButtons}>
              {dates.map((date, index) => (
                <div
                  key={date}
                  className={`${styles.day} ${
                    selectedDate === date ? styles.selected : ""
                  }`}
                  onClick={() => handleDateClick(date)}
                >
                  <p className={styles.dayLabel}>{daysOfWeek[index]}</p>
                  <p className={styles.dateLabel}>{date}</p>
                  <p className={styles.exerciseCount}>(12)</p>
                </div>
              ))}
            </div>
            <button className={styles.arrowBtn} onClick={handleNextClick}>
              &gt;
            </button>
          </div>
          <div className={styles.activitiesHeader}>
            <h4>Your Activities for {selectedDate}th December</h4>
            <button className={styles.customizeBtn}>
              Customize
              <img
                src={customize}
                alt="Customize Icon"
                className={styles.customizeIcon}
              />
            </button>
          </div>
          <p className={styles.exerciseCounts}>7 Exercises • 1 Hour Workout</p>
          <div className={styles.exerciseList}>
            {exercises.map((exercise, index) => (
              <ExerciseCard
                key={index}
                image={exercise.image}
                title={exercise.title}
                sets={exercise.sets}
                reps={exercise.reps}
                time={exercise.time}
                onCustomizeClick={() => handleCustomizeClick(exercise)}
              />
            ))}
          </div>
        </div>

        {rightPanelOpen && (
          <div ref={rightPanelRef} className={styles.rightPanel}>
            <button className={styles.closeBtn} onClick={closeRightPanel}>
              &larr;
            </button>
            <div className={styles.imageContainer}>
              <img
                src={selectedExercise?.image}
                alt="Exercise"
                className={styles.exerciseImage}
              />
            </div>
            <div className={styles.exerciseDetails}>
              <h4 className={styles.exerciseTitle}>{selectedExercise?.title}</h4>
              <p className={styles.exerciseText}>
                Body text for whatever you'd like to say. Add main takeaway
                points, quotes, anecdotes, or even a very short story.
              </p>
              <p className={styles.exerciseInfo}>
                {totalSets} Sets | {repCount} Reps | {selectedExercise?.time} mins
              </p>

              <div className={styles.customizationSection}>
                <div className={styles.counter}>
                  <p>Rep Count:</p>
                  <div className={styles.incrementDecrementContainer}>
                    <button onClick={decreaseReps}>-</button>
                    <span>{repCount}</span>
                    <button onClick={increaseReps}>+</button>
                  </div>
                </div>

                <div className={styles.counter}>
                  <p>Total Sets:</p>
                  <div className={styles.incrementDecrementContainer}>
                    <button onClick={decreaseSets}>-</button>
                    <span>{totalSets}</span>
                    <button onClick={increaseSets}>+</button>
                  </div>
                </div>
              </div>
              <div className={styles.buttonsContainer}>
                <button
                  className={`${styles.button} ${styles.ReqcustomizeBtn}`}
                  onClick={handleRequestCustomization}
                >
                  Request Customisation
                </button>
                <button className={`${styles.button} ${styles.removeBtn}`}>
                  Remove Exercise
                </button>
              </div>
            </div>
          </div>
        )}
        {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default ExerciseCustomization;
