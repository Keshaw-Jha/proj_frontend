import { useQuery } from "react-query";
import { getAllTickets, getDashboardStats } from "../../../api/admin-api-ep";

function useDashboard() {
  const { data: allTickets, status: loadingStatus } = useQuery(
    ["/getAllTickets"],
    getAllTickets
  );
  const { data: dashboardStats, status: statsStatus } = useQuery(
    ["/getStats"],
    getDashboardStats
  );

  return { loadingStatus, dashboardStats, statsStatus, allTickets };
}

export default useDashboard;
