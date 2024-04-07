import axios, { HttpStatusCode } from "axios";
import { QueryConst } from "./queryConsts";
import { DashboardStats } from "../model/HomeformData";

export const getAllTickets = async () => {
  try {
    const response = await axios.get(QueryConst.getAllTickets);
    if (response.status === HttpStatusCode.Ok) {
      return response.data.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error submitting form :", error);
    throw error;
  }
};

export const getDashboardStats = async (): Promise<DashboardStats> => {
  try {
    const response = await axios.get(QueryConst.getStats);
    if (response.status === HttpStatusCode.Ok) {
      return response.data.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error("Error submitting form :", error);
    throw error;
  }
};
