import './index.css'
import Line from "./components/Line";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import { useState, useEffect } from "react";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import Hero from './components/Hero';
import Abouttest from './components/Abouttest';
import Particles from "react-tsparticles";
import { loadFull, tsparticles } from "tsparticles";
import { useCallback } from "react";


function Portfolio() {

    const observer = new IntersectionObserver((e) => {
        e.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add('show');
            }
            else {
                e.target.classList.remove('show');
            }
        })
    })
    const hidden = document.querySelectorAll('.hid')
    hidden.forEach((el) => observer.observe(el));


    const [darkMode, setDarkMode] = useState(false);
    function trigger() {
        setDarkMode(!darkMode)
        console.log(darkMode);
    }

    const [scroll, setScroll] = useState(0);

    useEffect(() => {

        let progressBarHandler = () => {

            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScroll(scroll);
        }

        window.addEventListener("scroll", progressBarHandler);

        return () => window.removeEventListener("scroll", progressBarHandler);

    });

    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (

        <main className={darkMode ? "dark" : ""}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#000000",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 0.2,
                            },
                            repulse: {
                                distance: 80,
                                duration: 0.1,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#00C667",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 200,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 0.9,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 30,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "octagon",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className=' relative '  >

                <div id="progressBar" style={{ transform: `scale(1,${scroll})` }} className='absoulte top-4' />



                <div id="a" className=' w-[90%] md:w-[95%] mx-auto text-white max-h-full h-full dark:bg-whitebg dark:text-blackbg' >


                    <div className='top-a'>

                        <nav>
                            <div className="flex justify-between py-6  mx-auto ">
                                <h1 className=" text-lg text-logo" >Rakesh</h1>

                                {/* <li className=" text-sm cursor-pointer " ><BsFillMoonStarsFill onClick={trigger} /></li> */}

                                {/* <label for="theme" class="theme">
                                    <span class="theme__toggle-wrap">
                                        <input id="theme" class="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" />
                                        <span class="theme__fill"></span>
                                        <span class="theme__icon">
                                            <span class="theme__icon-part"></span>
                                            <span class="theme__icon-part"></span>
                                            <span class="theme__icon-part"></span>
                                            <span class="theme__icon-part"></span>
                                            <span class="theme__icon-part"></span>
                                            <span class="theme__icon-part"></span>
                                            <span class="theme__icon-part"></span>
                                            <span class="theme__icon-part"></span>
                                            <span class="theme__icon-part"></span>
                                        </span>
                                    </span>
                                </label> */}

                            </div>
                        </nav>
                    </div>



                    <div className='flex flex-col '>

                        <div className='h-[100vh] section'>
                            <Hero />
                        </div>
                        <Line />
                        <div className='h-[100vh] section '>

                            <Skills />
                        </div>
                        <Line />
                        <div className='h-[100vh] section '>
                            <About />
                        </div>
                        <Line />

                        <div className='h-[100vh] section '>
                            <Footer />

                        </div>
                    </div>







                </div >
            </div>
        </main>
    )
}

export default Portfolio