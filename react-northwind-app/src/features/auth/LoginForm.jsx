import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginApi } from "../../api/authApi";
import { loginSuccess } from "./authSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginApi(form);
      if(response.status)
      {
        dispatch(loginSuccess(response.data));
         navigate("/dashboard", { replace: true });
      }
      else
      {
        setError(response.message);
      }
    
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
  <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <div
      className="position-relative overflow-hidden text-bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                <a href="javascript:void(0)" className="text-nowrap logo-img text-center d-block py-3 w-100">
                  <h1 style={{marginTop:'0px',marginBottom:'0px',padding:'0px'}}>Northwind</h1>
                </a>
                <p className="text-center text-danger ">{error && <span className="text-red-500">{error}</span>}</p>
                <form onSubmit={handleSubmit}>
                  
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange}/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={handleChange}/>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input className="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" checked/>
                      <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                        Remeber this Device
                      </label>
                    </div>
                    <a className="text-primary fw-bold" href="./index.html">Forgot Password ?</a>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Sign In</button>
                  <div className="d-flex align-items-center justify-content-center">
                    <a className="text-primary fw-bold ms-2" href="./authentication-register.html">Create an account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginForm;
