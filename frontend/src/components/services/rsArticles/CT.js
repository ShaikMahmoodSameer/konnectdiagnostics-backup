import styled from "styled-components";

const CT = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is Computed Tomography?</h3>
        <p className="answer">
          Computed Tomography or CT is a medical imaging procedure that produces
          detailed images of the body by combining a number of X-ray images
          taken from various angles, using a specialized technology to create
          cross-sectional views of organs and tissues. This procedure is ordered
          by a healthcare provider to diagnose diseases such as cancer.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">How does Computed Tomography work?</h3>
        <p>
          CT scanning apparatus consists of a large gantry (donut-shaped
          structure). A rotating ring that houses the X-ray source and
          electronic X-ray detectors is located inside the gantry. An individual
          is fully reclined (lying down) and is slid into the hole of the gantry
          on an attached table.
        </p>
        <p>
          Numerous X-ray projections are taken in thin cross-sections all along
          an individual’s body. Each cross-sectional X-ray is collected by the
          detectors and then sent to a digital computer to be combined into an
          image
        </p>
      </div>
      <div className="questions">
        <h3 className="question">When is CT recommended?</h3>
        <p>Doctors frequently recommend this test for:</p>

        <ul>
          <li>Assessing the shape or structure of a body part</li>
          <li>Diagnosing diseases such as cancer </li>
          <li>Diagnosing any trauma or injury </li>
          <li>Planning surgeries </li>
          <li>Planning radiotherapy</li>
          <li>Guiding interventional or therapeutic procedures</li>
          <li>Measuring bone strength </li>
          <li>Monitoring the effectiveness of treatment</li>
        </ul>
        <p>
          CT is used to examine any part of the body including the gall bladder,
          bile ducts, liver, pancreas, spleen, kidneys, bones, muscles, blood
          vessels and reproductive organs.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What preparation is needed for a CT scan?</h3>
        <p>
          Avoid drinking or eating for a few hours before undergoing the CT
          scan. Depending on the body part being scanned, it is necessary to
          take off some or all of the clothing and change into a hospital gown.
          It is recommended to remove any jewelry and other metallic objects
          such as belts and eye glasses that might interfere with the image
          results.
        </p>
        <ul>
          <li>What are the advantages of CT?</li>
          <li>It is non-invasive and painless.</li>
          <li>It decreases the need for exploratory procedures.</li>
          <li>It improves cancer diagnosis and treatment.</li>
          <li>It reduces the duration of hospitalization.</li>
          <li>It helps to detect internal bleeding and internal injuries.</li>
          <li>
            It improves patient placement into appropriate areas of care, such
            as the intensive care units.
          </li>
          <li>
            It can be used to create images of a small portion or entire body
            during the same examination.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">How long does CT take?</h3>
        <p>
          The duration of a CT scan can range from a few minutes to 90 minutes,
          depending on the type of examination
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the risks of CT?</h3>
        <p>It takes less than 5 minutes to take a CBCT scan.</p>
        <ul>
          <li>
            X-rays used in CT scans produce ionizing radiation. These radiations
            may damage an individual’s DNA and cause a risk of cancer.
          </li>
          <li>
            The effects of radiation are manifested over time. Consequently, the
            risk of getting cancer rises with each CT scan performed on an
            individual.
          </li>
          <li>
            Radiation exposure during pregnancy may cause birth defects in
            fetuses.
          </li>
          <li>
            Individuals could experience an allergic reaction to the contrasting
            agent or get an infection at the site of injection.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default CT;
const Wrapper = styled.section``;
