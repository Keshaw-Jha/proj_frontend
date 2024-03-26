import DashboardIcon from "@mui/icons-material/Dashboard";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

// Define types for SidebarItem props
type SidebarItemProps = {
  icon?: JSX.Element;
  text: string;
  link: string;
};

// Reusable SidebarItem component
function SidebarItem({ icon, text, link }: SidebarItemProps) {
  return (
    <li className="p-4 hover:bg-white hover:text-[#FF204E] flex items-center hover:text-lg hover:font-bold">
      {icon}
      <a href={link} className="ml-2">
        {text}
      </a>
    </li>
  );
}

// Sidebar component
function Sidebar() {
  return (
    <aside id="sidebar" className="font-semibold h-full overflow-y-auto text-base">
      <div className="w-full">
        <img
          src="../../public/assets/pravesh_logo1.2.png"
          alt=""
          className="w-1/2 mx-auto mt-2"
        />
      </div>

      <ul className="sidebar-list flex flex-col mt-5">
        <SidebarItem
          icon={<DashboardIcon />}
          text="Dashboard"
          link="/admin/dashboard"
        />
        <SidebarItem
          icon={<QrCodeScannerIcon />}
          text="Scan"
          link="/admin/scan"
        />
        <SidebarItem text="Categories" link="" />
        <SidebarItem text="Customers" link="" />
        <SidebarItem text="Inventory" link="" />
        <SidebarItem text="Reports" link="" />
        <SidebarItem text="Setting" link="" />
      </ul>
    </aside>
  );
}

export default Sidebar;
