import React from "react";
import KPIItem from "./KPIItem"; // Assuming they're in the same directory
import {
  RiOilFill,
  RiExchangeLine,
  RiPlantFill,
  RiPlantLine,
  RiTimerLine,
} from "react-icons/ri";

const KPIs = ({
  averageYield,
  highestYieldPeriod,
  totalArea,
  oilExtractionRate,
  totalYield,
}) => {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 space-y-3 gap-6 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 col-span-3">
        Key Performance Indicators
      </h2>
      <KPIItem
        icon={RiPlantFill}
        title="Total Yield"
        value={`${totalYield} tons`}
        color="bg-blue-500"
        textColor="text-white"
      />
      <KPIItem
        icon={RiPlantLine}
        title="Avg. Yield/Acre"
        value={`${averageYield.toFixed(2)} tons/acre`}
        color="bg-green-500"
        textColor="text-white"
      />
      <KPIItem
        icon={RiTimerLine}
        title="Highest Yield"
        value={highestYieldPeriod}
        color="bg-yellow-500"
        textColor="text-white"
      />
      <KPIItem
        icon={RiOilFill}
        title="Oil Extraction"
        value={`${oilExtractionRate}%`}
        color="bg-purple-500"
        textColor="text-white"
      />
      <KPIItem
        icon={RiExchangeLine}
        title="Total Area"
        value={`${totalArea.toFixed(2)} acres`}
        color="bg-pink-500"
        textColor="text-white"
      />
    </div>
  );
};

export default KPIs;
