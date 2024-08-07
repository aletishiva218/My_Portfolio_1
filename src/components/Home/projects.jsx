import React, { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import axios from "axios";

import Project from "../subcomponents/project.jsx";

const ChangeType = ({got,projects}) => {
  if(got)
    {
     const newProjects = []
     for(let i=0;i<3;i++)
     {
        if(projects[i]!==undefined) 
         newProjects.push(projects[i])
          else
           break;
     }
    return <>{newProjects.map((project,index)=>
      <Project title={project.title} descript={project.description} image={project.image} link={project.url} key={index} />
    )}</>;
   }
      else 
      return <>    <Skeleton variant="rounded" height="18rem" className="box-container"  />
    <Skeleton variant="rounded" height="18rem" className="box-container"  />
    <Skeleton variant="rounded" height="18rem" className="box-container"  /></>;
}

const Projects = () => {
  const [data,setData] = useState({status:false})
  const url = "https://shivaaleti-server.vercel.app/";
  useEffect(()=>{
    axios.get(url+"projects").then(response=>{
     const {data} = response;    
      setData(data)
  }).catch(err=>console.log(err))
  },[])

  return <section className="projects">
    <div className="head-div">
      <h2>PROJECTS</h2>
      <a href="/projects" className="button-link">
        MORE
      </a>
    </div>
    <div className="box-containers">
    <ChangeType got={data.status} projects={data.projects} />
    </div>
  </section>
  
}

export default Projects;