import React from 'react'
import './Styles/WidgetsP.css';

function WidgetsP({img,desc}) {
  return (
    <div className='widgetsp'>
        <img src={img}/>
        <p>{desc}</p>
    </div>
  )
}

export default WidgetsP