import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    }
    
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <p>Andrei.</p>
                </div>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#project">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="toggle-btn" onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>

            <nav className={`responsive-navbar ${isOpen ? 'open' : ''}`}>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#project">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar