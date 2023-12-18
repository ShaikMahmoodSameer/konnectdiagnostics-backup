import React from "react";
import { styled } from "styled-components";
import axios from "axios";

const OrganCarousel = ({ images, setSearchResults }) => {
  const handleOrgSel = async (event) => {
    const selectedOrg = event.currentTarget.querySelector('img').alt;
    try {
      // const response = await axios.get(`http://localhost:3210/orgsel?selectedorgan=${selectedOrg}`);
      const response = await axios.get(`http://localhost:3210/orgsel?selectedorgan=${selectedOrg}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <div className="organs d-flex gap-2 flex-wrap">
        {images.map((image, index) => (
          <div className="org-item" key={index} onClick={handleOrgSel}>
            <img src={image.src} alt={image.alt} />
            <p>{image.alt}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default OrganCarousel;

const Wrapper = styled.section`
  .organs {
    display: flex;
    .org-item {
      background: white;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      border-radius: 8px;
      width: 90px;
      height: 90px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
      }
      &:hover p {
        color: white;
      }
    }
    img {
      width: 40px;
      margin: 5px;
    }
  }
`;
