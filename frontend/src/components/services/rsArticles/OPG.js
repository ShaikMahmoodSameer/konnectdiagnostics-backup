import styled from "styled-components";

const OPG = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is Orthopantomagram?</h3>
        <p className="answer">
          Orthopantomagram or OPG is a panoramic scan that involves an
          examination of both the upper and lower jaws of an individual. It
          gives flattened 2D images of a half-circle of the skull, i.e., from
          ear to ear. It helps a healthcare provider to diagnose and monitor
          various dental health issues, especially wisdom teeth development.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">How does Orthopantomagram work?</h3>
        <p>
          For the OPG scan, the individual will be asked to stand still with
          his/her face resting on a small shelf in front. During the scan, they
          may be given a mouthpiece to bite, with their tongue held back and
          their head steady. The quality of the image is directly proportional
          to the posture that he/she maintains during the scan. As a result, the
          machine is configured to the individual's height, and they are advised
          to follow the instructions provided. Once the position of an
          individual is set, the imaging plates move in the opposite direction
          as the X-ray tube rotates around the head to capture images. This will
          aid in the creation of images in which only the jaw is clearly visible
          and the rest of the skull is blurred.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">When is OPG recommended?</h3>
        <p>
          OPG scan is recommended to examine the teeth and jaw of an individual.
          It helps :
        </p>

        <ul>
          <li>Diagnose or monitor dental health issues</li>
          <li>Identify and analyze wisdom teeth development</li>
          <li>Plan orthodontic treatment</li>
          <li>Assess overall dental health</li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What preparation is needed for the test?</h3>
        <p>Before taking an OPG scan, an individual is recommended to:</p>
        <ul>
          <li>Wear comfortable clothing.</li>
          <li>
            Remove jewelry and other accessories that may interfere with the
            scan such as earrings, chains, eye glasses, etc.
          </li>
          <li>
            Inform their healthcare professional if they are pregnant or have
            any other medical condition.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the advantages of OPG?</h3>
        <ul>
          <li>Low dose of radiation in patients</li>
          <li>Broader coverage of teeth and facial bones</li>
          <li>Can be used in patients having restricted mouth conditions</li>
          <li>Requires less time for image production</li>
          <li>
            Useful in providing better patient education with the help of 2D
            scans
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">How long does OPG scan take?</h3>
        <p>
          OPG scan takes less than 5 minutes to complete, with only 20-30
          seconds required for capturing images.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the risks of an OPG scan?</h3>

        <ul>
          <li>Exposure to ionizing radiation may increase the cancer risk.</li>
          <li>
            Provides a two-dimensional view of the mouth, which might not be
            sufficient to detect certain dental and oral health issues.
          </li>
          <li>
            Does not provide a clear image of soft tissues such as the palate,
            tongue, and tonsils.
          </li>
          <li>
            Images can occasionally become distorted because of patient
            positioning or movement, which can affect the accuracy of the
            results.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default OPG;
const Wrapper = styled.section``;
