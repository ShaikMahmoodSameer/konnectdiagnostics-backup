import styled from "styled-components";

const NCS = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What are Nerve Conduction Studies?</h3>
        <p className="answer">
          Nerve Conduction Studies or NCS (also called Nerve Conduction Velocity
          or NCV) measures nerve response to an electrical stimulus. It can help
          a healthcare provider to determine the cause, severity, and prognosis
          of any peripheral nerve damage that occurs as a result of peripheral
          neuropathy, sciatica, Carpal tunnel syndrome, etc.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">How does Nerve Conduction Study work?</h3>
        <p>
          NCS involves gathering nerve impulse information when an individual is
          either in a sitting or standing position, depending upon the
          necessity. Electrodes are placed on the skin’s surface that needs to
          be assessed. Thereafter, a mild electrical impulse is sent to the
          nerve containing the electrode. The time taken by the nerve to respond
          to a stimulus is then recorded. The procedure is repeated until the
          required information is gathered.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">When is NCS recommended?</h3>
        <p>NCS is recommended for the diagnosis of :</p>

        <ul>
          <li>Peripheral neuropathy</li>
          <li>Nerve compression syndromes such as sciatica</li>
          <li>Injury to nerves from surgery or trauma</li>
          <li>
            Certain syndromes such as Carpal tunnel syndrome, Radial tunnel
            syndrome, and Thoracic outlet syndrome
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What preparation is needed for the test?</h3>
        <p>Before taking the scan, an individual is recommended to:</p>
        <ul>
          <li>Wear comfortable clothing.</li>
          <li>Take a bath or shower on the day of test.</li>
          <li>Avoid use of lotion, cream, or bath oils.</li>
          <li>
            Inform your healthcare provider if they are pregnant, have any
            medical conditions, or taking any blood thinners.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the advantages of NCS?</h3>
        <ul>
          <li>It is an uncomplicated, painless, and quick procedure.</li>
          <li>It helps in a better understanding of nerve health.</li>
          <li>It provides a better diagnosis of nerve issues.</li>
          <li>It can help provide better treatment plans.</li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">How long does NCS take?</h3>
        <p>
          NCS takes approximately 15 minutes to an hour to complete. The
          duration depends on how many nerves the healthcare provider intends to
          test.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the risks of an NCS?</h3>

        <p>
          NCS is usually safe and has no known risks. Although the procedure is
          typically painless, being exposed to static electrical impulses may
          cause some minor discomfort.
        </p>
      </div>
    </Wrapper>
  );
};

export default NCS;
const Wrapper = styled.section``;
