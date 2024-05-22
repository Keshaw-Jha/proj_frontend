// import { useQuery } from "react-query";
// import { getDashboardStats } from "../../../api/admin-api-ep";
import { useSocket } from "../../../context/DashboardContext";
function useDashboard() {
  // const { data: dashboardStats, status: statsStatus } = useQuery(
  //   ["/getStats"],
  //   getDashboardStats
  // );

  const dashBoardStats = useSocket();

  return { dashBoardStats };
}

export default useDashboard;
