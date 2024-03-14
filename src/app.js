'use strict' // o que é ?
import React from 'react'
import Title from './title'
import Pure from './title'

let App = React.createClass({
    render: function () {
        return (
        <div className='container'>
            {/* {} expressão, dessa forma passa outros tipos de dados  */}
            <Title name='Matheus'  />
        </div>
        )   
    }
})

export default App