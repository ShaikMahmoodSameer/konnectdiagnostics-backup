import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineTags } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { hcContentData } from "../../assets/data/HcContentData";

const DetailsPages = () => {
  const { slug } = useParams();
  const [conditions, setconditions] = useState(null);

  useEffect(() => {
    let conditions = hcContentData.find(
      (conditions) => conditions.slug === slug
    );
    if (conditions) {
      setconditions(conditions);
    }
  }, [slug]);

  return (
    <Wrapper>
      {conditions ? (
        <section className="singlePage">
          <div className="container d-flex gap-5">
            <div className="left ">
              <div className="img">
                <img src={conditions.cover} alt={conditions.title} />
              </div>
              <AiOutlineTags className="icon" />
              {/* <a href="/">{conditions.category}</a> */}
              <h2>{conditions.title}</h2>
              <hr />

              <div>{conditions.component}</div>
            </div>
            <div className="right">
              <h3 className="related-heading">Related</h3>
              <div className="scroll-box-right">
                {hcContentData.map((item) => (
                  <Link to={`/health-conditions/${item.slug}`}>
                    <div className="related">
                      <div className="item d-flex gap-2">
                        <div className="img">
                          <img src={item.cover} alt="" />
                        </div>
                        <div className="info">
                          <h3>{item.title}</h3>
                          <p>{item.excerpt}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </Wrapper>
  );
};

export default DetailsPages;

const Wrapper = styled.section`
  .symptoms-box {
    display: flex;
    flex-direction: column;
    display: flex;
    .symptoms {
      display: flex;
      border: 2px solid red;
      width: 100px;
      .symptom-image {
        height: auto;
        padding: 10px;

        /* height: auto; */
        background-color: yellowgreen;
      }
    }
  }

  .singlePage {
    .left {
      width: 70%;
      img {
        width: 100%;
        height: 400px;
        border-radius: 15px;
        margin-bottom: 20px;
      }
      a {
        font-size: 15px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};
      }
      h2 {
        font-family: "Montserrat Alternates", sans-serif;
        margin-bottom: 15px;
        line-height: 1.5;
        font-size: 2rem;
      }
      .content {
        /* background-color: aliceblue; */
        margin: 1.5rem auto;
        .question {
          font-size: 1.5rem;
          font-weight: 600;
        }
        .desc {
          font-size: 1rem;
          font-weight: 500;
        }
      }
    }
    .right {
      width: 30%;
      .related-heading {
        font-family: "Montserrat Alternates", sans-serif;
        font-size: ${({ theme }) => theme.fonts.heading2};
        color: ${({ theme }) => theme.colors.dark};
        font-weight: 600;
        margin-bottom: 1rem;
      }
      a {
        text-decoration: none;
      }
      .box {
        /* border: 2px solid red; */
        /* width: 100%; */
      }
      img {
        width: 100%;
        height: 100%;
      }
      .related {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border-radius: 15px;
        .item {
          /* align-items: center; */
          display: flex;

          margin-bottom: 20px;
          padding: 10px;

          .img {
            width: 45%;
            img {
              width: 100%;
              border-radius: 5px;
            }
          }
          .info {
            /* background: red; */
            margin: 5px;
            width: 55%;
            h3 {
              color: ${({ theme }) => theme.colors.dark};
              font-size: ${({ theme }) => theme.fonts.heading4};
              font-weight: 600;
            }
            p {
              color: ${({ theme }) => theme.colors.text};
              font-size: 0.925rem;
            }
          }
        }
      }
    }
  }
`;
