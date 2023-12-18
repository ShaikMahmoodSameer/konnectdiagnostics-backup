import { hcIcons } from "../../../assets/data/HcSymptomsData";
// import { symptomsData } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const Arthritis = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What are Arthritis?</h3>
        <p className="answer">
          Arthritis is defined as a bone disorder that causes pain and
          inflammation of joints. A joint is a place where two bones connect to
          each other such as an elbow or knee joint in our body. It restricts
          bone movement in affected individuals, lowering their quality of life.
          It is more common in older individuals. However, it can also develop
          in men, women, and children of any age.A few more common
          arthritis-affected areas of the body s include:
        </p>
        <ul>
          <li>Feet</li>
          <li>Hands</li>
          <li>Hips</li>
          <li>Lower back</li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the types of arthritis?</h3>
        <h5 className="include">
          It includes more than 100 joint disorders. However, a few most common
          types of arthritis include:
        </h5>
        <ul>
          <li>
            <strong>Osteoarthritis :</strong> It is the most common type of
            arthritis, aka “wear and tear” arthritis. It is developed when the
            joint cartilage is broken down due to repeated stress.
          </li>
          <li>
            <strong>Rheumatoid arthritis :</strong>It is one of the autoimmune
            bone disorders that causes the immune system to attack its own
            synovial membrane of the joint.
          </li>
          <li>
            <strong>Psoriatic arthritis :</strong> It is a condition that is
            seen in individuals who have psoriasis (an autoimmune condition that
            causes irritation of the skin).
          </li>
          <li>
            <strong> Lupus :</strong>
            It is an autoimmune condition (SLE or systemic lupus erythematosus)
            that affects the joints and many other organs of the body, mistaking
            them to be foreign entities.
          </li>
          <li>
            <strong>Ankylosing spondylitis :</strong>
            It affects the spine (usually the lower back) of an individual.
          </li>
          <li>
            <strong>Juvenile arthritis :</strong>
            It is typically seen in children aged 16 years and above. It causes
            the immune system to attack the tissue around the joint.
          </li>
          <li>
            <strong>Gout :</strong>
            It happens when hard crystals of uric acid are formed in the joints
            of an individual.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the signs and symptoms?</h3>
        <p>
          Different types of arthritis show different signs and symptoms.
          However, joint discomfort may come and go or may be persistent.
        </p>
        <h5 className="include">A few common symptoms may include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].arthritis[0].symptoms.map((item) => (
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
          A few risk factors that may likely cause the development of arthritis
          in an individual include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].arthritis[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h3 className="question">How to diagnose?</h3>
        <h5 className="include">
          Arthritis can be diagnosed through a physical examination of an
          individual by an expert healthcare consultant. A typical physical
          examination includes:
        </h5>
        <ul>
          <li>Assessing the range of mobility of the joints</li>
          <li>Checking for any tenderness or swelling near the joints</li>
          <li>
            Evaluating the overall health of an individual to see if any other
            disease condition is causing the symptoms
          </li>
        </ul>
        <p>
          In addition to a physical examination, a few imaging techniques and
          blood work may also help confirm the diagnosis. These include:
        </p>
        <ul>
          <li>Bone X-ray (radiography)</li>
          <li>MRI of the musculoskeletal system</li>
          <li>Ultrasound</li>
          <li>Direct arthrography</li>
          <li>C-reactive protein (CRP) test</li>
          <li>Synovial fluid analysis</li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What is the treatment?</h3>
        <p>Treatment involves both non-surgical and surgical measures.</p>
        <h5 style={{ fontStyle: "italic" }}>Non-surgical:</h5>
        <h5 className="include">
          There is no definitive treatment to cure arthritis. However, taking
          certain measures may help manage the condition by easing the symptoms
          to a great extent.
        </h5>
        <ul>
          <li>
            <strong>Medications :</strong> Symptoms such as pain and
            inflammation could be managed by anti-inflammatory or analgesic
            (pain) medications. For conditions such as rheumatoid arthritis or
            psoriatic arthritis, a medication called biologics is recommended
            which can help target responses from one’s immune system.
          </li>
          <li>
            <strong>Physical Therapy :</strong>Rehabilitation therapies may help
            improve joint strength as well as its range of motion. A therapist
            may teach an individual how to modify their daily activities to
            lessen arthritic discomfort.
          </li>
          <li>
            <strong> Therapeutic injections :</strong> Corticosteroid injections
            known as cortisone shots are used to provide temporary relief from
            arthritis symptoms such as pain and swelling. Furthermore, arthritis
            of joints such as the knee can be addressed by injecting
            viscosupplementation, which involves injecting lubricants into the
            joint to restore physiologic viscoelasticity in the synovial fluid
            that causes smooth movement of joints.
          </li>
          <li>
            <strong> Asthma medications:</strong>
            These medications help deal with symptoms of asthma such as itchy
            skin, runny nose, etc.
          </li>
          <li>
            <strong>Immunotherapy:</strong>
            It aims to develop tolerance towards allergens in an individual by
            exposing them to small amounts of that specific allergen for several
            months.
          </li>
          <li>
            <strong>Nasal saline irrigation:</strong>
            In this, a saline solution is passed through the nasal passages.
            E.g., Neti pot, an over-the-counter device that helps push trapped
            allergens and mucus out of the nasal passage with the help of a
            saline solution.
          </li>
        </ul>
        <h5 style={{ fontStyle: "italic" }}>Surgical:</h5>
        <h5 className="include">
          The Healthcare providers may suggest surgical options only in certain
          severe cases of arthritis that have shown no improvement with
          conservative therapies. These include:
        </h5>
        <ul>
          <li>
            <strong>Fusion of joints :</strong> In this, two or more joints are
            permanently fused with each other, i.e., joint immobilization, to
            reduce the pain caused due to the movement of the joint.
          </li>
          <li>
            <strong>Joint repair :</strong>In this, joint surfaces are smoothed
            or realigned, either to reduce pain or to improve joint function. It
            is often performed by making small incisions over the joint
            (arthroscopy).
          </li>
          <li>
            <strong> Joint replacement :</strong> In this, the affected joint is
            completely replaced with an artificial joint. It preserves both
            joint movement and its function. A few examples of joint replacement
            surgeries include ankle replacement, hip replacement, knee
            replacement, and shoulder replacement.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Arthritis;
const Wrapper = styled.section``;
