import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import NoImage from '../ASSETS/no-image.png'

const Project = () => {
    return (
        <div className="portfolio">
            <section id="project">
                <h2>Project</h2>

                <div className="card-block">
                    <div className="card">
                        <div className="img-block">
                            <img src={NoImage} alt="" />
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
                            <img src={NoImage} alt="" />
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
                            <img src={NoImage} alt="" />
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
                            <img src={NoImage} alt="" />
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
        </div>
    )
}

export default Project