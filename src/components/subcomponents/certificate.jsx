import React from "react";

const Certificate = ({title,image,descript,link}) => {
    return <div className="box-container">
    <img src={image} alt="" />
    <div className="about">
      <h3>{title}</h3>
      <span>
        {descript}
      </span>
      <a href={link} className="link">
        Explore
      </a>
    </div>
  </div>
}

export default Certificate;