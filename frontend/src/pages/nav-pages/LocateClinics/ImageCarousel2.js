import React, { useState } from 'react';
import { styled } from "styled-components";

const ImageCarousel2 = () => {
  const [state, setState] = useState({
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRzjTdgJaDX2fcX82KMuIWoaB7kf-N5OGR5w&usqp=CAU",
      "https://images.squarespace-cdn.com/content/v1/5e9423c8fbecac6e4401c7e9/1586770293799-GR1M4X0EYPMIT4CD92SP/sugar_chocolate.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtV4Oy7450cdE6E0a0916V9ICSQiBAbQD-g&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLTMi0sAIcRu1yM3Bam9BC9Z-mWCs_ixVHw&usqp=CAU",
    ],
    currentIndex: 0,
    translateValue: 0,
  });

  const goToPrevSlide = () => {
    if (state.currentIndex === 0) return;

    setState((prevState) => ({
      ...prevState,
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + slideWidth(),
    }));
  };

  const goToNextSlide = () => {
    if (state.currentIndex === state.images.length - 1) {
      return setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    setState((prevState) => ({
      ...prevState,
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - slideWidth(),
    }));
  };

  const slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
  };

  const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%',
    };
    return <div className="slide" style={styles}></div>;
  };
  
  const LeftArrow = ({ goToPrevSlide }) => {
    return (
      <div className="backArrow arrow" onClick={goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  };
  
  const RightArrow = ({ goToNextSlide }) => {
    return (
      <div className="nextArrow arrow" onClick={goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  };

  return (
    <Wrapper className="slider">
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(${state.translateValue}px)`,
          transition: 'transform ease-out 0.45s',
        }}
      >
        {state.images.map((image, i) => (
          <Slide key={i} image={image} />
        ))}
      </div>

      <LeftArrow goToPrevSlide={goToPrevSlide} />

      <RightArrow goToNextSlide={goToNextSlide} />
    </Wrapper>
  );
};

export default ImageCarousel2;

const Wrapper = styled.section`
.slider {
  position: relative;
  width: 800px;
  margin: 0 auto;
  height: 500px;
  overflow: hidden;
  white-space: nowrap;
}

.slider-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.slide {
  display: inline-block;
  height: 100%;
  width: 100%;
}

.arrow {
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 50%;
  cursor: pointer;
  transition: transform ease-in .1s;
}

.nextArrow {
  position: absolute;
  top: 50%;
  right: 25px;
  z-index: 999;
  color: #fff;
}

.backArrow {
  position: absolute;
  top: 50%;
  left: 25px;
  z-index: 999;
  color: #fff;
}

.fa-arrow-right:before, .fa-arrow-left:before {
  color: #222
}

#vids {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#vids a:first-of-type {
  margin-bottom: 5px;
}

`;
