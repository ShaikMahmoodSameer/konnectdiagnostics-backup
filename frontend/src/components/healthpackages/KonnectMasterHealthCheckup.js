import React from "react";
import { styled } from "styled-components";

const KonnectMasterHealthCheckup = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <h3>What is the package for?</h3>
        <p>
          Konnect Master Health Check-up package is used to evaluate all
          significant parameters and the functioning of the body's organs,
          including the heart, lungs, kidney, and liver in order to provide a
          complete picture of any potential short- or long-term medical
          complications.{" "}
        </p>
        <p>
          This package consists of a comprehensive list of tests that help to
          educate individuals on their overall health status and risks. It can
          also aid healthcare practitioners in making an early diagnosis of
          illnesses and creating effective treatment plans for the specific
          disease condition.
        </p>
        <h3>Who should opt for this package?</h3>
        <p>
          Konnect Master Health Check-up package is typically advised as an
          annual procedure for individuals between the ages of 18 and 60. It is
          particularly recommended for both men and women with:
        </p>
        <ul>
          <li>
            Family history of chronic illnesses such as diabetes, heart disease,
            obesity, and cancer.
          </li>
          <li>High-stress levels and sedentary jobs</li>
          <li>Medical history of frequent infections</li>
          <li>Chronic fatigue</li>
          <li>Smoking and drinking addiction </li>
        </ul>
        <h3>Patient preparation required</h3>
        <p>
          Prior to taking a Konnect Master Health Check-up package, it is
          important to fast for 10 -12 hours. Only drinking water during this
          time is recommended.{" "}
        </p>
        <p>
          Ensure your healthcare practitioner is aware of what prescription
          drugs, over-the-counter medicines, or dietary supplements you are
          taking. Ask for details about pre-test preparations, and make sure to
          follow instructions closely.
        </p>
        <h3>Tests included in the package (26)</h3>
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
            Liver Function Test (LFT) (8 tests included)
            <ul className="inner-ul">
              <li>Total Bilirubin</li>
              <li>Direct Bilirubin </li>
              <li>SGPT</li>
              <li>SGOT</li>
              <li>Alkaline Phosphatases</li>
              <li>Serum Albumin</li>
              <li>Serum Proteins</li>
              <li>AG Ratio </li>
            </ul>
          </li>
          <li>
            Kidney Function Test (2 tests included)
            <ul className="inner-ul">
              <li>Serum Creatinine </li>
              <li>Blood Urea </li>
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
          <li>ECG</li>
          <li>Ultrasound Abdomen</li>
          <li>X-Ray Chest PA View</li>
          <li>Doctor Consultation</li>
        </ol>
        <h3>Availability of report</h3>
        <p>
          Konnect Master Health Check-up package test reports are available
          within 24 hours after sample collection.
        </p>
      </div>
    </Wrapper>
  );
};

export default KonnectMasterHealthCheckup;

const Wrapper = styled.section``;
