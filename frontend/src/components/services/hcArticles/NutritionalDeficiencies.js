import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const NutritionalDeficiencies = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is nutritional deficiency?</h3>
        <p className="answer">
          Nutrients are crucial elements for growth and immunity. These
          nutrients are absorbed by the body from the food we eat and when this
          doesn’t happen, nutritional deficiency occurs, which may have a huge
          impact on the overall health of a person. Vitamins, minerals, and some
          fatty acids constitute nutrients of the body that are easily available
          through diet. The lack of a healthy and balanced diet can be a
          prominent cause of nutritional deficiency.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">
          What are the types of nutritional deficiencies?
        </h3>
        <h5 className="include">
          The various types of nutritional deficiencies are:
        </h5>
        <ul>
          <li>Mineral deficiency</li>
          <li>Vitamin deficiency</li>
          <li>Protein deficiency</li>
          <li>Lipid deficiency </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">
          What are the symptoms of nutritional deficiency?
        </h3>
        <h5 className="include">
          The most common symptoms of nutritional deficiencies are as follows:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].nutritionalDeficiencies[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">
          What are the risk factors for nutritional deficiencies?
        </h3>
        <h5 className="include">
          The risk factors for nutritional deficiencies are as follows:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].nutritionalDeficiencies[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose nutritional deficiencies?</h3>
        <p>
          Your healthcare provider may recommend an advanced vitamin, iron, and
          mineral test to diagnose nutritional deficiencies. It is a blood test
          in which the levels of iron, complete profile of vitamin A, B1 to B12,
          D, D3, E, and K, folic acid, calcium, magnesium, complete blood count,
          etc. are measured.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">
          What is the treatment for nutritional deficiencies?
        </h3>
        <p>
          Treatment for nutritional deficiency depends on the element of
          deficiency and its severity.
        </p>
        <h5 className="include">The usual treatment includes:</h5>
        <ul>
          <li>
            <strong>Change in Diet and Eating Habits :</strong>A change in the
            diet ensures getting sufficient nutrients that are required for
            growth and immunity. Having a balanced diet, eating fortified foods,
            snacking between meals, and having low-calorie drinks, help to
            improve your nutrition.
          </li>
          <li>
            <strong>Vitamin & Mineral Supplementation :</strong>Providing
            additional vitamin and mineral supplements that are easily absorbed
            is recommended.
          </li>
          <li>
            <strong>Essential Fatty Acids :</strong>Essential fatty acids such
            as omega 3 are recommended either through dietary resources, for
            example fish, flax seeds, walnuts, etc., or through supplements.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default NutritionalDeficiencies;
const Wrapper = styled.section``;
