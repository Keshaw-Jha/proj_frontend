import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { HomeFormData } from "../../../model/HomeformData";
import { handleEntryExit } from "../../../api/api-ep";
import { useSocket } from "../../../context/DashboardContext";
import { getSettings } from "../../../api/admin-api-ep";

export interface UserSettings {
  [key: string]: number;
}

const useQrScanner = () => {
  const [ticketDetails, setTicketDetails] = useState({} as HomeFormData);
  const queryClient = useQueryClient();
  const [allowDisabled, setAllowDisabled] = useState<boolean>(false);
  const [duration, setDuration] = useState("");

  function formatTimeSpent(timeSpent: number) {
    const hours = Math.floor(timeSpent);
    const minutes = Math.round((timeSpent - hours) * 60);

    let formattedTime = "";
    if (hours > 0) {
      formattedTime += `${hours}hr`;
    }
    if (minutes > 0) {
      formattedTime += ` ${minutes}min`;
    }

    return formattedTime.trim() || "0min";
  }

  const { data: userSettings } = useQuery<UserSettings>(
    ["/getSettings"],
    getSettings
  );

  const ticketsData =
    queryClient.getQueryData<HomeFormData[]>("/getAllTickets");

  const dateString: string = new Date().toDateString();
  const dashBoardStats = useSocket();

  const handleQrScan = async (qrText: string) => {
    const scannedTicket: HomeFormData = await JSON.parse(qrText);

    const foundTicket = ticketsData?.find(
      (ticket) => ticket.ticketId === scannedTicket.ticketId
    );

    if (foundTicket) {
      if (foundTicket.entryAt) {
        const differenceInMs =
          new Date().getTime() - new Date(foundTicket.entryAt).getTime();
        const differenceInHours = differenceInMs / (1000 * 60 * 60);

        setDuration(formatTimeSpent(differenceInHours));
      }
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

  useEffect(() => {
    if ((userSettings?.maxEntry || 1) <= dashBoardStats.activeUsers)
      setAllowDisabled(true);
    else setAllowDisabled(false);
  }, [dashBoardStats, userSettings?.maxEntry]);

  return {
    handleQrScan,
    ticketDetails,
    dateString,
    allowEntryExit,
    allowDisabled,
    duration,
  };
};

export default useQrScanner;
