import React from "react";
import { styled } from "styled-components";
import Navbar from "./nav-pages/Navbar";
import { NavLink } from "react-router-dom";
import { User } from "./nav-pages/User";
import { BiSolidLogInCircle } from "react-icons/bi";
import CartIcon from "../components/cart/CartIcon";

const Header = ({ cartCount, auth, setAuth, userId, setUserId, userName, setUserName, cartId, setCartId, message, handleLoginClick, handleLogout }) => {
  return (
    <Wrapper>
      <div className="header">
        <div className="header-fixed px-sm-0">
          <div className="top-nav container-fluid px-md-4 px-1 d-flex justify-content-between">
            <div className="logo">
              <NavLink to={"/"}>
                <img src="/images/konnect-logo.png" alt="Konect-Logo" />
              </NavLink>
            </div>
            <div className="d-flex">
              <div className="menu">
                <Navbar />
              </div>
              <div className="login d-flex align-items-center justify-content-end">
                <div className="d-flex align-items-center justify-content-center">
                  {!auth ? <button className='butn btn-outline-primary btn-sm' onClick={handleLoginClick}>
                              Login <BiSolidLogInCircle className="icon" />
                            </button> :
                            <User auth={auth}  setAuth={setAuth}  userId={userId}  setUserId={setUserId}  userName={userName}  setUserName={setUserName}  setCartId={setCartId}  message={message}  handleLoginClick={handleLoginClick} handleLogout={handleLogout} />
                  }

                </div>
                <div className="cart-icon">
                  <NavLink to="/cart">
                    <CartIcon size={cartCount} />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.section`
  .top-nav {
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    height: 65px;
  }
  a {
    text-decoration: none;
  }
  .syc {
    background-color: ${({ theme }) => theme.colors.white};
  }
  .header {
    background-color: ${({ theme }) => theme.colors.white};

    height: 65px;
    width: 100%;
    .header-fixed {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 25px 0px;
      width: 100%;
      position: fixed;
      background-color: ${({ theme }) => theme.colors.white};
      z-index: 99;
    }
    .logo {
      img {
        width: 165px;
      }
    }
    .butn {
      background-color: ${({ theme }) => theme.colors.white};
      padding: 6px 20px 6px 20px;
      color: ${({ theme }) => theme.colors.primary};
      border: none;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      font-weight: 600;
      border-radius: 25px;
      svg {
        fill: ${({ theme }) => theme.colors.primary};
        font-size: 1.5rem;
      }
    }
  }

  .searchBox {
    background-color: #00aeef;
    border-radius: 5px;
    padding: 0;
  }
  .select-box {
    color: #fff;
    background-color: #00aeef;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    outline-style: none;
    option {
      color: #fff;
    }
    &:focus {
      outline-style: none;
    }
  }
  .input {
    border: none;
    text-decoration: none;
    margin: 5px;
    padding: 5px 15px;
    border-radius: 5px;
    &:focus {
      outline-style: none;
    }
  }
  @media (max-width: 768px) {
    .top-nav{
      ${'' /* display: flex; */}
    }
    .logo{
      width: 200px;
    }
    .menu{
      ${'' /* width: 400px; */}
    }
  }
`;
