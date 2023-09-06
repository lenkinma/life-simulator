import React, {useState} from 'react';
import ReactSlider from "react-slider";
import '../styles/App.scss';
function Slider({min, max, setCurrentValue, currentValue, title}) {
	// const [currentValue, setCurrentValue] = useState(1);

	return (
		<div className='slider-wrapper'>
			<label id="slider-label">{title} {currentValue}</label>
			<ReactSlider
				ariaLabelledby="slider-label"
				className="horizontal-slider"
				min={min}
				max={max}
				thumbClassName="slider-thumb"
				trackClassName="slider-track"
				value={currentValue}
				onChange={(value) => setCurrentValue(value)}
			/>
		</div>
	);
}

export default Slider;
