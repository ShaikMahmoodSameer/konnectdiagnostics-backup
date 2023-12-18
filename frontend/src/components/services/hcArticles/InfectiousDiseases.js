import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const InfectiousDiseases = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What are Infectious diseases?</h3>
        <p className="answer">
          Human diseases caused by pathogenic microorganisms such as viruses,
          bacteria, fungi, and other parasites are called infectious diseases.
          These mainly spread from one person to another and also through
          contaminated food, water, animals, and insects.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What are the types?</h3>
        <h5 className="include">
          They are different types of infectious diseases caused by various
          pathogens.
        </h5>
        <ul>
          <li>Viral infections</li>
          <li>Bacterial infections</li>
          <li>Fungal infections</li>
          <li>Parasitic infections</li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What are the symptoms?</h3>
        <h5 className="include">
          Signs and symptoms differ with the type of organism that is causing
          the infection. Each infectious disease will have its own signs and
          symptoms. Common signs and symptoms include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].infectiousDiseases[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h3 className="question">What are the risk factors?</h3>
        <h5 className="include">Risk factors for hypertension include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].infectiousDiseases[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose?</h3>
        <strong>Laboratory tests</strong>
        <p>
          Depending on the symptoms of the disease, the following laboratory
          tests are done:
        </p>
        <ul>
          <li>Blood tests</li>
          <li>Urine test</li>
          <li>Stool sample</li>
          <li>Tissue culture</li>
          <li>Swabbing nose or throat</li>
          <li>Cerebrospinal fluid</li>
        </ul>
        <strong>Staining and examination under the microscope</strong>
        <p>
          Some microorganisms can be identified by observing under a microscope.
          Most microorganisms are treated with statins. To detect bacteria, the
          following tests can be performed.
        </p>
        <ul>
          <li>Gram-positive</li>
          <li>Gram-negative</li>
        </ul>
        <strong>Culture of microorganisms</strong>
        <p>
          Some of the microorganisms such as bacteria, have to be grown in the
          laboratory to identify them. They are placed on a petri dish and
          nutrients are added depending on the type of infection.
        </p>
        <ul>
          <li>Bacteria Culture Test</li>
        </ul>
        <strong>
          Tests to detect antibodies or antigens of microorganisms
        </strong>
        <p>
          Some microorganisms cannot be cultured such as syphilis-causing
          bacteria. To detect such infections; immunological tests are done.
        </p>
        <ul>
          <li>Antibody test</li>
          <li>Antigen test</li>
        </ul>
        <strong>Tests to detect genetic material in microorganisms</strong>
        <p>
          Some of the microorganisms are difficult to identify. Using the below
          method, healthcare professionals can identify pieces of the
          microorganism’s genetic material.
        </p>
        <ul>
          <li>Nucleic acid-base tests</li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What is the treatment?</h3>
        <p>
          The treatment completely depends on the causes of the infection that
          help to prevent and manage the diseases.
        </p>
        <strong>Antibiotics</strong>
        <p>
          These mainly treat bacterial infections. Few antibiotics are
          particularly effective against specific types of bacteria that cause
          diseases such as urinary tract infections, and skin infection.
          Treatment can be more effective if your healthcare provider knows the
          type of bacteria you are infected with
        </p>
        <strong>Antivirals</strong>
        <p>
          Most viral infections can be treated by over-the-counter medications.
          Antiviral drugs are required to treat viral infections such as
        </p>
        <ul>
          <li>Hepatitis B</li>
          <li>Hepatitis C</li>
          <li>HIV/AIDS</li>
          <li>Influenza</li>
          <li>Herpes</li>
        </ul>
        <strong>Anti-parasites</strong>
        <p>
          Diseases such as malaria caused by parasites can be treated with
          anti-parasitic drugs
        </p>
        <strong>Antifungal</strong>
        <p>
          Fungal infections are commonly seen in people who have weak immune
          systems. Diseases caused by fungal infections such as ringworm and
          nail infections can be treated by using antifungal medications
        </p>
      </div>
    </Wrapper>
  );
};

export default InfectiousDiseases;
const Wrapper = styled.section``;
