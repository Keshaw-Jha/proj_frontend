import axios, { HttpStatusCode } from "axios";

const base_url = "http://localhost:5173";

export const submitForm = async (formData: FormData) => {
  try {
    console.log("inside ep-", formData);
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
