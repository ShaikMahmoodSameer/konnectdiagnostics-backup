import React from "react";
import styled from "styled-components";

const styles = {
  header: {
    backgroundImage: "url(./images/k-10.png)",
    height: "100%",
    marginBottom: "0px",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
};

const SectionFive = () => {
  return (
    <>
      <div className="secFive-bg" style={styles.header}>
        <div className="secFive container ">
          <div className="s5-bookAtest">
            <h2>Health Packages</h2>
          </div>
          <div className="cards d-flex">
            {/* <PackagesCard
              name="HbA1c (Glycated Haemoglobin)"
              price="Rs 450"
              invCode="Includes"
              description="Excepteur sint occaecat cupidatat non proident"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFive;
const Wrapper = styled.section``;
