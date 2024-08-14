import React from 'react';
import cv_style from './cv_style.css';

const Cv = () => {
    return (
        <div className={'CV_all'}>
            <div className={'layout'}>
                <div className={'my_contacts'}>
                    <h3>
                        Stalbek Ulanbek uulu
                    </h3>
                    <div className={'hard_contacts'}>
                        <p>
                            stalbek.ulanbekuulu@mail.mcgill.ca |
                        </p>
                        <p>linkedin.com/in/stalbek-ulanbek-uulu/ |</p>
                        <p>github.com/stallbek |</p>
                    </div>
                </div>
                <div className={'chapter'}>
                    <h4>
                        Education
                    </h4>
                    <div className={'subchapter'}>
                        <div className={'place'}>
                            <p className={'the_one'}>
                                McGill University
                            </p>
                            <p className={'the_one_p'}>
                                Montreal, QC, Canada.
                            </p>
                        </div>
                        <div className={'place'}>
                            <p>
                                Bachelor of Science in Software Engineering
                            </p>
                            <p>
                                Graduation date: December 2026
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'chapter'}>
                    <h4>
                        Projects
                    </h4>
                    <div className={'subchapter'}>
                        <div className="projects">
                            <p className={'project_title'}>
                                Project portfolio /
                                <span className={'project_technologies'}>
                                JavaScript, HTML, CSS, react.js
                            </span>
                            </p>
                            <ul className={'description_cv'}>
                                <li className={'bullets'}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloremque minima provident, sint suscipit veritatis!
                                </li>
                                <li className={'bullets'}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, quis.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cv;