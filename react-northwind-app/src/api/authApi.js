import axiosInstance from "./axiosInstance";

export const loginApi = async (credentials) => {
  const { data } = await axiosInstance.post("/account/login", credentials);
  return data;
};

export const refreshTokenApi = async () => {
  const { data } = await axiosInstance.post("/account/refresh");
  return data;
};
