import OtpPage from "../otp";
import { useFormpage } from "./hooks/useFormpage";
import { Button, TextField } from "@mui/material";
const FormPage = () => {
  const { editFormData, formSchema, isFormSubmitted } = useFormpage();
  return !isFormSubmitted ? (
    <div className="flex flex-row gap-5 m-10 grow">
      <img src="public\assets\Happy Bunch - Standing.png" alt="" />
      <form
        className=" grid gap-3 w-2/3"
        id="form-edit"
        onSubmit={editFormData?.handleSubmit}
        onReset={editFormData?.handleReset}>
        <TextField
          {...formSchema.name}
          className="rounded-md p-2"
          onChange={editFormData.handleChange}
        />

        <TextField {...formSchema.email} onChange={editFormData.handleChange} />

        <TextField {...formSchema.phone} onChange={editFormData.handleChange} />

        <TextField
          {...formSchema.adhaar}
          onChange={editFormData.handleChange}
        />

        <Button
          className="!mt-3 max-w-min justify-self-end !bg-[#A0153E]"
          type="submit"
          form="form-edit"
          variant="contained">
          Submit
        </Button>
      </form>
    </div>
  ) : (
    <OtpPage formValue={editFormData.values} />
  );
};

export default FormPage;
