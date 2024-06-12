import React from 'react'
import './Style/About.css'
import logo from './Pics/myself.jpg';
import CV from'./Download/awadis-demirjian_CV.pdf';


function About() {

  
  return (
    <div id='About' className='about'>
      <div className="about__container">
        <div className="about__leftPart">
          <h1>Awadis Demirjian</h1>
            <br/>
            <span style = {{fontWeight:"900"}}>Interseted In Network Engineering</span>
            <span>Planning to take the <spanstyle = {{fontWeight:"900"}}> CCNA </span>certificate</span>
            <span>Knowledge in <span style = {{fontWeight:"900"}} > Javascript</span> including:</span> 
            <span style = {{fontWeight:"900"}}>React, Redux</span>
            <span>Competent in <span style = {{fontWeight:"900"}}> C#</span> and <span style = {{fontWeight:"900"}}> Unity</span> </span>
        </div>

        <div className="about__rightPart">
           <img src={logo} />
        </div>
      </div>
      <a className='CV'href={CV} download="awadis-demirjian_CV
" >Download my CV</a>
    </div>
  )
}

export default About
