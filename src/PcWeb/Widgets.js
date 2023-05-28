import React from 'react'
import './Styles/Widgets.css';

function Widgets({img,desc}) {
  return (
    <div className='widgets'>
        <img src={img}/>
        <p>{desc}</p>
    </div>
  )
}

export default Widgets