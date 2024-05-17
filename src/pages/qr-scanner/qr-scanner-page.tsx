import { Button } from "@mui/material";
import { Scanner } from "@yudiel/react-qr-scanner";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import useQrScanner from "./hooks/useQrScanner";
import { convertUtcToIst } from "../../components/common-functions";

function QrScanner() {
  const { handleQrScan, ticketDetails, dateString, allowEntryExit } =
    useQrScanner();

  return (
    <div className=" h-full justify-center items-center flex">
      <div className="grid lg:grid-cols-7 sm:grid-rows-2 lg:grid-rows-1 w-full   rounded-lg bg-[#FF204E] lg:min-w-[700px] lg:w-fit lg:h-[80%] h-full">
        <div className="lg:col-span-4 lg:m-8 flex flex-col justify-center items-center">
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
        <div className="flex flex-col bg-[#ffc9af] rounded-lg lg:col-span-3 my-8 lg:mr-8 mx-8">
          <div className="grow flex text-[#A0153E]">
            {!ticketDetails.name ? (
              <div className=" mx-auto items-center flex ">
                <AccountCircleIcon className="!text-6xl lg:!text-9xl" />
              </div>
            ) : (
              <div className="flex flex-col gap-3 h-min text-white my-auto rounded-lg p-6 bg-[#A0153E] mx-2 shadow-2xl shadow-red-400">
                <span className="text-3xl font-bold">{ticketDetails.name}</span>
                <span className="text-2xl font-bold ">
                  +91 {ticketDetails?.phone}
                </span>
                <div className="flex flex-row items-center gap-3">
                  {ticketDetails.entryAt && (
                    <span className="text-xl font-bold ">
                      {convertUtcToIst(ticketDetails.entryAt)}
                    </span>
                  )}

                  <span className="text-5xl  shadow-2xl">&#8594;</span>
                  {ticketDetails.exitAt && (
                    <span className="text-xl font-bold ">
                      {convertUtcToIst(ticketDetails.exitAt)}
                    </span>
                  )}
                </div>
                <span className="text-xl font-bold ">{dateString}</span>
                <span className="text-xl font-bold ">Time Spent : 2hrs</span>
              </div>
            )}
          </div>
          <div className="item-center justify-center flex p-3 gap-2 flex-row ">
            <Button
              variant="contained"
              className="!bg-[#A0153E] p-4 disabled:!bg-gray-400 !text-white"
              onClick={allowEntryExit}
              size="small"
              disabled={!ticketDetails.name}
            >
              Allow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrScanner;
