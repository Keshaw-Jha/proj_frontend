import DashboardIcon from "@mui/icons-material/Dashboard";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Define types for SidebarItem props
type SidebarItemProps = {
  icon?: JSX.Element;
  text: string;
  link: string;
  isActive: boolean;
};

// Reusable SidebarItem component
function SidebarItem({ icon, text, link, isActive }: SidebarItemProps) {
  return (
    <li
      className={`p-4 flex items-center hover:text-lg hover:font-bold  ${
        isActive ? "bg-white text-[#FF204E] text-lg font-bold" : ""
      }`}>
      {icon}
      <Link to={link} className="ml-2">
        {text}
      </Link>
    </li>
  );
}

// Sidebar component
const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (pathname === "/admin") {
      setActiveLink("/admin");
    } else if (pathname === "/admin/scan") {
      setActiveLink("/admin/scan");
    } else if (pathname === "/admin/records") {
      setActiveLink("/admin/records");
    }
  }, [pathname]);

  return (
    <aside
      id="sidebar"
      className="font-semibold h-full overflow-y-auto text-base flex flex-col">
      <div className="w-full">
        <img
          src="/assets/pravesh_logo1.2.png"
          alt=""
          className="w-1/2 mx-auto mt-2"
        />
      </div>

      <ul className="sidebar-list flex flex-col mt-5">
        <SidebarItem
          icon={<DashboardIcon />}
          text="Dashboard"
          link="/admin"
          isActive={activeLink === "/admin"}
        />
        <SidebarItem
          icon={<QrCodeScannerIcon />}
          text="Scan"
          link="/admin/scan"
          isActive={activeLink === "/admin/scan"}
        />
        <SidebarItem
          icon={<DescriptionRoundedIcon />}
          text="Records"
          link="/admin/records"
          isActive={activeLink === "/admin/records"}
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
