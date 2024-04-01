'use strict' // o que é ?
import React, { Component } from 'react' // Sempre importar usando o shorthand notation
import Square from './square'
import Button from './button.js'
import LikeButton from './like-button.js'
import SearchButton from './search-button.js'



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


// Eventos
// class App extends Component {
//     render() {
//         return (
//             // Eventos
//             // Utilizar sempre arrow function neste caso
//             // Todos os eventos começam com on 
//             <div className='container' onClick={(e) => {
//                 alert('clicou')
//             }}>
//                 <Square />
//             </div>
//         )
//     }
// }


// Children
// class App extends Component {
//     render() {
//         return (
//             // O React entende que o que está dentro renderiza
//             <div className='container'>
//                 <LikeButton />
//                 <SearchButton />
//             </div>
//         )
//     }
// }



class App extends Component {
    constructor() {
        super()
        this.state = {
            text: 'Matheus'
        }
    }
    render() {
        return (
            //State é o estado da aplicação
            //Stateful - componente que manipula estado
            //Stateless - Não manipulam estados, funções puras não manipulam
            <div className='container' onClick={() => this.setState({
                text: 'Outro texto'
            })}>
                {this.state.text}
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