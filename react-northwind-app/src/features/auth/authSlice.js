import { createSlice } from "@reduxjs/toolkit";

// Load stored token and user from localStorage
const storedToken = localStorage.getItem("token");
const storedUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser,   // Restore user
    token: storedToken,
    isAuthenticated: !!storedToken,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.userDetails;
      state.isAuthenticated = true;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.userDetails)); // ✅ JSON.stringify
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
