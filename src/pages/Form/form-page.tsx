import OtpPage from "../otp";
import { useFormpage } from "./hooks/useFormpage";
import { Button, TextField } from "@mui/material";
const FormPage = () => {
  const { editFormData, formSchema, isFormSubmitted } = useFormpage();
  return !isFormSubmitted ? (
    <div className="flex flex-col lg:flex-row gap-5 m-10 grow ">
      <img
        src="assets\Happy Bunch - Standing.png"
        alt=""
        className=" order-2 md:order-1 hidden md:block"
      />
      <form
        className=" grid gap-3 md:w-2/3 order-1 md:order-2"
        id="form-edit"
        onSubmit={editFormData?.handleSubmit}
        onReset={editFormData?.handleReset}>
        <TextField
          {...formSchema.name}
          className="rounded-md p-2"
          onChange={editFormData.handleChange}
          color="secondary"
        />

        <TextField
          {...formSchema.email}
          onChange={editFormData.handleChange}
          color="secondary"
        />

        <TextField
          {...formSchema.phone}
          onChange={editFormData.handleChange}
          color="secondary"
        />

        <TextField
          {...formSchema.adhaar}
          onChange={editFormData.handleChange}
          color="secondary"
        />

        <Button
          className=" max-w-min justify-self-center md:justify-self-end !bg-[#A0153E]"
          type="submit"
          size="small"
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
