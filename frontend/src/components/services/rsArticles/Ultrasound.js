import styled from "styled-components";

const Ultrasound = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is ultrasound?</h3>
        <p className="answer">
          Ultrasound, also known as sonography or diagnostic medical sonography,
          is an imaging technique that makes use of sound waves to create images
          of the body’s structures and internal organs. These images can aid a
          healthcare provider in diagnosing the underlying cause of pain and
          swelling. It also helps in detecting various fetal abnormalities such
          as spina bifida in pregnant women and in planning further treatment.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">How does ultrasound work?</h3>
        <p>
          During ultrasound imaging, high-frequency sound waves are directed or
          emitted at the tissue being examined. Then the reflected sound or
          echoes from the tissue are recorded and used to create an image.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">When is ultrasound recommended?</h3>
        <p>Doctors frequently use ultrasound for the following procedures:</p>

        <ul>
          <li>
            Abdominal scans can be used to investigate the abdominal cavity for
            strange noises, nausea, vomiting, and lumps. Air interferes with the
            transmission of sound waves, making it difficult for ultrasound to
            examine organs that contain air such as the stomach and bowels.
          </li>
          <li>
            Pelvic scans are performed if a woman has pelvic pain, fibroids,
            cysts, irregular periods, or other conditions affecting the female
            reproductive system.
          </li>
          <li>
            Pregnancy scans are used to determine the age and position of a
            fetus, look for fetal abnormalities (like spina bifida), and track
            fetal growth and development.
          </li>
          <li>
            Additional scans, such as breast scans, are used to look into an
            abnormality discovered during a physical examination or mammogram.
            An eye scan is used to examine the internal structures of the eye,
            and musculoskeletal scans are used to examine areas like a shoulder,
            hip, or elbow.
          </li>
          <li>
            Doppler ultrasounds are a specialized form of ultrasound scan that
            can be used to determine the direction and rate of blood flow in
            specific body parts, such as the veins of the leg and arteries in
            the neck region.
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">
          What preparation is needed for an ultrasound?
        </h3>
        <p>
          Ask your healthcare provider for details about pre-test preparations
          specific to the area being scanned, and make sure to follow
          instructions closely. Prior to some scans, such as an ultrasound of
          the gall bladder, it is advised to refrain from eating or drinking for
          a certain amount of time. Other scans such as a pelvic ultrasound,
          might need a full bladder.
        </p>
        <p>
          It is recommended to wear loose clothing to your ultrasound
          appointment and remove any jewelry that might interfere with the
          scanning procedure.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the advantages of ultrasound?</h3>
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
            It captures images of soft tissues that are difficult to see on
            X-rays.
          </li>
          <li>
            It is widely accessible and less expensive than other methods.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">How long does ultrasound take?</h3>
        <p>
          The duration of an ultrasound scan can range from 20 to 40 minutes,
          depending on the type of examination.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the risks of ultrasound?</h3>
        <p>Diagnostic ultrasound is a safe procedure with no known risks</p>
      </div>
    </Wrapper>
  );
};

export default Ultrasound;
const Wrapper = styled.section``;
