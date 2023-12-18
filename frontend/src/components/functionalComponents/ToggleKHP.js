import React from "react";
import PackagesGrid from "../../pages/nav-pages/PackagesGrid";

const ToggleKHP = ({ userId, auth, cart, handleLoginClick }) => {
  return (
    <div className="s2-khp mt-4">
      <div className="results d-flex flex-wrap gap-3 justify-content-center">
        <PackagesGrid userId={userId} auth={auth} cart={cart} qntt={6} handleLoginClick={handleLoginClick}  />
      </div>
    </div>
  );
};

export default ToggleKHP;
