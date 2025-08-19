import React, { useState } from "react";
import { useProducts } from "./hooks/useProducts";

const ProductForm = () => {
  const { addMutation } = useProducts();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMutation.mutate({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mt-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New Product"
        className="border p-2 flex-1 rounded"
      />
      <button type="submit" className="bg-green-600 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
};

export default ProductForm;
