'use strict' // o que é ?
import React, { Component } from 'react' // Sempre importar usando o shorthand notation
import AppContent from './components/app-content'

// Componente Principal
// o App é Statefull (smartcomponent) - único que será o inteligente
// Informações de estado - somente no app, Container component - serve pra fazer todas as ações. (ex: request)
class App  extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: {
                username: 'Matheus Bueno',
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

    render(){
        return <AppContent
        userinfo = {this.state.userinfo}
        repos = {this.state.repos}
        starred={this.state.starred}
        />
        
    }
}
export default App