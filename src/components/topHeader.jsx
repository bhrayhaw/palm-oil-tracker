import React from "react";
import { useLocation } from "react-router-dom";

const TopHeader = ({ setSidebarOpen, sidebarOpen }) => {
  const location = useLocation();

  const getHeaderText = () => {
    switch (location.pathname) {
      case "/":
        return "Welcome to Our Palm Oil Tracker App";
      case "/report":
        return "General Reports";
      case "/map":
        return "Map Overview";
      default:
        return "Welcome to Our Palm Oil Tracker App";
    }
  };

  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md">
      <button
        className="text-gray-500 focus:outline-none md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
        {getHeaderText()}
      </div>
    </header>
  );
};

export default TopHeader;
