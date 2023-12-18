import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ytPatExpVids } from "../../assets/data/AllData";
import SinglePEytVideo from "./PatExpSingleytVideo";
import "./PatExpVideoCarousel.css";

const PatExpCarousel = () => {
  const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "ease-in"
  };
  const PE_carousel_slider = useRef(null);

  return (
    <Wrapper>
      <div className="container">
        <div className="my-5">
          <Slider ref={PE_carousel_slider} {...sliderSettings}>
            {ytPatExpVids.map((videoObj, index) => {
              return <SinglePEytVideo key={index} vidCode={videoObj.vidCode} />;
            })}
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
};

export default PatExpCarousel;

const Wrapper = styled.section`
  .video-responsive {
    margin: 0 10px;
  }
  .slick-arrow{
    width: 50px;
    height: 50px;
    z-index: 5;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.primary90};

  }
  .slick-prev:before,.slick-next:before {
    color: ${({ theme }) => theme.colors.primary90};
  }
  .slick-dots li button:before {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 10px !important;
    margin-top: 10px;
  }
`;
