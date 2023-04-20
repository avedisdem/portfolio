import React from 'react'
import './Style/Header.css'


function Header() {
  return (
    <div className='header'>
        <div className="header__left"></div>
        <div className="header__right">
            <a href='#About'>About</a>
            <a href='#Skills'>Skills</a>
            <a href='#Projects'>Projects</a>
            <a href='#Contact'>Contact</a>
        </div>
    </div>
  )
}

export default Header