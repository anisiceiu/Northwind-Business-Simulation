import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../../api/productApi";

export const useProducts = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery(["products"], fetchProducts);

  const addMutation = useMutation(createProduct, {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });

  const updateMutation = useMutation(
    ({ id, product }) => updateProduct(id, product),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });

  return { data, isLoading, error, addMutation, updateMutation, deleteMutation };
};
