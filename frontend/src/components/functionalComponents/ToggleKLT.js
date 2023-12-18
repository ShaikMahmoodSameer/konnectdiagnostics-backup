import React from "react";
import { PopularTests } from "../requiredPages/PopularTests";

const ToggleKLT = ({ userId, auth, cart, setCart, handleLoginClick }) => {
  return(
    <>
      <PopularTests userId={userId} auth={auth} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />
    </>
  );
};

export default ToggleKLT;
