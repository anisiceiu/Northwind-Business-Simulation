import axiosInstance from "./axiosInstance";

export const fetchCategories = async () => {
  const { data } = await axiosInstance.get("/categories");
  return data;
};
