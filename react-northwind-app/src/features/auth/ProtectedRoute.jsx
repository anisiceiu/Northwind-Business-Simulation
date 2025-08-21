import React from "react";
import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";
import Layout from "../../component/Layout";

const ProtectedRoute = ({ children }) => {
const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If Layout is provided, wrap Outlet with it
  return Layout ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Outlet />
  );
};

export default ProtectedRoute;
