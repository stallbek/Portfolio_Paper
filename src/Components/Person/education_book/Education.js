import React from 'react';
import education_style from './education_style.css'
import cover from './asset/university.webp'

const Education = () => {
    return (
        <div>
            <div id="handmaid" className="book">
                <div className="gloss"></div>
                <img src={cover} alt="" className={'cover'}/>
                <div className="description">
                    <h1>Education</h1>
                    <hr/>
                    <p>
                        McGill University
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Education;