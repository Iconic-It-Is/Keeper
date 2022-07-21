import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
	const particlesInit = async (main) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fullScreen: {
					enable: true,
					zIndex: -1,
				},
				fpsLimit: 120,
				particles: {
					number: {
						value: 80,
						density: {
							enable: true,
							value_area: 800,
						},
					},
					color: {
						value: " #A020F0",
						animation: {
							enable: true,
							speed: 20,
							sync: true,
						},
					},
					opacity: {
						value: 0.5,
					},
					size: {
						value: {
							min: 0.1,
							max: 3,
						},
					},
					links: {
						enable: true,
						distance: 100,
						color: "#ED1873",
						opacity: 0.4,
						width: 1,
					},
					move: {
						enable: true,
						speed: 6,
						direction: "none",
						outModes: {
							default: "out",
						},
					},
				},
				interactivity: {
					events: {
						onHover: {
							enable: true,
							mode: "repulse",
						},
						onClick: {
							enable: true,
							mode: "push",
						},
						resize: true,
					},
					modes: {
						repulse: {
							distance: 200,
						},
						push: {
							quantity: 4,
						},
					},
				},
				detectRetina: true,
				background: {
					// color: "#000000",
					image: `linear-gradient(to right,#ff7082,#f48eca,#d2b3f7,#b8d2ff,#c0e9ff)`,
				},
			}}
		/>
	);
}

export default Particle;
