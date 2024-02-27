import { useHomepage } from "./hooks/useHomepage";
import { Button, DialogTitle, TextField } from "@mui/material";
const HomePage = () => {
  const { editFormData, modalWindow, formSchema } = useHomepage();

  return (
    <div className="flex justify-center">
      {modalWindow === "none" && (
        <form
          className=" flex flex-col w-1/2"
          id="form-edit"
          onSubmit={editFormData?.handleSubmit}
          onReset={editFormData?.handleReset}>
            <DialogTitle>Pravesh</DialogTitle>
          <div className="mt-2">
            <TextField
            className="sm:w-1/2"
              {...formSchema.name}
              onChange={editFormData.handleChange}
            />
          </div>
          <div className="mt-2">
            <TextField
              className="sm:w-1/2"
              {...formSchema.email}
              onChange={editFormData.handleChange}
            />
          </div>
          <div className="mt-2">
            <TextField
              className="sm:w-1/2"
              {...formSchema.phone}
              onChange={editFormData.handleChange}
            />
          </div>
          <div className="mt-2">
            <TextField
              className="sm:w-1/2"
              {...formSchema.adhaar}
              onChange={editFormData.handleChange}
            />
          </div>
          <div className="mt-2">
            <Button className="mt-2" type="submit" form="form-edit" variant="contained">
              Submit
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default HomePage;
