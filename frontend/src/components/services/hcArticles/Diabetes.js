import { hcIcons } from "../../../assets/data/HcSymptomsData";

import styled from "styled-components";

const Diabetes = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is Diabetes?</h3>
        <p className="answer">
          Diabetes, commonly referred to as hyperglycaemia, is a chronic
          (long-lasting) condition characterized by increased blood glucose
          (blood sugar) levels over time and can cause significant health
          complications of heart, nerve, kidney, and eye diseases.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">Types of Diabetes</h3>
        <h5 className="include">
          Diabetes is of mainly three types: Type 1, Type 2, and gestational
          diabetes (diabetes during pregnancy).
        </h5>
        <ul>
          <li>
            <strong>Type 1 Diabetes :</strong>It is an auto-immune condition in
            which autoantibodies (proteins) attack normal pancreatic cells that
            produce insulin, leading to diabetes. Type 1 diabetes is mostly
            diagnosed in children, teens, and young adults.
          </li>
          <li>
            <strong>Type 2 Diabetes :</strong>In this type, the body is unable
            to produce enough insulin to regulate blood sugar levels. It takes
            years to develop and is mostly seen in adults.
          </li>
          <li>
            <strong>Gestational Diabetes :</strong>It develops during pregnancy
            in women who have never had diabetes due to changes in insulin
            levels.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the symptoms of Diabetes?</h3>
        <h5 className="include">Risk factors of COVID include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].diabetes[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h3 className="question">What are the risk factors for Diabetes?</h3>
        <h5 className="include">Risk factors for diabetes include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].diabetes[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose Diabetes?</h3>
        <h5 className="include">
          Diabetes can be diagnosed by performing the following tests:
        </h5>
        <ul>
          <li>
            <strong>Glycated haemoglobin test (HbA1C) test :</strong>This test
            measures the average blood sugar (glucose) levels attached to the
            haemoglobin (oxygen-carrying protein) over the past 2 to 3 months.
          </li>
          <li>
            <strong>Fasting blood sugar (FBS) test :</strong> It measures the
            amount of glucose in the blood at a given time. It is advised to
            undergo testing on an empty stomach to obtain accurate test results.
          </li>
          <li>
            <strong>
              Post-prandial (after-meal) blood sugar (PPBS) test :
            </strong>
            It measures how your body reacts to sugar and starch after a meal.
            The level of blood sugar rises as food is digested in the stomach.
          </li>
          <li>
            <strong>Random blood sugar (RBS) :</strong>
            This test measures blood glucose range at any random time of the
            day, without fasting.
          </li>
          <li>
            <strong>Glucose tolerance test :</strong>
            The glucose tolerance test, determines the ability of your body to
            metabolize glucose (i.e. from blood into tissues). This test is
            useful for screening individuals for diabetes.
          </li>
        </ul>
        <p>
          Apart from the above tests, diabetes can be diagnosed by using routine
          urine culture tests.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What is the treatment for Diabetes?</h3>
        <h5 className="include">
          Diabetes can affect individuals differently. It can be managed by
          following several strategies:
        </h5>
        <p>The following are the main aspects of managing diabetes</p>

        <ul>
          <li>
            <strong>Monitoring of blood sugar :</strong> Continuous monitoring
            of blood sugar is the key to determining how well your body is
            responding to the current treatment plan.
          </li>
          <li>
            <strong>Oral diabetes medications :</strong> Several oral diabetic
            medications are used to manage blood sugar levels in people with
            Type 2 diabetes and prediabetes.
          </li>
          <li>
            <strong>Insulin :</strong> Various synthetic forms of insulins such
            as injectable insulin with a syringe, insulin pumps, insulin pens,
            and rapid-acting insulin can be used to treat Type 1 diabetes and
            sometimes for type 2 diabetes also.
          </li>
          <li>
            <strong>Diet :</strong> Dietary habits can impact our blood sugar
            levels. Choosing a healthy diet plays a key role in the management
            of diabetes and reduces the risk of heart disease by maintaining a
            healthy weight.
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

export default Diabetes;
const Wrapper = styled.section``;
