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
    <form
      className=" grid gap-2 w-full"
      id="form-edit"
      onSubmit={editOtpFormData.handleSubmit}
      onReset={editOtpFormData?.handleReset}>
      <TextField {...formSchema.otp} onChange={editOtpFormData.handleChange} />
      <Button
        className="mt-2 max-w-min justify-self-end"
        type="submit"
        form="form-edit"
        variant="contained">
        Submit
      </Button>
    </form>
  ) : (
    <QrPage formId={formValue.formId} />
  );
};

export default OtpPage;
