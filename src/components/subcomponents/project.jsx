import React from "react";

const Project = ({title,image,link,descript}) => {
    return  <div className="box-container">
    <img src={image} alt="" />
    <div className="about">
      <h3>{title}</h3>
      <span>
        {descript}
      </span>
      <a href={link} className="link" target="_blank">
        Explore
      </a>
    </div>
  </div>
}

export default Project;