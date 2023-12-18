import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const InflammatoryBowelDisease = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What is inflammatory bowel disease?</h3>
        <p className="answer">
          Inflammatory bowel disease (IBD) is a chronic condition of the
          gastrointestinal tract, marked by inflammation (pain and swelling). It
          is a combination of ulcerative colitis and Crohn’s disease.
        </p>
        <ul>
          <li>
            <strong>Ulcerative colitis :</strong>It is characterized by
            inflammation along the inner linings of the large intestine (colon)
            and rectum.
          </li>
          <li>
            <strong>Crohn’s disease :</strong>It is characterized by
            inflammation along the deep layers of the digestive tract (mostly
            small intestine).
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What are the symptoms?</h3>
        <p>
          Symptoms of inflammatory bowel disease may vary depending upon the
          severity of inflammation, flare-ups (sudden increase in the symptoms)
          and remission (decrease in the symptoms).
        </p>
        <h5 className="include">Common signs and symptoms of IBD include:</h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].inflammatoryBowelDisease[0].symptoms.map((item) => (
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
          Risk factors for inflammatory bowel disease include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].inflammatoryBowelDisease[0].riskFactors.map((item) => (
            <div className="box">
              <img src={item.icon} alt="" />
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>

      <div className="questions">
        <h3 className="question">How to diagnose IBD?</h3>
        <p>
          IBD can be diagnosed by a combination of laboratory tests and
          procedures.
        </p>
        <strong>Laboratory tests</strong>
        <ul>
          <li>
            <strong>Tests for anaemia or infection :</strong>Your healthcare
            provider may recommend blood tests to look for anaemia or any signs
            of bacterial or viral infections.
          </li>
          <li>
            <strong>Stool examination :</strong>Your healthcare provider may
            request you to undergo a stool examination to check for occult
            (hidden) infectious organisms such as parasites, in your stool.
          </li>
        </ul>
        <strong>Endoscopic Procedures</strong>
        <ul>
          <li>
            <strong>Colonoscopy :</strong>It is a procedure in which small
            samples of intestinal tissue are collected from the colon of the
            large intestine using a flexible, thin tube, with a camera at its
            end. The collected tissue is then sent to the laboratory for
            analysis.
          </li>
          <li>
            <strong>Flexible sigmoidoscopy :</strong>It is performed in cases of
            inflamed colon. Using a slender, flexible, thin tube, with a camera
            at its end, your healthcare provider will examine the rectum and
            sigmoid (the last portion of the colon).
          </li>
          <li>
            <strong>Upper endoscopy :</strong>Your healthcare provider, with the
            help of a flexible, slender, lighted tube, will examine the
            oesophagus, stomach, and duodenum (first portion of the stomach).
          </li>
          <li>
            <strong>Capsule endoscopy :</strong>This procedure involves
            swallowing a capsule that has a camera attached to it. It transmits
            the images that are recorded and then the capsule exits the body
            through the stool. Sometimes, it may help in the diagnosis of
            Crohn’s disease, occurring in the small intestine.
          </li>
          <li>
            <strong>Balloon-assisted enteroscopy :</strong>It is used to reach
            areas with the help of an over tube where endoscopes are not
            accessible.
          </li>
        </ul>
        <strong>Imaging procedures</strong>
        <ul>
          <li>
            <strong>X-ray :</strong>To rule out serious complications such as
            perforated or megacolon, your healthcare provider will recommend a
            standard X-ray of your abdominal region.
          </li>
          <li>
            <strong>Computerized tomography (CT) scan :</strong>It is a special
            X-ray technique that provides a more detailed examination of the
            entire bowel. CT enterography is a specialized CT scan that gives
            better images of the small intestine. It is now replaced by barium
            X-rays in most diagnostic centres.
          </li>
          <li>
            <strong>Magnetic resonance imaging (MRI) :</strong>It is useful in
            the diagnosis of a fistula around the anal area or the small
            intestine (MRI Enterography).
          </li>
        </ul>
      </div>

      <div className="questions">
        <h3 className="question">What is the treatment?</h3>
        <p>
          Treatment for IBD may vary based on type and symptoms. It includes
          both non-surgical (medications) and surgical treatments:
        </p>
        <h5 className="include">Non-surgical treatment (medications) :</h5>
        <ul>
          <li>
            <strong>Amino salicylates :</strong>To reduce gastrointestinal
            irritation.
          </li>
          <li>
            <strong>Antibiotics :</strong>To treat infections and abscesses.
          </li>
          <li>
            <strong>Biologics :</strong>To prevent the transmission of signals
            from the immune system that are responsible for the inflammation of
            the intestine.
          </li>
          <li>
            <strong>Corticosteroids :</strong>It helps in maintaining the immune
            system during flare-ups.
          </li>
          <li>
            <strong>Immunomodulatory :</strong>To depress an overactive immune
            system.
          </li>
          <li>
            <strong>Others :</strong>To aid in IBD treatment, nonsteroidal
            anti-inflammatory drugs (NSAIDs), antidiarrheal medication, vitamins
            and supplements, including probiotics are also used.
          </li>
        </ul>
        <h5 className="include">Surgical treatment :</h5>
        <p>
          If lifestyle modifications, diet, and non-surgical treatments do not
          relieve IBD symptoms, your healthcare provider may recommend you to
          undergo a surgical procedure.
        </p>
        <ul>
          <li>
            <strong>Surgery for ulcerative colitis :</strong>It involves the
            removal of the entire colon (colectomy) or the colon and rectum
            (proctocolectomy), followed by the creation of an internal pouch
            attached to the anus that allows bowel movements.
          </li>
          <li>
            <strong>Surgery for Crohn's disease :</strong>Two-thirds of Crohn's
            disease patients will need surgery at least once in their life. It
            involves the removal of diseased bowel segments, followed by
            connecting ends of healthy bowel (anastomosis).
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default InflammatoryBowelDisease;
const Wrapper = styled.section``;
