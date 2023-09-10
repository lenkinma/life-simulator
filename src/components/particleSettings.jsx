import React, {useEffect, useState} from 'react';
import "react-color-palette/css";
import Particle from "./particle";

function ParticleSettings({particlesRules, setParticlesRules}) {

	return (
		<div className='particle-settings__wrapper'>
			{particlesRules.sort(function(a, b) {
				return a.id - b.id;
			}).map(e => <Particle particlesRules={particlesRules} setParticlesRules={setParticlesRules} particle={e}/>)}

		</div>
	);
}

export default ParticleSettings;
