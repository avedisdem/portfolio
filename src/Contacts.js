import React from 'react'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './Style/Contacts.css'
import Infos from './Infos';

function Contacts() {
  return (
    <div id='Contact' className='contacts'>
        <div className="contacts__leftSide">
            <h1>Contact Info</h1>
            <Infos
                Icon={PhoneEnabledIcon}
                text={"+1 818 425 8449"}             
                />
            
           <Infos
                Icon={EmailIcon}
                text={"av.demirjian@gmail.com"}
            />

        </div>
        <div className="contacts__rightSide">
            <Infos
                Icon={LinkedInIcon}
                className ="infosButton"
                link={"https://www.linkedin.com/in/awadis-demirjian/"}
            />
            <Infos
                Icon={GitHubIcon}
                className ="infosButton"
                link={"https://github.com/avedisdem"}
            />
        </div>
    </div>
  )
}

export default Contacts
