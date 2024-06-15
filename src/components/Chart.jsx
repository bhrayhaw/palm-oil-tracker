import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Function to generate vibrant colors
const generateColor = (index) => {
  const hue = (index * 137.508) % 360; // Use the golden angle to generate colors
  return `hsl(${hue}, 85%, 55%)`;
};

const Chart = ({ yieldData }) => {
  const [chartType, setChartType] = useState("bar");
  const [selectedYear, setSelectedYear] = useState("All");

  // Extract unique years from yieldData
  const years = [
    "All",
    ...Array.from(new Set(yieldData.map((item) => item.date.split("-")[0]))),
  ];

  // Extract unique months
  const labels = Array.from({ length: 12 }, (_, i) =>
    moment().month(i).format("MMMM")
  );

  // Filter data based on selected year
  const filteredData =
    selectedYear === "All"
      ? yieldData
      : yieldData.filter((item) => item.date.startsWith(selectedYear));

  // Sort filtered data by date
  filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Generate datasets
  const datasets =
    selectedYear === "All"
      ? years
          .filter((year) => year !== "All")
          .map((year, index) => {
            const yearData = yieldData.filter((item) =>
              item.date.startsWith(year)
            );
            const monthlyData = labels.map((month, monthIndex) => {
              const monthData = yearData.filter(
                (item) => moment(item.date).month() === monthIndex
              );
              const averageYield =
                monthData.reduce((sum, item) => sum + item.yield, 0) /
                (monthData.length || 1);
              return averageYield;
            });

            const color = generateColor(index);

            return {
              label: `Yield for ${year}`,
              data: monthlyData,
              borderColor: color,
              backgroundColor: color
                .replace("hsl", "hsla")
                .replace(")", ", 0.6)"), // Adjusted for better visibility
              fill: false,
            };
          })
      : [
          {
            label: `Yield for ${selectedYear}`,
            data: labels.map((month, monthIndex) => {
              const monthData = filteredData.filter(
                (item) => moment(item.date).month() === monthIndex
              );
              const averageYield =
                monthData.reduce((sum, item) => sum + item.yield, 0) /
                (monthData.length || 1);
              return averageYield;
            }),
            borderColor: generateColor(years.indexOf(selectedYear) - 1),
            backgroundColor: generateColor(years.indexOf(selectedYear) - 1)
              .replace("hsl", "hsla")
              .replace(")", ", 0.6)"), // Adjusted for better visibility
            fill: true,
          },
        ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Month",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Yield (tons)",
        },
      },
    },
  };

  const chart = (
    <div className="my-5">
      <div className="mb-8 flex justify-between">
        <select
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
        >
          <option value="line">Line Chart</option>
          <option value="bar">Bar Chart</option>
        </select>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="chart-container" style={{ height: "500px" }}>
        {chartType === "line" ? (
          <Line data={{ labels, datasets }} options={options} />
        ) : (
          <Bar data={{ labels, datasets }} options={options} />
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2 text-gray-800">Overview</h2>
      {chart}
    </div>
  );
};

export default Chart;
