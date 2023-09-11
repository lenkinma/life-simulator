import React, {useState} from 'react';
import Accordion from "./accordion";
import Slider from "./slider";
import Modal from "./modal";
import {ColorPicker, useColor} from "react-color-palette";
import {useDispatch, useSelector} from "react-redux";
import {changeAmount, changeColor, changeInteraction, changeStatus, deleteParticle} from "../store/particleSlice";
import {AiOutlineClose} from "react-icons/ai";

function Particle({particle}) {
	const [color, setColor] = useColor(particle.color);
	const [colorPickerIsOpen, setColorPickerIsOpen] = useState(false);
	const dispatch = useDispatch();
	const particles = useSelector(state => state.particleReducer.particles);

	return (
		<div>
			<div className='particle__wrapper'>
				<div className='particle__name-block'>
					<input type="checkbox" className="checkbox" id={`particle${particle.id}`} name="particles1"
					       value={particle.on}
					       onChange={() => dispatch(changeStatus({id: particle.id}))}
						     checked={particle.on}
					/>
					<label htmlFor={`particle${particle.id}`}>Частицы {particle.id + 1}</label>
					<AiOutlineClose className='particle__delete-btn' onClick={() => {dispatch(deleteParticle({id: particle.id})); }}/>
				</div>
				<div className='particle__main-settings-wrapper'>
					<div className='particle__color-random-block'>
						<div onClick={() => setColorPickerIsOpen(true)}
						     className='particle__color-icon'
						     style={{backgroundColor: particle.color}}>
						</div>
						<button className='particle__settings-btn'>Рандом</button>
					</div>

					<Accordion particles={particles}>
						<div>
							<span>Количество частиц:  {particle.amount}</span>
							<Slider min={0} max={1000} setCurrentValue={(value) => {dispatch(changeAmount({id: particle.id, amount: value}))}}
							        currentValue={particle.amount}/>
						</div>
						{particle.interaction.map(inter =>
							<div>
								<span>Притяжение к <div
									className='particle__color-icon-small'
									style={{backgroundColor: particles.find(e => e.id === inter.id).color}}></div>  : {inter.amount}</span>
											<Slider min={-1000} max={1000} setCurrentValue={(value) => {dispatch(changeInteraction({id: particle.id, interactionId: inter.id, amount: value}))}}
											        currentValue={inter.amount}/>
							</div>
						)}
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
