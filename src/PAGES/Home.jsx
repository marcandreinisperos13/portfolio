import React from 'react'

import Me from '../ASSETS/me.png'

const Home = () => {
    return (
        <div className="portfolio">
            <header id="home">
                <div className="txt-block">
                    <h2>Hi, I am</h2>
                    <h1>Marc Andrei Nisperos</h1>
                    <p>Aspiring Front-end Web Developer</p>
                    <a href="#contact">Contact Me</a>
                </div>

                <div className="img-block">
                    <img src={Me} alt="Me" />
                </div>
            </header>
        </div>
    )
}

export default Home