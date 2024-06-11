const TopHeader = ({setSidebarOpen, sidebarOpen}) => {
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
      <div className="text-xl font-bold">
        Welcome to Our Palm Oil Tracker App
      </div>
    </header>
  );
};

export default TopHeader;
