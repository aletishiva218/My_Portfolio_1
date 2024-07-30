import React,{useState,useEffect} from "react";
import thinkImg from "../../assets/images/think.png";
import { Button } from "@mui/material";
import axios from "axios";

const Education = () => {
  const [data,setData] = useState({status:false})
  const url = "https://my-portfolio-1-o1ol.onrender.com/";
  useEffect(()=>{
    axios.get(url+"personal").then(response=>{
     const {data} = response;   
     console.log(data) 
      setData(data)
  }).catch(err=>console.log(err))
  },[])

  const downloadCv = () => {
    const a = document.createElement("a");
    a.href = (data.status)?data.personal.cv:"#";
    a.download="Shiva_Aleti_Resume.pdf";
    a.click()
  }

    return <section className="education">
    <img src={thinkImg} alt="" />
    <div className="about">
      <h2>Who I Am ?</h2>
      <div>
        <span>
          I am a <span className="mark">third-year student</span> pursuing a
          Bachelor of Science in Information Technology (
          <span className="mark">BScIT</span>).
        </span>
        <span>
          My academic journey has been marked by consistent performance, achieving
          a CGPA of <span className="mark">8.5</span> in Semester I,{" "}
          <span className="mark">8.7</span> in Semester II,{" "}
          <span className="mark" /> in Semester III, and{" "}
          <span className="mark">9.0</span> in Semester IV.
        </span>
        <span>
          My technical skills include <span className="mark">Node.js</span>,{" "}
          <span className="mark">React.js</span>,{" "}
          <span className="mark">MongoDB</span>,{" "}
          <span className="mark">Express.js</span>,{" "}
          <span className="mark">HTML</span>, <span className="mark">CSS</span>,{" "}
          <span className="mark">JavaScript</span>, and{" "}
          <span className="mark">PostgreSQL</span>.
        </span>
        <span>
          I am passionate about leveraging these skills to solve real-world
          problems and build innovative web solutions.
        </span>
      </div>
                <Button variant="contained" disableElevation className="button-link" onClick={downloadCv}>DOWNLOAD CV</Button>

    </div>
  </section>
  
}

export default Education;