import React from "react";
import { styled } from "styled-components";

const ExecutiveCardiacProfile = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <h3>What is the package for?</h3>
        <p>
          Konnect Executive Cardiac Profile package is used to monitor heart
          function, look for warning signs of cardiac problems, and assess a
          person's risk factors for heart disease.
        </p>
        <p>
          It is used to measure the levels of specific enzymes, the composition
          of blood, urine, lipids, etc. in order to determine the general
          function and health of the heart. This package helps prevent
          cardiovascular diseases such as heart failure, heart attacks,
          aneurysms, and peripheral artery diseases by identifying the risks
          early.
        </p>
        <h3>Who should opt for this package?</h3>
        <p>
          Konnect Executive Cardiac Profile package should typically be included
          in a person's yearly physical examination in order to monitor their
          heart health. People with high risk factors for developing cardiac
          problems might also be required to opt for this package more
          frequently. These risk factors include:
        </p>
        <ul>
          <li>Obesity</li>
          <li>Diabetes</li>
          <li>Smoking </li>
          <li>Unhealthy diet</li>
          <li>High cholesterol levels </li>
          <li>High-stress levels and sedentary jobs</li>
          <li>Family history of heart disease</li>
        </ul>
        <h3>Patient preparation required</h3>
        <p>
          Prior to taking a Konnect Executive Cardiac Profile package, it is
          important to fast for 10-12 hours. Only drinking water during this
          time is recommended.
        </p>
        <p>
          Ensure your healthcare practitioner is aware of what medications or
          dietary supplements you are taking. Ask for details about pre-test
          preparations, and make sure to follow instructions closely
        </p>
        <h3>Tests included in the package (27)</h3>
        <ol>
          <li>Complete Blood Picture (CBP)</li>
          <li>Complete Urine Examination (CUE)</li>
          <li>Erythrocyte Sedimentation Rate (ESR)</li>
          <li>Fasting Blood Sugar (FBS)</li>
          <li>Glycosylated Hemoglobin (HBA1C)</li>
          <li>
            Lipid Profile
            <ul className="inner-ul">
              <li>Total Cholesterol</li>
              <li>HDL Cholesterol</li>
              <li>VLDL Cholesterol</li>
              <li>Triglycerides</li>
            </ul>
          </li>
          <li>
            <strong>Liver Function Test (LFT) (7 tests included)</strong>
            <ul className="inner-ul">
              <li>Total Bilirubin</li>
              <li>Direct Bilirubin </li>
              <li>SGPT</li>
              <li>SGOT</li>
              <li>Alkaline Phosphatases</li>
              <li>Serum Albumin</li>
              <li>Serum Proteins</li>
            </ul>
          </li>
          <li>
            Thyroid Profile (3 tests included)
            <ul className="inner-ul">
              <li>Serum Triiodothyronine(T3) </li>
              <li>Serum Thyroxine(T4) </li>
              <li>Thyroid Stimulating Hormone (TSH) </li>
            </ul>
          </li>
          <li>
            Kidney Function Test (2 tests included)
            <ul className="inner-ul">
              <li>Serum Creatinine </li>
              <li>Blood Urea </li>
            </ul>
          </li>

          <li>hs CRP</li>
          <li>Apolipoprotein A1</li>
          <li>ECG</li>
          <li>2D Echo</li>
          <li>TMT</li>
          <li>X-Ray Chest PA View</li>
          <li>Specialist Consultation</li>
        </ol>
        <h3>Availability of report</h3>
        <p>
          Konnect Executive Cardiac Profile package test reports are available
          within 24 hours after sample collection.
        </p>
      </div>
    </Wrapper>
  );
};

export default ExecutiveCardiacProfile;
const Wrapper = styled.section``;
