import { Button, TextField } from "@mui/material";
import { useUserSettings } from "./hooks/useAdminSettings";
import HashLoader from "react-spinners/HashLoader";

const AdminSettings = () => {
  const { settingsFormState, formSchema, userSettingsStatus } =
    useUserSettings();
  return (
    <div className="h-full flex-1 overflow-y-auto">
      {userSettingsStatus === "loading" && (
        <div className="flex-1 h-full flex justify-center items-center">
          <HashLoader color="#ffc9af" />
        </div>
      )}
      {userSettingsStatus === "success" && (
        <div className="flex flex-row gap-5 m-2 lg:m-10 grow justify-center items-center bg-[#ffc9af] p-5 lg:p-10 rounded-lg">
          <form
            className=" flex flex-col lg:w-4/5 lg:gap-3 gap-1"
            id="form-edit"
            onSubmit={settingsFormState.handleSubmit}
            onReset={settingsFormState.handleReset}>
            <div className="flex flex-col lg:flex-row  gap-3 pb-3 my-2 w-full border-b-4 border-pink-700">
              <div className="w-full lg:w-2/3 flex items-center">
                <span className=" text-gray-600 font-semibold text-lg">
                  Maximum Occupancy Limit :
                  <br />
                  <p className="text-base font-normal">
                    the maximum number of users allowed at once
                  </p>
                </span>
              </div>
              <div className="w-full lg:w-1/3 flex lg:justify-end">
                <TextField
                  sx={{
                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                      {
                        display: "none",
                      },
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                  }}
                  type="number"
                  {...formSchema.maxEntry}
                  onChange={settingsFormState.handleChange}
                  color="secondary"
                  size="small"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row  gap-3 pb-3 my-2 w-full border-b-4 border-pink-700">
              <div className="w-full lg:w-2/3 flex items-center">
                <span className=" text-gray-600 font-semibold text-lg">
                  Maximum Stay Duration :
                  <br />
                  <p className="text-base font-normal">
                    the maximum duration a user allowed to stay (min's)
                  </p>
                </span>
              </div>
              <div className="w-full lg:w-1/3 flex lg:justify-end">
                <TextField
                  sx={{
                    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                      {
                        display: "none",
                      },
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                  }}
                  type="number"
                  {...formSchema.maxDuration}
                  onChange={settingsFormState.handleChange}
                  color="secondary"
                  size="small"
                />
              </div>
            </div>

            <div className="flex md:justify-end justify-center gap-3">
              <Button
                className="!w-[70px] !bg-gray-700 !text-white"
                color="error"
                type="reset"
                form="form-edit"
                size="small"
                variant="outlined">
                Reset
              </Button>
              <Button
                className="!w-[70px] !bg-[#A0153E]"
                type="submit"
                form="form-edit"
                size="small"
                variant="contained">
                Submit
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminSettings;
