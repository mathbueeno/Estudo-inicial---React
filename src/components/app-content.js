'use strict'
import React, {PropTypes} from "react"
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({userinfo, repos, starred, handleSearch}) => (
    // Quebrando em componentes

    <div className='app'>
    
    {/* Barra de pesquisa */}
        < Search handleSearch={handleSearch}/>

    {/* Informações do Usuário */}
    {/* Curto Circuito do JS */}
        {!!userinfo && < UserInfo userinfo={userinfo}/>}

    {/* Ações dos Botões     */}
        {!!userinfo && <Actions />}

    {/* Repositórios */}
        {!!repos.length &&
        <Repos 
            className='repos' 
            title='Repositórios:'
            repos = {repos}
        />
    }  
        {!!starred.length &&
        <Repos 
            className='starred' 
            title='Favoritos:'
            repos = {starred}
        />
    }     
    </div>

)
AppContent.propTypes = {
    userinfo:PropTypes.object, 
    repos:PropTypes.array.isRequired,
    starred:PropTypes.array.isRequired
}
export default AppContent