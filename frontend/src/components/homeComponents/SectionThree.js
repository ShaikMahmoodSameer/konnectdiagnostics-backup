import React from "react";
import styled from "styled-components";
import DynamicImage from "../requiredPages/DynamicImage";
import '../../App.css';

const SectionThree = () => {
  return (
    <Wrapper>
      <div className="s3-full">
        <div className="services">
          <div className="container d-flex justify-content-sm-between justify-content-start flex-sm-nowrap flex-wrap">
            <div className="s3-s service1">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/location.svg"} />
              </div>
              <h5>Nearest Center</h5>
            </div>
            <div className="s3-s service2">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/Lab.svg"} />
              </div>
              <h5>Book a test</h5>
            </div>
            <div className="s3-s service2">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/house.svg"} />
              </div>
              <h5>Home Collections</h5>
            </div>
            <div className="s3-s service3">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/Prescription.svg"} />
              </div>
              <h5>Upload Prescription</h5>
            </div>
            <div className="s3-s service4">
              <div className="s3-icons">
                <DynamicImage imageName={"/icons/download-report.svg"} />
              </div>
              <h5>Download Report</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="secThree row container d-flex mx-auto px-0">
        <div className="why-konnect-img col-md-6 bg-k-primary">
          <div className="why-konnect-content bg-k-secondary">
            <div className="title">
              <h3>Why Konnect</h3>
            </div>
            <div className="info d-flex gap-2">
              <h3>Empowering Health through Precision</h3>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="icon-box">
            <div className="icon">
              <img src="/images/icons/home/certified.svg" alt="certifiedIcon" />
            </div>
            <p> Konnect Diagnostics offers precise diagnostics with certified radiologists, pathologists, doctors, and technicians. </p>
          </div>
          <hr />
          <div className="icon-box">
            <div className="icon"> 
              <img src="/images/icons/home/team.svg" alt="teamIcon" /> 
            </div>
            <p> Pioneering tech, skilled team drive us in advanced diagnostics, managing complex cases with expertise. </p>
          </div>
          <hr />
          <div className="icon-box">
            <div className="icon"> 
              <img src="/images/icons/home/top.svg" alt="topIcon" />
            </div>
            <p> Our priority: satisfied patients. Swift, transparent, precise top-quality services for convenience and rapid results. </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionThree;

const Wrapper = styled.section`
  .icon-box{
    display: flex;
    .icon{
      width: 100px;
      height: 100px;
      border-radius: 50px;
      padding: 10px;
      background-color: #fff;
      box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
      img{
        width: 50px;
      }
    }
  }

  .why-konnect-img {
    position: relative;
    background-image: url("/images/s3-img-left.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .why-konnect-content {
      position: absolute;
      padding: 25px;
      border-radius: 15px;
      left: 5%;
      bottom: 5%;
      color: white;
      .title h3 {
        color: white;
        font-size: 1%.5;
      }
      .info {
        margin-top: 1rem;
        img {
          width: 35px;
          height: 100%;
        }
        h3 {
          color: ${({ theme }) => theme.colors.white};
          margin: 0;
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }
  }
  .services {
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 4rem 0 15rem 0;
  }
  .secThree {
    margin-top: -12rem;
  }
  .secThree-info {
    .sti {
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
  .s3-s {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    .s3-icons {
      background-color: #fff;
      border-radius: 100px;
      padding: 1.5rem;
      height: 100px;
      width: 100px;
      border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
      img {
        width: 100%;
        height: 100%;
        transition: all 0.3s;
      }
    }
    h5 {
      color: #fff;
      font-size: 1.125rem;
    }
    &:hover .s3-icons {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    &:hover img {
      scale: 1.2;
    }
  }
  @media (max-width: 768px) {
    .secThree {
      width: auto;
      margin: 15px;
      margin-top: -12rem;
      display: block !important;
      .why-konnect-img{
        height: 300px;
        width: 100%;
      }
      .secThree-info{
        padding: 0px 15px;
        width: 100%;
      }
    }
  }
`;
