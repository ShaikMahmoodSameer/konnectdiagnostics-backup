import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const Hypertension = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is Hypertension?</h3>
        <p className="answer">
          Hypertension, also called “High Blood Pressure” is a condition in
          which the pressure in your blood vessels is higher than normal, making
          your heart work harder to pump blood. The normal reading of blood
          pressure is 120/80 mm of Hg. It has two readings.
        </p>
        <ul>
          <li>
            <strong>Upper reading, called systolic pressure :</strong>It
            measures the pressure in the arteries during the heartbeat.
          </li>
          <li>
            <strong>Lower reading, called diastolic pressure :</strong>It
            measures the pressure in the arteries between the heartbeats.
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What are the symptoms of Hypertension?</h3>
        <h5 className="include">
          Most of the people with hypertension do not show any symptoms. The
          symptoms may vary based on the stage and severity of the condition. A
          few people with high blood pressure (mostly 180/120 mm of Hg) may
          experience the following symptoms:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].hypertension[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">
          What are the risk factors for Hypertension?
        </h3>
        <h5 className="include">Risk factors for hypertension include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].hypertension[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose Hypertension?</h3>
        <h5 className="include">
          Hypertension (high blood pressure) can be diagnosed by performing the
          following procedures and tests:
        </h5>
        <ul>
          <li>
            <strong>Physical examination :</strong>Your healthcare provider will
            examine and listens to your heart sounds by taking your past medical
            history and symptoms into consideration. Using a sphygmomanometer (a
            device used to measure arterial pressure), your blood pressure will
            be checked by placing a cuff around your arm. After that, the cuff
            is inflated using a machine or hand pump and then the readings are
            noted.
          </li>
          <li>
            <strong>Physical examination :</strong>It is performed to evaluate
            the size, and shape of the male reproductive organs which can
            indicate the signs of hormonal imbalances.
          </li>
          <li>
            <strong>Tests :</strong>
            If you are diagnosed with hypertension, your healthcare provider may
            recommend you the following tests to determine the cause.
            <ul>
              <li>
                <strong>Ambulatory monitoring :</strong>
                It is the monitoring of blood pressure at regular intervals of 6
                to 24 hours by healthcare providers.
              </li>
              <li>
                <strong>Lab tests :</strong>
                Routine investigations such as blood and urine culture tests are
                performed to determine the exact cause that worsens
                hypertension. Lab tests may also be performed to determine the
                functioning of your liver, thyroid, and kidney.
              </li>
              <li>
                <strong>Electrocardiogram (ECG or EKG) :</strong>
                It is a painless and quick procedure that measures the
                electrical activity of the heart.
              </li>
              <li>
                <strong>Echocardiogram :</strong>
                It is a non-invasive procedure that shows the movement of blood
                through the valves of the heart and produces detailed images of
                a heartbeat.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What is the treatment for Hypertension?</h3>
        <p>
          Hypertension can be treated by lifestyle modifications and
          medications. Based on your blood pressure readings, your healthcare
          provider will recommend you an appropriate treatment.
        </p>

        <ul>
          <li>
            <strong>Lifestyle modifications :</strong> By following appropriate
            changes in your basic lifestyle, one can reduce high blood pressure
            without medications. Recommended lifestyle modifications are:
            <ul>
              <li>Maintaining a healthy weight</li>
              <li>Consuming a diet rich in antioxidants and vitamins</li>
              <li>Exercising on a daily basis</li>
              <li>Reducing excess salt in the diet</li>
              <li>Including good amounts of potassium</li>
              <li>Limiting alcohol consumption</li>
              <li>Avoiding tobacco usage</li>
              <li>Getting proper sleep (7-8 hours) daily</li>
            </ul>
            <p>
              Healthcare providers may recommend medications along with
              lifestyle modifications for a few individuals.
            </p>
          </li>
          <li>
            <strong>Medications :</strong> The following are the first-line
            (most effective) and commonly prescribed medications to treat high
            blood pressure.
            <ul>
              <li>
                <strong>
                  Angiotensin-converting enzyme (ACE) inhibitors :
                </strong>
                They block angiotensin II hormone production that is responsible
                for hypertension. They help in the relaxation of blood vessels
                by inhibiting the substance that narrows blood vessels.
              </li>
              <li>
                <strong>Angiotensin II receptor blockers (ARBs) :</strong>They
                work in a way similar to ACE inhibitors and relax blood vessels.
              </li>
              <li>
                <strong>Calcium channel blockers :</strong>They block the entry
                of calcium into the muscle cells of the heart and blood vessels,
                thereby relaxing them.
              </li>
              <li>
                <strong>Diuretics (water or fluid pills) :</strong>These
                medications remove the excess levels of sodium through
                excretion.
              </li>
            </ul>
            <p>
              Apart from the above medications, your healthcare provider may
              prescribe you various other medications based on your condition
              and history.
            </p>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Hypertension;
const Wrapper = styled.section``;
