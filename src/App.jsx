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
        <div className="App">
            <Navbar />

            <Home />
            <Project />
            <About />
            <Contact />

            {/* <BrowserRouter>
                <Routes>
				    <Route path='/portfolio/' element={<Home />}></Route>
				    <Route path='/portfolio/project/' element={<Project />}></Route>
				    <Route path='/portfolio/about/' element={<About />}></Route>
				    <Route path='/portfolio/contact/' element={<Contact />}></Route>
                </Routes>
            </BrowserRouter> */}

            <Footer />
        </div>
    )
}

export default App