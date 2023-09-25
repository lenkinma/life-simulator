import React from 'react';

function Modal({children, setModalIsOpen = false}) {
	return (
		<div className='modal__background'
		     onClick={() => {
					 if (setModalIsOpen) {
						 setModalIsOpen(false)
					 }
				 }}>
			<div className="modal__block">
				{children}
			</div>
		</div>
	);
}

export default Modal;
