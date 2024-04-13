import DashboardCard from "../../components/dashboardCard";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import GroupsIcon from "@mui/icons-material/Groups";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DoughnutChart from "./components/doughnut-chart";
import useDashboard from "./hooks/useDashboard";
import HashLoader from "react-spinners/HashLoader";

const DashboardPage = () => {
  const { dashboardStats, statsStatus } = useDashboard();

  return (
    <div className="h-full flex-1">
      {statsStatus === "error" && <div>error</div>}

      {statsStatus === "loading" && (
        <div className="flex-1 h-full flex justify-center items-center">
          <HashLoader color="#ffc9af" />
        </div>
      )}

      {statsStatus === "success" && statsStatus === "success" && (
        <div className="flex flex-col h-full gap-3">
          <div className="grid md:grid-cols-3 gap-10 ">
            <DashboardCard
              title={"Ticket's Booked"}
              value={dashboardStats?.ticketsBooked || "0"}
              icon={<BookOnlineIcon className="!text-8xl" />}
            />
            <DashboardCard
              title={"Active Count"}
              value={dashboardStats?.activeUsers || "0"}
              icon={<GroupsIcon className="!text-8xl" />}
            />
            <DashboardCard
              title={"Total Exit's"}
              value={dashboardStats?.totalExits || "0"}
              icon={<ExitToAppIcon className="!text-8xl" />}
            />
          </div>
          <div className="h-full flex flex-row">
            <div className="w-1/2">1</div>
            <div className="flex-1">
              <DoughnutChart dashboardStats={dashboardStats} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
