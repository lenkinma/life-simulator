import React, {useEffect, useState} from 'react';
import "react-color-palette/css";
import Particle from "./particle";
import {useSelector} from "react-redux";

function ParticleSettings() {
	const particles = useSelector(state => state.particleReducer.particles);

	return (
		<div className='particle-settings__wrapper'>
			{particles.map(elem => <Particle particle={elem}/>)}
		</div>
	);
}

export default ParticleSettings;
