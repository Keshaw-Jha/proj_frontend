import axios, { HttpStatusCode } from "axios";
import { HomeFormData } from "../model/HomeformData";

const base_url = "http://localhost:5173";

export const submitForm = async (formData: HomeFormData) => {
  try {
    const response = await axios.post(`${base_url}/submitForm`, {
      data: formData,
    });
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
