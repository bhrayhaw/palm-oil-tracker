import React from "react";
import Chart from "../components/Chart";
import Summary from "../components/Summary";
import KPIs from "../components/KPIs";

const Dashboard = ({ yieldData, totalArea, oilExtractionRate }) => {
  const averageYield = yieldData.reduce((a, b) => a + b.yield, 0) / totalArea;
  const totalYield = yieldData.reduce((a, b) => a + b.yield, 0).toFixed(2);
  const labels = yieldData.map((record) => record.date);
  const datasets = [
    {
      label: "Yield (tons)",
      data: yieldData.map((record) => record.yield),
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
  ];
  const highestYieldPeriod =
    yieldData.length > 0
      ? labels[
          yieldData.findIndex(
            (record) =>
              record.yield === Math.max(...yieldData.map((r) => r.yield))
          )
        ]
      : "No Data Available";

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
      <Chart yieldData={yieldData} labels={labels} datasets={datasets} />
      <Summary
        yieldData={yieldData}
        averageYield={averageYield}
        totalYield={totalYield}
        labels={labels}
        highestYieldPeriod={highestYieldPeriod}
      />
      <KPIs
        highestYieldPeriod={highestYieldPeriod}
        averageYield={averageYield}
        yieldData={yieldData}
        totalArea={totalArea}
        oilExtractionRate={oilExtractionRate}
        totalYield={totalYield}
      />
    </div>
  );
};

export default Dashboard;
