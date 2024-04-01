import DashboardIcon from "@mui/icons-material/Dashboard";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { Link } from "react-router-dom";

// Define types for SidebarItem props
type SidebarItemProps = {
  icon?: JSX.Element;
  text: string;
  link: string;
  handleHeading: (heading: string) => boolean;
};

// Reusable SidebarItem component
function SidebarItem({ icon, text, link, handleHeading }: SidebarItemProps) {
  return (
    <li className="p-4 hover:bg-white hover:text-[#FF204E] flex items-center hover:text-lg hover:font-bold">
      {icon}
      <Link
        to={link}
        className="ml-2"
        onClick={() => {
          handleHeading(text);
        }}>
        {text}
      </Link>
    </li>
  );
}

interface SidebarProps {
  handleHeading: (heading: string) => boolean;
}

// Sidebar component
const Sidebar: React.FC<SidebarProps> = ({ handleHeading }) => {
  return (
    <aside
      id="sidebar"
      className="font-semibold h-full overflow-y-auto text-base">
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
          handleHeading={handleHeading}
        />
        <SidebarItem
          icon={<QrCodeScannerIcon />}
          text="Scan"
          link="/admin/scan"
          handleHeading={handleHeading}
        />
        <SidebarItem
          icon={<DescriptionRoundedIcon />}
          text="Records"
          link="/admin/records"
          handleHeading={handleHeading}
        />
      </ul>
    </aside>
  );
};

export default Sidebar;
