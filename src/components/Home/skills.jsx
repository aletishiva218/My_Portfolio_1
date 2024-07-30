import React, { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import Skill from "../subcomponents/skill.jsx";
import codeGif from "../../assets/images/code.gif";
import axios from "axios";

const ChangeType = ({got,skills}) => {
  if(got)
    {
      const newSkills = []
      for(let i=0;i<3;i++)
      {
         if(skills[i]) newSkills.push(skills[i])
           else break;
      }
      return <>{newSkills.map((skill,index)=>
        <Skill title={skill.title} descript={skill.description} image={skill.image}  key={index} />
      )}</>;
     }
      else 
    return <>  <Skeleton variant="rounded" height="13rem" className="box-container"  />
    <Skeleton variant="rounded" height="13rem" className="box-container"  />
    <Skeleton variant="rounded" height="13rem" className="box-container"  /></>;
}

const Skills = () => {
  const [data,setData] = useState({status:false})
  const url = "https://my-portfolio-1-o1ol.onrender.com/";
  useEffect(()=>{
    axios.get(url+"skills").then(response=>{
     const {data} = response;    
      setData(data)
  }).catch(err=>console.log(err))
  },[])
    return <section className="skills">
    <div className="head-div">
      <h2>SKILLS</h2>
      <a href="/skills" className="button-link">
        MORE
      </a>
    </div>
    <div className="box-containers">
      <ChangeType got={data.status} skills={data.skills} />
    </div>
  </section>
  
}

export default Skills;