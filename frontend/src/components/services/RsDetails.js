import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { AiOutlineTags } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { RsContentData } from "../../assets/data/RsContentData";

const RsDetails = () => {
  const { slug } = useParams();
  const [rs, setRs] = useState(null);

  useEffect(() => {
    let rs = RsContentData.find((rs) => rs.slug === slug);
    if (rs) {
      setRs(rs);
    }
  }, [slug]);

  return (
    <Wrapper>
      {rs ? (
        <section className="singlePage">
          <div className="container p-0 d-flex gap-5">
            <div className="left ">
              <div className="img" style={{ width: "50%" }}>
                <img
                  src={rs.productImage}
                  style={{ width: "100%", height: "100%" }}
                  alt={rs.title}
                />
              </div>
              {/* <AiOutlineTags className="icon" /> */}
              {/* <a href="/">{rs.category}</a> */}
              <h2>{rs.title}</h2>
              <hr />
              <div>{rs.component}</div>
            </div>
            <div className="right">
              <h3 className="related-heading">Related</h3>
              <div className="scroll-box-right">
                {RsContentData.map((item) => (
                  <Link to={`/radiology-services/${item.slug}`}>
                    <div className="related">
                      <div className="item d-flex gap-2">
                        <div className="img">
                          <img src={item.productImage} alt="" />
                        </div>
                        <div className="info d-flex">
                          <h3>{item.title}</h3>
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

export default RsDetails;

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
      /* .scroll-box-right {
        height: 100vh;
        position: relative;
        overflow-y: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar {
          width: 5px;
          box-shadow: inset 0 0 7px #11010125;
          border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb {
          background: ${({ theme }) => theme.colors.primary90};
          border-radius: 10px;

          &:hover {
            background: ${({ theme }) => theme.colors.primary};
          }
        }
      } */

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
        box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 20px;
        border-radius: 10px;
        margin: 10px;
        .item {
          align-items: center;
          display: flex;
          margin-bottom: 15px;
          padding: 10px;

          .img {
            width: 35%;
            img {
              width: 100%;
              height: auto;
              border-radius: 5px;
            }
          }
          .info {
            /* border: 1px solid red; */
            margin: 5px;
            width: 65%;
            h3 {
              color: ${({ theme }) => theme.colors.dark};
              font-size: 17px;
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
