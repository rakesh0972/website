import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Skills = () => {
    return (
        <div>
            <div className="flex mb-12 justify-between text-blackFont dark:text-whiteFont ">
                <h1 className="text-lg ">SKILLS</h1>
                <h1 className="text-lg ">001</h1>
            </div>

            <div className="  md:justify-between md:flex  mt-32 mb-28 ">

                <div className=" md:w-[50%] md:mr-6" >
                    <ul className=" md:py-2 md:w-full ">

                        <li >
                            <Link to="/gallery">
                                <button id="b1" onClick={() => {
                                    let image = document.getElementById('img');
                                    image.setAttribute('src', 'boat.gif');

                                }}

                                    onMouseOver=
                                    {() => {
                                        let image = document.getElementById('img');
                                        image.setAttribute('src', 'boat.gif');

                                    }}

                                    className=" border-b  border-opacity-20 flex min-h-14 h-full  w-full cursor-pointer items-center  border-b  font-normal pt-10 pb-4  transition-all duration-200 ease-in-out hover:px-3 dark:text-whiteFont/60 hover:text-high hover:dark:text-high hover:opacity-[70%] text-blackFont/60">
                                    <h1>01</h1>
                                    <h2 className=" ml-4 text-[28px] md:text-[2rem]  ">Photo manipulations</h2>
                                    <FiArrowUpRight className=' text-3xl ml-auto' />

                                </button>
                            </Link>
                            {/* <line x1="7" y1="17" x2="17" y2="7"></line> */}
                            <Link to='/Projects'>
                                <button id="b2"
                                    onMouseOver=
                                    {() => {
                                        let image = document.getElementById('img');
                                        image.setAttribute('src', 'over.jpg');

                                    }}
                                    onClick={() => {
                                        let image = document.getElementById('img');
                                        image.setAttribute('src', 'over.jpg');

                                    }} className="flex min-h-14 h-full  w-full cursor-pointer items-center  border-b  font-normal pt-10 pb-4  dark:text-whiteFont/60 hover:text-high hover:dark:text-high hover:opacity-[70%] text-blackFont/60 transition-all ease-in-out duration-200 hover:px-3">
                                    <h1>02</h1>
                                    <h2 className="ml-4 text-[28px] md:text-[2rem] ">Web Development</h2>
                                    <FiArrowUpRight className=' text-3xl ml-auto' />

                                </button>
                            </Link>
                            {/* <line x1="7" y1="17" x2="17" y2="7"></line> */}
                            <Link to="/UI">
                                <button id="b3"
                                    onMouseOver=
                                    {() => {
                                        let image = document.getElementById('img');
                                        image.setAttribute('src', 'pp.png');

                                    }}
                                    onClick={() => {
                                        let image = document.getElementById('img');
                                        image.setAttribute('src', 'pp.png');

                                    }} className="flex min-h-14 h-full  w-full cursor-pointer items-center  border-b  font-normal pt-10 pb-4  dark:text-whiteFont/60 hover:text-high hover:dark:text-high hover:opacity-[70%] text-blackFont/60 transition-all ease-in-out duration-200 hover:px-3">
                                    <h1>03</h1>
                                    <h2 className="ml-4 text-[28px] md:text-[2rem] ">UI design</h2>
                                    <FiArrowUpRight className=' text-3xl ml-auto' />

                                </button>
                            </Link>

                        </li>

                    </ul>

                </div>
                <div>
                    <img id="img" className="hidden bg-cover h-[450px] w-[700px] overflow-hidden  rounded-2xl bg-opacity-5 p-4  md:flex md:items-center md:justify-center md:border md:border-black/50 dark:border-white/50 min-[2000px]:h-[600px] min-[2000px]:w-[900px]  border-black " src='boat.gif' />
                </div>
            </div>

        </div>
    )
}

export default Skills