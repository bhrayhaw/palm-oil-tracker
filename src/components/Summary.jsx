import React from "react";
import { RiPlantLine, RiPlantFill, RiTimerLine } from "react-icons/ri";

const Summary = ({ yieldData, averageYield, totalYield }) => {
  const topYieldPeriods = yieldData
    .sort((a, b) => b.yield - a.yield)
    .slice(0, 3);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:grid md:grid-cols-3 md:gap-6 space-y-3">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 col-span-3">
        Summary
      </h2>
      <div className="md:col-span-1">
        <div className="flex flex-col justify-between h-full bg-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-around">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
              <RiPlantFill className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Yield</p>
              <p className="text-xl font-semibold text-blue-800">
                {totalYield} tons
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-1">
        <div className="flex flex-col justify-between h-full bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-around">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <RiPlantLine className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Average Yield/Acre</p>
              <p className="text-xl font-semibold text-green-800">
                {averageYield.toFixed(2)} tons/acre
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-1">
        <div className="flex flex-col justify-between h-full bg-yellow-50 rounded-lg p-4">
          <div className="flex items-top justify-around">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
              <RiTimerLine className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Top Yield Periods</p>
              {topYieldPeriods.map((yieldperiod, index) => (
                <p
                  key={index}
                  className="text-xl font-semibold text-yellow-800"
                >
                  {yieldperiod.date}{" "}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
