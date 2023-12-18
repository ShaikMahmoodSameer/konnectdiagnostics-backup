import React from "react";
import { styled } from "styled-components";

const WholeBodyPackage = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <h3>What is the package for?</h3>
        <p>
          Konnect Whole Body Package is useful for screening vital organs and
          their functions in the body, such as the heart, kidney, liver, etc. It
          is helpful in assessing one’s current health status and screening for
          any obvious warning signs or health-related abnormalities within the
          body. If any indications of fatal or chronic diseases, such as
          cardiovascular diseases, respiratory diseases, diabetes, high blood
          pressure, cancer, etc., are noticed, it can help give early alarming
          signs.
        </p>
        <p>
          The Konnect Whole Body Package is recommended at least once a year and
          consists of a comprehensive list of tests. The package is helpful in
          educating individuals on their overall health status and associated
          disease risks. Additionally, it can help healthcare professionals in
          making an early diagnosis of illnesses and developing effective
          treatment plans for a specific condition.
        </p>
        <h3>This package is recommended for?</h3>
        <p>Konnect Whole Body Package is recommended for individuals with:</p>
        <ul>
          <li>
            Family history of chronic illnesses such as diabetes, heart disease,
            obesity, and cancer
          </li>
          <li>Unhealthy and hectic lifestyle</li>
          <li>Medical history of frequent infections</li>
          <li>High-stress levels and sedentary jobs</li>
          <li>Smoking and drinking addiction </li>
        </ul>
        <h3>Patient preparation required</h3>
        <p>
          Prior to taking a Konnect Whole Body Package, it is recommended to
          fast for about 10 -12 hours. The patient is advised to not consume any
          beverages, such as tea, coffee, milk, juice, etc., before taking the
          test. However, water can be consumed, if needed.
        </p>
        <h3>Tests included in the package (35)</h3>
        <ol>
          <li>Complete Blood Picture (CBP)</li>
          <li>Blood Group & Rh typing</li>
          <li>Complete Urine Examination (CUE)</li>
          <li>Erythrocyte Sedimentation Rate (ESR)</li>
          <li>Fasting Blood Sugar (FBS) Post Lunch Blood Sugar</li>
          <li>Glycosylated Hemoglobin (HBA1C)</li>
          <li>HbsAg</li>
          <li>
            Lipid Profile (4 tests included)
            <ul>
              <li>Total Cholesterol </li>
              <li>HDL Cholesterol </li>
              <li>VLDL Cholesterol </li>
              <li>Triglycerides </li>
            </ul>
          </li>
          <li>
            Kidney Function Test (2 tests included)
            <ul>
              <li>Serum Creatinine </li>
              <li>Blood Urea </li>
            </ul>
          </li>
          <li>
            Liver Function Test (LFT) (7 tests included)
            <ul>
              <li>Total Bilirubin </li>
              <li>Direct Bilirubin </li>
              <li>SGPT </li>
              <li>SGOT </li>
              <li>Alkaline Phosphatases </li>
              <li>Serum Albumin </li>
              <li>Serum Proteins </li>
            </ul>
          </li>
          <li>Serum Uric Acid </li>
          <li>
            Thyroid Profile (3 tests included)
            <ul>
              <li>Serum Triiodothyronine(T3) </li>
              <li>Serum Thyroxine (T4) </li>
              <li>Thyroid Stimulating Hormone (TSH) </li>
            </ul>
          </li>
          <li>Prostate Specific Antigen (Male)</li>
          <li>PAP Smear (Female)</li>
          <li>ECG</li>
          <li>2D Echo</li>
          <li>TMT</li>
          <li>Ultrasound Abdomen</li>
          <li>Apolipoprotein A1</li>
          <li>X-Ray</li>
          <li>Chest PA View</li>
          <li>Iron Profile</li>
          <li>HS-CRP</li>
          <li>Doctor Consultation</li>
        </ol>
        <h3>Availability of report</h3>
        <p>
          Konnect Whole Body Package test reports are available within 24 hours
          after the collection of samples.
        </p>
      </div>
    </Wrapper>
  );
};

export default WholeBodyPackage;
const Wrapper = styled.section``;
