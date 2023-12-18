import React from "react";
import styled from "styled-components";
import { BiSolidQuoteRight } from "react-icons/bi";

const OurHistory = () => {
  return (
    <Wrapper>
      <div className="top our-history p-md-5 p-3">
        <div className="col-md-6 mx-auto px-2 mb-5">
          <h2>Our History and Experience</h2>
          <p>
            Chronicle of Our Journey: our commitment has revolved around enhancing
            the lives of individuals
          </p>
        </div>
        <div className="oh-section container p-0 d-sm-flex mt-4">
          <div className="oh-left w-100">
            <img
              src="https://img.freepik.com/free-photo/portrait-doctor_144627-39409.jpg?w=740&t=st=1692358246~exp=1692358846~hmac=0ebe64510d017ba81a4031d4c7db0ab35e4e548a9345615c25ce15dd4fa51236"
              alt=""
            />
          </div>
          <div className="oh-right">
            <h5>Our History</h5>
            <div className="content">
              <h2>We are committed to deliver your health aspirations</h2>
              <p>
                We lead the industry through adopting cutting-edge technology
                and nurturing a team of capable professionals prepared to manage
                intricate diagnostics.
              </p>
            </div>

            <span className="quote-icon">
              <BiSolidQuoteRight />
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OurHistory;
const Wrapper = styled.section`
  .top {
    text-align: center;
    align-items: center;
  }
  .oh-left {
    width: 50%;
    img {
      border-radius: 25px 0 0 25px;
      width: 100%;
    }
  }
  .oh-right {
    width: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 50px;
    color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 20px;
    flex-direction: column;
    h5,
    span {
      position: relative;
      background-color: ${({ theme }) => theme.colors.white};
      padding: 5px 16px;
      /* width: 100%; */
      &::before,
      &::after {
        content: "";
        position: absolute;
        margin: 0 10px;
        top: 50%;
        right: 100%;
        transform: translate(0, -100%) !important;
        background-color: ${({ theme }) => theme.colors.white};
        width: 100%;
        height: 1px;
      }
      &:after {
        content: "";
        left: 100%;
      }
    }

    .content {
      text-align: center;
      color: ${({ theme }) => theme.colors.white};
    }
    p {
      margin-top: 20px;
      color: #ffffff90;
    }
    .quote-icon {
      font-size: 3rem;
      background-color: transparent;
      svg {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }

  @media (max-width: 768px) {
    .oh-left {
      width: 100%;
      img {
        border-radius: 0;
        width: 100%;
      }
    }
    .oh-right {
      width: 100%;
    }  
  }

`;
