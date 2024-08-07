import React,{useState,useEffect} from "react";
import { Skeleton } from "@mui/material";
import Certificate from "../subcomponents/certificate.jsx";
import codeGif from "../../assets/images/code.gif";
import axios from "axios";


const ChangeType = ({got,certificates}) => {
  if(got)
    {
     const newCertificates = []
     for(let i=0;i<3;i++)
     {
        if(certificates[i]) newCertificates.push(certificates[i])
          else break;
     }
    return <>{newCertificates.map((certificate,index)=>
      <Certificate title={certificate.title} descript={certificate.description} image={certificate.image}  key={index} link={certificate.url} />
    )}</>;
  }
      else 
    return <><Skeleton variant="rounded" height="18rem" className="box-container"  />
    <Skeleton variant="rounded" height="18rem" className="box-container"  />
    <Skeleton variant="rounded" height="18rem" className="box-container"  /></>;
}

const Certificates = () => {
  const [data,setData] = useState({status:false})
  const url = "https://shivaaleti-server.vercel.app/";
  useEffect(()=>{
    axios.get(url+"certificates").then(response=>{
     const {data} = response;    
      setData(data)
  }).catch(err=>console.log(err))
  },[])
    return <section className="certificates">
    <div className="head-div">
      <h2>CERTIFICATES</h2>
      <a href="/certificates" className="button-link">
        MORE
      </a>
    </div>
    <div className="box-containers">
    <ChangeType got={data.status} certificates={data.certificates} />
    </div>
  </section>
  
}

export default Certificates;