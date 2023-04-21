import React from 'react'
import './Style/Infos.css'

function Infos({Icon,text,className,link}) {
 
  return (
    <div className="infos"> 
        <a target='_blank' href={link}><Icon className = {className}/></a>
        <span>{text}</span>
    </div>
  )
}

export default Infos