import React from 'react';
import {useNavigate} from "react-router-dom";
import Mainstyle from './Mainstyle.css';
import Stickynote from "./stickynote/stickynote";
import Navs from "../navbar/Navs";
import Cv from "../cv/CV";

const Main = () => {
    const navigate = useNavigate();
    const HandleClick = () => {
        navigate('/stalbek')
    }

    return (
        <div className = 'overall'>
            <Stickynote />
            <div className="background"></div>
            <div className="paper">
                <div className= 'Stalbek' onClick={HandleClick}>
                    <Cv/>
                </div>
            </div>
        </div>
    );
};

export default Main;