import React from "react";
import { styled } from "styled-components";

const NutritionPackage = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <h3>What is the package for? </h3>
        <p>
          Konnect Nutrition Package helps to monitor, screen, and diagnose
          various vitamin and bone-related disorders. It includes tests such as
          vitamin B12, vitamin D, serum Iron, etc., to determine whether you are
          at risk of essential vitamin and mineral deficiency. It is advised to
          have a routine nutrition assessment if you are experiencing symptoms
          such as hair loss, headache, depression, palpitations, diarrhoea, or
          bone and muscular discomfort. Additionally, it can also aid healthcare
          providers in making appropriate diagnoses and effective treatment
          plans for that particular condition.
        </p>
        <h3>This package is recommended for:</h3>
        <p>
          Konnect Nutrition Package is recommended for all individuals who are:
        </p>
        <ul>
          <li>Having a Body Mass Index (BMI) greater than 25</li>
          <li>Having a history of blood transfusions, HIV, and cancer</li>
          <li>Experiencing symptoms of anaemia</li>
          <li>Taking vitamin supplements daily</li>
          <li>Falling sick frequently</li>
          <li>Having a family history of arthritis</li>
          <li>Leading a sedentary lifestyle</li>
          <li>Consuming alcohol and smoking </li>
        </ul>
        <h3>Patient preparation required </h3>
        <p>
          Konnect Nutrition Package requires fasting for 10- 12 hours before
          undergoing the test. It is advised not to drink any beverages such as
          tea, coffee, or milk, until the sample collection is done. Also,
          inform your healthcare provider if you are on any medications
          currently.
        </p>
        <h3>Tests included in the package (8)</h3>
        <ol>
          <li>Complete Blood Picture (CBP)</li>
          <li>Vitamin B12</li>
          <li>Vitamin D</li>
          <li>Serum Iron</li>
          <li>Serum Calcium</li>
          <li>Serum Magnesium</li>
          <li>Serum Phosphorus</li>
          <li>Serum Zinc</li>
        </ol>
        <h3>Availability of report </h3>
        <p>
          Konnect Nutrition Package test reports are available within 24 hours
          after the collection of the sample.
        </p>
      </div>
    </Wrapper>
  );
};

export default NutritionPackage;
const Wrapper = styled.section``;
