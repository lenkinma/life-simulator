import React, {useEffect, useState} from 'react';
import Accordion from "./accordion";
import Slider from "./slider";
import Modal from "./modal";
import {ColorPicker, useColor} from "react-color-palette";

function Particle({particlesRules, setParticlesRules, particle}) {
	const [color, setColor] = useColor(particle.color);
	const [colorPickerIsOpen, setColorPickerIsOpen] = useState(false);

	useEffect(() => {
		// setParticlesRules(prev => [...prev.map((e, i) => {
		// 	if (e.id === 0) return {...e, color: color.hex}
		// 	else return e;
		// })])
		particle.color = color.hex;
	}, [colorPickerIsOpen]);

	useEffect(() => {
		setParticlesRules(prev => [...prev.map((e, i) => {
			if (e.id === particle.id) return particle
			else return e;
		})])
		console.log(particlesRules);
	}, [particle]);


	return (
		<div>
			<div className='particle__wrapper'>
				<div>
					<input type="checkbox" className="checkbox" id="particles1" name="particles1"
					       value={particle.on}
					       // onChange={() => setParticlesRules(prev => [...prev.map((e, i) => {
						     //   if (e.id === 0) return {...e, on: !e.on}
						     //   else return e;
					       // })])}
									onChange={() => particle.on = !particle.on}
						     checked={particle.on}
					/>
					<label htmlFor="particles1">Частицы 1</label>
				</div>
				<div className='particle__main-settings-wrapper'>
					<div className='particle__color-random-block'>
						<div onClick={() => setColorPickerIsOpen(true)}
						     className='particle__color-icon'
						     style={{backgroundColor: particle.color}}>
						</div>
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
			aaaa
			{colorPickerIsOpen &&
				<Modal >
					<ColorPicker color={color} onChange={setColor} />
					<button onClick={() => setColorPickerIsOpen(!colorPickerIsOpen)} className='color-picker__btn'>Выбрать</button>
				</Modal>
			}
		</div>
	);
}

export default Particle;
