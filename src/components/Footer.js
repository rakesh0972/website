import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

const Footer = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });


    const form = useRef();
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);

        emailjs.sendForm('service_t3n7nav', 'template_slg3zwt', form.current, 'OelSj_tzgHpyn5Pj8')
            .then((event) => {
                console.log(event.status);
            }, (error) => {
                console.log(event.status);
            });
        // call API or perform other actions with formData
    };

    return (
        <div >
            <div className="flex justify-between">
                <h1 className="text-lg  ">CONTACT</h1>
                <h1 className="text-lg ">003</h1>
            </div>

            <div className="mt-28 md:flex md:justify-between md:items-center">

                <div className='md:w-[50%] flex'>
                    <h1 className="text-6xl justify-center md:px-20">Let’s talk about our <span className="text-high">collaboration</span></h1>
                </div>

                <div className=" md:mt-4 md:w-[50%]">
                    <div className=" mt-12  rounded-2xl bg-opacity-5 p-4  md:flex md:items-center md:justify-center border border-white/10 dark:border-white" >

                        <form className='flex flex-col gap-5 py-5 w-full' onSubmit={handleSubmit} ref={form} >

                            <input type='text' required minLength={3} placeholder='Your Name' value={formData.name} name="name" onChange={(e) => handleInputChange(e)} className='  rounded-sm  bg-opacity-5 bg-black py-2 px-3 border border-white/10   focus:ring-1 focus:outline-none  focus:ring-high'></input>


                            <input type='Email' required placeholder='Your email' name='email' onChange={handleInputChange} value={formData.email} className='  rounded-sm  bg-opacity-5 bg-black py-2 px-3 border border-white/10   focus:ring-1 focus:outline-none  focus:ring-high'></input>


                            <textarea type='textarea' placeholder='Your message' name='message' value={formData.message} onChange={handleInputChange} className='rounded-sm  bg-opacity-5 bg-black py-2 px-3 border border-white/10   focus:ring-1 focus:outline-none  focus:ring-high'></textarea>

                            <button type='submit' value="Send" className='border-white/10  py-2 px-3 border w-36 text-opacity-70 mx-auto text-logo hover:bg-high hover:border-black/50 transition-all ease-in 1s'  > Send message </button>



                        </form>
                    </div>

                </div>

            </div>


        </div>
    )
}

{/* <div >
                        <a className="text-xl cursor-pointer hover:text-high" href="mailto:rakesh.shrs097@gmail.com" >rakesh.shrs097@gmail.com</a>

                    </div>

                    <div className="mt-2">
                        <a href='rakeshcv.pdf' download='rakeshcv.pdf' className="text-xl cursor-pointer hover:text-high ">RESUME</a>
                    </div> */}


export default Footer