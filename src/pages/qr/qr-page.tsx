import { Button } from "@mui/material";
import useQrPage from "./hooks/useQrPage";
import { useEffect } from "react";

interface formId {
  formId: string;
}

const QrPage = ({ formId }: formId) => {
  const { getQr, qrImg } = useQrPage();
  getQr(formId);
  useEffect(() => {}, [qrImg]);

  return (
    qrImg !== "" && (
      <div className="flex flex-col w-full items-center gap-3 m-3">
        <img
          src="https://chart.googleapis.com/chart?cht=qr&chl=Hello+World&chs=160x160&chld=L|0"
          className="qr-code img-thumbnail img-responsive w-3/4"
        />
        <Button variant="contained">Download</Button>
      </div>
    )
  );
};

export default QrPage;
