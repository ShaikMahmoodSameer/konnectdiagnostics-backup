import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const HeartDisease = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is Heart Disease?</h3>
        <p className="answer">
          Numerous heart conditions fall under the umbrella term of "heart
          disease." It is also known as cardiovascular disease, which refers to
          both heart and blood vessel disease. Coronary artery disease (CAD) is
          one of the most common type of heart disease that affects blood flow
          to the heart, and reduced blood flow may cause a heart attack.
        </p>
        <p className="answer">
          Other heart conditions include congestive heart failure, endocarditis
          (inflammation of the inner layer of the heart), irregular heartbeats,
          and congenital heart disease (heart disease present at birth).
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the symptoms? </h3>
        <p>
          The symptoms of heart disease can differ depending on the type of
          disease. An individual may initially show no symptoms. Sometimes
          people with heart disease may not even be aware that they have a heart
          disease until a complication such as a heart attack occurs.
        </p>
        <h5 className="include">
          The general symptoms of heart disease include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].heartDisease[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">What are the risk factors?</h3>
        <h5 className="include">The risk factors for heart disease include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].heartDisease[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose? </h3>
        <p>
          A risk assessment may be performed by a healthcare practitioner if
          they believe that an individual is at risk of coronary heart disease.
        </p>
        <p>
          They will conduct a blood test and inquire about the individual’s
          lifestyle, medical and family history.
        </p>
        <h5 className="include">
          To confirm coronary heart disease, additional examinations might be
          required, such as:
        </h5>
        <ul>
          <li>
            <strong>Blood test :</strong>To assess the cholesterol level.
          </li>
          <li>
            <strong>Electrocardiogram (EKG or ECG) :</strong>To document the
            electrical activity of the heart and to diagnose certain heart
            conditions, such as abnormal heart rhythms and coronary heart
            disease (angina and heart attack).
          </li>
          <li>
            <strong>Echocardiogram :</strong>
            To take images of the heart valves and chambers using an ultrasound
            (high frequency sound waves).
          </li>
          <li>
            <strong>Treadmill test (TMT) :</strong>
            To monitor breathing, blood pressure, and heartbeat using a
            treadmill or a stationary bike during exercise.
          </li>
          <li>
            <strong>Heart CT scan :</strong>
            To produce detailed images of heart structures and blood vessels by
            combining a number of X-ray images taken from various angles.
          </li>
          <li>
            <strong>Heart MRI scan :</strong>
            To create pictures of parts of the heart including chambers,
            muscles, and valves using radio waves and a magnetic field.
          </li>
          <li>
            <strong>Cardiac catheterization :</strong>
            To see how blood moves through the arteries in the heart using
            X-rays and a special dye.
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What are the treatments? </h3>
        <p>
          Individuals affected by a heart disease might need to adjust their
          daily routine, take medications, or undergo surgery depending on their
          heart condition
        </p>
        <h5 className="include">The treatments for heart disease include:</h5>

        <ul>
          <li>
            <strong>Lifestyle changes :</strong> This involves giving up on
            tobacco products, cutting back the saturated fats in diet, or
            starting a walking regimen.
          </li>
          <li>
            <strong>Medicines :</strong> This requires consuming medicines such
            as statins to lower blood pressure and cholesterol. Also, certain
            medications such as beta blockers can help with abnormal heart
            rhythm or heart failure. It is vital to take these medications
            consistently as prescribed.
          </li>
          <li>
            <strong>Surgical procedures :</strong> The type of heart disease and
            the degree of heart damage will determine the type of procedure or
            surgery required. This could involve getting an ablation, minimally
            invasive surgery, or an open-heart surgery. Other procedures include
            cardioversion, stent placement, or catheterization.
          </li>
          <li>
            <strong>Cardiac rehab program :</strong> This involves a carefully
            supervised exercise regimen for individuals recovering from a heart
            attack, heart failure, or heart surgery. The following are some of
            the components of this program that helps to strengthen the heart.
            <ul>
              <li>Involving in physical activities</li>
              <li>Educating about healthy living</li>
              <li>
                Counseling to find methods of reducing stress and improving
                mental health
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default HeartDisease;
const Wrapper = styled.section``;
