import React, { useEffect } from 'react'
import './searchBox.css'

const SearchBox = (props) => {
    const { setInputHandler } = props

    const onChangeHandler = (e) => {
        setTimeout(() => {
            setInputHandler(e.target.value);
        }, 1000);
    }

    return (
        <input type="text" onChange={onChangeHandler} placeholder='Type here' />
    )
}

export default SearchBox