import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sliderbar";
import DashboardPage from "../Dashboard";

function AdminHomePage() {
  return (
    <div className="flex h-screen text-white">
      <div className="bg-teal-900 w-[264px] flex-shrink-0 p-5">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1">
        <div className="bg-gray-800 p-4 font-bold text-xl">Dashboard</div>
        <div className="bg-slate-900 flex-1 p-5 overflow-y-auto">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="*" element={<DashboardPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
