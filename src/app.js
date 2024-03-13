'use strict' // o que é ?
import React from 'react'
import Title from './title'

let App = React.createClass({
    render: function () {
        return (
        <div className='container'>
            <Title name='Matheus Bueno' />
            <label htmlFor='input'>Input</label>
            <input type='text' id='input' aria-hidden={true}/>
        </div>
        )   
    }
})

export default App