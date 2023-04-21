import React from 'react'
import './Style/About.css'
import logo from './Pics/myself.jpg';


function About() {
  return (
    <div id='About' className='about'>
      <div className="about__container">
        <div className="about__leftPart">
          <h1>Avedis Demirjia</h1>
            <br/>
            <span style = {{fontWeight:"900"}}>A Front-End Developer</span>
            <span>Knowledge in <span style = {{fontWeight:"900"}} > Javascript</span> including:</span> 
            
            <span style = {{fontWeight:"900"}}>React, Redux</span>
            <span>Competent in <span style = {{fontWeight:"900"}}> C#</span> and <span style = {{fontWeight:"900"}}> Unity</span> </span>
        </div>

        <div className="about__rightPart">
           <img src={logo} />
        </div>
      </div>
      
        
    </div>
  )
}

export default About