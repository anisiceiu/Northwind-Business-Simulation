import { useState } from 'react'
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./features/auth/AuthProvider";
function App() {

  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  )
}

export default App
