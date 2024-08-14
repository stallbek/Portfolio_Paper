import React from 'react';
import stickynotestyle from './stickynote_style.css'
import profile from './assets/profile.jpg'
const Stickynote = () => {
    return (
        <div>
            <div className="paper1 pink">
                <div className="tape-section"></div>
                <p>Click -></p>
                <div className="tape-section"></div>
            </div>
            <div className={'img_sticky picture'}>
                <div className={'tape-section'}>
                    <img src={profile} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Stickynote;