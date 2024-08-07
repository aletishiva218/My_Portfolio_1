import { Fragment,useState,useEffect } from "react";
import { Skeleton } from "@mui/material";
import axios from "axios";

import Header from "./subcomponents/header.jsx";
import Skill from "./subcomponents/skill.jsx";
import Footer from "./subcomponents/footer.jsx";
import codeGif from "../assets/images/code.gif";

const ChangeType = ({got,skills}) => {
  if(got)
    {
      return <>{skills.map((skill,index)=>
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
  const url = "https://shivaaleti-server.vercel.app/";
  useEffect(()=>{
    axios.get(url+"skills").then(response=>{
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
            <h2>MY SKILLS</h2>
          </div>
          <div className="box-containers">
          <ChangeType got={data.status} skills={data.skills} />
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Skills;
