import { useQuery } from "react-query";
import { getAllTickets } from "../../../api/admin-api-ep";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HomeFormData } from "../../../model/HomeformData";

const useAdminHome = () => {
  const { data: allTickets, status: loadingStatus } = useQuery<HomeFormData[]>(
    ["/getAllTickets"],
    getAllTickets
  );

  const [heading, setHeading] = useState("");

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (pathname === "/admin") {
      setHeading("Dashboard");
    } else if (pathname === "/admin/scan") {
      setHeading("Scan");
    } else if (pathname === "/admin/records") {
      setHeading("Records");
    } else if (pathname === "/admin/settings") {
      setHeading("Settings");
    }
  }, [pathname]);
  return { allTickets, loadingStatus, heading };
};

export default useAdminHome;
