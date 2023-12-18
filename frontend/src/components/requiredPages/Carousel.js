import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { styled } from "styled-components";
import { TestCard } from "../requiredPages/TestCard";
import { testsData } from "../../assets/data/AllData";

const MyCarousel = () => {
  return (
    <Wrapper className="container">
      <Carousel
        className="car-container"
        x
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        centerMode
        centerSlidePercentage={33.33}
        selectedItem={0}
        showArrows={true}
      >
        {testsData.map((item, index) => (
          <TestCard
            key={index}
            title={item.title}
            price={item.price}
            inv={item.inv}
            item={item}
          />
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default MyCarousel;

const Wrapper = styled.section`
  .carousel {
    height: 280px;
  }
  .dot.selected {
    background-color: #005bab;
  }
  .control-arrow {
    color: red;
    background-color: red;
  }
  .control-next {
    &::before {
      /* background-color: red; */
      color: #005bab;
      margin: 50px;
      &:hover {
        background-color: red;
      }
    }

    button {
      border: 2px solid #005bab;
    }
  }
`;
