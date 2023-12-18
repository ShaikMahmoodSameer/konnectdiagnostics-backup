import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const DiarrhealDiseases = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What are Diarrheal Diseases?</h3>
        <p className="answer">
          Having loose or watery stools more frequently than normal, or at least
          three times per day, is referred to as diarrhea. Even though most
          cases of diarrhea are mild, severe cases can cause significant fluid
          loss and dehydration.
        </p>
        <p className="answer">
          Diarrhea is typically a sign of an intestinal infection, which can be
          brought about by a number of different bacterial, viral, and parasitic
          organisms. Poor hygiene can cause an infection to spread from person
          to person or through contaminated food or water.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the types of diarrheal diseases?</h3>
        <h5 className="include">
          There are three clinical types of diarrhea including:
        </h5>
        <ul>
          <li>
            <strong>Acute watery diarrhea :</strong>It includes cholera and is
            associated with substantial fluid loss and dehydration.
          </li>
          <li>
            <strong>Acute bloody diarrhea :</strong>It is characterized by
            bloody stools and is often referred to as dysentery.
          </li>
          <li>
            <strong>Persistent diarrhea :</strong>It is a bout of diarrhea with
            or without bloody stools, that lasts at least 14 days.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the symptoms?</h3>
        <h5 className="include">
          The symptoms of diarrheal diseases can differ depending on the
          severity of the diarrhea and its underlying cause.
        </h5>
        <h5 className="include">The general symptoms of diarrhea include :</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].diarrhealDiseases[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h3 className="question">What are the causes?</h3>
        <h5 className="include">The causes for diarrhea include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].diarrhealDiseases[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose? </h3>
        <h5 className="include">
          Healthcare practitioner will inquire about the patient’s medical
          history, review the medications that the patient is currently on,
          perform a physical examination, and possibly order tests to identify
          the cause of diarrhea. Tests for diarrhea include:
        </h5>
        <ul>
          <li>
            <strong>Blood test :</strong>A complete blood count, electrolyte
            analysis, and kidney function tests can all be used to determine the
            severity of diarrhea.
          </li>
          <li>
            <strong>Stool test :</strong>Stool test can be used to determine
            whether a bacterium or parasite is the cause of diarrhea.
          </li>
          <li>
            <strong>Hydrogen breath test :</strong>
            Hydrogen breath test is used to determine intolerance to lactose .
            In this test, the amount of hydrogen exhaled following consumption
            of a lactose-rich drink is measured at regular intervals.
          </li>
          <li>
            <strong>Flexible sigmoidoscopy or colonoscopy :</strong>
            Flexible sigmoidoscopy or colonoscopy uses a tiny, illuminated tube
            that is inserted into the rectum to visualize the interiors of the
            colon. Additionally, the device has a tool to perform a colon biopsy
            by taking a small sample of tissue from the colon. Flexible
            sigmoidoscopy allows for the visualization of the lower colon,
            whereas colonoscopy allows for the visualization of the entire
            colon.
          </li>
          <li>
            <strong>Upper endoscopy :</strong>
            Upper endoscopy uses a long, thin tube with a camera at the end to
            examine the stomach and upper small intestine. During the procedure,
            a tissue sample may be removed (biopsy) for analysis in the
            laboratory.
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What are the treatments? </h3>
        <h5 className="include">
          Most cases of acute diarrhea go away on their own in a few days
          without needing medical attention. Some treatments for diarrhea
          include:
        </h5>

        <ul>
          <li>
            <strong>Antibiotics or anti-parasitic drugs :</strong> Diarrhea
            caused due to bacteria or parasites may be treated with antibiotics
            or anti-parasitic drugs.
          </li>
          <li>
            <strong>Fluids :</strong> Consuming water with electrolytes, juice,
            or soup can replenish the electrolytes and fluids lost during
            frequent bowel movements.
          </li>
          <li>
            <strong>Medication for a specific condition :</strong> Diarrhea may
            be caused due to underlying conditions such as irritable bowel
            syndrome (IBS), inflammatory bowel disease (IBD), or bacterial
            overgrowth. Once the underlying cause has been found, diarrhea can
            usually be controlled.
          </li>
          <li>
            <strong>Probiotics :</strong> Probiotics are sometimes used to treat
            diarrhea by establishing a healthy gut microbiome.
          </li>
          <li>
            <strong>Exercise :</strong> Being active physically increases the
            sensitivity of insulin. So, it is important to exercise daily for
            diabetes management.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default DiarrhealDiseases;
const Wrapper = styled.section``;
