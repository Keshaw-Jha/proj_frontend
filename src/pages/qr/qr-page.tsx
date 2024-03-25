import { Button } from "@mui/material";
import { useQrPage } from "./hooks/useQrPage";

interface Props {
  formId: string;
}

const QrPage = ({ formId }: Props) => {
  const { qr } = useQrPage(formId);
  return (
    qr !== "" && (
      <div className="flex flex-col w-full items-center gap-3 m-3">
        <img
          src={qr}
          alt="qr-code"
          className="qr-code img-thumbnail img-responsive w-3/4"
        />
        <Button variant="contained">Download</Button>
      </div>
    )
  );
};

export default QrPage;
