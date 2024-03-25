import { useState } from "react";

import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { submitForm } from "../../../api/api-ep";
import {
  HomeFormData,
  getInitialFormValues,
} from "../../../model/HomeformData";

export const useFormpage = () => {
  const [isFormSubmitted, setFormSubmit] = useState(false);
  type FormValues = typeof initialFormValues;

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      const responseData = await submitForm(values as HomeFormData);
      await editFormData.setValues({ ...responseData.data });
      setFormSubmit(true);
    } catch (err) {
      console.log("error occured -", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = (
    _values: FormValues,
    { setValues }: FormikHelpers<FormValues>
  ) => {
    setValues(initialFormValues, false);
  };

  const initialFormValues = getInitialFormValues();

  const editFormData = useFormik({
    initialValues: initialFormValues,
    validationSchema: yup.object().shape({
      name: yup.string().required("Required"),
      email: yup.string().email("Invalid email").required("Required"),
      phone: yup.string().required("Required"),
      adhaar: yup
        .string()
        .length(12, "Must be exactly 12 digits")
        .required("Required"),
    }),
    onSubmit: handleSubmit,
    onReset: handleReset,
  });

  const formSchema = {
    name: {
      label: "Name",
      name: "name",
      value: editFormData.values.name,
      error: editFormData.errors.name ? true : false,
      helperText: editFormData.errors.name,
    },
    email: {
      label: "Email",
      name: "email",
      value: editFormData.values.email,
      error: editFormData.errors.email ? true : false,
      helperText: editFormData.errors.email,
    },
    phone: {
      label: "Phone",
      name: "phone",
      value: editFormData.values.phone,
      error: editFormData.errors.phone ? true : false,
      helperText: editFormData.errors.phone,
    },
    adhaar: {
      label: "Adhaar",
      name: "adhaar",
      value: editFormData.values.adhaar,
      error: editFormData.errors.adhaar ? true : false,
      helperText: editFormData.errors.adhaar,
    },
  };

  return {
    editFormData,
    formSchema,
    isFormSubmitted,
  };
};
