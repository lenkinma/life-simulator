import React from 'react';
import Slider from "./slider";
import '../styles/App.scss';
function MainSettings({setCount,
	                      particleSize, setParticleSize,
	                      particleSpeed, setParticleSpeed,
	                      forceOfGravity, setForceOfGravity,
												canvasCleaning, setCanvasCleaning,
}) {
	return (
		<div className='mainSettings__wrapper'>
			<button className='mainSettings__main-btn' onClick={() => setCount(prev => prev + 1)}>Сгенерировать</button>
			<button className='mainSettings__main-btn' onClick={() => setCount(prev => prev + 1)}>Рандомайзер</button>
			<Slider min={1} max={9} setCurrentValue={setParticleSize} currentValue={particleSize} title='Размер частиц: '/>
			<Slider min={1} max={9} setCurrentValue={setParticleSpeed} currentValue={particleSpeed} title='Скорость: '/>
			<Slider min={1} max={9} setCurrentValue={setForceOfGravity} currentValue={forceOfGravity} title='Сила притяжения: '/>
			<div>
				<input type="checkbox" className="checkbox" id="happy" name="happy"
				       value={canvasCleaning} onChange={() => setCanvasCleaning(prev => !prev)}
				       checked={canvasCleaning}
				/>
				<label htmlFor="happy">Очищать холст</label>
			</div>

		</div>
	);
}

export default MainSettings;
