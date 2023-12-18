import React from "react";
import { styled } from "styled-components";

const DiabeticPackage = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <h3>What is the package for?</h3>
        <p>
          Konnect Diabetic Package helps to monitor, screen, and diagnose
          prediabetes, diabetes, and other type of diabetes. This package
          includes tests like fasting, random, postprandial, HbA1c, CBP, LFT,
          Kidney function tests, etc., to screen the risk for diabetes. Diabetes
          is a chronic health condition that affects insulin production and
          regulation leading to abnormal sugar levels in the blood. Healthcare
          providers use this package to aid in early diagnosis and monitor
          effective treatment plans for diabetes. Thus, getting this package
          once a year will prevent you from various diabetic complications such
          as diabetic retinopathy (disease of eyes), diabetic neuropathy
          (disease of nerves), and various kidney diseases.
        </p>
        <h3>This package is recommended for:</h3>
        <p>Konnect Diabetic Package is recommended for people who are:</p>
        <ul>
          <li>Having a Body Mass Index (BMI) above 25</li>
          <li>
            Having a history of high blood pressure, cholesterol, heart-
            disease, and insulin resistance
          </li>
          <li>
            Having a previous history of Polycystic Ovarian Syndrome (PCOS) or
            gestational diabetes
          </li>
          <li>Having a family history of diabetes</li>
          <li>Leading a sedentary lifestyle</li>
          <li>Smoking </li>
        </ul>
        <h3>Patient preparation required </h3>
        <p>
          Konnect Diabetic Package includes a blood glucose examination, for
          which, it is required to fast for 10-12 hours before undergoing the
          test. It is advised to consult your healthcare provider before testing
          if you are using any medications currently.
        </p>
        <h3>Tests included in the package (22)</h3>
        <ol>
          <li>Complete Blood Picture (CBP)</li>
          <li>Complete Urine Examination (CUE)</li>
          <li>Fasting Blood Sugar (FBS)</li>
          <li>Post Lunch Blood Sugar</li>
          <li>Glycosylated Haemoglobin (HBA1C)</li>
          <li>
            Lipid Profile (4 tests included)
            <ul className="inner-ul">
              <li>Total Cholesterol</li>
              <li>HDL Cholesterol</li>
              <li>VLDL Cholesterol</li>
              <li>Triglycerides</li>
            </ul>
          </li>
          <li>
            Liver Function Test (LFT) (7 tests included)
            <ul className="inner-ul">
              <li>Total Bilirubin</li>
              <li>Direct Bilirubin</li>
              <li>SGPT</li>
              <li>SGOT</li>
              <li>Alkaline Phosphatases</li>
              <li>Serum Albumin</li>
              <li>Serum Proteins</li>
            </ul>
          </li>
          <li>
            Kidney Function Test (3 tests included)
            <ul className="inner-ul">
              <li>Serum Creatinine</li>
              <li>Blood Urea</li>
              <li>Urine Microalbumin</li>
            </ul>
          </li>
          <li>Thyroid Stimulating Hormone (TSH)</li>
          <li>C-Peptide Levels</li>
          <li>ECG</li>
          <li>Doctor Consultation</li>
        </ol>
        <h3>Availability of report </h3>
        <p>
          Konnect Diabetic Package test reports are available within 24 hours
          after the collection of samples.
        </p>
      </div>
    </Wrapper>
  );
};

export default DiabeticPackage;
const Wrapper = styled.section``;
