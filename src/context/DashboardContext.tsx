import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  PropsWithChildren,
} from "react";
import { io, Socket } from "socket.io-client";
import { base_url } from "../api/queryConsts";
// import { getToken } from "../api/global-api";

interface Stats {
  activeUsers: number;
  ticketsBooked: number;
  totalExits: number;
  unvisited: number;
}

export const DashboardContext = createContext<Stats | undefined>(undefined);
DashboardContext.displayName = "DashboardContext";

export const useSocket = (): Stats => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

interface DashboardProviderProps {}

export const DashboardProvider: React.FC<
  PropsWithChildren<DashboardProviderProps>
> = (props) => {
  const { children } = props;
  const [stats, setStats] = useState<Stats>({
    activeUsers: 0,
    ticketsBooked: 0,
    totalExits: 0,
    unvisited: 0,
  });

  useEffect(() => {
    const socket: Socket = io(base_url as string, {
      // withCredentials: true,
      // auth: {
      //   token: getToken(),
      // },
    }); // Adjust the URL if needed

    socket.on("dashboardStats", (data: Stats) => {
      setStats(data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <DashboardContext.Provider value={stats}>
      {children}
    </DashboardContext.Provider>
  );
};
