import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const InfertilityFemales = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is female infertility?</h3>
        <p className="answer">
          Infertility refers to a disease that affects or limits an individual’s
          capacity to become pregnant and give birth to a child. This is
          typically diagnosed in heterosexual couples (a man and a woman) after
          a year of trying to conceive with frequent unprotected sex, though it
          may be diagnosed earlier depending on other factors.
        </p>
        <p>
          Female infertility, also known as "female factor" infertility, occurs
          when the female partner is found to be the cause of infertility
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What are the symptoms?</h3>
        <p>
          The primary sign of infertility is not being able to conceive. Women
          may not be ovulating if their menstrual cycle is excessively long (35
          days or more), excessively short (less than 21 days), irregular, or
          non-existent. There may be no additional symptoms.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What are the risk factors?</h3>
        <h5 className="include">
          The female infertility risk factors include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].infertilityFemales[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose infertility (females)?</h3>
        <p>
          Healthcare practitioners may recommend one or more of the below tests
          to properly diagnose and determine the cause of female infertility.
        </p>
        <ul>
          <li>
            <strong>Physical examination :</strong>A physical examination is
            performed along with taking the patient’s medical history. This is a
            routine test performed for checking the overall health.
          </li>
          <li>
            <strong>Blood tests :</strong>Blood tests are performed to check for
            the presence of ovulation hormones such as FSH (Follicle stimulating
            hormone) and LH (Luteinizing hormone).
          </li>
          <li>
            <strong>Laparoscopy :</strong>Laparoscopy is a ‘keyhole’ surgical
            procedure performed to examine the patient’s reproductive organs by
            inserting an instrument (laparoscope) through a tiny abdominal
            incision.
          </li>
          <li>
            <strong>Imaging tests :</strong>Imaging tests include a pelvic
            ultrasound that looks for defects in the fallopian tubes or checks
            for uterine cancer. Sonohysterograms, also known as saline infusion
            sonograms or hysteroscopies, can be used to examine details and
            detect anomalies in the uterus that aren't visible on a standard
            ultrasound.
          </li>
          <li>
            <strong>Hysterosalpingography :</strong>Hysterosalpingography is
            used to examine the inside of the uterus and the fallopian tubes.
            During this test, an X-ray contrast is injected into the uterus and
            an X-ray is taken to look for abnormalities. It is performed to
            determine the causes of female infertility.
          </li>
          <li>
            <strong>Ovarian reserve testing :</strong>Ovarian reserve testing
            helps to determine the quantity and quality of eggs available for
            ovulation. It is done by measuring the FSH and estradiol levels in
            the blood.
          </li>
          <li>
            <strong>Genetic testing :</strong>Genetic testing is used to
            identify any gene changes that may be contributing towards
            infertility.
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What are the treatments?</h3>
        <p>
          Depending on the underlying cause, treatment options for female
          infertility may include.
        </p>
        <ul>
          <li>
            <strong>Surgery :</strong>Surgery may be performed to treat female
            infertility caused due to obstructions present in the reproductive
            organs. It can be used to treat a variety of issues, such as
            fibroids, polyps, ovarian cysts, etc.
          </li>
          <li>
            <strong>Ovulation induction :</strong>Various drugs in tablet or
            injectable form can be used to induce ovulation. Oral medications
            can reduce the brain receptors’ sensitivity to estrogens that are
            produced naturally in the body. This causes an increase in the
            release of hormones from the pituitary gland in the brain to trigger
            ovulation.
            <p>
              It is also possible to induce ovulation using injectable forms of
              the hormones produced by the pituitary gland
            </p>
          </li>
          <li>
            <strong>Assisted reproductive technologies (ART) :</strong>Assisted
            reproductive technologies such as in-vitro fertilization (IVF)
            involves taking eggs out of the ovaries and handling sperms and eggs
            in a lab. In this procedure, stimulation of hormones causes the
            ovaries to produce 10 to 15 eggs per cycle instead of one mature
            egg. The eggs are removed using an ultrasound guided procedure. The
            eggs are combined with male sperm after the egg retrieval step and
            is later transferred into the uterus of the patient.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default InfertilityFemales;
const Wrapper = styled.section``;
