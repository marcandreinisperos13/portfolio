import React from 'react'

import Home from './PAGES/Home'
import Project from './PAGES/Project'
import About from './PAGES/About'
import Contact from './PAGES/Contact'
import Navbar from './COMPONENTS/Navbar'
import Footer from './COMPONENTS/Footer'

import './App.css';
import './CSS/Components.css';
import './CSS/Pages.css';

const App = () => {
    
    return (
        <div className="portfolio">
            <Navbar />

            <Home />
            <Project />
            <About />
            <Contact />

            <Footer />
        </div>
    )
}

export default App