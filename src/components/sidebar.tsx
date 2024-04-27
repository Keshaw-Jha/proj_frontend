import DashboardIcon from "@mui/icons-material/Dashboard";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, IconButton, Tooltip } from "@mui/material";
import CustomParticles from "./particles";

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
      className={`p-4 flex items-center hover:text-lg hover:font-bold justify-center md:justify-start ${
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
  const navigate = useNavigate();

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
      className="font-semibold h-full overflow-y-auto text-base flex flex-col ">
      <CustomParticles admin={true} />
      <div className="relative mt-2 z-10">
        <div className="md:w-full w-1/3 flex items-center mx-auto">
          <img
            src="/assets/pravesh_logo1.2.png"
            alt=""
            className="md:w-1/2 mx-auto w-full"
          />
        </div>
        <Tooltip title="Home">
          <Button
            size="small"
            onClick={() => {
              navigate("/");
            }}
            className="!absolute top-4 right-5 md:top-0 md:right-0 w-min">
            <IconButton className="!bg-orange-500 !text-white hover:shadow-indigo-950 shadow-md">
              <HomeIcon />
            </IconButton>
          </Button>
        </Tooltip>
      </div>

      <ul className="sidebar-list flex flex-col mt-5 flex-1 z-10">
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
