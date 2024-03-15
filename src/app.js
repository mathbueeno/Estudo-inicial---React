'use strict' // o que é ?
import React, { Component } from 'react' // Sempre importar usando o shorthand notation
import Square from './square'



// Classes
// Utiliza render como função
// Criação de componentes
// class App extends Component{
//     render () {
//         return (
//             // Map retorna um array que podemos utilizar como elemento
//             // Key serve quando React saber qual o elemento renderezado e qual está sendo modificado 
//             // Key deve ser usada diretamente no Array, não no componente square
//             // Não pode haver multiplas keys iguais, pois ele transforma os elementos em 1 só. Deve usar chaves únicas

//             <div className='container'>
//                 {['blue', 'red', 'green'].map((square) => (
//                     <Square key={square} color={square} />
//                 ))}

//             </div>
//         )
//     }
// }

class App extends Component {
    render() {
        return (
            // Eventos
            <div className='container' onClick={function (e) {
                alert('clicou')
            }}>
                <Square />
            </div>
        )
    }
}








// let App = React.createClass({
//     render: function () {
//         return (
//         <div className='container'>
//             {/* {} expressão, dessa forma passa outros tipos de dados  */}
//             <Title name='Matheus'  />
//         </div>
//         )   
//     }
// })

export default App