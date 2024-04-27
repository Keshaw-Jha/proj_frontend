import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import DashboardPage from "../Dashboard";
import QrScanner from "../qr-scanner";
import AdminTable from "../AdminTable";
import useAdminHome from "./hooks/useAdminHome";
import HashLoader from "react-spinners/HashLoader";

function AdminHomePage() {
  const { loadingStatus, heading } = useAdminHome();

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#FF204E] overflow-scroll md:overflow-hidden">
      <div className="md:w-[264px] flex-shrink-0  text-[#FFFFFF]">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-1 m-2 md:overflow-x-auto z-10">
        <div className="bg-[#A0153E] p-4 font-bold text-xl text-[#FFFFFF] rounded-t-lg">
          {heading}
        </div>
        {loadingStatus === "loading" && (
          <div className="flex-1 h-full flex justify-center items-center bg-pink-950">
            <HashLoader color="#ffc9af" />
          </div>
        )}
        {loadingStatus === "success" && (
          <div className="flex-1 p-6 overflow-y-auto text-[#FFFFFF] bg-gradient-to-r from-[#5D0E41] to-[#00224D]">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/scan" element={<QrScanner />} />
              <Route path="/records" element={<AdminTable />} />
            </Routes>
          </div>
        )}
        <div
          className="p-4 text-[#FFFFFF] bg-[#00224D] rounded-b-lg  text-center"
          style={{ fontFamily: "'Pixelify Sans', sans-serif" }}>
          Made with ❤️ @Chengra-Mengra-2024
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
