import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const RespiratoryDiseases = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What are Respiratory Diseases?</h3>
        <p className="answer">
          Diseases of the lungs, airways, and other parts of the respiratory
          system that affect a person's ability to breathe, are referred to as
          respiratory diseases. Any part of the respiratory system can contract
          an infection or a disease, which can lead to a wide range of
          complications. Different respiratory diseases include asthma, lung
          cancer, pulmonary fibrosis, chronic obstructive pulmonary disease
          (COPD), and pulmonary fibrosis.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">
          The symptoms of respiratory diseases can differ depending on the type
          of disease?
        </h3>
        <h5 className="include">
          The general symptoms of respiratory diseases include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].respiratoryDiseases[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h3 className="question">What are the risk factors?</h3>
        <h5 className="include">
          The risk factors for respiratory diseases include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].respiratoryDiseases[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose?</h3>
        <p>
          Health care practitioners use a variety of tests to assist in
          diagnosing respiratory conditions and determining the most effective
          course of treatment.
        </p>
        <h5 className="include">These tests include:</h5>
        <ul>
          <li>
            <strong>Spirometry :</strong>Measures the volume of air that can be
            expelled from the lungs. Additionally, it gauges the flow, or how
            quickly one can exhale.
          </li>
          <li>
            <strong>Oximetry :</strong>Involves wearing a finger probe overnight
            which monitors oxygen levels and heart rate.
          </li>
          <li>
            <strong>Ultrasound :</strong>It uses sound waves to show a picture
            of a developing fetus in the mother’s womb.
          </li>
          <li>
            <strong>Transcutaneous CO2 monitoring :</strong>Involves wearing a
            probe overnight which monitors carbon dioxide levels, oxygen levels,
            and heart rate.
          </li>
          <li>
            <strong>Sniff nasal inspiratory pressure (SNIP) :</strong>Comprises
            of a gentle probe that is placed into the opening of the nostril and
            sniffing in as hard as possible to test the strength of breathing
            muscles.
          </li>
          <li>
            <strong>Capillary blood gas (CBG) :</strong>Measures the oxygen
            levels and carbon dioxide levels using a blood test from the ear
            lobe.
          </li>
          <li>
            <strong>Gas transfer factor testing :</strong>Measures how well
            gases transfer or diffuse across the lungs and into the blood.
          </li>
          <li>
            <strong>Static lung volumes :</strong>Measures the size of the lungs
            (total lung capacity).
          </li>
          <li>
            <strong>Chest X-ray and CT scan :</strong>Imaging techniques to
            examine the structures in and around the lungs.
          </li>
          <li>
            <strong>Blood tests :</strong>Aids to determine the cause of
            respiratory failure and also determines the functioning of other
            organs.
          </li>
        </ul>
        <div className="questions">
          <h3 className="question">What are the treatments?</h3>
          <p>
            Medications may include a variety of inhalers, oral medications, and
            intravenous therapies depending on the respiratory condition.
          </p>
          <h5 className="include">
            Some respiratory disease-specific treatments are mentioned below:
          </h5>
          <ul>
            <li>
              <strong>Asthma :</strong>Nebulizers and inhalers are essential
              components of asthma treatment. Long-term asthma control
              medications include inhaled corticosteroids (ICS) and leukotriene
              modulators, which reduce inflammation and prevent asthma symptoms.
            </li>
            <li>
              <strong>Chronic obstructive pulmonary disease (COPD) :</strong>
              Depending on the severity and symptoms of the condition, a variety
              of inhalers, nebulizers, injections, and oral medications such as
              steroids are used to control symptoms and reduce further damage.
            </li>
            <li>
              <strong>Idiopathic pulmonary fibrosis :</strong>
              Oral antifibrotic drugs are used for the treatment of idiopathic
              pulmonary fibrosis. These drugs work by preventing the action of
              the fibrosis-causing enzymes.
            </li>
            <li>
              <strong>Alpha-1 antitrypsin (AAT) deficiency :</strong>
              Replacement therapy is used to treat alpha-1 antitrypsin
              deficiency, in which patients receive infusions of alpha-1
              antitrypsin protein from healthy donors to increase their AAT
              levels.
            </li>
            <li>
              <strong>Cystic fibrosis :</strong>
              Depending on the severity and symptoms of the condition, a variety
              of antibiotics, anti-inflammatory medicines, targeted therapy,
              oral pancreatic enzymes, etc., are used to control symptoms and
              reduce further damage.
            </li>
            <li>
              <strong>Advanced procedures :</strong>A cutting-edge procedure,
              such as interventional bronchoscopy uses a bronchoscope to allow
              for the minimally invasive treatment of lung tumors.
              <p>
                Lung transplantation may be an option for some patients with
                severe, progressive diseases such as end-stage COPD
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default RespiratoryDiseases;
const Wrapper = styled.section``;
