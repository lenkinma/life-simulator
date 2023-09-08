import React from 'react';
import Slider from "./slider";
import Accordion from "./accordion";

function ParticleSettings({particlesRules, setParticlesRules}) {
	return (
		<div className='particle-settings__wrapper'>
			<div className='particle__wrapper'>
				<div>
					<input type="checkbox" className="checkbox" id="particles1" name="particles1"
					       value={particlesRules[0].on}
					       onChange={() => setParticlesRules(prev => [{...prev[0], on: !prev[0].on}, prev[1], prev[2]])}
					       checked={particlesRules[0].on}
					/>
					<label htmlFor="particles1">Частицы 1</label>
				</div>
				<div className='particle__main-settings-wrapper'>
					<div className='particle__color-random-block'>
						<div className='particle__color-icon' style={{backgroundColor: particlesRules[0].color}}></div>
						<button className='particle__settings-btn'>Рандом</button>
					</div>

					<Accordion>
						<div>
							<span>Количество частиц:  {particlesRules[0].amount}</span>
							<Slider min={0} max={1000} setCurrentValue={(value) => {setParticlesRules(prev => [{...prev[0], amount: value}, prev[1], prev[2]])}}
							        currentValue={particlesRules[0].amount}/>
						</div>
						<div>
							<span>Притяжение к <div className='particle__color-icon-small' style={{backgroundColor: particlesRules[0].color}}></div> {particlesRules[0].with1}</span>
							<Slider min={-1000} max={1000} setCurrentValue={(value) => {setParticlesRules(prev => [{...prev[0], with1: value}, prev[1], prev[2]])}}
							        currentValue={particlesRules[0].with1}/>
						</div>
						<div>
							<span>Притяжение к <div className='particle__color-icon-small' style={{backgroundColor: particlesRules[1].color}}></div> {particlesRules[0].with2}</span>
							<Slider min={-1000} max={1000} setCurrentValue={(value) => {setParticlesRules(prev => [{...prev[0], with2: value}, prev[1], prev[2]])}}
							        currentValue={particlesRules[0].with2}/>
						</div>
						<div>
							<span>Притяжение к <div className='particle__color-icon-small' style={{backgroundColor: particlesRules[2].color}}></div> {particlesRules[0].with3}</span>
							<Slider min={-1000} max={1000} setCurrentValue={(value) => {setParticlesRules(prev => [{...prev[0], with3: value}, prev[1], prev[2]])}}
							        currentValue={particlesRules[0].with3}/>
						</div>
					</Accordion>


				</div>

			</div>
		</div>
	);
}

export default ParticleSettings;
