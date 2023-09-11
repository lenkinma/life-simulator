import React, {useEffect, useRef} from 'react';
import {useSelector} from "react-redux";

function Canvas({count, particleSize, particleSpeed, forceOfGravity, canvasCleaning, borders}) {
	const canvasRef = useRef(null);
	const particles = useSelector(state => state.particleReducer.particles);

	const draw = (context, x, y, color, s) => {
		context.fillStyle = color;
		context.fillRect(x, y, s, s);
	}

	const particle = (x, y, color) => {
		return {"x":x, "y":y, "vx":0, "vy":0, "color":color}
	}

	const random = () => {
		return Math.random()*400+50;
	}

	const create = (particlesArr, n, color) => {
		let group = [];
		for (let i = 0; i < n; i++) {
			group.push(particle(random(), random(), color));
			particlesArr.push(group[i]);
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

			if (borders) {
				if (a.x < 0) {a.x = 0}
				if (a.x > 500) {a.x = 497;}
				if (a.y < 0) {a.y = 0}
				if (a.y > 500) {a.y = 497;}
			}

			a.vx = (a.vx + fx)*(particleSpeed/10);
			a.vy = (a.vy + fy)*(particleSpeed/10);
			a.x += a.vx;
			a.y += a.vy;

		}
	}
	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext('2d');
		let particlesArr = [];
		context.clearRect(0, 0, 500, 500);

		let animatedID;

		let parts = [];
		particles.forEach(elem => {
			if (elem.on) parts.push(create(particlesArr, elem.amount, elem.color))
			else parts.push(create(particlesArr, 0, elem.color))
		})

		const renderer = () => {

			particles.forEach((elem1, index1) => {
				particles.forEach((elem2, index2) => {
					rule(parts[index1], parts[index2], (elem1.interaction.find(e => e.id === index2).amount)/1000)
				})
			})

			if (canvasCleaning) context.clearRect(0, 0, 500, 500);
			for (let i = 0; i<particlesArr.length; i++){
				draw(context, particlesArr[i].x, particlesArr[i].y, particlesArr[i].color, particleSize);
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
