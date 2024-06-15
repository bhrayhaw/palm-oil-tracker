const KPIItem = ({ icon: Icon, title, value, color, textColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${color} ${textColor}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-grow">
          <Icon className="w-8 h-8 mr-2" />
          <div>
            <h3 className="text-sm md:text-lg font-semibold">{title}</h3>
            <p className="text-sm md:text-base font-normal">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPIItem;
