import React from 'react'
import './Styles/WidgetsP.css';

function WidgetsP({img,desc}) {
  return (
    <div className='widgetsp' style={{position:'relative'}} >
        <img src={img}/>
        <p>{desc}</p>
    </div>
  )
}

export default WidgetsP