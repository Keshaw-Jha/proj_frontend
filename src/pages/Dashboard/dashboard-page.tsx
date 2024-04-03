import DashboardCard from "../../components/dashboardCard";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import GroupsIcon from "@mui/icons-material/Groups";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DoughnutChart from "./components/doughnut-chart";

const DashboardPage = () => {
  return (
    <div className="flex flex-col h-full gap-3">
      <div className="grid md:grid-cols-3 gap-10 ">
        <DashboardCard
          title={"Ticket's Booked"}
          value={"1.5k"}
          icon={<BookOnlineIcon className="!text-8xl" />}
        />
        <DashboardCard
          title={"Active Count"}
          value={"250"}
          icon={<GroupsIcon className="!text-8xl" />}
        />
        <DashboardCard
          title={"Total Exit's"}
          value={"750"}
          icon={<ExitToAppIcon className="!text-8xl" />}
        />
      </div>
      <div className="h-full flex flex-row">
        <div className="w-1/2">1</div>
        <div className="flex-1">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
