import React from 'react'

import './Select.css'

function Select({ FunSelect, id, options, name }) {
    return (
        <div className="flex">
            <span style={{marginRight: "12px"}} >{name}</span>
            <select className="select" onClick={() => FunSelect(id)} id={id}>
                {options.map( (option) => <option key={option.id} value={option.id}>{option.nome}</option> )}
                
            </select>
        </div>
    )
}

export default Select
