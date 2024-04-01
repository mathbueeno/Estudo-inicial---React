'use strict'
import React from "react";
import Button from './button.js'

const SearchButton = () => (
    <Button handleClick={() => alert('search')} >Buscar</Button>
)

export default SearchButton