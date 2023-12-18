import React from "react";
// import MyCarousel from "../requiredPages/Carousel";
import styled from "styled-components";
import { PopularTests } from "../requiredPages/PopularTests";

const SectionFour = ({ userId, auth, cart, setCart, handleLoginClick }) => {
  return (
    <Wrapper>
      <div className="secFour container ">
        <div className="secFour-info mx-auto">
          <h2>Popular Tests</h2>
          <p>
            Explore Konnect's popular diagnostic tests to gain valuable insights
            into your health, cognition, and overall well-being. Take charge of
            your health journey now.
          </p>
        </div>
        <div className="cards">
          <PopularTests userId={userId} auth={auth} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SectionFour;
const Wrapper = styled.section`
  .secFour {
    margin: 5rem auto;
  }
  .secFour-info {
    width: 540px;
    flex-direction: column;
    margin: 25px 0;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    .secFour-info {
    width: 80%;
    flex-direction: column;
    margin: 25px 0;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  }
`;
