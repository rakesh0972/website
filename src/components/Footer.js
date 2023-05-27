import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { IoDocumentTextOutline } from 'react-icons/io5'

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
            dark:text-black/80
            <div className="mt-28 md:flex md:justify-between md:items-center">

                <div className='md:w-[50%] justify-center md:px-12'>
                    <h1 className="text-6xl dark:text-black/80 ">Let’s talk about our  <span className="text-high">collaboration</span></h1>

                    {/* <div className="mt-6 border-white/10  py-2 px-3 border w-28 text-opacity-70  text-logo hover:bg-high hover:border-black/50 transition-all ease-in 1s"> */}
                    <a href='rakeshcv.pdf' download='rakeshcv.pdf' className=' flex gap-1 mt-6 cursor-pointer text-xl   text-white text-opacity-85 hover:text-opacity-50  transition-all ease-in 1s dark:text-blackbg dark:hover:text-blackbg/60'>
                        <div><IoDocumentTextOutline className='text-2xl mt-1' /></div>
                        {/* <a href='rakeshcv.pdf' download='rakeshcv.pdf' className='border-b hover:text-white transition-all ease-in 1s' >resume</a> */}
                        <span href='rakeshcv.pdf' download='rakeshcv.pdf' class=" border-b w-16 border-background border-opacity-20 pb-[3px] leading-none dark:border-black/80 dark:hover:text-blackbg/60 dark:hover:border-blackbg/60">resume</span>
                    </a>
                    {/* </div> */}

                </div>

                <div className=" md:mt-4 md:w-[50%]">
                    <div className=" mt-12  rounded-2xl bg-opacity-5 p-4  md:flex md:items-center md:justify-center border border-white/10 dark:border-black/30" >

                        <form className='flex flex-col gap-5 py-5 w-full' onSubmit={handleSubmit} ref={form} >

                            <input type='text' required minLength={3} placeholder='Your Name' value={formData.name} name="name" onChange={(e) => handleInputChange(e)} className='  rounded-sm  bg-opacity-5 bg-black py-2 px-3 border border-white/10   focus:ring-1 focus:outline-none  focus:ring-high dark:border-black/20'></input>


                            <input type='Email' required placeholder='Your email' name='email' onChange={handleInputChange} value={formData.email} className='  rounded-sm  bg-opacity-5 bg-black py-2 px-3 border border-white/10   focus:ring-1 focus:outline-none  focus:ring-high  dark:border-black/20'></input>


                            <textarea type='textarea' placeholder='Your message' name='message' value={formData.message} onChange={handleInputChange} className='rounded-sm  bg-opacity-5 bg-black py-2 px-3 border border-white/10   focus:ring-1 focus:outline-none  focus:ring-high  dark:border-black/20'></textarea>

                            {/* <button type='submit' value="Send" className='border-white/10  py-2 px-3 border w-36 text-opacity-70 mx-auto text-logo hover:bg-high hover:border-black/50 transition-all ease-in 1s'  > Send message </button> */}
                            <div className="box-3">
                                <div className="btn btn-three border-white/10  py-2 px-3 border w-36 text-opacity-70 mx-auto text-logo hover:bg-high hover:border-black/50 transition-all ease-in 1s flex justify-center items-center  dark:border-black/20 dark:bg-blackbg dark:hover:bg-high" type='submit' value="Send" >
                                    <span className='mx-auto align-middle'> Send message</span>
                                </div>
                            </div>


                        </form>
                    </div>

                </div>

            </div>


        </div>
    )
}




export default Footer