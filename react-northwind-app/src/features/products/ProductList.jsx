import React from "react";
import { useProducts } from "./hooks/useProducts";

const ProductList = () => {
  const { data, isLoading, error, deleteMutation } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <ul className="space-y-2">
      {data?.map((p) => (
        <li
          key={p.id}
          className="flex justify-between items-center border p-2 rounded"
        >
          <span>{p.name}</span>
          <button
            onClick={() => deleteMutation.mutate(p.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
