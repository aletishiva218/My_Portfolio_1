import React from "react";

const Skill = ({image,title,descript}) => {
    return  <div className="box-container">
    <img src={image} alt={title} />
    <div className="about">
      <h3>{title}</h3>
      <span>
        {descript}
      </span>
    </div>
  </div>
}

export default Skill;