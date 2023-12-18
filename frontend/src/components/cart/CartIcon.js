import React from "react";
// import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const CartIcon = ({ size }) => {
  return (
    <Wrapper>
      <div className="cart-icon-box">
        <i className="fa-solid fa-cart-plus"></i>
        <span className="item-count">{size}</span>
      </div>
    </Wrapper>
  );
};

export default CartIcon;
const Wrapper = styled.section`
  .cart-icon-box {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 50px;
  padding: 8px;
}

.cart-icon {
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
}

.item-count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.primary}; /* Circle background color */
  color: #fff;
  font-size: 14px;
  border-radius: 50%; /* Make it a circle by setting border-radius to 50% */
  margin-left: 8px; /* Add some space between the icon and count */
}

`;
