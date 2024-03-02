import { Button } from "@mui/material";
const QrPage = () => {
  return (
    <div className="flex flex-col w-full items-center gap-3 m-3">
      <img
        src="https://chart.googleapis.com/chart?cht=qr&chl=Hello+World&chs=160x160&chld=L|0"
        className="qr-code img-thumbnail img-responsive w-3/4"
      />
      <Button variant="contained">Download</Button>
    </div>
  );
};

export default QrPage;
