import React from 'react';
import personstyl from './personstyl.css'
import Navs from "../navbar/Navs";
import Education from "./education_book/Education";
import Aboutme from "./about/aboutme";


const Person = () => {
    return (
        <div>
            <div className={'overall1'}>
                <Navs/>
                <Aboutme/>
            </div>
            <div className={'overall1 education'}>
                <Education/>

            </div>
        </div>
    );
};

export default Person;