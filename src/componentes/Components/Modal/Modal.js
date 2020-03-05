import React from 'react'

import './Modal.css'

function Modal(props) {
    if (!props.show) {
        return null;
    }
    return (
        <div className="modal-container">
            <div className="modal">
                {props.children}
            </div>
            <div className="btnFechar" onClick={props.closeModal}>X</div>
        </div>
    )
}

export default Modal
