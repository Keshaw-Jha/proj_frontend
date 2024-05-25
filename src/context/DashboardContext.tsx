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
      transports: ["polling"],
      reconnectionAttempts: 5, // Number of attempts before giving up
      reconnectionDelay: 1000, // Delay between attempts in milliseconds
    });

    socket.on("connect", () => {
      console.log("Socket connected");
    });

    socket.on("dashboardStats", (data: Stats) => {
      setStats(data);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    socket.on("connect_error", (err) => {
      console.error("Connection error:", err);
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
