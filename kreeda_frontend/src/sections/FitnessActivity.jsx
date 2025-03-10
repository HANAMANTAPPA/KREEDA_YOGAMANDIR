import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import styles from '../stylesheets/FitnessActivity.module.css';

const FitnessActivity = () => {
  const [data, setData] = useState([]);
  const [viewMode, setViewMode] = useState('Weekly'); // Default to weekly view
  const [error, setError] = useState(null);
  // const convertToDateISO = (dateStr) => {
  //   const [day, month, year] = dateStr.split('/');
  //   return `${year}-${month}-${day}`;
  // };
  // Function to get weekday names from a date string
  const getWeekdayName = (dateString) => {
    const parsedDate = Date.parse(dateString);
    if (!isNaN(parsedDate)) {
      const date = new Date(parsedDate);
      const options = { weekday: 'long' };
      return date.toLocaleDateString('en-US', options); // This returns the full weekday name
    }
  };

  // Function to fetch data based on view mode (weekly or monthly)
  const fetchData = async () => {
    try {
      setError(null);
      let responseData;
  
      if (viewMode === 'Weekly') {
        const startOfWeek = new Date();
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
  
        const startFormatted = startOfWeek.toISOString().split('T')[0];
        const endFormatted = endOfWeek.toISOString().split('T')[0];
  
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/getProgressForDateRange?startDate=${startFormatted}&endDate=${endFormatted}`,
          { withCredentials: true }
        );
  
        responseData = response.data;
        // console.log(responseData);
   
        // If you want to add weekday names separately:
        responseData = responseData.map(item => ({
          ...item,
          weekday: getWeekdayName(item.day) // Add a separate "weekday" key for clarity
        }));
      } else if (viewMode === 'Monthly') {

        const now = new Date();

        // Get the start of the current month
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        // Get the end of the current month
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        const startFormatted = startOfMonth.toISOString().split('T')[0];
        const endFormatted = endOfMonth.toISOString().split('T')[0];

        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/api/getProgressForDateRange?startDate=${startFormatted}&endDate=${endFormatted}`,
          { withCredentials: true }
        );
        // console.log(response.data, "\n\n");
        
        // let element = [{}];
        // for (let index = 0; index < response.data; index++) {
        //   element.push({data: responseData.data[index] ,day: index});
        // };
        // responseData = element;
        responseData = response.data; 
      }
  
      setData(responseData || []);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch fitness data. Please try again later.');
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [viewMode]);

  return (
    <div className={styles.fitnessContainer}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Fitness Activity</h2>
        <div className={styles.buttonGroup1}>
          <button
            className={styles.toggleButton2}
            onClick={() => setViewMode('Monthly')}
            style={{ backgroundColor: viewMode === 'Monthly' ? '#7AC2A8' : 'transparent' }}
          >
            Monthly
          </button>
          <button
            className={styles.toggleButton2}
            onClick={() => setViewMode('Weekly')}
            style={{ backgroundColor: viewMode === 'Weekly' ? '#7AC2A8' : 'transparent' }}
          >
            Weekly
          </button>
        </div>
      </div>

      {/* Error message */}
      {error && <div className={styles.errorMessage}>{error}</div>}

      {/* Chart Section */}
      <div className="chart">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={data} margin={{ top: 0, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid horizontal={true} vertical={false} stroke="rgba(247, 247, 247, 0.10)" />
            <XAxis dataKey="weekday" stroke="#ffffff" />
            <YAxis domain={[0, 100]} ticks={[20, 40, 60, 80]} stroke="#ffffff" />
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }} // Custom style for tooltip
              labelStyle={{ color: '#fff' }} // Style for the label
              formatter={(value) => `${value}`} // Format to display performance as percentage
            />
            <Bar dataKey="performance" fill="#7AC2A8" barSize={12} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FitnessActivity;
