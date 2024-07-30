import { Fragment,useEffect,useState } from "react";
import { Skeleton } from "@mui/material";
import axios from "axios";

import Header from "./subcomponents/header.jsx";
import Certificate from "./subcomponents/certificate.jsx";
import Footer from "./subcomponents/footer.jsx";
import codeGif from "../assets/images/code.gif";

const ChangeType = ({got,certificates}) => {
  if(got)
    {
    return <>{certificates.map((certificate,index)=>
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
  const url = "https://my-portfolio-1-o1ol.onrender.com/";
  useEffect(()=>{
    axios.get(url+"certificates").then(response=>{
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
            <h2>MY CERTIFICATES</h2>
          </div>
          <div className="box-containers">
          <ChangeType got={data.status} certificates={data.certificates} />
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Certificates;
