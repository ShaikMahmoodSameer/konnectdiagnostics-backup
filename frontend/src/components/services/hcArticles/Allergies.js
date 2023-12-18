import React from "react";
// import { symptoms, riskFactors } from "../../../assets/data/HcSymptomsData";
import { hcIcons } from "../../../assets/data/HcSymptomsData";
import styled from "styled-components";

const Allergies = () => {
  return (
    <Wrapper>
      <div className="questions">
        <h3 className="question">What are Allergies?</h3>
        <p className="answer">
          Allergies can be understood as reactions from the body’s immune system
          towards typically harmless substances. The body treats these harmless
          substances as toxic foreign entities and starts producing antibodies
          (IgE) against them. Immune cells called mast cells release histamine
          in response to an allergic reaction in the body.
        </p>
      </div>
      <div className="questions">
        <h3 className="question">What are the types of Allergies?</h3>
        <h5 className="include">Different types of allergies include:</h5>
        <ul>
          <li>Food allergy</li>
          <li>Drug allergy</li>
          <li>Insect allergy</li>
          <li>Latex allergy</li>
          <li>Mold allergy</li>
          <li>Pet allergy</li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What are the symptoms?</h3>
        <h5 className="include">
          A few most common symptoms of allergies include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].allergy[0].symptoms.map((item) => (
            <div className="box">
              <div className="sym-img">
                <img src={item.icon} alt="" />
              </div>
              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h3 className="question">What are the risk factors?</h3>
        <h5 className="include">
          Risk factors for most common allergies include:
        </h5>
        <div className="icon-box d-flex flex-wrap gap-3">
          {hcIcons[0].allergy[0].riskFactors.map((item) => (
            <div className="box">
              <div className="rf-img">
                <img src={item.icon} alt="" />
              </div>

              <h5>{item.symptom}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="questions">
        <h3 className="question">How to diagnose?</h3>
        <h5 className="include">
          Allergies are usually diagnosed by examining the symptoms of an
          individual. However, to confirm the diagnosis, the following tests are
          recommended for individuals:
        </h5>
        <ul>
          <li>
            <strong>Skin prick test:</strong> The healthcare provider will place
            small drops of a specific allergen on the skin. Thereafter, a light
            prick or scratch is made on the skin through the drop.
          </li>
          <li>
            <strong> Intradermal skin test:</strong>Intradermal means under the
            skin. The healthcare provider will inject a small amount of a
            specific allergen into the outer layer(epidermis) of the skin.
          </li>
          <li>
            <strong> Physician-supervised challenge test:</strong> Under a
            physician’s supervision, an individual is provided with a specific
            allergen that should either be inhaled or ingested. It is usually
            done to check allergies to medicines and certain foods.
          </li>
          <li>
            <strong> Patch test:</strong>
            The healthcare provider will place a small amount of a specific
            allergen on the skin of an individual, and cover it with the help of
            a bandage. After 48 to 96 hours, the bandage is removed to check for
            reactions, if any.
          </li>
          <li>
            <strong>Blood tests:</strong>
            The blood of an individual is taken and is tested for
            allergen-specific IgE antibodies.
          </li>
        </ul>
      </div>
      <div className="questions">
        <h3 className="question">What is the treatment?</h3>
        <h5 className="include">
          The very first step in treating allergies is to avoid the allergens.
          Furthermore, to stop the allergic reactions, the individuals are given
          over-the-counter drugs. They are as follows:
        </h5>
        <ul>
          <li>
            <strong>Antihistamines:</strong> These drugs act by blocking the
            body’s responses to release histamines that cause symptoms of
            allergy.
          </li>
          <li>
            <strong> Nasal sprays:</strong>These are safe and effective to use
            but may take from a few days to a week to show action.
          </li>
          <li>
            <strong> Decongestants:</strong> These should be used cautiously
            because of the side effects related to long-term usage.
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
      </div>
    </Wrapper>
  );
};

export default Allergies;
const Wrapper = styled.section`
  /* .questions {
    margin-top: 1.5rem;
    .question {
      font-size: ${({ theme }) => theme.fonts.heading2};

      font-weight: 600;
    }
    .include {
      font-size: ${({ theme }) => theme.fonts.heading4};
      font-weight: 600;
      line-height: 1.5;
    }
    p,
    li {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 5px;
      &::marker {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
    .icon-box {
      margin: 25px 0 50px;
      .box {
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 150px;
        height: auto;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 5px 15px 0px;
        border-radius: 10px;
        img {
          margin: 1rem;
          width: 100%;
          height: 55px;
        }
        h5 {
          font-size: 15px;
        }
      }
    }
  } */
`;
