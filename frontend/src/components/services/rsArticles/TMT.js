import styled from "styled-components";

const TMT = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is Treadmill Test?</h3>
        <p className="answer">
          Treadmill test or TMT demonstrates how the heart beats during
          exercise. It is also known as a stress exercise test. The heart beats
          harder and faster during exercise. TMT may reveal issues with blood
          flow within the heart. A healthcare provider may call for this test if
          an individual experiences symptoms of coronary artery disease or
          arrhythmia (irregular heart beat).
        </p>
      </div>
      <div className="questions">
        <h3 className="question">How does Treadmill test work?</h3>
        <p>
          TMT entails using a treadmill or a stationary bike for exercise.
          Throughout the test, a healthcare provider keeps an eye on the
          individual’s breathing, blood pressure, and heartbeat. A medication
          that mimics the effects of exercise may be given to people who are
          unable to exercise.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">When is TMT recommended?</h3>
        <p>
          A doctor may advise an individual to get a TMT done if they are
          experiencing symptoms of coronary artery disease or an irregular heart
          rhythm such as:
        </p>

        <ul>
          <li>Chest pain</li>
          <li>Shortness of breath </li>
          <li>Cold sweats </li>
          <li>Dizziness or nausea</li>
          <li>Pain or discomfort in the shoulder or arms </li>
        </ul>
        <p>
          TMT is used to determine the effects of exercise on the heart and to
          diagnose conditions such as heart valve diseases, heart failure,
          cardiomyopathy (weak heart muscles), etc
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What preparation is needed for TMT?</h3>
        <p>
          48 hours prior to the TMT test, it is recommended to stop taking any
          medications used for treating erectile dysfunction. Ensure your doctor
          is aware of what prescription drugs, over-the-counter medicines, or
          dietary supplements you are taking.
        </p>
        <p>
          Put on comfortable clothing and shoes that are appropriate for walking
          on a treadmill. Ask your doctor for details about pre-test
          preparations, and make sure to follow instructions closely.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the advantages of TMT?</h3>
        <ul>
          <li>Diagnoses cardiovascular diseases</li>
          <li>Checks for abnormally fast or slow heart rates</li>
          <li>Examines cardiovascular health before surgery</li>
          <li>Guides treatment for heart conditions</li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">How long does TMT take?</h3>
        <p>The duration of a TMT can range from 15 to 30 minutes.</p>
      </div>
      <div className="questions">
        <h3 className="question">What are the risks of TMT?</h3>

        <ul>
          <li>
            <strong>Low blood pressure :</strong>
            During or immediately after the exercise, blood pressure may fall.
            This drop in the level of blood pressure could make individuals feel
            dizzy.
          </li>
          <li>
            <strong>Irregular heart beat :</strong>
            An irregular heartbeat continues throughout the test.
            Exercise-induced heart arrhythmias typically disappear shortly after
            the exercise is stopped.
          </li>
          <li>
            <strong>Heart attack :</strong>
            Although extremely unlikely, a heart attack could occur during an
            exercise stress test.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default TMT;
const Wrapper = styled.section``;
