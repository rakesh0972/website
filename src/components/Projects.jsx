import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull, tsparticles } from 'tsparticles';
import { useCallback, useRef } from 'react';
import Hero from './Hero';
import { useState, useEffect } from 'react';
import Details from './Details';
import Details2 from './Details2';
import Line from './Line';
import '../index.css';

const Projects = ({ darkMode }) => {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);

		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);
	return (
		<main className={darkMode ? 'dark' : ''}>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					background: {
						color: {
							value: darkMode ? '#040405' : '#FDFDFD',
						},
					},
					fpsLimit: 120,
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: 'push',
							},
							onHover: {
								enable: false,
								mode: 'repulse',
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
							value: '#00C667',
						},
						links: {
							color: '#eb5757',
							distance: 200,
							enable: true,
							opacity: 1,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							directions: 'none',
							enable: true,
							outModes: {
								default: 'destroy',
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
							type: 'octagon',
						},
						size: {
							value: { min: 1, max: 5 },
						},
					},
					detectRetina: true,
				}}
			/>

			{/* <Hero darkMode={darkMode} /> */}
			<div className=" absolute px-3 w-full">
				<Details
					darkMode={darkMode}
					title="Arniko school website"
					description="As a front-end development intern, I built a functional and visually
							appealing website for Arniko School. I created a responsive design
							that worked seamlessly on different devices. Through code reviews
							and feedback, I refined my skills and adhered to industry standards
							while working on this project."
					li={[' React, Tailwind,  Mantine UI']}
					link="http://arniko.edu.np/"
					img="../arniko1.png"
				/>
				<Line darkMode={darkMode} />
				<Details2
					darkMode={darkMode}
					title="Over & out"
					description="Over & out is a blog app where users can login in with their google
							account and they can upload blogs and view other peoples blogs as
							well."
					li={['React, Vite, Tailwind, Firebase']}
					img="../over.png"
					link="https://over-n-out.vercel.app/"
				/>
				<Line />
				<Details
					darkMode={darkMode}
					title="Netflix clone"
					description="I made a Netflix clone where we can view the trending movies and get
							details about the movies as well"
					li={['React, vite.js, Tailwind, Mantine , TBDM api']}
					img="../netflix.png"
					link="https://netflix-clone-99.vercel.app/"
				/>
				<Line />
			</div>
		</main>
	);
};

export default Projects;
