import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const Obesity = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is obesity?</h3>
        <p className="answer">
          Obesity is a complex and chronic disease that can be categorized as
          having too much body mass compared to one’s height. This condition is
          the result of consuming more calories than can be burned by normal
          daily activities and exercise. A BMI (body mass index) of 30 kg/m2 or
          higher is usually termed obese. If left untreated, obesity may lead to
          a number of diseases that pose a risk to an individual’s health.
        </p>
      </div>

      {/* <div className="questions">
        <h3 className="question">How is obesity classified?</h3>
        <h5 className="include">
          Obesity is classified into three classes.They are as follows:
        </h5>
        <img src="" alt="" />
      </div> */}
      <div className="questions">
        <h3 className="question">What are the symptoms?</h3>
        <h5 className="include">Symptoms of obesity include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].obesity[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">What are the risk factors?</h3>
        <p>
          Very often obesity is associated with consuming more than calories
          than required by one’s body to metabolize. It causes the deposition of
          fats in the body
        </p>
        <h5 className="include">A few most common risk factors include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].obesity[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose obesity?</h3>
        <p>An individual’s diagnosis of obesity may be made through.</p>
        <ul>
          <li>Taking a medical history</li>
          <li>Physical examination</li>
          <li>Calculating BMI</li>
          <li>Measuring waist circumference</li>
          <li>Assessing other health conditions</li>
        </ul>
        <strong>Blood tests</strong>
        <ul>
          <li>Lipid profile test</li>
          <li>Liver function test</li>
          <li>Blood sugar test</li>
          <li>Thyroid profile test</li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What is the treatment?</h3>
        <h5 className="include">A typical treatment plan may include:</h5>
        <ul>
          <li>
            <strong>Dietary changes :</strong>It includes cutting down on
            excessive calories that can help individuals reduce their BMI.
          </li>
          <li>
            <strong>Increased activity :</strong>It includes adding physical
            activities to one’s daily routine. For example, exercising,
            swimming, running, etc.
          </li>
          <li>
            <strong>Behavioural therapies :</strong>These include therapies such
            as cognitive behavioural therapy that helps rewire the brain to
            support positive changes such as managing stress and addressing
            emotional and psychological challenges one faces.
          </li>
          <li>
            <strong>Medications :</strong>Certain medications such as appetite
            suppressants may help reduce one’s weight by limiting their food
            intake.
          </li>
          <li>
            <strong>Weight loss surgery :</strong>Some surgeries such as
            bariatric and non-bariatric surgeries can also help reduce weight.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Obesity;
const Wrapper = styled.section``;
