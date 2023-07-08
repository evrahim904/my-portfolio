import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6d6sn9q',
         'template_im1mq5s',
          form.current, '1g3REhMBP3HPBrPhB')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        
        <div id='contact'>
            <h3 className='text-4xl text-center text-purple-400'>Contact With Me</h3>
          <div className='flex justify-between max-w-screen-md mx-auto'>
          <div>
           <h1><span className='text-purple-400'>Name:</span> Md.Evrahim Kha</h1>
            <h1><span className='text-purple-400'>Email:</span> evrahimkha0@gmail.com</h1>
            <h1><span className='text-purple-400'>Contact:</span> +8801904678904</h1>
            <h1><span className='text-purple-400'>Address:</span> Dhaka,Bangladesh</h1>
           </div>
           <div>
           <p><span className='text-purple-400'>Github:</span><a href="https://github.com/evrahim904">https://github.com/evrahim904</a></p>
           <p><span className='text-purple-400'>Linkedin:</span> <a href="https://www.linkedin.com/feed/">https://www.linkedin.com/feed/</a></p>
            <p><span className='text-purple-400'>Facebook:</span><a href="https://www.facebook.com/Evra.904">https://www.facebook.com/Evra.904</a></p>
            <p><span className='text-purple-400'>Whatsapp:</span><a href="">+8801904678904</a></p>
            
           </div>
          </div>
            <div className='max-w-screen-md mx-auto'>
                <h3 className='text-4xl text-center text-purple-400'>Email Me</h3>
                <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name"  placeholder="Enter Name" className="input input-bordered w-full bg-gray-500 mb-3 " />
                <label>Email</label>
                <input type="email" name="user_name" placeholder="Enter Email" className="input input-bordered w-full  bg-gray-500 mb-3" />
                <label>Message</label>
                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-full bg-gray-500 mb-3" ></textarea>
                <button className="btn btn-wide bg-purple-400 text-white md:ms-60"> <input  type="submit" value="Send Massage" /></button>
                </form>
            </div>
            {/* <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form> */}
        </div>
    );
};

export default Contact;