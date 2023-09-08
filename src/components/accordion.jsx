import React, {useEffect, useRef, useState} from 'react';
import {BsChevronRight} from "react-icons/bs";

function Accordion({children}) {
	const [isOpen, setIsOpen] = useState(false);
	const [heightEl, setHeightEl] = useState();

	const refHeight = useRef();

	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`)
	}, []);

	return (
		<div>
			<button onClick={() => setIsOpen(prev => !prev)}>
				<BsChevronRight className={isOpen ? 'accordion__arrow-active' : 'accordion__arrow'}/>Настройка
			</button>
			<div className={isOpen ? 'accordion accordion__open' : 'accordion'} style={{height: isOpen ? `${heightEl}` : '0px'}} ref={refHeight}>
				{children}
			</div>

		</div>
	);
}

export default Accordion;
