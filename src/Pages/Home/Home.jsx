import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Project from "../Project/Project";
import Banner from "./Banner";
import Skills from "./Skills";

const Home = () => {
    
    return (
       <div>
        <Banner></Banner>
        <div className="divider w-5/6 mt-5 mx-auto"></div> 
        <AboutMe></AboutMe>
        <div className="divider w-5/6 mt-5 mx-auto"></div> 
        <Skills></Skills>
        <div className="divider w-5/6 mt-5 mx-auto"></div> 
        <Project></Project>
        <div className="divider w-5/6 mt-5 mx-auto"></div> 
        <Contact></Contact>
       </div>
    );
};

export default Home;