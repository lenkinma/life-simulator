import React, {useState} from 'react';
import ReactSlider from "react-slider";
import '../styles/App.scss';
function Slider({min, max, setCurrentValue, currentValue}) {

	return (
		<div>
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
