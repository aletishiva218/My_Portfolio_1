import { Route,Routes,BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/SkIlls.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";
import "./assets/css/style.css";
import "./assets/css/mediaQ.css";


const App = () => {
    setInterval(()=>{
        if(document.title==="Shiva Aleti") document.title="Node.js Developer"
        else document.title="Shiva Aleti"
    },1000)

    return <Fragment >
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    </Fragment>
}

export default App;