'use strict'

import React from 'react'

// Função pura - Ela não efetua modificações externas
// Arrow Function - "melhor forma" - cria componente em função pura, código fica muito mais limpo
// Concatenação com backticks - utilizamos o ${} para usar para envolver objetos
// short hand notation - passamos somente o name, lastname - não sendo necessário colocar props

const Title = ({name, lastname}) => (
    <h1>Olá, {`${name} ${lastname}`}!</h1>
)
    
    Title.defaultProps = {

        name: 'Desconhecido',
        lastname: 'Sem sobrenome'
    }



export default Title;
