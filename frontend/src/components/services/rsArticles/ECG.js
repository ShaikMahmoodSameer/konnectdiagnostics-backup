import styled from "styled-components";

const ECG = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is Electrocardiogram?</h3>
        <p className="answer">
          Electrocardiogram or ECG (also called EKG) is a simple, non-invasive
          test that is used to document the electrical activity of the heart. A
          healthcare provider often calls for it to diagnose certain heart
          conditions, such as abnormal heart rhythms and coronary heart disease
          (angina and heart attack).
        </p>
      </div>
      <div className="questions">
        <h3 className="question">How does Electrocardiogram work?</h3>
        <p>
          ECG records the electrical signals of the heart. Electrodes are placed
          on the chest, arms, and legs to capture the electrical impulses that
          cause the heart to beat. The signals are visible as waves, on a
          connected computer monitor or printer.
        </p>
        <h5 className="include">
          There are different types of ECG machines including:
        </h5>
        <ul>
          <li>
            <strong>Holter monitor :</strong>It is a small wearable device that
            continuously records an ECG for 24 to 48 hours.
          </li>
          <li>
            <strong>Event monitor :</strong>It is a portable device that can be
            worn for up to 30 days and only records at certain durations for a
            few minutes at a time.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">When is ECG recommended?</h3>
        <p>
          A healthcare provider may advise an individual to get an ECG done if
          they are experiencing symptoms such as:
        </p>

        <ul>
          <li>Chest pain</li>
          <li>Breathlessness </li>
          <li>Sweating </li>
          <li>Dizziness </li>
          <li>Fainting </li>
          <li>
            Feeling of fluttering, thumping, or pounding in chest (palpitations)
          </li>
        </ul>
        <p>
          ECG is used to examine the activity of heart and help to diagnose
          conditions such as long QT syndrome or bundle branch block (conditions
          involving the electrical system of the heart), heart attacks and
          pericarditis or myocarditis (heart inflammation).
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What preparation is needed for ECG?</h3>
        <p>
          It is necessary to take off the upper body clothing and change into a
          hospital gown at the testing facility for an ECG test, and it is
          recommended to shave or clean the chest before the electrodes are
          attached.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the advantages of ECG?</h3>

        <ul>
          <li>Determines the source of chest pain or chest fluttering.</li>
          <li>Checks for abnormally fast or slow heart rates.</li>
          <li>Checks for irregular heartbeats.</li>
          <li>Determines the overall health of heart.</li>
          <li>Examines cardiovascular health before and after surgery.</li>
          <li>Assesses whether a heart medication is effective.</li>
          <li>Checks the functioning of a pacemaker.</li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">How long does ECG take?</h3>
        <p>Depending on the type of the ECG, the duration of test varies.</p>
        <ul>
          <li>
            <strong>Resting ECG :</strong>In this test, no movement of the
            individual is allowed as electrical impulses from other muscles can
            interfere with the test results. This type of ECG typically takes 5
            to 10 minutes.
          </li>
          <li>
            <strong>Ambulatory ECG :</strong>In this test, a portable recording
            device is worn for at least 24 hours.
          </li>
          <li>
            <strong>Exercise stress test or stress test :</strong>In this test,
            an ECG monitor is worn while using a treadmill or a stationary bike
            for exercise. This type of ECG takes roughly 15 to 30 minutes.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the risks of ECG?</h3>
        <ul>
          <li>
            If the electrode patches are worn for an extended period of time it
            may cause some irritation to the skin.
          </li>
          <li>
            It does not reveal underlying heart issues in patients who do not
            display any symptoms of heart disease.
          </li>
          <li>
            It does not always give an accurate diagnosis. Further testing is
            required to find out serious heart issues that a typical ECG curve
            cannot detect.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default ECG;
const Wrapper = styled.section``;
