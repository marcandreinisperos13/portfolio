import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    }
    
    return (
        <div className="portfolio">
            <nav className="navbar">
                <div className="logo">
                    <p>Andrei.</p>
                </div>

                <div className="nav-links">
                    <a href="/portfolio/">Home</a>
                    <a href="/portfolio/project">Projects</a>
                    <a href="/portfolio/about">About</a>
                    <a href="/portfolio/contact">Contact</a>
                </div>

                <div className="toggle-btn" onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>

            <nav className={`responsive-navbar ${isOpen ? 'open' : ''}`}>
                <div className="nav-links">
                    <a href="/portfolio/">Home</a>
                    <a href="/portfolio/project">Projects</a>
                    <a href="/portfolio/about">About</a>
                    <a href="/portfolio/contact">Contact</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar