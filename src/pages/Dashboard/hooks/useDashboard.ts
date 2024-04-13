import { useQuery } from "react-query";
import { getDashboardStats } from "../../../api/admin-api-ep";

function useDashboard() {
  const { data: dashboardStats, status: statsStatus } = useQuery(
    ["/getStats"],
    getDashboardStats
  );

  return { dashboardStats, statsStatus };
}

export default useDashboard;
