import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const SkinProblems = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What are Skin Problems?</h3>
        <p className="answer">
          Skin problems can be defined as problems that affect the skin of an
          individual. It includes all the problems that cause clogging,
          irritation, or inflammation of the skin. Most often, skin problems
          start with a rash and may cause other symptoms that deform the skin’s
          appearance.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the types of Skin problems?</h3>
        <h5 className="include">The most common skin problems include:</h5>
        <ul>
          <li>Acne</li>
          <li>Skin pigmentation</li>
          <li>Alopecia areata</li>
          <li>Atopic dermatitis/eczema</li>
          <li>Psoriasis</li>
          <li>Raynaud’s disease</li>
          <li>Rosacea</li>
          <li>Skin cancer</li>
          <li>Vitiligo</li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the symptoms?</h3>
        <h5 className="include">
          Most often, skin problems may cause the following symptoms:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].skinProblems[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h3 className="question">What are the risk factors?</h3>
        <h5 className="include">Risk factors for skin problems include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].skinProblems[0].riskFactors.map((item) => (
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
          Diagnosis is usually made by closely examining the skin of an
          individual. However, a few additional tests may also help confirm the
          diagnosis.
        </p>
        <h5 className="include">These include:</h5>
        <ul>
          <li>
            <strong>Biopsy :</strong>In this, a small portion of skin is removed
            and examined under the microscope.
          </li>
          <li>
            <strong>Culture :</strong>A small skin sample is taken and cultured
            to see for any bacterial, fungal, or viral growth.
          </li>
          <li>
            <strong>Skin patch test :</strong>This involves application of small
            amounts of specific substances on the skin of an individual and
            observing for any reactions.
          </li>
          <li>
            <strong>Wood light test :</strong>Also known as Blacklight
            examination. It uses ultraviolet (UV) light to view pigments on the
            skin more clearly.
          </li>
          <li>
            <strong>Diascopy :</strong>In this, a microscopic slide is pressed
            against any skin patch to check if the skin changes colour.
          </li>
          <li>
            <strong>Dermoscopy :</strong>Here, a device called dermatoscope is
            used to diagnose any skin lesions.
          </li>
          <li>
            <strong>Tzanck test :</strong>In this, fluid from the blister is
            taken and checked for herpes simplex or herpes zoster virus.
          </li>
        </ul>
        <div className="questions">
          <h3 className="question">What is the treatment?</h3>
          <p>
            Depending on the severity of the skin problem, the healthcare
            provider may recommend one of the following treatments.
          </p>

          <ul>
            <li>
              <strong>Antibiotics :</strong>These medications help improve skin
              condition during infections by providing bactericidal (kill
              bacteria) or bacteriostatic (stop bacterial growth) effects.
            </li>
            <li>
              <strong>Antihistamines :</strong>
              These medications help block certain allergic reactions that are
              caused due to the release of histamines in the body when exposed
              to allergens.
            </li>
            <li>
              <strong>Laser skin resurfacing :</strong>
              It helps in skin rejuvenation by resurfacing its upper layers.
              Furthermore, it improves the appearance of the skin of an
              individual.
            </li>
            <li>
              <strong>Medicated creams/ointments/gels :</strong>
              These medications control itching, thereby helping in skin repair.
            </li>
            <li>
              <strong>Moisturizer :</strong>
              This helps maintain the water and oil balance of the skin.
            </li>
            <li>
              <strong>Oral medications :</strong>Medications such as
              antifungals, antivirals, vitamins, etc are prescribed to treat
              skin diseases. These medications help fight infections and improve
              the symptoms in an individual.
            </li>
            <li>
              <strong>Steroids :</strong>These medications help relieve symptoms
              such as inflammation, redness, itching, etc.
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default SkinProblems;
const Wrapper = styled.section``;
