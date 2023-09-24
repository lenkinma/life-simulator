import React from 'react';
import Slider from "./slider";
import '../styles/App.scss';
import {useDispatch, useSelector} from "react-redux";
import {createParticle} from "../store/particleSlice";
function MainSettings({setCount,
	                      particleSize, setParticleSize,
	                      particleSpeed, setParticleSpeed,
	                      forceOfGravity, setForceOfGravity,
												canvasCleaning, setCanvasCleaning,
												borders, setBorders, gameIsOn, setGameIsOn
}) {
	const particles = useSelector(state => state.particleReducer.particles);
	const dispatch = useDispatch();

	function getRndmNumb(a, b) {
		return Math.floor(Math.random() * (b - a + 1)) + a;
	}

	const generateGame = () => {
		setCount(prev => prev + 1);
		if (!gameIsOn) {
			dispatch(createParticle());
			dispatch(createParticle());
			dispatch(createParticle());
			setGameIsOn(true);
		}
	}

	const randomGeneration = () => {
		setParticleSpeed(getRndmNumb(1, 9));
		setParticleSize(getRndmNumb(1, 9));
		setForceOfGravity(getRndmNumb(1, 9));
	}
	return (
		<div className='mainSettings__wrapper'>
			<button className='mainSettings__main-btn' onClick={generateGame}>Сгенерировать</button>
			<button className='mainSettings__main-btn' onClick={randomGeneration}>Рандомайзер</button>
			<div className='slider-wrapper'>
				<span>Размер частиц: {particleSize}</span>
				<Slider min={1} max={9} setCurrentValue={setParticleSize} currentValue={particleSize}/>
			</div>
			<div className='slider-wrapper'>
				<span>Скорость:  {particleSpeed}</span>
				<Slider min={1} max={9} setCurrentValue={setParticleSpeed} currentValue={particleSpeed}/>
			</div>
			<div className='slider-wrapper'>
				<span>Сила притяжения: {forceOfGravity}</span>
				<Slider min={1} max={9} setCurrentValue={setForceOfGravity} currentValue={forceOfGravity}/>
			</div>
			<div>
				<input type="checkbox" className="checkbox" id="cleaning" name="cleaning"
				       value={canvasCleaning} onChange={() => setCanvasCleaning(prev => !prev)}
				       checked={canvasCleaning}
				/>
				<label htmlFor="cleaning">Очищать холст</label>
			</div>
			<div>
				<input type="checkbox" className="checkbox" id="borders" name="borders"
				       value={borders} onChange={() => setBorders(prev => !prev)}
				       checked={borders}
				/>
				<label htmlFor="borders">Ограничить холст</label>
			</div>

		</div>
	);
}

export default MainSettings;
