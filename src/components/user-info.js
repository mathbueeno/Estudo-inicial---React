'use strict'

import React from "react"

const UserInfo = () => (
    <div className='user-info'>
            <img src='https://avatars.githubusercontent.com/u/105457300?v=4' />
            <h1><a href='http://github.com/mathbueeno'>Matheus Bueno</a></h1>

            <ul className='repos-info'>
                <li>Repositórios: 28</li>
                <li>Seguidores: 36</li>
                <li>Seguindo: 64</li>
            </ul>
        </div>
)

export default UserInfo