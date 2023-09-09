import React from 'react';

function Modal({children, setModalIsOpen = false}) {
	return (
		<div className='modal__background'
		     onClick={(e) => {
					 if (setModalIsOpen) {
						 if (e.target.classList.contains('modal__background')) setModalIsOpen(false)
					 }
				 }}>
			<div className="modal__block">
				{children}
			</div>
		</div>
	);
}

export default Modal;
