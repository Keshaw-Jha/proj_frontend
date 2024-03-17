import { useState } from "react";

export default function useQrPage() {
  const [qrImg, setQrImg] = useState("");
  const getQr = async (formId: string) => {
    console.log(formId);
    setQrImg(formId);
  };
  return {
    getQr,
    qrImg,
  };
}
