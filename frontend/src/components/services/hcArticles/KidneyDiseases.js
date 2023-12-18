import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const KidneyDiseases = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What are Kidney Diseases?</h3>
        <p className="answer">
          When the kidneys are damaged and unable to filter blood as they
          should, the condition is referred to as kidney disease.
        </p>
        <p className="answer">
          Types of kidney diseases include chronic kidney disease, cystinosis,
          Fabry disease, glomerulonephritis, IgA nephropathy, lupus nephritis,
          polycystic kidney disease (PKD), etc.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What are the symptoms?</h3>
        <p>
          The symptoms of kidney diseases can differ depending on the severity
          of the disease.
        </p>
        <h5 className="include">
          The general symptoms of kidney diseases include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].kidneyDiseases[0].symptoms.map((item) => (
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
          The risk factors for kidney diseases include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].kidneyDiseases[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose kidney diseases?</h3>
        <p>
          Healthcare practitioners may recommend one or more of the below tests
          to properly diagnose and determine the cause of kidney disease.
        </p>
        <strong>Laboratory tests</strong>
        <ul>
          <li>
            <strong>Blood tests :</strong>Blood tests called kidney function
            tests are used to measure the level of waste products in blood, such
            as urea and creatinine.
          </li>
          <li>
            <strong>Urine tests :</strong>Urine tests are used to help determine
            the underlying cause and reveal anomalies that could be signs of
            chronic kidney disease.
          </li>
          <li>
            <strong>Imaging tests :</strong>Imaging tests such as an ultrasound
            are used to assess the kidney’s size and structure.
          </li>
          <li>
            <strong>Kidney biopsy :</strong>A tiny sample of kidney tissue is
            removed during the biopsy procedure using a thin needle in order to
            examine the tissue for signs of kidney disease, gauge the degree of
            kidney damage, and assist in treatment planning.
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What are the treatments?</h3>
        <p>
          Treatment for kidney disease consists of measures to reduce
          complications, control symptoms, and slow down the spread of the
          disease:
        </p>
        <h5 className="include">
          Complications arising from kidney disease can be managed with
          medications that will help :
        </h5>
        <ul>
          <li>
            <strong>Treat high blood pressure :</strong>Angiotensin-converting
            enzyme (ACE) inhibitors help to lower blood pressure and angiotensin
            II receptor blockers help to preserve the kidney function.
          </li>
          <li>
            <strong>Reduce swelling :</strong>Retention of fluids is common in
            people with chronic kidney disease and it can cause high blood
            pressure and swelling of legs. Diuretics can help maintain proper
            fluid balance.
          </li>
          <li>
            <strong>Treat anemia :</strong>Erythropoietin hormone supplements,
            sometimes with added iron, aid in the production of more red blood
            cells. These might help to relieve anemia-related weakness and
            fatigue.
          </li>
          <li>
            <strong>Lower cholesterol levels :</strong>High levels of bad
            cholesterol are common in people with chronic kidney disease, which
            increases their risk of developing heart ailments. In such cases,
            statins are recommended to lower the levels of cholesterol.
          </li>
          <li>
            <strong>Keep bones healthy :</strong>Vitamin D and calcium
            supplements can reduce the risk of fracture and help prevent weak
            bones. Phosphate binders are used to lower the level of phosphate in
            blood and protect the blood vessels from harm caused by calcium
            deposits (calcification).
            <p>
              When kidneys are completely unable to eliminate waste and fluid on
              their own, the condition is referred to as end-stage kidney
              disease. End-stage kidney disease is usually treated using
              dialysis or a kidney transplant
            </p>
          </li>
          <li>
            <strong>Dialysis :</strong>During hemodialysis, a machine filters
            waste and extra fluid from the blood. During peritoneal dialysis, a
            tiny tube is inserted into the abdomen that fills the abdominal
            cavity with a dialysis solution to remove waste and surplus fluid.
          </li>
          <li>
            <strong>Kidney transplant :</strong>During a kidney transplant,
            damaged kidney from the patient is surgically replaced with a
            healthy kidney from a donor.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default KidneyDiseases;
const Wrapper = styled.section``;
