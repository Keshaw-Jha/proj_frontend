// import { useQrPage } from "./hooks/useQrPage";

// import { Button, TextField } from "@mui/material";
const QrPage = () => {
  // const { editOtpFormData, formSchema, isOtpSubmitted } = useQrPage();

  return (
    // <form
    //   className=" grid gap-2 w-1/3"
    //   id="form-edit"
    //   onSubmit={editOtpFormData?.handleSubmit}
    //   onReset={editOtpFormData?.handleReset}
    // >
    <div className="flex flex-col w-full items-center gap-3">
      <img
        src="https://chart.googleapis.com/chart?cht=qr&chl=Hello+World&chs=160x160&chld=L|0"
        className="qr-code img-thumbnail img-responsive w-1/4"
      />
      <button>this</button>
    </div>

    //   <Button
    //     className="mt-2"
    //     type="submit"
    //     form="form-edit"
    //     variant="contained"
    //   >
    //     Submit
    //   </Button>
    // </form>
  );
};

export default QrPage;
