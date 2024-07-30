import { Fragment } from "react";
import Header from "./subcomponents/header.jsx";
import Introduction from "./Home/introduction.jsx";
import Projects from "./Home/projects.jsx";
import Education from "./Home/education.jsx";
import Skills from "./Home/skills.jsx";
import Certificates from "./Home/certificates.jsx";
import Contact from "./subcomponents/contact.jsx";
import Footer from "./subcomponents/footer.jsx";


const Home = () => {
    return <Fragment>
        <Header />
        <main>
            <Introduction />
            <Projects />
            <Education />
            <Skills />
            <Certificates />
            <Contact />
        </main>
        <Footer />
    </Fragment>
}

export default Home;