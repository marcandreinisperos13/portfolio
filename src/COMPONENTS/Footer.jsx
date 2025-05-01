import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    
    return (
        <div className="portfolio">
            <footer>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=marcandreinisperos13@gmail.com" target='_blank'>
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                </a>
                <a href="https://www.instagram.com/annndreeei13?igsh=NW44cDVyYzduOWx0" target='_blank'>
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
                <a href="https://www.facebook.com/annndreeei" target='_blank'>
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
                <a href="https://github.com/marcandreinisperos13" target='_blank'>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
            </footer>
        </div>
    )
}

export default Footer