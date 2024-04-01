'use strict'

import React from "react"


// Botão deve ser sempre dinâmico para fazermos composições
const Button = ({ children, handleClick }) => (
    <button className="main-button" onClick={handleClick}>
        {children}
    </button>
)

export default Button