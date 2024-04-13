import { useState, useEffect, useRef } from "react";
import { getQr } from "../../../api/api-ep";

export const useQrPage = (ticketId: string) => {
  const [qr, setQr] = useState("");
  const qrImageRef = useRef<HTMLImageElement | null>(null);

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

  const handleDownload = () => {
    if (qrImageRef.current) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const image = qrImageRef.current;

      canvas.width = image.width;
      canvas.height = image.height;
      ctx?.drawImage(image, 0, 0);

      const dataURL = canvas.toDataURL("image/png"); // Change format if needed
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "ticket.png"; // Adjust filename as needed

      // Simulate click to trigger download
      link.click();
    }
  };

  return {
    qr,
    qrImageRef,
    handleDownload,
  };
};
