import { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/TopHeader";
import records from "./dummyDataGhanaExtended.json";
import Footer from "./components/Footer";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Report = lazy(() => import("./pages/Report"));
const Map = lazy(() => import("./pages/Map"));

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
