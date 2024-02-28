import { useState } from "react";

import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";

export const useQrPage = () => {
  const [formId, setFormId] = useState("");

  type FormValues = typeof initialOtpValues;

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    console.log(formId);
    setSubmitting(false);
  };

  const handleReset = (
    _values: FormValues,
    { setValues }: FormikHelpers<FormValues>
  ) => {
    setValues(initialOtpValues, false);
  };

  const initialOtpValues = {
    formId: "",
    otp: "",
  };

  const editOtpFormData = useFormik({
    initialValues: initialOtpValues,
    validationSchema: yup.object().shape({
      otp: yup
        .string()
        .length(4, "Must be exactly 4 digits")
        .required("Required"),
    }),
    onSubmit: handleSubmit,
    onReset: handleReset,
  });

  const formSchema = {
    otp: {
      label: "OTP",
      name: "otp",
      value: editOtpFormData.values.otp,
      error: editOtpFormData.errors.otp ? true : false,
      helperText: editOtpFormData.errors.otp,
    },
  };

  return {
    editOtpFormData,
    formSchema,
    setFormId,
  };
};
