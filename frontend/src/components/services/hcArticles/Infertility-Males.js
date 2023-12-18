import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const InfertilityMales = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is male Infertility?</h3>
        <p className="answer">
          Infertility is a disease related to the reproductive system that
          impairs the ability to perform the basic function of reproduction. It
          can occur in males, females, or both, preventing the conception of a
          child or inability to carry a pregnancy to term. It affects around
          10-15% of couples who fail to conceive for about a period of one year
          even after unprotected intercourse.
        </p>
        <p>
          Male infertility or male factor is a problem of the male reproductive
          system that lowers the chance of getting the female partner pregnant.
          The common causes of male infertility are the production of low and
          poor-quality sperm, hormonal disorders, use of certain supplements and
          medications, etc.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">What are the symptoms?</h3>
        <h5 className="include">
          The most common symptoms include the inability to conceive a child.
          Other symptoms noticed are:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].infertilityMales[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">What are the risk factors?</h3>
        <h5 className="include">The risk factors for male infertility are:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].infertilityMales[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose?</h3>
        <p>
          The diagnosis of infertility in males is primarily performed by
          reviewing the health history and by doing a physical examination. The
          tests to diagnose infertility in males include.
        </p>
        <ul>
          <li>
            <strong>Semen Analysis :</strong>Two samples of semen are taken on
            different days and parameters such as actual sperm count, motility
            of sperms, shape and maturity of sperms, volume of ejaculate, and
            liquid state of ejaculate are assessed.
          </li>
          <li>
            <strong>Hormonal Profile :</strong>This test is done to evaluate the
            overall balance of hormones and the state of sperm production by
            evaluating the levels of testosterone and follicle-stimulating
            hormone (FSH). Serum luteinizing hormone (LH) and prolactin are the
            other hormones that are tested after indications from initial
            testing, if needed.
          </li>
          <li>
            <strong>Urinalysis :</strong>The presence of any infection can be
            evaluated by using this test.
          </li>
          <li>
            <strong>Transrectal Ultrasound :</strong>A transrectal ultrasound
            imaging test is used to detect abnormalities in the prostate,
            scrotum, seminal vesicles, and the ejaculatory ducts.
          </li>
          <li>
            <strong>Testicular Biopsy :</strong>This test is performed under
            local anesthesia to determine the cause of infertility by
            identifying impaired sperm production or existing blockage.
          </li>
          <li>
            <strong>Genetic tests :</strong>This is a blood test that detects
            the genetic abnormality in the Y chromosome that affects the
            concentration of sperm in the semen.
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What is the treatment?</h3>
        <h5 className="include">
          The treatment for infertility in males usually depends on certain
          causative factors, which when treated effectively, helps in normal
          conception. The treatments include:
        </h5>
        <ul>
          <li>
            <strong>Specific therapy :</strong>This medical therapy involves
            reversing any chemical, infectious, or endocrine imbalances. This
            therapy involves treating varicocele, acute prostatitis, or
            epididymitis, replacing pituitary hormones such as FSH and LH, and
            administering testosterone to treat hypoandrogenic hypogonadism.
          </li>
          <li>
            <strong>Empiric therapy :</strong>This therapy tries to correct
            ill-defined conditions such as sperm density or motility, using
            medications and hormonal treatments. This method usually has minimal
            success because the intact mechanisms in the body prevent the
            desired effect from taking place.
          </li>
          <li>
            <strong>Assisted reproductive technology (ART) :</strong>This is a
            new class of treatment developed to treat specific health conditions
            in men and women for infertility. These include in-vitro
            fertilization (IVF), intracytoplasmic sperm injection (ICSI), vasal
            aspiration, epididymal aspiration, testicular sperm extraction,
            mapping the failing testes, ovum donors, and embryo or semen
            freezing.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default InfertilityMales;
const Wrapper = styled.section``;
