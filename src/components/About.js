import React from 'react'

const About = () => {
    return (
        < >
            <div className=" flex justify-between">
                <h1 className="text-lg  font-medium">ABOUT</h1>
                <h1 className="text-lg ">002</h1>
            </div>

            <div className=' pt-36 md:px-16 '>
                <p className="text-logo dark:text-black/80 text-lg  md:text-2xl my-auto">(intro) I am Rakesh, a front-end developer and designer. I specialize in creating visually appealing and functional web experiences with a focus on user experience and attention to detail.
                    <br />
                    <br />

                    When not coding, I like to watch movie and hang out with my friends. I am currently studying bachelors and make photo manipulations in my free time</p>
                <br />
                <p className="text-logo  dark:text-black/80 text-xl  mb-16 pt-3 md:text-2xl my-auto">Check out my experience below →</p>

                <div>
                    <div>
                        <div className='flex justify-between dark:text-black/80 text-logo text-lg  md:text-lg my-auto pt-8 '>
                            <span>2022-2023</span>
                            <span>Graduated</span>
                            <span>NCCS</span>
                        </div>
                        <div className=" w-full my-2 border-t border-solid text-white/20 dark:text-black/20" ></div>
                    </div>
                    <div>
                        <div className='flex justify-between dark:text-black/80 text-logo text-lg  md:text-lg my-auto pt-8 '>
                            <span>2022-2023</span>
                            <span>Intern</span>
                            <span>Krafters</span>
                        </div>
                        <div className=" w-full my-2 border-t border-solid text-white/20 dark:text-black/20" ></div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About