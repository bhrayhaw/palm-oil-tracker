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

// Function to generate colors dynamically
const generateColor = (index) => {
  const hue = (index * 137.508) % 360; // Use the golden angle to generate colors
  return `hsl(${hue}, 70%, 50%)`;
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
                .replace(")", ", 0.2)"),
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
              .replace(")", ", 0.2)"),
            fill: true,
          },
        ];

  const chart = (
    <div>
      <select
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
        className="block mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="line">Line Chart</option>
        <option value="bar">Bar Chart</option>
      </select>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="block mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ml-2"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      {chartType === "line" ? (
        <Line data={{ labels, datasets }} />
      ) : (
        <Bar data={{ labels, datasets }} />
      )}
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
