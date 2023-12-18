import React from "react";
import { styled } from "styled-components";

const WellWomenPackage = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <h3>What is the package for? </h3>
        <p>
          Konnect Well Women Package is a combination of laboratory tests that
          helps to screen the overall wellness of a woman. The tests included in
          this package like CBC, CUE, lipid profile, thyroid profile, PAP smear,
          digital mammography, etc., help in assessing different parameters
          related to various organs of the body such as heart, kidney, liver,
          etc., and detect any medical complications or disease conditions.
        </p>
        <p>
          This package helps healthcare providers to diagnose and monitor the
          progress of any pre-existing disease. Undergoing these tests in the
          package annually will help in the early diagnosis of disorders related
          to gynecological issues, cancers occurring in women, or
          cardiac-related diseases in women.
        </p>
        <h3>Who should opt for this package?</h3>
        <p>
          Konnect Well Women Package is an annual procedure for women of age 30
          years and above. This package is particularly recommended for women
          with:
        </p>
        <ul>
          <li>
            Family history of chronic illnesses such as cervical cancer, breast
            cancer, diabetes, and heart disease
          </li>
          <li>Sexually transmitted infections</li>
          <li>Issues in conceiving/during pregnancy </li>
          <li>Menopause </li>
          <li>Birth control or family planning</li>
        </ul>
        <h3>Patient Preparation required </h3>
        <p>
          Before taking a Konnect Well Women Package, fasting for 10-12 hours is
          recommended. It is only permissible to drink water prior to this test.
        </p>
        <p>
          Ensure your healthcare provider is aware of the drugs prescribed to
          you, over-the-counter medicine, or dietary supplements that are being
          taken by you. Make sure that you strictly follow the instructions
          regarding pre-test preparations if any are required.
        </p>
        <h3>Tests included in the package (31)</h3>
        <ol>
          <li>Complete Blood Picture (CBP)</li>
          <li>Complete Urine Examination (CUE)</li>
          <li>Erythrocyte Sedimentation Rate (ESR)</li>
          <li>Fasting Blood Sugar (FBS)</li>
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
            Kidney Function Test (2 tests included)
            <ul className="inner-ul">
              <li>Serum Creatinine </li>
              <li>Blood Urea </li>
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
          <li>Serum Iron</li>
          <li>Total Iron Binding Capacity (TIBC)</li>
          <li>Serum Phosphorus</li>
          <li>PAP Smear</li>
          <li>Digital Mammography</li>
          <li>ECG</li>
          <li>Ultrasound Abdomen</li>
          <li>X-Ray Chest PA View</li>
          <li>Specialist Consultation</li>
        </ol>
        <h3>Availability of Report </h3>
        <p>
          Konnect Well Women Package test reports are available within 24 hours
          after sample collection.
        </p>
      </div>
    </Wrapper>
  );
};

export default WellWomenPackage;
const Wrapper = styled.section``;
