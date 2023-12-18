import React from "react";
import { styled } from "styled-components";

const CancerScreeningFemale = () => {
  return (
    <Wrapper>
      <div className="pkg-cnt">
        <h3>What is the package for?</h3>
        <p>
          Konnect Cancer Screening-Female helps in the early detection of
          ovarian, breast, pancreatic cancer, etc. This package also identifies
          cancerous cells before an individual experiences symptoms. It is
          possible to cure cancer if it is detected at an early stage. So, there
          is a need to undergo this package once a year, if you are at a risk of
          developing cancer. Additionally, it can also help healthcare
          professionals to provide early diagnosis and effective treatment plans
          for that specific cancer.
        </p>
        <h3>This package is recommended for:</h3>
        <p>Konnect Cancer Screening is recommended for women who are:</p>
        <ul>
          <li>Aging ( above 40 years)</li>

          <li>Overweight and obese</li>

          <li>Having a history of any infectious disease </li>

          <li>Having a history of Polycystic Ovarian Syndrome (PCOS) </li>

          <li>Leading a sedentary lifestyle</li>

          <li>Having a history of radiation exposure</li>

          <li>Having a history of exposure to sun and tanning beds</li>

          <li>Consuming alcohol and smoking </li>

          <li>Having a family history of cancers</li>
        </ul>
        <h3>Patient Preparation required</h3>
        <p>
          No special preparation is required to undergo cancer screening.
          However, it is advisable to avoid smoking, or consuming any herbal
          dietary supplements, and to consult your healthcare provider before
          undergoing the screening.
        </p>
        <h3>Tests included in the package (17)</h3>
        <ol>
          <li>Alpha Feto Protein (AFP)</li>
          <li>Beta HCG</li>
          <li>Carcino Embryonic Antigen (CEA)</li>
          <li>CA-125 (Ovarin Cancer Marker)</li>
          <li>CA-15.3 (Breast Cancer Marker)</li>
          <li>CA - 19.9 (Pancreatic Cancer Marker)</li>
          <li>Thyroglobulin levels</li>
          <li>Occult Blood, stool</li>
          <li>PAP Smear - LBC</li>
          <li>General Body Screen</li>
          <li>Complete Blood Picture</li>
          <li>Erythrocyte Sedimentation Rate (ESR)</li>
          <li>Urine Analysis</li>
          <li>X-Ray Chest PA View</li>
          <li>Ultrasonogram (USG)- Whole Abdomen</li>
          <li>Mammogram</li>
          <li>MRI Diffusion-whole body</li>
        </ol>
        <h3>Availability of report </h3>
        <p>
          Konnect Cancer Screening test reports are available within 24 hours
          after the collection of samples.
        </p>
      </div>
    </Wrapper>
  );
};

export default CancerScreeningFemale;
const Wrapper = styled.section``;
