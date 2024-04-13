import { useQueryClient } from "react-query";
import { HomeFormData } from "../../../model/HomeformData";

const useAdminTable = () => {
  const queryClient = useQueryClient();
  const ticketsData =
    queryClient.getQueryData<HomeFormData[]>("/getAllTickets");

  return { ticketsData };
};

export default useAdminTable;
