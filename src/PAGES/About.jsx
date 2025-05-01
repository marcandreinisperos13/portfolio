import React from 'react'

import Icon1 from '../ASSETS/html.png'
import Icon2 from '../ASSETS/css.svg'
import Icon3 from '../ASSETS/js.png'
import Icon4 from '../ASSETS/mysql.png'
import Icon5 from '../ASSETS/reactjs.png'
import Icon6 from '../ASSETS/nodejs.png'

const About = () => {
    
    return (
        <div className="portfolio">
            <section id="about">
                <div className="introduction">
                    <h2>About Me</h2>
                    <p>Hi, I am <b>Marc Andrei Nisperos</b>, BSIT Student at Cavite State University - Tanza Campus and aiming to be a front-end web developer. I'm still inexperience in tech industry and still gaining more knowledge to improve my skills.</p>
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
        </div>
    )
}

export default About