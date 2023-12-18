import styled from "styled-components";

const MRI = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is Magnetic Resonance Imaging?</h3>
        <p className="answer">
          Magnetic Resonance Imaging or MRI scan is a type of medical imaging
          procedure that uses radio waves and a magnetic field to create
          pictures of the organs and tissues of your body. A healthcare provider
          often uses an MRI to diagnose tumors such as cancer.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">How does Magnetic Resonance Imaging work?</h3>
        <p>
          MRI machine consists of a table that slides into a sizable cylinder to
          conduct the MRI scan. A magnet located inside the cylinder produces a
          strong magnetic field when it is operated.
        </p>
        <p>
          When you lie inside the MRI machine, the magnetic field has an impact
          on protons, which are microscopic particles found in the water
          molecules present in your soft tissues (muscles, fat, blood vessels,
          nerves, ligaments, and tendons). In response to the radio waves from
          the MRI scan, the magnetized protons in the soft tissue emit an echo.
          These echoes are then produced into images by a computer.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">When is MRI recommended?</h3>
        <p>It is frequently performed to diagnose conditions such as :</p>

        <ul>
          <li>Tumors, including cancer</li>
          <li>Soft tissue injuries (torn ligaments)</li>
          <li>Joint disease or injury</li>
          <li>Spinal disease or injury </li>
          <li>
            Disease or injury of internal organs including the heart, brain, and
            digestive organs
          </li>
        </ul>
        <p>
          MRI is used to examine kidneys, spleen, liver, bowel, pancreas,
          adrenal glands, reproductive organs, lymph nodes, and blood vessels
          (This may require a specialized form of MRI known as MR Angiography or
          MR Venogram).
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What preparation is needed for MRI?</h3>
        <p>
          Ensure your healthcare provider is aware of what prescription drugs,
          over-the-counter medicines, or dietary supplements you are taking. Ask
          your doctor for details about pre-test preparations specific to the
          area being scanned, and make sure to follow instructions closely.
        </p>
        <p>
          Depending on the body part being scanned, it is necessary to take off
          some or all of the clothing and change into a hospital gown. It is
          recommended to remove any jewelry and other objects such as hearing
          aids, eye glasses, and wigs that might interfere with the image
          results.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the advantages of MRI?</h3>
        <ul>
          <li>Uses no radiation and is non-invasive.</li>
          <li>
            Provides better, clear, detailed images of soft-tissue structures
            compared to other imaging methods such as CT scans.
          </li>
          <li>
            Produces hundreds of images in almost any orientation and direction.
          </li>
          <li>
            Examines large areas of the body, in contrast to procedures that
            only examine small parts of the body such as ultrasound or
            mammography.
          </li>
          <li>
            Determines whether cancer has spread and helps decide the best
            course of treatment..
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">How long does MRI scan take?</h3>
        <p>
          A single scan might take anywhere between a few seconds to 8 minutes.
          Short scans may require you to hold your breath.
        </p>
        <p>
          Depending on the size of the area to be scanned and the number of
          required images, the total MRI scan time could range from 15 to 90
          minutes.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the risks of an MRI scan?</h3>

        <ul>
          <li>
            It has a powerful magnet that may damage an internal metal implant
            such as a pacemaker in the heart.
          </li>
          <li>
            If a patient chooses to be sedated for the scanning process, there
            is a small risk involved in sedation that includes slow breathing
            rate, low blood pressure, etc.
          </li>
          <li>
            Patients may experience an allergic reaction to the contrasting
            agent or get an infection at the site of injection.
          </li>
          <li>
            Although this procedure is not painful, patients who are
            claustrophobic may find it difficult to remain still in an enclosed
            machine.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default MRI;
const Wrapper = styled.section``;
