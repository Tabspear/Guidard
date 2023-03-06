import React from "react";
import "./Slider.css";

const Slide = ({ itemImage, itemTitle, style }) => {
  return (
    <div style={style} className="slider">
      <div>
        <h1 className="textResponsive">{itemTitle}</h1>
      </div>
      <div>
        <img src={itemImage} alt={itemTitle} className="slider active" />
      </div>
    </div>
  );
};

export default Slide;
