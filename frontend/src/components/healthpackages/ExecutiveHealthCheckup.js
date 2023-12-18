import React from "react";
import { styled } from "styled-components";

const ExecutiveHealthCheckup = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <h3>What is the package for? </h3>
        <p>
          Konnect Executive Health Checkup package helps to screen and monitor
          the risk of developing various conditions such as diabetes,
          hypertension, bone, kidney, and thyroid disorders. In today’s world,
          stressful lifestyles, erratic work schedules, sporadic mealtimes, and
          a lack of adequate physical activity, all have a significant negative
          influence on our health and well-being. Therefore, the concern for
          being healthy has been increasing dramatically. There is a need to
          undergo this package once a year, which will educate individuals on
          their overall well-being. Additionally, it can also help healthcare
          providers to provide early diagnosis and effective treatment plans for
          that particular condition.
        </p>
        <h3>This package is recommended for:</h3>
        <p>
          Konnect Executive Health Checkup package is recommended for people who
          are:
        </p>
        <ul>
          <li>Aged between 30-40 years and above</li>
          <li>Having a Body Mass Index (BMI) above 25</li>
          <li>
            Having a history of high blood pressure, cholesterol, heart disease,
            and insulin resistance
          </li>
          <li>Having a family history of chronic illnesses</li>
          <li>Experiencing frequent joint pains</li>
          <li>Leading a sedentary lifestyle</li>
          <li>Consuming alcohol </li>
          <li>Smoking </li>
        </ul>
        <h3>Patient Preparation required </h3>
        <p>
          Konnect Executive Health Checkup package requires 10-12 hours of
          fasting before undergoing the test. It is advised to consult your
          healthcare provider before testing if you are using any medications
          currently.
        </p>
        <h3>Tests included in the package (32)</h3>
        <ol>
          <li>Complete Blood Picture (CBP)</li>
          <li>Blood Group & Rh typing</li>
          <li>Complete Urine Examination (CUE)</li>
          <li>Erythrocyte Sedimentation Rate (ESR)</li>
          <li>Fasting Blood Sugar (FBS)</li>
          <li>Glycosylated Hemoglobin (HBA1C)</li>
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
              <li>Direct Bilirubin </li>
              <li>SGPT</li>
              <li>SGOT</li>
              <li>Alkaline Phosphatases</li>
              <li>Serum Albumin</li>
              <li>Serum Proteins</li>
            </ul>
          </li>
          <li>
            Kidney Function Test (2 tests included)
            <ul className="inner-ul">
              <li>Serum Creatinine </li>
              <li>Blood Urea </li>
            </ul>
          </li>
          <li>Serum Uric Acid </li>
          <li>
            Thyroid Profile (3 tests included)
            <ul className="inner-ul">
              <li>Serum Triiodothyronine(T3) </li>
              <li>Serum Thyroxine(T4) </li>
              <li>Thyroid Stimulating Hormone (TSH) </li>
            </ul>
          </li>
          <li>Serum Calcium</li>
          <li>Vitamin B12</li>
          <li>Vitamin D</li>
          <li>Prostate Specific Antigen (Male)</li>
          <li>PAP Smear (Female)</li>
          <li>ECG</li>
          <li>2D Echo</li>
          <li>Ultrasound Abdomen</li>
          <li>X-Ray Chest PA View</li>
          <li>Doctor Consultation</li>
        </ol>
        <h3>Availability of Report </h3>
        <p>
          Konnect Executive Health Checkup package test reports are available
          within 24 hours after the collection of samples.Konnect Executive
          Health Checkup package test reports are available within 24 hours
          after the collection of samples.
        </p>
      </div>
    </Wrapper>
  );
};

export default ExecutiveHealthCheckup;
const Wrapper = styled.section``;
