import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const Asthma = () => {
  return (
    <Wrapper>
      <div className="hc-article">
        <div className="questions">
          <h3 className="question">What is Asthma?</h3>
          <p className="answer">
            Asthma, a chronic lung disease, usually affects the airways (tubes
            through which air goes in and out of the lungs), making them narrow
            and causing them to swell. This leads to difficulty in breathing.
            For some individuals, asthma may cause minor symptoms but for a few,
            it may pose severe problems that may interfere with daily
            activities. If not treated properly, asthma can be a
            life-threatening condition.
          </p>
        </div>
        <div className="questions">
          <h3 className="question">What are the signs and symptoms?</h3>
          <p>
            The signs and symptoms of asthma may vary from one person to
            another.{" "}
          </p>
          <h5 className="include">The common signs and symptoms include:</h5>
          <ul>
            <li>
              <strong>Osteoarthritis :</strong> It is the most common type of
              arthritis, aka “wear and tear” arthritis. It is developed when the
              joint cartilage is broken down due to repeated stress.
            </li>
            <li>
              <strong>Rheumatoid arthritis :</strong>It is one of the autoimmune
              bone disorders that causes the immune system to attack its own
              synovial membrane of the joint.
            </li>
            <li>
              <strong>Psoriatic arthritis :</strong> It is a condition that is
              seen in individuals who have psoriasis (an autoimmune condition
              that causes irritation of the skin).
            </li>
            <li>
              <strong> Lupus :</strong>
              It is an autoimmune condition (SLE or systemic lupus
              erythematosus) that affects the joints and many other organs of
              the body, mistaking them to be foreign entities.
            </li>
            <li>
              <strong>Ankylosing spondylitis :</strong>
              It affects the spine (usually the lower back) of an individual.
            </li>
            <li>
              <strong>Juvenile arthritis :</strong>
              It is typically seen in children aged 16 years and above. It
              causes the immune system to attack the tissue around the joint.
            </li>
            <li>
              <strong>Gout :</strong>
              It happens when hard crystals of uric acid are formed in the
              joints of an individual.
            </li>
          </ul>
          <h5 className="include">Signs that indicate worsening of asthma:</h5>
          <div className="icon-box d-flex flex-wrap gap-3">
            {hcIcons[0].asthma[0].symptoms.map((item) => (
              <div className="box">
                <img src={item.icon} alt="" />
                <h5>{item.symptom}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="questions">
          <h3 className="question">What are the asthma triggers? </h3>
          <p>
            Asthma triggers may vary from one individual to another. Exposure to
            various substances and irritants may trigger the signs and symptoms
            of asthma.
          </p>
          <h5 className="include">The common asthma triggers include:</h5>
          <div className="icon-box d-flex flex-wrap gap-3">
            {hcIcons[0].asthma[0].riskFactors.map((item) => (
              <div className="box">
                <img src={item.icon} alt="" />
                <h5>{item.symptom}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="questions">
          <h3 className="question">How to diagnose asthma? </h3>
          <p>
            Asthma can be diagnosed by a combination of physical and laboratory
            examinations.
          </p>
          <h5 className="include">Physical examination:</h5>
          <p>
            Healthcare providers will check for breathing sounds and patterns of
            breathing with the help of a stethoscope. If your symptoms are due
            to asthma, wheezing and other asthma-related sounds may be heard.
          </p>
          <h5 className="include">Laboratory tests:</h5>
          <ul>
            <li>
              <strong>Allergy testing :</strong>Blood test or a skin test is
              performed to determine that the individual is having asthmatic
              symptoms due to allergens.
            </li>
            <li>
              <strong>Arterial blood gas analysis :</strong> It measures the
              oxygen, carbon dioxide, and pH levels in the blood. It is
              performed at the time of severe asthma attacks.
            </li>
          </ul>
          <h5 className="include">Lung function tests:</h5>
          <ul>
            <li>
              <strong>Spirometry :</strong>It measures how fast an individual
              can breathe out and how much air an individual can hold in the
              lungs.
            </li>
            <li>
              <strong>Fractional exhaled nitric oxide (FeNO) test :</strong> It
              measures how much nitric oxide is present in an individual’s
              breath. The presence of higher levels of nitric oxide indicates
              that the airways are inflamed, which causes difficulty in
              breathing.
            </li>
            <li>
              <strong>Peak expiratory flow test :</strong> It measures how fast
              an individual can breathe out using maximum effort. It can be done
              with a small hand-held device or during spirometry.
            </li>
          </ul>
          <h5 className="include">Imaging tests:</h5>
          <ul>
            <li>
              <strong>Chest X-ray :</strong>It is the most commonly recommended
              diagnostic aid by healthcare providers. It can provide basic
              images of the lungs and its main bronchial tubes (airways). It can
              also help healthcare practitioners in the diagnosis of other lung
              diseases.
            </li>
            <li>
              <strong>CT of the Chest :</strong> It can help in diagnosing
              various diseases of the lungs.
            </li>
          </ul>
        </div>
        <div className="questions">
          <h3 className="question">What is the treatment?</h3>
          <h5 className="include">
            There is no permanent cure for asthma. Prevention and long-term
            control of symptoms are the best ways to treat them. Treatment of
            asthma usually includes long-term medications, quick-relief
            medications, and allergy medications.
          </h5>
          <li>
            <strong>Long-term medications :</strong> These are prescribed to be
            taken daily to control the symptoms. Medications such as inhaled
            corticosteroids, leukotriene modifiers, and combination inhalers are
            used as long-term medications.
          </li>
          <li>
            <strong>Allergy medications :</strong> Such medications can prevent
            the worsening of asthma due to allergens. Biologic medications and
            allergy shots (immunotherapy) can reduce an individual’s immune
            system reaction to a specific allergen. In emergency conditions,
            adrenaline auto-injectors can be used in individuals who are having
            severe allergic reactions.
          </li>
        </div>
      </div>
    </Wrapper>
  );
};

export default Asthma;
const Wrapper = styled.section``;
