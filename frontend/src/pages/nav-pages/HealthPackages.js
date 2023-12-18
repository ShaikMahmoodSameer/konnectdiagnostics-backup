import React from 'react';
import { styled } from 'styled-components';
import PackagesGrid from './PackagesGrid';

function HealthPackages({ userId, auth, cart, handleLoginClick }) {
  return (
    <Wrapper>
      <div className="pagebanner d-flex">
        <div className="container text-center flex">
          <h1 className='page_title text-white'>Packages</h1>
          <p> <span className='text-white'> Home / </span> <span> Packages </span> </p>
        </div>
      </div>

      <div className="categories d-flex justify-content-center align-items-center rounded py-2">
        <h6 className="px-4 py-2 rounded  bg-light text-dark fw-bold small text-center">Total tests : 11</h6>
      </div>

      <PackagesGrid userId={userId} auth={auth} cart={cart} handleLoginClick={handleLoginClick} />
    </Wrapper>
  )
}

export default HealthPackages;

const Wrapper = styled.section`
.package-card{
  position: relative;
  width: 300px;
  overflow: hidden;
  img{
    width: 100%;
  }
  .packagename{
    font-size: 18px;
    font-weight: 700;
  }
  .ftr-sec{
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
`;
