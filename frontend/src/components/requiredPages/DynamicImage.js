import React from "react";

const DynamicImage = ({ imageName }) => {
  const imagePath = `/images/${imageName}`;
  return (
    <div>
      <img src={imagePath} alt={imageName} />
    </div>
  );
};

export default DynamicImage;
