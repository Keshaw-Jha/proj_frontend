import axios, { HttpStatusCode } from "axios";
import { HomeFormData } from "../model/HomeformData";
import { base_url, queryConst } from "./queryConsts";

export const submitForm = async (formData: HomeFormData) => {
  try {
    const response = await axios.post(`${queryConst.submitForm}`, {
      data: formData,
    });
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const submitOtp = async (formData: HomeFormData) => {
  try {
    const response = await axios.post(`${base_url}${queryConst.submitOtp}`, {
      data: formData,
    });
    if (response.status === HttpStatusCode.Ok) return response.data;
  } catch (err) {
    console.log(`Err💥-`, err);
  }
};
