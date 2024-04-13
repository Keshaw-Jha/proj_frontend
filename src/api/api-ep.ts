import axios, { HttpStatusCode } from "axios";
import { HomeFormData, otpData } from "../model/HomeformData";
import { QueryConst } from "./queryConsts";

export const submitForm = async (formData: HomeFormData) => {
  try {
    const response = await axios.post(QueryConst.submitForm, formData);
    if (response.status === HttpStatusCode.Created) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error submitting form :", error);
    throw error;
  }
};

export const submitOtp = async (formData: otpData) => {
  try {
    const response = await axios.post(`${QueryConst.submitOtp}`, {
      data: formData,
    });
    if (response.status === HttpStatusCode.Ok) return response.data;
  } catch (err) {
    console.log(`Err💥-`, err);
  }
};

export const getQr = async (ticketId: string) => {
  try {
    const qrCode = await axios.post(`${QueryConst.getQr}`, { data: ticketId });
    if (qrCode) {
      return qrCode.data.data.qr;
    } else {
      throw new Error("some error occured");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const handleEntryExit = async (ticketDetails: HomeFormData) => {
  try {
    const response = await axios.post(
      QueryConst.updateTicketStatus,
      ticketDetails
    );
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error updating Ticket  :", error);
    throw error;
  }
};
