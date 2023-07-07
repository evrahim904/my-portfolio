import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const AboutMe = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div id="about-me"  data-aos= "fade-up">
            <h1 className="text-center text-3xl text-purple-400">About Me</h1>
            <div className="divider w-64 mt-5 mx-auto"></div>

            <div className="w-2/3 mx-auto font-semibold">
                <p className="">Hi There! <br /> My name is Md.Evrahim kha and i am a web developer,as a front-end developer I have had the privilege of HTML, CSS, Tailwind CSS,deysiui, Javascript, and various front-end frameworks such as React js etc.
                    <br />
                    I am interested in learning and collaborating with talented team to create user-friendly experience  and contributing to their continued success.
                </p>
            </div>
            <div className="w-2/3 mx-auto mt-6 font-semibold">
                <h3 className="text-2xl text-purple-400">Experience: 2 years+</h3>
                <h3 className="text-2xl text-purple-400">Projects: 100+ Projects
                    Completed</h3>
                    <button className="btn btn-primary mt-3">Contact me</button>
            </div>
        </div>
    );
};

export default AboutMe;