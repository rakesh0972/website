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



function Portfolio() {
    const track = document.getElementById("image-track");

    const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

    const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
    }

    const handleOnMove = e => {
        if (track.dataset.mouseDownAt === "0") return;

        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100,
            nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
            nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.percentage = nextPercentage;

        track.animate({
            transform: `translate(${nextPercentage}%, -50%)`
        }, { duration: 1200, fill: "forwards" });

        for (const image of track.getElementsByClassName("image")) {
            image.animate({
                objectPosition: `${100 + nextPercentage}% center`
            }, { duration: 1200, fill: "forwards" });
        }
    }

    /* -- Had to add extra lines for touch events -- */

    window.onmousedown = e => handleOnDown(e);

    window.ontouchstart = e => handleOnDown(e.touches[0]);

    window.onmouseup = e => handleOnUp(e);

    window.ontouchend = e => handleOnUp(e.touches[0]);

    window.onmousemove = e => handleOnMove(e);

    window.ontouchmove = e => handleOnMove(e.touches[0]);


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
                            value: darkMode ? '#FDFDFD' : "#232323"
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



                <div id="a" className=' w-[90%] md:w-[90%] mx-auto text-white max-h-full h-full  dark:text-blackbg' >


                    <div>

                        <nav>
                            <div className="flex justify-between py-6  mx-auto ">
                                <h1 className=" text-lg text-high" >Rakesh</h1>

                                <input type="checkbox" id="toggle" class="toggle--checkbox" onClick={trigger} />
                                <label for="toggle" class="toggle--label">
                                    <span class="toggle--label-background"></span>
                                </label>

                            </div>
                        </nav>
                    </div>



                    <div className='flex flex-col '>

                        <div>
                            <Hero />
                        </div>
                        <Line />
                        <Skills />
                        <Line />
                        <div>
                            {/* <Pics /> */}
                        </div>



                        {/* <Line /> */}
                        <div >
                            <About />
                        </div>
                        <Line />

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