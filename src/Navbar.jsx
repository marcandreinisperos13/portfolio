import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };
  return (
    <div className='navbar'>
	    <button onClick={toggleTheme} className='toggle-theme' ><FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className='icon' /></button>
    </div>
  )
}

export default Navbar