import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import Map from "./pages/Map";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/topHeader";
import records from "./dummyDataGhanaExtended.json";
import Footer from "./components/footer";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Calculate total area and oil extraction rate (replace with your actual logic)
  const totalArea = records.reduce((acc, record) => acc + record.size, 0);
  const oilExtractionRate = 85;

  return (
    <div className="flex h-screen overflow-hidden bg-gray-200">
      <Router>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    yieldData={records}
                    totalArea={totalArea}
                    oilExtractionRate={oilExtractionRate}
                  />
                }
              />
              <Route path="/report" element={<Report records={records} />} />
              <Route path="/map" element={<Map records={records} />} />
            </Routes>
          </main>
        <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
