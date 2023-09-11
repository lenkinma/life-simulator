import React, {} from 'react';
import "react-color-palette/css";
import Particle from "./particle";
import {useDispatch, useSelector} from "react-redux";
import { Scrollbars } from 'react-custom-scrollbars';
import {createParticle} from "../store/particleSlice";

function ParticleSettings() {
	const particles = useSelector(state => state.particleReducer.particles);
	const dispatch = useDispatch();

	return (
		<div className='particle-settings__wrapper'>
			<Scrollbars style={{ height: '100%' }}>
				<div className='particle-settings__wrapper2'>
					{particles.map(elem => <Particle particle={elem}/>)}
					<button className={'particle__settings-create-btn'} onClick={() => dispatch(createParticle())}>Добавить</button>
				</div>
			</Scrollbars>
		</div>
	);
}

export default ParticleSettings;
