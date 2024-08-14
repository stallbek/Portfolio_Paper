import React from 'react';
import style from './style.css'
import {useNavigate} from "react-router-dom";

const Navs = () => {
    const navigate = useNavigate();
    const HandleClick = () => {
        navigate('/')
    }

    return (
        <div>
            <div className="navbox shadow" onClick={HandleClick}>
                <div className="circle"></div>
                <p>
                    Back
                </p>
            </div>
            <div className="navbox shadow">
                <div className="circle"></div>
                <p>
                    About me
                </p>
            </div>
            <div className="navbox shadow">
                <div className="circle"></div>
                <p>
                    Education
                </p>
            </div>
            <div className="navbox shadow">
                <div className="circle"></div>
                <p>
                    Projects
                </p>
            </div>
            <div className="navbox shadow">
                <div className="circle"></div>
                <p>
                    Skills
                </p>
            </div>
        </div>
    );
};

export default Navs;