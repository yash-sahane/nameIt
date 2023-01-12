import React from 'react'
import './header.css'

const Header = ({ isTyping }) => {
    return (
        <div className='header-div'>
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt=""
                className={`${isTyping ? 'header-img-contrasted' : 'header-img-expanded'}`} />
            <h1 className={`header-heading ${isTyping ? 'header-heading-contrasted' : 'header-heading-expanded'}`}>Name It!</h1>
        </div>
    )
}

export default Header