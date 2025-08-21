import React, { useState, useEffect } from "react";
import { useQuery} from "@tanstack/react-query";
import { useProducts } from "./hooks/useProducts";
import { fetchSuppliers } from "../../api/supplierApi";
import { fetchCategories } from "../../api/categoryApi";
import {
  Box,
  Button,
  TextField,
  Grid,
  Typography,
  Paper,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Checkbox ,
  CircularProgress,
} from "@mui/material";
import axiosInstance from "../../api/axiosInstance"; 

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    supplierId: "",
    categoryId: "",
    quantityPerUnit: "",
    unitPrice: "",
    unitsInStock: "",
    unitsOnOrder: "",
    reorderLevel: "",
    discontinued: false,
  });

  const { addMutation } = useProducts();
  const [loading, setLoading] = useState(false);
  const [loadingDropdowns, setLoadingDropdowns] = useState(true);
// Load suppliers & categories on mount
const { data: suppliers, isLoading: suppliersLoading } = useQuery({
    queryKey: ["suppliers"],
    queryFn: fetchSuppliers,
  });

  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      discontinued: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addMutation.mutate(formData, {
      onSuccess: () => {
        alert("Product added successfully!");
        setFormData({
          productName: "",
          supplierId: "",
          categoryId: "",
          quantityPerUnit: "",
          unitPrice: "",
          unitsInStock: "",
          unitsOnOrder: "",
          reorderLevel: "",
          discontinued: false,
        });
      },
      onError: () => {
        alert("Failed to add product!");
      },
    });
  };

  if (suppliersLoading || categoriesLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
        <CircularProgress />
      </Box>
    );
  }

  return (
      <form onSubmit={handleSubmit}>
   <Grid container spacing={2}>
  <Grid size={{ xs: 12, sm: 6 }}>
    <TextField
      fullWidth
      required
      label="Product Name"
      name="productName"
      value={formData.productName}
      onChange={handleChange}
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6 }}>
    <FormControl fullWidth>
      <InputLabel>Supplier</InputLabel>
      <Select
        name="supplierId"
        label="Supplier"
        value={formData.supplierId}
        onChange={handleChange}
      >
        {suppliers.map((s) => (
          <MenuItem key={s.supplierId} value={s.supplierId}>
            {s.companyName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>

  <Grid size={{ xs: 12, sm: 6 }}>
    <FormControl fullWidth>
      <InputLabel>Category</InputLabel>
      <Select
        name="categoryId"
        label="Category"
        value={formData.categoryId}
        onChange={handleChange}
      >
        {categories.map((c) => (
          <MenuItem key={c.categoryId} value={c.categoryId}>
            {c.categoryName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>

  <Grid size={{ xs: 12, sm: 6 }}>
    <TextField
      fullWidth
      label="Quantity Per Unit"
      name="quantityPerUnit"
      value={formData.quantityPerUnit}
      onChange={handleChange}
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6 }}>
    <TextField
      fullWidth
      type="number"
      label="Unit Price"
      name="unitPrice"
      value={formData.unitPrice}
      onChange={handleChange}
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6 }}>
    <TextField
      fullWidth
      type="number"
      label="Units In Stock"
      name="unitsInStock"
      value={formData.unitsInStock}
      onChange={handleChange}
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6 }}>
    <TextField
      fullWidth
      type="number"
      label="Units On Order"
      name="unitsOnOrder"
      value={formData.unitsOnOrder}
      onChange={handleChange}
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6 }}>
    <TextField
      fullWidth
      type="number"
      label="Reorder Level"
      name="reorderLevel"
      value={formData.reorderLevel}
      onChange={handleChange}
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6 }}>
    <FormControlLabel
      control={
        <Checkbox
          checked={formData.discontinued}
          onChange={handleCheckboxChange}
        />
      }
      label="Discontinued"
    />
  </Grid>

  <Grid size={{ xs: 12, sm: 6 }}>
    <Button
      type="submit"
      variant="contained"
      disabled={loading}
      fullWidth
    >
      {loading ? "Saving..." : "Add Product"}
    </Button>
  </Grid>
</Grid>
</form>
  );
};

export default ProductForm;
