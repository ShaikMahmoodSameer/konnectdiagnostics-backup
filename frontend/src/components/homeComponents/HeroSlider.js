import React, { useRef } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";

const HeroSlider = () => {
  const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const Fac_carousel_slider = useRef(null);

  return (
    <Wrapper>
      <div className="home-slider">
        <Slider ref={Fac_carousel_slider} {...sliderSettings} className="s-slider">
          <div className="sliderSec1">
            <div className="container">
              <h1 className="display-4 fw-bold w-50">
                Navigating <span className="span"> Health Solutions </span> with{" "}
                <br /> Konnect
              </h1>
            </div>
          </div>

          <div className="sliderSec2">
            <div className="container">
              <div className="slider-2 d-flex justify-content-between align-items-center">
                <div className="slider-2-content text-center text-md-left">
                  <h1 className="display-4 fw-bold">
                    Your <span className="span">partner</span> <br /> in keeping you <br />
                    <span className="span">healthy</span>
                  </h1>
                  <div className="gyr my-4">
                    Get Your <strong>Reports</strong> in 12 hours
                    <span style={{ color: "red" }}> * </span>
                  </div>
                </div>
                <div className="slider-2-video d-flex">
                  <video autoPlay loop muted controls={false}>
                    <source src="/images/hero24.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};

export default HeroSlider;

const Wrapper = styled.section`
  .home-slider {
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    display: flex;
    width: 100%;
  }
  .s-slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .sliderSec1 {
       width: 100%;
       height: 72vh;
       display: flex !important;
       align-items: center; 
       background: #ffffff url("images/bannerImage.jpg") no-repeat right top;
       background-size: cover;
       .container{
         align-self: center;
       }
       h1 {
         font-size: 4rem;
         text-transform: capitalize;
         line-height: 1.3;
         color: ${({ theme }) => theme.colors.primary};
       }
       .span {
         color: ${({ theme }) => theme.colors.secondary};
         /* font-size: 2.5rem; */
       }
    }
    .sliderSec2 {
      width: 100%;
      height: 72vh;
      background-size: center;
      background-repeat: no-repeat;
      .slider-2 {
        justify-content: space-between;
        width: 100%;
        gap: 50px;
        .slider-2-content {
          align-self: center;
          padding-right: 50px;
          .span {
            color: ${({ theme }) => theme.colors.secondary};
            /* margin: 0 1rem 0 1rem; */
          }
          h1 {
            font-size: 4rem;
            text-align: left;
            text-transform: capitalize;
            line-height: 1.3;
            color: ${({ theme }) => theme.colors.primary};
          }
          .hero-packages {
            flex-wrap: wrap;
          }
        }
        .gyr {
          text-align: left;
          white-space: nowrap;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.secondary};
          font-size: 1.3rem;
          line-height: 1.3;
          strong,
          span {
            color: #005bab;
            font-weight: 700;
          }
          @keyframes typing {
            from {
              width: 0;
            }
          }
          @keyframes blink {
            50% {
              border-color: transparent;
            }
          }
        }
        video {
          width: 28rem;
        }
      }
    }
  }

   .bg-2 {
     display: flex;
     align-items: center;
     justify-content: center;
   }
   .slick-arrow {
     &::before {
       font-family: inherit;
       font-size: 32px;
       font-weight: 700;
       color: ${({ theme }) => theme.colors.primary90};
     }
     &:hover::before {
       color: ${({ theme }) => theme.colors.primary};
     }
   }

    .slick-prev {
      top: 50%;
      left: 2%;
      z-index: 10;
      &:hover {
      }
    }
    .slick-next {
      top: 50%;
      right: 2%;
    }
    .slider1 {
      height: 100%;
      background: url("/images/bannerImage.jpg");
    }
    .hero-bg-img {
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .slick-dots {
      bottom: 5%;
      .slick-active {
        background-color: ${({ theme }) => theme.colors.primary90};
      }
      li {
        background-color: #cfcfcf;
        border-radius: 50px;
        &::before {
          /* background-color: red; */
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

  /* Tablet styles */
  @media (min-width: 0px) and (max-width: 768px) {
    .sliderSec1 {
      height: 70vh;
      h1{
        font-size: 3.5rem;
      }
    }

    .sliderSec2 {
      height: 70vh;
    }
    .s-slider {
      .sliderSec1 {
        position: relative;
        height: 300px;
        display: flex !important;
        align-items: center;
        z-index: 0;
        h1 {
          font-size: 26px;
          text-transform: capitalize;
          color: #ffffff; /* Add this line to set the text color */
          z-index: 30; /* Add this line to place the text above the overlay */
        }
      }
      .sliderSec1::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        z-index: -1;
        opacity: 0.5; /* Add this line to control the overlay opacity */
      }
      .sliderSec2 {
        height: 300px;
        display: flex !important;
        align-items: center;
        z-index: 0;
        gap: 0;
        .slider-2 {
          display: flex;
          gap: 0;
          .slider-2-content {
            align-self: center;
            width: 50%;
            h1 {
              font-size: 26px;
            }
            .hero-packages {
              flex-wrap: wrap;
            }
          }
          .gyr {
            text-align: left;
            white-space: nowrap;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.secondary};
            font-size: 14px;
            line-height: 26px;
            strong, span {
              color: #005bab;
              font-weight: 700;
            }
            @keyframes typing {
              from {
                width: 0;
              }
            }
            @keyframes blink {
              50% {
                border-color: transparent;
              }
            }
          }
          video {
            width: 100%;
          }
        }
      }
    }
  }

  /* Desktop styles */
  @media (min-width: 769px) {
    .sliderSec1,
    .sliderSec2 {
      height: 80vh; /* Adjust the height as needed */
    }
  }
`;

