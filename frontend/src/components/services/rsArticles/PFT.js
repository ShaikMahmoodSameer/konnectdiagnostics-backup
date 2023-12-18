import styled from "styled-components";

const PFT = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is Pulmonary Function Test?</h3>
        <p className="answer">
          Pulmonary Function Test or PFT involves different tests that help
          determine an individual's lung capacity. A healthcare provider
          recommends these tests to assess how much air enters and exits the
          lungs in a given span of time. It is especially helpful in chronic
          lung conditions such as asthma and bronchitis.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">How does Pulmonary Function Test work?</h3>
        <p>
          PFT consists of a clear, airtight box, soft nose clips, a mouthpiece,
          and a small electronic machine.
        </p>
        <h5 className="include">
          Using this equipment, a series of tests are done. These include:
        </h5>
        <ul>
          <li>
            <strong>Spirometry :</strong>Firstly, the nose clips are placed on
            an individual’s nose. Then a mouthpiece is given which is connected
            to a spirometer. Following it, the individual is instructed on how
            to breathe in and out with the help of a mouthpiece.
          </li>
          <li>
            <strong>Body Plethysmography :</strong>In this, the individual is
            placed in a clear air-tight box with the nose clips on for a span of
            five minutes. Later, they are advised to breathe using a mouthpiece
            as instructed. The spirometer then detects pressure or volume
            changes in the box to measure lung capacity.
          </li>
          <li>
            <strong>Gas Diffusion Study :</strong>In this, nose clips are put on
            an individual’s nose, and they are instructed to breathe in and out,
            a small amount of carbon monoxide using a mouthpiece. The spirometer
            detects how much carbon monoxide the individual exhales. This
            indicates how much gas the individual’s lungs had absorbed during
            the procedure.
          </li>
          <li>
            <strong>Cardiopulmonary exercise test :</strong>A set of machines
            are attached to an individual to measure heartbeat, blood pressure,
            and blood oxygen levels. They are then instructed to walk on a
            treadmill or ride a stationary bicycle to help measure various
            parameters of the heart, lungs, and muscles.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">When is PFT recommended?</h3>
        <p>
          PFT testing is recommended for individuals who have conditions such
          as:
        </p>

        <ul>
          <li>Allergies</li>
          <li>Respiratory infections</li>
          <li>Breathing issues due to recent chest surgery or an injury</li>
          <li>Chronic lung conditions such as asthma, bronchitis, etc.</li>
          <li>Asbestosis</li>
          <li>
            Restrictive airway problems due to tumours, inflammation of
            respiratory pathways, etc.
          </li>
          <li>
            Scleroderma, which involves the thickening and hardening of
            connective tissues
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What preparation is needed for the test?</h3>
        <p>Before taking the test, an individual is usually required:</p>
        <ul>
          <li>• To stop bronchodilator medications for at least four hours.</li>
          <li>• To stop smoking hours before the test.</li>
          <li>
            • To remove tight clothing, and wear a loose gown and comfortable
            shoes.
          </li>
          <li>
            • To inform their healthcare professional if they are pregnant or
            have any other medical condition.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the advantages of PFT?</h3>
        <ul>
          <li>It is quick and easy to use.</li>
          <li>It is non-invasive.</li>
          <li>
            It is helpful in developing treatment plans for individuals having
            respiratory issues.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">How long does PFT testing take?</h3>
        <p>
          The time required to complete a PFT ranges from one to one and a half
          hours.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the risks of PFT?</h3>

        <ul>
          <li>
            Although PFT is safe, a few individuals may experience increased
            heart rate, dizziness, or tiredness due to heavy breathing during
            the test. These symptoms usually resolve on their own within a few
            minutes to a couple of hours.
          </li>
          <li>Rarely, the test may lead to a collapsed lung (pneumothorax).</li>
          <li>
            People who have issues such as heart attacks, chest surgery, and
            more severe respiratory infections may experience problems during
            the test.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default PFT;
const Wrapper = styled.section``;
