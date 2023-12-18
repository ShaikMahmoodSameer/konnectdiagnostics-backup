import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import axios from 'axios';
import PackageItem from './PackageItem';

function PackagesGrid({ userId, auth, cart, qntt, handleLoginClick }) {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
      async function getallpackagesdata() {
          try {
              const response = await axios.get(`http://localhost:3210/getpackages`);
              setPackages(response.data);
          } catch (error) {
              console.error(error);
          }
      } 
      getallpackagesdata();
  }, []);
  const displayedPackages = qntt ? packages.slice(0, qntt) : packages;

  return (
    <Wrapper>
      <div className="box-right-bottom my-3">
        <div className="d-flex justify-content-center flex-wrap gap-3">
          {
            displayedPackages.map((item) => (
               <PackageItem key={item.product_id} item={item} userId={userId} auth={auth} cart={cart} handleLoginClick={handleLoginClick} />
            ))
          }
        </div>
      </div> 

    </Wrapper>
  )
}

export default PackagesGrid;

const Wrapper = styled.section`
.package-card{
  position: relative;
  width: 300px;
  overflow: hidden;
  img{
    width: 100%;
  }
  .cardcomplogo{
      position: absolute;
      width: 25px;
      height: 25px;
      top: 10px;
      right: 10px;
      z-index: 2;
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
