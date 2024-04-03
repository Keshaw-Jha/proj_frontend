import { Button } from "@mui/material";
import { Scanner } from "@yudiel/react-qr-scanner";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";

function QrScanner() {
  const [ticketDetails, setTicketDetails] = useState("");

  const handleQrScan = (qrText: string) => {
    const qrObj = JSON.parse(qrText);
    setTicketDetails(qrObj);
  };

  return (
    <div className=" h-full justify-center items-center flex">
      <div className="grid grid-cols-7 rounded-lg bg-[#FF204E] w-[50%] h-[80%]">
        <div className=" col-span-4 m-8 flex flex-col justify-center items-center">
          <div className="w-[80%] p-3 m-3 rounded-lg bg-[#ffc9af] ">
            <Scanner
              enabled={true}
              onResult={(text) => {
                handleQrScan(text);
              }}
              onError={(error) => console.log(error?.message)}
            />
          </div>
          {/* <h3>hold Qr code inside the box</h3> */}
        </div>
        <div className="flex flex-col bg-[#ffc9af] rounded-lg col-span-3 my-8 mr-8">
          <div className="grow justify-center items-center flex text-[#A0153E]">
            {ticketDetails == "" ? (
              <AccountCircleIcon className="!text-9xl" />
            ) : (
              <div>{ticketDetails}</div>
            )}
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
