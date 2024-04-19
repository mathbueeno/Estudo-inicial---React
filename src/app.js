'use strict' // o que é ?
import React, { Component } from 'react' // Sempre importar usando o shorthand notation
import AppContent from './components/app-content'

// Componente Principal
// o App é Statefull (smartcomponent) - único que será o inteligente
// Informações de estado - somente no app, Container component - serve pra fazer todas as ações. (ex: request)
// Importante criar primeiro o constructor para depois ir quebrando a aplicação
class App  extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: {
                username: 'Matheus Bueno',
                photo: 'https://avatars.githubusercontent.com/u/105457300?v=4',
                login:'mathbueeno',
                repos: 28,
                followers: 36,
                following: 64
            },
            repos: [{
                name: 'Repo',
                link: '#'
            }],
            starred: [{
                name: 'Repo',
                link: '#'
            }]
        }
    }

    handleSearch (e){
        (e) => {
            const value = e.target.value
            const keyCode = e.which || e.keyCode
            const enter = 13
            
            if (keyCode === enter){
                ajax().get(`https://api.github.com/users/${value}`)
                .then((result) => {
                    console.log(result)
                })
            }
            
        }
    }

    // Segundo ponto é criar o this.state para o content
    render(){
        return <AppContent
        userinfo = {this.state.userinfo}
        repos = {this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        />
        
    }
}
export default App