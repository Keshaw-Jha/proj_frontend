import OtpPage from "../otp";
import { useFormpage } from "./hooks/useFormpage";
import { Button, TextField } from "@mui/material";
const FormPage = () => {
  const { editFormData, formSchema, isFormSubmitted} = useFormpage();
  return !isFormSubmitted ? (
    <form
      className=" grid gap-3 min-w-full m-5 mb-0"
      id="form-edit"
      onSubmit={editFormData?.handleSubmit}
      onReset={editFormData?.handleReset}>
      <TextField {...formSchema.name} onChange={editFormData.handleChange} />

      <TextField {...formSchema.email} onChange={editFormData.handleChange} />

      <TextField {...formSchema.phone} onChange={editFormData.handleChange} />

      <TextField {...formSchema.adhaar} onChange={editFormData.handleChange} />

      <Button
        className="!mt-3 max-w-min justify-self-end"
        type="submit"
        form="form-edit"
        variant="contained">
        Submit
      </Button>
    </form>
  ) : (
    <OtpPage formValue={editFormData.values} />
  );
};

export default FormPage;
