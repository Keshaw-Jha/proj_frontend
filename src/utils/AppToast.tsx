// CustomToast.ts
import { toast, ToastOptions } from "react-toastify";

const defaultOptions: ToastOptions = { theme: "colored" };

const AppToast = {
  success: (message: string, options: ToastOptions = {}) => {
    toast.success(message, { ...defaultOptions, ...options });
  },
  error: (
    message: string = "Some error occured",
    options: ToastOptions = {}
  ) => {
    toast.error(message, { ...defaultOptions, ...options });
  },
  info: (message: string, options: ToastOptions = {}) => {
    toast.info(message, { ...defaultOptions, ...options });
  },
  warn: (message: string, options: ToastOptions = {}) => {
    toast.warn(message, { ...defaultOptions, ...options });
  },
  default: (message: string, options: ToastOptions = {}) => {
    toast(message, { ...defaultOptions, ...options });
  },
};

export default AppToast;
