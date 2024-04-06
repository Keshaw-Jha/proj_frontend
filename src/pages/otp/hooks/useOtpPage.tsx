import { useState } from "react";

import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { HomeFormData } from "../../../model/HomeformData";
import { submitOtp } from "../../../api/api-ep";

export const useOtpPage = (formValue: HomeFormData) => {
  const [isOtpSubmitted, setOtpSubmit] = useState(false);

  type FormValues = typeof initialOtpValues;

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      const tempObj = { ticketId: formValue.ticketId, otp: values.otp };
      const response = await submitOtp(tempObj);
      if (response) {
        setOtpSubmit(true);
      } else throw new Error("otp verification fails");
    } catch (err) {
      console.log(err);
    }
    setSubmitting(false);
  };

  const handleReset = (
    _values: FormValues,
    { setValues }: FormikHelpers<FormValues>
  ) => {
    setValues(initialOtpValues, false);
  };

  const initialOtpValues = {
    ticketId: "",
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
  };
};
