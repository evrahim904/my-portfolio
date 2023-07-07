import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

import reactIcon from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import bootstrap from '../../assets/bootstrap.png'
import js from '../../assets/js.png'
import node from '../../assets/node.png'
import mongo from '../../assets/mongodb.png'


const Skills = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div id='skills'>
            <h1 className='text-center text-3xl text-purple-400 mb-4'>My Skills</h1>
            <div className="divider w-64 mt-5 mx-auto "></div>
            <div className='grid md:grid-cols-3 gap-6 place-items-center'>
                <img className='w-2/5'data-aos = 'fade-up-left'  src={reactIcon} alt="" />
                <img className='w-2/5'data-aos = 'fade' src={html} alt="" />
                <img className='w-2/5'data-aos = 'fade-up-right' src={css} alt="" />
                <img className='w-2/5'data-aos = 'fade-up-left' src={bootstrap} alt="" />
                <img className='w-2/5'data-aos = 'fade'  src={js} alt="" />
                <img className='w-2/5'data-aos = 'fade-up-right' src={node} alt="" />
                <img className='w-2/5'data-aos = 'fade-up-left' src={mongo} alt="" />
            </div>

        </div>
    );
};

export default Skills;