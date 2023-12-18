import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const SleepProblems = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is a sleep problem?</h3>
        <p className="answer">
          Sleep problem is a condition that can affect your sleep and overall
          health and quality of life. It occurs due to traveling, illness,
          stress, and interruptions to normal life. It can impact an
          individual’s mental and physical health. Sleep problems are mainly
          associated with medical conditions such as depression, and anxiety.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the types of sleep problems?</h3>
        <p>
          Different types of sleep problems include major sleep disorders and
          common sleep disorders
        </p>
        <strong>A. Common sleep disorders</strong>
        <ul>
          <li>Insomnia</li>
          <li>Sleep apnea</li>
          <li>Restless leg syndrome</li>
          <li>Narcolepsy (difficult sleep-wake cycles)</li>
        </ul>
        <strong>B. Major sleep disorders</strong>
        <ul>
          <li>Circadian rhythm sleep-wake disorders</li>
          <li>Central disorders of hypersomnolence</li>
          <li>Sleep-related breathing disorders</li>
          <li>Sleep-related movement disorders</li>
          <li>
            Parasomnia (Actions such as walking, talking, or eating that happen
            while in sleeping state)
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the symptoms?</h3>
        <h5 className="include">
          Signs and symptoms differ from the severity and type of sleeping
          disorder. Common signs and symptoms you may experience are:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].sleepProblems[0].symptoms.map((item) => (
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
          People are more susceptible to sleep problems with respect to their:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].sleepProblems[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose sleep problems?</h3>

        <h5 className="include">
          Sleep problems can be diagnosed with the help of:
        </h5>
        <ul>
          <li>
            <strong>Physical examination :</strong>During the physical
            examination, a healthcare provider may check for the symptoms of
            sleep apnea, nasal congestion, and swollen tonsils.
          </li>
          <li>
            <strong>Medication history :</strong>Medications such as
            antidepressants, antihistamines, and steroids can be a route cause
            for sleep problems such as insomnia, nightmares, etc.
          </li>
          <li>
            <strong>Sleep Dairy :</strong>You will be observed on how often you
            sleep and how well your sleep pattern is for a 2-week period so that
            the physician may determine further steps of treatment.
          </li>
          <li>
            <strong>Polysomnography (PSG) :</strong>It is an in-laboratory sleep
            study that records your physical state during your sleep. It also
            evaluates body movements, brain waves, oxygen levels, respiratory
            events, muscle tone, heart rate, eye movement, snoring, and sleep
            behavior. It is mainly used to diagnose sleep apnea disorder.
          </li>
          <li>
            <strong>Split-night test :</strong>It is done to test sleep apnea.
            During this test, sleep apnea events are recorded during the first 2
            hours of sleep, based on which a treatment plan called titration is
            started.
          </li>
          <li>
            <strong>Electroencephalogram (EEG) :</strong>It is performed to
            detect any abnormal brain activity while you are asleep. It also
            determines the quality of your sleep cycle.
          </li>
          <li>
            <strong>Multi-sleep latency test :</strong>In this, you may be asked
            to sleep 4-5 times every 2 hours during normal waking hours. It
            measures the extent of daytime sleepiness.
          </li>
        </ul>
        <div className="questions">
          <h3 className="question">What is the treatment?</h3>

          <h5 className="include">
            Treatment of sleep problems depends on the type and underlying cause
            and these include:
          </h5>
          <strong>Medical treatments</strong>
          <p>
            Healthcare providers may recommend a few medications and supplements
            to treat common sleep problems, such as:
          </p>
          <ul>
            <li>Sleeping pills</li>
            <li>Allergy or cold medication</li>
            <li>Melatonin supplements</li>
            <li>Medication for health issues</li>
            <li>Medication for surgery</li>
          </ul>
          <strong>Lifestyle changes </strong>
          <p>
            Changes in your lifestyle will improve your sleep quality. Below are
            a few things to consider:
          </p>
          <ul>
            <li>
              Changing your sleeping routine by sleeping at the same time each
              day
            </li>
            <li>Consuming less water before going to sleep</li>
            <li>Reducing stress and anxiety through physical activities</li>
            <li>Keeping your bedroom cool, dark, and quiet</li>
            <li>Avoiding sleep during day time</li>
            <li>Limiting alcohol and tobacco use</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default SleepProblems;
const Wrapper = styled.section``;
