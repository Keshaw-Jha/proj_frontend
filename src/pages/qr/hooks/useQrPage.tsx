import { useState, useEffect } from "react";
import { getQr } from "../../../api/api-ep";

export const useQrPage = (ticketId: string) => {
  const [qr, setQr] = useState("");

  useEffect(() => {
    const fetchQr = async () => {
      try {
        const resFormObject = await getQr(ticketId);

        setQr(resFormObject);
      } catch (error) {
        console.error("Error fetching QR code:", error);
      }
    };

    fetchQr(); // Call fetchQr when component mounts
  }, [ticketId]); // Run effect whenever ticketId changes

  return {
    qr,
  };
};
