import React from 'react'
/*import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';*/
import PhoneImg from './Pics/PhoneImg.PNG';
import EmailImg from './Pics/EmailImg.jpg';
import LinkedInImg from './Pics/LinkedInImg.png';
import GitHubImg from './Pics/GitHubImg.png';

import './Style/Contacts.css'
import Infos from './Infos';

function Contacts() {
  return (
    <div id='Contact' className='contacts'>
        <div className="contacts__leftSide">
            <h1>Contact Info</h1>
            <Infos
                imgLink={PhoneImg}
                text={"+374 55577935"}             
                />
            
           <Infos
                imgLink={EmailImg}
                text={"avedis.demirjian1812@gmail.com"}
            />

        </div>
        <div className="contacts__rightSide">
            <Infos
                imgLink={LinkedInImg}
                className ="infosButton"
                link={"https://www.linkedin.com/in/avedis-demirjian-48b59925b/"}
            />
            <Infos
                imgLink={GitHubImg}
                className ="infosButton"
                link={"https://github.com/avedisdem"}
            />
        </div>
    </div>
  )
}

export default Contacts