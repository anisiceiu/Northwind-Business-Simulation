import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../../../api/productApi";

export const useProduct = (id) => {
  return useQuery(["product", id], () => fetchProductById(id), {
    enabled: !!id,
  });
};
