import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ExerciseChart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/get-exeProgress`
  )
      .then(response => {
        const data = response.data;

        // Prepare data for Chart.js
        const labels = data.map(item => new Date(item.date).toLocaleDateString());
        const repCounts = data.map(item => item.repCount);

        // Set the chart data
        setChartData({
          labels,
          datasets: [
            {
              label: "Repetitions Count",
              data: repCounts,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: true,
            }
          ]
        });

        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (loading) return <div>Loading chart data...</div>;

  return (
    <div>
      <h2>Exercise Progress</h2>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top"
            },
            title: {
              display: true,
              text: "Repetitions Over Time"
            }
          }
        }}
      />
    </div>
  );
};

export default ExerciseChart;
