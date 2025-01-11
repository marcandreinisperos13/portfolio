import React, { useState } from 'react'

import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import Kaoruko9 from './ASSETS/kaoruko9.png'
import Kaoruko13 from './ASSETS/kaoruko13.jpg'

import Icon1 from './ASSETS/html.png'
import Icon2 from './ASSETS/css.svg'
import Icon3 from './ASSETS/js.png'
import Icon4 from './ASSETS/mysql.png'
import Icon5 from './ASSETS/reactjs.png'
import Icon6 from './ASSETS/nodejs.png'

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    }
    
    return (
        <div className="portfolio">
            <nav className="navbar">
                <div className="logo">
                    <p>Portfolio.</p>
                </div>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#project">Project</a>
                    <a href="#aboutme">About Me</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="toggle-btn" onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>

            <nav className={`responsive-navbar ${isOpen ? 'open' : ''}`}>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#project">Project</a>
                    <a href="#aboutme">About Me</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <header id="home">
                <div className="txt-block">
                    <h2>Hi, I am</h2>
                    <h1>Marc Andrei Nisperos</h1>
                    <p>Future Frontend Web Developer</p>
                    <a href="#contact">Contact Me</a>
                </div>

                <div className="img-block">
                    <img src={Kaoruko9} alt="" />
                </div>
            </header>

            <section id="project">
                <h2>Project</h2>

                <div className="card-block">
                    <div className="card">
                        <div className="img-block">
                            <img src={Kaoruko13} alt="" />
                        </div>

                        <div className="txt-block">
                            <div className="txt">
                                <p className="project-title">Project Title</p>
                                <p className="project-description">Project Description</p>
                            </div>
                            <a href="">See More <FontAwesomeIcon icon={faChevronRight} /></a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-block">
                            <img src={Kaoruko13} alt="" />
                        </div>

                        <div className="txt-block">
                            <div className="txt">
                                <p className="project-title">Project Title</p>
                                <p className="project-description">Project Description</p>
                            </div>
                            <a href="">See More <FontAwesomeIcon icon={faChevronRight} /></a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-block">
                            <img src={Kaoruko13} alt="" />
                        </div>

                        <div className="txt-block">
                            <div className="txt">
                                <p className="project-title">Project Title</p>
                                <p className="project-description">Project Description</p>
                            </div>
                            <a href="">See More <FontAwesomeIcon icon={faChevronRight} /></a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="img-block">
                            <img src={Kaoruko13} alt="" />
                        </div>

                        <div className="txt-block">
                            <div className="txt">
                                <p className="project-title">Project Title</p>
                                <p className="project-description">Project Description</p>
                            </div>
                            <a href="">See More <FontAwesomeIcon icon={faChevronRight} /></a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="aboutme">
                <div className="introduction">
                    <h2>About Me</h2>
                    <p>Hi, I am <b>Marc Andrei Nisperos</b>, BSIT Student at Cavite State University - Tanza Campus and aiming to be a frontend developer. I'm stil inexperience in tech industry and still gaining more knowledge o improve my skills.</p>
                </div>

                <div className="skill-experience">
                    <div className="skills">
                        <h2>Skills</h2>

                        <div className="card-block">
                            <div className="card">
                                <img src={Icon1} alt="" />

                                <p>HTML</p>
                            </div>
                            <div className="card">
                                <img src={Icon2} alt="" />

                                <p>CSS</p>
                            </div>
                            <div className="card">
                                <img src={Icon3} alt="" />

                                <p>Javascript</p>
                            </div>
                            <div className="card">
                                <img src={Icon4} alt="" />

                                <p>MySQL</p>
                            </div>
                            <div className="card">
                                <img src={Icon5} alt="" />

                                <p>React JS</p>
                            </div>
                            <div className="card">
                                <img src={Icon6} alt="" />

                                <p>Node JS</p>
                            </div>
                        </div>
                    </div>

                    <div className="experience">
                        <h2>Experience</h2>

                        <div className="txt-block">
                            <div className="txt">
                                <p className="position">Frontend Web Developer</p>
                                <p>External and Business Affairs Website for Capstone</p>
                                <p>- Developed responsive website using ReactJS and CSS</p>
                                <p>- Developed functional order form that stores the users data to the database using NodeJS, ExpressJS and MySQL                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="educational-background">
                    <h2>Education Background</h2>

                    <div className="card-block">
                        <div className="card">
                            <h3>Elementary</h3>
                            <p className="school-name">
                                School Name: <b>Maricaban Elementary School</b>
                            </p>
                            <p className="school-year">
                                School Year: <b>Grade 1 to Grade 3</b>
                            </p>
                            <p className="year-attended">
                                Year Attended: <b>2009 to 2012</b>
                            </p>
                        </div>
                        <div className="card">
                            <h3>Elementary</h3>
                            <p className="school-name">
                                School Name: <b>Malagasang II Elementary School</b>
                            </p>
                            <p className="school-year">
                                School Year: <b>Grade 4 to Grade 6</b>
                            </p>
                            <p className="year-attended">
                                Year Attended: <b>2012 to 2015</b>
                            </p>
                        </div>
                        <div className="card">
                            <h3>Junior Highschool</h3>
                            <p className="school-name">
                                School Name: <b>Imus National High School - Greengate Annex</b>
                            </p>
                            <p className="school-year">
                                School Year: <b>Grade 7 to Grade 10</b>
                            </p>
                            <p className="year-attended">
                                Year Attended: <b>2015 to 2019</b>
                            </p>
                        </div>
                        <div className="card">
                            <h3>Senior Highschool</h3>
                            <p className="school-name">
                                School Name: <b>Unida Christian Colleges</b>
                            </p>
                            <p className="school-year">
                                School Year: <b>Grade 11 to Grade 12</b>
                            </p>
                            <p className="year-attended">
                                Year Attended: <b>2019 to 2021</b>
                            </p>
                        </div>
                        <div className="card">
                            <h3>College</h3>
                            <p className="school-name">
                                School Name: <b>Cavite State University - Tanza Campus</b>
                            </p>
                            <p className="school-year">
                                School Year: <b>BSIT 1st Year to BSIT 4th Year</b>
                            </p>
                            <p className="year-attended">
                                Year Attended: <b>2021 to Current Year</b>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <h2>Contact Me!</h2>
                <p>Email Address: <a href="mailto:marcandreinisperos13@gmail.com" target='_blank'>marcandreinisperos13@gmail.com</a></p>
                <p>Facebook: <a href="https://www.facebook.com/annndreeei" target='_blank'>annndreeei</a></p>
                <p>TikTok: <a href="https://www.tiktok.com/@asdjkl12347890" target='_blank'>@asdjkl12347890</a></p>
            </section>
        </div>
    )
}

export default App