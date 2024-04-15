'use strict' // o que é ?
import React, { Component } from 'react' // Sempre importar usando o shorthand notation
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'


const App = () => (

    // Quebrando em componentes

    <div className='app'>
    
        {/* Barra de pesquisa */}
        < Search />

        {/* Informações do Usuário */}
        < UserInfo/>

        {/* Ações dos Botões     */}
        <Actions/>

        {/* Repositórios */}
        <Repos 
        className='repos' 
        title='Repositórios:'
        repos = {[{
            name: 'nome do repositório',
            link: '#'
        }]}/>  


        <Repos 
        className='starred' 
        title='Favoritos:'
        repos = {[{
            name: 'Nome do repositório',
            link: '#'
        }]}/>     
    </div>
)

export default App