import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt style={{ height: '150px', width: '150px' }}>
                <div id='logo' className='br2 shadow-2' style={{ height: '150px', width: '150px' }} >
                    <h1 className='pa3'><img style={{paddingTop: '5px'}} src={brain} alt="logo" /></h1>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;