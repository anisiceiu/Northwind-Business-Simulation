import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import Layout from "../component/Layout";
import ProductList from '../features/products/ProductList';
import ProductForm from "../features/products/ProductForm";

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<ProtectedRoute layout={Layout}   />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/add-product" element={<ProductForm />} />
        {/* <Route path="/department-grid" element={<DepartmentGrid />} />
        
        <Route path="/department/:id" element={<EditDepartmentForm />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="/employee-grid" element={<EmployeeGrid />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/employee/:id" element={<EditEmployeeForm />} /> */}
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
