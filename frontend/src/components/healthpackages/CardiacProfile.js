import React from "react";
import { styled } from "styled-components";

const CardiacProfile = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <h3>What is the package for?</h3>
        <p>
          Konnect Cardiac Profile package helps to screen, monitor, and diagnose
          cardiac diseases. This package includes tests such as CBC, LFT, kidney
          function, and lipid profile to screen the risk of cardiac diseases.
          Cardiac diseases are conditions affecting the function of the heart
          and damage the arteries. These ailments can include heart attack,
          heart failure, and arrhythmias. Healthcare providers use this package
          for early diagnosis and to monitor effective treatment plans for
          cardiac diseases. Thus, getting this package annually will prevent you
          from various cardiac diseases such as coronary heart disease, heart
          stroke, and heart attack.
        </p>

        <h3>This package is recommended for:</h3>
        <p>
          The Konnect Cardiac Profile package is recommended for those who are
          having:
        </p>
        <ul>
          <li>Heart diseases</li>
          <li>Diabetes Mellitus</li>
          <li>Atherosclerosis</li>
          <li>Cardiomyopathy </li>
          <li>Hypertension </li>
          <li>High blood cholesterol </li>
          <li>Being overweight and obese </li>
          <li>Age group of 35 years & above </li>
          <li>Stress </li>
          <li>Alcohol consumption </li>
          <li>Family history of heart diseases </li>
        </ul>
        <h3>Patient Preparation required </h3>
        <p>
          Konnect Cardiac Profile package includes blood sugar level tests, your
          healthcare provider may recommend that you fast for 10-12 hours,
          without consuming any food or liquids other than water. Consult your
          healthcare provider before testing if you are currently on any
          medications.
        </p>
        <h3>Tests included in the package (23)</h3>
        <ol>
          <li>Complete Blood Picture (CBP)</li>
          <li>Blood Group & Rh typing</li>
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
            Liver Function Test (LFT)
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
            Kidney Function Test
            <ul className="inner-ul">
              <li>Serum Creatinine </li>
              <li>Blood Urea </li>
            </ul>
          </li>

          <li>ECG</li>
          <li>2D Echo</li>

          <li>X-Ray Chest PA View</li>
          <li>Doctor Consultation</li>
        </ol>
        <h3>Availability of report </h3>
        <p>
          Konnect Cardiac Profile package test reports are available within 24
          hours after the collection of samples.
        </p>
      </div>
    </Wrapper>
  );
};

export default CardiacProfile;
const Wrapper = styled.section``;
