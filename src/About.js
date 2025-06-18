import React from 'react'
import './Style/About.css'
import logo from './Pics/myself.jpg';
import CV from'./Download/Awadis Demirjian Resume.pdf';


function About() {

  
  return (
    <div id='About' className='about'>
      <div className="about__container">
        <div className="about__leftPart">
          <h1>Awadis Demirjian</h1>
            <br/>
            <span style = {{fontWeight:"900"}}>IT Enthusiast | Eager Learner in Networking & Cybersecurity</span>
            <span style = {{fontWeight:"900"}}>Aspiring professional network engineer.</span>
            <span> <span style = {{fontWeight:"900"}}> CCNA </span> certified in networking certificate</span>
        </div>

        <div className="about__rightPart">
           <img src={logo} />
        </div>
      </div>
      <a className='CV'href={CV} download="Awadis Demirjian Resume
" >Download my resume</a>
    </div>
  )
}

export default About
