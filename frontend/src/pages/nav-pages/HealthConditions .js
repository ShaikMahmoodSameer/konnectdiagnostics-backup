import React from "react";
import { styled } from "styled-components";
import HcCard from "../../components/services/HcCard";

const HealthConditions = () => {
  return (
    <Wrapper>
      <div className="container health-conditions mt-5">
        <h1>Health Conditions</h1>
      </div>
      <HcCard />
    </Wrapper>
  );
};

export default HealthConditions;
const Wrapper = styled.section`
  .health-conditions {
    text-align: center;
    /* margin: 2rem auto; */
  }
`;
