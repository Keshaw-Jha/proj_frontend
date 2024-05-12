import axios, { HttpStatusCode } from "axios";
import { QueryConst } from "./queryConsts";
import { LogIn, SignIn } from "../model/HomeformData";

export const signInUser = async (userData: SignIn) => {
  try {
    const response = await axios.post(QueryConst.signIn, userData);
    if (response.status === HttpStatusCode.Created) {
      localStorage.setItem("token", response.data.token);
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error submitting form :", error);
    throw error;
  }
};

export const logInUser = async (userData: LogIn) => {
  try {
    const response = await axios.post(QueryConst.logIn, userData);
    if (response.status === HttpStatusCode.Ok) {
      localStorage.setItem("token", response.data.token);
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error submitting form :", error);
    throw error;
  }
};
