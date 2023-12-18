import React, { useState } from "react";
import styled from "styled-components";
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { GrHelp } from "react-icons/gr";
import { Link } from "react-router-dom";

export const User = ({ auth, userName, message, handleLoginClick,handleLogout }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const close = () => {
    setProfileOpen(false);
  };
  return (
    <Wrapper>
      <div className="profile me-3">
        {auth ? (
          <>
            <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
              {userName}
              <img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1696243855~exp=1696244455~hmac=864a53a5e882db94836225b4739dc0049618d5cdbf66eb5256a7d068a40f4875" alt="" className="ms-2"/>
            </button>
            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <Link to="/profile">
                  <div className="d-flex p-3 bg-light ">
                    <div className="">
                      <img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?w=740&t=st=1696243855~exp=1696244455~hmac=864a53a5e882db94836225b4739dc0049618d5cdbf66eb5256a7d068a40f4875" alt="" />
                    </div>
                    <div className="ps-2">
                      <h4 className="text-start fw-bold mb-0">{userName}</h4>
                      {/* <small className="text-start">Los Angeles, CA</small> */}
                    </div>
                  </div>
                </Link>
                <Link to="/profile">
                  <button className="box">
                    <IoSettingsOutline className="icon" />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <Link to="/cart">
                  <button className="box">
                    <BsBagCheck className="icon" />
                    <h4>My Order</h4>
                  </button>
                </Link>
                <Link to="/cart">
                  <button className="box">
                    <svg height="22" viewBox="-35 0 511 512" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m436.03125 107.03125-104.601562-102.734375c-2.804688-2.753906-6.578126-4.296875-10.511719-4.296875h-264.449219c-30.859375 0-55.96875 25.105469-55.96875 55.96875v400.0625c0 30.859375 25.105469 55.96875 55.96875 55.96875h328.082031c30.859375 0 55.96875-25.105469 55.96875-55.96875v-338.296875c0-4.027344-1.617187-7.882813-4.488281-10.703125zm-100.113281-56.273438 52.921875 51.976563h-48.152344c-2.628906 0-4.769531-2.140625-4.769531-4.769531zm48.632812 431.242188h-328.082031c-14.316406 0-25.96875-11.648438-25.96875-25.96875v-400.0625c0-14.320312 11.648438-25.96875 25.96875-25.96875h249.453125v67.964844c0 19.171875 15.597656 34.769531 34.769531 34.769531h69.828125v323.296875c0 14.320312-11.648437 25.96875-25.96875 25.96875zm0 0"/><path d="m324.644531 238h-211.453125c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h211.453125c8.285157 0 15-6.714844 15-15s-6.714843-15-15-15zm0 0"/><path d="m113.191406 328h172.414063c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-172.414063c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15zm0 0"/><path d="m306.40625 358h-193.214844c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h193.214844c8.28125 0 15-6.714844 15-15s-6.71875-15-15-15zm0 0"/></svg>
                    <h4 style={{marginLeft: '14px'}}>Download Report</h4>
                  </button>
                </Link>
                <Link to="/about-us">
                  <button className="box">
                    <GrHelp className="icon" />
                    <h4>Help</h4>
                  </button>
                </Link>
                <div className="logoutbtn p-2" onClick={handleLogout}>
                  <h4><BiLogOut /> Log Out</h4>
                </div>
              </div>
            )}
          </>
        ) : (
          <div>
            <h3>{message}</h3>
            <button className='btn btn-primary' onClick={handleLoginClick}>Login</button>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .profile {
    cursor: pointer;
    .image {
      display: flex;
      padding-bottom: 20px;
      img {
        margin-right: 20px;
        border: none;
      }
    }
    button {
      font-size: 1rem;
      padding: 0;
      border: none;
      background: none;
      font-weight: 500;
    }
  }
  .profile img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    &:focus {
      border: none;
    }
  }
  .openProfile {
    color: ${({ theme }) => theme.colors.white};
    align-items: flex-start;
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
    position: absolute;
    border-radius: 0 0 5px 5px;
    top: 65px;
    right: 10px;
    width: 250px;
    background: #fff;
    z-index: 100;
    /* background-color: ${({ theme }) => theme.colors.primary90}; */
  }
  .openProfile .box {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 15px;
    transition: 0.5s;
  }
  .openProfile .box h4{
    margin-bottom: 0;
  }
  .openProfile .icon {
    font-size: 15px;
    margin-right: 15px;
  }
  .openProfile h4 {
    font-size: 15px;
    font-weight: 500;
  }
  .openProfile button:hover {
    background: rgba(0, 91, 171, 0.075);
  }
  .logoutbtn{
    background: rgba(0,0,0,0.05);
    display: flex;
    justify-content: flex-start;
  }
  .logoutbtn:hover{
    background-color: rgba(255,0,0,0.05);
  }
`;
