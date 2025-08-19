import axiosInstance from "../api/axiosInstance";
import { useSelector } from "react-redux";

export const useAxiosAuth = () => {
  const { token } = useSelector((state) => state.auth);

  const authAxios = axiosInstance;
  if (token) {
    authAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return authAxios;
};
