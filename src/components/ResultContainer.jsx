import React from 'react'
import './result-container.css'
import { v4 as uuidv4 } from 'uuid';
import NameCard from './NameCard';

const ResultContainer = ({ suggested }) => {
    return (
        <div className="result-container">
            {
                suggested.map((word) => { return <NameCard word={word} key={uuidv4()} /> })
            }
        </div>
    )
}

export default ResultContainer