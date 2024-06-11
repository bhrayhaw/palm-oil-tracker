import React from "react";

const KPIItem = ({ icon: Icon, title, value, color, textColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${color} ${textColor}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Icon className="w-8 h-8 mr-2" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default KPIItem;
    