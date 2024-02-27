import OtpPage from "../otp";
import { useFormpage } from "./hooks/useFormpage";
import { Button, TextField } from "@mui/material";
const FormPage = () => {
  const { editFormData, formSchema, isFormSubmitted } = useFormpage();

  return !isFormSubmitted ? (
    <form
      className=" grid gap-2 w-full "
      id="form-edit"
      onSubmit={editFormData?.handleSubmit}
      onReset={editFormData?.handleReset}
    >
      <TextField {...formSchema.name} onChange={editFormData.handleChange} />

      <TextField {...formSchema.email} onChange={editFormData.handleChange} />

      <TextField {...formSchema.phone} onChange={editFormData.handleChange} />

      <TextField {...formSchema.adhaar} onChange={editFormData.handleChange} />

      <Button
        className="mt-2"
        type="submit"
        form="form-edit"
        variant="contained"
      >
        Submit
      </Button>
    </form>
  ) : (
    <OtpPage />
  );
};

export default FormPage;
