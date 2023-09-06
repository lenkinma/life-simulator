import React, {useEffect, useRef} from 'react';

function Canvas({count, particleSize, particleSpeed, forceOfGravity, canvasCleaning}) {
	const canvasRef = useRef(null);
	// const [particles, setParticles] = useState([]);


	const draw = (context, x, y, color, s) => {
		context.fillStyle = color;
		context.fillRect(x, y, s, s);
		// console.log('1')
	}

	const particle = (x, y, color) => {
		return {"x":x, "y":y, "vx":0, "vy":0, "color":color}
	}

	const random = () => {
		return Math.random()*400+50;
	}

	const create = (particles, n, color) => {
		let group = [];
		for (let i = 0; i < n; i++) {
			group.push(particle(random(), random(), color));
			// setParticles(prevState => [...prevState, group[i]]);
			particles.push(group[i]);
		}
		return group;
	}

	const rule = (particles1, particles2, g) => {
		for (let i = 0; i < particles1.length; i++) {
			let fx = 0;
			let fy = 0;
			let a = particles1[i];
			for (let j = 0; j < particles2.length; j++) {
				let b = particles2[j];
				let dx = a.x - b.x;
				let dy = a.y - b.y
				let d = Math.sqrt(dx*dx + dy*dy);
				if (d > 0 && d < forceOfGravity*20) {
					let F = g * 1 / d;
					fx += (F * dx);
					fy += (F * dy)
				}
			}
			if (a.x <= 0 || a.x >= 500) {a.vx *= -1;}
			if (a.y <= 0 || a.y >= 500) {a.vy *= -1;}
			// if (a.x < 0) {a.x = 0}
			// if (a.x > 500) {a.x = 497;}
			// if (a.y < 0) {a.y = 0}
			// if (a.y > 500) {a.y = 497;}
			a.vx = (a.vx + fx)*(particleSpeed/10);
			a.vy = (a.vy + fy)*(particleSpeed/10);
			a.x += a.vx;
			a.y += a.vy;

		}
	}
	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		let particles = [];
		context.clearRect(0, 0, 500, 500);
		console.log('canvas renderer');

		let count = 0;
		let animatedID;

		// const yellow = create(10, "yellow");
		const red = create(particles, 1000, "red");
		const yellow = create(particles, 1000, "yellow");
		// const green = create(10, "green");

		const renderer = () => {
			count+=1;
			rule(red, red, 0.49);
			rule(red, yellow, -0.05);
			rule(yellow, red, 0.24);
			// rule(green, yellow, -1.5);
			// rule(green, green, -1.5);
			// rule(red, green, 0.3);
			// rule(green, red, -0.1);
			rule(yellow, yellow, 0.01)

			if (canvasCleaning) context.clearRect(0, 0, 500, 500);
			for (let i = 0; i<particles.length; i++){
				draw(context, particles[i].x, particles[i].y, particles[i].color, particleSize);
			}
			animatedID = window.requestAnimationFrame(renderer);
		}
		renderer();

		return () => window.cancelAnimationFrame(animatedID);
	}, [count]);

	return (
		<div>
			<canvas ref={canvasRef} width={500} height={500}/>
		</div>
	);
}

export default Canvas;
