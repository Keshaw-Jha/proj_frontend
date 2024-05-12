import axios from "axios";

export const axiosWithAuth = axios.create();

axiosWithAuth.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Authentication Token not found");
  return token;
};
