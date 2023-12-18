import styled from "styled-components";

const Xray = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is X-ray?</h3>
        <p className="answer">
          X-ray is a type of imaging technology that employs low ionizing
          radiation to capture the image of the body's bones and soft tissues.
          It is a safe technique that assists healthcare professionals in
          diagnosing and treating a wide range of health issues. It is most
          typically used by healthcare providers to assess broken bones,
          dislocated joints, and other soft tissues and bone injuries.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">How does X-ray work?</h3>
        <p>
          Individuals are requested to sit, stand, or lie down on an X-ray table
          depending on the portion of the body that needs to be evaluated. The
          X-ray radiation beam is then sent through the body part that has to be
          examined. As the beam passes through the body, it continues to produce
          images on the X-ray detector nearby. Different body organs absorb
          radiation to various extents. For example, solid or dense objects such
          as bones, absorb radiation easily and appear bright white, but soft
          tissues such as muscles and blood vessels do not absorb radiation
          easily and appear in shades of grey on the scan.
        </p>
        <p>
          The healthcare professional may instruct the individual to hold their
          breath during the test to obtain clear images and limit the need for
          retest. Additionally, the body part that needs to be evaluated is
          moved around in order to gather images from various angles.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">When is X-ray recommended?</h3>
        <p>An X-ray is recommended:</p>
        <ul>
          <li>To check for fractured bones.</li>
          <li>To identify the cause of symptoms of pain and swelling.</li>
          <li>To look for foreign objects in the body.</li>
          <li>To plan and evaluate treatment actions.</li>
          <li>
            To assess any structural problems in bones, joints, muscles, etc.
          </li>
          <li>To provide routine screening for diseases such as cancer.</li>
        </ul>
        <p>
          There are different types of X-rays that are used to examine different
          parts of the body. They include- abdominal X-rays, bone X-rays, chest
          X-rays, dental X-rays, fluoroscopy, CT scan, and mammogram.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What preparation is needed for the test?</h3>
        <p>Before taking the scan, an individual is usually required:</p>
        <ul>
          <li>To avoid using creams, lotions, or perfume.</li>
          <li>
            To remove jewelry, including earrings, hair pins, eyeglasses, and
            hearing aids.
          </li>
          <li>To stop eating or drinking several hours before the test.</li>
          <li>To wear comfortable clothing or change into a gown.</li>
          <li>
            To inform their healthcare provider if they are pregnant or have any
            other medical problem.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the advantages of X-rays?</h3>
        <ul>
          <li>It is a fast, painless, and non-invasive procedure.</li>
          <li>
            It helps in the identification of different disease conditions.
          </li>
          <li>
            It helps in monitoring therapies related to different ailments.
          </li>
          <li>
            It supports treatment planning of medical and surgical procedures.
          </li>
          <li>
            It helps guide medical professionals in procedures involving
            catheter insertions, stents, or other devices, removing blood clots,
            or even treating tumors.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">How long does an X-ray take?</h3>
        <p>
          It is one of the quickest radiology techniques, taking approximately
          15 – 20 minutes to complete.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the risks of X-rays?</h3>
        <ul>
          <li>
            Small, ionizing radiation that comes from X-ray machines may damage
            an individual’s DNA and cause a risk of cancer
          </li>
          <li>
            Children and old patients should be taking extra precautions as they
            may be more sensitive to radiation.
          </li>
          <li>
            Increased radiation dose during pregnancy may increase the risk of
            birth defects in fetuses.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Xray;
const Wrapper = styled.section``;
