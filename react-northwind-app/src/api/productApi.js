import axiosInstance from "./axiosInstance";

export const fetchProducts = async () => {
  const { data } = await axiosInstance.get("/products");
  return data;
};

export const fetchProductById = async (id) => {
  const { data } = await axiosInstance.get(`/products/${id}`);
  return data;
};

export const createProduct = async (product) => {
  const { data } = await axiosInstance.post("/products", product);
  return data;
};

export const updateProduct = async (id, product) => {
  const { data } = await axiosInstance.put(`/products/${id}`, product);
  return data;
};

export const deleteProduct = async (id) => {
  await axiosInstance.delete(`/products/${id}`);
  return id;
};
