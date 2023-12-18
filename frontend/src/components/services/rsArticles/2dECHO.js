import React from "react";
import styled from "styled-components";

const ECHO = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is 2-Dimentional Echocardiography?</h3>
        <p className="answer">
          2-Dimentional Echocardiography or ECHO is used to visualize the actual
          motion of the heart. On the monitor, a cone-shaped 2D ECHO view shows
          the real-time motion of the heart's structures. This enables the
          healthcare provider to observe and assess the various structures of
          the heart in action when an individual experiences chest pain or
          shortness of breath.
        </p>
        <p>
          Thus, it helps in the diagnosis of various heart ailments such as
          atherosclerosis, arrhythmia, cardiomyopathy, etc
        </p>
      </div>
      <div className="questions">
        <h3 className="question">
          How does 2-Dimentional Echocardiography work?
        </h3>
        <p>
          During the 2D ECHO procedure, a transducer (similar to a microphone)
          emits sound waves at a very high frequency. Depending on where and how
          the transducer is placed on the chest, the sound waves pass through
          the skin and other body tissues to reach the heart, where they bounce
          or "echo" off of the heart's structures. Finally, these sound waves
          are transmitted to a computer to produce moving pictures of the heart
          walls and valves
        </p>
      </div>
      <div className="questions">
        <h3 className="question">When is 2D ECHO recommended?</h3>
        <p>
          2D ECHO is commonly used to check for heart-related complications.
          This procedure demonstrates how blood flows through the heart's
          chambers and valves and helps to diagnose conditions such as
          atherosclerosis (clogged arteries), arrhythmia (irregular heartbeats),
          heart valve diseases, etc.
        </p>
        <p>
          Doctors recommend this test if any individual experiences symptoms
          such as:
        </p>
        <ul>
          <li>Chest pain</li>
          <li>Shortness of breath </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What preparation is needed for 2D ECHO?</h3>
        <p>
          Ensure your healthcare provider is aware of what prescription drugs,
          over-the-counter medicines, or dietary supplements you are taking. Ask
          your doctor for details about pre-test preparations, and make sure to
          follow instructions closely
        </p>
        <p>
          It is necessary to take off the upper body clothing and change into a
          hospital gown at the testing facility for a 2D ECHO test, and it is
          recommended to remove any jewelry and other metallic objects that
          might interfere with the testing procedure
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the advantages of 2D ECHO?</h3>

        <ul>
          <li>
            It is typically painless and doesn’t require needles, injections, or
            incisions.
          </li>
          <li>
            It is safer compared to diagnostic methods such as X-rays and CT
            scans because patients aren't exposed to ionizing radiation.
          </li>
          <li>
            It produces clearer and more detailed images than traditional
            X-rays.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">How long does 2D ECHO take?</h3>
        <p>The duration of a 2D ECHO can range from 30 to 60 minutes</p>
      </div>
      <div className="questions">
        <h3 className="question">What are the risks of 2D ECHO?</h3>
        <p>2D ECHO is safe with no known risks.</p>
      </div>
    </Wrapper>
  );
};

export default ECHO;
const Wrapper = styled.section``;
