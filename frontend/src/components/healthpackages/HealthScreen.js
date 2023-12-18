import React from "react";
import { styled } from "styled-components";

const HealthScreen = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <h3>What is the package for?</h3>
        <p>
          A health screen package is a combination of laboratory tests that
          helps to screen various diseases. This package includes tests such as
          CBC, kidney function, and lipid profile which detects the functioning
          of various organs, including the kidney, liver, thyroid gland, and
          disease conditions. Healthcare providers use this package for early
          diagnosis and to monitor effective treatment plans for various
          diseases. Taking this package annually helps you to assess your health
          status.
        </p>
        <h3>Who should opt for this package? </h3>
        <p>
          The Konnect Health Screen Package is for individuals with stressful
          lifestyles, irregular food habits, and late working hours. This
          package is recommended for those people who have:
        </p>
        <ul>
          <li>Diabetes</li>
          <li>Cardiac disease</li>
          <li>Chronic kidney disease</li>
          <li>Thyroid diseases</li>
          <li>Low levels of hemoglobin</li>
          <li>Alcohol consumption</li>
          <li>Obesity</li>
          <li>Smoking</li>
          <li>Family history of cancer</li>
        </ul>
        <h3>Patient preparation required </h3>
        <p>
          Konnect Health Screen Package includes a lipid profile and blood sugar
          level tests, for which your healthcare provider may recommend that you
          fast for 10-12 hours without consuming any food or liquids other than
          water. Consult your healthcare provider before testing if you are on
          any medications currently.
        </p>
        <h3>Tests included in the package (11)</h3>
        <ol>
          <li>Complete Blood Picture (CBP)</li>
          <li>Fasting Blood Sugar (FBS)</li>
          <li>Glycosylated Hemoglobin (HBA1C)</li>
          <li>
            Kidney Function Test (2 tests in included)
            <ul className="inner-ul">
              <li>Serum Creatinine</li>
              <li>Blood urea</li>
            </ul>
          </li>
          <li>
            Lipid Profile (4 tests in included)
            <ul className="inner-ul">
              <li>Total Cholesterol</li>
              <li>HDL Cholesterol</li>
              <li>VLDL Cholesterol</li>
              <li>Triglycerides</li>
            </ul>
          </li>
          <li>TSH</li>
          <li>CUE</li>
        </ol>
        <h3>Availability of report </h3>
        <p>
          Konnect Health Screen Package test reports are available within 24
          hours after the collection of samples.
        </p>
      </div>
    </Wrapper>
  );
};

export default HealthScreen;
const Wrapper = styled.section``;
