import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = ({setShowLogin, handleLoginClick}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3210/login", { values })
      .then((res) => {
        if (res.data.Status === "Success") {
          // console.log(res.data.Status);
          handleLoginClick();
          setTimeout(()=> {
            window.location.reload();
          }, 1000)
        } else {
          alert(res.data.Error);
          console.log(res.data.Error);
        }
      })
      .catch((err) => {
        console.error("Axioss error:", err);
      });
  };
  
  return (
    // <div className="border border-danger">
        <div className="container d-flex justify-content-center align-items-center p-0 border w-60 bg-light position-relative">
          <div className="w-50 p-5 bg-dark bg-gradient text-white" style={{height: "400px"}}>
            <h2>Hello, Friend!</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos facere doloremque!</p>
          </div>
          <div className="w-50 mh-100 p-5">
            <div>
                <h1 className="mb-2 me-3">Sign In</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-2">
                <input
                  type="email"
                  className="form-control form-control-md"
                  placeholder="Enter a valid email address"
                  required
                  onChange={e => setValues({ ...values, email: e.target.value })}
                />
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  className="form-control form-control-md"
                  placeholder="Enter password"
                  required
                  onChange={e => { setValues({ ...values, password: e.target.value }) }}
                />
              </div>

              <Link to="/reset-password" onClick={handleLoginClick} className="text-body">
                  Forgot password?
              </Link>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-md btn-block w-100"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <button className="bottomlogbtn" onClick={() => {setShowLogin(false)} }>
                    Register
                  </button>
                </p>
              </div>
            </form>
          </div>
          <button onClick={handleLoginClick} className="popupclosebtn">
            <svg height="25" viewBox="0 0 32 32" width="25" xmlns="http://www.w3.org/2000/svg" fill="white">
              <g id="Layer_22" data-name="Layer 22">
                <path d="m21 12.46-3.59 3.54 3.59 3.54a1 1 0 0 1 0 1.46 1 1 0 0 1 -.71.29 1 1 0 0 1 -.7-.29l-3.59-3.59-3.54 3.59a1 1 0 0 1 -.7.29 1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l3.54-3.59-3.54-3.54a1 1 0 0 1 1.41-1.41l3.54 3.54 3.54-3.54a1 1 0 0 1 1.46 1.41zm4.9 13.44a14 14 0 1 1 0-19.8 14 14 0 0 1 0 19.8zm-1.41-18.39a12 12 0 1 0 0 17 12 12 0 0 0 0-17z"/>
              </g>
            </svg>
          </button>
        </div>
    // </div>
  );
};

export default Login;

