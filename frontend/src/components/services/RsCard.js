import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { RsContentData } from "../../assets/data/RsContentData";
// import { AiOutlineTags } from "react-icons/ai";

const RsCard = () => {
  return (
    <Wrapper>
      <section className="conditions">
        <div className="hc-card d-flex gap-3 justify-content-between flex-wrap col container">
          {RsContentData.map((item) => (
            <div className="box mb-3" key={item.id}>
              <Link to={`/radiology-services/${item.slug}`}>
                <div className="img">
                  <img src={item.productImage} alt={item.slug} />
                </div>
                <div className="details">
                  <div className="catg">
                    {/* <AiOutlineTags className="icon" /> */}
                    {/* <a href="/">{item.category}</a> */}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt.slice(0, 25)}...</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default RsCard;

const Wrapper = styled.section`
  .hc-card {
    /* background-color: white; */
    /* margin: 2rem auto; */
    padding: 5rem 0;
    a {
      text-decoration: none;
    }
    .box {
      /* background-color: #fff; */
      border-radius: 1rem;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 5px 20px;
      padding: 15px;
      width: 32%;
      img {
        width: 100%;
        height: 220px;
        border-radius: 1rem;
      }
      .details {
        padding: 15px;

        a {
          font-size: 14px;
        }

        h3 {
          font-size: 1.25rem;
          margin-top: 5px;
          /* font-family: "Montserrat Alternates", sans-serif; */
          font-weight: 600;
          text-decoration: none;
          text-transform: lowercase;
          &::first-line {
            text-transform: capitalize;
          }
        }
        p {
          font-size: 1rem;
          font-weight: 500;
          color: #858585;
        }
      }
    }
  }
`;
