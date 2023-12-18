import React, { useState } from "react";
import axios from "axios";
import EmailExistPopup from "./EmailExistPopup";

export const Register = ({ setShowLogin, handleLoginClick }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3210/register", { values })
      .then((response) => {
        if (response.data.Status === "Success") {
          // console.log(response.data.Status);
          // handleLoginClick();
          setShowLogin(true);
        } else if (response.data.Status === "UserExist") {
          // Show the email exists popup
          setShowPopup(true);

          // Hide the popup after 3 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="border mx-auto w-60 bg-light position-relative">
      <div className="d-flex justify-content-center align-items-center">
        <div className="w-50 p-5 bg-dark bg-gradient text-white" style={{height: "400px"}}>
          <h2>Hello, Friend!</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quos facere doloremque!</p>
        </div>
        <div className="w-50 p-5">
          <h1 className="fw-bold">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row align-items-center mb-2">
              <div className="form-outline flex-fill mb-0">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required
                  onChange={e => setValues({ ...values, name: e.target.value })}
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-2">
              <div className="form-outline flex-fill mb-0">
                <input type="email" id="form3Example3c" className="form-control" placeholder="Your Email" required
                  onChange={e => setValues({ ...values, email: e.target.value })}
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-2">
              <div className="form-outline flex-fill mb-0">
                <input type="password" id="form3Example4c" className="form-control" placeholder="Password" required
                  onChange={e => setValues({ ...values, password: e.target.value })}
                />
              </div>
            </div>

            <div className="d-flex justify-content-end mb-3 mb-lg-4">
              <button
                type="submit"
                className="btn btn-primary btn-md btn-block w-100"
              >
                Register
              </button>
            </div>

            <div>
              <p className="small fw-bold text-center mt-2 pt-1 mb-0">
                Already a User?
                <button onClick={() => {setShowLogin(true)}} to="/login" className="bottomlogbtn">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* Show the EmailExistPopup when showPopup is true */}
      {showPopup && <EmailExistPopup />}
      <button onClick={handleLoginClick} className="popupclosebtn">
        <svg height="25" viewBox="0 0 32 32" width="25" xmlns="http://www.w3.org/2000/svg" fill="white">
          <g id="Layer_22" data-name="Layer 22">
            <path d="m21 12.46-3.59 3.54 3.59 3.54a1 1 0 0 1 0 1.46 1 1 0 0 1 -.71.29 1 1 0 0 1 -.7-.29l-3.59-3.59-3.54 3.59a1 1 0 0 1 -.7.29 1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l3.54-3.59-3.54-3.54a1 1 0 0 1 1.41-1.41l3.54 3.54 3.54-3.54a1 1 0 0 1 1.46 1.41zm4.9 13.44a14 14 0 1 1 0-19.8 14 14 0 0 1 0 19.8zm-1.41-18.39a12 12 0 1 0 0 17 12 12 0 0 0 0-17z"/>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Register;


