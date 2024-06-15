import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopHeader from "./components/topHeader";
import records from "./dummyDataGhanaExtended.json";
import Footer from "./components/footer";
import Loading from "./components/Loading"; // Import the Loading component

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Report = lazy(() => import("./pages/Report"));
const Map = lazy(() => import("./pages/Map"));

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const totalArea = records.reduce((acc, record) => acc + record.size, 0);
  const oilExtractionRate = 85;

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-200">
      <Router>
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          closeSidebar={closeSidebar}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <main className="flex-1 overflow-y-auto p-4">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Dashboard
                      yieldData={records}
                      totalArea={totalArea}
                      oilExtractionRate={oilExtractionRate}
                      closeSidebar={closeSidebar}
                    />
                  }
                />
                <Route
                  path="/report"
                  element={
                    <Report records={records} closeSidebar={closeSidebar} />
                  }
                />
                <Route
                  path="/map"
                  element={
                    <Map records={records} closeSidebar={closeSidebar} />
                  }
                />
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
