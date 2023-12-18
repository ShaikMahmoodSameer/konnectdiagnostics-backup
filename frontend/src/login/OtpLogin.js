import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/actions/authActions';

function OtpLogin({ handleLoginClick }) {
    const dispatch = useDispatch();
    const [number, setNumber] = useState("");
    const [Otp, setOtp] = useState("");
    const [numberVerified, setNumberVerified] = useState(false);
    const [otpMismatchText, setOtpMismatchText] = useState(false);
    axios.defaults.withCredentials = true;

    const handleSubmit = async (event) => {
      event.preventDefault();
      await axios.post("http://localhost:3210/otplogin", { number })
      .then((res) => {
        console.log(res.data);
        if (res.data.Status === "OTP sent!") {
          setNumberVerified(true);
        } else {
          alert(res.data.Error);
          console.log(res.data.Error);
        }
      })
      .catch((err) => {
        console.error("Axios error:", err);
      });
    };

    const handleOtpSubmit = async (event) => {
      event.preventDefault();
      await axios.post("http://localhost:3210/verifyotp", {number, Otp})
      .then((res) => {
        if (res.data.Status === "Verified") {
          dispatch(setAuth(true));
          setTimeout(()=> {
            window.location.reload();
          }, 3000)
        } else {
          alert(res.data.Error);
          console.log(res.data.Error);
        }
      }).catch((err) => {
        if(err.response.status) setOtpMismatchText(true);
      })
    }

    return (
        <div className="container popupsec d-flex justify-content-center align-items-center p-0 bg-light position-relative" style={{width: "867px"}}>
          <div className="w-50 loginpopupleftsec" style={{height: "400px"}}>
          </div>
          <div className="w-50 mh-100 p-5">
            {numberVerified ? <VerifyOTPsec otpMismatchText={otpMismatchText} handleOtpSubmit={handleOtpSubmit} setOtp={setOtp} /> : <MobileNumsec handleSubmit={handleSubmit} number={number} setNumber={setNumber} /> }
          </div>
          <button className="popupclosebtn" onClick={handleLoginClick}>
            <svg height="25" viewBox="0 0 32 32" width="25" xmlns="http://www.w3.org/2000/svg" fill="white">
              <g id="Layer_22" data-name="Layer 22">
                <path d="m21 12.46-3.59 3.54 3.59 3.54a1 1 0 0 1 0 1.46 1 1 0 0 1 -.71.29 1 1 0 0 1 -.7-.29l-3.59-3.59-3.54 3.59a1 1 0 0 1 -.7.29 1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l3.54-3.59-3.54-3.54a1 1 0 0 1 1.41-1.41l3.54 3.54 3.54-3.54a1 1 0 0 1 1.46 1.41zm4.9 13.44a14 14 0 1 1 0-19.8 14 14 0 0 1 0 19.8zm-1.41-18.39a12 12 0 1 0 0 17 12 12 0 0 0 0-17z"/>
              </g>
            </svg>
          </button>
        </div>
    )
}
export default OtpLogin

function MobileNumsec({ handleSubmit, number, setNumber }) {
  return (
    <div id='mobileNumsec'>
      <h1 className="mb-2 me-3">Sign In / Sign Up</h1>
      <p>View your reports and upcoming health checkups at one place.</p>
      <form onSubmit={handleSubmit} className='my-3'>
        <div className="form-outline mb-2">
          <input 
            type="tel" 
            name="mobnum" 
            id="mobnum"
            className="form-control form-control-md"
            placeholder="Enter Your Mobile Number"
            required
            onChange={e => setNumber(e.target.value )} 
        />
        <small>An OTP will be sent on this number</small>
        </div>
        <div className="text-center text-lg-start pt-2">
          <button type="submit" className="btn btn-primary btn-md btn-block w-100" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>
            Send OTP
          </button>
        </div>
      </form>
      <small>By proceeding, you agree to Konnect Diagnostics T&C and Privacy Policy</small>
    </div>
  )
}

function VerifyOTPsec({ handleOtpSubmit, otpMismatchText, setOtp }) {
  return (
    <div id='verifyOTPsec'>
      <h1>Enter OTP</h1>
      <form onSubmit={handleOtpSubmit}>
        <div className="form-outline mb-2">
          <input type="text" name="otp" id="otp" className="form-control form-control-md my-3" placeholder="Enter OTP..." required onChange={e => setOtp(e.target.value)} />
          { otpMismatchText ? <p className='text-danger small'>OTP mismatched, Please try again</p> : "" }
          <input type="submit" className='btn btn-primary' value="Submit" />
        </div>
      </form>
    </div>
  );
}
