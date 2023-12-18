import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { TestCard } from "./TestCard";

export const PopularTests = ({ userId, auth, cart, setCart, handleLoginClick }) => {
  const [popularTests, setPopularTests] = useState([]);
  
  useEffect(() => {
      const poptestscode = ["INV131", "INV1008", "INV1011", "INV1005"]; 
      async function getPopularTests() {
          try {
              const response = await axios.get(`http://localhost:3210/getpoptests`, {params:{ codes: poptestscode }});
              setPopularTests(response.data);
          } catch (error) {
              console.error(error);
          }
      } 
      getPopularTests();
  }, []);
  return (
    <Wrapper>
      <div className="ptCards my-3 container p-0 d-flex flex-wrap gap-2">
        <div className="container d-flex justify-content-center gap-3">
          {
            popularTests.map((item) => (
              <TestCard key={item.product_id} item={item} auth={auth} userId={userId} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />
            ))
          }
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .ptCards {
    justify-content: space-between;
    .ptCard {
      background-color: #00ffbb;
      position: relative;
      border-radius: 15px;
      width: 24%;
      /* padding: 25px; */
      z-index: 1;
      .ptBg {
        background-image: url(/images/k-10.png),
          linear-gradient(360deg, transparent, #005bab);
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #005bab90;
        padding: 25px;
        border-radius: 15px 15px 100px 15px;
        height: 100%;
      }
      .pt-info {
        color: ${({ theme }) => theme.colors.white};
        h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        h5 {
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        p {
          color: ${({ theme }) => theme.colors.white};
        }
      }
      .ptBtn {
        margin-top: 2rem;
        text-align: start;
        button {
          background-color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          border: none;
          padding: 5px 15px;
          border-radius: 5px;
        }
      }
    }
  }
`;
