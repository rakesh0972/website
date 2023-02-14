
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from 'react-icons/bs';
// import TypeWriterEffect from 'react-typewriter-effect';
import { Typewriter } from 'react-simple-typewriter'
import { useState } from "react";


function Portfolio() {



    const [darkMode, setDarkMode] = useState(false);
    function trigger() {
        setDarkMode(!darkMode)
        console.log(darkMode);
    }


    return (
        <div className={darkMode ? "dark" : ""}>
            <div className='bg-black text-white max-h-full dark:bg-whitebg dark:text-blackbg' >
                <nav>
                    <div className="flex justify-between p-6  mx-auto ">
                        <h1 className=" text-2xl font-normal" >Rakesh</h1>

                        <li className=" text-sm cursor-pointer " ><BsFillMoonStarsFill onClick={trigger} /></li>

                    </div>
                </nav>
                <hero>
                    <div className="mx-auto mt-64 mb-56 px-4  ">
                        {/* "mx-auto text-5xl max-w-[2000px] px-4 md:px-16 mb-20 mt-28 overflow-hidden md:py-28" */}


                        <h1 className="text-3xl  overflow-hidden md:text-7xl  md:px-28" >
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

                        </h1>
                        <h1 className=" text-3xl max-w-[2000px] overflow-hidden md:text-7xl md:px-28" >
                            ,      creating minimal and delightful web experiences *◞
                        </h1>





                        <div className="text-3xl flex justify-center gap-4 mt-6 text-line md:flex-col md:float-right md:text-2xl md:mr-3">
                            <a href="https://www.instagram.com/nirvanashrestha__"> <AiFillInstagram className=" cursor-pointer hover:text-high dark:text-blackbg dark:hover:text-high" /></a>
                            <a href="https://github.com/rakesh0972"><AiFillGithub className=" cursor-pointer hover:text-high dark:text-blackbg  dark:hover:text-high" /></a>
                            <AiFillLinkedin className=" cursor-pointer hover:text-high dark:text-blackbg  dark:hover:text-high" />

                        </div>


                    </div>


                    <div style={{ borderTop: "1px solid #1E1E1E ", marginLeft: 32, marginRight: 32 }}></div>

                    <div className="flex  px-10 mt-8 mb-12 justify-between">
                        <h1 className="text-lg  ">SKILLS</h1>
                        <h1 className="text-lg mr-4">001</h1>
                    </div>

                    <div className="  md:justify-between md:flex px-10 mt-32 mb-12 ">

                        <div className=" md:w-[45%] md: mr-4" >
                            <ul className="py-1 md:w-full ">
                                {/* min-h-14 group flex h-full  w-full cursor-pointer items-center border-b border-background/10 pt-10 pb-4 font-normal dark:font-light opacity-95 transition-all duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] dark:border-white/20 max-[300px]:pb-2  md:pb-4  false false false */}




                                <li >
                                    <button id="b1" onClick={() => {
                                        let image = document.getElementById('img');
                                        image.setAttribute('src', 'boat.gif');

                                    }}

                                        onMouseOver=
                                        {() => {
                                            let image = document.getElementById('img');
                                            image.setAttribute('src', 'boat.gif');

                                        }}

                                        className="flex min-h-14 h-full  w-full cursor-pointer items-center  border-b  font-normal pt-10 pb-4 opacity-50 hover:opacity-95">
                                        <h1>01</h1>
                                        <h2 className=" ml-4 text-[28px] md:text-[2rem] ">Photo manipulations</h2>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> */}


                                    </button>
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <button id="b2"
                                        onMouseOver=
                                        {() => {
                                            let image = document.getElementById('img');
                                            image.setAttribute('src', 'wd.jpg');

                                        }}
                                        onClick={() => {
                                            let image = document.getElementById('img');
                                            image.setAttribute('src', 'wd.jpg');

                                        }} className="flex min-h-14 h-full  w-full cursor-pointer items-center  border-b  font-normal pt-10 pb-4 opacity-50 hover:opacity-95">
                                        <h1>02</h1>
                                        <h2 className="ml-4 text-[28px] md:text-[2rem] ">Web Development</h2>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> */}


                                    </button>
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <button id="b3"
                                        onMouseOver=
                                        {() => {
                                            let image = document.getElementById('img');
                                            image.setAttribute('src', 'pp.png');

                                        }}
                                        onClick={() => {
                                            let image = document.getElementById('img');
                                            image.setAttribute('src', 'pp.png');

                                        }} className="flex min-h-14 h-full  w-full cursor-pointer items-center  border-b  font-normal pt-10 pb-4 opacity-50 hover:opacity-95">
                                        <h1>03</h1>
                                        <h2 className="ml-4 text-[28px] md:text-[2rem] ">UI design</h2>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg> */}


                                    </button>
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                </li>

                            </ul>

                        </div>
                        <div>
                            <img id="img" className="hidden bg-cover h-[450px] w-[700px] overflow-hidden  rounded-2xl bg-opacity-5 p-4  md:flex md:items-center md:justify-center md:border md:border-white/10 dark:border-white min-[2000px]:h-[600px] min-[2000px]:w-[900px]" src='boat.gif' />
                        </div>
                    </div>
                    <div className="m-8" style={{ borderTop: "1px solid #1E1E1E ", marginLeft: 32, marginRight: 32 }}></div>


                    <div className="px-10  ">
                        <div className="flex justify-between mb-16">
                            <h1 className="text-lg ml-4 ">ABOUT</h1>
                            <h1 className="text-lg mr-4">002</h1>
                        </div>
                        <p className="text-xl mt-28 mb-28 px-10">(intro) I am Rakesh, a front-end developer and designer. I specialize in creating visually appealing and functional web experiences with a focus on user experience and attention to detail.

                            When not coding, I like to watch movie and hang out with my friends. I am currently studying bachelors and make photo manipulations in my free time</p>



                    </div>

                    <div className="m-8" style={{ borderTop: "1px solid #1E1E1E ", marginLeft: 32, marginRight: 32 }}></div>

                    <div className="px-10 pb-4">
                        <div className="flex justify-between">
                            <h1 className="text-lg  ">CONTACT</h1>
                            <h1 className="text-lg mr-4">003</h1>
                        </div>

                        <div className="mt-28 md:flex md:justify-between">
                            <h1 className="text-5xl mb-8 md:w-[50%] ">Let’s talk about our <span className="text-high">collaboration</span></h1>
                            <div className=" md:mt-4">

                                <div >
                                    <a className="text-xl cursor-pointer hover:text-high" href="mailto:rakesh.shrs097@gmail.com" >rakesh.shrs097@gmail.com</a>

                                </div>

                                <div className="mt-2">
                                    <a href='rakeshcv.pdf' download='rakeshcv.pdf' className="text-xl cursor-pointer hover:text-high">RESUME</a>
                                </div>

                            </div>



                        </div>


                    </div>

                </hero >

            </div >
        </div >

    )
}

export default Portfolio