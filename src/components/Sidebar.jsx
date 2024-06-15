import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiFileText,
  FiMap,
  FiSettings,
  FiLogOut,
  FiX,
} from "react-icons/fi";

const Sidebar = ({ sidebarOpen, setSidebarOpen, closeSidebar }) => {
  return (
    <div
      className={`bg-gray-800 text-white w-64 py-7 px-2 absolute inset-y-0 left-0 z-50 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition duration-200 ease-in-out flex flex-col justify-between`}
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold md:hidden">Palm Oil Tracker</h1>
        <button
          className="text-gray-400 hover:text-white focus:outline-none md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <FiX className="text-xl" />
        </button>
      </div>
      <nav className="space-y-4">
        <NavLink
          to="/"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `flex items-center py-2.5 px-4 rounded transition duration-200 ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FiHome className="mr-2 text-xl" />
          Dashboard
        </NavLink>

        <NavLink
          to="/report"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `flex items-center py-2.5 px-4 rounded transition duration-200 ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FiFileText className="mr-2 text-xl" />
          Report
        </NavLink>

        <NavLink
          to="/map"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `flex items-center py-2.5 px-4 rounded transition duration-200 ${
              isActive ? "bg-gray-700" : "hover:bg-gray-700"
            }`
          }
        >
          <FiMap className="mr-2 text-xl" />
          Map
        </NavLink>

        <NavLink
          to="/settings"
          onClick={closeSidebar}
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
      <div className="mt-auto">
        <button
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 w-full text-left"
          onClick={() => {
            // Your logout logic here
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
