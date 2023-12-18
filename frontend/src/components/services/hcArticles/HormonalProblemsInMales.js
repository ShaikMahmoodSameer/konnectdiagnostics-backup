import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const HormonalProblemsInMales = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What are hormonal problems in males?</h3>
        <p className="answer">
          Hormones are biological chemicals in the body, produced by endocrine
          glands. They move through the bloodstream to reach different organs
          and tissues in the body. Hormonal problems in males occur if their
          body produces excess or a small quantity of important hormones in the
          bloodstream.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">Types of hormonal imbalances in males</h3>
        <h5 className="include">
          Imbalances in hormones such as testosterone, insulin, and cortisol
          result in different types of hormonal imbalances in males
        </h5>
        <ul>
          <li>
            <strong>Andropause :</strong>It is a condition that is associated
            with a decrease in the male hormone, testosterone.
          </li>
          <li>
            <strong>Hypothyroidism :</strong>It takes place when there is a
            decreased production of thyroid hormones.
          </li>
          <li>
            <strong>Adrenal fatigue :</strong>It occurs due to decreased levels
            of cortisol as a result of long exposure to stress.
          </li>
          <li>
            <strong>Hyperthyroidism :</strong>It happens as a result of
            increased production of thyroid hormones.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the symptoms?</h3>
        <h5 className="include">
          Signs and symptoms that you may experience include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].hormonalProblemsInMales[0].symptoms.map((item) => (
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
          People are more susceptible to hormonal problems due to their:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].hormonalProblemsInMales[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">
          How to diagnose hormonal problems in males?{" "}
        </h3>
        <h5 className="include">
          There is no specific test to diagnose hormonal problems in males but
          your healthcare provider may suggest diagnostic tests depending on
          your symptoms. Common diagnostic tests include:
        </h5>
        <ul>
          <li>
            <strong>Blood test :</strong>A blood sample is taken from a vein in
            your arm and sent to the laboratory to determine hormone levels.
            This test can detect the levels of testosterone, cortisol, thyroid,
            and estrogen levels.
          </li>
          <li>
            <strong>Physical examination :</strong>It is performed to evaluate
            the size, and shape of the male reproductive organs which can
            indicate the signs of hormonal imbalances.
          </li>
          <li>
            <strong>Imaging tests :</strong>
            The healthcare provider may suggest an ultrasound, MRI, or CT scan
            to detect structural abnormalities such as cysts, and tumors in the
            reproductive organs and to evaluate the function of the testes and
            pituitary gland that are involved in hormone production.
          </li>
          <li>
            <strong>Sperm count test :</strong>
            The sperm count test evaluates the quantity and quality of sperm in
            the semen which can be affected as a result of hormonal problems.
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">
          What is the treatment for hormonal problems in males?{" "}
        </h3>
        <h5 className="include">
          Treatments for hormonal problems in males depend on the type of
          symptoms shown. Common treatments include:
        </h5>

        <ul>
          <li>
            <strong>Lifestyle changes :</strong> Lifestyle changes such as
            physical activity, losing weight, a healthy diet, and stress
            management can help to decrease hormonal problems in males.
          </li>
          <li>
            <strong>Testosterone therapy :</strong> Testosterone medications
            such as patches and gels, reduce the decreased testosterone levels
            and the symptoms of hypogonadism.
          </li>
          <li>
            <strong>Metformin :</strong> Metformin is a medication that can
            lower insulin levels and blood sugar levels and can help maintain
            the hormonal balance of insulin.
          </li>
          <li>
            <strong>Bio-Identical Replacement Therapy (BHRT) :</strong> BHRT
            uses hormones which are similar to the ones that are produced in
            your body to restore normal hormone levels.
          </li>
          <li>
            <strong>Thyroid hormone therapy :</strong> Thyroid hormone therapy
            can balance the thyroid hormone levels if you have a condition of
            hypothyroidism.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default HormonalProblemsInMales;
const Wrapper = styled.section``;
