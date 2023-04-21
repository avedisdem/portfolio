import React from 'react'
import './Style/Projects.css'
import { Link } from 'react-router-dom'


function Projects({text, img, link,className,type}) {
  return (
    <div id="Projects" className={className}>
      <span>{text}</span>
      <Link target={type} to={link}>
        <img src = {img}/>
      </Link>
    </div>
  )
}

export default Projects