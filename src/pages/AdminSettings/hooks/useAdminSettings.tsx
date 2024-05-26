// import { useState } from "react";
import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
// import AppToast from "../../../utils/AppToast";
import { useQuery } from "react-query";
import { UserSettings } from "../../qr-scanner/hooks/useQrScanner";
import { getSettings, updateSettings } from "../../../api/admin-api-ep";
import { useEffect, useState } from "react";
import AppToast from "../../../utils/AppToast";

export interface SettingsObj {
  maxEntry: string | number;
  maxDuration: string | number;
}

export const useUserSettings = () => {
  const {
    data: userSettings,
    status: userSettingsStatus,
    error: userSettingsError,
    refetch,
  } = useQuery<UserSettings>(["/getSettings"], getSettings);

  const [initialSettingValues, setInitialSettingValues] = useState<SettingsObj>(
    {
      maxEntry: "",
      maxDuration: "",
    }
  );

  type FormValues = typeof initialSettingValues;

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await updateSettings(values);
      if (response) {
        refetch();
        AppToast.success("New settings Updated");
      }
    } catch (err) {
      console.log(err);
      AppToast.error("Settings updation failed");
    }
    setSubmitting(false);
  };

  const handleReset = (
    _values: FormValues,
    { setValues }: FormikHelpers<FormValues>
  ) => {
    setValues(initialSettingValues, false);
  };

  const settingsFormState = useFormik({
    enableReinitialize: true,
    initialValues: initialSettingValues,
    validationSchema: yup.object().shape({
      maxDuration: yup
        .number()
        .label("Max Duaration")
        .min(1, "Duration must be greater than 1 minutes")
        .max(30, "Duration must be less than 30 minutes")
        .required(),
      maxEntry: yup
        .number()
        .label("Max Entry")
        .min(2, "Entry Limit must be greater than 2 persons")
        .max(10, "Entry Limit must be less than 10 persons")
        .required(),
    }),
    onSubmit: handleSubmit,
    onReset: handleReset,
  });

  const formSchema = {
    maxDuration: {
      // label: "Max Duration",
      name: "maxDuration",
      value: settingsFormState.values.maxDuration,
      error: settingsFormState.errors.maxDuration ? true : false,
      helperText: settingsFormState.errors.maxDuration,
    },
    maxEntry: {
      // label: "Max Entry",
      name: "maxEntry",
      value: settingsFormState.values.maxEntry,
      error: settingsFormState.errors.maxEntry ? true : false,
      helperText: settingsFormState.errors.maxEntry,
    },
  };

  useEffect(() => {
    if (userSettings) {
      setInitialSettingValues({
        maxEntry: userSettings.maxEntry || "",
        maxDuration: userSettings.maxDuration || "",
      });
    }
  }, [userSettings]);

  return {
    userSettings,
    settingsFormState,
    formSchema,
    userSettingsStatus,
    userSettingsError,
  };
};
