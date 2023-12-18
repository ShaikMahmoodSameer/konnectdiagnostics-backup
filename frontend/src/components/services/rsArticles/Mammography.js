import styled from "styled-components";

const Mammography = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is mammography?</h3>
        <p className="answer">
          Mammography is a specialized medical imaging technique that uses a low
          dose of X-ray to help a healthcare provider to detect, diagnose, and
          evaluate breast diseases in women such as breast cancer, cysts, and
          benign tumors. It works as both diagnostic and screening tool.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">How does mammography work?</h3>
        <p>
          A Mammogram machine uses X-rays at low doses to screen the breast
          tissue. X-rays are a type of radio waves that pass through the breast
          tissue and record the image on a photographic film. This machine has 2
          plates that compress and flatten the breast to spread the tissue. The
          X-rays pass through the breast to a detector and it transmits
          electronic signals to a computer to form a digital image. The images
          produced are called mammograms.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">When is mammography recommended?</h3>
        <p>Mammography is often recommended in case of :</p>

        <ul>
          <li>Lumps inside the breast</li>
          <li>Dense breast </li>
          <li>Family history of breast cancer </li>
          <li>Inherited genetic mutation </li>
          <li>Female aged above 40 years </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What preparation is needed for the test?</h3>
        <p>
          One has to undress from the waist up and has to remove ornaments such
          as necklaces and chains if you are wearing any and it is suggested to
          avoid applying body powers, perfumes, and ointments on the breast
          because they may come up as white spots on the X-ray image. The
          technician will give you a gown that ties on the front side and then
          you have to place each of your breasts on a flat X-ray plate. If an
          individual is having a dense, lumpy breast, a physical examination may
          be difficult to perform.
        </p>
        <p>Therefore, mammography is recommended</p>
      </div>
      <div className="questions">
        <h3 className="question">What are the advantages of mammography?</h3>
        <ul>
          <li>It helps women to know the condition of their breasts.</li>
          <li>It reduces the risk of breast cancer death.</li>
          <li>
            It minimizes the risk of undergoing chemotherapy when cancer is
            detected in its early stages.
          </li>
          <li>It detects small tumors and abnormal tissue growth.</li>
          <li>
            It helps detect lesions efficiently due to computer-aided detection
            technology.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">How long does mammography take?</h3>
        <p>The entire procedure of mammography takes about 30 minutes.</p>
      </div>
      <div className="questions">
        <h3 className="question">What are the risks of mammography?</h3>

        <ul>
          <li>Exposure to low dose radiation.</li>
          <li>Cannot detect all cancers</li>
          <li>
            May produce false-positive test findings that indicate the presence
            of cancer when actually there is none, which may cause additional
            stress
          </li>
          <li>
            May result in false-negative test findings, indicating the absence
            of cancer when cancer is present, thereby delaying diagnosis and
            treatment.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Mammography;
const Wrapper = styled.section``;
