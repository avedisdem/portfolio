import React from 'react'
import { Link } from 'react-router-dom';
import './Styles/HeaderP.css';

function HeaderP() {
  return (
    <div className='headerp'>
        <div className='headerp__left'>
            <p className='headerp__left-p'>Products</p>
            <p className='headerp__left-p'>Community</p>
            <p className='headerp__left-p'>What's new</p>
            <Link style={{textDecoration:'none'}} to="/" >
                <p className='headerp__left-p'>Home</p>
            </Link>
        </div>
    </div>
  )
}

export default HeaderP