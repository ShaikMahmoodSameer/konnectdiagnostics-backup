import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const Covid = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is COVID?</h3>
        <p className="answer">
          COVID, also known as Coronavirus is a type of virus that causes
          respiratory illnesses, ranging from the common cold to more serious
          conditions such as severe acute respiratory syndrome (SARS). It is
          more commonly transmitted through respiratory droplets from an
          infected person. Additionally, it may also spread when a person
          touches any infected surface and then touches their eyes, nose, or
          mouth.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the symptoms of COVID?</h3>
        <h5 className="include">Possible symptoms of COVID may include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].covid[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h3 className="question">What are the risk factors? </h3>
        <h5 className="include">Risk factors of COVID include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].covid[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to Diagnose? </h3>
        <h5 className="include">Diagnosis involves the following tests:</h5>
        <ul>
          <li>
            <strong>Molecular test (RT-PCR test) :</strong>In this,
            nasopharyngeal secretions from the nose or throat are taken using a
            specialized swab. It checks for the virus’s genetic material in the
            specimen.
          </li>
          <li>
            <strong>Antigen test :</strong>For this test, a specimen from the
            back of the nose is collected using a long swab and is tested for
            COVID antigens.
          </li>
          <li>
            <strong>Antibody test :</strong> Here, an individual’s blood is
            withdrawn and is tested to look for the presence of antibodies to
            the coronavirus.
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What is the treatment?</h3>
        <h5 className="include">Treatment of COVID includes the following:</h5>

        <ul>
          <li>
            <strong>Antiviral therapy :</strong> These medications target the
            viral particles of COVID, thereby preventing or treating the
            infection.
          </li>
          <li>
            <strong>Monoclonal antibodies :</strong> These proteins are infused
            in an individual’s bloodstream to help fight infections.
          </li>
          <li>
            <strong>Immunomodulators :</strong> These biological agents are
            either injected or infused into an individual to reduce
            inflammations, if any. These are usually recommended for severe
            forms of COVID illness.
          </li>
          <li>
            <strong>Pain relievers :</strong> As the name suggests, these
            medications help relieve symptoms of pain such as body pains,
            headaches, etc. in infected individuals.
          </li>
          <li>
            <strong>Cough syrup or medications :</strong> These may help treat
            or reduce cough in a COVID-affected individual.
          </li>
          <li>
            <strong>Rest :</strong> Getting adequate rest may help treat the
            condition sooner.
          </li>
          <li>
            <strong>Fluid intake :</strong> Staying hydrated is an important
            intervention that helps in quicker recovery from the illness.
          </li>
          <li>
            <strong>Vaccination :</strong> Vaccines help trigger one’s immune
            system and help the body recognize a particular infection and
            prepare the body to fight against it.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Covid;
const Wrapper = styled.section``;
