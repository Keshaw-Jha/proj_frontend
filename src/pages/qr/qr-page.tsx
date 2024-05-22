import { Button } from "@mui/material";
import { useQrPage } from "./hooks/useQrPage";

interface Props {
  ticketId: string;
}

const QrPage = ({ ticketId }: Props) => {
  const { qr, handleDownload, qrImageRef } = useQrPage(ticketId);
  return (
    qr !== "" && (
      <div className="flex flex-row  items-center justify-center gap-5 my-10 ">
        <img
          src="assets\Tutto Ricco - Making a Difference.png"
          alt=""
          className="hidden md:block"
        />
        <div className="flex flex-col gap-4 p-5">
          <img
            src={qr}
            alt="qr-code"
            className="qr-code img-thumbnail img-responsive sm:w-70"
            ref={qrImageRef}
          />
          <div>
            <Button
              variant="contained"
              className="w-min !bg-[#A0153E]"
              onClick={handleDownload}>
              Download
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default QrPage;
