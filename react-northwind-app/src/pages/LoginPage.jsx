import React from "react";
import LoginForm from "../features/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">🔐 Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
