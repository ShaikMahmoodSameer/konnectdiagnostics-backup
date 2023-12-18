import styled from "styled-components";

const CBCT = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is Cone-Beamed Computed Tomography?</h3>
        <p className="answer">
          Cone-beamed computed tomography or CBCT is a form of medical imaging
          technology that creates precise 3D images of maxillofacial bones and
          soft tissues. It uses a beam of X-rays that captures about 150 – 200
          images from a variety of angles with a wider view of field and greater
          resolution.
        </p>
        <p>
          A healthcare provider recommends this test to understand conditions
          such as maxillofacial pathologies, sinus conditions, dental implant
          planning, temporomandibular joint (TMJ) disorders, etc.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">
          How does Cone-Beamed Computed Tomography work?
        </h3>
        <p>
          For the CBCT scan, the individual will be asked to stand still with
          his/her face resting on a small shelf in front. During the scan, they
          may be given a mouthpiece to bite, with their tongue kept back and
          their head steady. The quality of the image is directly proportional
          to the posture that he/she maintains during the scan. Therefore, the
          machine is set as per the individual’s height, and is advised to
          follow the instructions given. Following that, the machine is slowly
          rotated around an individual's head at 180 or 360 degrees based on the
          full mouth or partial mouth X-ray to produce clear, and precise 3D
          images.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">When is CBCT recommended?</h3>
        <p>It is recommended for the following conditions.</p>

        <ul>
          <li>Dental implant planning</li>
          <li>Visualization of abnormal teeth </li>
          <li>Evaluation of jaws and face </li>
          <li>Cleft palate assessment </li>
          <li>Assessment of dental caries (cavities)</li>
          <li>Endodontic diagnosis (root canal)</li>
          <li>Dental trauma diagnosis</li>
        </ul>
        <p>
          CBCT examines maxillofacial bones and soft tissues and the data
          captured is used to reconstruct an image of teeth and jaw; ear and
          nose; neck and throat
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What preparation is needed for the test?</h3>
        <p>Before taking the scan, an individual is usually required.</p>
        <ul>
          <li>To wear a gown</li>
          <li>
            To remove jewelry, including earrings, dentures or other dental
            implants, hair pins, eyeglasses, and hearing aids.
          </li>
          <li>
            To wear a piece of equipment called a scanning appliance in case of
            undergoing CBCT as part of a dental implant plan.
          </li>
          <li>
            To inform their healthcare professional if they are pregnant or have
            any other medical problem.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the advantages of CBCT?</h3>

        <ul>
          <li>It is quick, safe, and painless.</li>
          <li>It gives better image quality with enhanced accuracy.</li>
          <li>It provides comprehensive information related to oral health.</li>
          <li>It can provide precise treatment plans by studying the scans.</li>
          <li>It helps with accurate diagnosis.</li>
          <li>It uses a lower dose of radiation.</li>
          <li>
            It involves fewer complications and successful outcomes when
            compared to other CT scans.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">How long does CBCT scan take?</h3>
        <p>It takes less than 5 minutes to take a CBCT scan.</p>
      </div>
      <div className="questions">
        <h3 className="question">What are the risks of CBCT scan?</h3>
        <p>
          There are no potential risks associated with a CBCT scan. It is an
          extraoral, non-invasive, seamless to the patient, and painless
          procedure. Although CBCT scans use radiation, it’s significantly less
          than other traditional CT scans.
        </p>
      </div>
    </Wrapper>
  );
};

export default CBCT;
const Wrapper = styled.section``;
