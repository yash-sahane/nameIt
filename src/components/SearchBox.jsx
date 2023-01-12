import React from 'react'
import './searchBox.css'

const SearchBox = (props) => {
    const { setInputHandler } = props

    const onChangeHandler = (e) => {
        setInputHandler(e.target.value);
    }

    return (
        <input type="text" onChange={onChangeHandler} placeholder='Type here' />
    )
}

export default SearchBox