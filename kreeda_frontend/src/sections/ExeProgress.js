import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import "../stylesheets/ExeProgress.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import caloriesicon from "../assets/Calories.png";
import performanceicon from "../assets/Performance.png";

const ExerciseDashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [dateRange, setDateRange] = useState({
    start: new Date(),
    end: new Date(),
  });
  const [filter, setFilter] = useState("Today");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showPerformance, setShowPerformance] = useState(true);
  const [showCalories, setShowCalories] = useState(true);
  const [tempStartDate, setTempStartDate] = useState(new Date());
  const [tempEndDate, setTempEndDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState("All");
  const [allExercises, setAllExercises] = useState(["All"]);
  const [error, setError] = useState(null);
  const [previousFilter, setPreviousFilter] = useState("Today");
  const [customApplied, setCustomApplied] = useState(false);
  const [customDateRange, setCustomDateRange] = useState("");
  const [dateError, setDateError] = useState(null);
  let exercises = [];

  const Dropdown = ({ options, selected, onSelect, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (e) => {
      e.stopPropagation();
      setIsOpen((prev) => !prev);
    };

    const handleSelect = (option, e) => {
      e.stopPropagation();
      onSelect(option);
      setIsOpen(false);
    };

    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (isOpen && !event.target.closest(".custom-dropdown")) {
          setIsOpen(false);
        }
      };

      document.addEventListener("click", handleOutsideClick);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, [isOpen]);

    return (
      <div className="custom-dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faClock} style={{ marginRight: "8px" }} />
          {selected || placeholder}{" "}
          {/* Show the selected value or placeholder */}
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option) => (
              <li
                key={option}
                onClick={(e) => handleSelect(option, e)}
                className="dropdown-item"
              >
                <label className="dropdown-label">
                  <input
                    type="radio"
                    name="dropdown-option"
                    checked={selected === option}
                    onChange={() => handleSelect(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        let responseData = [];

        const startFormatted = formatDate(dateRange.start);
        const endFormatted = formatDate(dateRange.end);

        // Fetch data based on the selected filter
        if (filter === "Select Date" || startFormatted === endFormatted) {
          const dailyResponse = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/getDailyProgress?date=${startFormatted}`,
            { withCredentials: true }
          );
          responseData = Array.isArray(dailyResponse.data)
            ? dailyResponse.data
            : [dailyResponse.data];
        } else if (filter === "This Week") {
          const weeklyResponse = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/getProgressForDateRange?startDate=${startFormatted}&endDate=${endFormatted}`,
            { withCredentials: true }
          );
          responseData = weeklyResponse.data || [];
          console.log(responseData)
        } else {
          const rangeResponse = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/api/getProgressForDateRange?startDate=${startFormatted}&endDate=${endFormatted}`,
            { withCredentials: true }
          );
          responseData = rangeResponse.data || [];
        }

        setData(responseData);
        setFilteredData(responseData);

        if (filter === "This Week") {
          // Flatten data and prepare it for chart rendering
          const flattenedData = responseData.flatMap((item) => {
            const dayData = {
              day: item.day,
              performance: 0,
              calories: 0,
              exercises: [], // Holds exercise data
            };
  
            if (item.exercises && Object.keys(item.exercises).length > 0) {
              Object.entries(item.exercises).forEach(([exerciseName, exerciseData]) => {
                // Add performance and calories for each exercise
                dayData.exercises.push({
                  exerciseName,
                  performance: exerciseData.performance,
                  calories: exerciseData.calories,
                });
  
                // Accumulate total performance and calories for the day
                dayData.performance += exerciseData.performance || 0;
                dayData.calories += exerciseData.calories || 0;
              });
            }
  
            return dayData; // Flattened data for each day
          });
  
          // Set filtered data as the flattened version
          setFilteredData(flattenedData);
        } else if (filter === "Select Date Range") {
          // Flatten data and prepare it for chart rendering
          const flattenedData = responseData.flatMap((item) => {
            const dayData = {
              day: item.day,
              performance: 0,
              calories: 0,
              exercises: [], // Holds exercise data
            };
  
            if (item.exercises && Object.keys(item.exercises).length > 0) {
              Object.entries(item.exercises).forEach(([exerciseName, exerciseData]) => {
                // Add performance and calories for each exercise
                dayData.exercises.push({
                  exerciseName,
                  performance: exerciseData.performance,
                  calories: exerciseData.calories,
                });
  
                // Accumulate total performance and calories for the day
                dayData.performance += exerciseData.performance || 0;
                dayData.calories += exerciseData.calories || 0;
              });
            }
  
            return dayData; // Flattened data for each day
          });
  
          // Set filtered data as the flattened version
          setFilteredData(flattenedData);
        } else {
          // Extract exercises dynamically from the data (if necessary)
          // You could process the data here for other filters
          exercises = new Set(
            responseData.flatMap((item) =>
              Array.isArray(item.exercises)
                ? item.exercises
                : [item.name || item.exeName || item.exercises]
            )
          );
        }
        setAllExercises(["All", ...exercises]);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch exercise data. Please try again later.");
      }
    };
  
    fetchData();
  }, [dateRange, filter]);

  useEffect(() => {
    if (selectedExercise === "All") {
      setFilteredData(data);
      console.log(filteredData);
    } else {
      setFilteredData(
        data.filter(
          (item) =>
            item.name === selectedExercise || item.exeName === selectedExercise
        )
      );
    }
  }, [selectedExercise, data]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setDateError(null);
    if (newFilter === "Select Date Range") {
      setTempStartDate(startDate);
      setTempEndDate(endDate);
      setShowDatePicker(true);
      setPreviousFilter(filter);
    } else if (newFilter === "Select Date") {
      setTempStartDate(startDate); // Default to the current start date
      setShowDatePicker(true); // Use the date picker for selecting a single day
      setPreviousFilter(filter);
    } else {
      setShowDatePicker(false);
      setCustomApplied(false);
      setPreviousFilter(newFilter);
      switch (newFilter) {
        case "Today":
          const today = new Date();
          setDateRange({ start: today, end: today });
          break;
        case "This Week":
          const startOfWeek = new Date();
          startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
          const endOfWeek = new Date(startOfWeek);
          endOfWeek.setDate(startOfWeek.getDate() + 6);
          setDateRange({ start: startOfWeek, end: endOfWeek });
          break;
        default:
          break;
      }
    }
  };

  const handleStartDateChange = (date) => setTempStartDate(date);
  const handleEndDateChange = (date) => setTempEndDate(date);

  const applyDateSelection = () => {
    if (filter === "Select Date") {
      setStartDate(tempStartDate);
      setEndDate(tempStartDate); // Both start and end will be the same
      setDateRange({ start: tempStartDate, end: tempStartDate });
      setCustomDateRange(tempStartDate.toLocaleDateString());
    } else {
      if (tempStartDate > tempEndDate) {
        setDateError("Start date cannot be greater than end date.");
        return;
      }
      setStartDate(tempStartDate);
      setEndDate(tempEndDate);
      const customDateStr = `${tempStartDate.toLocaleDateString()} - ${tempEndDate.toLocaleDateString()}`;
      setCustomDateRange(customDateStr);
      setDateRange({ start: tempStartDate, end: tempEndDate });
    }

    setShowDatePicker(false);
    setCustomApplied(true);
    setFilter(filter);
    setDateError(null);
  };

  const cancelDateSelection = () => {
    setShowDatePicker(false);
    setFilter(previousFilter);
  };
  const togglePerformance = () => setShowPerformance(!showPerformance);
  const toggleCalories = () => setShowCalories(!showCalories);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p>{`${label}`}</p>
          <p>{`Performance: ${payload[0]?.value || 0}`}</p>
          <p>{`Calories: ${payload[1]?.value || 0}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dashboard-container">
      <div className="main-content">
        <h2>
          Exercise Performance & Calories Burned
          <span className="selectedfilter">
            {filter === "Select Date"
              ? tempStartDate.toLocaleDateString() // Show the selected single date
              : filter === "Select Date Range"
              ? `${tempStartDate.toLocaleDateString()} - ${tempEndDate.toLocaleDateString()}` // Show the selected date range
              : filter}
          </span>
        </h2>
        {error && <div className="error-message">{error}</div>}
        <h3>Filters</h3>
        <div className="filters">
          <Dropdown
            options={["Today", "This Week", "Select Date", "Select Date Range"]}
            selected={
              filter === "Select Date"
                ? customDateRange || tempStartDate.toLocaleDateString() // Show the selected single date
                : filter === "Select Date Range"
                ? customDateRange
                : filter
            }
            onSelect={handleFilterChange}
            placeholder="Date"
          />
          <Dropdown
            options={allExercises}
            selected={selectedExercise}
            onSelect={setSelectedExercise}
            placeholder="Exercises"
          />
          <div className="date-range">
            <Calendar className="calendar-icon" />
            <span>
              {dateRange.start.toLocaleDateString()} --{" "}
              {dateRange.end.toLocaleDateString()}
            </span>
          </div>
        </div>
        {showDatePicker && (
          <div className="custom-date-picker-overlay">
            {filter === "Select Date" ? (
              // Render a single date picker for "Single Day"
              <DatePicker
                selected={tempStartDate}
                onChange={handleStartDateChange}
                inline
              />
            ) : (
              // Render two date pickers for "Custom" range selection
              <>
                <DatePicker
                  selected={tempStartDate}
                  onChange={handleStartDateChange}
                  inline
                />
                <DatePicker
                  selected={tempEndDate}
                  onChange={handleEndDateChange}
                  inline
                />
              </>
            )}
            {dateError && <div className="date-error-message">{dateError}</div>}
            <div className="date-picker-footer">
              {filter === "Select Date" ? (
                <span>{tempStartDate.toLocaleDateString()}</span>
              ) : (
                <>
                  <span>{`${tempStartDate.toLocaleDateString()}`}</span>-
                  <span>{`${tempEndDate.toLocaleDateString()}`}</span>
                </>
              )}
              <button className="cancel" onClick={cancelDateSelection}>
                Cancel
              </button>
              <button className="apply" onClick={applyDateSelection}>
                Apply
              </button>
            </div>
          </div>
        )}

        <ResponsiveContainer width="100%" height="65%">
          {filteredData && filteredData.length > 0 ? (
            <ComposedChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey={filter === "This Week" || filter === "Select Date Range" ? "day" : "exeName"}
                tick={{ fill: "#fff" }}
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                tick={{ fill: "#fff" }}
              />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip content={<CustomTooltip />} />
              {showPerformance && (
                <Bar
                  yAxisId="left"
                  dataKey={filter === "This Week" || filter === "Select Date Range" ? "performance" : "repCount"}
                  fill="#8884d8"
                  name="Performance"
                  barSize={20}
                />
              )}
              {showCalories && (
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey={filter === "This Week" || filter === "Select Date Range" ? "calories" : "caloriesburnt"}
                  stroke="#82ca9d"
                  name="Calories"
                  activeDot={{ r: 8 }}
                />
              )}
            </ComposedChart>
          ) : (
            <h2>
              <center>No exercise data available for this period!</center>
            </h2>
          )}
        </ResponsiveContainer>
        <div className="toggle-buttons">
          <div
            onClick={togglePerformance}
            className={`toggle-button performance ${
              showPerformance ? "active" : ""
            }`}
          >
            <img src={caloriesicon} alt="Performance" />
            <span className="perftxt">Performance</span>
          </div>
          <div
            onClick={toggleCalories}
            className={`toggle-button calories ${showCalories ? "active" : ""}`}
          >
            <img src={performanceicon} alt="Calories Burnt" />
            <span className="caltxt">Calories Burnt</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDashboard;
