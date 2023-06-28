import AboutMe from "../AboutMe/AboutMe";
import Banner from "./Banner";

const Home = () => {
    
    return (
       <div>
        <Banner></Banner>
        <div className="divider w-5/6 mt-5 mx-auto"></div> 
        <AboutMe></AboutMe>
        <div className="divider w-5/6 mt-5 mx-auto"></div> 
       </div>
    );
};

export default Home;