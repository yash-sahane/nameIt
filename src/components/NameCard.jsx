import React from 'react'
import './name-card.css'

const NameCard = ({ word }) => {
    const nameCheapURL = 'https://www.namecheap.com/domains/registration/results/?domain=';

    return (
        <a href={`${nameCheapURL}${word}`}>{word}</a>
    )
}

export default NameCard