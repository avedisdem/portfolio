import React from 'react'
import './Style/Infos.css'

function Infos({imgLink,text,className,link}) {
 
  return (
    <div className="infos"> 
        <a target='_blank' href={link}><img src={imgLink} className = {className} /></a>
        <span>{text}</span>
    </div>
  )
}

export default Infos