import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const Pregnancy = () => {
  return (
    <Wrapper>
      <div className="questions">
        <p className="answer">
          Pregnancy is the period during which a fetus develops within a woman's
          womb/uterus. It usually lasts about 40 weeks or just over 9 months,
          from the last menstrual cycle till delivery. Pregnancy is typically
          divided into three segments called trimesters–first, second, and
          third. Several prenatal check-ups and blood tests are required at this
          time to ensure the mother's safety and health of the fetus.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">How to know if one is pregnant?</h3>
        <h5 className="include">Early signs of pregnancy include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].pregnancy[0].symptoms.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h4>Diagnostic tests to confirm pregnancy:</h4>
        <p>
          The following tests are commonly recommended for women that may help
          to confirm pregnancy
        </p>
        <ul>
          <li>
            <strong>Urine HCG :</strong>This test can be done at a healthcare
            provider’s clinic or using an at-home test kit. The results are
            generated within a few minutes with accuracy rates of about 97-99%.
          </li>
          <li>
            <strong>Blood HCG :</strong>This test requires small amounts of
            blood to be drawn from a woman to look for hCG (Human chorionic
            gonadotropin) hormone. It is less commonly used when compared to
            urine hCG tests.
          </li>
          <li>
            <strong>Ultrasound :</strong>It uses sound waves to show a picture
            of a developing fetus in the mother’s womb.
          </li>
        </ul>
        <h4>Tests done during pregnancy for maternal and fetal health:</h4>
        <p>
          Below are a few common tests recommended for pregnant women during
          each of the three trimesters
        </p>
        <strong>First Trimester :</strong>
        <ul>
          <li>Nuchal Translucency (NT) Scan</li>
          <li>Blood tests</li>
          <li>Chorionic Villus Sampling</li>
          <li>Carrier screening for Genetic Conditions</li>
          <li>Non-invasive Prenatal Screening (NIPS/NIPT)</li>
          <li>Early Ultrasound</li>
          <li>Transvaginal Scan (TVS)</li>
          <li>Abdominal Scan</li>
          <li>Sexually Transmitted Diseases (STD) tests </li>
          <li>Pap smear</li>
          <li>Blood pressure</li>
          <li>Urine tests</li>
          <li>Cystic fibrosis (CF)</li>
        </ul>
        <strong>Second Trimester :</strong>
        <ul>
          <li>Multiple marker/Quadruple Screen</li>
          <li>Integrated or sequential screening</li>
          <li>Alpha-fetoprotein screening (AFP)</li>
          <li>Amniocentesis</li>
          <li>Ultrasound</li>
          <li>Glucose screening</li>
          <li>Foetal Doppler ultrasound</li>
          <li>Foetoscopy</li>
        </ul>
        <strong>Third Trimester :</strong>
        <ul>
          <li>Group B streptococcus test</li>
          <li>Electronic foetal heart monitoring</li>
          <li>Contraction stress test</li>
          <li>Non-stress test</li>
          <li>Biophysical profile</li>
          <li>Ultrasound </li>
        </ul>
        <h4>Tips for a healthy pregnancy</h4>

        <ul>
          <li>
            <strong>Healthy eating :</strong>Eating a healthy and well-balanced
            diet is very essential during pregnancy. Therefore, including foods
            that are good sources of fiber, vitamins, minerals, etc., is
            necessary
            <ul>
              <li>
                Fruits–Apples, seasonal fruits, pomegranates, Oranges, Guava,
                dry fruits, etc.
              </li>
              <li>
                Vegetables–green leafy vegetables, tomatoes, potatoes, carrots,
                legumes, etc., that are rich in vitamin A and potassium.
              </li>
              <li>Whole grains–Oatmeal, whole-grain bread, brown rice, etc.</li>
              <li>Dairy products–Milk, cheese, ghee, etc.</li>
              <li>Non-vegetarian diet–Meat, fish, egg, chicken, etc.</li>
            </ul>
          </li>
          <li>
            <strong>Physical activity :</strong>Staying physically active during
            pregnancy helps women lower the risk of pregnancy-related problems
            such as preeclampsia, gestational diabetes, etc. Although heavy
            exercises are not recommended, a few light exercises such as
            walking, yoga, cycling, etc., are proven to be helpful in lowering
            the risks during pregnancy.
          </li>
          <li>
            <strong>Adequate rest :</strong>Proper rest is very essential for
            both the mother and unborn child. Striking the right balance between
            sleep and activity is very important during pregnancy.
          </li>
          <li>
            <strong>Vitamins and supplementation :</strong>Supplementations such
            as folic acid, and vitamin D are very essential, apart from other
            dietary requirements of minerals, proteins, and carbohydrates.
          </li>
          <li>
            <strong>No smoking and alcohol consumption :</strong>Smoking and
            alcohol consumption are strictly to be avoided during pregnancy to
            ensure good fetal health and development.
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Pregnancy;
const Wrapper = styled.section``;
