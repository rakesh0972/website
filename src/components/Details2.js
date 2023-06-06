import React from 'react'
import { GoLink } from 'react-icons/go';

const Details2 = ({ darkMode, title, description, image, li, link, img }) => {

    return (
        <div className=' dark:text-whiteFont text-blackFont px-6 md:flex md:flex-row-reverse gap-4 mt-28'  >

            <div className='h-[50vh] border p-2 dark:border-white/20 md:w-[40%] lg:w-[40%] relative group  '>
                <a href={link}><img src={img} className='w-full h-full object-cover bg-cover ' />
                    <div className="absolute top-0 inset-0 bg-blackbg opacity-0 group-hover:opacity-80 transition-opacity transition-all ease-in 3ms" />
                    <GoLink className="right-0 rotate-45 text-5xl text-[#fff]/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition-all ease-in 3ms" />
                </a>
            </div>
            <div className='details  md:w-[60%] lg:w-[60%]'>

                <h1 className='text-4xl py-4'>{title}</h1>
                <div className=" w-full border-t border-solid dark:text-white/20  text-black/30" />

                <div className='desc pt-4'>

                    <p className='text-lg'>Description </p>
                    <p className=' text-sm'>{description}</p>
                </div>

                <div className='tech pt-4'>
                    <p className='text-lg'>Tech used</p>
                    <p className='text-sm'>{li}</p>

                </div>


            </div>
        </div>
    )
}

export default Details2