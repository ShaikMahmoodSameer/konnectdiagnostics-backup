import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const HormonalProblemsInFemales = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What do Hormonal Problems in females mean?</h3>
        <p className="answer">
          Hormones are secretions that help in the coordination of many bodily
          functions such as metabolism, regulation of blood sugar levels, mood
          and stress levels, growth of an individual, etc., by carrying messages
          through the blood to various organs. Too much or too little of a
          certain hormone in the body may cause hormonal imbalance/problems.
          These imbalances can have a variety of effects on an individual's
          quality of life.
        </p>
      </div>

      <div className="questions">
        <h3 className="question">
          What are the symptoms of hormonal problems?
        </h3>
        <h5 className="include">
          The most common signs and symptoms of hormonal problems in females
          include :
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].hormonalProblemsInFemales[0].symptoms.map((item) => (
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
          A few most common risk factors for hormonal problems in females
          include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].hormonalProblemsInFemales[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose? </h3>
        <h5 className="include">
          The healthcare provider will take a detailed history of an individual
          and do a thorough physical and pelvic examination. Additionally, one
          may also be recommended the following tests:
        </h5>
        <ul>
          <li>
            <strong>Blood test :</strong>These are recommended to check for
            hormones such as thyroid, estrogen, testosterone, cortisol levels,
            etc. Other tests that can be done using blood samples from an
            individual are blood sugar tests, serum electrolytes, serum calcium
            levels, and autoantibodies.
          </li>
          <li>
            <strong>Ultrasound imaging :</strong>These are performed to
            understand diseases related to the ovaries, uterus, thyroid, or
            pituitary glands. It uses sound waves to create images of various
            organs of the body.
          </li>
          <li>
            <strong>Additional imaging :</strong>
            Imaging techniques such as Computed Tomography (CT scan) or Magnetic
            resonance imaging (MRI) are recommended to get more detailed
            information on certain endocrine-related conditions.
          </li>
          <li>
            <strong>Miscellaneous tests :</strong>
            Tests such as thyroid scan, a biopsy of any suspicious-looking mass
            in the endocrine gland, etc. are also recommended.
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What is the treatment? </h3>
        <h5 className="include">
          The following treatment measures can be taken depending on the cause
          of hormonal imbalance. They are:
        </h5>

        <ul>
          <li>
            <strong>Hormone or Birth control :</strong> These are available in
            the form of pills, patches, rings, shots, intrauterine devices
            (IUD), etc. For women, who are not planning to get pregnant, these
            may help in regulating irregular menstrual cycles and its associated
            symptoms.
          </li>
          <li>
            <strong>Vaginal estrogen :</strong> Individuals experiencing changes
            in estrogen levels may have vaginal dryness. This may be treated
            using creams containing estrogen, applied directly to the vaginal
            tissue.
          </li>
          <li>
            <strong>Hormone replacement medication :</strong> These medications
            help in temporarily reducing menopause-related severe symptoms such
            as hot flashes and night sweats.
          </li>
          <li>
            <strong>Anti-androgen medication :</strong> These medications help
            in predominately blocking the male-sex hormone, androgen, thereby
            helping in limiting acne and excessive hair growth or loss.
          </li>
          <li>
            <strong>Ovulation induction medication :</strong> These are
            recommended in females with PCOS (Polycystic Ovary Syndrome) that
            may help stimulate ovulation, when trying to get pregnant.
          </li>
          <li>
            <strong>Assisted reproductive technology (ART) :</strong> In-vitro
            fertilization (IVF) technique can be employed to help women with
            PCOS to get pregnant with lesser or no complications.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default HormonalProblemsInFemales;
const Wrapper = styled.section``;
