import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiFileText,
  FiMap,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi"; // Import icons

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center py-2.5 px-4 rounded transition duration-200 ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FiHome className="mr-2 text-xl" />
          Dashboard
        </NavLink>

        {/* Report */}
        <NavLink
          to="/report"
          className={({ isActive }) =>
            `flex items-center py-2.5 px-4 rounded transition duration-200 ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FiFileText className="mr-2 text-xl" />
          Report
        </NavLink>

        {/* Map */}
        <NavLink
          to="/map"
          className={({ isActive }) =>
            `flex items-center py-2.5 px-4 rounded transition duration-200 ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FiMap className="mr-2 text-xl" />
          Map
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center py-2.5 px-4 rounded transition duration-200 ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FiSettings className="mr-2 text-xl" />
          Settings
        </NavLink>
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
