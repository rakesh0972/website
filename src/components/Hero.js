import React from 'react'

import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {



    return (
        <>

            <div className=" mt-64 tracking-tight mb-56 text-logo font-normal text-3xl  md:text-[5rem] leading-none  ">

                <span >
                    ⥇ A front-end{' '}
                    <span className="text-high">

                        <Typewriter
                            words={['designer', 'developer']}
                            loop={50}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </span>

                </span>
                <h1  >
                    ,      creating minimal and delightful web experiences *◞
                </h1>





                <div className="text-3xl flex justify-center gap-4 mt-9 text-line md:flex-col md:float-right md:text-3xl">
                    <a href="https://www.instagram.com/nirvanashrestha__"> <AiFillInstagram className=" cursor-pointer hover:text-high dark:text-blackbg dark:hover:text-high transition-all ease-in 2s" /></a>

                    <a href="https://github.com/rakesh0972"><AiFillGithub className=" cursor-pointer hover:text-high dark:text-blackbg  dark:hover:text-high transition-all ease-in 2s" /></a>

                    <a><AiFillLinkedin className=" cursor-pointer hover:text-high dark:text-blackbg  dark:hover:text-high transition-all ease-in 2s" /></a>

                </div>


            </div>
        </>


    )

}

export default Hero