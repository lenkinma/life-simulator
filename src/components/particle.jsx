import React, {useEffect, useState} from 'react';
import Accordion from "./accordion";
import Slider from "./slider";
import Modal from "./modal";
import {ColorPicker, useColor} from "react-color-palette";
import {useDispatch} from "react-redux";
import {changeAmount, changeColor, changeInteraction, changeStatus} from "../store/particleSlice";

function Particle({particle}) {
	const [color, setColor] = useColor(particle.color);
	const [colorPickerIsOpen, setColorPickerIsOpen] = useState(false);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(changeColor({id: particle.id, color: particle.color}));
	// }, [colorPickerIsOpen]);


	return (
		<div>
			<div className='particle__wrapper'>
				<div>
					<input type="checkbox" className="checkbox" id={`particle${particle.id}`} name="particles1"
					       value={particle.on}
					       onChange={() => dispatch(changeStatus({id: particle.id}))}
						     checked={particle.on}
					/>
					<label htmlFor={`particle${particle.id}`}>Частицы {particle.id + 1}</label>
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
							<span>Количество частиц:  {particle.amount}</span>
							<Slider min={0} max={1000} setCurrentValue={(value) => {dispatch(changeAmount({id: particle.id, amount: value}))}}
							        currentValue={particle.amount}/>
						</div>
						<div>
							<span>Притяжение к <div className='particle__color-icon-small' style={{backgroundColor: particle.color}}></div> {particle.with1}</span>
							<Slider min={-1000} max={1000} setCurrentValue={(value) => {dispatch(changeInteraction({id: particle.id, with1: value}))}}
							        currentValue={particle.with1}/>
						</div>
						{/*<div>*/}
						{/*	<span>Притяжение к <div className='particle__color-icon-small' style={{backgroundColor: particlesRules[1].color}}></div> {particlesRules[0].with2}</span>*/}
						{/*	<Slider min={-1000} max={1000} setCurrentValue={(value) => {setParticlesRules(prev => [{...prev[0], with2: value}, prev[1], prev[2]])}}*/}
						{/*	        currentValue={particlesRules[0].with2}/>*/}
						{/*</div>*/}
						{/*<div>*/}
						{/*	<span>Притяжение к <div className='particle__color-icon-small' style={{backgroundColor: particlesRules[2].color}}></div> {particlesRules[0].with3}</span>*/}
						{/*	<Slider min={-1000} max={1000} setCurrentValue={(value) => {setParticlesRules(prev => [{...prev[0], with3: value}, prev[1], prev[2]])}}*/}
						{/*	        currentValue={particlesRules[0].with3}/>*/}
						{/*</div>*/}
					</Accordion>

				</div>
			</div>
			{colorPickerIsOpen &&
				<Modal >
					<ColorPicker color={color} onChange={setColor} />
					<button onClick={() => {
						setColorPickerIsOpen(!colorPickerIsOpen);
						dispatch(changeColor({id: particle.id, color: color.hex}));
					}}
					        className='color-picker__btn'>Выбрать</button>
				</Modal>
			}
		</div>
	);
}

export default Particle;
