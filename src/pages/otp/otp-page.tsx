import { HomeFormData } from "../../model/HomeformData";
import QrPage from "../qr";
import { useOtpPage } from "./hooks/useOtpPage";
import { Button, TextField } from "@mui/material";

interface props {
  formValue: HomeFormData;
}

const OtpPage = ({ formValue }: props) => {
  const { editOtpFormData, formSchema, isOtpSubmitted } = useOtpPage(formValue);
  return !isOtpSubmitted ? (
    <div className="flex flex-row gap-5 m-10 grow justify-center items-center">
      <img
        src="assets\Happy Bunch - Chat.png"
        alt=""
        className="hidden md:block"
      />
      <form
        className=" flex flex-col w-full gap-3"
        id="form-edit"
        onSubmit={editOtpFormData.handleSubmit}
        onReset={editOtpFormData?.handleReset}>
        <TextField
          {...formSchema.otp}
          onChange={editOtpFormData.handleChange}
          color="secondary"
        />
        <div className="flex md:justify-end justify-center">
          <Button
            className="w-min !bg-[#A0153E]"
            type="submit"
            form="form-edit"
            variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </div>
  ) : (
    <QrPage ticketId={formValue.ticketId} />
  );
};

export default OtpPage;
