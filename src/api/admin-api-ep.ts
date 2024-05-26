import { HttpStatusCode } from "axios";
import { QueryConst } from "./queryConsts";
import { DashboardStats } from "../model/HomeformData";
import { axiosWithAuth } from "./global-api";
import { SettingsObj } from "../pages/AdminSettings/hooks/useAdminSettings";

export const getAllTickets = async () => {
  try {
    const response = await axiosWithAuth.get(QueryConst.getAllTickets);
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

export const getSettings = async () => {
  try {
    const response = await axiosWithAuth.get(QueryConst.getSettings);
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

export const updateSettings = async (settingsObj: SettingsObj) => {
  try {
    const response = await axiosWithAuth.post(QueryConst.updateSettings, {
      data: settingsObj,
    });
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
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
    const response = await axiosWithAuth.get(QueryConst.getStats);
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
