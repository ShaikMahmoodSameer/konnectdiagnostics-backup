import React from "react";
import styled from "styled-components";
import { useCart } from "react-use-cart";
import { BsCurrencyRupee } from "react-icons/bs";

const HpCard = ({ item, handleClick }) => {
  const { addItem } = useCart();
  return (
    <Wrapper>
      <section className="d-flex mb-3 ">
        <div className="hp-card bg-white rounded p-2">
          <div className="hp-img rounded">
            <img src={item.ftrImg} alt="k" />
          </div>
          <div className="p-2">
            <h2 className=" r_heading_title_secondary">{item.package_name}</h2>
            <span>Code: {item.code}</span>
            <hr />
            <div className="d-flex align-items-center justify-content-between">
              <button
                className="btn atc-btn btn-sm"
                onClick={() => {
                  addItem(item);
                  handleClick(item);
                }}
              >
                Add To Cart
              </button>
              <h2 className="hp_price">
                <BsCurrencyRupee />
                {item.price}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default HpCard;

const Wrapper = styled.section`
  .hp-card {
    width: 100%;
    justify-content: space-between;
    h2 {
      font-size: 16px;
      font-weight: 700;
    }
    h2.hp_price {
      margin: 0;
    }
    .hp-img {
      overflow: hidden;
      img {
        transition: all 0.3s;
        width: 20rem;
        &:hover {
          scale: 1.1;
        }
      }
    }

    .atc-btn {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
      padding: 6px 15px;
      border-radius: 5px;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
