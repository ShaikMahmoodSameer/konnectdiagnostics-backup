import React from "react";
import styled from "styled-components";
// import pImag from "../assets/images/user/input.png";

export const Account = () => {
  return (
    <Wrapper>
      <section className="accountInfo">
        <div className="container boxItems">
          <h1>Account Information</h1>
          <div className="content">
            <div className="left">
              <div className="img flexCenter">
                {/* <input type="file" accept="image/*" src={pImag} alt="img" /> */}
                {/* <img src={pImag} alt="p-name" className="image-preview" /> */}
              </div>
            </div>
            <div className="right">
              <label htmlFor="">Username</label>
              <input type="text" />
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Password</label>
              <input type="password" />
              <button className="button">Update</button>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .accountInfo {
    margin: 115px 0;
  }
  .accountInfo .container {
    padding: 50px;
    max-width: 60%;
    margin: auto;
  }
  .accountInfo .content {
    margin-top: 80px;
    display: flex;
    justify-content: flex-start;
  }
  .accountInfo .left {
    width: 150px;
    position: relative;
  }
  .accountInfo .right {
    width: calc(100% - 180px);
    margin-left: 50px;
  }

  .accountInfo .left .img input {
    width: 150px;
    height: 150px;
    position: relative;
    z-index: 2;
    opacity: 0;
  }
  .accountInfo .img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    z-index: 1;
    border-radius: 50%;
  }

  .accountInfo .right label {
    font-size: 17px;
    color: #000;
    margin-bottom: 10px;
    display: block;
  }
`;
