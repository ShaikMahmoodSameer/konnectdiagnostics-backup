import React from "react";
import Counter from "./Counter";
import styled from "styled-components";
import LazyLoadComponent from "./LazyLoad";

const CounterBox = () => {
  return (
    <Wrapper>
      <section className="counter-section">
        <div className="counter-box container">
          <LazyLoadComponent>
            <div className="counter-items">
              <div className="cb counter-1">
                <img src="/images/icons/tests-white.svg" alt="" />
                <div className="info">
                  <div className="one ">
                    <Counter endValue={2} />
                  </div>
                  <h3>Tests</h3>
                </div>
              </div>
              <div className="divider"></div>
              <div className="cb counter-2">
                <img src="/images/icons/test-bottle.svg" alt="" />
                <div className="info">
                  <div className="two">
                    <Counter endValue={480} />
                  </div>
                  <h3>Types of tests</h3>
                </div>
              </div>
              <div className="divider"></div>
              <div className="cb counter-3">
                <img src="/images/icons/hospital-white.svg" alt="" />
                <div className="info">
                  <div className="three">
                    <Counter endValue={120} />
                  </div>
                  <h3>Centers</h3>
                </div>
              </div>
              <div className="divider"></div>
              <div className="cb counter-4">
                <img src="/images/icons/customers-white.svg" alt="" />
                <div className="info">
                  <div className="four">
                    <Counter endValue={5} />
                  </div>
                  <h3>Customers</h3>
                </div>
              </div>
            </div>
          </LazyLoadComponent>
        </div>
      </section>
    </Wrapper>
  );
};

export default CounterBox;
const Wrapper = styled.section`
  .container .million,
  .cnt,
  .thousand {
    display: none;
  }
  .one .thousand {
    display: block;
  }
  .two .cnt {
    display: block;
  }
  .three .cnt {
    display: block;
  }
  .four .million {
    display: block;
  }
  .counter-section {
    text-align: center;
    .counter-box {
      ${'' /* background-image: url(/images/k-10.png), linear-gradient(360deg, #005bab, #00ffbb90); */}
      background-color: ${({ theme }) => theme.colors.primary};
      border-radius: 1rem;
    }
    .counter-items {
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 1rem;
      .divider {
        width: 1px;
        border-radius: 5px;
        background-color: #ffffff;
        height: 100px;
        align-self: center;
      }

      .cb {
        display: flex;
        padding: 2rem 1rem;
        gap: 25px;
        text-align: center;
        align-items: end;
        img {
          width: 50px;
        }

        .info {
          text-align: start;

          .counter p {
            position: relative;
            &::after {
              position: absolute;
              content: "+";
              font-size: 2rem;
              color: #fff;
            }
          }
          p {
            display: inline;
            font-size: 2rem;
            font-weight: bold;
          }
          h3 {
            font-size: 1.25rem;
            color: #fff;
            margin: 0;
          }
        }
      }
    }
  }
`;
