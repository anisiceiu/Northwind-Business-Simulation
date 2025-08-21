import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../../api/productApi";

export const useProducts = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],   // array form recommended
    queryFn: fetchProducts,
  });

  const addMutation = useMutation({
  mutationFn: createProduct, // <-- use "mutationFn" instead of first argument
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['products'] });
  },
});

  const updateMutation = useMutation({
  mutationFn: ({ id, product }) => updateProduct(id, product),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['products'] });
  },
});

  const deleteMutation = useMutation({
    mutationFn:({id})=>deleteProduct(id),
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['products']})
    }
  });

  return { data, isLoading, error, addMutation, updateMutation, deleteMutation };
};

