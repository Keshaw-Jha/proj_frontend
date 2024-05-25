import DashboardCard from "../../components/dashboardCard";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import GroupsIcon from "@mui/icons-material/Groups";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DoughnutChart from "./components/doughnut-chart";
import useDashboard from "./hooks/useDashboard";
import HashLoader from "react-spinners/HashLoader";
import LineChartComponent from "./components/line-chart";

const DashboardPage = () => {
  const { dashBoardStats } = useDashboard();

  return (
    <div className="h-full flex-1">
      {!dashBoardStats && (
        <div className="flex-1 h-full flex justify-center items-center">
          <HashLoader color="#ffc9af" />
        </div>
      )}

      {dashBoardStats && (
        <div className="flex flex-col h-full gap-10">
          <div className="grid lg:grid-cols-3 gap-10 ">
            <DashboardCard
              title={"Ticket's Booked"}
              value={dashBoardStats?.ticketsBooked || "0"}
              icon={<BookOnlineIcon className="!text-8xl" />}
            />
            <DashboardCard
              title={"Active Count"}
              value={dashBoardStats?.activeUsers || "0"}
              icon={<GroupsIcon className="!text-8xl" />}
            />
            <DashboardCard
              title={"Total Exit's"}
              value={dashBoardStats?.totalExits || "0"}
              icon={<ExitToAppIcon className="!text-8xl" />}
            />
          </div>
          <div className="h-full grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="min-h-[200px]">
              <LineChartComponent />
            </div>
            <div>
              <DoughnutChart dashBoardStats={dashBoardStats} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
