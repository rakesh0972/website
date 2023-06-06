import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull, tsparticles } from 'tsparticles';
import { useCallback, useRef } from 'react';
import Details from './Details';
import Details2 from './Details2';
import Line from './Line';

const UI = ({ darkMode }) => {
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
					title="Pet Walker"
					description="designed a UI for a pet waking app called the Pet walker in Figma with
					Prototyping"
					link="https://www.figma.com/file/LU43PKfE77Ip4zYdJ0eiZF/Untitled?type=design&node-id=0-1&t=K6am7R5UfirfIl0F-0"
					li={['Figma']}
					img="../dog.jpg"
				/>
				<Line darkMode={darkMode} />
				<Details2
					darkMode={darkMode}
					title="Website designs"
					description="These are some of the landing pages design  i have made"
					li={['Figma']}
					img="../ui.jpg"
					link="https://www.figma.com/file/O9SgFNKKuUV5NHw0koNnuC/Websites?type=design&node-id=0-1&t=UpUp64JUGPEFlOdr-0"
				/>
				<Line />
			</div>
		</main>
	);
};

export default UI;
