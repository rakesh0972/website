import './index.css'
import Line from "./components/Line";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import { useState, useEffect } from "react";
import Hero from './components/Hero';
import Particles from "react-tsparticles";
import { loadFull, tsparticles } from "tsparticles";
import { useCallback, useRef } from "react";



function Portfolio({ darkMode }) {


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
    }, [])


    return (


        <main className={darkMode ? "dark" : ""}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: darkMode ? '#040405' : "#FCFDFC"
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
                            color: "#eb5757",
                            distance: 200,
                            enable: true,
                            opacity: 1,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "destroy",
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


                <div id="progressBar" style={{ transform: `scale(1,${scroll})`, opacity: `${scroll}` }} className='absoulte top-4' />



                <div id="a" className=' w-[90%] md:w-[90%] mx-auto text-white max-h-full h-full  ' >

                    <div className='flex flex-col '>

                        <div>
                            <Hero darkMode={darkMode} />
                        </div>
                        <Line darkMode={darkMode} />
                        <Skills />
                        <Line darkMode={darkMode} />
                        <div >
                            <About />
                        </div>
                        <Line darkMode={darkMode} />

                        <div>
                            <Footer />

                        </div>
                    </div>

                </div >

            </div>
        </main>

    )
}

export default Portfolio