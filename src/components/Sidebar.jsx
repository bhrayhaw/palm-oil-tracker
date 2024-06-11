import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiFileText,
  FiMap,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi"; // Import icons

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
    
  return (
    <div
      className={`bg-gray-800 text-white w-64 py-7 px-2 absolute inset-y-0 left-0 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition duration-200 ease-in-out flex flex-col justify-between`}
    >
      {/* Title and Close Button */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold md:hidden">Palm Oil Tracker</h1>
        <button
          className="text-gray-400 hover:text-white focus:outline-none md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <FiX className="text-xl" />
        </button>
      </div>
      <nav className="space-y-4">
        {/* Dashboard */}
        <Link
          to="/"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700" // Add flex for icon alignment
        >
          <FiHome className="mr-2 text-xl" />
          Dashboard
        </Link>

        {/* Report */}
        <Link
          to="/report"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          <FiFileText className="mr-2 text-xl" />
          Report
        </Link>

        {/* Map */}
        <Link
          to="/map"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          <FiMap className="mr-2 text-xl" />
          Map
        </Link>

        {/* Settings */}
        {/* Position at the bottom */}
        <Link
          to="/settings" // Or trigger a settings modal/dropdown
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
        >
          <FiSettings className="mr-2 text-xl" />
          Settings
        </Link>
      </nav>
      {/* Logout Button at the Very Bottom */}
      <div className="mt-auto">
        {" "}
        {/* Pushes the button to the bottom */}
        <button
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 w-full text-left"
          onClick={() => {
            /* Your logout logic here */
          }}
        >
          <FiLogOut className="mr-2 text-xl" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
