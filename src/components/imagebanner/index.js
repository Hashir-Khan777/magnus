import React from "react";
import "./css/index.css";

const ImageBanner = ({ headerContent, headerImage }) => {
  return (
    <div className="header_image">
      <img loading="lazy" src={headerImage} alt="" />
      <div className="image_overlay"></div>
      <div className="container">
        <div className="about_header_content">
          <h1>{headerContent}</h1>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
