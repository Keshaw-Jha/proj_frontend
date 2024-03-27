import { Button } from "@mui/material";
import { Scanner } from "@yudiel/react-qr-scanner";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function QrScanner() {
  return (
    <div className=" h-full justify-center items-center flex">
      <div className="grid grid-cols-2  p-8 rounded-lg bg-[#FF204E] w-2/3">
        <div className="w-[300px] bg-orange-200 h-[300px] rounded-lg">
          <Scanner
            enabled={false}
            onResult={(text, result) => console.log(text, result)}
            onError={(error) => console.log(error?.message)}
          />
          <div className="w-[300px]"></div>
        </div>
        <div className="flex flex-col bg-[#ffc9af] rounded-lg">
          <div className="grow justify-center items-center flex text-[#A0153E]">
            <AccountCircleIcon className="!text-9xl" />
          </div>
          <div className="item-center justify-center flex p-3">
            <Button
              variant="contained"
              //   className="!bg-[#A0153E]"
              size="small"
              disabled={true}>
              Allow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrScanner;
