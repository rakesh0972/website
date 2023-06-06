import React from 'react'

import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Typewriter } from 'react-simple-typewriter'


const Hero = ({ darkMode }) => {



    return (
        <>

            <div className=" mt-72 tracking-tight mb-56  font-normal text-3xl  md:text-[5rem] leading-none  text-blackFont dark:text-whiteFont ">

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





                <div className="text-3xl flex justify-center gap-4 mt-9  text-blackFont dark:text-whiteFont md:flex-col md:float-right md:text-3xl">
                    <a href="https://www.instagram.com/nirvanashrestha__"> <AiFillInstagram className=" cursor-pointer hover:text-high dark:hover:text-high transition-all ease-in-out duration-100 hover:scale-125" /></a>

                    <a href="https://github.com/rakesh0972"><AiFillGithub className=" cursor-pointer hover:text-high   dark:hover:text-high transition-all ease-in-out  duration-100 hover:scale-125" /></a>

                    <a href='https://www.linkedin.com/in/rakesh-shrestha-926ab3278/'><AiFillLinkedin className=" cursor-pointer hover:text-high  dark:hover:text-high transition-all ease-in-out duration-100 hover:scale-125" /></a>

                </div>


            </div>
        </>


    )

}

export default Hero