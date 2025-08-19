import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "./authSlice";
import { refreshTokenApi } from "../../api/authApi";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await refreshTokenApi();
        if (data?.token) {
          dispatch(loginSuccess(data));
        } else {
          dispatch(logout());
        }
      } catch {
        dispatch(logout());
      }
    };

    checkAuth();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthProvider;
