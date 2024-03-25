import { useState, useEffect } from "react";
import { getQr } from "../../../api/api-ep";

export const useQrPage = (formId: string) => {
  const [qr, setQr] = useState("");

  useEffect(() => {
    const fetchQr = async () => {
      try {
        const resFormObject = await getQr(formId);

        setQr(resFormObject);
      } catch (error) {
        console.error("Error fetching QR code:", error);
      }
    };

    fetchQr(); // Call fetchQr when component mounts
  }, [formId]); // Run effect whenever formId changes

  return {
    qr,
  };
};
