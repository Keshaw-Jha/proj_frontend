import DashboardIcon from "@mui/icons-material/Dashboard";

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="text-3xl">PRAVESH</div>
      </div>

      <ul className="sidebar-list flex flex-col gap-4 mt-5">
        <li className="gap-2 flex flex-row">
          <DashboardIcon />
          <a href="/admin/dashboard">Dashboard</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Products</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Categories</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Customers</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Inventory</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Reports</a>
        </li>
        <li className="sidebar-list-item">
          <a href="">Setting</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
