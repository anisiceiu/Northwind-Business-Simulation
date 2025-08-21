import axiosInstance from "./axiosInstance";

export const fetchSuppliers = async () => {
  const res = await axiosInstance.get("/suppliers");
  return res.data;
};