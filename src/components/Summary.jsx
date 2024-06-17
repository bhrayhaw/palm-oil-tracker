import React from "react";
import { RiPlantLine, RiPlantFill, RiTimerLine } from "react-icons/ri";

const Summary = ({ yieldData, averageYield, totalYield }) => {
  const topYieldPeriods = yieldData
    .sort((a, b) => b.yield - a.yield)
    .slice(0, 2);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
        Summary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
            <RiPlantFill className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <p className="text-base md:text-lg font-semibold text-gray-600">
              Total Yield
            </p>
            <p className="text-sm md:text-base font-normal text-blue-800">
              {totalYield} tons
            </p>
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
            <RiPlantLine className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <p className="text-base md:text-lg font-semibold text-gray-600">
              Average Yield/Acre
            </p>
            <p className="text-sm md:text-base font-normal text-green-800">
              {averageYield.toFixed(2)} tons/acre
            </p>
          </div>
        </div>
        <div className="bg-yellow-50 rounded-lg p-4 flex items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
            <RiTimerLine className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <p className="text-base md:text-lg font-semibold text-gray-600">
              Top Yield Periods
            </p>
            {topYieldPeriods.map((yieldperiod, index) => (
              <p
                key={index}
                className="text-sm md:text-base font-normal text-yellow-800"
              >
                {yieldperiod.date}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
