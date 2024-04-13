import { useState } from "react";
import { useQueryClient } from "react-query";
import { HomeFormData } from "../../../model/HomeformData";
import { handleEntryExit } from "../../../api/api-ep";

const useQrScanner = () => {
  const [ticketDetails, setTicketDetails] = useState({} as HomeFormData);
  const queryClient = useQueryClient();
  const ticketsData =
    queryClient.getQueryData<HomeFormData[]>("/getAllTickets");

  const dateString: string = new Date().toDateString();

  const handleQrScan = async (qrText: string) => {
    const scannedTicket: HomeFormData = await JSON.parse(qrText);
    const foundTicket = ticketsData?.find(
      (ticket) => ticket.ticketId === scannedTicket.ticketId
    );
    if (foundTicket) {
      if (foundTicket.entryAt) {
        setTicketDetails({ ...foundTicket, exitAt: new Date() });
      } else {
        setTicketDetails({ ...foundTicket, entryAt: new Date() });
      }
    }
  };

  const allowEntryExit = async () => {
      handleEntryExit(ticketDetails)
      .then((data) => {
        console.log("this", data);
      })
      .catch((err) => {
        console.log(err);
      });
    await queryClient.refetchQueries({
      queryKey: ["/getAllTickets"],
      exact: true,
    });
  };

  return { handleQrScan, ticketDetails, dateString, allowEntryExit };
};

export default useQrScanner;
