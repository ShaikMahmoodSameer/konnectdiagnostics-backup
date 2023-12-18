import React, { useRef } from "react";
import Slider from "react-slick";
import { styled } from "styled-components";

const FacilitiesCarousel = () => {
  const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
  };
  const Fac_carousel_slider = useRef(null);

  return (
    <Wrapper>
      <Slider ref={Fac_carousel_slider} {...sliderSettings}>
        <div className="fac_card">
          <img
            src="./images/fetal-medicine-care/fetal-facilities/high-end-ultrasound-equipment.jpg"
            alt="fac1"
          />
          <h2>High End Ultrasound Equipment</h2>
        </div>

        <div className="fac_card">
          <img
            src="./images/fetal-medicine-care/fetal-facilities/procedure-room.jpg"
            alt="fac2"
          />
          <h2> Procedure Room </h2>
        </div>

        <div className="fac_card">
          <img
            src="./images/fetal-medicine-care/fetal-facilities/special-suites.jpg"
            alt="fac3"
          />
          <h2> Special Suites </h2>
        </div>

        <div className="fac_card">
          <img
            src="./images/fetal-medicine-care/fetal-facilities/virtual-fetal-museum.jpg"
            alt="fac4"
          />
          <h2> Virtual Fetal Museum </h2>
        </div>

        <div className="fac_card">
          <img
            src="./images/fetal-medicine-care/fetal-facilities/3d-printed-baby.jpg"
            alt="fac5"
          />
          <h2> 3D Printing For Fetal Face </h2>
        </div>

        <div className="fac_card">
          <img
            src="./images/fetal-medicine-care/fetal-facilities/fetal-booth.jpg"
            alt="fac6"
          />
          <h2> Photo Booth </h2>
        </div>
      </Slider>
    </Wrapper>
  );
};

export default FacilitiesCarousel;

const Wrapper = styled.section`
  .fac_card {
    padding: 10px;
    overflow: hidden;
  }
  .fac_card img {
    width: 100%;
  }
  .fac_card h2 {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    padding: 10px;
  }
`;
