import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const LiverDiseases = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What are Liver Diseases?</h3>
        <p className="answer">
          Conditions that can harm your liver are referred to as "liver
          diseases." Different liver diseases include hepatitis A, B, and C,
          which are caused by hepatitis viruses, while alcohol-related fatty
          liver disease is brought about by excessive alcohol consumption.
        </p>
        <p className="answer">
          Liver disease can eventually lead to cirrhosis (scarring). The liver
          can no longer function normally as more scar tissue takes the place of
          healthy liver tissue. Untreated liver disease may result in liver
          cancer and liver failure.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What are the symptoms?</h3>
        <p>
          Some types of liver conditions such as non-alcohol fatty liver disease
          rarely exhibit any symptoms.
        </p>
        <h5 className="include">
          The general symptoms of liver diseases include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].liverDiseases[0].symptoms.map((item) => (
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
          The risk factors for liver diseases include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].liverDiseases[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose diseases?</h3>
        <p>
          Healthcare practitioners may recommend one or more of the below tests
          to properly diagnose and determine the cause of liver disease.
        </p>
        <strong>Laboratory tests</strong>
        <ul>
          <li>
            <strong>Blood tests :</strong>Blood tests called liver function
            tests (LFTs) are used to monitor and diagnose liver diseases such as
            hepatitis and liver damage. These tests measure the levels of
            various proteins, enzymes, and bilirubin (a waste product of the
            blood). Some liver function tests gauge the liver's efficiency in
            performing its typical tasks of producing proteins and eliminating
            bilirubin.
            <p>
              Other tests monitor the levels of enzymes such as aspartate
              aminotransferase (AST), alanine aminotransferase (ALT), etc., that
              the liver cells produce in response to an injury or disease. If
              the liver enzyme levels are abnormal, it may indicate that the
              liver is not functioning properly
            </p>
          </li>
          <li>
            <strong>Imaging tests :</strong>Imaging tests such as an ultrasound,
            MRI, or CT scan are used to check the liver for signs of injury,
            scarring, or tumours. Fibroscan is a special type of ultrasound that
            can be used to assess the degree of liver fat deposition and
            scarring.
          </li>
          <li>
            <strong>Liver biopsy :</strong>During the biopsy procedure, a tiny
            sample of liver tissue is extracted using a thin needle to analyze
            the tissue for indicators of liver disease.
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What are the treatments?</h3>
        <p>
          The best course of treatment will depend on the type and stage of the
          liver disease.
        </p>
        <h5 className="include">
          Possible treatments for liver disease include:
        </h5>
        <ul>
          <li>
            <strong>Medications :</strong>Some forms of liver disease are
            managed using medications. Gallstone dissolution agents are used to
            treat primary biliary cirrhosis by slowing down the liver damage
            process. Steroid medications help prevent the immune system from
            attacking the liver and are used to treat autoimmune hepatitis.
          </li>
          <li>
            <strong>Lifestyle changes :</strong>Some types of liver disease can
            be managed with diet. Alcohol should be avoided, fat and calorie
            intake should be reduced, and fiber intake should be increased if an
            individual is having fatty liver disease. Alcohol abstinence can
            help the liver recover from damage caused by alcohol.
          </li>
          <li>
            <strong>Liver transplant :</strong>A liver transplant may be the
            most effective course of treatment when liver disease leads to liver
            failure. During a transplantation procedure, a damaged liver is
            replaced with a healthy donor’s liver.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default LiverDiseases;
const Wrapper = styled.section``;
