import { Button } from "@mui/material";
import { useQrPage } from "./hooks/useQrPage";

interface Props {
  ticketId: string;
}

const QrPage = ({ ticketId }: Props) => {
  const { qr } = useQrPage(ticketId);
  return (
    qr !== "" && (
      <div className="flex flex-row  items-center justify-center gap-5 my-10 ">
        <img src="public\assets\Tutto Ricco - Making a Difference.png" alt="" />
        <div className="flex flex-col gap-3">
          <img
            src={qr}
            alt="qr-code"
            className="qr-code img-thumbnail img-responsive "
          />
          <div>
            <Button variant="contained" className="w-min !bg-[#A0153E]">
              Download
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default QrPage;
