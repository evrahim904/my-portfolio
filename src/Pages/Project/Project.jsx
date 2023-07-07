import ten from '../../assets/ten.png'
import elaven from '../../assets/elaven.png'
import twelve from '../../assets/twelve.png'
import './Project.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Project = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div id='project'>
            <h3 className='text-center text-3xl text-purple-400 mb-4'>projects</h3>
            <div className="divider w-64 mt-5 mx-auto "></div>
            <div className='grid md:grid-cols-3 place-items-center'>
                <div className="card w-96 bg-base-100 shadow-xl "  data-aos = 'fade-down-right'>
                    <div className='ten'>
                        <a href="">
                            <img src={ten} alt="ten" />
                        </a>
                    </div>
                    <div className="card-body" >
                        <h2 className="text-3xl text-center">Prime Academy</h2>
                        <p> Description: i have added a navbar and loaded my all chefs data
                            i have created login and register pages.
                            there is a redirect page when i click on the view recepies page i will be redirected on user details page.
                            i have also created spinner 404 page and enviroment variable firebase config.</p>
                        <p>Live:  <a className='text-purple-400' href="https://gorgeous-meringue-12264c.netlify.app/">https://gorgeous-meringue-12264c.netlify.app/</a></p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl"  data-aos = 'fade-down'>
                    <div className='ten'>
                        <a href="">
                            <img src={elaven} alt="ten" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h2 className="text-3xl text-center">Prime Academy</h2>
                        <p> Description: In this website i added some router for example All Toys, My Toys, Add A Toy, Blogs page on my website.
                            there is a  AOS Package and 404 pages .also
                            i used Environment variable to hide the Firebase config keys and Mongodb credentials.</p>
                        <p>Live:  <a className='text-purple-400' href="https://my-toys-client.web.app/">https://my-toys-client.web.app/</a></p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl"  data-aos = 'fade-down-left'>
                    <div className='ten'>
                        <a href="">
                            <img src={twelve} alt="ten" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h2 className="text-3xl text-center">Prime Academy</h2>
                        <p> Description: i have made a website where i have added some information for home page i have showed some featured class image and instructor image and also a extra attractive section, here i have added three different role of users admin, instructor and student for more information please visit my website.</p>
                        <p>Live:  <a className='text-purple-400' href="https://my-toys-client.web.app/">https://my-toys-client.web.app/</a></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Project;