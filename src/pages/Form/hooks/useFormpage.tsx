import { useState } from "react";

import { FormikHelpers, useFormik } from "formik";
import * as yup from "yup";
import { submitForm } from "../../../api/form-ep";

export const useFormpage = () => {
  const [isFormSubmitted, setFormSubmit] = useState(false);

  type FormValues = typeof initialFormValues;

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    const { name, phone, email, adhaar, formId, qr } = values;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("adhaar", adhaar);
    formData.append("formId", formId);
    formData.append("qr", qr);

    const response = await submitForm(formData);

    if (response.stat) console.log(response);
    console.log(values);
    setSubmitting(false);
    setFormSubmit(true);
  };

  const handleReset = (
    _values: FormValues,
    { setValues }: FormikHelpers<FormValues>
  ) => {
    setValues(initialFormValues, false);
  };

  const getInitialFormValues = () => ({
    name: "",
    phone: "",
    email: "",
    adhaar: "",
    formId: "",
    qr: "",
  });

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
