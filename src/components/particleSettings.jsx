import React, {} from 'react';
import "react-color-palette/css";
import Particle from "./particle";
import {useSelector} from "react-redux";
import { Scrollbars } from 'react-custom-scrollbars';

function ParticleSettings() {
	const particles = useSelector(state => state.particleReducer.particles);

	return (
		<div className='particle-settings__wrapper'>
			<Scrollbars style={{ height: '100%' }}>
				<div className='particle-settings__wrapper2'>
					{particles.map(elem => <Particle particle={elem}/>)}
				</div>
			</Scrollbars>
		</div>
	);
}

export default ParticleSettings;
