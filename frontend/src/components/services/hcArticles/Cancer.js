import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const Cancer = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is Cancer?</h3>
        <p className="answer">
          Our body has numerous cells that grow and divide to make new cells and
          die in an orderly fashion. However, in cancer, these normal cells
          instead of dying, start to grow out of control and form a new,
          abnormal collection of cells. This uncontrolled division of the normal
          cells in an individual’s body is termed “cancer.”
          <br />
          There are several types of cancer such as bone cancer, blood cancer,
          lung cancer, stomach cancer, etc., based on the location where the
          tumour is present.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">How is cancer classified?</h3>
        <h5 className="include">Cancers are classified as:</h5>
        <ul>
          <li>
            <strong>Benign :</strong> It is defined as an abnormal yet
            non-cancerous collection of cells. These can be formed at any place
            on/in the body. These grow slowly and have defined borders, which
            means they are not spread to other body parts/tissues.
          </li>
          <li>
            <strong>Malignant :</strong>It is defined as an abnormal and
            cancerous collection of cells. These can be formed at any place in
            the body and can spread to nearby tissues and also to distant parts
            of the body through a process called metastasis. These grow and
            divide faster than normal cells.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the Stages of Cancer? </h3>
        <p>
          Stages of cancer are determined based on the size and location of a
          tumour in the body.
        </p>
        <h5 className="include">These include:</h5>
        <ul>
          <li>
            <strong>Stage I :</strong>Cancer is localized to a very small area
            without spreading to other tissues in the body.
          </li>
          <li>
            <strong>Stage II :</strong>Cancer is grown in size. However, it is
            not spread to other body parts/tissues.
          </li>
          <li>
            <strong>Stage III :</strong>Cancer has grown even larger in size and
            also spreads to other body tissues such as lymph nodes.
          </li>
          <li>
            <strong>Stage IV :</strong>Cancer has spread to other body parts.
            This is termed metastatic or advanced cancer.
          </li>
        </ul>
        <p>
          Additionally, it also has Stage 0. It is the earliest phase of cancer
          that is still localized to the area in which it started. Treatment
          during this stage is often easy and is considered pre-cancerous by
          many healthcare providers.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What are the symptoms? </h3>

        <h5 className="include">
          Symptoms are not so obvious in the early stages of cancer. However,
          later stages of cancer may show the following symptoms:
        </h5>

        <h6>Early stage :</h6>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].cancer[0].earlyStage.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
        <h6>Late stage :</h6>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].cancer[0].lateStage.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h3 className="question">What are the risk factors?</h3>
        <h5 className="include">The risk factors of cancer include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].cancer[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h3 className="question">How to diagnose?</h3>
        <h5 className="include">
          Diagnosis of cancer initially starts with a physical examination of
          the individual. Additionally, the following tests are also
          recommended:
        </h5>
        <h4>Blood tests</h4>
        <ul>
          <li>Complete blood count (CBC)</li>
          <li>Tumour markers</li>
          <li>Blood protein tests</li>
          <li>Circulating tumour cell tests</li>
        </ul>
        <h4>Imaging tests</h4>
        <ul>
          <li>Computed Tomography (CT) scan</li>
          <li>X-rays</li>
          <li>Positron emission test (PET) scan</li>
          <li>Ultrasound</li>
          <li>Magnetic Resonance Imaging (MRI)</li>
          <li>Iodine meta-iodobenzylguanide (MIGB)</li>
        </ul>
        <h4>Biopsies</h4>
        <ul>
          <li>Needle Biopsy</li>
          <li>Skin Biopsy</li>
          <li>Bone marrow Biopsy</li>
          <li>Endoscopic or laparoscopic Biopsy</li>
          <li>Excisional or Incisional Biopsy</li>
          <li>Perioperative Biopsy</li>
        </ul>
        <h4>Genetic testing</h4>
      </div>
      <div className="questions">
        <h3 className="question">What is the treatment?</h3>
        <h5 className="include">Cancer treatment options include:</h5>
        <ul>
          <li>
            <strong>Surgery :</strong>It involves removing of the tumour as much
            as possible.
          </li>
          <li>
            <strong>Chemotherapy :</strong>It makes use of drugs to kill
            cancerous cells.
          </li>
          <li>
            <strong>Radiation therapy :</strong>It involves the use of
            high-powered radiation such as X-ray, proton, etc., that comes from
            a machine (external beam radiation) or inside the body
            (brachytherapy) to kill cancerous cells.
          </li>
          <li>
            <strong>Bone marrow transplant :</strong>Bone marrow is present in
            the bones and helps make blood cells from the blood stem cells. A
            bone marrow transplant may use one’s own bone marrow stem cells or
            from a donor. It helps replace diseased bone marrow with a healthy
            one.
          </li>
          <li>
            <strong>Immunotherapy :</strong>Also known as biological therapy, it
            uses one’s own immune system to fight cancer.
          </li>
          <li>
            <strong>Hormone therapy :</strong>: A few cancers in the body grow
            with the help of certain hormones. E.g., breast cancer, prostate
            cancer, etc. Removing these hormones from one’s body may help stop
            cancer growth.
          </li>
          <li>
            <strong>Targeted drug therapy :</strong>: It aims at specific
            abnormalities within the cancer cells that allows them to survive.
          </li>
          <li>
            <strong>Cryoablation :</strong>: It uses cold therapy to kill
            cancerous cells.
          </li>
          <li>
            <strong>Radiofrequency ablation :</strong>: It makes use of
            electrical energy to heat cancer cells, causing them to die.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Cancer;
const Wrapper = styled.section``;
