import React from 'react';
import Typed from 'typed.js';
import ibrahim from '../../assets/DSC_0223-01.jpeg'
// import FaBars from 'react-icons/fa';

const Banner = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['MERN Stack Developer', 'Junior Web Developer'],
            typeSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className='mt-10 md:ms-8'>
          <h3 className='text-7xl md:text-5xl'>Md. Evrahim Kha</h3>
          <br />
          <span className='text-5xl align-middle text-purple-400' ref={el} />
          <p className='mt-2 w-full md:w-2/3'>Hello, I'm Md. Evrahim Kha, a passionate junior web developer with 7 months of experience. During my time in the field, I have been actively involved in various web development projects.</p>
       
        </div>
        <div className="avatar mt-10  md:mt-0 md:me-11">
          <div className="w-52 h-52 md:w-96 md:h-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={ibrahim} alt="Profile" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
      
    );
};

export default Banner;