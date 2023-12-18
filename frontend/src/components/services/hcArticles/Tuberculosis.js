import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const Tuberculosis = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is Tuberculosis?</h3>
        <p className="answer">
          Tuberculosis (TB) is a bacterial infection caused by “Mycobacterium
          tuberculosis” and other related species. TB infection can affect any
          part of your body such as the skin, brain, kidney, intestine, spine,
          and most commonly lungs. The infection can transmit from the infected
          person to a normal individual. TB infection can exist in two
          conditions:
        </p>
        <ul>
          <li>
            <strong>Latent TB infection :</strong>It occurs when the immune
            system can control TB infection. Individuals with latent TB
            infection do not experience any symptoms.
          </li>
          <li>
            <strong>Active TB infection :</strong>It occurs when the immune
            system losses its ability to control TB infection. It occurs
            immediately after primary infection (entry of disease-causing
            organisms into the body).
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What are the symptoms of tuberculosis?</h3>
        <p>
          Symptoms of tuberculosis depend on the area of the body where TB
          bacteria is growing. People with latent TB infection do not experience
          any symptoms.
        </p>
        <h5 className="include">Common symptoms of active TB include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].tuberculosis[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h3 className="question">
          What are the risk factors for tuberculosis?
        </h3>
        <p>
          According to the Centers for Disease Control and Prevention, a TB test
          is recommended for individuals with an increased risk of active TB
          infection.
        </p>
        <h5 className="include">Risk of TB infection</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].tuberculosis[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose TB?</h3>
        <p>
          Tuberculosis (TB) infection can be diagnosed by performing a
          combination of physical examination and TB tests.
        </p>
        <h4>Physical examination :</h4>
        <p>
          Your healthcare provider will examine your breathing sounds, and check
          for any swollen lymph nodes by assessing your symptoms.
        </p>
        <h4>TB tests include the following :</h4>
        <ul>
          <li>
            <strong>Skin test :</strong>This test is performed to determine
            whether your immune system is reacting to the TB infection or not. A
            substance called tuberculin (antigen) is injected below the skin of
            the forearm. A healthcare provider will check for swelling at the
            site of injection. The size of raised skin will determine the test
            results.
          </li>
          <li>
            <strong>Blood test :</strong>This test determines the presence of
            “Mycobacterial species” in a sample of blood. A positive test means
            you are more likely to have a latent or active TB infection. Your
            healthcare provider will recommend you suitable test based on your
            condition.
          </li>
          <li>
            <strong>Chest X-ray :</strong>A typical active TB infection shows
            the presence of irregular patches in the chest X-ray of the lungs of
            an infected person.
          </li>
          <li>
            <strong>Sputum tests :</strong>It is a quick laboratory test that
            determines the presence of TB bacteria in the given sample of sputum
            (mucus that comes while coughing).
          </li>
        </ul>
        <div className="questions">
          <h3 className="question">What is the treatment for TB?</h3>
          <p>
            Tuberculosis infection can be treated with antibiotics. Your
            healthcare provider will recommend you an appropriate treatment
            plan, based on your symptoms and the severity of the infection
            (latent or active TB). This comprises of a first-line of TB drugs
            for treatment
          </p>
          <p>
            These medications must be taken daily for 4-6 months to be
            effective. Tuberculosis infection that does not respond to the
            standard treatment regimen is called “drug-resistant TB”, which
            requires alternative treatment. Talk to your healthcare provider if
            your symptoms are not subsiding with the prescribed medications
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Tuberculosis;
const Wrapper = styled.section``;
