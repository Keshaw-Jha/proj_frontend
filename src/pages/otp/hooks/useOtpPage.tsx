import { useState } from "react";

import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { HomeFormData } from "../../../model/HomeformData";

export const useOtpPage = (formValue: HomeFormData) => {
  const [isOtpSubmitted, setOtpSubmit] = useState(false);
  const [qrData, setQrData] = useState({});

  type FormValues = typeof initialOtpValues;

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    const otpObj = {
      formId: formValue.formId,
      otp: values.otp,
    };
    console.log(otpObj);
    setQrData(values);
    setSubmitting(false);
    setOtpSubmit(true);
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
    isOtpSubmitted,
    qrData,
  };
};
