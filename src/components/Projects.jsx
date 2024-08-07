import { Fragment,useState,useEffect } from "react";
import { Skeleton } from "@mui/material";
import axios from "axios";

import Header from "./subcomponents/header.jsx";
import Project from "./subcomponents/project.jsx";
import Footer from "./subcomponents/footer.jsx";
import codeGif from "../assets/images/code.gif";

const ChangeType = ({got,projects}) => {
  if(got)
    {
    return <>{projects.map((project,index)=>
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
  return (
    <Fragment>
      <Header />
      <main>
        <section className="projects section-page">
          <div className="head-div">
            <h2>MY PROJECTS</h2>
          </div>
          <div className="box-containers">
    <ChangeType got={data.status} projects={data.projects} />
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Projects;
