import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sliderbar";
import DashboardPage from "../Dashboard";
import QrScanner from "../qr-scanner";
import AdminTable from "../AdminTable";
import { useState } from "react";

function AdminHomePage() {
  const [heading, setHeading] = useState("Dashboard");

  const handleHeading = (heading: string) => {
    setHeading(heading);
    return true;
  };

  return (
    <div className="flex h-screen bg-[#FF204E]">
      <div className="w-[264px] flex-shrink-0  text-[#FFFFFF]">
        <Sidebar handleHeading={handleHeading} />
      </div>
      <div className="flex flex-col flex-1 m-2">
        <div className="bg-[#A0153E] p-4 font-bold text-xl text-[#FFFFFF] rounded-t-lg ">
          {heading}
        </div>
        <div className="flex-1 p-6 overflow-y-auto text-[#FFFFFF] bg-gradient-to-r from-[#5D0E41] to-[#00224D]">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/scan" element={<QrScanner />} />
            <Route path="/records" element={<AdminTable />} />
          </Routes>
        </div>
        <div className="p-4 text-[#FFFFFF] bg-[#00224D] rounded-b-lg text-center">
          Made with 💖 @Chengra-Mengra-2024
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
